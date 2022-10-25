
<script>
  import cachedLiquid from 'liquivelte-liquid.js';
  export let lec;
  const liquid = cachedLiquid(lec);
  let index = 0;

  let block = {};
  export let block$settings; 
block.settings = block$settings;
  import "./text.schema.json";
  import "./item.schema.json";

  export let left;
  export let title_top;
  export let font_size;
  export let color;
  export let bold;
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
