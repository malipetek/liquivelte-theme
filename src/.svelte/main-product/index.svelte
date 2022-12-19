
<script>
  import cachedLiquid from 'liquivelte-liquid.js';
  export let lec;
  const liquid = cachedLiquid(lec);
  let index = 0;

  export let form_inputs_f58d08b6b;
  export let form_props_f58d08b6b;
export let rawinclude_f5b8cf1c;
  export let breadcrumbs;
  export let breadcrumbs_size;
  export let price_formatted;
  export let product;
  export let productƒƒoptions_with_values; 
product.options_with_values = productƒƒoptions_with_values;

  let section = {};
  export let sectionƒƒsettings; 
section.settings = sectionƒƒsettings;
  export let productƒƒselected_or_first_available_variant; 
product.selected_or_first_available_variant = productƒƒselected_or_first_available_variant;
  import ImageGallery from './blocks/image-gallery.liquivelte';
  import Reviews from './blocks/reviews.liquivelte';
  import QuantityBox from '../../snippets/quantity-box.liquivelte';
  const JSTRFY = JSON.stringify;
  
  let selected_options = [null, ...product.selected_or_first_available_variant.options];
  let quantity;
  
  let checked_size = product.options_with_values[0].values[0];
  $: product = {...product, selected_or_first_available_variant: product.variants.find(v => JSTRFY(v.options) == JSTRFY(selected_options.slice(1))) };
  $: console.log('product ', product);
  $: console.log('selected_options ', selected_options);
  $: console.log('checked_size ', product.selected_or_first_available_variant);


</script>
<style lang="postcss" global>
    @tailwind base;
    @tailwind utilities;
</style> 

<div class="bg-white">
  {@html rawinclude_f5b8cf1c[index || 0]}
  <div class="pt-6">
    <!-- Product info -->
    <div class="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
      <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <ImageGallery    breadcrumbs={breadcrumbs} breadcrumbs_size={breadcrumbs_size} price_formatted={price_formatted} product={product}  productƒƒoptions_with_values={productƒƒoptions_with_values} sectionƒƒsettings={sectionƒƒsettings} productƒƒselected_or_first_available_variant={productƒƒselected_or_first_available_variant}  form_props_f58d08b6b={form_props_f58d08b6b} form_inputs_f58d08b6b={form_inputs_f58d08b6b}  rawinclude_f5b8cf1c={rawinclude_f5b8cf1c} lec={lec} />
        <div class="h-8 md:h-20"></div>
        <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{ section.settings.product_title } </h1>
      </div>

      <!-- Options -->
      <div class="mt-4 lg:mt-0 lg:row-span-3">
        <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{ product.title }</h1>
        <h2 class="sr-only">Product information</h2> 
        <p class="text-3xl text-gray-900 mt-4">{ price_formatted }</p>

        <Reviews    breadcrumbs={breadcrumbs} breadcrumbs_size={breadcrumbs_size} price_formatted={price_formatted} product={product}  productƒƒoptions_with_values={productƒƒoptions_with_values} sectionƒƒsettings={sectionƒƒsettings} productƒƒselected_or_first_available_variant={productƒƒselected_or_first_available_variant}  form_props_f58d08b6b={form_props_f58d08b6b} form_inputs_f58d08b6b={form_inputs_f58d08b6b}  rawinclude_f5b8cf1c={rawinclude_f5b8cf1c} lec={lec} />

        <form   class="mt-10"  {...form_props_f58d08b6b[index || 0]}>
  {@html form_inputs_f58d08b6b[index || 0]}
          
          <input type="hidden" name="id" value="{ product.selected_or_first_available_variant.id }">
          <div class="">
            {#each  product.options_with_values as option, index  }
{@const forloop = {
  first: index === 0,
  index: index + 1,
  index0: index,
  last: index === ( product.options_with_values).length - 1,
  rindex: ( product.options_with_values).length - index,
  rindex0: ( product.options_with_values).length - index - 1,
  length: ( product.options_with_values).length,
} }
              <!-- {% comment %} -->
               {@const option_index = forloop.index0 }
               <!-- {% endcomment %} -->
              <!-- {% assign option_index = forloop.index0 %} -->
              <h3 class="text-sm text-gray-900 font-medium mt-4"> Choose a { option.name }</h3> 
              <!-- <div class="ring ring-offset-1" > </div> -->
              <fieldset class="mt-4">
                <legend class="sr-only">Choose a { option.name }</legend>
                {#if option.name == 'Color' }
                <div class="flex items-center space-x-3">
                  {#each  option.values as value, index  }
{@const forloop = {
  first: index === 0,
  index: index + 1,
  index0: index,
  last: index === ( option.values).length - 1,
  rindex: ( option.values).length - index,
  rindex0: ( option.values).length - index - 1,
  length: ( option.values).length,
} }
                    <label 
                        class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400"
                        class:ring="{ value == product.selected_or_first_available_variant.options[option_index] }"
                        class:ring-offset-1="{ value == product.selected_or_first_available_variant.options[option_index] }"
                        >
                      {#if value == product.selected_or_first_available_variant.options[option_index] }
                        <input type="radio" bind:group="{ selected_options[option.position] }" name="color-choice" value="{ value }" class="sr-only" aria-labelledby="color-choice-0-label" checked>
                      {:else}
                        <input type="radio" bind:group="{ selected_options[option.position] }" name="color-choice" value="{ value }" class="sr-only" aria-labelledby="color-choice-0-label" >
                      {/if}
                      <p id="color-choice-0-label" class="sr-only">{ value }</p>
                      <span aria-hidden="true" class="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full"></span>
                    </label>
                  {/each}
                </div>
                {:else}
                <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                  {#each  option.values as value, index  }
{@const forloop = {
  first: index === 0,
  index: index + 1,
  index0: index,
  last: index === ( option.values).length - 1,
  rindex: ( option.values).length - index,
  rindex0: ( option.values).length - index - 1,
  length: ( option.values).length,
} }
                      <label 
                      class="group relative border rounded-md py-3 hover:bg-indigo-400 hover:text-white px-4 flex items-center justify-center text-sm font-medium uppercase focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm cursor-pointer"
                      class:bg-indigo-600="{ value == product.selected_or_first_available_variant.options[option_index] }" 
                      class:text-white="{ value == product.selected_or_first_available_variant.options[option_index] }" 
                      class:text-gray-900="{ value != product.selected_or_first_available_variant.options[option_index] }" 
                      >
                        {#if value == product.selected_or_first_available_variant.options[option_index] }
                          <input type="radio" bind:group="{ selected_options[option.position] }" name="size-choice" value="{ value }" class="sr-only" aria-labelledby="size-choice-1-label" checked>
                        {:else}
                          <input type="radio" bind:group="{ selected_options[option.position] }" name="size-choice" value="{ value }" class="sr-only" aria-labelledby="size-choice-1-label" >
                        {/if}
                        <p id="size-choice-1-label">{ value }</p>
                        <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                      </label>
                  {/each}
                </div>
                {/if}
              </fieldset>
            {/each}
          </div>
          <div class="mt-10">
            <label class="text-base"> Quantity </label>
              <QuantityBox  bind:quantity   breadcrumbs={breadcrumbs} breadcrumbs_size={breadcrumbs_size} price_formatted={price_formatted} product={product}  productƒƒoptions_with_values={productƒƒoptions_with_values} sectionƒƒsettings={sectionƒƒsettings} productƒƒselected_or_first_available_variant={productƒƒselected_or_first_available_variant}  form_props_f58d08b6b={form_props_f58d08b6b} form_inputs_f58d08b6b={form_inputs_f58d08b6b}  rawinclude_f5b8cf1c={rawinclude_f5b8cf1c} lec={lec} />
          <div>
          <button type="submit" class="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add to bag</button>
        </form>
      </div>

      <div class="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <!-- Description and details -->
        <div>
          <h3 class="sr-only">Description</h3>

          <div class="space-y-6">
            <p class="text-base text-gray-900"> {@html product.description || ''}</p>
          </div>
        </div>

        <div class="mt-10">
          <h3 class="text-sm font-medium text-gray-900">Highlights</h3>

          <div class="mt-4">
            <ul role="list" class="pl-4 list-disc text-sm space-y-2">
              <li class="text-gray-400"><span class="text-gray-600">Hand cut and sewn locally</span></li>

              <li class="text-gray-400"><span class="text-gray-600">Dyed with our proprietary colors</span></li>

              <li class="text-gray-400"><span class="text-gray-600">Pre-washed &amp; pre-shrunk</span></li>

              <li class="text-gray-400"><span class="text-gray-600">Ultra-soft 100% cotton</span></li>
            </ul>
          </div>
        </div>

        <div class="mt-10">
          <h2 class="text-sm font-medium text-gray-900">Details</h2>

          <div class="mt-4 space-y-6">
            <p class="text-sm text-gray-600">The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming &quot;Charcoal Gray&quot; limited release.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

