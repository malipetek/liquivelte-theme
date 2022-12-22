const theme = {
  Helpers: {
    serialize: function serialize(form) {
      var arr = [];
      Array.prototype.slice.call(form.elements).forEach(function (field) {
        if (
          !field.name ||
          field.disabled ||
          ['file', 'reset', 'submit', 'button'].indexOf(field.type) > -1
        )
          return;
        if (field.type === 'select-multiple') {
          Array.prototype.slice.call(field.options).forEach(function (option) {
            if (!option.selected) return;
            arr.push(
              encodeURIComponent(field.name) +
              '=' +
              encodeURIComponent(option.value)
            );
          });
          return;
        }
        if (['checkbox', 'radio'].indexOf(field.type) > -1 && !field.checked)
          return;
        arr.push(
          encodeURIComponent(field.name) + '=' + encodeURIComponent(field.value)
        );
      });
      return arr.join('&');
    }
  }
};

export function handleize(str) {
  str = str.toLowerCase();

  var toReplace = ['"', "'", "\\", "(", ")", "[", "]"];

  // For the old browsers
  for (var i = 0; i < toReplace.length; ++i) {
    str = str.replace(toReplace[i], "");
  }

  str = str.replace(/\W+/g, "-");

  if (str.charAt(str.length - 1) == "-") {
    str = str.replace(/-+\z/, "");
  }

  if (str.charAt(0) == "-") {
    str = str.replace(/\A-+/, "");
  }

  return str;
};
export function updateHistoryState(variant) {
  if (!history.replaceState || !variant) {
    return;
  }

  var newurl =
    window.location.protocol +
    '//' +
    window.location.host +
    window.location.pathname +
    '?variant=' +
    variant.id;
  window.history.replaceState({ path: newurl }, '', newurl);
}

/**
 * @typedef {object} AddToCartResult
 * @property any
 */
/**
 * @param  {Object} Props
 * @returns 
 */
export async function addToCart({
  form,
  variant,
  variantId,
  product,
  quantity = 1,
  properties
} = {
  form: null,
  variant: null,
  variantId: null,
  product: null,
  quantity: null,
  properties: null
}) {
  let result = {};
  let response;
  if (product && product.variants) {
    variantId = product.variants.find(v => v.available)?.id;
  }
  if (variant) {
    variantId = variant.id;
  }
  try {
    if (form && form.constructor === HTMLFormElement) {
      response = await fetch('/cart/add.js', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'X-Requested-With': 'XMLHttpRequest'
        },
        body: theme.Helpers.serialize(form)
      });
    }
    else if (!quantity) {
      response = await fetch(`/cart/add.js`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          items: [{
            id: variantId,
            quantity,
            properties
        }]
        })
      });
    }
    else {
      response = await fetch(`/cart/add.js`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({items: [
          {
            quantity,
            id: variantId,
            properties
          }
        ]})
      });
    }
    const responseData = await response.json();

    if (responseData.status && responseData.status !== 200) {
      var error = new Error(responseData.description);
      // error.isFromServer = true;
      throw error;
    }
    document.body.dispatchEvent(new CustomEvent('shopify:added_to_cart', { detail: responseData }));
    result = responseData;
  } catch (err) {
    result = {
      status: 500,
      description: err.message
    };
  }

  // const cartResponse = await fetch('/cart?view=json');
  const cartResponse = await fetch('/cart.js');
  const newCartData = await cartResponse.json();
  return newCartData;
}


export async function updateLineItem(itemid, quantity) {
  await fetch(`/cart/update.js`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
        updates: { [itemid]: quantity }
    })
  })
  const cartResponse = await fetch('/cart.js');
  const newCartData = await cartResponse.json();
  return newCartData;
}


export function preloadImage(src) {
  return new Promise(done => {
    var img = new Image();
    img.onload = done;
    img.src = src;
  });
}

export function isValidHttpUrl(string) {
  let url;
  string = string.replace(/^\/\//, 'https://');
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}


function getScrollbarWidth() {

  // Creating invisible container
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll'; // forcing scrollbar to appear
  outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement('div');
  inner.style.width = '100%';
  inner.style.display = 'block';
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

  // Removing temporary elements from the DOM
  outer.parentNode.removeChild(outer);

  return scrollbarWidth;

}

var y_offsetWhenScrollDisabled = 0;

// window.addEventListener('scroll', e => {
//   const y_offsetWhenScrollDisabled = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);

//   document.documentElement.scrollTop = y_offsetWhenScrollDisabled;
//   window.pageYOffset = y_offsetWhenScrollDisabled;
//   document.body.scrollTop = y_offsetWhenScrollDisabled;
// });

export function disableScrollOnBody() {
  y_offsetWhenScrollDisabled = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
  document.body.classList.add('prevent-scrolling');
  document.body.setAttribute('style', `margin-top: -${y_offsetWhenScrollDisabled}px; width: ${window.innerWidth - getScrollbarWidth()}px;`);
}
export function enableScrollOnBody() {
  if (document.body.classList.contains('prevent-scrolling')) {
    document.body.classList.remove('prevent-scrolling');
    document.body.style.marginTop = '';
    document.documentElement.scrollTop = y_offsetWhenScrollDisabled;
    window.pageYOffset = y_offsetWhenScrollDisabled;
    document.body.scrollTop = y_offsetWhenScrollDisabled;
    document.body.style.width = ``;
  }
}

export function getFocusableElements(container) {
  return Array.from(
    container.querySelectorAll(
      "summary, a[href], button:enabled, [tabindex]:not([tabindex^='-']), [draggable], area, input:not([type=hidden]):enabled, select:enabled, textarea:enabled, object, iframe"
    )
  );
}

// document.querySelectorAll('[id^="Details-"] summary').forEach((summary) => {
//   summary.setAttribute('role', 'button');
//   summary.setAttribute('aria-expanded', 'false');

//   if(summary.nextElementSibling.getAttribute('id')) {
//     summary.setAttribute('aria-controls', summary.nextElementSibling.id);
//   }

//   summary.addEventListener('click', (event) => {
//     event.currentTarget.setAttribute('aria-expanded', !event.currentTarget.closest('details').hasAttribute('open'));
//   });

//   if (summary.closest('header-drawer')) return;
//   summary.parentElement.addEventListener('keyup', onKeyUpEscape);
// });

const trapFocusHandlers = {};

export function trapFocus(container, elementToFocus = container) {
  var elements = getFocusableElements(container);
  var first = elements[0];
  var last = elements[elements.length - 1];

  removeTrapFocus();

  trapFocusHandlers.focusin = (event) => {
    if (
      event.target !== container &&
      event.target !== last &&
      event.target !== first
    )
      return;

    document.addEventListener('keydown', trapFocusHandlers.keydown);
  };

  trapFocusHandlers.focusout = function() {
    document.removeEventListener('keydown', trapFocusHandlers.keydown);
  };

  trapFocusHandlers.keydown = function(event) {
    if (event.code.toUpperCase() !== 'TAB') return; // If not TAB key
    // On the last focusable element and tab forward, focus the first element.
    if (event.target === last && !event.shiftKey) {
      event.preventDefault();
      first.focus();
    }

    //  On the first focusable element and tab backward, focus the last element.
    if (
      (event.target === container || event.target === first) &&
      event.shiftKey
    ) {
      event.preventDefault();
      last.focus();
    }
  };

  document.addEventListener('focusout', trapFocusHandlers.focusout);
  document.addEventListener('focusin', trapFocusHandlers.focusin);

  elementToFocus.focus();
}

// Here run the querySelector to figure out if the browser supports :focus-visible or not and run code based on it.
try {
  document.querySelector(":focus-visible");
} catch(e) {
  focusVisiblePolyfill();
}

export function focusVisiblePolyfill() {
  const navKeys = ['ARROWUP', 'ARROWDOWN', 'ARROWLEFT', 'ARROWRIGHT', 'TAB', 'ENTER', 'SPACE', 'ESCAPE', 'HOME', 'END', 'PAGEUP', 'PAGEDOWN']
  let currentFocusedElement = null;
  let mouseClick = null;

  window.addEventListener('keydown', (event) => {
    if(navKeys.includes(event.code.toUpperCase())) {
      mouseClick = false;
    }
  });

  window.addEventListener('mousedown', (event) => {
    mouseClick = true;
  });

  window.addEventListener('focus', () => {
    if (currentFocusedElement) currentFocusedElement.classList.remove('focused');

    if (mouseClick) return;

    currentFocusedElement = document.activeElement;
    currentFocusedElement.classList.add('focused');

  }, true);
}

export function pauseAllMedia() {
  document.querySelectorAll('.js-youtube').forEach((video) => {
    video.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
  });
  document.querySelectorAll('.js-vimeo').forEach((video) => {
    video.contentWindow.postMessage('{"method":"pause"}', '*');
  });
  document.querySelectorAll('video').forEach((video) => video.pause());
  document.querySelectorAll('product-model').forEach((model) => {
    if (model.modelViewerUI) model.modelViewerUI.pause();
  });
}

export function removeTrapFocus(elementToFocus = null) {
  document.removeEventListener('focusin', trapFocusHandlers.focusin);
  document.removeEventListener('focusout', trapFocusHandlers.focusout);
  document.removeEventListener('keydown', trapFocusHandlers.keydown);

  if (elementToFocus) elementToFocus.focus();
}

export function onKeyUpEscape(event) {
  if (event.code.toUpperCase() !== 'ESCAPE') return;

  const openDetailsElement = event.target.closest('details[open]');
  if (!openDetailsElement) return;

  const summaryElement = openDetailsElement.querySelector('summary');
  openDetailsElement.removeAttribute('open');
  summaryElement.setAttribute('aria-expanded', false);
  summaryElement.focus();
}

export function debounce(fn, wait) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), wait);
  };
}

function fetchConfig(type = 'json') {
  return {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': `application/${type}` }
  };
}

/*
 * Shopify Common JS
 *
 */
if ((typeof window.Shopify) == 'undefined') {
  window.Shopify = {};
}

Shopify.bind = function(fn, scope) {
  return function() {
    return fn.apply(scope, arguments);
  }
};

Shopify.setSelectorByValue = function(selector, value) {
  for (var i = 0, count = selector.options.length; i < count; i++) {
    var option = selector.options[i];
    if (value == option.value || value == option.innerHTML) {
      selector.selectedIndex = i;
      return i;
    }
  }
};

Shopify.addListener = function(target, eventName, callback) {
  target.addEventListener ? target.addEventListener(eventName, callback, false) : target.attachEvent('on'+eventName, callback);
};

Shopify.postLink = function(path, options) {
  options = options || {};
  var method = options['method'] || 'post';
  var params = options['parameters'] || {};

  var form = document.createElement("form");
  form.setAttribute("method", method);
  form.setAttribute("action", path);

  for(var key in params) {
    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", key);
    hiddenField.setAttribute("value", params[key]);
    form.appendChild(hiddenField);
  }
  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
};

Shopify.CountryProvinceSelector = function(country_domid, province_domid, options) {
  this.countryEl         = document.getElementById(country_domid);
  this.provinceEl        = document.getElementById(province_domid);
  this.provinceContainer = document.getElementById(options['hideElement'] || province_domid);

  Shopify.addListener(this.countryEl, 'change', Shopify.bind(this.countryHandler,this));

  this.initCountry();
  this.initProvince();
};

Shopify.CountryProvinceSelector.prototype = {
  initCountry: function() {
    var value = this.countryEl.getAttribute('data-default');
    Shopify.setSelectorByValue(this.countryEl, value);
    this.countryHandler();
  },

  initProvince: function() {
    var value = this.provinceEl.getAttribute('data-default');
    if (value && this.provinceEl.options.length > 0) {
      Shopify.setSelectorByValue(this.provinceEl, value);
    }
  },

  countryHandler: function(e) {
    var opt       = this.countryEl.options[this.countryEl.selectedIndex];
    var raw       = opt.getAttribute('data-provinces');
    var provinces = JSON.parse(raw);

    this.clearOptions(this.provinceEl);
    if (provinces && provinces.length == 0) {
      this.provinceContainer.style.display = 'none';
    } else {
      for (var i = 0; i < provinces.length; i++) {
        var opt = document.createElement('option');
        opt.value = provinces[i][0];
        opt.innerHTML = provinces[i][1];
        this.provinceEl.appendChild(opt);
      }

      this.provinceContainer.style.display = "";
    }
  },

  clearOptions: function(selector) {
    while (selector.firstChild) {
      selector.removeChild(selector.firstChild);
    }
  },

  setOptions: function(selector, values) {
    for (var i = 0, count = values.length; i < values.length; i++) {
      var opt = document.createElement('option');
      opt.value = values[i];
      opt.innerHTML = values[i];
      selector.appendChild(opt);
    }
  }
};
