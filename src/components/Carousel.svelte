<script>
	export let children = [];
	export let elements = [];
	let initialized = false;
	import { onMount, beforeUpdate, tick } from 'svelte';
	let elementNodes = [];
	import { fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { quintInOut } from 'svelte/easing'
	import { tweened } from 'svelte/motion';
	import '../scripts/debounce.js';
    export let identifier;
	export let onSelect = () => {};
	export let margin = 20;
    export let arrowSize = 26;

	let animate = true;
	let sliderContainerWidth = 500; 
	let sliderContainerNode;
	let stageNode;
	let stageNodeWidth = 500;
    let arrowNode;

	let isMobile = window.innerWidth < 750;

	$: if(sliderContainerNode) {
		sliderContainerWidth = sliderContainerNode.scrollWidth;
	}
	$: if(stageNode) {
		stageNodeWidth = stageNode.scrollWidth;
	}

	let baseWidth = 70;
	let elementWidth = 120;
	let elementHeight = 150;
	let imageFromTopToCenter = 75;
	let arrowFromTopToCenter = 75;

	let animDuration = 300;
	let currentConfig = {
		easing: quintInOut, duration: animDuration
	}

    let holder;
    let elementsSliced = [];
    export let elementSelected;
    function selectionHandler(element) {
        elementSelected = element;
		onSelect(element);
    }

	onMount(x => {
        elements = holder && holder.children ? Array.from(holder.children).map((c, i) => ({el: c.outerHTML, id: i, identifier: c.getAttribute(`data-${identifier}`) })) : [];
		initialized = true;
		elementsSliced = elements.length > itemsToShow ? elements.slice( -1 * itemsToShow).map(e => ({...e, id: e.id + 'pclone'})).concat(elements.concat(elements.slice(0, itemsToShow).map(e => ({...e, id: e.id + 'clone'})))) : elements;
		elementHeight = elementNodes[0] ? Math.max.apply(null, elementNodes.map(e => e.scrollHeight)) : elementHeight;
	})
	

	let itemsToShow = 3;
    export let items;
	let itemsToShowOverwrite = items || false;
	let currentOffset = itemsToShow;

	$: if(elementWidth && sliderContainerWidth) {
		itemsToShow = itemsToShowOverwrite || Math.min(Math.max(Math.floor((sliderContainerWidth - elementWidth) / baseWidth) || 1, 2), 4);
		const leftClones = elements.map(e => ({...e, id: e.id + 'pclone'}));
		const rightClones = elements.map(e => ({...e, id: e.id + 'clone'}));
		
		elementsSliced = leftClones.concat(elements.concat(rightClones));
		
		currentOffset = itemsToShow;
	}

	$: elementWidth = elementNodes[0] ? elementNodes[0].scrollWidth : elementWidth;
	$: elementHeight = elementNodes[0] ? Math.max.apply(null, elementNodes.map(e => e.scrollHeight)) : elementHeight;

	function getSizesAfterImagesLoaded(img) {
		imageFromTopToCenter = (img.offsetTop + img.clientHeight / 2);
		elementWidth = elementNodes[0] ? elementNodes[0].scrollWidth : elementWidth;
		
		sliderContainerWidth = sliderContainerNode ? sliderContainerNode.scrollWidth : sliderContainerWidth;
		stageNodeWidth = stageNode ? stageNode.clientWidth : stageNodeWidth;
		itemsToShow = itemsToShowOverwrite || Math.min(Math.max(Math.floor((sliderContainerWidth || 1) / (baseWidth || 1)) || 1, 2), 4);
		
		elementHeight = elementNodes[0] ? Math.max.apply(null, elementNodes.map(e => e.scrollHeight)) : elementHeight;
	}
	$: if(elementNodes[0]) {
		let img = elementNodes[0].querySelector('img') || elementNodes[0].querySelector('*[style*=background-image]');

        if(img) {
            if(img.tagName == 'IMG') {
                if(img.complete) {
					getSizesAfterImagesLoaded(img);
				} else {
                    img.onload = () => getSizesAfterImagesLoaded(img);
                }
            } else {
				getSizesAfterImagesLoaded(img);
            }
        }
	}
    $: if(arrowNode && arrowNode.offsetTop < 120) {
        arrowFromTopToCenter = ((arrowNode.offsetTop - parseFloat(arrowNode.style.top)) + arrowNode.clientHeight / 2);
    }
	
	$:arrow_top = arrowFromTopToCenter - imageFromTopToCenter;


	window.addEventListener('resize', (() => {
		// console.log('resize');
		isMobile = window.innerWidth < 750;
		sliderContainerWidth = sliderContainerNode ? sliderContainerNode.scrollWidth : sliderContainerWidth;
		stageNodeWidth = stageNode ? stageNode.clientWidth : stageNodeWidth;
		itemsToShow = itemsToShowOverwrite || Math.min(Math.max(Math.floor((sliderContainerWidth || 1) / (baseWidth || 1)) || 1, 2), 4);
	}).debounce(1e3))

	async function next() {
		currentOffset += 1;
		await tick();
	}
	async function prev() {
		currentOffset -= 1;
		await tick();
	}
	$: currentOffset = elements.length;

let positionField = 'pageX';
let dragging = false;
let draggedPixels = 0;
let lastPositionY;
let lastPosition, stopTimeout;

let scrollIntend = false;

let wontClickElement;
let wontClickElements = [];

document.addEventListener('mousemove', mousemove);
document.addEventListener('touchmove', touchmove);
document.addEventListener('lostpointercapture', stopMove);
document.addEventListener('touchcancel', stopMove);
document.body.addEventListener( 'click', function ( e ) {
	// console.log('WontClick', wontClickElement);
  if (e.target === wontClickElement){
    e.stopImmediatePropagation();
    e.stopPropagation();
  }
  
}, true);

function startMove(startPosition, startPositionY) {
	draggedPixels = 0
	dragging = true
	lastPosition = startPosition;
	lastPositionY = startPositionY;
}

function move(e, position, positionY, path ) {
	if (!dragging) return

	if(wontClickElement && wontClickElement.href != 'javascript:return false') { 
		wontClickElement.onClick = stopClick;
		wontClickElement.setAttribute('data-href', wontClickElement.href);
		wontClickElement.href = 'javascript:return false';
	}
	
	if(path && !Array.from(path).some(e => e == stageNode) || scrollIntend) {
		return stopMove()
	}
	
	let deltaY = positionY - lastPositionY;

	if(Math.abs(deltaY) > 30) {
        scrollIntend = true;
    }

	let delta = position - lastPosition
	
	if (e.cancelable) {
        e.preventDefault();
    }

	if(delta > elementWidth * .5 || delta * -1 > elementWidth * .5) {
		return stopMove();
	}
	lastPosition = position
	draggedPixels -= delta * 1

	let triggerRatio = .35;
	if(draggedPixels > elementWidth * triggerRatio) {
		nextOnce()
	}
	if(Math.floor((draggedPixels + elementWidth * triggerRatio) / elementWidth) > nextCount) {
		nextAvail = true;
	}

	if(draggedPixels * -1 > elementWidth * triggerRatio) {
		prevOnce();
	}

	if(Math.floor((draggedPixels * -1 + elementWidth * triggerRatio) / elementWidth) > prevCount) {
		prevAvail = true;
	}
}

let nextAvail = true;
let nextCount = 0;
async function nextOnce() {
	if(nextAvail) {
		nextAvail = false;
		nextCount++;
		next()
	}
}
let prevAvail = true;
let prevCount = 0;
async function prevOnce() {
	if(prevAvail) {
		prevAvail = false;
		prevCount++;
		prev()
	}
}

function stopMove() {
	draggedPixels = 0;
	nextAvail = true;
	prevAvail = true;
	dragging = false;
	nextCount = 0;
	prevCount = 0;
	stopTimeout = null;
	scrollIntend = false;
	clearTimeout(stopTimeout);
	$draggedPixelsHolder = 0;
	clearWontClick();
	// when release the mouse, the click event gets fired, calling the jump function, undoing the drag.
	// disable jump for one tick.	

	// clearTimeout(nextSlideTimeout)
	// nextSlideTimeout = setTimeout(nextSlide, 10000)
}

function stopClick(e) {
	e.preventDefault();
	e.stopImmediatePropagation();
	return false;
}
function mousedown(e) {
	wontClickElement = e.path.find(el => el.tagName == 'A') || wontClickElement;
	wontClickElements.push(wontClickElement);
	// console.log('wontClickElement', wontClickElement);
	startMove(e[positionField], e['pageY'])
}

function mouseup(e) {
	clearWontClick();
	// console.log('wontClickElement', wontClickElement);
	stopMove();
}

function clearWontClick() {
	setTimeout(() => {
		wontClickElements.filter(e => e).forEach(wontClickElement => {
			wontClickElement.removeEventListener('click', stopClick);
			wontClickElement.href = wontClickElement.getAttribute('data-href');
			wontClickElement.setAttribute('data-href', null); 
		});
		wontClickElements = [];
	}, 100);
}

function mousemove(e) {
	e.preventDefault();
	if (stopTimeout) return // we just used the wheel
    move(e, e[positionField], e['pageY'], e.path);
}

function touchstart(e) {
	startMove(e.changedTouches[0][positionField], e.changedTouches[0]['pageY'])
}
document.body.addEventListener('touchend', () => {
	// console.log('touchend document')
	touchend();
});
function touchend(e) {
	stopMove()
}
	
function pointercancel(e) {
	dragging = false
}
	
function touchmove(e) {	
	//e.preventDefault()
	move(e, e.changedTouches[0][positionField], e.changedTouches[0]['pageY'], e.path)
}
// $: console.log(dragging);
let elementNodeWidth = 100;
$: elementNodeWidth = ((stageNodeWidth - ((itemsToShow - 1) * margin*2)) / itemsToShow);

$: if(elementNodeWidth) {
	setTimeout(() => elementHeight = elementNodes[0] ? Math.max.apply(null, elementNodes.map(e => e.scrollHeight)) : elementHeight, 500);
}

// $: console.log('sliderContainerWidth:' , sliderContainerWidth,'elementNodeWidth', elementNodeWidth, 'itemsToShow', itemsToShow);

$: if($calculatedOffset == currentOffset * (elementNodeWidth + margin*2) + margin && $draggedPixelsHolder == draggedPixels) {
	setTimeout(async () => {
		if($calculatedOffset == currentOffset * (elementNodeWidth + margin*2) + margin && $draggedPixelsHolder == draggedPixels) {
			// console.log('tweening ended!');
			tweensEnded();
		}
	}, 20)
}

	async function tweensEnded() {
		if(currentOffset >= elements.length * 2) {
			animate = false;
			await tick();
			currentOffset = elements.length;
			await tick();
			}
		if(currentOffset <= 0) {
			animate = false;
			await tick();
			currentOffset = elements.length;
			await tick();
		}
			animate = true;
}
let calculatedOffset = tweened(0, currentConfig);
let draggedPixelsHolder = tweened(0, currentConfig);

$: if(dragging) {
	draggedPixelsHolder.set(draggedPixels, {duration: 0});
} else {
	if(!animate) {
		calculatedOffset.set(currentOffset * (elementNodeWidth + margin*2) + margin, { duration: 0 });
	} else {
		$calculatedOffset = currentOffset * (elementNodeWidth + margin*2) + margin;
	}
}

let totalOffset = 0;
$: totalOffset = $calculatedOffset + $draggedPixelsHolder;

</script>
<div class="slider-container selectable" bind:this="{sliderContainerNode}">
    {#if !initialized}
    <div bind:this="{holder}" class="slider-content-holder">
        <slot />
    </div>
    {/if}
	<div class="slider-arrow-left slider-arrow" style="top:{ 0 }px;" bind:this="{arrowNode}">
        <div on:click="{ prev }">
			<svg style="width: {arrowSize}px" viewBox="0 0 26.061 50.707"><path style="fill:none;stroke:#707070;" d="M-317.677,969l-25,25,25,25" transform="translate(343.384 -968.651)"/></svg>
		</div>
	</div>
	<div class="slider-stage-container">
		<div class="slider-stage"
					bind:this={stageNode}
					style="width: 100%;padding-top: {elementHeight + 2}px;"
					>
				<div class="slider-inner-stage" style="top: 0; transform: translateX(-{ totalOffset }px);">
				{#each elementsSliced as element, index (element.id) }
					<div 
                        on:click={() => selectionHandler(element)}
						style="width: {elementNodeWidth}px"
						bind:this={elementNodes[index]}
						on:pointercancel={pointercancel}
						on:touchstart={touchstart} 
						on:touchmove={touchmove} 
						on:touchend={touchend} 
						on:mousedown={mousedown} 
						on:mousemove={mousemove} 
						on:mouseup={mouseup}
						class="slider-element"
                        class:selected={elementSelected == element}
                        >
						<!-- <span> {index} - {element.id} </span>
						<br /> -->
						{@html element.el}
					</div>
				{/each }
			</div>
		</div>
	</div>
	<div style="top:{ 0 }px;" class="slider-arrow-right slider-arrow" >
		<div on:click="{ next }"> 
			<svg style="width: {arrowSize}px" viewBox="0 0 26.061 50.707"><path style="fill:none;stroke:#707070;" d="M-342.677,969l25,25-25,25" transform="translate(343.031 -968.651)"/></svg>
		</div>
	</div>
</div>

<!-- <div>
	<h4> itemsToShow: { itemsToShow } </h4>
	<h4> elementsSliced.length: { elementsSliced.length } </h4>
	<h4> currentOffset: { currentOffset } </h4>

</div> -->

<style>
    .slider-container.selectable .product-card-item:hover img {
		transform: none;
	}
    .slider-container.selectable .slider-element.selected .selectable {
        border: 1px solid #404040;
		margin-bottom: 0;
	} 
    .slider-container.selectable .slider-element.selected .collection-thumb-image-el {
        border: 1px solid #404040;
        padding-top: calc(100% + -2px);
    }
	.slider-container {
		width: calc(100% + 32px);
		display: flex;
		justify-content: center;
		position: relative;
		align-items: center;
		margin: 0 -32px;
		left: 16px;
	}
	.slider-stage-container {
		display: flex;
		align-items: center;
		width: 100%;
		justify-content: center;
		overflow: hidden;
	}
	.slider-stage {
		width: 100%;
		display: flex;
		overflow: hidden;
		position: relative;
	}
	
	.slider-element {
		margin: 0 20px;
		position: relative;
	}

	.slider-inner-stage {
		position: absolute;
		display: flex;

	}
	.slider-arrow { 
		position: relative; 
	}
	.slider-arrow svg{
		width: 26px;
	}
	.slider-arrow-left {
		right: 10px;
	}
	.slider-arrow-right {
		left: 10px;
	}

	@media screen and (max-width: 750px) {
		.slider-arrow svg{
			width: 16px;
		}
	}
	@media screen and (max-width: 500px) {
		.slider-arrow-left {
		}
		.slider-arrow-right {
		}	
	}
</style>