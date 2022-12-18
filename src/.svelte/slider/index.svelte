
<script>
  import cachedLiquid from 'liquivelte-liquid.js';
  export let lec;
  const liquid = cachedLiquid(lec);
  let index = 0;

  import { Page, Navbar, BlockTitle, Block, Swiper, SwiperSlide } from 'framework7-liquivelte';
  import ProductCard from '../../snippets/product-card.liquivelte';
  const section = {};
  export let sectionƒƒsettings; 
section.settings = sectionƒƒsettings;
  export let products;
  export let slidesPerView;
 
</script>

<Block   products={products} slidesPerView={slidesPerView}  sectionƒƒsettings={sectionƒƒsettings}   lec={lec} >
<BlockTitle   products={products} slidesPerView={slidesPerView}  sectionƒƒsettings={sectionƒƒsettings}   lec={lec} >With all controls</BlockTitle>
<div style="--slides-per-view: { slidesPerView }">
  <Swiper    products={products} slidesPerView={slidesPerView}  sectionƒƒsettings={sectionƒƒsettings}   lec={lec} >
    {#each  products as product, index  }
{@const forloop = {
  first: index === 0,
  index: index + 1,
  index0: index,
  last: index === ( products).length - 1,
  rindex: ( products).length - index,
  rindex0: ( products).length - index - 1,
  length: ( products).length,
} }
    <SwiperSlide   products={products} slidesPerView={slidesPerView}  sectionƒƒsettings={sectionƒƒsettings}   lec={lec} >
      <ProductCard  product="{ product }"  products={products} slidesPerView={slidesPerView}  sectionƒƒsettings={sectionƒƒsettings}   lec={lec} />
    </SwiperSlide>
    {/each} 
  </Swiper>
</div>
</Block>


<style>
 :global(.swiper-slide) {
  border: none;
  background: none;
 }
</style>
