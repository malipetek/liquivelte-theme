
<script>
  import { getContext, setContext } from 'svelte';
  export let themeImports = getContext('svelteProps');
  export let rawIncludes = getContext('rawIncludes');
  export let lec = getContext('lec');

  import cachedLiquid from 'liquivelte-liquid.js';
  const liquid = cachedLiquid(lec);
  let index = 0;

let container, stage;
let scrollY = 0;
const section = {};
export let sectionƒƒsettings; 
section.settings = themeImports['sectionƒƒsettings'];
export let sectionƒƒblocks; 
section.blocks = themeImports['sectionƒƒblocks'];
import { onMount } from 'svelte';
import { tweened } from 'svelte/motion';
import { cubicOut, linear } from 'svelte/easing';

export let imbalance = themeImports['imbalance'];
const itemWidths = [];
const itemHeights = [];

let keepFor = 900;

let top = 0;
let height = 0;
let isEntered = 0;
let isTopped = 0;
let isFixed = 0;
let cachedHeight = 0;
let keptFor = 0;
let topOffset = 0;
let progressPercent = 0;
let enteredAmount = 0;
let stageHeight = 0;
let fifthImage;

let animations = [
  {
    from: 52,
    to: 77,
    valueFrom: 1,
    valueTo: 10,
    variable: '--explode-gap',
    unit: 'em'
  },
  {
    from: 33,
    to: 66,
    valueFrom: 0,
    valueTo: 20,
    variable: '--explode-size-imbalance',
    unit: '%'
  },
  {
    from: 66,
    to: 100,
    valueFrom: 1,
    valueTo: 2,
    variable: '--image-oversize'
  }
];
$: if(!fifthImage) {
  fifthImage = [...document.querySelectorAll('.image-container')][4].children[0];
} 

const progress = tweened(0, {
		duration: 100,
		easing: linear
	});

$: if(container && stage) {
    top = container.offsetTop,
    height = container.clientHeight,
    isEntered = container.offsetTop < (scrollY + window.innerHeight),
    enteredAmount = container.offsetTop - (scrollY + window.innerHeight),
    isTopped = container.offsetTop - scrollY < 0,
    isFixed = isTopped && keptFor < keepFor,
    cachedHeight = isTopped ? cachedHeight : container.clientHeight, 
    keptFor = Math.abs(container.offsetTop - scrollY),
    topOffset = container.offsetTop - scrollY < 0 && keepFor > keptFor ? keptFor : isTopped ? keepFor : 0,
    progressPercent = ((scrollY + window.innerHeight) - container.offsetTop) / (container.clientHeight + window.innerHeight) * 100,
    progressPercent = progressPercent > 0 ? progressPercent : 0;
    progress.set(progressPercent);
    stageHeight = stage.clientHeight;
    // console.log('stageHeight ', stageHeight);

    // console.log('progressPercent ', progressPercent);
    
  }
  
// $: explodeGap = progressPercent > 33 ? `${1 + (10) * (progressPercent - 33) / 100}em` : '1em';
let animationVariables = [1];
$: animationVariables = animations.map(animation => {
  let animationProgress = ($progress - animation.from) / (animation.to - animation.from);
  let value = animation.valueFrom + (animation.valueTo - animation.valueFrom) * animationProgress;
  value = value < animation.valueFrom ? animation.valueFrom : value > animation.valueTo ? animation.valueTo : Math.round(value * 1e6) / 1e6;
  return `${animation.variable}:${value}${animation.unit || ''}`;
});

$: widthVariables = itemWidths.map((width, index) => `--item-${index}-width: ${width}px`);
$: heightVariables = itemHeights.map((height, index) => `--item-${index}-height: ${height}px`);

onMount(() => {
  document.querySelector('.page-content').addEventListener('scroll', e => {
    scrollY = e.target.scrollTop
  });
});
</script> 

<div class="exp-gallery-container" bind:this="{container}"           
      style="--explode-gap: 1em; --explode-size-imbalance: 0%; --image-oversize: 1; {animationVariables.join(';')}; {widthVariables.join(';')}; {heightVariables.join(';')}">
    <div class="stage-container" >
      <div class="exp-gallery-stage" bind:this="{stage}">
      {#each  section.blocks as block, index   }
{@const forloop = {
  first: index === 0,
  index: index + 1,
  index0: index,
  last: index === ( section.blocks).length - 1,
  rindex: ( section.blocks).length - index,
  rindex0: ( section.blocks).length - index - 1,
  length: ( section.blocks).length,
} }
        <div 
        class="image-container a" 
        style="--image-aspect-ratio: { block.settings.image.aspect_ratio }" 
        bind:clientWidth="{itemWidths[forloop.index]}"
        bind:clientHeight="{itemHeights[forloop.index]}"
        >
          <picture class="">
            <source media="(min-width:650px)" srcset="{ liquid.img_url(block.settings.image, 'x800') }">
            <source media="(min-width:1200px)" srcset="{ liquid.img_url(block.settings.image, 'x800') }">
            <img class="" src="{ liquid.img_url(block.settings.image, 'x800') }" alt="{ block.settings.image.alt }" style="width:auto;" />
          </picture>
        </div>
        {/each}
    </div>
  </div> 
  <div class="exp-gallery-placeholder" style="height: { stageHeight + keepFor }px">&nbsp;</div>
</div> 

<style>
  .exp-gallery-container {
    width: 100%;
    position: relative;
  }
  .stage-container {
    position: sticky;
    width: 100%;
    top: calc((50vh - (var(--item-5-height) / 2)) - var(--item-2-height));
    overflow: hidden;

  }
  .exp-gallery-stage {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: calc(120% + 6 * var(--explode-gap));
    z-index: 2;
    margin-left: calc(-10% - 3 * var(--explode-gap));
    top: 0;
  }
  .image-container {
    flex: 0 0 33%;
    position: relative;
    padding-top: calc( ( 33% ) / var(--image-aspect-ratio));
    /*    margin: var(--explode-gap); */
  }
  .image-container:nth-child(5) {
    flex: 0 0 calc(33% + var(--explode-size-imbalance));
    padding-top: calc( ( 33% + var(--explode-size-imbalance)) / var(--image-aspect-ratio));
    
  }
  .image-container:nth-child(4), .image-container:nth-child(6) {
    flex: 1 0 calc(33% - var(--explode-size-imbalance));
    padding-top: calc( ( 33% ) / var(--image-aspect-ratio));
  }
  picture {
    position: absolute;
    inset: var(--explode-gap);
    max-width: 100%;
    top: 0;
    overflow: hidden;
  }
  img {
    max-width: 100%;
    transform: scale(var(--image-oversize));
  }
</style>
