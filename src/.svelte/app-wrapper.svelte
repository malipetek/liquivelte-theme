<script>
  import cachedLiquid from 'liquivelte-liquid.js';
  export let lec;
  const liquid = cachedLiquid(lec);
  let index = 0;

  import { App, View, Page } from 'framework7-liquivelte';
  import { onMount, beforeUpdate, afterUpdate } from 'svelte';

  let ls_cache;

  beforeUpdate(() => { 
    if(!ls_cache) {
      ls_cache = document.querySelector('.liveslot');
      if(ls_cache.isConnected) { ls_cache.parentNode.removeChild(ls_cache); }
    }
    
    console.log('oh shit, the wrapper component is about to update');
    return false;
  });
  

  function persistingchild(node, keep) {
    if(node.children[0] !== keep) {
      node.replaceChild(keep, node.children[0]);
    }
  }
</script>

<App  theme="ios" name="My App" id="com.demoapp.test"     lec={lec} >
  <View  main     lec={lec} >
    <Page      lec={lec} >
      <div use:persistingchild="{ ls_cache }" >
        <div class="liveslot" >
          <slot />
        </div>
      </div>
    </Page>
  </View>
</App>