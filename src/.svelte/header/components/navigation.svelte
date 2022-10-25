<script>
  import cachedLiquid from 'liquivelte-liquid.js';
  export let lec;
  const liquid = cachedLiquid(lec);
  let index = 0;

export let rawinclude_b7c846d6;
export let rawinclude_5513f9e2;
  export let links;

  console.log('links ', links);
</script>
<div class="hidden">
  {@html rawinclude_b7c846d6[index || 0]}
  {@html rawinclude_5513f9e2[index || 0]}
</div>
<ul class="menu-drawer__menu has-submenu list-menu" role="list">
  {#each  links as lnk, index  }
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

 <!-- <details id="Details-menu-drawer-menu-item-{ forloop.index }">
          <summary class="menu-drawer__menu-item list-menu__item link link--text focus-inset" class:menu-drawer__menu-item--active="{ lnk.child_active }" >
            { liquid.escape(link.title) }
            {@html rawinclude_b7c846d6[index || 0]}
            {@html rawinclude_5513f9e2[index || 0]}
          </summary>
          <div id="link-{ liquid.escape(lnk.handle) }" class="menu-drawer__submenu has-submenu gradient motion-reduce" tabindex="-1">
            <div class="menu-drawer__inner-submenu">
              <button class="menu-drawer__close-button link link--text focus-inset" aria-expanded="true">
                {@html rawinclude_b7c846d6[index || 0]}
                { liquid.escape(lnk.title) }
              </button>
              <ul class="menu-drawer__menu list-menu" role="list" tabindex="-1">
                {#each  link.links as childlk, index  }
{@const forloop = {
  first: index === 0,
  index: index + 1,
  index0: index,
  last: index === ( link.links).length - 1,
  rindex: ( link.links).length - index,
  rindex0: ( link.links).length - index - 1,
  length: ( link.links).length,
} }
                  <li>
                    {#if childlink.links }
                      <a href="{ childlink.url }" class="menu-drawer__menu-item link link--text list-menu__item focus-inset" class:menu-drawer__menu-item--active="{ childlink.current }" >
                        { liquid.escape(childlink.title) }
                      </a>
                    {:else}
                      <details id="Details-menu-drawer-submenu-{ forloop.index }">
                        <summary class="menu-drawer__menu-item link link--text list-menu__item focus-inset">
                          { liquid.escape(childlink.title) }
                          {@html rawinclude_b7c846d6[index || 0]}
                          {@html rawinclude_5513f9e2[index || 0]}
                        </summary>
                        <div id="childlink-{ liquid.escape(childlink.handle) }" class="menu-drawer__submenu has-submenu gradient motion-reduce">
                          <button class="menu-drawer__close-button link link--text focus-inset" aria-expanded="true">
                            {@html rawinclude_b7c846d6[index || 0]}
                            { liquid.escape(childlink.title) }
                          </button>
                          <ul class="menu-drawer__menu list-menu" role="list" tabindex="-1">
                            {#each k in childlink.links as grandchildl, index  }
{@const forloop = {
  first: index === 0,
  index: index + 1,
  index0: index,
  last: index === (k in childlink.links).length - 1,
  rindex: (k in childlink.links).length - index,
  rindex0: (k in childlink.links).length - index - 1,
  length: (k in childlink.links).length,
} }
                              <li>
                                <a href="{ grandchildlink.url }" class="menu-drawer__menu-item link link--text list-menu__item focus-inset" class:menu-drawer__menu-item--active="{ grandchildlink.current }" >
                                  { liquid.escape(grandchildlink.title) }
                                </a>
                              </li>
                            {/each}
                          </ul>
                        </div>
                      </details>
                    {/if}
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        </details> -->
</ul>