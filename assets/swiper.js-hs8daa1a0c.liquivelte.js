import { Swiper, Thumb, Zoom } from './framework7-liquivelte-get-params-hs6b273664.liquivelte.js';

window.Swiper = Swiper;
Swiper.prototype.__modules__.find(m => m.name == 'Resize');

function CustomResize(_ref) {
  console.log('using curtom resize');
  let {
    swiper,
    on,
    emit
  } = _ref;
  let observer = null;
  let animationFrame = null;

  const resizeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('beforeResize');
    emit('resize');
  };

  const createObserver = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    observer = new ResizeObserver(entries => {
      animationFrame = window.requestAnimationFrame(() => {
        const {
          width,
          height,
          params
        } = swiper;
        let newWidth = width;
        let newHeight = height;
        entries.forEach(_ref2 => {
          let {
            contentBoxSize,
            contentRect,
            target
          } = _ref2;
          if (target && target !== swiper.el) return;
          newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
          newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
        });

        if (Math.round(newWidth) !== Math.round(width + (swiper.params.direction == 'horizontal' ? params.spaceBetween : 0)) || Math.round(newHeight) !== Math.round(height + (swiper.params.direction == 'vertical' ? params.spaceBetween : 0))) {
          resizeHandler();
        }
      });
    });
    observer.observe(swiper.el);
  };

  const removeObserver = () => {
    if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
    }

    if (observer && observer.unobserve && swiper.el) {
      observer.unobserve(swiper.el);
      observer = null;
    }
  };

  const orientationChangeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('orientationchange');
  };

  on('init', () => {
    if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
      createObserver();
      return;
    }

    window.addEventListener('resize', resizeHandler);
    window.addEventListener('orientationchange', orientationChangeHandler);
  });
  on('destroy', () => {
    removeObserver();
    window.removeEventListener('resize', resizeHandler);
    window.removeEventListener('orientationchange', orientationChangeHandler);
  });
}

Swiper.prototype.__modules__ = Swiper.prototype.__modules__.map(m => /Resize/.test(m.name) ? CustomResize : m);

Swiper.use([Thumb, Zoom]);
