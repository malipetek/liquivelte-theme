<script>
  import cachedLiquid from 'liquivelte-liquid.js';
  export let lec;
  const liquid = cachedLiquid(lec);
  let index = 0;

    import { Page, Navbar, BlockTitle, Block, Swiper, SwiperSlide } from 'framework7-liquivelte';

</script>

<Block      lec={lec} >
<BlockTitle      lec={lec} >With all controls</BlockTitle>
  <Swiper  breakpoints="{breakpoints}"     lec={lec} >
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
    <SwiperSlide       lec={lec} >
      {#if block.type == 'image' }

      {:else if block.type == 'image-with-card'}
      
      {:else if block.type == 'image-with-card'}

      {/if}
    </SwiperSlide>
    {/each} 
  </Swiper>
</Block>

