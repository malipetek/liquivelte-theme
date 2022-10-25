
<script>
  import cachedLiquid from 'liquivelte-liquid.js';
  export let lec;
  const liquid = cachedLiquid(lec);
  let index = 0;

  export let section$settings; 
section.settings = section$settings;
  export let section$blocks; 
section.blocks = section$blocks;
  const a = 1;
 
</script>

<!--
  Liquid Comment 
-->
 
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
  {#if block.type == 'text' }
    { block.settings.content }
    adsa sdas asdas asd 
  {:else if block.type == 'image'}
    <img src="{ liquid.image_url(block.settings.src) }" alt="{ block.settings.alt }" />
  {/if}
{/each}

