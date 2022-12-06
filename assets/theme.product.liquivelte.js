import { Framework7 } from './framework7-lite-bundle.esm-hs46260094.liquivelte.js';
import { Framework7Svelte } from './header-hs533fc9cb.liquivelte.js';
import './product-hs7273055a.liquivelte.js';
import './liquivelte-svelte-hs623f7d73.liquivelte.js';
import './liquivelte-liquid-hs6dbc6cca.liquivelte.js';
import './store.js-hs80deeb5c.liquivelte.js';

// Import F7 Bundle

  // Init F7-Svelte Plugin
  Framework7.use(Framework7Svelte);

  const onIntersect = (el, callback) => {
    const observer = new IntersectionObserver(callback, {
      root: null,   // default is the viewport
      rootMargin: '100px', // default is '0px'
      threshold: 0 // percentage of taregt's visible area. Triggers "onIntersection"
    });
    observer.observe(el);
  };

  console.log('custom entryyyy');


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
          wrapper.svelteComponent = new (await import('./prompts-hs3b55a5a0.liquivelte.js')).default({
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
          wrapper.svelteComponent = new (await import('./header-hs533fc9cb.liquivelte.js').then(function (n) { return n.index; })).default({
            target: wrapper,
            hydrate: true,
            props: {
                ...svelteProps,
                ...rawIncludes,
                lec: liquid_expression_cache
            },
            context: new Map([['f7', window.Framework7ComponentsApp]])
          });
        }
      })();
    });
  });
  
  });
