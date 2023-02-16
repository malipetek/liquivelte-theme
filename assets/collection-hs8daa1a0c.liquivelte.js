const onIntersect = (el, callback) => {
    const observer = new IntersectionObserver(callback, {
      root: null,   // default is the viewport
      rootMargin: '100px', // default is '0px'
      threshold: 0 // percentage of taregt's visible area. Triggers "onIntersection"
    });
    observer.observe(el);
  };

  const initializeObservers = (doc) => {
    
  Array.from(doc.querySelectorAll('.liquivelte-component.collection-banner')).forEach(wrapper => {
    let svelteProps = wrapper.svelteProps;
    let rawIncludes = wrapper.rawIncludes;
    let liquid_expression_cache = wrapper.liquid_expression_cache;
    wrapper.module_loaded = true;
    let initialized = false;
    onIntersect(wrapper, ([entry]) => {
      (async () => {
        if(entry.isIntersecting && !initialized) {
          initialized = true;
          wrapper.svelteComponent = new (await import('./collection-banner-hs8daa1a0c.liquivelte.js')).default({
            target: wrapper,
            hydrate: true,
            props: { resetCicR: true },
            context: new Map([['svelteProps', svelteProps], ['rawIncludes', rawIncludes], ['lec', liquid_expression_cache]])
          });
        }
      })();
    });
  });
  
  Array.from(doc.querySelectorAll('.liquivelte-component.facets')).forEach(wrapper => {
    let svelteProps = wrapper.svelteProps;
    let rawIncludes = wrapper.rawIncludes;
    let liquid_expression_cache = wrapper.liquid_expression_cache;
    wrapper.module_loaded = true;
    let initialized = false;
    onIntersect(wrapper, ([entry]) => {
      (async () => {
        if(entry.isIntersecting && !initialized) {
          initialized = true;
          wrapper.svelteComponent = new (await import('./facets-hs8daa1a0c.liquivelte.js')).default({
            target: wrapper,
            hydrate: true,
            props: { resetCicR: true },
            context: new Map([['svelteProps', svelteProps], ['rawIncludes', rawIncludes], ['lec', liquid_expression_cache]])
          });
        }
      })();
    });
  });
  
  Array.from(doc.querySelectorAll('.liquivelte-component.collection-product-grid')).forEach(wrapper => {
    let svelteProps = wrapper.svelteProps;
    let rawIncludes = wrapper.rawIncludes;
    let liquid_expression_cache = wrapper.liquid_expression_cache;
    wrapper.module_loaded = true;
    let initialized = false;
    onIntersect(wrapper, ([entry]) => {
      (async () => {
        if(entry.isIntersecting && !initialized) {
          initialized = true;
          wrapper.svelteComponent = new (await import('./collection-product-grid-hs8daa1a0c.liquivelte.js')).default({
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
