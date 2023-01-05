console.log('custom entry');
  // Import F7 Bundle
  import Framework7 from 'framework7';
  import Panel from 'framework7/components/panel';
  import Popup from 'framework7/components/popup';
  import Stepper from 'framework7/components/stepper';
  import Accordion from 'framework7/components/accordion';
  import Menu from 'framework7/components/menu';
  import SmartSelect from 'framework7/components/smart-select';
  import Range from 'framework7/components/range';

  // Import F7-Svelte Plugin
  import f7liquivelte from 'framework7-liquivelte';

  // Init F7-Svelte Plugin
Framework7.use([
  f7liquivelte,
  Panel,
  Popup,
  Stepper,
  Accordion,
  Menu,
  SmartSelect,
  Range
]);

const onIntersect = (el, callback) => {
  const observer = new IntersectionObserver(callback, {
    root: null,   // default is the viewport
    rootMargin: '100px', // default is '0px'
    threshold: 0 // percentage of taregt's visible area. Triggers "onIntersection"
  });
  observer.observe(el);
};

/* {% comment %} DO NOT REMOVE THIS LINE {% endcomment %} */
import "../.templates/index.icon.js";
  

document.addEventListener('DOMContentLoaded', () => {

  Array.from(document.querySelectorAll('.liquivelte-component.prompts')).forEach(wrapper => {
    let svelteProps = wrapper.svelteProps;
    let rawIncludes = wrapper.rawIncludes;
    let liquid_expression_cache = wrapper.liquid_expression_cache;
    wrapper.module_loaded = true;
    let initialized = false;
    onIntersect(wrapper, ([entry]) => {
      (async () => {
        if (entry.isIntersecting && !initialized) {
          initialized = true;
          wrapper.svelteComponent = new (await import("../sections/prompts/index.liquivelte")).default({
            target: wrapper,
            hydrate: true,
            context: new Map([['svelteProps', svelteProps], ['rawIncludes', rawIncludes], ['lec', liquid_expression_cache]])
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
        if (entry.isIntersecting && !initialized) {
          initialized = true;
          wrapper.svelteComponent = new (await import("../sections/header/index.liquivelte")).default({
            target: wrapper,
            hydrate: true,
            context: new Map([['svelteProps', svelteProps], ['rawIncludes', rawIncludes], ['lec', liquid_expression_cache]])
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
        if (entry.isIntersecting && !initialized) {
          initialized = true;
          wrapper.svelteComponent = new (await import("../snippets/app-wrapper.liquivelte")).default({
            target: wrapper,
            hydrate: true,
            context: new Map([['svelteProps', svelteProps], ['rawIncludes', rawIncludes], ['lec', liquid_expression_cache]])
          });
        }
      })();
    });
  });

});