<script>
  import { getContext, setContext } from 'svelte';
  export let themeImports = getContext('svelteProps');
  export let rawIncludes = getContext('rawIncludes');
  export let lec = getContext('lec');

  import cachedLiquid from 'liquivelte-liquid.js';
  const liquid = cachedLiquid(lec);
  let index = 0;

  export let block;
  export let anim_style;
  </script>

<div class="" style="top: { block.settings.top }%; left: { block.settings.left }%; { anim_style };" >
  <slot />
</div>

<style>
  div {
    position: absolute;
    z-index: 3;
  }
</style>

