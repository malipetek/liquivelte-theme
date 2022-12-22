<script>
  import cachedLiquid from 'liquivelte-liquid.js';
  export let lec;
  const liquid = cachedLiquid(lec);
  let index = 0;

export let product;
import Swiper from '../../../scripts/swiper.module.js';
import { onMount } from 'svelte';

let initialized; 
let galleryElement, thubmnailsElement;
let gallery_images = [];

  onMount(() => {
    const thumbnailsSwiper = new Swiper(thubmnailsElement, {
      slidesPerView: 5,
      spaceBetween: 10,
      watchSlidesProgress: true,
      direction: 'vertical'
    });
    const swiper = new Swiper(galleryElement, {
      zoom: true,
      loop: true,
      slidesPerView: 1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: thumbnailsSwiper
      }
    });
    initialized = true;
    console.log('gallery_images ', gallery_images);
  });

</script>

<style global lang="postcss">
  @import 'swiper/swiper-bundle.min.css';
  @import 'swiper/modules/zoom/zoom.min.css';

  .uninitialized .thumbs-slider .slide-thumbs {
    width: 25% !important;
  }
  .thumbs-slider .swiper-slide {
    opacity: 0.4;
  }

  .swiper-slide-thumb-active {
    opacity: 1 !important;
  }

  .w-fit {
    width: fit-content;
  }
  .flex-column {
    flex-direction: column;
  }
  .image-gallery, .image-gallery .thumbs-slider, .image-gallery .swiper-wrapper {
    max-height: var(--max-height) !important;
  }
</style>
<div
    class:uninitialized="{ initialized != true }"
    style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff; grid-template-columns: 100px auto; --max-height: {gallery_images[0] ? gallery_images[0].clientHeight : 500}px"
    class="mt-6 w-2xl max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid justify-items-center lg:gap-8 image-gallery">
    <div class="thumbs-slider swiper max-w-full hidden lg:flex justify-items-center overflow-hidden" >
      <div class="mx-auto max-w-full" bind:this="{thubmnailsElement}">
        <div class="flex-column swiper-wrapper"> 
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
          <div class="swiper-slide slide-thumbs ">
            <div class="w-fit aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4" >
              <img src="{ liquid.img_url(image, '100x') }" alt="{ image.alt }" class="object-center object-cover">
            </div>
          </div>
          {/each}
        </div>
      </div>
    </div>
    <div class="swiper max-w-full" bind:this="{galleryElement}">
    <div class="swiper-wrapper">
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
        <div class="swiper-slide aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4" >
          <div class="swiper-zoom-container" data-swiper-zoom="5">
          <img bind:this="{gallery_images[index]}" src="{ liquid.img_url(image, '500x') }" alt="{ image.alt }" class="w-full h-full object-center object-cover">
          </div>
        </div>
      {/each}
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </div>
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

