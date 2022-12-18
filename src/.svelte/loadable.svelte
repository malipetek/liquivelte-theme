<script>
  import cachedLiquid from 'liquivelte-liquid.js';
  export let lec;
  const liquid = cachedLiquid(lec);
  let index = 0;

export let inputWidth;
  import Icon from './icon.liquivelte';
  export let classes;
  export let loading = false;
</script>

<div class="relative { classes }" >  
  <div 
      class="w-6 absolute" 
      class:hidden="{ loading != true }"
      >
    <Icon  name="icon-spinner"   inputWidth={inputWidth}    lec={lec} />
  </div>
  <div 
      class:invisible="{ loading }" 
      >
    <slot />
  </div>
</div>
