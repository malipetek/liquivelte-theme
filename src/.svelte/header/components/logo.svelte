
<script>
  import { getContext, setContext } from 'svelte';
  export let themeImports = getContext('svelteProps');
  export let rawIncludes = getContext('rawIncludes');
  export let lec = getContext('lec');

  import cachedLiquid from 'liquivelte-liquid.js';
  const liquid = cachedLiquid(lec);
  let index = 0;

const section = {};
const shop = {};
export let sectionƒƒsettings; 
section.settings = themeImports['sectionƒƒsettings'];
export let shopƒƒname; 
shop.name = themeImports['shopƒƒname'];
export let logo_height = themeImports['logo_height'];
export let logo_alt = themeImports['logo_alt'];

</script>
{#if section.settings.logo != undefined }
  <img src="{ liquid.img_url(section.settings.logo, '500x') }"
    class="header__heading-logo"
    widths="50, 100, 150, 200, 250, 300, 400, 500"
    height="{ logo_height }"
    alt="{ logo_alt }"
  />
  <span class="h2 text-white">{ shop.name }</span>
{:else}
  <span class="h2">{ shop.name }</span>
{/if}

<style lang="postcss">
  img {
    max-height: var(--f7-appbar-height);
  }
</style>