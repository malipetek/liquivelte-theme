<script>
  import cachedLiquid from 'liquivelte-liquid.js';
  export let lec;
  const liquid = cachedLiquid(lec);
  let index = 0;


import { onMount } from 'svelte';
import { f7, f7ready } from 'framework7-liquivelte';

let notification;
  onMount(() => {
    f7ready(() => {
      notification = f7.notification.create({
        title: 'Newsletter',
        titleRightText: 'now',
        subtitle: 'Subscribe to newsletter to get 20% off',
        text: 'Tap on this to subscribe.',
        closeTimeout: 3000,
      }); 

      setTimeout(() => {
        notification.open();
      },2000);
    });
  });

</script>

<div prompts>
  
</div>