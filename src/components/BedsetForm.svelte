<script>
  export let page = {};
  export let form_data = {};
  export let color_families = {};

  import { handleize } from "../scripts/utils.js";
  import { onMount, tick } from "svelte";
  import VirtualSelect from "./VirtualSelect.svelte";
  import liquid from '../liquivelte-liquid.js';
  import { addToCart } from '../scripts/utils.js';

  const qtys = '123456789'.split('');

  let sections = form_data.sections;

  const COLLECTIONS_CACHE = {};
  const PRODUCTS_CACHE = {};
  let type_select = sections.find((s) => s.type == "dropdown");
  let color_fam_selection;
  let sizeSelection;
  let products = [];

  async function getProds(url_) {
    const l = window.location;
    const url = new URL(
      `${l.protocol}//${l.hostname}/collections/${url_}`
    );
    url.searchParams.set("view", "json");
    url.searchParams.set("limit", 100);
    url.searchParams.set("page", 1);
    url.searchParams.set("id", Math.random() * 9e9);
    let res 
    let resjson 
    let products 
    try{ 
      res = await fetch(url);
      resjson = await res.json();
      products = resjson.products;

    } catch (err) {
      products = [];
    }
    return products;
  }

  async function getProd(handle) {
      const res = await fetch(`/products/${handle}?view=json`)
      let prod;
      try{ 
        prod = await res.json(); 
      } catch(err) {
        prod = {};
      }
      return prod;
  }

  $: sections = sections.map((section) => {
    if (section.condition_field && section.condition_value) {
      const condition_met =
        sections.find((s) => s.id == section.condition_field).selection ==
        section.condition_value;
      return { ...section, condition_met };
    } else {
      return { ...section, condition_met: false };
    }
  });

  let active_filters = [];
  $: active_filters = sections.filter((sec) => sec.condition_met);

  async function populateCollection(url) {
    if(!url) return [];
      let cache = COLLECTIONS_CACHE[`${url}`];
      if (!cache) {
        COLLECTIONS_CACHE[`${url}`] = await getProds(
          url
        );
      }
      return COLLECTIONS_CACHE[`${url}`];
  }
  async function populateProduct(handle) {
    if(!handle) return [];
      let cache = PRODUCTS_CACHE[`${handle}`];
      if (!cache) {
        PRODUCTS_CACHE[`${handle}`] = await getProd(
          handle
        );
      }
      return PRODUCTS_CACHE[`${handle}`];
  }

  // $: console.log('form_sections', form_sections);

  let form_sections = [];
  $: form_sections = sections.filter((sec) => sec.type == "product_form");

  $: if (active_filters.length) {
      active_filters.forEach((section) => {
        form_sections.forEach(form_section => {
          form_section.collections_to_get = form_section.collections_to_get || {};
          (section.collections || []).map((collection) => {
            const collection_to_get = collection.handle;
            const tags_to_get = (form_section.collections || []).map((col) => {
                  return col.ruleSet.rules.map((r) => r.condition)
            }).concat(form_section.tags).map(t => handleize(t)).join('+');
            
            form_section.collections_to_get[`${collection_to_get}/${tags_to_get}`] = {url: `${collection_to_get}/${tags_to_get}`};
          
          });
        });
      });
    }

  onMount(() => {});

  function genCompositeProduct(products_arr) {
    // console.log('products_arr', products_arr);
    let all_prods = products_arr.reduce((c,p) => c.concat(p), []);
    // console.log('all prods', all_prods);
    all_prods = all_prods.filter(e=>e);
    all_prods.forEach(prod => {
      let colorOption = prod.options.indexOf(prod.options.find((op) => op == 'Color' || (op||{}).name == 'Color')) + 1;
      let sizeOption = prod.options.indexOf(prod.options.find((op) => op == 'Size' || (op||{}).name == 'Size')) + 1;
      let sizeOptionMapping;
      if(sizeOption) {
        sizeOptionMapping = prod.variants.map(v => {
          if(/king|queen|standard|twin/i.test(v[`option${sizeOption}`])) {
            return { 
              value: v[`option${sizeOption}`], 
              isKing: /king/i.test(v[`option${sizeOption}`]) ? true : false,
            }
          }
          if(v[`option${sizeOption}`].match(/\d+/)) {
            return {
              value: v[`option${sizeOption}`], 
              number: v[`option${sizeOption}`].match(/\d+/)[0]
            }
          }
        });
        let kingOne;
        if(sizeOptionMapping.every(Boolean) && !sizeOptionMapping.some(e => e.isKing)) {
          kingOne = Math.max.apply(null, sizeOptionMapping.map(e => e.number));
          sizeOptionMapping = sizeOptionMapping.map(e => {
            return {...e, isKing: e.number == kingOne }
          });
        }
      }

      prod.variants_filtered = prod.variants.filter(variant => {
        let sizeMatch, colorMatch;
        if(colorOption && color_fam_selection) {
          colorMatch = color_families.families.find(fam => fam.title == color_fam_selection).children.some(clr => clr.title == variant[`option${colorOption}`])
        }
        if(sizeOption && sizeSelection) {
          const kingOptions = Array.from(new Set(sizeOptionMapping.filter(e => e.isKing).map(e => e.value)));
          let isKing = kingOptions.indexOf(variant[`option${sizeOption}`]) != -1;
          sizeMatch = sizeSelection == 'king' ? isKing : !isKing;
        }
        return (!sizeOption || sizeMatch) && (!colorOption || colorMatch);
      })
    })
    const all_variants = all_prods.reduce((c,p) => c.concat(p.variants_filtered), []);
    return all_variants;
  }

  $: if(form_sections) {
    form_sections.forEach(form => {
      if(form.options_type == 'tags' || form.options_type == 'collection') {
        Object.keys(form.collections_to_get || {}).map(key => form.collections_to_get[key]).forEach(collection => {
          if(!collection.called) {
            collection.called = true;
            populateCollection(collection.url);
          }
        })
      } else if(form.options_type == 'products') {
        form.products.forEach(prod => {
          if(!prod.called) {
            prod.called = true;
            populateProduct(prod.handle);
          }
        })
      }
    })
  }
  // $: if(form_sections) {
  //   form_sections.forEach(form => {
  //     active_filters.forEach(filter => {
  //       form.urls = form.urls || {};
  //       form.urls
  //       populateCollection(form.collections_to_get)
  //     })
  //   })
  // }

  // let loadingForms = false;
  // $: if(active_filters.length && !loadingForms) {
  //   (async() => {
  //         form_sections = form_sections.map(form => ({...form, loading: true}));
  //         loadingForms = true;
  //         const new_sections = (await Promise.all(form_sections.map(async form => {
  //           const products = await populateCollection(form.collections_to_get)
  //           return {...form, products, loading: false };
  //         })))
  //         form_sections = new_sections;
  //     })()
      
  //   }
    
  async function addToCartHandler(e, form) {
    loading = true;
    await addToCart(form || e.currentTarget);
    loading = false;
  }

    $: if(active_filters.length && sizeSelection && color_fam_selection) {
      form_sections = form_sections.map(form => {
        if(form.options_type == 'tags' && form.collections_to_get && Object.keys(form.collections_to_get).length) {
          const all_prods = Object.keys(form.collections_to_get).map(key => form.collections_to_get[key]).reduce((c, col) => c.concat(COLLECTIONS_CACHE[col.url]||[]), []);
          return {...form, filtered_prods: genCompositeProduct(all_prods) }
        } else if(form.options_type == 'products') {
          let all_prods = form.products.map(prod => PRODUCTS_CACHE[prod.handle]);
          if(form.select_products) {
            all_prods = all_prods.filter(prod => prod.id == form.active_product);
          }
          return {...form, filtered_prods: genCompositeProduct(all_prods) }
        } else {
          return form;
        }
      })
    }

    let loading = false;

    let form_nodes = [];

    function typeChangeHandler(el) {
      const images = document.querySelectorAll('.type-svg');
      const imageSelected = document.querySelector(`[data-title=${el.text.toLowerCase()}]`)
      if(imageSelected) {
        images.forEach(img => img.classList.add('hide'));
        imageSelected.classList.remove('hide');
        imageSelected.classList.add('grid-col-2');
      } else {
        images.forEach(img => img.classList.remove('hide'));
        images.forEach(img => img.classList.remove('grid-col-2'));

      }
    }

    // $: console.log('form sections', form_sections);
    // $: console.log('Products cache', PRODUCTS_CACHE);
</script>

<div>
  <h1 class="f-26 simplon mb-30 text-center">Build Your Own Bedding Set</h1>
  <div class="bedset-form-container">
    <div class="bedset-form-image-container">
      {@html page.content}
    </div>
    <div class="bedset-form-options-container">
      <label for="type-select" class="f-11 text-gray mt-20"> {type_select.label} </label>
      <VirtualSelect bind:value={sections[
        sections.indexOf(sections.find((s) => s.type == "dropdown"))
      ].selection}
      onchange={typeChangeHandler}
      elements={
          type_select.options.map(opt => ({ 
            id: opt.id,
            value: opt.id,
            text: opt.name
          }))
        } 
      />
      <p class="bed-form-paragraph">
        A bed styled in for a Casual bedroom has simple components that
        nonetheless make the bed comfortable and beautiful. The back pillows are
        often euros, with standard or king shams in front. A coverlet is topped
        with a folded duvet, possibly a throw. Sheets finish the look! The
        Casual style is a great spot to use our Art of Home Duvet Sets and
        Coverlet Sets.
      </p>
      <div class="bedset-form-size-color-container form-row">
        <div>
          <label for="size-select"> Select a Size </label>
          <VirtualSelect 
          bind:value="{sizeSelection}"
          placeholder="Select Size"
          elements={[
            {
              id: 'king',
              text: 'King',
              value: 'king'
            },
            {
              id: 'queen',
              text: 'Queen',
              value: 'queen'
            }
          ]}
          />
        </div>
        <div>
          <label for="size-select"> Select a Color </label>
          <VirtualSelect
            colors={true}
            bind:value="{color_fam_selection}"
            placeholder="Select Color Family"
            elements={color_families.families.map((fam) => ({
              id: fam.title,
              text: fam.title,
              value: fam.title,
              color: fam.color,
            }))}
          />
          <select id="size-select">
            {#each color_families.families as fam, index (fam.title)}
              <option value={fam.title}> fam.title </option>
            {/each}
          </select>
        </div>
      </div>
    </div>
    <div class="bedset-form-prods-container">
      {#each form_sections as form, index (form.id) }
      <form bind:this="{form_nodes[index]}" on:submit|preventDefault="{(e) => addToCartHandler(e, form_nodes[index])}" class="product-form " >
        <input type="hidden" name="form_type" value="product" />
        <input type="hidden" name="utf8" value="✓">
        <input name="id" type="text" hidden bind:value="{form.selection}">
        {#if form.loading }
          Loading...
        {:else }
          {#if form.filtered_prods && form.filtered_prods.length || form.options_type == 'products'}
          <div class="bedset-form-row">
            <div class="bedset-form-title-desc-image">
              <div class="bedset-form-product-image-container">
                <img src={liquid.img_url(((form.filtered_prods||[]).find(v => v.id == form.selection) || {}).featured_image, '240x')} />
              </div>
              <div class="bedset-form-title-desc">
                <h2 class="f-18 text-black simplon mb-0"> 
                  { form.label } 
                </h2>
                <p class="f-12 text-gray"> 
                  { form.description } 
                </p>
              </div>
            </div>
            <div class="bedset-form-selection-actions">
              <div 
              class="bedset-form-selection"
              class:dual={form.select_products}>
            {#if form.select_products } 
              <VirtualSelect 
              onchange="{(el) => form.active_product = el.value }"
              class="second-prod-selection"
              elements={
                form.products.map(prod => PRODUCTS_CACHE[prod.handle]).filter(e=>e).map(prod => ({
                  id: prod.id,
                  value: prod.id,
                  text: prod.title
                }))
                } 
              />
            {/if}
            {#if form.filtered_prods }
            <VirtualSelect 
            onchange="{(el) => form.selection = el.value }"
            elements={
              form.filtered_prods.map(variant => ({
                id: variant.id,
                value: variant.id,
                text: variant.name
              }))
            } 
            />
            {/if}
          </div>
          <div class="bedset-form-actions">
              <div class="product__price text-gray f-20 light">
                { liquid.money(((form.filtered_prods||[]).find(v => v.id == form.selection) || {}).price) }
              </div>
              <VirtualSelect class="quantity-select" initial="1" name="quantity" elements={qtys} />
                <button type="submit" name="add"
                class="button-secondary product-form__cart-submit uppercase">
                {#if !loading }
                <span>
                  {#if ((form.filtered_prods||[]).find(v => v.id == form.selection) || {}).available }
                    Add to Cart
                  {:else if ((form.filtered_prods||[]).find(v => v.id == form.selection) || {}).next_incoming_date }
                    { liquid.date(((form.filtered_prods||[]).find(v => v.id == form.selection) || {}).next_incoming_date, "%a, %b %d, %y") }
                  {:else }
                    Not Available
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
            </div>
          </div>
          {/if}
        {/if}
        </form>
      {/each}
    </div>
  </div>
</div>

<style>
.grid-col-2 {
  grid-column: span 2;
}
.type-svg {
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 25px 40px 25px;
}
.type-svg.grid-col-2 {
    border: none;
}

.type-svg:nth-child(3), .type-svg:nth-child(4) {
    border-top-width: 0;
}
.type-svg:nth-child(1), .type-svg:nth-child(3) {
    border-right-width: 0;
}
.type-svg:before {
    content: attr(data-title);
    font-size: 20px;
    font-family: SimplonNorm;
    text-align: center;
    display: block;
    margin-bottom: 30px;
    margin-top: 10px;
    text-transform: capitalize;
    flex: 1 1 100%;
}

.bedset-form-title-desc-image {
  display: flex;
}
  .bed-form-paragraph {
    line-height: 26px;
    font-size: 14px;
    color: var(--color_text_gray);
    margin-top: 20px;
    margin-bottom: 30px;
  }
  .bedset-form-container {
    display: grid;
    grid-template-areas:
      "image content"
      "products products";
    grid-template-columns: 1fr 1fr;
  }

  .bedset-form-image-container img {
    border: 1px solid #f8f7f8;
  }

  .bedset-form-image-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .bedset-form-product-image-container {
      margin-right: 20px;
      width: 120px;
  }

  .bedset-form-options-container {
    grid-area: content;
    background-color: #f8f7f8;
    padding: 20px 70px;
  }
  .bedset-form-prods-container {
    grid-area: products;
  }
  .bedset-form-row {
    display: flex;
    padding: 20px;
    justify-content: space-between;
  }
  .bedset-form-selection {
    display: flex;
    margin-bottom: 20px;
  }
  .bedset-form-selection.dual {
    width: 200%;
    right: 100%;
    position: relative;
  }
  .second-prod-selection {
    position: relative;
    right: 20px;
  }
  .bedset-form-selection-actions {
    flex: 0 1 300px;
    display: flex;
    flex-direction: column;
}

.bedset-form-title-desc {
    flex: 0 1 400px;
}

.bedset-form-selection-actions>.virtual-select-container {
  margin-bottom: 20px;
}

.bedset-form-actions {
    display: flex;
    position: relative;
    align-items: center;
}

.bedset-form-actions>* {
    line-height: 1!important;
}
.bedset-form-actions .product-form__cart-submit{
  min-width: 120px;
}

.bedset-form-actions .product__price {
    position: absolute;
    right: 100%;
}
.bedset-form-actions .quantity-select {
    width: auto;
    margin-right: 20px;
}
</style>
