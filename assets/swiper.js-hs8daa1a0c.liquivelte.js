import{Swiper as e,Thumb as i,Zoom as t}from'./framework7-liquivelte-get-params-hs6b273664.liquivelte.js';function CustomResize(e){let{swiper:i,on:t,emit:n}=e;let o=null;let r=null;const resizeHandler=()=>{i&&!i.destroyed&&i.initialized&&(n('beforeResize'),n('resize'))};const createObserver=()=>{i&&!i.destroyed&&i.initialized&&(o=new ResizeObserver((e=>{r=window.requestAnimationFrame((()=>{const{width:t,height:n,params:o}=i;let r=t;let s=n;e.forEach((e=>{let{contentBoxSize:t,contentRect:n,target:o}=e;o&&o!==i.el||(r=n?n.width:(t[0]||t).inlineSize,s=n?n.height:(t[0]||t).blockSize)})),Math.round(r)===Math.round(t+('horizontal'==i.params.direction?o.spaceBetween:0))&&Math.round(s)===Math.round(n+('vertical'==i.params.direction?o.spaceBetween:0))||resizeHandler()}))})),o.observe(i.el))};const removeObserver=()=>{r&&window.cancelAnimationFrame(r),o&&o.unobserve&&i.el&&(o.unobserve(i.el),o=null)};const orientationChangeHandler=()=>{i&&!i.destroyed&&i.initialized&&n('orientationchange')};t('init',(()=>{i.params.resizeObserver&&void 0!==window.ResizeObserver?createObserver():(window.addEventListener('resize',resizeHandler),window.addEventListener('orientationchange',orientationChangeHandler))})),t('destroy',(()=>{removeObserver(),window.removeEventListener('resize',resizeHandler),window.removeEventListener('orientationchange',orientationChangeHandler)}))}window.Swiper=e,e.prototype.__modules__.find((e=>'Resize'==e.name)),e.prototype.__modules__=e.prototype.__modules__.map((e=>/Resize/.test(e.name)?CustomResize:e)),e.use([i,t]);
