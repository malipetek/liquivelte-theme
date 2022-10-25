<script lang="ts">
let index = 0;

export let form_inputs_f2420ea3ba8e;
export let form_props_f2420ea3ba8e;
export let rawinclude_420ea3ba8e2;
export let rawinclude_20ea3ba8e25;
export let product$id;
export let shop$name;
export let product$title;
  export let product;
  export let theme;
  export let collection;
  export let cart;
  import MainProduct from './main-product.liquivelte'; 
  
</script>
  {#if product.available }
    <div> asd </div>
  {/if}
  <div class:open="{1}" class="product-container">
    <MainProduct  visibility={ { title_visible: 'yes' } }   product={product} theme={theme} collection={collection} cart={cart}  product$title={product$title} shop$name={shop$name} product$id={product$id}  form_props_f2420ea3ba8e={form_props_f2420ea3ba8e} form_inputs_f2420ea3ba8e={form_inputs_f2420ea3ba8e}  rawinclude_420ea3ba8e2={rawinclude_420ea3ba8e2} rawinclude_20ea3ba8e25={rawinclude_20ea3ba8e25} >
    </MainProduct>
    <img class:responseive="{1}" src="{ product.featured_image || ''}" />
    { product.title || ''}
    <div class="blue"> Blue </div>
  </div>
<style lang="scss">
  .product-container {
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 8px;
    
    .blue {
      color: blue;
    }
  }
</style>
