
<script>
  import cachedLiquid from 'liquivelte-liquid.js';
  export let lec;
  const liquid = cachedLiquid(lec);
  let index = 0;
 
  import { fade } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';
  import outin from '../scripts/outin.js';
  import { cartStore } from '../scripts/store.module.js';
 
  cartStore.subscribe((cartStore) => {
    $: console.log('$cart ', cartStore);
  });
  
  function incrementor(node, { speed = 2, delay = 400 }) {
		const valid = (
			node.childNodes.length === 1 &&
			node.childNodes[0].nodeType === Node.TEXT_NODE
		);

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
    const targetValue = parseInt(text, 10);
		const duration = targetValue / (speed * 0.01);
    node.textContent = 0; 

    return {
      delay,
			duration,
			tick: t => {
          node.innerHTML = new Array((""+targetValue).length - (""+Math.ceil(t * parseInt(text, 10))).length).fill('&nbsp;').reduce((c,ch) => c+ch,'')
            + Math.ceil(t * parseInt(text, 10));
			}
		};
	} 
  export let section = {};
  export let sectionƒƒsettings; 
section.settings = sectionƒƒsettings;
  export let sectionƒƒblocks; 
section.blocks = sectionƒƒblocks;

  console.log('section ', section);
  console.log('section blocks', section.blocks);
  function changeColor(block) {
    console.log('changing color');
    section.blocks = section.blocks.map(b => b === block ? {...b, settings: {...b.settings, bg_color: '#ddd'}} : b);
  }
  let current_block = 1;

  import LazyComponent from '../components/LazyComponent.svelte';
	let load = false;
</script> 
<div class="comparison-section-wrapper">
  <h1 class=""> { section.settings.title } </h1>
  <h2 class=""> { section.settings.subtitle } </h2>
    {#each  section.blocks as block, index  }
{@const forloop = {
  first: index === 0,
  index: index + 1,
  index0: index,
  last: index === ( section.blocks).length - 1,
  rindex: ( section.blocks).length - index,
  rindex0: ( section.blocks).length - index - 1,
  length: ( section.blocks).length,
} }
      {#if current_block == forloop.index }
        <div transition:fade="{ { easing: cubicInOut, duration: 700 } }" 
            class="backplate" 
            style="background-color: { block.settings.bg_color };"></div>
      {/if}
    {/each}
    <div class="transition-enforcement">
  {#each  section.blocks as block, index  }
{@const forloop = {
  first: index === 0,
  index: index + 1,
  index0: index,
  last: index === ( section.blocks).length - 1,
  rindex: ( section.blocks).length - index,
  rindex0: ( section.blocks).length - index - 1,
  length: ( section.blocks).length,
} }
    {#if current_block == forloop.index }
    <div class="comparison-container" transition:fade="{ { easing: cubicInOut, duration: 700 } }" >
      <div class="comparison">
        <div class="comparison-item">
          <div class="product-image image-1" style="--ratio: { block.settings.product_image_1.aspect_ratio }">
            <img 
            class=""
            loading="eager" 
            src="{ liquid.img_url(block.settings.product_image_1, '300x') }"
            width={ 300 } 
            height="{ liquid.divided_by(300, block.settings.product_image_1.aspect_ratio) }" />
          </div>
          <div class="product-info">
            <select bind:value="{ current_block }" class="product-title">       
              {#each  section.blocks as block, index  }
{@const forloop = {
  first: index === 0,
  index: index + 1,
  index0: index,
  last: index === ( section.blocks).length - 1,
  rindex: ( section.blocks).length - index,
  rindex0: ( section.blocks).length - index - 1,
  length: ( section.blocks).length,
} }
              <option value="{ forloop.index }" >
                { block.settings.product_title_1 }
              </option>
              {/each}
            </select>
            <div class="param-container">
              <div class="param-values">
                <span transition:incrementor>{ block.settings.product_1_param_1_value }</span> { block.settings.product_1_param_1_unit }
              </div>
              <div class="param-name">
                { block.settings.param_1 }
              </div>
            </div>
            <div class="param-container">
              <div class="param-values">
                <span transition:incrementor>{ block.settings.product_1_param_2_value }</span> { block.settings.product_1_param_2_unit }
              </div>
              <div class="param-name">
                { block.settings.param_2 }
              </div>
            </div>
            <div class="param-container">
              <div class="param-values">
                <span transition:incrementor>{ block.settings.product_1_param_3_value }</span> { block.settings.product_1_param_3_unit }
              </div>
              <div class="param-name">
                { block.settings.param_3 }
              </div>
            </div>
          </div>
        </div>
        <div class="comparison-item">
          <div class="product-image image-2" style="--ratio: { block.settings.product_image_1.aspect_ratio }">
            <img 
            class=""
            loading="eager" 
            src="{ liquid.img_url(block.settings.product_image_2, '300x') }"
            width={ 300 } 
            height="{ liquid.divided_by(300, block.settings.product_image_2.aspect_ratio) }"
            />
          </div>
          <div class="product-info">
            <div class="product-title">
              { block.settings.product_title_2 }
            </div>
            <div class="param-container">
              <div class="param-values">
                <span transition:incrementor>{ block.settings.product_2_param_1_value }</span> { block.settings.product_2_param_1_unit }
              </div>
              <div class="param-name">
                { block.settings.param_1 }
              </div>
            </div>
            <div class="param-container">
              <div class="param-values">
                <span transition:incrementor>{ block.settings.product_2_param_2_value }</span> { block.settings.product_2_param_2_unit }
              </div>
              <div class="param-name">
                { block.settings.param_2 }
              </div>
            </div>
            <div class="param-container">
              <div class="param-values">
                <span transition:incrementor>{ block.settings.product_2_param_3_value }</span> { block.settings.product_2_param_3_unit }
              </div>
              <div class="param-name" data-failed="true">
                { block.settings.param_3 }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/if}
  {/each}
  </div>

</div>

<style lang="postcss">
  h1, h2 {
    margin: 0;
  }
  h1 {
    font-size: 6rem;
  }
  h2 {
    font-size: 2rem;
  }
  .comparison-section-wrapper {
    width: 100%;
    position: relative;
    text-align: center;
    padding: 3em;
    font-family: 'Anton', sans-serif;
    overflow: hidden;

    .param-values {
        font-size: 2em;
        font-family: system-ui;
        letter-spacing: -1px;
        line-height: 1em;
        margin-top: 10px;
      }
    .comparison {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1em;
      padding: 1em;

      .product-image {
        width: 100%;
        img {
          position: absolute;
          width: 300px;
        }
      }
      .image-1 img {
        right: 0;
      }
      .image-2 img {
        left: 0;
      }
      .product-info {
        text-align: center;
        min-width: 8em;
      }
      .comparison-item {
        display: flex;
        justify-content: space-around;
        gap: 1em;
        background-color: rgba(255,255,255,.2);
        
        &:nth-child(2) {
          flex-direction: row-reverse;
        }

        select {
          width: 100%;
          appearance: none;
          background-color: rgba(255,255,255,0.8);
          border-radius: 4px;
          position: relative;

        }
      }
    } 
  }

  .transition-enforcement *, h1, h2 {
    position: relative;
    z-index: 2;
  }
  .backplate {
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .transition-enforcement {
  display: grid;
  }
  .transition-enforcement > * {
    grid-column: 1/2;
    grid-row: 1/2;
  }
 
  @media (max-width: 1124px) {
    .comparison-item {
      flex-wrap: wrap;
    }
    .product-image {
      height: calc(50vw / var(--ratio));
      img {
        max-width: 50vw;
      }
    }
  }
@media (min-width: 768px){
  .product-title {
      font-size: 14px;
      padding: 11px 20px 8px;
  }
  .product-title {
      text-transform: uppercase;
      font-weight: 600;
      font-family: "Gotham",sans-serif;
      border: 0;
      padding: 11px 10px 8px !important;
      background-size: 19px 7px;
      font-size: 10.5px;
    }
  select {
      font-size: 14px;
      padding: 11px 20px 8px;
  }
  select {
      text-transform: uppercase;
      font-weight: 600;
      font-family: "Gotham",sans-serif;
      border: 0;
      padding: 11px 10px 8px !important;
      background-size: 19px 7px;
      font-size: 10.5px;
    }
}

</style>
