<script>
  import cachedLiquid from 'liquivelte-liquid.js';
  export let lec;
  const liquid = cachedLiquid(lec);
  let index = 0;

  export let text;
  const settings = {};
  export let settings$colors_accent_1; 
settings.colors_accent_1 = settings$colors_accent_1;
</script>

<div style="--color: { settings.colors_accent_1 }">
  { text }
</div>

<style>
div {
  transform-origin: left center;
  color: var(--color);
}
div:hover {
  transform: scale(1.2);
}
</style>