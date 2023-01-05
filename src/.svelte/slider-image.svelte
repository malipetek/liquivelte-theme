<script>
  import cachedLiquid from 'liquivelte-liquid.js';
  export let lec;
  const liquid = cachedLiquid(lec);
  let index = 0;

  export let block;
  import Image from './image.liquivelte';
  export let sizes;
</script>
<div class="image">
  <Image  src="{ block.settings.image.src }"  block={block}    lec={lec} />
</div>

