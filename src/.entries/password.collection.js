
  const onIntersect = (el, callback) => {
    const observer = new IntersectionObserver(callback, {
      root: null,   // default is the viewport
      rootMargin: '100px', // default is '0px'
      threshold: 0 // percentage of taregt's visible area. Triggers "onIntersection"
    });
    observer.observe(el);
  };
  
  /* {% comment %} DO NOT REMOVE THIS LINE {% endcomment %} */
  import "../.templates/collection.js";
  

   const initializeObservers = () => {
     };
  document.addEventListener('DOMContentLoaded', () => initializeObservers(document));
  document.addEventListener('view-loaded', event => initializeObservers(event.detail.document));
  