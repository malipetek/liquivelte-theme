<script >
  import cachedLiquid from 'liquivelte-liquid.js';
  export let lec;
  const liquid = cachedLiquid(lec);
  let index = 0;

  const shop = {};
  export let shop$name; 
shop.name = shop$name;
  
  const product = {};
  export let product$id; 
product.id = product$id;
  
  const b = 2;
  const a = 7;
</script>

<div class="badge" data-asd="asdas" >
  <slot/>
</div>

<h1><slot name="asd" /></h1>
<style>
  div {
    background-color: rgb(181, 223, 181);
    border-radius: 8px;  
  }
</style>