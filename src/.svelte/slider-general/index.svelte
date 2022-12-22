<script>
  import cachedLiquid from 'liquivelte-liquid.js';
  export let lec;
  const liquid = cachedLiquid(lec);
  let index = 0;

export let aspect_ratio;
export let alt;
export let src;
    import { Page, Navbar, BlockTitle, Block, Swiper, SwiperSlide } from 'framework7-liquivelte';
    import SliderImage from '../../snippets/slider-image.liquivelte';
</script>

<Block   src={src} alt={alt} aspect_ratio={aspect_ratio}    lec={lec} >
<BlockTitle   src={src} alt={alt} aspect_ratio={aspect_ratio}    lec={lec} >With all controls</BlockTitle>
  <Swiper  breakpoints="{breakpoints}"  src={src} alt={alt} aspect_ratio={aspect_ratio}    lec={lec} >
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
    <SwiperSlide    src={src} alt={alt} aspect_ratio={aspect_ratio}    lec={lec} >
      {#if block.type == 'image' }
        <SliderImage    src={src} alt={alt} aspect_ratio={aspect_ratio}    lec={lec} />
      {:else if block.type == 'image-with-card'}
      
      {:else if block.type == 'image-with-card'}

      {/if}
    </SwiperSlide>
    {/each} 
  </Swiper>
</Block>

