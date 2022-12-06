import { noop, insert, detach } from './liquivelte-svelte-hs623f7d73.liquivelte.js';
import { Framework7 } from './framework7-lite-bundle.esm-hs46260094.liquivelte.js';
import { Framework7Svelte } from './header-hs533fc9cb.liquivelte.js';
import './index-hs099f70d3.liquivelte.js';
import './liquivelte-liquid-hs6dbc6cca.liquivelte.js';
import './store.js-hs80deeb5c.liquivelte.js';

console.log('custom entry');

  function createSlots(slots) {
      const svelteSlots = {};

      for (const slotName in slots) {
          svelteSlots[slotName] = [createSlotFn(slots[slotName])];
      }

      function createSlotFn(element) {
          return function() {
              return {
                  c: noop,

                  m: function mount(target, anchor) {
                      insert(target, element, anchor);
                  },

                  d: function destroy(detaching) {
                      if (detaching) {
                          detach(element);
                      }
                  },

                  l: noop,
              };
          }
      }
      return svelteSlots;
  }

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
          const AppWrapper = (await import('./app-wrapper-hs5946d6f3.liquivelte.js')).default;

          wrapper.svelteComponent = new AppWrapper({
            target: wrapper,
            hydrate: true,
            props: {
                ...svelteProps,
                ...rawIncludes,
              lec: liquid_expression_cache
            }
          });

          // wrapper.svelteComponent.$$.__dirty = wrapper.svelteComponent.$$.dirty;

          // Object.defineProperty(wrapper.svelteComponent.$$, 'dirty', {
          //   get() {
          //     wrapper.svelteComponent.$$.__dirty;
          //   },
          //   set(v) {
          //     console.log('setting it dirty');
          //   }
          // });
        }
      })();
    });
  });
  
  });
