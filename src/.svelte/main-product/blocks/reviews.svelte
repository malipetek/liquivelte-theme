
<script>
  import { getContext, setContext } from 'svelte';
  export let themeImports = getContext('svelteProps');
  export let rawIncludes = getContext('rawIncludes');
  export let lec = getContext('lec');

  import cachedLiquid from 'liquivelte-liquid.js';
  const liquid = cachedLiquid(lec);
  let index = 0;

  export let review_stars = themeImports['review_stars'];
  export let score = themeImports['score']; 
  export let reviews_count = themeImports['reviews_count'];

  console.log('review_stars ', review_stars);
</script>
<!-- Reviews -->
 <div class="mt-6">
  <h3 class="sr-only">Reviews</h3>
  <div class="flex items-center">
    <div class="flex items-center">
      <!--
        Heroicon name: solid/star

        Active: "text-gray-900", Default: "text-gray-200"
      -->
      {#each  review_stars as star, index   }
{@const forloop = {
  first: index === 0,
  index: index + 1,
  index0: index,
  last: index === ( review_stars).length - 1,
  rindex: ( review_stars).length - index,
  rindex0: ( review_stars).length - index - 1,
  length: ( review_stars).length,
} }
        {#if score < forloop.index }
        <!-- Heroicon name: solid/star -->
        <svg class="text-gray-200 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        {:else}
        <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        {/if}
      {/each}
    </div>
    <p class="sr-only">4 out of 5 stars</p>
    <a href="#" class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">{ reviews_count } reviews</a> 
  </div>
</div> 

