<script>
  import { getContext, setContext } from 'svelte';
  export let themeImports = getContext('svelteProps');
  export let rawIncludes = getContext('rawIncludes');
  export let lec = getContext('lec');

  import cachedLiquid from 'liquivelte-liquid.js';
  const liquid = cachedLiquid(lec);
  let index = 0;


import { onMount } from 'svelte';
import { f7ready } from 'framework7-liquivelte';

let notification;
  onMount(() => {
    f7ready(() => {
      console.log('f7 ready');
      // notification = f7.notification.create({
      //   title: 'Newsletter',
      //   titleRightText: 'now',
      //   subtitle: 'Subscribe to newsletter to get 20% off',
      //   text: 'Tap on this to subscribe.',
      //   closeTimeout: 3000,
      // }); 

      // setTimeout(() => {
      //   notification.open();
      // },2000);
    });
  });

</script>

<div prompts>
  
</div>