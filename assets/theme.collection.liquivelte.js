import { Framework7, Panel, Popup, Popover, Stepper, Accordion, Menu, SmartSelect, Range, Notification, Searchbar, Progressbar } from './progressbar-hs0f9605cd.liquivelte.js';
import { Framework7Svelte } from './framework7-liquivelte-hs01c0185d.liquivelte.js';
import './liquivelte-svelte-hs8b900a8a.liquivelte.js';
import './framework7-liquivelte-get-params-hsf7b0a459.liquivelte.js';
import './collection.custom-hsdb2949ea.liquivelte.js';
import './htm.js-hs6a35606f.liquivelte.js';
import './framework7-liquivelte-popup-hsd1b443d8.liquivelte.js';
import './framework7-liquivelte-view-hsa1941a4c.liquivelte.js';
import './framework7-liquivelte-router-context-provider-hsad0db293.liquivelte.js';
import './framework7-liquivelte-login-screen-hs10876efe.liquivelte.js';
import './framework7-liquivelte-sheet-hsdde39230.liquivelte.js';
import './framework7-liquivelte-popover-hsfee652eb.liquivelte.js';
import './framework7-liquivelte-panel-hs292f30bc.liquivelte.js';
import './liquivelte-liquid-hs9c1bba77.liquivelte.js';
import './framework7-liquivelte-utils-hs84a9c325.liquivelte.js';
import './framework7-liquivelte-params-list-hse5f5b7fb.liquivelte.js';

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
          wrapper.svelteComponent = new (await import('./prompts-hs1dc232cd.liquivelte.js')).default({
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
          wrapper.svelteComponent = new (await import('./header-hs7f598b85.liquivelte.js').then(function (n) { return n.index; })).default({
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
          wrapper.svelteComponent = new (await import('./app-wrapper-hs46b35a3f.liquivelte.js')).default({
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
