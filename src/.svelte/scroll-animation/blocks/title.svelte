
<script>
  import { getContext, setContext } from 'svelte';
  export let themeImports = getContext('svelteProps');
  export let rawIncludes = getContext('rawIncludes');
  export let lec = getContext('lec');

  import cachedLiquid from 'liquivelte-liquid.js';
  const liquid = cachedLiquid(lec);
  let index = 0;

  let block = {};
  export let blockƒƒsettings; 
block.settings = themeImports['blockƒƒsettings'];
  import "./text.schema.json";
  import "./item.schema.json";

  export let left = themeImports['left'];
  export let title_top = themeImports['title_top'];
  export let font_size = themeImports['font_size'];
  export let color = themeImports['color'];
  export let bold = themeImports['bold'];
  export let anim_style;
</script>

<div class="" style="top:{ title_top }%; left:{ left }%; font-size: { font_size }em; { anim_style }; font-weight: { bold }">
  { block.settings.content }
</div>

<style>
  div {
    position: absolute;
    z-index: 2;
  }
</style>
