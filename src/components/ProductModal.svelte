<script>
    export let addToCartText;
    export let soldOutText;
    export let includeTaxes;
    export let shippingPolicyUrl;
    export let accesibilityError;
    export let quantityMinimumMessage;
    export let shop;

    import Modal from './Modal.svelte';
    import VirtualSelect from './VirtualSelect.svelte';
    import liquid from '../liquivelte-liquid.js';
    import { addToCart, preloadImage } from '../scripts/utils.js';
    import { fade } from 'svelte/transition';
    import ContentLoader from 'svelte-content-loader';

    export let open = false;
    export let handle;
    const qtys = '123456789'.split('');

    let product;

    let loading = false;

    let formNode;

    const PRODUCT_CACHE = {};

    async function loadProduct() {
        PRODUCT_CACHE[handle] = { called: true }
        const res = await fetch(`/products/${handle}?view=json`)
        let prod;
        try{ 
            prod = await res.json(); 
        } catch (err) {
            console.log('Product not found or data is invalid', err);
        }
             
        let options_with_values = [];
        prod.options.forEach((option, i) => {
          options_with_values.push({name: option, position: i+1, values: Array.from(new Set(prod.variants.reduce((c,v) => c.concat([v[`option${i+1}`]]) ,[]))) });
        });

        prod.options_with_values = options_with_values;
       
        await preloadImage(liquid.img_url(prod.media[0], '300x'));

        PRODUCT_CACHE[handle] = { ...PRODUCT_CACHE[handle], product: prod };
    }
    $: if(handle && !(PRODUCT_CACHE[handle]||{}).called) {
        loadProduct();
    }
    
    $: product = (PRODUCT_CACHE[handle]||{}).product;


    async function addToCartHandler(e, form) {
      loading = true;
      await addToCart(form || e.currentTarget);
      loading = false;
    }

    let stripped_description, current_variant_or_first_variant, current_variant, current_variant_id, current_vid;
    
    let variant_image;
    let options = {};

    $: if(!open) {
      options = {}
    }

    $: if(product) {
      stripped_description = (product.description||'').replace(/\(-[^)]+-\)/g, '');
      current_variant_or_first_variant = current_variant || product.variants[0];
     
      current_variant = product.variants.find(variant => {
        // console.log('setting variant ', 
        //  [ variant.option1, variant.option2, variant.option3 ].join(''),
        //  [ decodeURIComponent(options.option1 || ''), decodeURIComponent(options.option2 || ''), decodeURIComponent(options.option3 || '')].join('')
        //  );
        return [ variant.option1, variant.option2, variant.option3 ].join('') == [ decodeURIComponent(options.option1 || ''), decodeURIComponent(options.option2 || ''), decodeURIComponent(options.option3 || '')].join('')
      });

      if(current_variant) {
        const skus = product.variants.map(v => v.sku);
        const sku_images = product.media.filter((media) => {
          if(!media.alt) {
              return 1;
          }
          const contains_sku = skus.some(sku => media.alt.indexOf(sku) != -1);
          const contains_selected_sku = media.alt.indexOf(current_variant.sku) != -1;
          if(contains_sku && !contains_selected_sku) {
              return 0;
          } else {
              return 1;
          }
        })
        if(sku_images.length) {
          variant_image = sku_images[0];
        } else {
          variant_image = product.media[0];
        }
      } else {
        variant_image = product.media[0];
      }
    }

</script>

<Modal bind:open="{open}" >
    {#if product }
    <div transition:fade class="product-modal-form-container">
    <div class="product-modal-image">
      <img src="{liquid.img_url(variant_image, '300x')}" alt="{variant_image.alt || 'Product Image'}" />
    </div>
    <div class="product-modal-form full" >  
        <div class="product-single-title-container">
          <div class="product-single__description-container">
            <span class="product-single__sku simplon"> { (current_variant||product.variants[0]).sku }</span>
              <h1 class="product-single__title simplon text-black f-18">{ product.title } 
            </h1>
            {#if current_variant }
              {#if current_variant.compare_at_price }
                <div class="product__price text-gray f-20 light line-through faded">
                  { liquid.money(current_variant.compare_at_price) }
                </div>
              {/if}
              <div class="product__price text-gray f-20 light">
                { liquid.money(current_variant.price) }
              </div>
            {:else }
              <div class="product__price text-gray f-20 light">
                { liquid.money(product.price_min) } { product.price_varies ? `- ${liquid.money(product.price_max)}`: '' }
              </div>
            {/if}
            
            <div class="product-single__description l-18">
              {@html stripped_description || ''}
            </div>
          </div>
        </div> 
      
          {#if shop.taxes_included }
            <div class="product__policies rte l-18" data-product-policies>
              {#if shop.taxes_included }
                { includeTaxes }
              {/if}
              {#if shop.shipping_policy.body }
                {@html shippingPolicyUrl }
              {/if}
            </div>
          {/if}
          <form bind:this="{formNode}" on:submit|preventDefault="{(e) => addToCartHandler(e, formNode)}" class="product-form " >
                    <input type="hidden" name="form_type" value="product" />
                    <input type="hidden" name="utf8" value="✓">
                    <div class="product-form__controls-group variation-options">
                        {#each  product.options_with_values as option, index  }
                          <div class="selector-wrapper js product-form__item" >
                            <!-- <label for="SingleOptionSelector-{ forloop.index0 }">
                              
                            </label> -->
                            <VirtualSelect bind:value="{options[`option${index+1}`]}" elements="{option.values}" variants="{product.variants}" colors="{ option.name == 'Color' }" placeholder="{option.name == 'Color' ? 'Select Color' : 'Select Size'}" />
                          </div>
                        {/each}
                    </div>
                {#if current_variant}
                  <select name="id" class="product-form__variants no-js" bind:value="{current_variant.id}">
                    {#each  product.variants as variant, index  }
                      <option value="{ variant.id }" >
                        { variant.title } 
                      </option>
                    {/each}
                  </select>
                {/if}
                  
                  <div class="product-form__error-message-wrapper product-form__error-message-wrapper--hidden"
                    data-error-message-wrapper
                    role="alert"
                  >
                    <span class="visually-hidden">{ accesibilityError } </span>
                        <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-error" viewBox="0 0 14 14"><g fill="none" fill-rule="evenodd"><path d="M7 0a7 7 0 0 1 7 7 7 7 0 1 1-7-7z"/><path class="icon-error__symbol" d="M6.328 8.396l-.252-5.4h1.836l-.24 5.4H6.328zM6.04 10.16c0-.528.432-.972.96-.972s.972.444.972.972c0 .516-.444.96-.972.96a.97.97 0 0 1-.96-.96z"/></g></svg>
                    <span class="product-form__error-message" data-error-message>{ quantityMinimumMessage }</span>
                  </div>
      
                  <div class="product-form__controls-group product-form__controls-group--submit">
                      <div class="product-single__qty-select">
                        <select class="product-form__input" 
                            name="quantity" >
                            <!-- {% assign qtys = '123456789' | split: '' %} -->
                            {#each  qtys as qty, index  }
                              <option value="{ qty }" >{ qty }</option>
                            {/each}
                          </select>
                        </div>
                      <button type="submit" name="add"
                        class="button-secondary product-form__cart-submit uppercase">
                        {#if !loading }
                        <span>
                          {#if current_variant_or_first_variant.available }
                            { addToCartText }
                          {:else if current_variant_or_first_variant.next_incoming_date}
                            { liquid.date(current_variant_or_first_variant.next_incoming_date, "%a, %b %d, %y") }
                          {:else}
                            { soldOutText }
                          {/if}
                        </span>
                        {/if}
                        {#if loading } 
                        <span data-loader>
                          <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-spinner" viewBox="0 0 20 20"><path d="M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z" fill="#919EAB"/></svg>
                        </span>
                        {/if}
                      </button>
                  </div>
                </form> 
      </div>
    </div>
    {:else}
    <div >
      <ContentLoader width="640" height="300">
        <rect x="0" y="0" rx="3" ry="3" width="300" height="300" />
        <rect x="340" y="0" rx="3" ry="3" width="150" height="20" />
        <rect x="340" y="40" rx="3" ry="3" width="200" height="40" />
        <rect x="340" y="100" rx="3" ry="3" width="120" height="40" />
        <rect x="340" y="160" rx="3" ry="3" width="300" height="40" />
        <rect x="340" y="220" rx="3" ry="3" width="50" height="40" />
        <rect x="400" y="220" rx="3" ry="3" width="150" height="40" />
      </ContentLoader>
    </div>
    {/if}
</Modal>

<style>
    @media screen and (min-width: 749px) {
    .product-modal-form-container {
      display: grid;
      grid-template-columns: max-content 1fr;
      grid-gap: 30px;
    } 
  }
  @media screen and (max-width: 750px) {
    .product-modal-form-container {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 30px;
    }
  }
</style>