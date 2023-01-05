
<script>
  import { getContext, setContext } from 'svelte';
  export let themeImports = getContext('svelteProps');
  export let rawIncludes = getContext('rawIncludes');
  export let lec = getContext('lec');

  import cachedLiquid from 'liquivelte-liquid.js';
  const liquid = cachedLiquid(lec);
  let index = 0;

export let product = themeImports['product'];
import { Swiper, SwiperSlide } from 'framework7-liquivelte';
import { FreeMode, Mousewheel, Zoom, Thumbs } from 'swiper';
import { onMount, tick } from 'svelte';

let initialized; 
let galleryElement, thubmnailsElement;
let thumbnailsPerView = 5;
let thumbnailSpaceBetween = '10px';
let gallery_images = [];

  $: console.log('thumbnailsSwiper is set to ', thumbsSwiper);

  // store Thumbs swiper instance
  let thumbsSwiper = null;

  const setThumbsSwiper = (e) => {
    const [swiper] = e.detail;
    // set Thumbs swiper instance
    setTimeout(() => {
      thumbsSwiper = swiper;
    });
  };
</script>

<style global lang="postcss">

  .thumbs-swiper .slide-thumbs {
    height: calc(var(--max-height) / var(--thumbnailsPerView));
    margin-bottom: var(--thumbnailSpaceBetween);
  }
  .thumbs-swiper .swiper-slide {
    opacity: 0.4;
  }

  .swiper-slide-thumb-active {
    opacity: 1 !important;
  }

  .image-gallery {
    height: var(--max-height) !important;
  }
</style>
<div
    class:uninitialized="{ initialized != true }"
    style="--swiper-navigation-color: #fff; 
    --swiper-pagination-color: #fff; 
    grid-template-columns: 100px auto; 
    --max-height: {gallery_images[0] ? gallery_images[0].naturalHeight : 500}px;
    --thumbnailsPerView: {thumbnailsPerView};
    --thumbnailSpaceBetween: {thumbnailSpaceBetween};"
    class="mt-6 w-2xl max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 flex lg:grid justify-items-center lg:gap-8 image-gallery">
        <Swiper  classes="thumbs-swiper max-w-full w-40" 
        slidesPerView="{4}"
        spaceBetween="{thumbnailSpaceBetween}"
        direction="vertical"
        freemode="{ { enabled: true, sticky: true } }" 
        mousewheel="{ { forceToAxis: true, sensitivity: 1 } }"
        modules="{[FreeMode, Mousewheel, Thumbs]}"
        on:swiper={setThumbsSwiper}
        watchSlidesProgress
        product={product}    lec={lec} >
      {#each  product.images as image, index   }
{@const forloop = {
  first: index === 0,
  index: index + 1,
  index0: index,
  last: index === ( product.images).length - 1,
  rindex: ( product.images).length - index,
  rindex0: ( product.images).length - index - 1,
  length: ( product.images).length,
} }
        <SwiperSlide  classes="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4"   product={product}    lec={lec} >
          <img bind:this="{gallery_images[index]}" src="{ liquid.img_url(image, '100x') }" alt="{ image.alt }" class="">
        </SwiperSlide>
      {/each}
      </Swiper>
    <Swiper  classes="swiper max-w-full" 
        zoom="{true}"
        loop="{true}"
        slidesPerView="{1}"
        thumbs={ { swiper: thumbsSwiper } }
        freemode="{ { enabled: true, sticky: true } }" 
        mousewheel="{ { forceToAxis: true, sensitivity: 1 } }"
        modules="{[FreeMode, Mousewheel, Zoom, Thumbs]}"
        product={product}    lec={lec} >
      {#each  product.images as image, index   }
{@const forloop = {
  first: index === 0,
  index: index + 1,
  index0: index,
  last: index === ( product.images).length - 1,
  rindex: ( product.images).length - index,
  rindex0: ( product.images).length - index - 1,
  length: ( product.images).length,
} }
        <SwiperSlide  classes="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4"   product={product}    lec={lec} >
          <div class="swiper-zoom-container" data-swiper-zoom="5">
          <img bind:this="{gallery_images[index]}" src="{ liquid.img_url(image, '500x') }" alt="{ image.alt }" class="w-full h-full object-center object-cover">
          </div>
        </SwiperSlide>
      {/each}
      </Swiper>
  </div>
  <!-- Image gallery -->
  <!-- <div class="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
    {#each  product.images as image, index   }
{@const forloop = {
  first: index === 0,
  index: index + 1,
  index0: index,
  last: index === ( product.images).length - 1,
  rindex: ( product.images).length - index,
  rindex0: ( product.images).length - index - 1,
  length: ( product.images).length,
} }
      <div class="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
        <img src="{ liquid.img_url(image, '500x') }" alt="{ image.alt }" class="w-full h-full object-center object-cover">
      </div>
    {/each}
  </div> -->

