console.log('custom entry');
  // Import F7 Bundle
  import Framework7 from 'framework7';
  import Panel from 'framework7/components/panel';
  import Popup from 'framework7/components/popup';
  import Popover from 'framework7/components/popover';
  import Stepper from 'framework7/components/stepper';
  import Accordion from 'framework7/components/accordion';
  import Menu from 'framework7/components/menu';
  import SmartSelect from 'framework7/components/smart-select';
  import Range from 'framework7/components/range';
  import Notification from 'framework7/components/notification';
  import Searchbar from 'framework7/components/searchbar';
  import Progressbar from 'framework7/components/progressbar';

  // Import F7-Svelte Plugin
  import f7liquivelte from 'framework7-liquivelte';

  // Init F7-Svelte Plugin
Framework7.use([
  f7liquivelte,
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

/* {% comment %} DO NOT REMOVE THIS LINE {% endcomment %} */
import "../.templates/index.icon.js";
  

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
          wrapper.svelteComponent = new (await import("../sections/prompts/index.liquivelte")).default({
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
          wrapper.svelteComponent = new (await import("../sections/header/index.liquivelte")).default({
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
          wrapper.svelteComponent = new (await import("../snippets/app-wrapper.liquivelte")).default({
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