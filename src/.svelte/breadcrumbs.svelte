
<script>
  import { getContext, setContext } from 'svelte';
  export let themeImports = getContext('svelteProps');
  export let rawIncludes = getContext('rawIncludes');
  export let lec = getContext('lec');

  import cachedLiquid from 'liquivelte-liquid.js';
  const liquid = cachedLiquid(lec);
  let index = 0;

  import { Block, Breadcrumbs, BreadcrumbsItem, BreadcrumbsSeparator, Link } from 'framework7-liquivelte';
  export let bread_crumbs = themeImports['bread_crumbs'];
  console.log('breadcrumbs ', bread_crumbs);
</script>

<Block  strong  bread_crumbs={bread_crumbs}    lec={lec} >
  <Breadcrumbs   bread_crumbs={bread_crumbs}    lec={lec} >
    {#each  bread_crumbs as breadcrumb, index   }
{@const forloop = {
  first: index === 0,
  index: index + 1,
  index0: index,
  last: index === ( bread_crumbs).length - 1,
  rindex: ( bread_crumbs).length - index,
  rindex0: ( bread_crumbs).length - index - 1,
  length: ( bread_crumbs).length,
} }
    <BreadcrumbsItem   bread_crumbs={bread_crumbs}    lec={lec} >
      <Link   bread_crumbs={bread_crumbs}    lec={lec} >{ breadcrumb }</Link>
    </BreadcrumbsItem>
    {#if !(forloop.last )}
      <BreadcrumbsSeparator    bread_crumbs={bread_crumbs}    lec={lec} />
    {/if}
    {/each}
  </Breadcrumbs>
</Block>