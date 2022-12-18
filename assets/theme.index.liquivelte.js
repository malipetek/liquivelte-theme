import { Framework7, Panel } from './panel-hs778c98ac.liquivelte.js';
import { Framework7Svelte } from './framework7-liquivelte-hs5d6b599e.liquivelte.js';
import './liquivelte-svelte-hs532e1aa9.liquivelte.js';
import './framework7-liquivelte-get-params-hs6b273664.liquivelte.js';
import './index-hs8daa1a0c.liquivelte.js';
import './htm.js-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-popup-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-view-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-router-context-provider-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-login-screen-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-sheet-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-popover-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-panel-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-utils-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-params-list-hs8daa1a0c.liquivelte.js';

console.log('custom entry');

  // Init F7-Svelte Plugin
Framework7.use([
  Framework7Svelte,
  Panel
]);


const onIntersect = (el, callback) => {
  const observer = new IntersectionObserver(callback, {
    root: null,   // default is the viewport
    rootMargin: '100px', // default is '0px'
    threshold: 0 // percentage of taregt's visible area. Triggers "onIntersection"
  });
  observer.observe(el);
};
  

document.addEventListener('DOMContentLoaded', () => {
  
Array.from(document.querySelectorAll('.liquivelte-component.prompts')).forEach(wrapper => {
  let svelteProps = wrapper.svelteProps;
  let rawIncludes = wrapper.rawIncludes;
  let liquid_expression_cache = wrapper.liquid_expression_cache;
  wrapper.module_loaded = true;
  let initialized = false;
  onIntersect(wrapper, ([entry]) => {
    (async () => {
      if(entry.isIntersecting && !initialized) {
        initialized = true;
        wrapper.svelteComponent = new (await import('./prompts-hs8daa1a0c.liquivelte.js')).default({
          target: wrapper,
          hydrate: true,
          props: {
              ...svelteProps,
              ...rawIncludes,
              lec: liquid_expression_cache
          }
        });
      }
    })();
  });
});

Array.from(document.querySelectorAll('.liquivelte-component.header')).forEach(wrapper => {
  let svelteProps = wrapper.svelteProps;
  let rawIncludes = wrapper.rawIncludes;
  let liquid_expression_cache = wrapper.liquid_expression_cache;
  wrapper.module_loaded = true;
  let initialized = false;
  onIntersect(wrapper, ([entry]) => {
    (async () => {
      if(entry.isIntersecting && !initialized) {
        initialized = true;
        wrapper.svelteComponent = new (await import('./header-hs08094d04.liquivelte.js').then(function (n) { return n.index; })).default({
          target: wrapper,
          hydrate: true,
          props: {
              ...svelteProps,
              ...rawIncludes,
              lec: liquid_expression_cache
          }
        });
      }
    })();
  });
});

Array.from(document.querySelectorAll('.liquivelte-component.app-wrapper')).forEach(wrapper => {
  let svelteProps = wrapper.svelteProps;
  let rawIncludes = wrapper.rawIncludes;
  let liquid_expression_cache = wrapper.liquid_expression_cache;
  wrapper.module_loaded = true;
  let initialized = false;
  onIntersect(wrapper, ([entry]) => {
    (async () => {
      if(entry.isIntersecting && !initialized) {
        initialized = true;
        wrapper.svelteComponent = new (await import('./app-wrapper-hs8daa1a0c.liquivelte.js')).default({
          target: wrapper,
          hydrate: true,
          props: {
              ...svelteProps,
              ...rawIncludes,
              lec: liquid_expression_cache
          }
        });
      }
    })();
  });
});

});
