<script>
  import { getContext, setContext } from 'svelte';
  export let themeImports = getContext('svelteProps');
  export let rawIncludes = getContext('rawIncludes');
  export let lec = getContext('lec');

  import cachedLiquid from 'liquivelte-liquid.js';
  const liquid = cachedLiquid(lec);
  let index = 0;

  export let links;
  import { List, ListItem, AccordionContent } from 'framework7-liquivelte';
  console.log('links ', links);
</script>
<List  accordionList     lec={lec} >
  {#each  links as lnk, index   }
{@const forloop = {
  first: index === 0,
  index: index + 1,
  index0: index,
  last: index === ( links).length - 1,
  rindex: ( links).length - index,
  rindex0: ( links).length - index - 1,
  length: ( links).length,
} }
    {#if lnk.links && lnk.links.length }
    <ListItem  accordionItem title="{ lnk.title }"      lec={lec} >
      {#if lnk.links && lnk.links.length }
      <AccordionContent      lec={lec} >
        <svelte:self links="{lnk.links}" />  
      </AccordionContent>
      {/if}
    </ListItem>
    {:else}
    <ListItem  accordionItem="{false}" title="{ lnk.title }" external link="{lnk.url}"     lec={lec} />
    {/if}
  {/each}
</List>

