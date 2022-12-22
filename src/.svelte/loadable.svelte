<script>
  import cachedLiquid from 'liquivelte-liquid.js';
  export let lec;
  const liquid = cachedLiquid(lec);
  let index = 0;

  import Icon from './icon.liquivelte';
  import { loading } from '../scripts/store.module.js';
  export let classes;
  export let width = 30;
  export let loading_ = false;
  export let centered = false;
  loading.subscribe(state => loading_ = state);
  export let wrap = undefined;

</script>
<div class="{ classes }">
  <div 
      class="relative "
      class:flex="{ centered }"
      class:justify-center="{ centered }"
      class:align-center="{ centered }"
      >  
    {#if loading_ }
      <Icon  name="icon-spinner" width="{ width }"      lec={lec} />
    {:else}
      <slot />
    {/if}
  </div>
</div>

<style global>
  .invisible {
    visibility: hidden;
  }
  /*================ Spinner Icon ================*/
  .icon-spinner {
    -moz-animation: spin 500ms infinite linear;
    -o-animation: spin 500ms infinite linear;
    -webkit-animation: spin 500ms infinite linear;
    animation: spin 500ms infinite linear;
  }

  @keyframes spin {
    0% {
      -ms-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -ms-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes spin {
    0% {
      -ms-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -ms-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
</style>