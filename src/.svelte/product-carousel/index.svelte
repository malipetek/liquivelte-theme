
<script>
  import { getContext, setContext } from 'svelte';
  export let themeImports = getContext('svelteProps');
  export let rawIncludes = getContext('rawIncludes');
  export let lec = getContext('lec');

  import cachedLiquid from 'liquivelte-liquid.js';
  const liquid = cachedLiquid(lec);
  let index = 0;

  import { Page, Navbar, BlockTitle, Block, Swiper, SwiperSlide } from 'framework7-liquivelte';
  import { FreeMode, Mousewheel, Pagination } from 'swiper';
  import ProductCard from '../../snippets/product-card.liquivelte';
  const section = {};
  export let collection_title = themeImports['collection_title'];
  export let sectionƒƒsettings; 
section.settings = themeImports['sectionƒƒsettings'];
  export let products = themeImports['products'];
  
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

<Block  classes="product-carousel"  collection_title={collection_title} products={products}  sectionƒƒsettings={sectionƒƒsettings}   lec={lec} >
<BlockTitle   collection_title={collection_title} products={products}  sectionƒƒsettings={sectionƒƒsettings}   lec={lec} >{ collection_title }</BlockTitle>
<Swiper  modules="{[FreeMode, Mousewheel, Pagination]}" 
          freemode="{ { enabled: true, sticky: true } }"
          pagination="{true}" 
          mousewheel="{ { enabled: true, forceToAxis: true, sensitivity: 1.5 } }"
          breakpoints="{breakpoints}"
            collection_title={collection_title} products={products}  sectionƒƒsettings={sectionƒƒsettings}   lec={lec} >
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
    <SwiperSlide    collection_title={collection_title} products={products}  sectionƒƒsettings={sectionƒƒsettings}   lec={lec} >
      <ProductCard  product="{ product }"  collection_title={collection_title} products={products}  sectionƒƒsettings={sectionƒƒsettings}   lec={lec} />
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

 .product-carousel {
   --slides-per-view: 1;
   @include sm {
     --slides-per-view: 2;
    }
    @include md {
       --slides-per-view: 3;
    }
    @include lg {
      --slides-per-view: 4;
     }
    @include xl {
      --slides-per-view: 6;
    }
    @include xxl {
      --slides-per-view: 8;
    }
  }
  
</style>
