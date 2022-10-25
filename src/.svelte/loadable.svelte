<script>
  import cachedLiquid from 'liquivelte-liquid.js';
  export let lec;
  const liquid = cachedLiquid(lec);
  let index = 0;

export let rawinclude_dff1c036;
export let classes;
export let loading = false;
</script>

<div class="relative { classes }" >  
  <div 
      class="w-6 absolute" 
      class:hidden="{ loading != true }"
      >
    {@html rawinclude_dff1c036[index || 0]}
  </div>
  <div 
      class:invisible="{ loading }" 
      >
    <slot />
  </div>
</div>
