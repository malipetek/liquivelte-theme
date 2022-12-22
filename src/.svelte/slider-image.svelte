<script>
  import cachedLiquid from 'liquivelte-liquid.js';
  export let lec;
  const liquid = cachedLiquid(lec);
  let index = 0;

  import Image from './image.liquivelte';
  export let src;
  export let sizes;
</script>
<div class="image">
  <Image  sizes="{ sizes }"      lec={lec} />
</div>

