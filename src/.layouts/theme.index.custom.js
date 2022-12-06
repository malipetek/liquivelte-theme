console.log('custom entry');
  import { detach, insert, noop } from 'svelte/internal';

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
  // Import F7 Bundle
  import Framework7 from 'framework7/lite-bundle';

  // Import F7-Svelte Plugin
  import Framework7Liquivelte from 'framework7-liquivelte';

  // Init F7-Svelte Plugin
  Framework7.use(Framework7Liquivelte);
  
  const onIntersect = (el, callback) => {
    const observer = new IntersectionObserver(callback, {
      root: null,   // default is the viewport
      rootMargin: '100px', // default is '0px'
      threshold: 0 // percentage of taregt's visible area. Triggers "onIntersection"
    });
    observer.observe(el);
  };
  
  import "../.templates/index.js";

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
          wrapper.svelteComponent = new (await import("../sections/prompts/index.liquivelte")).default({
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
          wrapper.svelteComponent = new (await import("../sections/header/index.liquivelte")).default({
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
          const AppWrapper = (await import("../snippets/app-wrapper.liquivelte")).default;

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