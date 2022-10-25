<script>
  import cachedLiquid from 'liquivelte-liquid.js';
  export let lec;
  const liquid = cachedLiquid(lec);
  let index = 0;

import { query_selector_all } from 'svelte/internal';

import MenuDrawer from '../../../snippets/menu-drawer.liquivelte';

export let header, mainDetailsToggle, borderOffset, breakpoint;
let openMenuDrawer = function(summaryElement) {
  header = header || document.getElementById('shopify-section-header');
  borderOffset = borderOffset || header.querySelector('.header-wrapper').classList.contains('header-wrapper--border-bottom') ? 1 : 0;
  document.documentElement.style.setProperty('--header-bottom-position', `${parseInt(header.getBoundingClientRect().bottom - borderOffset)}px`);
  header.classList.add('menu-open');

  setTimeout(() => {
    mainDetailsToggle.classList.add('menu-opening');
  });

  summaryElement.setAttribute('aria-expanded', true);
  trapFocus(mainDetailsToggle, summaryElement);
  document.body.classList.add(`overflow-hidden-${breakpoint}`);
}


let closeMenuDrawer = function (event, elementToFocus) {
  this(event, elementToFocus);
  header.classList.remove('menu-open');
}
</script>
<MenuDrawer  bind:closeMenuDrawer bind:openMenuDrawer bind:mainDetailsToggle {...$$props}      lec={lec} >
  <slot />
</MenuDrawer>