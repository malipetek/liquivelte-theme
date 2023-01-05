
<script>
  import cachedLiquid from 'liquivelte-liquid.js';
  export let lec;
  const liquid = cachedLiquid(lec);
  let index = 0;

export let src;
export let aspect_ratio;
export let sizes;
export let classes;
let srcset = false;
</script>
{#if srcset }
  <img
    srcset="{ srcset }"
    sizes="{ sizes }"
    class="{ classes }"
    src="{ src }"
    alt="{ liquid.escape(alt) }"
    width="{ imageUrl.width }"
    height="{ liquid.ceil(liquid.divided_by(imageUrl.width, aspect_ratio)) }"
  >
{:else}
<img
  class="{ classes }"
  src="{ src }"
  alt="{ liquid.escape(alt) }"
>
{/if}

