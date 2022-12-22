<script>
  import cachedLiquid from 'liquivelte-liquid.js';
  export let lec;
  const liquid = cachedLiquid(lec);
  let index = 0;

export let min_amounts;
export let cart;
export let inputWidth;
  export let links;

  console.log('links ', links);
</script>
<ul class="menu-drawer__menu has-submenu list-menu" role="list">
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
    <li>
      {#if lnk.links }
      <details id="Details-menu-drawer-menu-item-{ forloop.index }">
        <summary class="menu-drawer__menu-item list-menu__item link link--text focus-inset" class:menu-drawer__menu-item--active="{ lnk.child_active }" >
          <svelte:self links="{lnk.links}" />  
        </summary>
      </details>
      {/if}
      <a href="{ lnk.url }" class="menu-drawer__menu-item list-menu__item link link--text focus-inset" class:menu-drawer__menu-item--active="{ lnk.current }">
        { liquid.escape(lnk.title) }
      </a>
    </li>
  {/each}

</ul>