<script>
  import { getContext, setContext } from 'svelte';
  export let themeImports = getContext('svelteProps');
  export let rawIncludes = getContext('rawIncludes');
  export let lec = getContext('lec');

  import cachedLiquid from 'liquivelte-liquid.js';
  const liquid = cachedLiquid(lec);
  let index = 0;

  export let block = themeImports['block'];
  export let blockƒƒtype; 
block.type = themeImports['blockƒƒtype'];
  export let sizes;
</script>
<div class="image">
  <img src="{ liquid.image_url(block.settings.image, {"width":"1200"}) }" />
</div>

