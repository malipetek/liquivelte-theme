<script>
export let form_data;
export let all_tags;
export let all_collections;
export let title;
export let addToCartText = 'Add to Cart';
export let soldOutText;
 
import { addToCart } from '../scripts/utils.js';
import Carousel from './Carousel.svelte';
import VirtualSelect from './VirtualSelect.svelte';

import { onMount, tick } from 'svelte';
import { slide } from 'svelte/transition';

let all_prods = [];
import liquid from '../liquivelte-liquid.js';
let initialized = false;

form_data.allOptions = form_data.allOptions.map(opt => ({...opt, values: []}));
let step_index = 1;
form_data.sections = form_data.sections.map(section => {
    if(section.type) {
        section.step_index = step_index;
        step_index++;
    }
    return section;
});

form_data.allOptions = form_data.allOptions.map(option => {
    if(option.checked) {
        option.step_index = step_index;
        step_index++;
    }
    return option;
});

const qtys = '123456789'.split('');
let loading = false;

onMount(async () => {
    initialized = true;
    await Promise.all(form_data.allHandles.map(async handle => {
        const res = await fetch(`/products/${handle}?view=json`);
        let slave_prod = {variants: []};

        const res_slave = await fetch(`/products/${handle}-2?view=json`);

        try {
            slave_prod = await res_slave.json();
        } catch(err) {
            // whatever
        }
        try{ 
            const prod = await res.json();
            prod.variants = [...prod.variants, ...slave_prod.variants];
            all_prods = [...all_prods, prod];
            if(!prod.media.length) {
                prod.media = [{
                    src: '',
                    alt: ''
                }]
            } 
            /* -------------------------------------------------- */
            let options_with_values = [];
            prod.options.forEach((option, i) => {
                options_with_values.push({name: option, position: i+1, values: Array.from(new Set(prod.variants.reduce((c,v) => c.concat([v[`option${i+1}`]]) ,[]))) });
            });
            
            prod.options = options_with_values;
            /* -------------------------------------------------- */
            
            form_data.sections = form_data.sections.map(section => {
            if(section.options_type == 'products') {
                return {...section, products: section.products.map(p => p.handle == prod.handle ? {...prod, ...p} : p) };
            } else {
                return section;
            }
        })
    } catch(err) {
        console.log('could not get product ', handle, err);
    }
    }));

    form_data.sections = form_data.sections.map(section => {
        if(section.label == "Select a Category") {
            return {...section, selection: 1 }
        } else {
            return section;
        }
    })
    form_data.allOptions = form_data.allOptions.filter(op => op.checked).map(optionToUse => {
        let all_values = [];
        all_prods.forEach(prod => {
            all_values = all_values.concat((prod.options.find(opt => opt.name == optionToUse.name) || {values: []}).values)
        });
        optionToUse.values = Array.from(new Set(all_values))
        return optionToUse;
    })
})

$: form_data.sections = form_data.sections.map(section => {
    if(section.condition_field && section.condition_value) {
        const condition_met = form_data.sections.find(s => s.id == section.condition_field).selection == section.condition_value;
        return {...section, condition_met }
    } else {
        return {...section, condition_met: true}
    }
});

let visibleSections = [];

$: if(form_data.sections) {
    form_data.sections = form_data.sections.map(section => {
        if(section.selection_el) {
            const d = document.createElement('div');
            d.innerHTML = section.selection_el.el;
            const handle = d.children[0].getAttribute('data-collection-handle') || d.children[0].getAttribute('data-product-handle');
            return {...section, selection: handle }
        } else {
            return section;
        }
    });

    form_data.sections = form_data.sections.map(section => {
        if(section.selection && section.type == 'dropdown') {
            return {...section, selection_name: section.options.find(o => o.id == section.selection).name }
        }else if(section.selection && section.options_type == 'products') {
            return {...section, selection_name: section.products.find(o => o.handle == section.selection).name_overwrite }
        } else {
            return section;
        }
    });

    visibleSections = form_data.sections.filter(section => section.type && section.condition_met)
    
} 
    let selectionProducts;

   /*  $: selectionProducts = all_prods.map(prod => {
        const filter_tags = form_data.sections.filter(s => s.option_type == 'tags').reduce((c, s) => c.concat(s.tags),[])
        const filter_collections = form_data.sections.filter(s => s.option_type == 'tags').reduce((c, s) => c.concat(s.collections.reduce((_c,col) => _c.concat(col.ruleSet.rules.filter(rule => rule.column == 'TAG').reduce((__c, r) => __c.concat([r.condition]), []) ),[])) ,[])
        console.log('filter_collections', filter_collections);

        const options = form_data.allOptions.filter(opt => opt.checked && opt.selection).map(opt => ({name: opt.name, value: opt.selection}));

        const tags_found = filter_tags.every(t => prod.tags.indexOf(t) != -1) 
        && filter_collections.every(t => prod.tags.indexOf(t) != -1)
        
        const variants_found = prod.variants.filter(variant => {
            return options.every(option => {
                return variant[`option${(prod.options.find(opt => opt.name == option.name)|| {}).position}`] == option.value;
            });
        });
        if(tags_found && variants_found.length) {
            return { product: prod, variants: variants_found };
        }        
    }).filter(e => !!e); */
    
    let selectionProductsFirst;
    let sectionWithProduct;
    let currentOptions;

    $: sectionWithProduct = form_data.sections.find(section => (section.options_type == 'products' && section.selection));
    $: if(sectionWithProduct) {
        selectionProductsFirst = sectionWithProduct.products.find(prod => prod.handle == sectionWithProduct.selection);
    }
    async function addToCartHandler(e, form) {
    loading = true;
    await addToCart(form || e.currentTarget);
    loading = false;
  }

  let formNode;

  let variantSelected;

  $: variantSelected = form_data.sections.filter(section => section.options_type == 'products')
  .map(section => { 
        const selected_prod = section.products.find(p => p.handle == section.selection) 
        if(selected_prod) {
            const selections = selected_prod.options.map(o => o.selection);
            const variant_found = selected_prod.variants.find(v => v.options.every(opt => selections.indexOf(opt) != -1) );
            if(variant_found) {
                return variant_found;
            }
        }
    }).find(e => e);

      
//   $: console.log('form_data.sections ', form_data.sections);
</script>
<div class="grid__item medium-up--one-half custom-form-left-column">
    <h2 class="simplon f-26">{ title }</h2>
    
<div class="custom-form curtain-form">
    {#if initialized }
    {#each visibleSections as section, index (section.id) }
        <div class="form-field mb-50 simplon">
            <div class="f-18 mb-10"> <span class="step-gray"> Step { index + 1 }: </span> <span> { section.label } </span></div>
            {#if section.type == 'carousel' && section.options_type == 'collection' }
            <span class="hide"> { section.id } </span>
            <Carousel items="{window.innerWidth > 750 ? 4 : 3}" bind:elementSelected="{section.selection_el}" margin="{8}" arrowSize="{16}">
                {#each  section.collections as collection, index  }
                <div class="collection-thumb" data-collection-handle="{ collection.handle }">
                    <div class="collection-thumb-image">
                        <div class="collection-thumb-image-cropper">
                            <div class="collection-thumb-image-el no-zoom" style="background-image: url({ liquid.crop(liquid.img_url(collection.image, '500x500'), 'center') })" ></div>
                        </div>
                    </div>
                    <div class="collection-thumb-title f-16 text-gray text-center"> { collection.title } </div>
                </div>
                {/each}
            </Carousel>
            {/if}
            {#if section.type == 'carousel' && section.options_type == 'products' }
            <span class="hide"> { section.id } </span>
            <Carousel items="{window.innerWidth > 750 ? 4 : 3}" bind:elementSelected="{section.selection_el}" margin="{8}" arrowSize="{16}">
                {#each  section.products as product, index  }
                    {#if product.media && product.media.length > 0 }
                        <div data-product-handle="{ product.handle }">
                            <div class="product-card-item selectable" >
                                    <img 
                                    style="width: 100%"
                                    class=""
                                    alt="{ product.media[0].alt }"
                                    src="{ liquid.scale(liquid.crop(liquid.img_url(product.media[0].src, '200x200'), 'center'), 2) }"
                                    data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]"
                                    data-aspectratio="{ product.media[0].aspect_ratio }"
                                    data-sizes="auto"
                                    data-image />
                                </div>
                                <div class="product-card-title"> { liquid.default(product.name_overwrite, product.title) }</div>
                        </div>
                    {/if}
                {/each}
            </Carousel> 
            {/if}
            {#if section.type == 'dropdown' }
                <VirtualSelect onchange="{ e => { form_data.sections = form_data.sections.map(s => s.id == section.id ? {...s, selection: e.value }: s) } }" initial="{visibleSections[index].selection}" elements="{section.options.map(option => ({text: option.name, value: option.id, id: option.name }))}"></VirtualSelect>
                <!-- <select class="w-100 form-elements-row" >
                    <option value={undefined}> Select </option>
                    {#each  section.options as option, index }
                        <option value="{ option.id }">{ liquid.capitalize(option.name) }</option>
                    {/each}
                </select> -->
            {/if}
        </div>
    {/each}
    {#if selectionProductsFirst && selectionProductsFirst.options}
        {#each selectionProductsFirst.options as option, index (option.name)  }
                <div class="form-field mb-50 simplon">
                    <div class="f-18 mb-10"> <span class="step-gray"> Step { visibleSections.length + index + 1 }: </span> <span> Select your { option.name } </span></div>
                    <VirtualSelect bind:value="{option.selection}" elements={option.values.map(value => ({text: value, value: value, id: value}))}></VirtualSelect>
                    <select bind:value="{option.selection}">
                        <option value={undefined}> Select </option>
                        {#each option.values as value, index  }
                            <option value="{ value }"> { value } </option>
                        {/each}
                    </select>
                </div>
        {/each}
    {:else }
        <div class="disabled-section">
            {#if all_prods.length }
                {#each all_prods[0].options as option, index (option.name)  }
                    <div class="form-field mb-50 simplon">
                        <div class="f-18 mb-10"> <span class="step-gray"> Step { visibleSections.length + index + 1 }: </span> <span> Select your { option.name } </span></div>
                        <select>
                            <option value={undefined}> Select </option>
                        </select>
                    </div>
                {/each}
            {/if}
        </div>
    {/if}
{/if}
</div>
</div>
<div class="grid__item medium-up--one-half ">
    <h2 class="simplon f-26"> Your Custom Curtain </h2>
    <form bind:this="{formNode}" on:submit|preventDefault="{(e) => addToCartHandler(e, formNode)}" class="product-form " >
        <input type="hidden" name="form_type" value="product" />
        <input type="hidden" name="utf8" value="✓">
                <div class="product-single__description l-18">
                    {#if selectionProductsFirst && selectionProductsFirst.description}
                        {@html selectionProductsFirst.description }
                    {/if}
                </div>
                {#if variantSelected }
                <select name="id" hidden class="product-form__variants no-js" value="{variantSelected.id}">
                    {#if selectionProductsFirst }
                        {#each selectionProductsFirst.variants as variant, index  }
                        <option value="{ variant.id }" >
                            { variant.title } 
                        </option>
                        {/each}
                    {/if}
                </select>
                {/if}

                <div class="custom-form-selections-container">
                    {#each  form_data.sections as section, index  }
                        {#if section.type && section.condition_met && section.result_visible }
                            <div class="custom-form-selection-left">
                                {#if section.result_label }
                                    { section.result_label }: 
                                {:else}
                                    { section.label }: 
                                {/if}
                        </div>
                            <div class="custom-form-selection-right">
                                <div class="custom-form-selection-selection">
                                    {#if section.selection_name }
                                        { section.selection_name }
                                    {:else}
                                        { liquid.default(section.selection, '') }
                                    {/if}
                                </div>
                                <div class="custom-form-selection-comment">
                                </div>
                            </div>
                        {/if}
                    {/each}
                    {#if selectionProductsFirst}
                    {#each selectionProductsFirst.options as option, index (option.name) }
                            <div class="custom-form-selection-left">
                                { option.name }:
                            </div>
                            <div class="custom-form-selection-right">
                                <div class="custom-form-selection-selection">
                                    { option.selection || '' } 
                                </div>
                                <div class="custom-form-selection-comment">
                                </div>
                            </div>
                    {/each}
                    {:else }
                        {#if all_prods.length }
                            {#each all_prods[0].options as option, index (option.name) }
                            <div class="custom-form-selection-left">
                                { option.name }:
                            </div>
                            <div class="custom-form-selection-right">
                                <div class="custom-form-selection-selection">
                                   {"  "}
                                </div>
                                <div class="custom-form-selection-comment">
                                </div>
                            </div>
                            {/each}
                            {/if}
                    {/if}
                </div>
                <div class="product-form__controls-group product-form__controls-group--submit">
                    {#if variantSelected}
                        {#if variantSelected.compare_at_price }
                        <div class="product__price text-gray f-20 light line-through faded">
                        { liquid.money(variantSelected.compare_at_price) }
                        </div>
                        {/if}
                        <div class="product__price text-gray f-20 light">
                            { liquid.money(variantSelected.price) }
                        </div>    
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
                                {#if variantSelected.available }
                                    { addToCartText }
                                {:else if variantSelected.next_incoming_date}
                                { liquid.date(variantSelected.next_incoming_date, "%a, %b %d, %y") }
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
                            {:else}
                            
                            <div class="product__price text-gray f-20 light disabled-section">
                                { liquid.money(0) }
                            </div>    
                            <div class="product-single__qty-select disabled-section ">
                                <select class="product-form__input" 
                                    name="quantity" >
                                    <!-- {% assign qtys = '123456789' | split: '' %} -->
                                    {#each  qtys as qty, index  }
                                        <option value="{ qty }" >{ qty }</option>
                                    {/each}
                                    </select>
                                </div>
                                <button type="submit" name="add"
                                class="button-secondary product-form__cart-submit uppercase disabled-section ">
                                <span>
                                    { addToCartText }
                                </span>
                                </button>
                            {/if}
                        </div>
    </form>
</div>
<style>
    .custom-form .product-card-item {
        padding-top: calc(100% - 2px);
    }
    .custom-form .product-card-item img {
        width: calc(100% - 15px)!important;
        position: absolute;
        top: 7.5px;
        left: 7.5px;
    }
    .custom-form .product-card-title {
        text-align: center;
        margin-right: 6.5px;
    }
    .curtain-form .slider-element {
        margin-right: 8px!important;
        margin-left: 8px!important;
    }
    .slider-element .selectable {
        margin-bottom: 2px; 
    } 
    .custom-form .virtual-select-option-text {
        font-size: 11px!important;
    }
</style>