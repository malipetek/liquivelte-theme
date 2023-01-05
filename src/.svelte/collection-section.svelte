
<script>
  import { getContext, setContext } from 'svelte';
  export let themeImports = getContext('svelteProps');
  export let rawIncludes = getContext('rawIncludes');
  export let lec = getContext('lec');

  import cachedLiquid from 'liquivelte-liquid.js';
  const liquid = cachedLiquid(lec);
  let index = 0;

  export let sectionƒƒsettings; 
section.settings = themeImports['sectionƒƒsettings'];
  export let sectionƒƒblocks; 
section.blocks = themeImports['sectionƒƒblocks'];
  const a = 1;
 
</script>

<!--
  Liquid Comment 
-->
 
{#each  section.blocks as block, index   }
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

