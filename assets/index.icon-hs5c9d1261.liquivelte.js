const onIntersect = (el, callback) => {
    const observer = new IntersectionObserver(callback, {
      root: null,   // default is the viewport
      rootMargin: '100px', // default is '0px'
      threshold: 0 // percentage of taregt's visible area. Triggers "onIntersection"
    });
    observer.observe(el);
  };

  const initializeObservers = (doc) => {
    
  Array.from(doc.querySelectorAll('.liquivelte-component.icons-gallery')).forEach(wrapper => {
    let svelteProps = wrapper.svelteProps;
    let rawIncludes = wrapper.rawIncludes;
    let liquid_expression_cache = wrapper.liquid_expression_cache;
    wrapper.module_loaded = true;
    let initialized = false;
    onIntersect(wrapper, ([entry]) => {
      (async () => {
        if(entry.isIntersecting && !initialized) {
          initialized = true;
          wrapper.svelteComponent = new (await import('./icons-gallery-hs133eb6e7.liquivelte.js')).default({
            target: wrapper,
            hydrate: true,
            props: { resetCicR: true },
            context: new Map([['svelteProps', svelteProps], ['rawIncludes', rawIncludes], ['lec', liquid_expression_cache]])
          });
        }
      })();
    });
  });
  };
  document.addEventListener('DOMContentLoaded', () => initializeObservers(document));
