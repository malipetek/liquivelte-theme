<script>
let index = 0;
 
let product = {};
export let product$title; 
product.title = product$title;
import H1Comp from './H1Comp.liquivelte';

export let title;
</script>
<H1Comp    product$title={product$title}   > </H1Comp>
<h1> {#if title } { title || ''} 
  {:else}
  { product.title || ''}
  {/if}
 </h1>