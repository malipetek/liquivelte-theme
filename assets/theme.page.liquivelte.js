import { Framework7, Panel, Popup, Popover, Stepper, Accordion, Menu, SmartSelect, Range, Notification, Searchbar } from './searchbar-hs0c484586.liquivelte.js';
import { Framework7Svelte } from './framework7-liquivelte-hs7cccafc5.liquivelte.js';
import './liquivelte-svelte-hs75fa7249.liquivelte.js';
import './framework7-liquivelte-get-params-hsf7b0a459.liquivelte.js';
import './page.custom-hs7e824e73.liquivelte.js';
import './htm.js-hs6a35606f.liquivelte.js';
import './framework7-liquivelte-popup-hsb6d11cdb.liquivelte.js';
import './framework7-liquivelte-view-hsd7ca4772.liquivelte.js';
import './framework7-liquivelte-router-context-provider-hs6ce7143b.liquivelte.js';
import './framework7-liquivelte-login-screen-hse2891b0e.liquivelte.js';
import './framework7-liquivelte-sheet-hs1878d772.liquivelte.js';
import './framework7-liquivelte-popover-hs5f0433a4.liquivelte.js';
import './framework7-liquivelte-panel-hs631fa697.liquivelte.js';
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
  Searchbar
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
          wrapper.svelteComponent = new (await import('./prompts-hs907a679a.liquivelte.js')).default({
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
          wrapper.svelteComponent = new (await import('./header-hsbcd51f53.liquivelte.js').then(function (n) { return n.index; })).default({
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
          wrapper.svelteComponent = new (await import('./app-wrapper-hs294f929d.liquivelte.js')).default({
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
