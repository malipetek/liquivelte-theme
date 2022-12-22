
<script>
  import cachedLiquid from 'liquivelte-liquid.js';
  export let lec;
  const liquid = cachedLiquid(lec);
  let index = 0;

export let blockƒƒsettings;
export let bold;
export let color;
export let font_size;
export let title_top;
export let left; 
const section = {};
export let sectionƒƒsettings; 
section.settings = sectionƒƒsettings; 
export let sectionƒƒblocks; 
section.blocks = sectionƒƒblocks; 
export let animations;

console.log('section blocks 1', animations, section.blocks);
section.blocks = section.blocks.map(block => ({...block, settings: { ...block.settings, anim_style: animations.filter(anim => anim.target == block.settings.id).reduce((c, anim) => `${c}${anim.anim_style}`, '') } }));
console.log('section blocks 2', animations, section.blocks);
import "../../scripts/debounce.js";
let container, stage;
let scrollY = 0;
import ScrollVideo from './blocks/video.liquivelte'; 
import Title from './blocks/title.liquivelte'; 
import Shape from './blocks/shape.liquivelte'; 
import './animation.schema.json'; 
import { onMount } from 'svelte';

let keepFor = section.settings.animation_duration / 100 * window.innerHeight;
console.log('section settings ', section.settings, keepFor);

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
let seeked = true;
let progress = 0;

let video, duration, time; 
const itemWidths = [];
const itemHeights = [];
// [
//   {
//     from: 52,
//     to: 77,
//     valueFrom: 1,
//     valueTo: 10,
//     variable: '--explode-gap',
//     unit: 'em'
//   },
//   {
//     from: 33,
//     to: 66,
//     valueFrom: 0,
//     valueTo: 20,
//     variable: '--explode-size-imbalance',
//     unit: '%'
//   },
//   {
//     from: 66,
//     to: 100,
//     valueFrom: 1,
//     valueTo: 2,
//     variable: '--image-oversize'
//   }
// ];

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
  progress = progressPercent;
  stageHeight = stage.clientHeight;

}

onMount(() => {
  document.querySelector('.page-content').addEventListener('scroll', e => {
    scrollY = e.target.scrollTop
  });
});
// $: if(scrollY && container && seeked) {
//   seeked = false;
//   top = container.offsetTop; 
//   height = container.clientHeight;
//   // time = duration * keptFor / keepFor;
// }

$: if(container) {    
  keptFor = container.offsetTop < scrollY ? -1 * (container.offsetTop - scrollY) : 0;
  // console.log('keptFor index ', keptFor);
}

let animationVariables = [];
$: animationVariables = animations.map(animation => {
  let animationProgress = (progress - animation.from) / (animation.to - animation.from);
  let value = animation.valueFrom + (animation.valueTo - animation.valueFrom) * animationProgress;
  value = value < animation.valueFrom ? animation.valueFrom : value > animation.valueTo ? animation.valueTo : Math.round(value * 1e6) / 1e6;
  return `${animation.variable}:${value}${animation.unit || ''}`;
});

$: widthVariables = itemWidths.map((width, index) => `--item-${index}-width: ${width}px`);
$: heightVariables = itemHeights.map((height, index) => `--item-${index}-height: ${height}px`);

</script>

<div class="animation-container" bind:this="{container}"
  style="--explode-gap: 1em; --explode-size-imbalance: 0%; --image-oversize: 1; {animationVariables.join(';')}; {widthVariables.join(';')}; {heightVariables.join(';')}">

  <div class="stage-container" >
    <div class="animation-stage" bind:this="{stage}">
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
        
        {#if block.type == 'title' }
          <Title  anim_style="{ block.settings.anim_style }"   left={left} title_top={title_top} font_size={font_size} color={color} bold={bold} animations={animations}  blockƒƒsettings={blockƒƒsettings} sectionƒƒsettings={sectionƒƒsettings} sectionƒƒblocks={sectionƒƒblocks}   lec={lec} />
        {/if}
        
        {#if block.type == 'image' }
          <img loading="lazy" src="{ block.settings.image }" />
        {/if}
        
        {#if block.type == 'text' }
          {@html block.settings.content || ''}
        {/if}

        {#if block.type == 'video' }
          <ScrollVideo  block="{ block }" keepFor="{ keepFor }" bind:keptFor anim_style={ block.settings.anim_style }   left={left} title_top={title_top} font_size={font_size} color={color} bold={bold} animations={animations}  blockƒƒsettings={blockƒƒsettings} sectionƒƒsettings={sectionƒƒsettings} sectionƒƒblocks={sectionƒƒblocks}   lec={lec} />
        {/if}

        {#if block.type == 'shape' }
          <Shape  block="{ block }" anim_style="{ block.settings.anim_style }"   left={left} title_top={title_top} font_size={font_size} color={color} bold={bold} animations={animations}  blockƒƒsettings={blockƒƒsettings} sectionƒƒsettings={sectionƒƒsettings} sectionƒƒblocks={sectionƒƒblocks}   lec={lec} /> 
        {/if}
      
      {/each}
    </div>
  </div>
  <div class="stage-placeholder" style="height: { stageHeight + keepFor }px">&nbsp;</div>
</div>

<style>
  .animation-container {
    width: 100%;
    position: relative;
  }
  .stage-container {
    position: sticky;
    width: 100%;
    /* calc((100vh - var(--stage-height)) / 2); */
    top: 0;
    overflow: hidden;

  }
  .animation-stage {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    z-index: 1;
    top: 0;
    height: 100vh;
    position: relative;
  }

  .animation-stage > * {
    z-index: 2;
  }
</style>
