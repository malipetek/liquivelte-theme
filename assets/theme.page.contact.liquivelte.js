import { Framework7, Panel, Popup, Popover, Stepper, Accordion, Menu, SmartSelect, Range, Notification, Searchbar, Progressbar } from './progressbar-hs3feaa58a.liquivelte.js';
import { Framework7Svelte } from './framework7-liquivelte-hsbc78d147.liquivelte.js';
import './liquivelte-svelte-hs860fcb0f.liquivelte.js';
import './framework7-liquivelte-get-params-hsa26ede4c.liquivelte.js';
import './page.contact-hsbf955c0a.liquivelte.js';
import './htm.js-hsb7fd03b1.liquivelte.js';
import './framework7-liquivelte-popup-hs40942790.liquivelte.js';
import './framework7-liquivelte-view-hsd52a64b1.liquivelte.js';
import './framework7-liquivelte-router-context-provider-hsf6db1e25.liquivelte.js';
import './framework7-liquivelte-login-screen-hsf8fd91c9.liquivelte.js';
import './framework7-liquivelte-sheet-hs145d5250.liquivelte.js';
import './framework7-liquivelte-popover-hs7287b426.liquivelte.js';
import './framework7-liquivelte-panel-hsc31b6190.liquivelte.js';
import './liquivelte-liquid-hsf5ca955b.liquivelte.js';
import './framework7-liquivelte-utils-hs4f3069f4.liquivelte.js';
import './framework7-liquivelte-params-list-hs47bd97f3.liquivelte.js';

console.log('custom entry');

  // Init F7-Svelte Plugin
Framework7.use([
  Framework7Svelte,
  Panel,
  Popup,
  Popover,
  Stepper,
  Accordion,
  Menu,
  SmartSelect,
  Range,
  Notification,
  Searchbar,
  Progressbar
]);

const onIntersect = (el, callback) => {
  const observer = new IntersectionObserver(callback, {
    root: null,   // default is the viewport
    rootMargin: '100px', // default is '0px'
    threshold: 0 // percentage of taregt's visible area. Triggers "onIntersection"
  });
  observer.observe(el);
};
  

const initializeObservers = (doc) => {

  Array.from(doc.querySelectorAll('.liquivelte-component.prompts')).forEach(wrapper => {
    let svelteProps = wrapper.svelteProps;
    let rawIncludes = wrapper.rawIncludes;
    let liquid_expression_cache = wrapper.liquid_expression_cache;
    wrapper.module_loaded = true;
    let initialized = false;
    onIntersect(wrapper, ([entry]) => {
      (async () => {
        if (entry.isIntersecting && !initialized) {
          initialized = true;
          wrapper.svelteComponent = new (await import('./prompts-hs7f1a7f42.liquivelte.js')).default({
            target: wrapper,
            hydrate: true,
            props: { resetCicR: true },
            context: new Map([['svelteProps', svelteProps], ['rawIncludes', rawIncludes], ['lec', liquid_expression_cache], ['component_include_count', 0]])
          });
        }
      })();
    });
  });

  Array.from(doc.querySelectorAll('.liquivelte-component.header')).forEach(wrapper => {
    let svelteProps = wrapper.svelteProps;
    let rawIncludes = wrapper.rawIncludes;
    let liquid_expression_cache = wrapper.liquid_expression_cache;
    wrapper.module_loaded = true;
    let initialized = false;
    onIntersect(wrapper, ([entry]) => {
      (async () => {
        if (entry.isIntersecting && !initialized) {
          initialized = true;
          wrapper.svelteComponent = new (await import('./header-hs625ca8e2.liquivelte.js').then(function (n) { return n.index; })).default({
            target: wrapper,
            hydrate: true,
            props: { resetCicR: true },
            context: new Map([['svelteProps', svelteProps], ['rawIncludes', rawIncludes], ['lec', liquid_expression_cache], ['component_include_count', 0]])
          });
        }
      })();
    });
  });

  Array.from(doc.querySelectorAll('.liquivelte-component.app-wrapper')).forEach(wrapper => {
    let svelteProps = wrapper.svelteProps;
    let rawIncludes = wrapper.rawIncludes;
    let liquid_expression_cache = wrapper.liquid_expression_cache;
    wrapper.module_loaded = true;
    let initialized = false;
    onIntersect(wrapper, ([entry]) => {
      (async () => {
        if (entry.isIntersecting && !initialized) {
          initialized = true;
          wrapper.svelteComponent = new (await import('./app-wrapper-hse76964ba.liquivelte.js')).default({
            target: wrapper,
            hydrate: true,
            props: { resetCicR: true },
            context: new Map([['svelteProps', svelteProps], ['rawIncludes', rawIncludes], ['lec', liquid_expression_cache], ['component_include_count', 0]])
          });
        }
      })();
    });
  });
};
document.addEventListener('DOMContentLoaded', () => initializeObservers(document));
