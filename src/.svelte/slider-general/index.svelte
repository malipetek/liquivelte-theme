<script>
  import { getContext, setContext } from 'svelte';
  export let themeImports = getContext('svelteProps');
  export let rawIncludes = getContext('rawIncludes');
  export let lec = getContext('lec');

  import cachedLiquid from 'liquivelte-liquid.js';
  const liquid = cachedLiquid(lec);
  let index = 0;

export let rawinclude_673107d4;
    import { Page, Navbar, BlockTitle, Block, Swiper, SwiperSlide } from 'framework7-liquivelte';
    import { FreeMode, Mousewheel } from 'swiper';
    import SliderImage from './blocks/slider-image.liquivelte';
    const section = {};
    export let sectionƒƒsettings; 
section.settings = themeImports['sectionƒƒsettings'];
    export let sectionƒƒblocks; 
section.blocks = themeImports['sectionƒƒblocks'];
    
    let container;

    console.log('general slider section ', section);
    console.log('general slider section.blocks ', section.blocks);
</script>

{#if section.settings.flush_with_header }
  <div class="flush-shadow"></div>
{/if}
<div bind:this="{container}">
  <Swiper  freemode="{ { enabled: true, sticky: true } }" 
          mousewheel="{ { forceToAxis: true, sensitivity: 1.5 } }"
          modules="{[FreeMode, Mousewheel]}"    sectionƒƒsettings={sectionƒƒsettings} sectionƒƒblocks={sectionƒƒblocks}   rawinclude_673107d4={rawinclude_673107d4} lec={lec} >
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
    {#if block.type == 'image' }
        <SwiperSlide     sectionƒƒsettings={sectionƒƒsettings} sectionƒƒblocks={sectionƒƒblocks}   rawinclude_673107d4={rawinclude_673107d4} lec={lec} >
          <SliderImage     sectionƒƒsettings={sectionƒƒsettings} sectionƒƒblocks={sectionƒƒblocks}   rawinclude_673107d4={rawinclude_673107d4} lec={lec} />
        </SwiperSlide>
        {/if}
    {/each} 
  </Swiper>
</div>

{@html rawinclude_673107d4[index || 0]}

<style global>
    :root {
      --header-slider-flush: -1;
      --header-slider-flush-color: transparent;
    }
    .flush-shadow {
      position: absolute;
      inset: 0;
      background: linear-gradient(0deg, rgba(229,228,226,0) 0%, rgba(0,0,0,0.3) 100%);
      z-index: 51; 
      pointer-events: none;
    }

</style>

