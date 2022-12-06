
<script>
  import cachedLiquid from 'liquivelte-liquid.js';
  export let lec;
  const liquid = cachedLiquid(lec);
  let index = 0;

export let keptFor;
export let keepFor;
export let scrollY;
export let anim_style;

import { onMount } from 'svelte';
export let block = {};
import "./item.schema.json";
import AnimationFrame from '../../../scripts/animationFrame.js';

console.log('block ', block);
let video, blob_src, duration;
let seeked = true;

// $: if(video && !blob_src) {
//   const src = video.getAttribute('data-src');
//   fetch(src).then(res => res.blob()).then(blob => {
//     blob_src = URL.createObjectURL(blob);
//   });
// }

const progressDelta = 0.3;
let lastProgress = 0;
onMount(() => {

  function lerp(x, y, t) {
        return (1 - t) * x + t * y;
      }

      const animation = new AnimationFrame(() => {
        if (!seeked || !duration) return;
        seeked = false;
        // progressPercent = ((scrollY + window.innerHeight) - container.offsetTop) / (container.clientHeight + window.innerHeight) * 100,
        // progressPercent = progressPercent > 0 ? progressPercent : 0;
        let scrollProgress = keptFor / keepFor;
        // const scrollProgress = progressPercent;
        // Round to 2 decimal places
        const progress =
          Math.round(
            // Smoothly approach scroll progress instead of instantly
            lerp(lastProgress, scrollProgress, progressDelta) * 100
          ) / 100;
        video.currentTime = duration * progress;
        lastProgress = progress;
      });

      animation.start();
      
      return () => {
        animation.stop();
      }
});

const seekCb = 1;

</script>
<video 
  style="{ anim_style }"
  class:bg-video="{ block.settings.is_bg }"
  class="video"
  bind:this="{video}"
  bind:duration="{duration}"
  on:seeked="{() => seeked = true}"
  preload="metadata"
  data-src="{ liquid.file_url(block.settings.source) }"
  src="{ liquid.file_url(block.settings.source) }" 
  playsinline
  muted
  ></video>

<style lang="postcss">
  .video {
    top: 0;
    height: 100vh;
    max-width: unset !important;
  }

  .bg-video {
    position: absolute;
  }
</style>
