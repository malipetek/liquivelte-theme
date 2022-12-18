
<script>
  import cachedLiquid from 'liquivelte-liquid.js';
  export let lec;
  const liquid = cachedLiquid(lec);
  let index = 0;

const section = {};
const shop = {};
export let sectionƒƒsettings; 
section.settings = sectionƒƒsettings;
export let shopƒƒname; 
shop.name = shopƒƒname;
export let logo_height;
export let logo_alt;

console.log('??? section settings ', section.settings, section.settings.logo != '');

</script>
{#if section.settings.logo != undefined }
  <img src="{ liquid.img_url(section.settings.logo, '500x') }"
    class="header__heading-logo"
    widths="50, 100, 150, 200, 250, 300, 400, 500"
    height="{ logo_height }"
    width="{ section.settings.logo_width }"
    alt="{ logo_alt }"
  />
{:else}
  <span class="h2">{ shop.name }</span>
{/if}