<script>
  import cachedLiquid from 'liquivelte-liquid.js';
  export let lec;
  const liquid = cachedLiquid(lec);
  let index = 0;

export let aspect_ratio;
export let alt;
  import Image from './image.liquivelte';
  export let src;
  export let sizes;
</script>
<div class="image">
  <Image  sizes="{ sizes }"   src={src} alt={alt} aspect_ratio={aspect_ratio}    lec={lec} />
</div>

