
  const onIntersect = (el, callback) => {
    const observer = new IntersectionObserver(callback, {
      root: null,   // default is the viewport
      rootMargin: '100px', // default is '0px'
      threshold: 0 // percentage of taregt's visible area. Triggers "onIntersection"
    });
    observer.observe(el);
  };
  
  /* {% comment %} DO NOT REMOVE THIS LINE {% endcomment %} */
  import "../.templates/product.js";
  

   const initializeObservers = () => {
    
  Array.from(doc.querySelectorAll('.liquivelte-component.header')).forEach(wrapper => {
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
            context: new Map([['svelteProps', svelteProps], ['rawIncludes', rawIncludes], ['lec', liquid_expression_cache]])
          });
        }
      })();
    });
  });
   };
  document.addEventListener('DOMContentLoaded', () => initializeObservers(document));
  document.addEventListener('view-loaded', event => initializeObservers(event.detail.document));
  