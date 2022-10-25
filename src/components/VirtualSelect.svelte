<script>
	export let children = [];
	export let elements = [{text: 'Empty', value: 0, id: 0}];
	export let images = [];
	export let variants = [];
	export let name;
	export let initial;
	export let placeholder = 'Select';
	export let onchange = () => {};
	let clazz = '';
	export { clazz as class };
	
	import liquid from '../liquivelte-liquid.js';	
	let componentNode;
	let initialized = false;
	import { onMount, beforeUpdate, tick } from 'svelte';
	let elementNodes = [];
	import { slide, fly, fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { quintInOut } from 'svelte/easing'
	import '../scripts/debounce.js';
    export let colors = false;
	import { disableScrollOnBody, enableScrollOnBody } from '../scripts/utils.js';

	let isSingleton = elements.length == 1;

	function getRandomColor() {
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	document.addEventListener('click', e => {
		const path = e.composedPath();
        if(path.indexOf(componentNode) == -1) {
            virtualListOpen = false;
        }
    })

	$: if(virtualListOpen && isMobile) {
		disableScrollOnBody();
	} else {
		enableScrollOnBody();
	}

	onMount(x => {

		//elements = children ? Array.from(children).map((c, i) => ({...c, id: i })) : [];
		initialized = true;
		if(isSingleton) {
			selectionHandler(elements[0]);
		}
		if(initial) {
			selectionHandler(elements.find(el => el.value == initial));
		}
	})
	export let value = "";
	// $: console.log('select first value ', value);
    let selection = isSingleton && elements.length ? elements[0] : undefined;
	let selectionText = placeholder;
	$: selectionText = isSingleton && elements.length ? elements[0].text : (elements.find(e => { return e.value == decodeURIComponent(value);}) || {text: placeholder}).text;
    $: selection = (elements.find(e => e.value == value) || {});
	
	let virtualListOpen = false;

	function selectionHandler(element) {
		onchange(element);
		virtualListOpen = false;
		value = element.value; 
	}

	let isMobile = window.innerWidth <= 750;

	function show (node) {
		return isMobile ? fly(node, { duration: 150, easing: quintInOut, y: 300 }) : slide(node, {duration: 500, easing: quintInOut}) 
	}

	$: if(elements && elements.length && !elements[0].text) {
		elements = elements[0] && !elements[0].text ? elements.map((e,i) => ({text: e, value: e, id: i})) : elements;

		elements = elements.map(e => {
			const variants_found = variants.filter(v => v.options.some(o => o == e.value));
			if(variants_found.length){
				return ({ ...e, img: liquid.img_url(variants_found[0].featured_image, '50x50') })
			} else {
				return e;
			}
		});
	}
</script>
<div
	bind:this="{componentNode}"
	class="virtual-select-container {clazz}"
	class:mobile="{isMobile}"
	class:initialized="{initialized}">
	{#if initialized}
	<select hidden class="virtual-select-select" bind:value="{value}" name="{name}" >
		{#each elements as element, index (element.id) }
			<option value="{element.value}" data-id="{element.id}"> {element.text} </option>
		{/each }
	</select>
	{/if}
	<div class="virtual-select-mirror">
		<div class="virtual-select-selection" on:click="{ () => virtualListOpen = !virtualListOpen }">
            <div class="virtual-dropdown-selection-text-color">{#if colors && (selection.color || selection.img) }
                <span class="virtual-select-option-color" style="color: {selection.color || getRandomColor()}; background-image: url({ selection.img }); background-size: cover;"></span> 
            {/if}
            <span class="virtual-select-option-text"> { selectionText } </span></div>
			{#if !isSingleton }
				<svg width="15.365" height="8.053" viewBox="0 0 15.365 8.053"><path style="fill:none;stroke:#707070;" d="M0,0,7,7.337,0,14.675" transform="translate(15.02 0.362) rotate(90)"/></svg>
			{/if}
		</div>
		
		{#if virtualListOpen && !isSingleton}
			<div class="virtual-select-list-backdrop" transition:fade on:click="{ () => virtualListOpen = !virtualListOpen }"></div>
			<div class="virtual-select-list-container" transition:show >
				{#if isMobile } 
					<div class="virtual-select-list-mobile-header"> 
						{ elements[0] && !elements[0].value ? elements[0].text : 'Select a Value'} 
					</div> 
				{/if}
				<div class="virtual-select-list">
					{#each elements as element, index (element.id) }
						{#if element.value }
							<div 
								class="virtual-select-option" 
								class:selected="{element.value == value}"
								data-id="{element.id}" on:click="{() => selectionHandler(element)}">
									{#if colors && (element.color || element.img) }
										<span class="virtual-select-option-color" style="color: {element.color || getRandomColor()}; background-image: url({ element.img }); background-size: cover;"></span> 
									{/if}
									{element.text} 
							</div>
						{/if }
					{/each }
				</div>
			</div>
		{/if }
	</div>
</div>

<style>
	.virtual-select-container {
		display: none;
	}
	.virtual-select-container.initialized {
		display: flex;
		width: 100%;
	}
	.virtual-select-mirror {
		position: relative;
		width: 100%;
		font-size: 11px;
		font-family: SimplonNorm;
		font-weight: 300;
	}
	.virtual-select-list {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-height: 250px;
		overflow-y: scroll;

	}
	.virtual-select-selection {
		width: 100%;
		padding: 15px;
		display: flex;
		justify-content: space-between;
		align-items: center;
        border: 1px solid #E7EBED;
		background-color: #fff;
        max-height: 40px;
	}
	.virtual-dropdown-selection-text {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		max-width: 100px;
	}
	.virtual-select-option {
		border-bottom: 1px solid #E7EBED;
		padding: 15px;
		width: 100%;
	}
	.virtual-select-option:hover {
		background-color: #ddd;
	}
	.virtual-select-option.selected {
		background-color: #ddd;
	}
	.virtual-select-list-container {
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		background-color: #fff;
		z-index: 15;
	}
	.virtual-select-list-backdrop {
		display: none;
	}
	.mobile .virtual-select-list-backdrop { 
		display: block;
		position: fixed;
		width: 100%;
		height: 60vh;
		background-color: #00000070;
		left: 0;
		top: 0;
		z-index: 5;
	}
	.virtual-select-list-mobile-header {
		padding: 15px;
		font-weight: normal;
		border-bottom: 1px solid #E7EBED;
	}
	.mobile .virtual-select-list-container {
		position: fixed;
		top: 50vh;
		left: 0;
		z-index: 10;
		padding-bottom: 70px;
	}

	.mobile .virtual-select-list {
		height: calc(50vh - 116px);
		overflow-y: scroll;
		max-height: unset;
	}
	.virtual-select-option-color {
		display: inline-block;
		width: 26px;
		height: 26px;
		background-color: currentColor;
		border-radius: 55%;
		margin: -3px 5px -7px 0;
	}
</style>