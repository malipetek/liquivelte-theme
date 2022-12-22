
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
  
  console.log(' ==> products ', products);
  
  const slidesPerView = 3;
  const breakpoints = {
				"640": {
					slidesPerView: 2,
				},
				"768": {
					slidesPerView: 3,
				},
				"1024": {
					slidesPerView: 4,
				},
				"1280": {
					slidesPerView: 6,
				},
				"1536": {
					slidesPerView: 8,
				}
			}
</script>

<Block   products={products}  sectionƒƒsettings={sectionƒƒsettings}   lec={lec} >
<BlockTitle   products={products}  sectionƒƒsettings={sectionƒƒsettings}   lec={lec} >With all controls</BlockTitle>
  <Swiper  breakpoints="{breakpoints}"  products={products}  sectionƒƒsettings={sectionƒƒsettings}   lec={lec} >
    {#each  products as product, index   }
{@const forloop = {
  first: index === 0,
  index: index + 1,
  index0: index,
  last: index === ( products).length - 1,
  rindex: ( products).length - index,
  rindex0: ( products).length - index - 1,
  length: ( products).length,
} }
    <SwiperSlide    products={products}  sectionƒƒsettings={sectionƒƒsettings}   lec={lec} >
      <ProductCard  product="{ product }"  products={products}  sectionƒƒsettings={sectionƒƒsettings}   lec={lec} />
    </SwiperSlide>
    {/each} 
  </Swiper>
</Block>


<style global lang="scss">
  @import '../../styles/breakpoints.scss';
 .swiper-slide {
  border: none;
  background: none;
 }

 :root {
  --slides-per-view: 1;
 }
 @include sm {
  :root{
    --slides-per-view: 2;
  }
 }

 @include md {
  :root{
    --slides-per-view: 3;
  }
 }

 @include lg {
  :root{
    --slides-per-view: 4;
  }
 }

 @include xl {
  :root{
    --slides-per-view: 6;
  }
 }

 @include xxl {
  :root{
    --slides-per-view: 8;
  }
 }

</style>
