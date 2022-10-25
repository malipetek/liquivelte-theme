import { element, create_component, claim_element, children, claim_component, detach, attr, toggle_class, insert_hydration, append_hydration, mount_component, transition_in, transition_out, destroy_component, space, text, claim_space, claim_text, group_outros, check_outros, set_data, HtmlTagHydration, claim_html_tag, destroy_each, SvelteComponent, init, safe_not_equal, create_slot, update_slot_base, get_all_dirty_from_scope, get_slot_changes, onMount, binding_callbacks, assign, bind, get_spread_update, get_spread_object, add_flush_callback, exclude_internal_props, noop, svg_element, claim_svg_element, empty } from './liquivelte-svelte-hs6e88e89c.liquivelte.js';
import { cachedLiquid } from './liquivelte-liquid-hs6dbc6cca.liquivelte.js';
import './store.js-hs80deeb5c.liquivelte.js';

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

function handleize(str) {
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
function updateHistoryState(variant) {
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
 * @property 
 */
/**
 * @param  {HTMLFormElement | Number} formOrVariantId
 * @param  {Number} quantity
 * @param  {Object} properties
 * @returns 
 */
async function addToCart(formOrVariantId, quantity, properties) {
  let result = {};
  let response;
  try {
    if (formOrVariantId.constructor === HTMLFormElement) {
      response = await fetch('/cart/add.js', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'X-Requested-With': 'XMLHttpRequest'
        },
        body: theme.Helpers.serialize(formOrVariantId)
      });
    }
    else {
      response = await fetch(`/cart/update.js`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({items: [
          {
            quantity,
            id: formOrVariantId,
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
  return result;
}

function preloadImage(src) {
  return new Promise(done => {
    var img = new Image();
    img.onload = done;
    img.src = src;
  });
}

function isValidHttpUrl(string) {
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

function disableScrollOnBody() {
  y_offsetWhenScrollDisabled = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
  document.body.classList.add('prevent-scrolling');
  document.body.setAttribute('style', `margin-top: -${y_offsetWhenScrollDisabled}px; width: ${window.innerWidth - getScrollbarWidth()}px;`);
}
function enableScrollOnBody() {
  if (document.body.classList.contains('prevent-scrolling')) {
    document.body.classList.remove('prevent-scrolling');
    document.body.style.marginTop = '';
    document.documentElement.scrollTop = y_offsetWhenScrollDisabled;
    window.pageYOffset = y_offsetWhenScrollDisabled;
    document.body.scrollTop = y_offsetWhenScrollDisabled;
    document.body.style.width = ``;
  }
}

function getFocusableElements(container) {
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

function trapFocus$1(container, elementToFocus = container) {
  var elements = getFocusableElements(container);
  var first = elements[0];
  var last = elements[elements.length - 1];

  removeTrapFocus$1();

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

function focusVisiblePolyfill() {
  const navKeys = ['ARROWUP', 'ARROWDOWN', 'ARROWLEFT', 'ARROWRIGHT', 'TAB', 'ENTER', 'SPACE', 'ESCAPE', 'HOME', 'END', 'PAGEUP', 'PAGEDOWN'];
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

function pauseAllMedia() {
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

function removeTrapFocus$1(elementToFocus = null) {
  document.removeEventListener('focusin', trapFocusHandlers.focusin);
  document.removeEventListener('focusout', trapFocusHandlers.focusout);
  document.removeEventListener('keydown', trapFocusHandlers.keydown);

  if (elementToFocus) elementToFocus.focus();
}

function onKeyUpEscape(event) {
  if (event.code.toUpperCase() !== 'ESCAPE') return;

  const openDetailsElement = event.target.closest('details[open]');
  if (!openDetailsElement) return;

  const summaryElement = openDetailsElement.querySelector('summary');
  openDetailsElement.removeAttribute('open');
  summaryElement.setAttribute('aria-expanded', false);
  summaryElement.focus();
}

function debounce$1(fn, wait) {
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

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/src/sections/header/components/navigation.liquivelte generated by Svelte v3.50.0 */

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[5] = list[i];
	child_ctx[8] = i;

	const constants_0 = {
		first: /*index*/ child_ctx[8] === 0,
		index: /*index*/ child_ctx[8] + 1,
		index0: /*index*/ child_ctx[8],
		last: /*index*/ child_ctx[8] === /*links*/ child_ctx[2].length - 1,
		rindex: /*links*/ child_ctx[2].length - /*index*/ child_ctx[8],
		rindex0: /*links*/ child_ctx[2].length - /*index*/ child_ctx[8] - 1,
		length: /*links*/ child_ctx[2].length
	};

	child_ctx[6] = constants_0;
	return child_ctx;
}

// (29:6) {#if lnk.links }
function create_if_block$1(ctx) {
	let details;
	let summary;
	let navigation;
	let details_id_value;
	let current;
	navigation = new Navigation({ props: { links: /*lnk*/ ctx[5].links } });

	return {
		c() {
			details = element("details");
			summary = element("summary");
			create_component(navigation.$$.fragment);
			this.h();
		},
		l(nodes) {
			details = claim_element(nodes, "DETAILS", { id: true });
			var details_nodes = children(details);
			summary = claim_element(details_nodes, "SUMMARY", { class: true });
			var summary_nodes = children(summary);
			claim_component(navigation.$$.fragment, summary_nodes);
			summary_nodes.forEach(detach);
			details_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(summary, "class", "menu-drawer__menu-item list-menu__item link link--text focus-inset");
			toggle_class(summary, "menu-drawer__menu-item--active", /*lnk*/ ctx[5].child_active);
			attr(details, "id", details_id_value = "Details-menu-drawer-menu-item-" + /*forloop*/ ctx[6].index);
		},
		m(target, anchor) {
			insert_hydration(target, details, anchor);
			append_hydration(details, summary);
			mount_component(navigation, summary, null);
			current = true;
		},
		p(ctx, dirty) {
			const navigation_changes = {};
			if (dirty & /*links*/ 4) navigation_changes.links = /*lnk*/ ctx[5].links;
			navigation.$set(navigation_changes);

			if (!current || dirty & /*links*/ 4) {
				toggle_class(summary, "menu-drawer__menu-item--active", /*lnk*/ ctx[5].child_active);
			}

			if (!current || dirty & /*links*/ 4 && details_id_value !== (details_id_value = "Details-menu-drawer-menu-item-" + /*forloop*/ ctx[6].index)) {
				attr(details, "id", details_id_value);
			}
		},
		i(local) {
			if (current) return;
			transition_in(navigation.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(navigation.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(details);
			destroy_component(navigation);
		}
	};
}

// (18:2) {#each  links as lnk, index  }
function create_each_block(ctx) {
	let li;
	let t0;
	let a;
	let t1_value = /*liquid*/ ctx[3].escape(/*lnk*/ ctx[5].title) + "";
	let t1;
	let a_href_value;
	let t2;
	let current;
	let if_block = /*lnk*/ ctx[5].links && create_if_block$1(ctx);

	return {
		c() {
			li = element("li");
			if (if_block) if_block.c();
			t0 = space();
			a = element("a");
			t1 = text(t1_value);
			t2 = space();
			this.h();
		},
		l(nodes) {
			li = claim_element(nodes, "LI", {});
			var li_nodes = children(li);
			if (if_block) if_block.l(li_nodes);
			t0 = claim_space(li_nodes);
			a = claim_element(li_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			t1 = claim_text(a_nodes, t1_value);
			a_nodes.forEach(detach);
			t2 = claim_space(li_nodes);
			li_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(a, "href", a_href_value = /*lnk*/ ctx[5].url);
			attr(a, "class", "menu-drawer__menu-item list-menu__item link link--text focus-inset");
			toggle_class(a, "menu-drawer__menu-item--active", /*lnk*/ ctx[5].current);
		},
		m(target, anchor) {
			insert_hydration(target, li, anchor);
			if (if_block) if_block.m(li, null);
			append_hydration(li, t0);
			append_hydration(li, a);
			append_hydration(a, t1);
			append_hydration(li, t2);
			current = true;
		},
		p(ctx, dirty) {
			if (/*lnk*/ ctx[5].links) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*links*/ 4) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block$1(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(li, t0);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}

			if ((!current || dirty & /*links*/ 4) && t1_value !== (t1_value = /*liquid*/ ctx[3].escape(/*lnk*/ ctx[5].title) + "")) set_data(t1, t1_value);

			if (!current || dirty & /*links*/ 4 && a_href_value !== (a_href_value = /*lnk*/ ctx[5].url)) {
				attr(a, "href", a_href_value);
			}

			if (!current || dirty & /*links*/ 4) {
				toggle_class(a, "menu-drawer__menu-item--active", /*lnk*/ ctx[5].current);
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(li);
			if (if_block) if_block.d();
		}
	};
}

function create_fragment$5(ctx) {
	let div;
	let html_tag;
	let raw0_value = /*rawinclude_b7c846d6*/ ctx[0][index$6 || 0] + "";
	let t0;
	let html_tag_1;
	let raw1_value = /*rawinclude_5513f9e2*/ ctx[1][index$6 || 0] + "";
	let t1;
	let ul;
	let current;
	let each_value = /*links*/ ctx[2];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			div = element("div");
			html_tag = new HtmlTagHydration(false);
			t0 = space();
			html_tag_1 = new HtmlTagHydration(false);
			t1 = space();
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			html_tag = claim_html_tag(div_nodes, false);
			t0 = claim_space(div_nodes);
			html_tag_1 = claim_html_tag(div_nodes, false);
			div_nodes.forEach(detach);
			t1 = claim_space(nodes);
			ul = claim_element(nodes, "UL", { class: true, role: true });
			var ul_nodes = children(ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(detach);
			this.h();
		},
		h() {
			html_tag.a = t0;
			html_tag_1.a = null;
			attr(div, "class", "hidden");
			attr(ul, "class", "menu-drawer__menu has-submenu list-menu");
			attr(ul, "role", "list");
		},
		m(target, anchor) {
			insert_hydration(target, div, anchor);
			html_tag.m(raw0_value, div);
			append_hydration(div, t0);
			html_tag_1.m(raw1_value, div);
			insert_hydration(target, t1, anchor);
			insert_hydration(target, ul, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if ((!current || dirty & /*rawinclude_b7c846d6*/ 1) && raw0_value !== (raw0_value = /*rawinclude_b7c846d6*/ ctx[0][index$6 || 0] + "")) html_tag.p(raw0_value);
			if ((!current || dirty & /*rawinclude_5513f9e2*/ 2) && raw1_value !== (raw1_value = /*rawinclude_5513f9e2*/ ctx[1][index$6 || 0] + "")) html_tag_1.p(raw1_value);

			if (dirty & /*links, liquid*/ 12) {
				each_value = /*links*/ ctx[2];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(ul, null);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (detaching) detach(t1);
			if (detaching) detach(ul);
			destroy_each(each_blocks, detaching);
		}
	};
}

let index$6 = 0;

function instance$5($$self, $$props, $$invalidate) {
	let { lec } = $$props;
	const liquid = cachedLiquid(lec);
	let { rawinclude_b7c846d6 } = $$props;
	let { rawinclude_5513f9e2 } = $$props;
	let { links } = $$props;
	console.log('links ', links);

	$$self.$$set = $$props => {
		if ('lec' in $$props) $$invalidate(4, lec = $$props.lec);
		if ('rawinclude_b7c846d6' in $$props) $$invalidate(0, rawinclude_b7c846d6 = $$props.rawinclude_b7c846d6);
		if ('rawinclude_5513f9e2' in $$props) $$invalidate(1, rawinclude_5513f9e2 = $$props.rawinclude_5513f9e2);
		if ('links' in $$props) $$invalidate(2, links = $$props.links);
	};

	return [rawinclude_b7c846d6, rawinclude_5513f9e2, links, liquid, lec];
}

class Navigation extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance$5, create_fragment$5, safe_not_equal, {
			lec: 4,
			rawinclude_b7c846d6: 0,
			rawinclude_5513f9e2: 1,
			links: 2
		});
	}
}

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/src/sections/header/components/predictive-search.liquivelte generated by Svelte v3.50.0 */

function create_fragment$4(ctx) {
	let div;
	let div_data_loading_text_value;
	let current;
	const default_slot_template = /*#slots*/ ctx[4].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[3], null);

	return {
		c() {
			div = element("div");
			if (default_slot) default_slot.c();
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true, "data-loading-text": true });
			var div_nodes = children(div);
			if (default_slot) default_slot.l(div_nodes);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div, "class", "search-modal__form");
			attr(div, "data-loading-text", div_data_loading_text_value = /*liquid*/ ctx[1].t('accessibility.loading'));
		},
		m(target, anchor) {
			insert_hydration(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			/*div_binding*/ ctx[5](div);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 8)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[3],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[3])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[3], dirty, null),
						null
					);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (default_slot) default_slot.d(detaching);
			/*div_binding*/ ctx[5](null);
		}
	};
}

let index$5 = 0;

function onKeydown(event) {
	// Prevent the cursor from moving in the input when using the up and down arrow keys
	if (event.code === 'ArrowUp' || event.code === 'ArrowDown') {
		event.preventDefault();
	}
}

function instance$4($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { lec } = $$props;
	const liquid = cachedLiquid(lec);
	let isOpen = false;
	let cachedResults = {};

	let container,
		input,
		statusElement,
		predictiveSearchResults,
		loadingText,
		resultsMaxHeight;

	onMount(() => {
		input = container.querySelector('input[type="search"]');
		predictiveSearchResults = container.querySelector('[data-predictive-search]');
		setupEventListeners();
		console.log('predictive search enabled');
	});

	function setupEventListeners() {
		const form = container.querySelector('form.search');
		form.addEventListener('submit', onFormSubmit);

		input.addEventListener('input', debounce(
			event => {
				onChange(event);
			},
			300
		));

		input.addEventListener('focus', onFocus);
		container.addEventListener('focusout', onFocusOut);
		container.addEventListener('keyup', onKeyup);
		container.addEventListener('keydown', onKeydown);
	}

	function getQuery() {
		return input.value.trim();
	}

	function onChange() {
		const searchTerm = getQuery();

		if (!searchTerm.length) {
			close(true);
			return;
		}

		getSearchResults(searchTerm);
	}

	function onFormSubmit(event) {
		if (!getQuery().length || querySelector('[aria-selected="true"] a')) event.preventDefault();
	}

	function onFocus() {
		const searchTerm = getQuery();
		if (!searchTerm.length) return;

		if (container.getAttribute('results') === 'true') {
			open();
		} else {
			getSearchResults(searchTerm);
		}
	}

	function onFocusOut() {
		setTimeout(() => {
			if (!container.contains(document.activeElement)) close();
		});
	}

	function onKeyup(event) {
		if (!getQuery().length) close(true);
		event.preventDefault();

		switch (event.code) {
			case 'ArrowUp':
				switchOption('up');
				break;
			case 'ArrowDown':
				switchOption('down');
				break;
			case 'Enter':
				selectOption();
				break;
		}
	}

	function switchOption(direction) {
		if (!container.getAttribute('open')) return;
		const moveUp = direction === 'up';
		const selectedElement = container.querySelector('[aria-selected="true"]');
		const allElements = container.querySelectorAll('li');
		let activeElement = container.querySelector('li');
		if (moveUp && !selectedElement) return;
		statusElement.textContent = '';

		if (!moveUp && selectedElement) {
			activeElement = selectedElement.nextElementSibling || allElements[0];
		} else if (moveUp) {
			activeElement = selectedElement.previousElementSibling || allElements[allElements.length - 1];
		}

		if (activeElement === selectedElement) return;
		activeElement.setAttribute('aria-selected', true);
		if (selectedElement) selectedElement.setAttribute('aria-selected', false);
		setLiveRegionText(activeElement.textContent);
		input.setAttribute('aria-activedescendant', activeElement.id);
	}

	function selectOption() {
		const selectedProduct = container.querySelector('[aria-selected="true"] a, [aria-selected="true"] button');
		if (selectedProduct) selectedProduct.click();
	}

	function getSearchResults(searchTerm) {
		const queryKey = searchTerm.replace(" ", "-").toLowerCase();
		setLiveRegionLoadingState();

		if (cachedResults[queryKey]) {
			renderSearchResults(cachedResults[queryKey]);
			return;
		}

		fetch(`${routes.predictive_search_url}?q=${encodeURIComponent(searchTerm)}&${encodeURIComponent('resources[type]')}=product&${encodeURIComponent('resources[limit]')}=4&section_id=predictive-search`).then(response => {
			if (!response.ok) {
				var error = new Error(response.status);
				close();
				throw error;
			}

			return response.text();
		}).then(text => {
			const resultsMarkup = new DOMParser().parseFromString(text, 'text/html').querySelector('#shopify-section-predictive-search').innerHTML;
			cachedResults[queryKey] = resultsMarkup;
			renderSearchResults(resultsMarkup);
		}).catch(error => {
			close();
			throw error;
		});
	}

	function setLiveRegionLoadingState() {
		statusElement = statusElement || container.querySelector('.predictive-search-status');
		loadingText = loadingText || container.getAttribute('data-loading-text');
		setLiveRegionText(loadingText);
		container.setAttribute('loading', true);
	}

	function setLiveRegionText(statusText) {
		statusElement.setAttribute('aria-hidden', 'false');
		statusElement.textContent = statusText;

		setTimeout(
			() => {
				statusElement.setAttribute('aria-hidden', 'true');
			},
			1000
		);
	}

	function renderSearchResults(resultsMarkup) {
		predictiveSearchResults.innerHTML = resultsMarkup;
		container.setAttribute('results', true);
		setLiveRegionResults();
		open();
	}

	function setLiveRegionResults() {
		container.removeAttribute('loading');
		setLiveRegionText(container.querySelector('[data-predictive-search-live-region-count-value]').textContent);
	}

	function getResultsMaxHeight() {
		resultsMaxHeight = window.innerHeight - document.getElementById('shopify-section-header').getBoundingClientRect().bottom;
		return resultsMaxHeight;
	}

	function open() {
		predictiveSearchResults.style.maxHeight = resultsMaxHeight || `${getResultsMaxHeight()}px`;
		container.setAttribute('open', true);
		input.setAttribute('aria-expanded', true);
		isOpen = true;
	}

	function close(clearSearchTerm = false) {
		if (clearSearchTerm) {
			input.value = '';
			container.removeAttribute('results');
		}

		const selected = container.querySelector('[aria-selected="true"]');
		if (selected) selected.setAttribute('aria-selected', false);
		input.setAttribute('aria-activedescendant', '');
		container.removeAttribute('open');
		input.setAttribute('aria-expanded', false);
		resultsMaxHeight = false;
		predictiveSearchResults.removeAttribute('style');
		isOpen = false;
	}

	function div_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			container = $$value;
			$$invalidate(0, container);
		});
	}

	$$self.$$set = $$props => {
		if ('lec' in $$props) $$invalidate(2, lec = $$props.lec);
		if ('$$scope' in $$props) $$invalidate(3, $$scope = $$props.$$scope);
	};

	return [container, liquid, lec, $$scope, slots, div_binding];
}

class Predictive_search extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance$4, create_fragment$4, safe_not_equal, { lec: 2 });
	}
}

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/src/snippets/menu-drawer.liquivelte generated by Svelte v3.50.0 */

function create_fragment$3(ctx) {
	let div;
	let current;
	const default_slot_template = /*#slots*/ ctx[14].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[13], null);

	return {
		c() {
			div = element("div");
			if (default_slot) default_slot.c();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);
			if (default_slot) default_slot.l(div_nodes);
			div_nodes.forEach(detach);
		},
		m(target, anchor) {
			insert_hydration(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			/*div_binding*/ ctx[15](div);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 8192)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[13],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[13])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[13], dirty, null),
						null
					);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (default_slot) default_slot.d(detaching);
			/*div_binding*/ ctx[15](null);
		}
	};
}

let index$4 = 0;

function instance$3($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { lec } = $$props;
	const liquid = cachedLiquid(lec);
	let { container, mainDetailsToggle, breakpoint } = $$props;

	let { bindEvents = function () {
		_bindEvents.apply(arguments[0], arguments);
	} } = $$props;

	let { onKeyUp = function () {
		_onKeyUp.apply(arguments[0], arguments);
	} } = $$props;

	let { onSummaryClick = function () {
		_onSummaryClick.apply(arguments[0], arguments);
	} } = $$props;

	let { openMenuDrawer = function () {
		_openMenuDrawer.apply(arguments[0], arguments);
	} } = $$props;

	let { closeMenuDrawer = function () {
		_closeMenuDrawer.apply(arguments[0], arguments);
	} } = $$props;

	let { onFocusOut = function () {
		_onFocusOut.apply(arguments[0], arguments);
	} } = $$props;

	let { onCloseButtonClick = function () {
		_onCloseButtonClick.apply(arguments[0], arguments);
	} } = $$props;

	let { closeSubmenu = function () {
		_closeSubmenu.apply(arguments[0], arguments);
	} } = $$props;

	let { closeAnimation = function () {
		_closeAnimation.apply(arguments[0], arguments);
	} } = $$props;

	onMount(() => {
		$$invalidate(1, mainDetailsToggle = container.querySelector('details'));
		if (navigator.platform === 'iPhone') document.documentElement.style.setProperty('--viewport-height', `${window.innerHeight}px`);
		container.addEventListener('keyup', onKeyUp.bind(_onKeyUp));
		container.addEventListener('focusout', onFocusOut.bind(_onFocusOut));
		bindEvents.call(bindEvents.bind(_bindEvents));
	});

	function _bindEvents() {
		container.querySelectorAll('summary').forEach(summary => summary.addEventListener('click', onSummaryClick.bind(_onSummaryClick)));
		container.querySelectorAll('button').forEach(button => button.addEventListener('click', onCloseButtonClick.bind(_onCloseButtonClick)));
	}

	function _onKeyUp(event) {
		if (event.code.toUpperCase() !== 'ESCAPE') return;
		const openDetailsElement = event.target.closest('details[open]');
		if (!openDetailsElement) return;

		openDetailsElement === mainDetailsToggle
		? closeMenuDrawer.call(_closeMenuDrawer, event, mainDetailsToggle.querySelector('summary'))
		: closeSubmenu.call(_closeSubmenu, openDetailsElement);
	}

	function _onSummaryClick(event) {
		const summaryElement = event.currentTarget;
		const detailsElement = summaryElement.parentNode;
		const isOpen = detailsElement.hasAttribute('open');
		const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

		function addTrapFocus() {
			trapFocus$1(summaryElement.nextElementSibling, detailsElement.querySelector('button'));
			summaryElement.nextElementSibling.removeEventListener('transitionend', addTrapFocus);
		}

		if (detailsElement === mainDetailsToggle) {
			if (isOpen) event.preventDefault();

			isOpen
			? closeMenuDrawer.call(_closeMenuDrawer, event, summaryElement)
			: openMenuDrawer.call(_openMenuDrawer, summaryElement);
		} else {
			setTimeout(
				() => {
					detailsElement.classList.add('menu-opening');
					summaryElement.setAttribute('aria-expanded', true);

					!reducedMotion || reducedMotion.matches
					? addTrapFocus()
					: summaryElement.nextElementSibling.addEventListener('transitionend', addTrapFocus);
				},
				100
			);
		}
	}

	function _openMenuDrawer(summaryElement) {
		setTimeout(() => {
			mainDetailsToggle.classList.add('menu-opening');
		});

		summaryElement.setAttribute('aria-expanded', true);
		trapFocus$1(this.mainDetailsToggle, summaryElement);
		document.body.classList.add(`overflow-hidden-${breakpoint}`);
	}

	function _closeMenuDrawer(event, elementToFocus = false) {
		if (event === undefined) return;
		mainDetailsToggle.classList.remove('menu-opening');

		mainDetailsToggle.querySelectorAll('details').forEach(details => {
			details.removeAttribute('open');
			details.classList.remove('menu-opening');
		});

		document.body.classList.remove(`overflow-hidden-${breakpoint}`);
		removeTrapFocus(elementToFocus);
		closeAnimation.call(_closeAnimation, mainDetailsToggle);
	}

	function _onFocusOut(event) {
		setTimeout(() => {
			if (mainDetailsToggle.hasAttribute('open') && !mainDetailsToggle.contains(document.activeElement)) closeMenuDrawer.call(_closeMenuDrawer);
		});
	}

	function _onCloseButtonClick(event) {
		const detailsElement = event.currentTarget.closest('details');
		closeSubmenu.call(_closeSubmenu, detailsElement);
	}

	function _closeSubmenu(detailsElement) {
		detailsElement.classList.remove('menu-opening');
		detailsElement.querySelector('summary').setAttribute('aria-expanded', false);
		removeTrapFocus(detailsElement.querySelector('summary'));
		closeAnimation.call(_closeAnimation, detailsElement);
	}

	function _closeAnimation(detailsElement) {
		let animationStart;

		const handleAnimation = time => {
			if (animationStart === undefined) {
				animationStart = time;
			}

			const elapsedTime = time - animationStart;

			if (elapsedTime < 400) {
				window.requestAnimationFrame(handleAnimation);
			} else {
				detailsElement.removeAttribute('open');

				if (detailsElement.closest('details[open]')) {
					trapFocus$1(detailsElement.closest('details[open]'), detailsElement.querySelector('summary'));
				}
			}
		};

		window.requestAnimationFrame(handleAnimation);
	}

	function div_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			container = $$value;
			$$invalidate(0, container);
		});
	}

	$$self.$$set = $$props => {
		if ('lec' in $$props) $$invalidate(2, lec = $$props.lec);
		if ('container' in $$props) $$invalidate(0, container = $$props.container);
		if ('mainDetailsToggle' in $$props) $$invalidate(1, mainDetailsToggle = $$props.mainDetailsToggle);
		if ('breakpoint' in $$props) $$invalidate(3, breakpoint = $$props.breakpoint);
		if ('bindEvents' in $$props) $$invalidate(4, bindEvents = $$props.bindEvents);
		if ('onKeyUp' in $$props) $$invalidate(5, onKeyUp = $$props.onKeyUp);
		if ('onSummaryClick' in $$props) $$invalidate(6, onSummaryClick = $$props.onSummaryClick);
		if ('openMenuDrawer' in $$props) $$invalidate(7, openMenuDrawer = $$props.openMenuDrawer);
		if ('closeMenuDrawer' in $$props) $$invalidate(8, closeMenuDrawer = $$props.closeMenuDrawer);
		if ('onFocusOut' in $$props) $$invalidate(9, onFocusOut = $$props.onFocusOut);
		if ('onCloseButtonClick' in $$props) $$invalidate(10, onCloseButtonClick = $$props.onCloseButtonClick);
		if ('closeSubmenu' in $$props) $$invalidate(11, closeSubmenu = $$props.closeSubmenu);
		if ('closeAnimation' in $$props) $$invalidate(12, closeAnimation = $$props.closeAnimation);
		if ('$$scope' in $$props) $$invalidate(13, $$scope = $$props.$$scope);
	};

	return [
		container,
		mainDetailsToggle,
		lec,
		breakpoint,
		bindEvents,
		onKeyUp,
		onSummaryClick,
		openMenuDrawer,
		closeMenuDrawer,
		onFocusOut,
		onCloseButtonClick,
		closeSubmenu,
		closeAnimation,
		$$scope,
		slots,
		div_binding
	];
}

class Menu_drawer extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance$3, create_fragment$3, safe_not_equal, {
			lec: 2,
			container: 0,
			mainDetailsToggle: 1,
			breakpoint: 3,
			bindEvents: 4,
			onKeyUp: 5,
			onSummaryClick: 6,
			openMenuDrawer: 7,
			closeMenuDrawer: 8,
			onFocusOut: 9,
			onCloseButtonClick: 10,
			closeSubmenu: 11,
			closeAnimation: 12
		});
	}
}

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/src/sections/header/components/header-drawer.liquivelte generated by Svelte v3.50.0 */

function create_default_slot$1(ctx) {
	let current;
	const default_slot_template = /*#slots*/ ctx[8].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[12], null);

	return {
		c() {
			if (default_slot) default_slot.c();
		},
		l(nodes) {
			if (default_slot) default_slot.l(nodes);
		},
		m(target, anchor) {
			if (default_slot) {
				default_slot.m(target, anchor);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 4096)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[12],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[12])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[12], dirty, null),
						null
					);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (default_slot) default_slot.d(detaching);
		}
	};
}

function create_fragment$2(ctx) {
	let menudrawer;
	let updating_closeMenuDrawer;
	let updating_openMenuDrawer;
	let updating_mainDetailsToggle;
	let current;
	const menudrawer_spread_levels = [/*$$props*/ ctx[4], { lec: /*lec*/ ctx[1] }];

	function menudrawer_closeMenuDrawer_binding(value) {
		/*menudrawer_closeMenuDrawer_binding*/ ctx[9](value);
	}

	function menudrawer_openMenuDrawer_binding(value) {
		/*menudrawer_openMenuDrawer_binding*/ ctx[10](value);
	}

	function menudrawer_mainDetailsToggle_binding(value) {
		/*menudrawer_mainDetailsToggle_binding*/ ctx[11](value);
	}

	let menudrawer_props = {
		$$slots: { default: [create_default_slot$1] },
		$$scope: { ctx }
	};

	for (let i = 0; i < menudrawer_spread_levels.length; i += 1) {
		menudrawer_props = assign(menudrawer_props, menudrawer_spread_levels[i]);
	}

	if (/*closeMenuDrawer*/ ctx[3] !== void 0) {
		menudrawer_props.closeMenuDrawer = /*closeMenuDrawer*/ ctx[3];
	}

	if (/*openMenuDrawer*/ ctx[2] !== void 0) {
		menudrawer_props.openMenuDrawer = /*openMenuDrawer*/ ctx[2];
	}

	if (/*mainDetailsToggle*/ ctx[0] !== void 0) {
		menudrawer_props.mainDetailsToggle = /*mainDetailsToggle*/ ctx[0];
	}

	menudrawer = new Menu_drawer({ props: menudrawer_props });
	binding_callbacks.push(() => bind(menudrawer, 'closeMenuDrawer', menudrawer_closeMenuDrawer_binding));
	binding_callbacks.push(() => bind(menudrawer, 'openMenuDrawer', menudrawer_openMenuDrawer_binding));
	binding_callbacks.push(() => bind(menudrawer, 'mainDetailsToggle', menudrawer_mainDetailsToggle_binding));

	return {
		c() {
			create_component(menudrawer.$$.fragment);
		},
		l(nodes) {
			claim_component(menudrawer.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(menudrawer, target, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			const menudrawer_changes = (dirty & /*$$props, lec*/ 18)
			? get_spread_update(menudrawer_spread_levels, [
					dirty & /*$$props*/ 16 && get_spread_object(/*$$props*/ ctx[4]),
					dirty & /*lec*/ 2 && { lec: /*lec*/ ctx[1] }
				])
			: {};

			if (dirty & /*$$scope*/ 4096) {
				menudrawer_changes.$$scope = { dirty, ctx };
			}

			if (!updating_closeMenuDrawer && dirty & /*closeMenuDrawer*/ 8) {
				updating_closeMenuDrawer = true;
				menudrawer_changes.closeMenuDrawer = /*closeMenuDrawer*/ ctx[3];
				add_flush_callback(() => updating_closeMenuDrawer = false);
			}

			if (!updating_openMenuDrawer && dirty & /*openMenuDrawer*/ 4) {
				updating_openMenuDrawer = true;
				menudrawer_changes.openMenuDrawer = /*openMenuDrawer*/ ctx[2];
				add_flush_callback(() => updating_openMenuDrawer = false);
			}

			if (!updating_mainDetailsToggle && dirty & /*mainDetailsToggle*/ 1) {
				updating_mainDetailsToggle = true;
				menudrawer_changes.mainDetailsToggle = /*mainDetailsToggle*/ ctx[0];
				add_flush_callback(() => updating_mainDetailsToggle = false);
			}

			menudrawer.$set(menudrawer_changes);
		},
		i(local) {
			if (current) return;
			transition_in(menudrawer.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(menudrawer.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(menudrawer, detaching);
		}
	};
}

let index$3 = 0;

function instance$2($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { lec } = $$props;
	const liquid = cachedLiquid(lec);
	let { header, mainDetailsToggle, borderOffset, breakpoint } = $$props;

	let openMenuDrawer = function (summaryElement) {
		$$invalidate(5, header = header || document.getElementById('shopify-section-header'));

		$$invalidate(6, borderOffset = borderOffset || header.querySelector('.header-wrapper').classList.contains('header-wrapper--border-bottom')
		? 1
		: 0);

		document.documentElement.style.setProperty('--header-bottom-position', `${parseInt(header.getBoundingClientRect().bottom - borderOffset)}px`);
		header.classList.add('menu-open');

		setTimeout(() => {
			mainDetailsToggle.classList.add('menu-opening');
		});

		summaryElement.setAttribute('aria-expanded', true);
		trapFocus(mainDetailsToggle, summaryElement);
		document.body.classList.add(`overflow-hidden-${breakpoint}`);
	};

	let closeMenuDrawer = function (event, elementToFocus) {
		this(event, elementToFocus);
		header.classList.remove('menu-open');
	};

	function menudrawer_closeMenuDrawer_binding(value) {
		closeMenuDrawer = value;
		$$invalidate(3, closeMenuDrawer);
	}

	function menudrawer_openMenuDrawer_binding(value) {
		openMenuDrawer = value;
		$$invalidate(2, openMenuDrawer);
	}

	function menudrawer_mainDetailsToggle_binding(value) {
		mainDetailsToggle = value;
		$$invalidate(0, mainDetailsToggle);
	}

	$$self.$$set = $$new_props => {
		$$invalidate(4, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ('lec' in $$new_props) $$invalidate(1, lec = $$new_props.lec);
		if ('header' in $$new_props) $$invalidate(5, header = $$new_props.header);
		if ('mainDetailsToggle' in $$new_props) $$invalidate(0, mainDetailsToggle = $$new_props.mainDetailsToggle);
		if ('borderOffset' in $$new_props) $$invalidate(6, borderOffset = $$new_props.borderOffset);
		if ('breakpoint' in $$new_props) $$invalidate(7, breakpoint = $$new_props.breakpoint);
		if ('$$scope' in $$new_props) $$invalidate(12, $$scope = $$new_props.$$scope);
	};

	$$props = exclude_internal_props($$props);

	return [
		mainDetailsToggle,
		lec,
		openMenuDrawer,
		closeMenuDrawer,
		$$props,
		header,
		borderOffset,
		breakpoint,
		slots,
		menudrawer_closeMenuDrawer_binding,
		menudrawer_openMenuDrawer_binding,
		menudrawer_mainDetailsToggle_binding,
		$$scope
	];
}

class Header_drawer extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance$2, create_fragment$2, safe_not_equal, {
			lec: 1,
			header: 5,
			mainDetailsToggle: 0,
			borderOffset: 6,
			breakpoint: 7
		});
	}
}

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/src/snippets/details-modal.liquivelte generated by Svelte v3.50.0 */

function create_fragment$1(ctx) {
	let div;
	let current;
	const default_slot_template = /*#slots*/ ctx[4].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[3], null);

	return {
		c() {
			div = element("div");
			if (default_slot) default_slot.c();
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			if (default_slot) default_slot.l(div_nodes);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div, "class", /*classes*/ ctx[0]);
		},
		m(target, anchor) {
			insert_hydration(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			/*div_binding*/ ctx[5](div);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 8)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[3],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[3])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[3], dirty, null),
						null
					);
				}
			}

			if (!current || dirty & /*classes*/ 1) {
				attr(div, "class", /*classes*/ ctx[0]);
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (default_slot) default_slot.d(detaching);
			/*div_binding*/ ctx[5](null);
		}
	};
}

let index$2 = 0;

function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { lec } = $$props;
	const liquid = cachedLiquid(lec);
	let { classes = '' } = $$props;
	let container, detailsContainer, summaryToggle;

	onMount(() => {
		detailsContainer = container.querySelector('details');
		summaryToggle = container.querySelector('summary');
		detailsContainer.addEventListener('keyup', event => event.code.toUpperCase() === 'ESCAPE' && close());
		summaryToggle.addEventListener('click', onSummaryClick.bind(this));
		container.querySelector('button[type="button"]').addEventListener('click', close.bind(this));
		summaryToggle.setAttribute('role', 'button');
	});

	function isOpen() {
		return detailsContainer.hasAttribute('open');
	}

	function onSummaryClick(event) {
		event.preventDefault();

		event.target.closest('details').hasAttribute('open')
		? close()
		: open(event);
	}

	function onBodyClick(event) {
		if (!container.contains(event.target) || event.target.classList.contains('modal-overlay')) close(false);
	}

	function open(event) {
		onBodyClickEvent = onBodyClickEvent || onBodyClick.bind(this);
		event.target.closest('details').setAttribute('open', true);
		document.body.addEventListener('click', onBodyClickEvent);
		document.body.classList.add('overflow-hidden');
		trapFocus(detailsContainer.querySelector('[tabindex="-1"]'), detailsContainer.querySelector('input:not([type="hidden"])'));
	}

	function close(focusToggle = true) {
		removeTrapFocus(focusToggle ? summaryToggle : null);
		detailsContainer.removeAttribute('open');
		document.body.removeEventListener('click', onBodyClickEvent);
		document.body.classList.remove('overflow-hidden');
	}

	function div_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			container = $$value;
			$$invalidate(1, container);
		});
	}

	$$self.$$set = $$props => {
		if ('lec' in $$props) $$invalidate(2, lec = $$props.lec);
		if ('classes' in $$props) $$invalidate(0, classes = $$props.classes);
		if ('$$scope' in $$props) $$invalidate(3, $$scope = $$props.$$scope);
	};

	return [classes, container, lec, $$scope, slots, div_binding];
}

class Details_modal extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { lec: 2, classes: 0 });
	}
}

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/src/sections/header/index.liquivelte generated by Svelte v3.50.0 */

function create_if_block_19(ctx) {
	let headerdrawer;
	let current;

	headerdrawer = new Header_drawer({
			props: {
				breakpoint: "tablet",
				cart: /*cart*/ ctx[21],
				shop: /*shop*/ ctx[0],
				menu_json: /*menu_json*/ ctx[24],
				settings: /*settings*/ ctx[25],
				logo_html: /*logo_html*/ ctx[26],
				routes: /*routes*/ ctx[27],
				request: /*request*/ ctx[28],
				account_url: /*account_url*/ ctx[29],
				account_text: /*account_text*/ ctx[30],
				shop$name: /*shop$name*/ ctx[22],
				section$settings: /*section$settings*/ ctx[23],
				rawinclude_b7c846d6: /*rawinclude_b7c846d6*/ ctx[2],
				rawinclude_5513f9e2: /*rawinclude_5513f9e2*/ ctx[3],
				rawinclude_548f9315: /*rawinclude_548f9315*/ ctx[4],
				rawinclude_76fe91f8: /*rawinclude_76fe91f8*/ ctx[5],
				rawinclude_2041cdf9: /*rawinclude_2041cdf9*/ ctx[6],
				rawinclude_7f9a5b3f: /*rawinclude_7f9a5b3f*/ ctx[7],
				rawinclude_d7392808: /*rawinclude_d7392808*/ ctx[8],
				rawinclude_32303a26: /*rawinclude_32303a26*/ ctx[9],
				rawinclude_1c46a520: /*rawinclude_1c46a520*/ ctx[10],
				rawinclude_f7398384: /*rawinclude_f7398384*/ ctx[11],
				rawinclude_0cce0950: /*rawinclude_0cce0950*/ ctx[12],
				rawinclude_2fe7f822: /*rawinclude_2fe7f822*/ ctx[13],
				rawinclude_46d75d50: /*rawinclude_46d75d50*/ ctx[14],
				rawinclude_102fa95c: /*rawinclude_102fa95c*/ ctx[15],
				rawinclude_18d5c954: /*rawinclude_18d5c954*/ ctx[16],
				rawinclude_53f2ac54: /*rawinclude_53f2ac54*/ ctx[17],
				rawinclude_679e0e24: /*rawinclude_679e0e24*/ ctx[18],
				rawinclude_3be65912: /*rawinclude_3be65912*/ ctx[19],
				rawinclude_602baf9d: /*rawinclude_602baf9d*/ ctx[20],
				lec: /*lec*/ ctx[1],
				$$slots: { default: [create_default_slot_4] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(headerdrawer.$$.fragment);
		},
		l(nodes) {
			claim_component(headerdrawer.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(headerdrawer, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const headerdrawer_changes = {};
			if (dirty[0] & /*cart*/ 2097152) headerdrawer_changes.cart = /*cart*/ ctx[21];
			if (dirty[0] & /*shop*/ 1) headerdrawer_changes.shop = /*shop*/ ctx[0];
			if (dirty[0] & /*menu_json*/ 16777216) headerdrawer_changes.menu_json = /*menu_json*/ ctx[24];
			if (dirty[0] & /*settings*/ 33554432) headerdrawer_changes.settings = /*settings*/ ctx[25];
			if (dirty[0] & /*logo_html*/ 67108864) headerdrawer_changes.logo_html = /*logo_html*/ ctx[26];
			if (dirty[0] & /*routes*/ 134217728) headerdrawer_changes.routes = /*routes*/ ctx[27];
			if (dirty[0] & /*request*/ 268435456) headerdrawer_changes.request = /*request*/ ctx[28];
			if (dirty[0] & /*account_url*/ 536870912) headerdrawer_changes.account_url = /*account_url*/ ctx[29];
			if (dirty[0] & /*account_text*/ 1073741824) headerdrawer_changes.account_text = /*account_text*/ ctx[30];
			if (dirty[0] & /*shop$name*/ 4194304) headerdrawer_changes.shop$name = /*shop$name*/ ctx[22];
			if (dirty[0] & /*section$settings*/ 8388608) headerdrawer_changes.section$settings = /*section$settings*/ ctx[23];
			if (dirty[0] & /*rawinclude_b7c846d6*/ 4) headerdrawer_changes.rawinclude_b7c846d6 = /*rawinclude_b7c846d6*/ ctx[2];
			if (dirty[0] & /*rawinclude_5513f9e2*/ 8) headerdrawer_changes.rawinclude_5513f9e2 = /*rawinclude_5513f9e2*/ ctx[3];
			if (dirty[0] & /*rawinclude_548f9315*/ 16) headerdrawer_changes.rawinclude_548f9315 = /*rawinclude_548f9315*/ ctx[4];
			if (dirty[0] & /*rawinclude_76fe91f8*/ 32) headerdrawer_changes.rawinclude_76fe91f8 = /*rawinclude_76fe91f8*/ ctx[5];
			if (dirty[0] & /*rawinclude_2041cdf9*/ 64) headerdrawer_changes.rawinclude_2041cdf9 = /*rawinclude_2041cdf9*/ ctx[6];
			if (dirty[0] & /*rawinclude_7f9a5b3f*/ 128) headerdrawer_changes.rawinclude_7f9a5b3f = /*rawinclude_7f9a5b3f*/ ctx[7];
			if (dirty[0] & /*rawinclude_d7392808*/ 256) headerdrawer_changes.rawinclude_d7392808 = /*rawinclude_d7392808*/ ctx[8];
			if (dirty[0] & /*rawinclude_32303a26*/ 512) headerdrawer_changes.rawinclude_32303a26 = /*rawinclude_32303a26*/ ctx[9];
			if (dirty[0] & /*rawinclude_1c46a520*/ 1024) headerdrawer_changes.rawinclude_1c46a520 = /*rawinclude_1c46a520*/ ctx[10];
			if (dirty[0] & /*rawinclude_f7398384*/ 2048) headerdrawer_changes.rawinclude_f7398384 = /*rawinclude_f7398384*/ ctx[11];
			if (dirty[0] & /*rawinclude_0cce0950*/ 4096) headerdrawer_changes.rawinclude_0cce0950 = /*rawinclude_0cce0950*/ ctx[12];
			if (dirty[0] & /*rawinclude_2fe7f822*/ 8192) headerdrawer_changes.rawinclude_2fe7f822 = /*rawinclude_2fe7f822*/ ctx[13];
			if (dirty[0] & /*rawinclude_46d75d50*/ 16384) headerdrawer_changes.rawinclude_46d75d50 = /*rawinclude_46d75d50*/ ctx[14];
			if (dirty[0] & /*rawinclude_102fa95c*/ 32768) headerdrawer_changes.rawinclude_102fa95c = /*rawinclude_102fa95c*/ ctx[15];
			if (dirty[0] & /*rawinclude_18d5c954*/ 65536) headerdrawer_changes.rawinclude_18d5c954 = /*rawinclude_18d5c954*/ ctx[16];
			if (dirty[0] & /*rawinclude_53f2ac54*/ 131072) headerdrawer_changes.rawinclude_53f2ac54 = /*rawinclude_53f2ac54*/ ctx[17];
			if (dirty[0] & /*rawinclude_679e0e24*/ 262144) headerdrawer_changes.rawinclude_679e0e24 = /*rawinclude_679e0e24*/ ctx[18];
			if (dirty[0] & /*rawinclude_3be65912*/ 524288) headerdrawer_changes.rawinclude_3be65912 = /*rawinclude_3be65912*/ ctx[19];
			if (dirty[0] & /*rawinclude_602baf9d*/ 1048576) headerdrawer_changes.rawinclude_602baf9d = /*rawinclude_602baf9d*/ ctx[20];
			if (dirty[0] & /*lec*/ 2) headerdrawer_changes.lec = /*lec*/ ctx[1];

			if (dirty[0] & /*settings, rawinclude_0cce0950, rawinclude_2fe7f822, rawinclude_46d75d50, rawinclude_102fa95c, rawinclude_1c46a520, rawinclude_f7398384, rawinclude_32303a26, rawinclude_d7392808, rawinclude_7f9a5b3f, account_url, account_text, rawinclude_2041cdf9, shop, cart, menu_json, logo_html, routes, request, shop$name, section$settings, rawinclude_b7c846d6, rawinclude_5513f9e2, rawinclude_548f9315, rawinclude_76fe91f8, rawinclude_18d5c954, rawinclude_53f2ac54, rawinclude_679e0e24, rawinclude_3be65912, rawinclude_602baf9d, lec*/ 2147483647 | dirty[1] & /*$$scope, section*/ 5) {
				headerdrawer_changes.$$scope = { dirty, ctx };
			}

			headerdrawer.$set(headerdrawer_changes);
		},
		i(local) {
			if (current) return;
			transition_in(headerdrawer.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(headerdrawer.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(headerdrawer, detaching);
		}
	};
}

// (1150:18) {#if shop.customer_accounts_enabled }
function create_if_block_29(ctx) {
	let a;
	let html_tag;
	let raw_value = /*rawinclude_2041cdf9*/ ctx[6][index || 0] + "";
	let t0;
	let t1;

	return {
		c() {
			a = element("a");
			html_tag = new HtmlTagHydration(false);
			t0 = space();
			t1 = text(/*account_text*/ ctx[30]);
			this.h();
		},
		l(nodes) {
			a = claim_element(nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			html_tag = claim_html_tag(a_nodes, false);
			t0 = claim_space(a_nodes);
			t1 = claim_text(a_nodes, /*account_text*/ ctx[30]);
			a_nodes.forEach(detach);
			this.h();
		},
		h() {
			html_tag.a = t0;
			attr(a, "href", /*account_url*/ ctx[29]);
			attr(a, "class", "menu-drawer__account link focus-inset h5 svelte-i7v2jh");
		},
		m(target, anchor) {
			insert_hydration(target, a, anchor);
			html_tag.m(raw_value, a);
			append_hydration(a, t0);
			append_hydration(a, t1);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*rawinclude_2041cdf9*/ 64 && raw_value !== (raw_value = /*rawinclude_2041cdf9*/ ctx[6][index || 0] + "")) html_tag.p(raw_value);
			if (dirty[0] & /*account_text*/ 1073741824) set_data(t1, /*account_text*/ ctx[30]);

			if (dirty[0] & /*account_url*/ 536870912) {
				attr(a, "href", /*account_url*/ ctx[29]);
			}
		},
		d(detaching) {
			if (detaching) detach(a);
		}
	};
}

// (1157:20) {#if settings.social_twitter_link != '' }
function create_if_block_28(ctx) {
	let li;
	let a;
	let html_tag;
	let raw_value = /*rawinclude_7f9a5b3f*/ ctx[7][index || 0] + "";
	let t0;
	let span;
	let t1_value = /*liquid*/ ctx[32].t('general.social.links.twitter') + "";
	let t1;
	let span_data_translation_value;
	let a_href_value;

	return {
		c() {
			li = element("li");
			a = element("a");
			html_tag = new HtmlTagHydration(false);
			t0 = space();
			span = element("span");
			t1 = text(t1_value);
			this.h();
		},
		l(nodes) {
			li = claim_element(nodes, "LI", { class: true });
			var li_nodes = children(li);
			a = claim_element(li_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			html_tag = claim_html_tag(a_nodes, false);
			t0 = claim_space(a_nodes);
			span = claim_element(a_nodes, "SPAN", { class: true, "data-translation": true });
			var span_nodes = children(span);
			t1 = claim_text(span_nodes, t1_value);
			span_nodes.forEach(detach);
			a_nodes.forEach(detach);
			li_nodes.forEach(detach);
			this.h();
		},
		h() {
			html_tag.a = t0;
			attr(span, "class", "visually-hidden svelte-i7v2jh");
			attr(span, "data-translation", span_data_translation_value = /*liquid*/ ctx[32].t('general.social.links.twitter'));
			attr(a, "href", a_href_value = /*settings*/ ctx[25].social_twitter_link);
			attr(a, "class", "list-social__link link svelte-i7v2jh");
			attr(li, "class", "list-social__item svelte-i7v2jh");
		},
		m(target, anchor) {
			insert_hydration(target, li, anchor);
			append_hydration(li, a);
			html_tag.m(raw_value, a);
			append_hydration(a, t0);
			append_hydration(a, span);
			append_hydration(span, t1);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*rawinclude_7f9a5b3f*/ 128 && raw_value !== (raw_value = /*rawinclude_7f9a5b3f*/ ctx[7][index || 0] + "")) html_tag.p(raw_value);

			if (dirty[0] & /*settings*/ 33554432 && a_href_value !== (a_href_value = /*settings*/ ctx[25].social_twitter_link)) {
				attr(a, "href", a_href_value);
			}
		},
		d(detaching) {
			if (detaching) detach(li);
		}
	};
}

// (1165:20) {#if settings.social_facebook_link != '' }
function create_if_block_27(ctx) {
	let li;
	let a;
	let html_tag;
	let raw_value = /*rawinclude_d7392808*/ ctx[8][index || 0] + "";
	let t0;
	let span;
	let t1_value = /*liquid*/ ctx[32].t('general.social.links.facebook') + "";
	let t1;
	let span_data_translation_value;
	let a_href_value;

	return {
		c() {
			li = element("li");
			a = element("a");
			html_tag = new HtmlTagHydration(false);
			t0 = space();
			span = element("span");
			t1 = text(t1_value);
			this.h();
		},
		l(nodes) {
			li = claim_element(nodes, "LI", { class: true });
			var li_nodes = children(li);
			a = claim_element(li_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			html_tag = claim_html_tag(a_nodes, false);
			t0 = claim_space(a_nodes);
			span = claim_element(a_nodes, "SPAN", { class: true, "data-translation": true });
			var span_nodes = children(span);
			t1 = claim_text(span_nodes, t1_value);
			span_nodes.forEach(detach);
			a_nodes.forEach(detach);
			li_nodes.forEach(detach);
			this.h();
		},
		h() {
			html_tag.a = t0;
			attr(span, "class", "visually-hidden svelte-i7v2jh");
			attr(span, "data-translation", span_data_translation_value = /*liquid*/ ctx[32].t('general.social.links.facebook'));
			attr(a, "href", a_href_value = /*settings*/ ctx[25].social_facebook_link);
			attr(a, "class", "list-social__link link svelte-i7v2jh");
			attr(li, "class", "list-social__item svelte-i7v2jh");
		},
		m(target, anchor) {
			insert_hydration(target, li, anchor);
			append_hydration(li, a);
			html_tag.m(raw_value, a);
			append_hydration(a, t0);
			append_hydration(a, span);
			append_hydration(span, t1);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*rawinclude_d7392808*/ 256 && raw_value !== (raw_value = /*rawinclude_d7392808*/ ctx[8][index || 0] + "")) html_tag.p(raw_value);

			if (dirty[0] & /*settings*/ 33554432 && a_href_value !== (a_href_value = /*settings*/ ctx[25].social_facebook_link)) {
				attr(a, "href", a_href_value);
			}
		},
		d(detaching) {
			if (detaching) detach(li);
		}
	};
}

// (1173:20) {#if settings.social_pinterest_link != '' }
function create_if_block_26(ctx) {
	let li;
	let a;
	let html_tag;
	let raw_value = /*rawinclude_32303a26*/ ctx[9][index || 0] + "";
	let t0;
	let span;
	let t1_value = /*liquid*/ ctx[32].t('general.social.links.pinterest') + "";
	let t1;
	let a_href_value;

	return {
		c() {
			li = element("li");
			a = element("a");
			html_tag = new HtmlTagHydration(false);
			t0 = space();
			span = element("span");
			t1 = text(t1_value);
			this.h();
		},
		l(nodes) {
			li = claim_element(nodes, "LI", { class: true });
			var li_nodes = children(li);
			a = claim_element(li_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			html_tag = claim_html_tag(a_nodes, false);
			t0 = claim_space(a_nodes);
			span = claim_element(a_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t1 = claim_text(span_nodes, t1_value);
			span_nodes.forEach(detach);
			a_nodes.forEach(detach);
			li_nodes.forEach(detach);
			this.h();
		},
		h() {
			html_tag.a = t0;
			attr(span, "class", "visually-hidden svelte-i7v2jh");
			attr(a, "href", a_href_value = /*settings*/ ctx[25].social_pinterest_link);
			attr(a, "class", "list-social__link link svelte-i7v2jh");
			attr(li, "class", "list-social__item svelte-i7v2jh");
		},
		m(target, anchor) {
			insert_hydration(target, li, anchor);
			append_hydration(li, a);
			html_tag.m(raw_value, a);
			append_hydration(a, t0);
			append_hydration(a, span);
			append_hydration(span, t1);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*rawinclude_32303a26*/ 512 && raw_value !== (raw_value = /*rawinclude_32303a26*/ ctx[9][index || 0] + "")) html_tag.p(raw_value);

			if (dirty[0] & /*settings*/ 33554432 && a_href_value !== (a_href_value = /*settings*/ ctx[25].social_pinterest_link)) {
				attr(a, "href", a_href_value);
			}
		},
		d(detaching) {
			if (detaching) detach(li);
		}
	};
}

// (1181:20) {#if settings.social_instagram_link != '' }
function create_if_block_25(ctx) {
	let li;
	let a;
	let html_tag;
	let raw_value = /*rawinclude_f7398384*/ ctx[11][index || 0] + "";
	let t0;
	let span;
	let t1_value = /*liquid*/ ctx[32].t('general.social.links.instagram') + "";
	let t1;
	let a_href_value;

	return {
		c() {
			li = element("li");
			a = element("a");
			html_tag = new HtmlTagHydration(false);
			t0 = space();
			span = element("span");
			t1 = text(t1_value);
			this.h();
		},
		l(nodes) {
			li = claim_element(nodes, "LI", { class: true });
			var li_nodes = children(li);
			a = claim_element(li_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			html_tag = claim_html_tag(a_nodes, false);
			t0 = claim_space(a_nodes);
			span = claim_element(a_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t1 = claim_text(span_nodes, t1_value);
			span_nodes.forEach(detach);
			a_nodes.forEach(detach);
			li_nodes.forEach(detach);
			this.h();
		},
		h() {
			html_tag.a = t0;
			attr(span, "class", "visually-hidden svelte-i7v2jh");
			attr(a, "href", a_href_value = /*settings*/ ctx[25].social_instagram_link);
			attr(a, "class", "list-social__link link svelte-i7v2jh");
			attr(li, "class", "list-social__item svelte-i7v2jh");
		},
		m(target, anchor) {
			insert_hydration(target, li, anchor);
			append_hydration(li, a);
			html_tag.m(raw_value, a);
			append_hydration(a, t0);
			append_hydration(a, span);
			append_hydration(span, t1);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*rawinclude_f7398384*/ 2048 && raw_value !== (raw_value = /*rawinclude_f7398384*/ ctx[11][index || 0] + "")) html_tag.p(raw_value);

			if (dirty[0] & /*settings*/ 33554432 && a_href_value !== (a_href_value = /*settings*/ ctx[25].social_instagram_link)) {
				attr(a, "href", a_href_value);
			}
		},
		d(detaching) {
			if (detaching) detach(li);
		}
	};
}

// (1189:20) {#if settings.social_tiktok_link != '' }
function create_if_block_24(ctx) {
	let li;
	let a;
	let html_tag;
	let raw_value = /*rawinclude_1c46a520*/ ctx[10][index || 0] + "";
	let t0;
	let span;
	let t1_value = /*liquid*/ ctx[32].t('general.social.links.tiktok') + "";
	let t1;
	let a_href_value;

	return {
		c() {
			li = element("li");
			a = element("a");
			html_tag = new HtmlTagHydration(false);
			t0 = space();
			span = element("span");
			t1 = text(t1_value);
			this.h();
		},
		l(nodes) {
			li = claim_element(nodes, "LI", { class: true });
			var li_nodes = children(li);
			a = claim_element(li_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			html_tag = claim_html_tag(a_nodes, false);
			t0 = claim_space(a_nodes);
			span = claim_element(a_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t1 = claim_text(span_nodes, t1_value);
			span_nodes.forEach(detach);
			a_nodes.forEach(detach);
			li_nodes.forEach(detach);
			this.h();
		},
		h() {
			html_tag.a = t0;
			attr(span, "class", "visually-hidden svelte-i7v2jh");
			attr(a, "href", a_href_value = /*settings*/ ctx[25].social_tiktok_link);
			attr(a, "class", "list-social__link link svelte-i7v2jh");
			attr(li, "class", "list-social__item svelte-i7v2jh");
		},
		m(target, anchor) {
			insert_hydration(target, li, anchor);
			append_hydration(li, a);
			html_tag.m(raw_value, a);
			append_hydration(a, t0);
			append_hydration(a, span);
			append_hydration(span, t1);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*rawinclude_1c46a520*/ 1024 && raw_value !== (raw_value = /*rawinclude_1c46a520*/ ctx[10][index || 0] + "")) html_tag.p(raw_value);

			if (dirty[0] & /*settings*/ 33554432 && a_href_value !== (a_href_value = /*settings*/ ctx[25].social_tiktok_link)) {
				attr(a, "href", a_href_value);
			}
		},
		d(detaching) {
			if (detaching) detach(li);
		}
	};
}

// (1197:20) {#if settings.social_tumblr_link != '' }
function create_if_block_23(ctx) {
	let li;
	let a;
	let html_tag;
	let raw_value = /*rawinclude_102fa95c*/ ctx[15][index || 0] + "";
	let t0;
	let span;
	let t1_value = /*liquid*/ ctx[32].t('general.social.links.tumblr') + "";
	let t1;
	let a_href_value;

	return {
		c() {
			li = element("li");
			a = element("a");
			html_tag = new HtmlTagHydration(false);
			t0 = space();
			span = element("span");
			t1 = text(t1_value);
			this.h();
		},
		l(nodes) {
			li = claim_element(nodes, "LI", { class: true });
			var li_nodes = children(li);
			a = claim_element(li_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			html_tag = claim_html_tag(a_nodes, false);
			t0 = claim_space(a_nodes);
			span = claim_element(a_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t1 = claim_text(span_nodes, t1_value);
			span_nodes.forEach(detach);
			a_nodes.forEach(detach);
			li_nodes.forEach(detach);
			this.h();
		},
		h() {
			html_tag.a = t0;
			attr(span, "class", "visually-hidden svelte-i7v2jh");
			attr(a, "href", a_href_value = /*settings*/ ctx[25].social_tumblr_link);
			attr(a, "class", "list-social__link link svelte-i7v2jh");
			attr(li, "class", "list-social__item svelte-i7v2jh");
		},
		m(target, anchor) {
			insert_hydration(target, li, anchor);
			append_hydration(li, a);
			html_tag.m(raw_value, a);
			append_hydration(a, t0);
			append_hydration(a, span);
			append_hydration(span, t1);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*rawinclude_102fa95c*/ 32768 && raw_value !== (raw_value = /*rawinclude_102fa95c*/ ctx[15][index || 0] + "")) html_tag.p(raw_value);

			if (dirty[0] & /*settings*/ 33554432 && a_href_value !== (a_href_value = /*settings*/ ctx[25].social_tumblr_link)) {
				attr(a, "href", a_href_value);
			}
		},
		d(detaching) {
			if (detaching) detach(li);
		}
	};
}

// (1205:20) {#if settings.social_snapchat_link != '' }
function create_if_block_22(ctx) {
	let li;
	let a;
	let html_tag;
	let raw_value = /*rawinclude_46d75d50*/ ctx[14][index || 0] + "";
	let t0;
	let span;
	let t1_value = /*liquid*/ ctx[32].t('general.social.links.snapchat') + "";
	let t1;
	let a_href_value;

	return {
		c() {
			li = element("li");
			a = element("a");
			html_tag = new HtmlTagHydration(false);
			t0 = space();
			span = element("span");
			t1 = text(t1_value);
			this.h();
		},
		l(nodes) {
			li = claim_element(nodes, "LI", { class: true });
			var li_nodes = children(li);
			a = claim_element(li_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			html_tag = claim_html_tag(a_nodes, false);
			t0 = claim_space(a_nodes);
			span = claim_element(a_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t1 = claim_text(span_nodes, t1_value);
			span_nodes.forEach(detach);
			a_nodes.forEach(detach);
			li_nodes.forEach(detach);
			this.h();
		},
		h() {
			html_tag.a = t0;
			attr(span, "class", "visually-hidden svelte-i7v2jh");
			attr(a, "href", a_href_value = /*settings*/ ctx[25].social_snapchat_link);
			attr(a, "class", "list-social__link link svelte-i7v2jh");
			attr(li, "class", "list-social__item svelte-i7v2jh");
		},
		m(target, anchor) {
			insert_hydration(target, li, anchor);
			append_hydration(li, a);
			html_tag.m(raw_value, a);
			append_hydration(a, t0);
			append_hydration(a, span);
			append_hydration(span, t1);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*rawinclude_46d75d50*/ 16384 && raw_value !== (raw_value = /*rawinclude_46d75d50*/ ctx[14][index || 0] + "")) html_tag.p(raw_value);

			if (dirty[0] & /*settings*/ 33554432 && a_href_value !== (a_href_value = /*settings*/ ctx[25].social_snapchat_link)) {
				attr(a, "href", a_href_value);
			}
		},
		d(detaching) {
			if (detaching) detach(li);
		}
	};
}

// (1213:20) {#if settings.social_youtube_link != '' }
function create_if_block_21(ctx) {
	let li;
	let a;
	let html_tag;
	let raw_value = /*rawinclude_2fe7f822*/ ctx[13][index || 0] + "";
	let t0;
	let span;
	let t1_value = /*liquid*/ ctx[32].t('general.social.links.youtube') + "";
	let t1;
	let a_href_value;

	return {
		c() {
			li = element("li");
			a = element("a");
			html_tag = new HtmlTagHydration(false);
			t0 = space();
			span = element("span");
			t1 = text(t1_value);
			this.h();
		},
		l(nodes) {
			li = claim_element(nodes, "LI", { class: true });
			var li_nodes = children(li);
			a = claim_element(li_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			html_tag = claim_html_tag(a_nodes, false);
			t0 = claim_space(a_nodes);
			span = claim_element(a_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t1 = claim_text(span_nodes, t1_value);
			span_nodes.forEach(detach);
			a_nodes.forEach(detach);
			li_nodes.forEach(detach);
			this.h();
		},
		h() {
			html_tag.a = t0;
			attr(span, "class", "visually-hidden svelte-i7v2jh");
			attr(a, "href", a_href_value = /*settings*/ ctx[25].social_youtube_link);
			attr(a, "class", "list-social__link link svelte-i7v2jh");
			attr(li, "class", "list-social__item svelte-i7v2jh");
		},
		m(target, anchor) {
			insert_hydration(target, li, anchor);
			append_hydration(li, a);
			html_tag.m(raw_value, a);
			append_hydration(a, t0);
			append_hydration(a, span);
			append_hydration(span, t1);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*rawinclude_2fe7f822*/ 8192 && raw_value !== (raw_value = /*rawinclude_2fe7f822*/ ctx[13][index || 0] + "")) html_tag.p(raw_value);

			if (dirty[0] & /*settings*/ 33554432 && a_href_value !== (a_href_value = /*settings*/ ctx[25].social_youtube_link)) {
				attr(a, "href", a_href_value);
			}
		},
		d(detaching) {
			if (detaching) detach(li);
		}
	};
}

// (1221:20) {#if settings.social_vimeo_link != '' }
function create_if_block_20(ctx) {
	let li;
	let a;
	let html_tag;
	let raw_value = /*rawinclude_0cce0950*/ ctx[12][index || 0] + "";
	let t0;
	let span;
	let t1_value = /*liquid*/ ctx[32].t('general.social.links.vimeo') + "";
	let t1;
	let a_href_value;

	return {
		c() {
			li = element("li");
			a = element("a");
			html_tag = new HtmlTagHydration(false);
			t0 = space();
			span = element("span");
			t1 = text(t1_value);
			this.h();
		},
		l(nodes) {
			li = claim_element(nodes, "LI", { class: true });
			var li_nodes = children(li);
			a = claim_element(li_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			html_tag = claim_html_tag(a_nodes, false);
			t0 = claim_space(a_nodes);
			span = claim_element(a_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t1 = claim_text(span_nodes, t1_value);
			span_nodes.forEach(detach);
			a_nodes.forEach(detach);
			li_nodes.forEach(detach);
			this.h();
		},
		h() {
			html_tag.a = t0;
			attr(span, "class", "visually-hidden svelte-i7v2jh");
			attr(a, "href", a_href_value = /*settings*/ ctx[25].social_vimeo_link);
			attr(a, "class", "list-social__link link svelte-i7v2jh");
			attr(li, "class", "list-social__item svelte-i7v2jh");
		},
		m(target, anchor) {
			insert_hydration(target, li, anchor);
			append_hydration(li, a);
			html_tag.m(raw_value, a);
			append_hydration(a, t0);
			append_hydration(a, span);
			append_hydration(span, t1);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*rawinclude_0cce0950*/ 4096 && raw_value !== (raw_value = /*rawinclude_0cce0950*/ ctx[12][index || 0] + "")) html_tag.p(raw_value);

			if (dirty[0] & /*settings*/ 33554432 && a_href_value !== (a_href_value = /*settings*/ ctx[25].social_vimeo_link)) {
				attr(a, "href", a_href_value);
			}
		},
		d(detaching) {
			if (detaching) detach(li);
		}
	};
}

// (1135:6) <HeaderDrawer  breakpoint="tablet"  cart={cart} shop={shop} menu_json={menu_json} settings={settings} logo_html={logo_html} routes={routes} request={request} account_url={account_url} account_text={account_text}  shop$name={shop$name} section$settings={section$settings}   rawinclude_b7c846d6={rawinclude_b7c846d6} rawinclude_5513f9e2={rawinclude_5513f9e2} rawinclude_548f9315={rawinclude_548f9315} rawinclude_76fe91f8={rawinclude_76fe91f8} rawinclude_2041cdf9={rawinclude_2041cdf9} rawinclude_7f9a5b3f={rawinclude_7f9a5b3f} rawinclude_d7392808={rawinclude_d7392808} rawinclude_32303a26={rawinclude_32303a26} rawinclude_1c46a520={rawinclude_1c46a520} rawinclude_f7398384={rawinclude_f7398384} rawinclude_0cce0950={rawinclude_0cce0950} rawinclude_2fe7f822={rawinclude_2fe7f822} rawinclude_46d75d50={rawinclude_46d75d50} rawinclude_102fa95c={rawinclude_102fa95c} rawinclude_18d5c954={rawinclude_18d5c954} rawinclude_53f2ac54={rawinclude_53f2ac54} rawinclude_679e0e24={rawinclude_679e0e24} rawinclude_3be65912={rawinclude_3be65912} rawinclude_602baf9d={rawinclude_602baf9d} lec={lec} >
function create_default_slot_4(ctx) {
	let details;
	let summary;
	let span;
	let html_tag;
	let raw0_value = /*rawinclude_548f9315*/ ctx[4][index || 0] + "";
	let t0;
	let html_tag_1;
	let raw1_value = /*rawinclude_76fe91f8*/ ctx[5][index || 0] + "";
	let summary_aria_label_value;
	let t1;
	let div3;
	let div2;
	let div1;
	let nav;
	let navigation;
	let t2;
	let div0;
	let t3;
	let ul;
	let t4;
	let t5;
	let t6;
	let t7;
	let t8;
	let t9;
	let t10;
	let t11;
	let current;

	navigation = new Navigation({
			props: {
				links: /*section*/ ctx[31].settings.menu.links,
				cart: /*cart*/ ctx[21],
				shop: /*shop*/ ctx[0],
				menu_json: /*menu_json*/ ctx[24],
				settings: /*settings*/ ctx[25],
				logo_html: /*logo_html*/ ctx[26],
				routes: /*routes*/ ctx[27],
				request: /*request*/ ctx[28],
				account_url: /*account_url*/ ctx[29],
				account_text: /*account_text*/ ctx[30],
				shop$name: /*shop$name*/ ctx[22],
				section$settings: /*section$settings*/ ctx[23],
				rawinclude_b7c846d6: /*rawinclude_b7c846d6*/ ctx[2],
				rawinclude_5513f9e2: /*rawinclude_5513f9e2*/ ctx[3],
				rawinclude_548f9315: /*rawinclude_548f9315*/ ctx[4],
				rawinclude_76fe91f8: /*rawinclude_76fe91f8*/ ctx[5],
				rawinclude_2041cdf9: /*rawinclude_2041cdf9*/ ctx[6],
				rawinclude_7f9a5b3f: /*rawinclude_7f9a5b3f*/ ctx[7],
				rawinclude_d7392808: /*rawinclude_d7392808*/ ctx[8],
				rawinclude_32303a26: /*rawinclude_32303a26*/ ctx[9],
				rawinclude_1c46a520: /*rawinclude_1c46a520*/ ctx[10],
				rawinclude_f7398384: /*rawinclude_f7398384*/ ctx[11],
				rawinclude_0cce0950: /*rawinclude_0cce0950*/ ctx[12],
				rawinclude_2fe7f822: /*rawinclude_2fe7f822*/ ctx[13],
				rawinclude_46d75d50: /*rawinclude_46d75d50*/ ctx[14],
				rawinclude_102fa95c: /*rawinclude_102fa95c*/ ctx[15],
				rawinclude_18d5c954: /*rawinclude_18d5c954*/ ctx[16],
				rawinclude_53f2ac54: /*rawinclude_53f2ac54*/ ctx[17],
				rawinclude_679e0e24: /*rawinclude_679e0e24*/ ctx[18],
				rawinclude_3be65912: /*rawinclude_3be65912*/ ctx[19],
				rawinclude_602baf9d: /*rawinclude_602baf9d*/ ctx[20],
				lec: /*lec*/ ctx[1]
			}
		});

	let if_block0 = /*shop*/ ctx[0].customer_accounts_enabled && create_if_block_29(ctx);
	let if_block1 = /*settings*/ ctx[25].social_twitter_link != '' && create_if_block_28(ctx);
	let if_block2 = /*settings*/ ctx[25].social_facebook_link != '' && create_if_block_27(ctx);
	let if_block3 = /*settings*/ ctx[25].social_pinterest_link != '' && create_if_block_26(ctx);
	let if_block4 = /*settings*/ ctx[25].social_instagram_link != '' && create_if_block_25(ctx);
	let if_block5 = /*settings*/ ctx[25].social_tiktok_link != '' && create_if_block_24(ctx);
	let if_block6 = /*settings*/ ctx[25].social_tumblr_link != '' && create_if_block_23(ctx);
	let if_block7 = /*settings*/ ctx[25].social_snapchat_link != '' && create_if_block_22(ctx);
	let if_block8 = /*settings*/ ctx[25].social_youtube_link != '' && create_if_block_21(ctx);
	let if_block9 = /*settings*/ ctx[25].social_vimeo_link != '' && create_if_block_20(ctx);

	return {
		c() {
			details = element("details");
			summary = element("summary");
			span = element("span");
			html_tag = new HtmlTagHydration(false);
			t0 = space();
			html_tag_1 = new HtmlTagHydration(false);
			t1 = space();
			div3 = element("div");
			div2 = element("div");
			div1 = element("div");
			nav = element("nav");
			create_component(navigation.$$.fragment);
			t2 = space();
			div0 = element("div");
			if (if_block0) if_block0.c();
			t3 = space();
			ul = element("ul");
			if (if_block1) if_block1.c();
			t4 = space();
			if (if_block2) if_block2.c();
			t5 = space();
			if (if_block3) if_block3.c();
			t6 = space();
			if (if_block4) if_block4.c();
			t7 = space();
			if (if_block5) if_block5.c();
			t8 = space();
			if (if_block6) if_block6.c();
			t9 = space();
			if (if_block7) if_block7.c();
			t10 = space();
			if (if_block8) if_block8.c();
			t11 = space();
			if (if_block9) if_block9.c();
			this.h();
		},
		l(nodes) {
			details = claim_element(nodes, "DETAILS", { id: true, class: true });
			var details_nodes = children(details);
			summary = claim_element(details_nodes, "SUMMARY", { class: true, "aria-label": true });
			var summary_nodes = children(summary);
			span = claim_element(summary_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			html_tag = claim_html_tag(span_nodes, false);
			t0 = claim_space(span_nodes);
			html_tag_1 = claim_html_tag(span_nodes, false);
			span_nodes.forEach(detach);
			summary_nodes.forEach(detach);
			t1 = claim_space(details_nodes);
			div3 = claim_element(details_nodes, "DIV", { id: true, class: true, tabindex: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			nav = claim_element(div1_nodes, "NAV", { class: true });
			var nav_nodes = children(nav);
			claim_component(navigation.$$.fragment, nav_nodes);
			nav_nodes.forEach(detach);
			t2 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			if (if_block0) if_block0.l(div0_nodes);
			t3 = claim_space(div0_nodes);
			ul = claim_element(div0_nodes, "UL", { class: true, role: true });
			var ul_nodes = children(ul);
			if (if_block1) if_block1.l(ul_nodes);
			t4 = claim_space(ul_nodes);
			if (if_block2) if_block2.l(ul_nodes);
			t5 = claim_space(ul_nodes);
			if (if_block3) if_block3.l(ul_nodes);
			t6 = claim_space(ul_nodes);
			if (if_block4) if_block4.l(ul_nodes);
			t7 = claim_space(ul_nodes);
			if (if_block5) if_block5.l(ul_nodes);
			t8 = claim_space(ul_nodes);
			if (if_block6) if_block6.l(ul_nodes);
			t9 = claim_space(ul_nodes);
			if (if_block7) if_block7.l(ul_nodes);
			t10 = claim_space(ul_nodes);
			if (if_block8) if_block8.l(ul_nodes);
			t11 = claim_space(ul_nodes);
			if (if_block9) if_block9.l(ul_nodes);
			ul_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			details_nodes.forEach(detach);
			this.h();
		},
		h() {
			html_tag.a = t0;
			html_tag_1.a = null;
			attr(span, "class", "svelte-i7v2jh");
			attr(summary, "class", "header__icon header__icon--menu header__icon--summary link focus-inset svelte-i7v2jh");
			attr(summary, "aria-label", summary_aria_label_value = /*liquid*/ ctx[32].t('sections.header.menu'));
			attr(nav, "class", "menu-drawer__navigation svelte-i7v2jh");
			attr(ul, "class", "list list-social list-unstyled svelte-i7v2jh");
			attr(ul, "role", "list");
			attr(div0, "class", "menu-drawer__utility-links svelte-i7v2jh");
			attr(div1, "class", "menu-drawer__navigation-container svelte-i7v2jh");
			attr(div2, "class", "menu-drawer__inner-container svelte-i7v2jh");
			attr(div3, "id", "menu-drawer");
			attr(div3, "class", "gradient menu-drawer motion-reduce svelte-i7v2jh");
			attr(div3, "tabindex", "-1");
			attr(details, "id", "Details-menu-drawer-container");
			attr(details, "class", "menu-drawer-container svelte-i7v2jh");
		},
		m(target, anchor) {
			insert_hydration(target, details, anchor);
			append_hydration(details, summary);
			append_hydration(summary, span);
			html_tag.m(raw0_value, span);
			append_hydration(span, t0);
			html_tag_1.m(raw1_value, span);
			append_hydration(details, t1);
			append_hydration(details, div3);
			append_hydration(div3, div2);
			append_hydration(div2, div1);
			append_hydration(div1, nav);
			mount_component(navigation, nav, null);
			append_hydration(div1, t2);
			append_hydration(div1, div0);
			if (if_block0) if_block0.m(div0, null);
			append_hydration(div0, t3);
			append_hydration(div0, ul);
			if (if_block1) if_block1.m(ul, null);
			append_hydration(ul, t4);
			if (if_block2) if_block2.m(ul, null);
			append_hydration(ul, t5);
			if (if_block3) if_block3.m(ul, null);
			append_hydration(ul, t6);
			if (if_block4) if_block4.m(ul, null);
			append_hydration(ul, t7);
			if (if_block5) if_block5.m(ul, null);
			append_hydration(ul, t8);
			if (if_block6) if_block6.m(ul, null);
			append_hydration(ul, t9);
			if (if_block7) if_block7.m(ul, null);
			append_hydration(ul, t10);
			if (if_block8) if_block8.m(ul, null);
			append_hydration(ul, t11);
			if (if_block9) if_block9.m(ul, null);
			current = true;
		},
		p(ctx, dirty) {
			if ((!current || dirty[0] & /*rawinclude_548f9315*/ 16) && raw0_value !== (raw0_value = /*rawinclude_548f9315*/ ctx[4][index || 0] + "")) html_tag.p(raw0_value);
			if ((!current || dirty[0] & /*rawinclude_76fe91f8*/ 32) && raw1_value !== (raw1_value = /*rawinclude_76fe91f8*/ ctx[5][index || 0] + "")) html_tag_1.p(raw1_value);
			const navigation_changes = {};
			if (dirty[1] & /*section*/ 1) navigation_changes.links = /*section*/ ctx[31].settings.menu.links;
			if (dirty[0] & /*cart*/ 2097152) navigation_changes.cart = /*cart*/ ctx[21];
			if (dirty[0] & /*shop*/ 1) navigation_changes.shop = /*shop*/ ctx[0];
			if (dirty[0] & /*menu_json*/ 16777216) navigation_changes.menu_json = /*menu_json*/ ctx[24];
			if (dirty[0] & /*settings*/ 33554432) navigation_changes.settings = /*settings*/ ctx[25];
			if (dirty[0] & /*logo_html*/ 67108864) navigation_changes.logo_html = /*logo_html*/ ctx[26];
			if (dirty[0] & /*routes*/ 134217728) navigation_changes.routes = /*routes*/ ctx[27];
			if (dirty[0] & /*request*/ 268435456) navigation_changes.request = /*request*/ ctx[28];
			if (dirty[0] & /*account_url*/ 536870912) navigation_changes.account_url = /*account_url*/ ctx[29];
			if (dirty[0] & /*account_text*/ 1073741824) navigation_changes.account_text = /*account_text*/ ctx[30];
			if (dirty[0] & /*shop$name*/ 4194304) navigation_changes.shop$name = /*shop$name*/ ctx[22];
			if (dirty[0] & /*section$settings*/ 8388608) navigation_changes.section$settings = /*section$settings*/ ctx[23];
			if (dirty[0] & /*rawinclude_b7c846d6*/ 4) navigation_changes.rawinclude_b7c846d6 = /*rawinclude_b7c846d6*/ ctx[2];
			if (dirty[0] & /*rawinclude_5513f9e2*/ 8) navigation_changes.rawinclude_5513f9e2 = /*rawinclude_5513f9e2*/ ctx[3];
			if (dirty[0] & /*rawinclude_548f9315*/ 16) navigation_changes.rawinclude_548f9315 = /*rawinclude_548f9315*/ ctx[4];
			if (dirty[0] & /*rawinclude_76fe91f8*/ 32) navigation_changes.rawinclude_76fe91f8 = /*rawinclude_76fe91f8*/ ctx[5];
			if (dirty[0] & /*rawinclude_2041cdf9*/ 64) navigation_changes.rawinclude_2041cdf9 = /*rawinclude_2041cdf9*/ ctx[6];
			if (dirty[0] & /*rawinclude_7f9a5b3f*/ 128) navigation_changes.rawinclude_7f9a5b3f = /*rawinclude_7f9a5b3f*/ ctx[7];
			if (dirty[0] & /*rawinclude_d7392808*/ 256) navigation_changes.rawinclude_d7392808 = /*rawinclude_d7392808*/ ctx[8];
			if (dirty[0] & /*rawinclude_32303a26*/ 512) navigation_changes.rawinclude_32303a26 = /*rawinclude_32303a26*/ ctx[9];
			if (dirty[0] & /*rawinclude_1c46a520*/ 1024) navigation_changes.rawinclude_1c46a520 = /*rawinclude_1c46a520*/ ctx[10];
			if (dirty[0] & /*rawinclude_f7398384*/ 2048) navigation_changes.rawinclude_f7398384 = /*rawinclude_f7398384*/ ctx[11];
			if (dirty[0] & /*rawinclude_0cce0950*/ 4096) navigation_changes.rawinclude_0cce0950 = /*rawinclude_0cce0950*/ ctx[12];
			if (dirty[0] & /*rawinclude_2fe7f822*/ 8192) navigation_changes.rawinclude_2fe7f822 = /*rawinclude_2fe7f822*/ ctx[13];
			if (dirty[0] & /*rawinclude_46d75d50*/ 16384) navigation_changes.rawinclude_46d75d50 = /*rawinclude_46d75d50*/ ctx[14];
			if (dirty[0] & /*rawinclude_102fa95c*/ 32768) navigation_changes.rawinclude_102fa95c = /*rawinclude_102fa95c*/ ctx[15];
			if (dirty[0] & /*rawinclude_18d5c954*/ 65536) navigation_changes.rawinclude_18d5c954 = /*rawinclude_18d5c954*/ ctx[16];
			if (dirty[0] & /*rawinclude_53f2ac54*/ 131072) navigation_changes.rawinclude_53f2ac54 = /*rawinclude_53f2ac54*/ ctx[17];
			if (dirty[0] & /*rawinclude_679e0e24*/ 262144) navigation_changes.rawinclude_679e0e24 = /*rawinclude_679e0e24*/ ctx[18];
			if (dirty[0] & /*rawinclude_3be65912*/ 524288) navigation_changes.rawinclude_3be65912 = /*rawinclude_3be65912*/ ctx[19];
			if (dirty[0] & /*rawinclude_602baf9d*/ 1048576) navigation_changes.rawinclude_602baf9d = /*rawinclude_602baf9d*/ ctx[20];
			if (dirty[0] & /*lec*/ 2) navigation_changes.lec = /*lec*/ ctx[1];
			navigation.$set(navigation_changes);

			if (/*shop*/ ctx[0].customer_accounts_enabled) {
				if (if_block0) {
					if_block0.p(ctx, dirty);
				} else {
					if_block0 = create_if_block_29(ctx);
					if_block0.c();
					if_block0.m(div0, t3);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (/*settings*/ ctx[25].social_twitter_link != '') {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block_28(ctx);
					if_block1.c();
					if_block1.m(ul, t4);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (/*settings*/ ctx[25].social_facebook_link != '') {
				if (if_block2) {
					if_block2.p(ctx, dirty);
				} else {
					if_block2 = create_if_block_27(ctx);
					if_block2.c();
					if_block2.m(ul, t5);
				}
			} else if (if_block2) {
				if_block2.d(1);
				if_block2 = null;
			}

			if (/*settings*/ ctx[25].social_pinterest_link != '') {
				if (if_block3) {
					if_block3.p(ctx, dirty);
				} else {
					if_block3 = create_if_block_26(ctx);
					if_block3.c();
					if_block3.m(ul, t6);
				}
			} else if (if_block3) {
				if_block3.d(1);
				if_block3 = null;
			}

			if (/*settings*/ ctx[25].social_instagram_link != '') {
				if (if_block4) {
					if_block4.p(ctx, dirty);
				} else {
					if_block4 = create_if_block_25(ctx);
					if_block4.c();
					if_block4.m(ul, t7);
				}
			} else if (if_block4) {
				if_block4.d(1);
				if_block4 = null;
			}

			if (/*settings*/ ctx[25].social_tiktok_link != '') {
				if (if_block5) {
					if_block5.p(ctx, dirty);
				} else {
					if_block5 = create_if_block_24(ctx);
					if_block5.c();
					if_block5.m(ul, t8);
				}
			} else if (if_block5) {
				if_block5.d(1);
				if_block5 = null;
			}

			if (/*settings*/ ctx[25].social_tumblr_link != '') {
				if (if_block6) {
					if_block6.p(ctx, dirty);
				} else {
					if_block6 = create_if_block_23(ctx);
					if_block6.c();
					if_block6.m(ul, t9);
				}
			} else if (if_block6) {
				if_block6.d(1);
				if_block6 = null;
			}

			if (/*settings*/ ctx[25].social_snapchat_link != '') {
				if (if_block7) {
					if_block7.p(ctx, dirty);
				} else {
					if_block7 = create_if_block_22(ctx);
					if_block7.c();
					if_block7.m(ul, t10);
				}
			} else if (if_block7) {
				if_block7.d(1);
				if_block7 = null;
			}

			if (/*settings*/ ctx[25].social_youtube_link != '') {
				if (if_block8) {
					if_block8.p(ctx, dirty);
				} else {
					if_block8 = create_if_block_21(ctx);
					if_block8.c();
					if_block8.m(ul, t11);
				}
			} else if (if_block8) {
				if_block8.d(1);
				if_block8 = null;
			}

			if (/*settings*/ ctx[25].social_vimeo_link != '') {
				if (if_block9) {
					if_block9.p(ctx, dirty);
				} else {
					if_block9 = create_if_block_20(ctx);
					if_block9.c();
					if_block9.m(ul, null);
				}
			} else if (if_block9) {
				if_block9.d(1);
				if_block9 = null;
			}
		},
		i(local) {
			if (current) return;
			transition_in(navigation.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(navigation.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(details);
			destroy_component(navigation);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			if (if_block2) if_block2.d();
			if (if_block3) if_block3.d();
			if (if_block4) if_block4.d();
			if (if_block5) if_block5.d();
			if (if_block6) if_block6.d();
			if (if_block7) if_block7.d();
			if (if_block8) if_block8.d();
			if (if_block9) if_block9.d();
		}
	};
}

// (1238:4) {#if section.settings.logo_position == 'top-center' || section.settings.menu == '' }
function create_if_block_16(ctx) {
	let detailsmodal;
	let current;

	detailsmodal = new Details_modal({
			props: {
				classes: "header__search",
				cart: /*cart*/ ctx[21],
				shop: /*shop*/ ctx[0],
				menu_json: /*menu_json*/ ctx[24],
				settings: /*settings*/ ctx[25],
				logo_html: /*logo_html*/ ctx[26],
				routes: /*routes*/ ctx[27],
				request: /*request*/ ctx[28],
				account_url: /*account_url*/ ctx[29],
				account_text: /*account_text*/ ctx[30],
				shop$name: /*shop$name*/ ctx[22],
				section$settings: /*section$settings*/ ctx[23],
				rawinclude_b7c846d6: /*rawinclude_b7c846d6*/ ctx[2],
				rawinclude_5513f9e2: /*rawinclude_5513f9e2*/ ctx[3],
				rawinclude_548f9315: /*rawinclude_548f9315*/ ctx[4],
				rawinclude_76fe91f8: /*rawinclude_76fe91f8*/ ctx[5],
				rawinclude_2041cdf9: /*rawinclude_2041cdf9*/ ctx[6],
				rawinclude_7f9a5b3f: /*rawinclude_7f9a5b3f*/ ctx[7],
				rawinclude_d7392808: /*rawinclude_d7392808*/ ctx[8],
				rawinclude_32303a26: /*rawinclude_32303a26*/ ctx[9],
				rawinclude_1c46a520: /*rawinclude_1c46a520*/ ctx[10],
				rawinclude_f7398384: /*rawinclude_f7398384*/ ctx[11],
				rawinclude_0cce0950: /*rawinclude_0cce0950*/ ctx[12],
				rawinclude_2fe7f822: /*rawinclude_2fe7f822*/ ctx[13],
				rawinclude_46d75d50: /*rawinclude_46d75d50*/ ctx[14],
				rawinclude_102fa95c: /*rawinclude_102fa95c*/ ctx[15],
				rawinclude_18d5c954: /*rawinclude_18d5c954*/ ctx[16],
				rawinclude_53f2ac54: /*rawinclude_53f2ac54*/ ctx[17],
				rawinclude_679e0e24: /*rawinclude_679e0e24*/ ctx[18],
				rawinclude_3be65912: /*rawinclude_3be65912*/ ctx[19],
				rawinclude_602baf9d: /*rawinclude_602baf9d*/ ctx[20],
				lec: /*lec*/ ctx[1],
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(detailsmodal.$$.fragment);
		},
		l(nodes) {
			claim_component(detailsmodal.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(detailsmodal, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const detailsmodal_changes = {};
			if (dirty[0] & /*cart*/ 2097152) detailsmodal_changes.cart = /*cart*/ ctx[21];
			if (dirty[0] & /*shop*/ 1) detailsmodal_changes.shop = /*shop*/ ctx[0];
			if (dirty[0] & /*menu_json*/ 16777216) detailsmodal_changes.menu_json = /*menu_json*/ ctx[24];
			if (dirty[0] & /*settings*/ 33554432) detailsmodal_changes.settings = /*settings*/ ctx[25];
			if (dirty[0] & /*logo_html*/ 67108864) detailsmodal_changes.logo_html = /*logo_html*/ ctx[26];
			if (dirty[0] & /*routes*/ 134217728) detailsmodal_changes.routes = /*routes*/ ctx[27];
			if (dirty[0] & /*request*/ 268435456) detailsmodal_changes.request = /*request*/ ctx[28];
			if (dirty[0] & /*account_url*/ 536870912) detailsmodal_changes.account_url = /*account_url*/ ctx[29];
			if (dirty[0] & /*account_text*/ 1073741824) detailsmodal_changes.account_text = /*account_text*/ ctx[30];
			if (dirty[0] & /*shop$name*/ 4194304) detailsmodal_changes.shop$name = /*shop$name*/ ctx[22];
			if (dirty[0] & /*section$settings*/ 8388608) detailsmodal_changes.section$settings = /*section$settings*/ ctx[23];
			if (dirty[0] & /*rawinclude_b7c846d6*/ 4) detailsmodal_changes.rawinclude_b7c846d6 = /*rawinclude_b7c846d6*/ ctx[2];
			if (dirty[0] & /*rawinclude_5513f9e2*/ 8) detailsmodal_changes.rawinclude_5513f9e2 = /*rawinclude_5513f9e2*/ ctx[3];
			if (dirty[0] & /*rawinclude_548f9315*/ 16) detailsmodal_changes.rawinclude_548f9315 = /*rawinclude_548f9315*/ ctx[4];
			if (dirty[0] & /*rawinclude_76fe91f8*/ 32) detailsmodal_changes.rawinclude_76fe91f8 = /*rawinclude_76fe91f8*/ ctx[5];
			if (dirty[0] & /*rawinclude_2041cdf9*/ 64) detailsmodal_changes.rawinclude_2041cdf9 = /*rawinclude_2041cdf9*/ ctx[6];
			if (dirty[0] & /*rawinclude_7f9a5b3f*/ 128) detailsmodal_changes.rawinclude_7f9a5b3f = /*rawinclude_7f9a5b3f*/ ctx[7];
			if (dirty[0] & /*rawinclude_d7392808*/ 256) detailsmodal_changes.rawinclude_d7392808 = /*rawinclude_d7392808*/ ctx[8];
			if (dirty[0] & /*rawinclude_32303a26*/ 512) detailsmodal_changes.rawinclude_32303a26 = /*rawinclude_32303a26*/ ctx[9];
			if (dirty[0] & /*rawinclude_1c46a520*/ 1024) detailsmodal_changes.rawinclude_1c46a520 = /*rawinclude_1c46a520*/ ctx[10];
			if (dirty[0] & /*rawinclude_f7398384*/ 2048) detailsmodal_changes.rawinclude_f7398384 = /*rawinclude_f7398384*/ ctx[11];
			if (dirty[0] & /*rawinclude_0cce0950*/ 4096) detailsmodal_changes.rawinclude_0cce0950 = /*rawinclude_0cce0950*/ ctx[12];
			if (dirty[0] & /*rawinclude_2fe7f822*/ 8192) detailsmodal_changes.rawinclude_2fe7f822 = /*rawinclude_2fe7f822*/ ctx[13];
			if (dirty[0] & /*rawinclude_46d75d50*/ 16384) detailsmodal_changes.rawinclude_46d75d50 = /*rawinclude_46d75d50*/ ctx[14];
			if (dirty[0] & /*rawinclude_102fa95c*/ 32768) detailsmodal_changes.rawinclude_102fa95c = /*rawinclude_102fa95c*/ ctx[15];
			if (dirty[0] & /*rawinclude_18d5c954*/ 65536) detailsmodal_changes.rawinclude_18d5c954 = /*rawinclude_18d5c954*/ ctx[16];
			if (dirty[0] & /*rawinclude_53f2ac54*/ 131072) detailsmodal_changes.rawinclude_53f2ac54 = /*rawinclude_53f2ac54*/ ctx[17];
			if (dirty[0] & /*rawinclude_679e0e24*/ 262144) detailsmodal_changes.rawinclude_679e0e24 = /*rawinclude_679e0e24*/ ctx[18];
			if (dirty[0] & /*rawinclude_3be65912*/ 524288) detailsmodal_changes.rawinclude_3be65912 = /*rawinclude_3be65912*/ ctx[19];
			if (dirty[0] & /*rawinclude_602baf9d*/ 1048576) detailsmodal_changes.rawinclude_602baf9d = /*rawinclude_602baf9d*/ ctx[20];
			if (dirty[0] & /*lec*/ 2) detailsmodal_changes.lec = /*lec*/ ctx[1];

			if (dirty[0] & /*settings, cart, shop, menu_json, logo_html, routes, request, account_url, account_text, shop$name, section$settings, rawinclude_b7c846d6, rawinclude_5513f9e2, rawinclude_548f9315, rawinclude_76fe91f8, rawinclude_2041cdf9, rawinclude_7f9a5b3f, rawinclude_d7392808, rawinclude_32303a26, rawinclude_1c46a520, rawinclude_f7398384, rawinclude_0cce0950, rawinclude_2fe7f822, rawinclude_46d75d50, rawinclude_102fa95c, rawinclude_18d5c954, rawinclude_53f2ac54, rawinclude_679e0e24, rawinclude_3be65912, rawinclude_602baf9d, lec*/ 2147483647 | dirty[1] & /*$$scope*/ 4) {
				detailsmodal_changes.$$scope = { dirty, ctx };
			}

			detailsmodal.$set(detailsmodal_changes);
		},
		i(local) {
			if (current) return;
			transition_in(detailsmodal.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(detailsmodal.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(detailsmodal, detaching);
		}
	};
}

// (1275:24) {:else}
function create_else_block_8(ctx) {
	let input;
	let input_placeholder_value;

	return {
		c() {
			input = element("input");
			this.h();
		},
		l(nodes) {
			input = claim_element(nodes, "INPUT", {
				class: true,
				id: true,
				type: true,
				name: true,
				placeholder: true
			});

			this.h();
		},
		h() {
			attr(input, "class", "search__input field__input svelte-i7v2jh");
			attr(input, "id", "Search-In-Modal-1");
			attr(input, "type", "search");
			attr(input, "name", "q");
			input.value = "";
			attr(input, "placeholder", input_placeholder_value = /*liquid*/ ctx[32].t('general.search.search'));
		},
		m(target, anchor) {
			insert_hydration(target, input, anchor);
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(input);
		}
	};
}

// (1257:20) {#if settings.predictive_search_enabled }
function create_if_block_18(ctx) {
	let input;
	let input_placeholder_value;

	return {
		c() {
			input = element("input");
			this.h();
		},
		l(nodes) {
			input = claim_element(nodes, "INPUT", {
				class: true,
				id: true,
				type: true,
				name: true,
				placeholder: true,
				role: true,
				"aria-expanded": true,
				"aria-owns": true,
				"aria-controls": true,
				"aria-haspopup": true,
				"aria-autocomplete": true,
				autocorrect: true,
				autocomplete: true,
				autocapitalize: true,
				spellcheck: true
			});

			this.h();
		},
		h() {
			attr(input, "class", "search__input field__input svelte-i7v2jh");
			attr(input, "id", "Search-In-Modal-1");
			attr(input, "type", "search");
			attr(input, "name", "q");
			input.value = "";
			attr(input, "placeholder", input_placeholder_value = /*liquid*/ ctx[32].t('general.search.search'));
			attr(input, "role", "combobox");
			attr(input, "aria-expanded", "false");
			attr(input, "aria-owns", "predictive-search-results-list");
			attr(input, "aria-controls", "predictive-search-results-list");
			attr(input, "aria-haspopup", "listbox");
			attr(input, "aria-autocomplete", "list");
			attr(input, "autocorrect", "off");
			attr(input, "autocomplete", "off");
			attr(input, "autocapitalize", "off");
			attr(input, "spellcheck", "false");
		},
		m(target, anchor) {
			insert_hydration(target, input, anchor);
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(input);
		}
	};
}

// (1293:18) {#if settings.predictive_search_enabled }
function create_if_block_17(ctx) {
	let div1;
	let div0;
	let svg;
	let circle;
	let t;
	let span;

	return {
		c() {
			div1 = element("div");
			div0 = element("div");
			svg = svg_element("svg");
			circle = svg_element("circle");
			t = space();
			span = element("span");
			this.h();
		},
		l(nodes) {
			div1 = claim_element(nodes, "DIV", {
				class: true,
				tabindex: true,
				"data-predictive-search": true
			});

			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);

			svg = claim_svg_element(div0_nodes, "svg", {
				"aria-hidden": true,
				focusable: true,
				role: true,
				class: true,
				viewBox: true,
				xmlns: true
			});

			var svg_nodes = children(svg);

			circle = claim_svg_element(svg_nodes, "circle", {
				class: true,
				fill: true,
				"stroke-width": true,
				cx: true,
				cy: true,
				r: true
			});

			children(circle).forEach(detach);
			svg_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t = claim_space(nodes);

			span = claim_element(nodes, "SPAN", {
				class: true,
				role: true,
				"aria-hidden": true
			});

			children(span).forEach(detach);
			this.h();
		},
		h() {
			attr(circle, "class", "path svelte-i7v2jh");
			attr(circle, "fill", "none");
			attr(circle, "stroke-width", "6");
			attr(circle, "cx", "33");
			attr(circle, "cy", "33");
			attr(circle, "r", "30");
			attr(svg, "aria-hidden", "true");
			attr(svg, "focusable", "false");
			attr(svg, "role", "presentation");
			attr(svg, "class", "spinner svelte-i7v2jh");
			attr(svg, "viewBox", "0 0 66 66");
			attr(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr(div0, "class", "predictive-search__loading-state svelte-i7v2jh");
			attr(div1, "class", "predictive-search predictive-search--header svelte-i7v2jh");
			attr(div1, "tabindex", "-1");
			attr(div1, "data-predictive-search", "");
			attr(span, "class", "predictive-search-status visually-hidden svelte-i7v2jh");
			attr(span, "role", "status");
			attr(span, "aria-hidden", "true");
		},
		m(target, anchor) {
			insert_hydration(target, div1, anchor);
			append_hydration(div1, div0);
			append_hydration(div0, svg);
			append_hydration(svg, circle);
			insert_hydration(target, t, anchor);
			insert_hydration(target, span, anchor);
		},
		d(detaching) {
			if (detaching) detach(div1);
			if (detaching) detach(t);
			if (detaching) detach(span);
		}
	};
}

// (1254:14) <PredictiveSearch   cart={cart} shop={shop} menu_json={menu_json} settings={settings} logo_html={logo_html} routes={routes} request={request} account_url={account_url} account_text={account_text}  shop$name={shop$name} section$settings={section$settings}   rawinclude_b7c846d6={rawinclude_b7c846d6} rawinclude_5513f9e2={rawinclude_5513f9e2} rawinclude_548f9315={rawinclude_548f9315} rawinclude_76fe91f8={rawinclude_76fe91f8} rawinclude_2041cdf9={rawinclude_2041cdf9} rawinclude_7f9a5b3f={rawinclude_7f9a5b3f} rawinclude_d7392808={rawinclude_d7392808} rawinclude_32303a26={rawinclude_32303a26} rawinclude_1c46a520={rawinclude_1c46a520} rawinclude_f7398384={rawinclude_f7398384} rawinclude_0cce0950={rawinclude_0cce0950} rawinclude_2fe7f822={rawinclude_2fe7f822} rawinclude_46d75d50={rawinclude_46d75d50} rawinclude_102fa95c={rawinclude_102fa95c} rawinclude_18d5c954={rawinclude_18d5c954} rawinclude_53f2ac54={rawinclude_53f2ac54} rawinclude_679e0e24={rawinclude_679e0e24} rawinclude_3be65912={rawinclude_3be65912} rawinclude_602baf9d={rawinclude_602baf9d} lec={lec} >
function create_default_slot_3(ctx) {
	let form;
	let div;
	let t0;
	let label;
	let t1_value = /*liquid*/ ctx[32].t('general.search.search') + "";
	let t1;
	let label_data_translation_value;
	let t2;
	let input;
	let t3;
	let button;
	let svg;
	let use;
	let button_aria_label_value;
	let t4;
	let form_action_value;

	function select_block_type(ctx, dirty) {
		if (/*settings*/ ctx[25].predictive_search_enabled) return create_if_block_18;
		return create_else_block_8;
	}

	let current_block_type = select_block_type(ctx, [-1, -1]);
	let if_block0 = current_block_type(ctx);
	let if_block1 = /*settings*/ ctx[25].predictive_search_enabled && create_if_block_17(ctx);

	return {
		c() {
			form = element("form");
			div = element("div");
			if_block0.c();
			t0 = space();
			label = element("label");
			t1 = text(t1_value);
			t2 = space();
			input = element("input");
			t3 = space();
			button = element("button");
			svg = svg_element("svg");
			use = svg_element("use");
			t4 = space();
			if (if_block1) if_block1.c();
			this.h();
		},
		l(nodes) {
			form = claim_element(nodes, "FORM", {
				action: true,
				method: true,
				role: true,
				class: true
			});

			var form_nodes = children(form);
			div = claim_element(form_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			if_block0.l(div_nodes);
			t0 = claim_space(div_nodes);

			label = claim_element(div_nodes, "LABEL", {
				class: true,
				for: true,
				"data-translation": true
			});

			var label_nodes = children(label);
			t1 = claim_text(label_nodes, t1_value);
			label_nodes.forEach(detach);
			t2 = claim_space(div_nodes);
			input = claim_element(div_nodes, "INPUT", { type: true, name: true, class: true });
			t3 = claim_space(div_nodes);
			button = claim_element(div_nodes, "BUTTON", { class: true, "aria-label": true });
			var button_nodes = children(button);

			svg = claim_svg_element(button_nodes, "svg", {
				class: true,
				"aria-hidden": true,
				focusable: true,
				role: true
			});

			var svg_nodes = children(svg);
			use = claim_svg_element(svg_nodes, "use", { href: true, class: true });
			var use_nodes = children(use);
			use_nodes.forEach(detach);
			svg_nodes.forEach(detach);
			button_nodes.forEach(detach);
			div_nodes.forEach(detach);
			t4 = claim_space(form_nodes);
			if (if_block1) if_block1.l(form_nodes);
			form_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(label, "class", "field__label svelte-i7v2jh");
			attr(label, "for", "Search-In-Modal-1");
			attr(label, "data-translation", label_data_translation_value = /*liquid*/ ctx[32].t('general.search.search'));
			attr(input, "type", "hidden");
			attr(input, "name", "options[prefix]");
			input.value = "last";
			attr(input, "class", "svelte-i7v2jh");
			attr(use, "href", "#icon-search");
			attr(use, "class", "svelte-i7v2jh");
			attr(svg, "class", "icon icon-search svelte-i7v2jh");
			attr(svg, "aria-hidden", "true");
			attr(svg, "focusable", "false");
			attr(svg, "role", "presentation");
			attr(button, "class", "search__button field__button svelte-i7v2jh");
			attr(button, "aria-label", button_aria_label_value = /*liquid*/ ctx[32].t('general.search.search'));
			attr(div, "class", "field svelte-i7v2jh");
			attr(form, "action", form_action_value = /*routes*/ ctx[27].search_url);
			attr(form, "method", "get");
			attr(form, "role", "search");
			attr(form, "class", "search search-modal__form svelte-i7v2jh");
		},
		m(target, anchor) {
			insert_hydration(target, form, anchor);
			append_hydration(form, div);
			if_block0.m(div, null);
			append_hydration(div, t0);
			append_hydration(div, label);
			append_hydration(label, t1);
			append_hydration(div, t2);
			append_hydration(div, input);
			append_hydration(div, t3);
			append_hydration(div, button);
			append_hydration(button, svg);
			append_hydration(svg, use);
			append_hydration(form, t4);
			if (if_block1) if_block1.m(form, null);
		},
		p(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type(ctx, dirty)) && if_block0) {
				if_block0.p(ctx, dirty);
			} else {
				if_block0.d(1);
				if_block0 = current_block_type(ctx);

				if (if_block0) {
					if_block0.c();
					if_block0.m(div, t0);
				}
			}

			if (/*settings*/ ctx[25].predictive_search_enabled) {
				if (if_block1) {
					
				} else {
					if_block1 = create_if_block_17(ctx);
					if_block1.c();
					if_block1.m(form, null);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (dirty[0] & /*routes*/ 134217728 && form_action_value !== (form_action_value = /*routes*/ ctx[27].search_url)) {
				attr(form, "action", form_action_value);
			}
		},
		d(detaching) {
			if (detaching) detach(form);
			if_block0.d();
			if (if_block1) if_block1.d();
		}
	};
}

// (1239:6) <DetailsModal  classes="header__search"  cart={cart} shop={shop} menu_json={menu_json} settings={settings} logo_html={logo_html} routes={routes} request={request} account_url={account_url} account_text={account_text}  shop$name={shop$name} section$settings={section$settings}   rawinclude_b7c846d6={rawinclude_b7c846d6} rawinclude_5513f9e2={rawinclude_5513f9e2} rawinclude_548f9315={rawinclude_548f9315} rawinclude_76fe91f8={rawinclude_76fe91f8} rawinclude_2041cdf9={rawinclude_2041cdf9} rawinclude_7f9a5b3f={rawinclude_7f9a5b3f} rawinclude_d7392808={rawinclude_d7392808} rawinclude_32303a26={rawinclude_32303a26} rawinclude_1c46a520={rawinclude_1c46a520} rawinclude_f7398384={rawinclude_f7398384} rawinclude_0cce0950={rawinclude_0cce0950} rawinclude_2fe7f822={rawinclude_2fe7f822} rawinclude_46d75d50={rawinclude_46d75d50} rawinclude_102fa95c={rawinclude_102fa95c} rawinclude_18d5c954={rawinclude_18d5c954} rawinclude_53f2ac54={rawinclude_53f2ac54} rawinclude_679e0e24={rawinclude_679e0e24} rawinclude_3be65912={rawinclude_3be65912} rawinclude_602baf9d={rawinclude_602baf9d} lec={lec} >
function create_default_slot_2(ctx) {
	let details;
	let summary;
	let span;
	let svg0;
	let use0;
	let t0;
	let svg1;
	let use1;
	let summary_aria_label_value;
	let t1;
	let div2;
	let div0;
	let t2;
	let div1;
	let predictivesearch;
	let t3;
	let button;
	let svg2;
	let use2;
	let button_aria_label_value;
	let div2_aria_label_value;
	let current;

	predictivesearch = new Predictive_search({
			props: {
				cart: /*cart*/ ctx[21],
				shop: /*shop*/ ctx[0],
				menu_json: /*menu_json*/ ctx[24],
				settings: /*settings*/ ctx[25],
				logo_html: /*logo_html*/ ctx[26],
				routes: /*routes*/ ctx[27],
				request: /*request*/ ctx[28],
				account_url: /*account_url*/ ctx[29],
				account_text: /*account_text*/ ctx[30],
				shop$name: /*shop$name*/ ctx[22],
				section$settings: /*section$settings*/ ctx[23],
				rawinclude_b7c846d6: /*rawinclude_b7c846d6*/ ctx[2],
				rawinclude_5513f9e2: /*rawinclude_5513f9e2*/ ctx[3],
				rawinclude_548f9315: /*rawinclude_548f9315*/ ctx[4],
				rawinclude_76fe91f8: /*rawinclude_76fe91f8*/ ctx[5],
				rawinclude_2041cdf9: /*rawinclude_2041cdf9*/ ctx[6],
				rawinclude_7f9a5b3f: /*rawinclude_7f9a5b3f*/ ctx[7],
				rawinclude_d7392808: /*rawinclude_d7392808*/ ctx[8],
				rawinclude_32303a26: /*rawinclude_32303a26*/ ctx[9],
				rawinclude_1c46a520: /*rawinclude_1c46a520*/ ctx[10],
				rawinclude_f7398384: /*rawinclude_f7398384*/ ctx[11],
				rawinclude_0cce0950: /*rawinclude_0cce0950*/ ctx[12],
				rawinclude_2fe7f822: /*rawinclude_2fe7f822*/ ctx[13],
				rawinclude_46d75d50: /*rawinclude_46d75d50*/ ctx[14],
				rawinclude_102fa95c: /*rawinclude_102fa95c*/ ctx[15],
				rawinclude_18d5c954: /*rawinclude_18d5c954*/ ctx[16],
				rawinclude_53f2ac54: /*rawinclude_53f2ac54*/ ctx[17],
				rawinclude_679e0e24: /*rawinclude_679e0e24*/ ctx[18],
				rawinclude_3be65912: /*rawinclude_3be65912*/ ctx[19],
				rawinclude_602baf9d: /*rawinclude_602baf9d*/ ctx[20],
				lec: /*lec*/ ctx[1],
				$$slots: { default: [create_default_slot_3] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			details = element("details");
			summary = element("summary");
			span = element("span");
			svg0 = svg_element("svg");
			use0 = svg_element("use");
			t0 = space();
			svg1 = svg_element("svg");
			use1 = svg_element("use");
			t1 = space();
			div2 = element("div");
			div0 = element("div");
			t2 = space();
			div1 = element("div");
			create_component(predictivesearch.$$.fragment);
			t3 = space();
			button = element("button");
			svg2 = svg_element("svg");
			use2 = svg_element("use");
			this.h();
		},
		l(nodes) {
			details = claim_element(nodes, "DETAILS", { class: true });
			var details_nodes = children(details);

			summary = claim_element(details_nodes, "SUMMARY", {
				class: true,
				"aria-haspopup": true,
				"aria-label": true
			});

			var summary_nodes = children(summary);
			span = claim_element(summary_nodes, "SPAN", { class: true });
			var span_nodes = children(span);

			svg0 = claim_svg_element(span_nodes, "svg", {
				class: true,
				"aria-hidden": true,
				focusable: true,
				role: true
			});

			var svg0_nodes = children(svg0);
			use0 = claim_svg_element(svg0_nodes, "use", { href: true, class: true });
			var use0_nodes = children(use0);
			use0_nodes.forEach(detach);
			svg0_nodes.forEach(detach);
			t0 = claim_space(span_nodes);

			svg1 = claim_svg_element(span_nodes, "svg", {
				class: true,
				"aria-hidden": true,
				focusable: true,
				role: true
			});

			var svg1_nodes = children(svg1);
			use1 = claim_svg_element(svg1_nodes, "use", { href: true, class: true });
			var use1_nodes = children(use1);
			use1_nodes.forEach(detach);
			svg1_nodes.forEach(detach);
			span_nodes.forEach(detach);
			summary_nodes.forEach(detach);
			t1 = claim_space(details_nodes);

			div2 = claim_element(details_nodes, "DIV", {
				class: true,
				role: true,
				"aria-modal": true,
				"aria-label": true
			});

			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			children(div0).forEach(detach);
			t2 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true, tabindex: true });
			var div1_nodes = children(div1);
			claim_component(predictivesearch.$$.fragment, div1_nodes);
			t3 = claim_space(div1_nodes);

			button = claim_element(div1_nodes, "BUTTON", {
				type: true,
				class: true,
				"aria-label": true
			});

			var button_nodes = children(button);

			svg2 = claim_svg_element(button_nodes, "svg", {
				class: true,
				"aria-hidden": true,
				focusable: true,
				role: true
			});

			var svg2_nodes = children(svg2);
			use2 = claim_svg_element(svg2_nodes, "use", { href: true, class: true });
			var use2_nodes = children(use2);
			use2_nodes.forEach(detach);
			svg2_nodes.forEach(detach);
			button_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			details_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(use0, "href", "#icon-search");
			attr(use0, "class", "svelte-i7v2jh");
			attr(svg0, "class", "modal__toggle-open icon icon-search svelte-i7v2jh");
			attr(svg0, "aria-hidden", "true");
			attr(svg0, "focusable", "false");
			attr(svg0, "role", "presentation");
			attr(use1, "href", "#icon-close");
			attr(use1, "class", "svelte-i7v2jh");
			attr(svg1, "class", "modal__toggle-close icon icon-close svelte-i7v2jh");
			attr(svg1, "aria-hidden", "true");
			attr(svg1, "focusable", "false");
			attr(svg1, "role", "presentation");
			attr(span, "class", "svelte-i7v2jh");
			attr(summary, "class", "header__icon header__icon--search header__icon--summary link focus-inset modal__toggle svelte-i7v2jh");
			attr(summary, "aria-haspopup", "dialog");
			attr(summary, "aria-label", summary_aria_label_value = /*liquid*/ ctx[32].t('general.search.search'));
			attr(div0, "class", "modal-overlay svelte-i7v2jh");
			attr(use2, "href", "#icon-close");
			attr(use2, "class", "svelte-i7v2jh");
			attr(svg2, "class", "icon icon-close svelte-i7v2jh");
			attr(svg2, "aria-hidden", "true");
			attr(svg2, "focusable", "false");
			attr(svg2, "role", "presentation");
			attr(button, "type", "button");
			attr(button, "class", "modal__close-button link link--text focus-inset svelte-i7v2jh");
			attr(button, "aria-label", button_aria_label_value = /*liquid*/ ctx[32].t('accessibility.close'));
			attr(div1, "class", "search-modal__content svelte-i7v2jh");
			attr(div1, "tabindex", "-1");
			toggle_class(div1, "search-modal__content-top", /*settings*/ ctx[25].inputs_shadow_vertical_offset != 0 && /*settings*/ ctx[25].inputs_shadow_vertical_offset < 0);
			toggle_class(div1, "search-modal__content-bottom", /*settings*/ ctx[25].inputs_shadow_vertical_offset == 0 || /*settings*/ ctx[25].inputs_shadow_vertical_offset > 0);
			attr(div2, "class", "search-modal modal__content gradient svelte-i7v2jh");
			attr(div2, "role", "dialog");
			attr(div2, "aria-modal", "true");
			attr(div2, "aria-label", div2_aria_label_value = /*liquid*/ ctx[32].t('general.search.search'));
			attr(details, "class", "svelte-i7v2jh");
		},
		m(target, anchor) {
			insert_hydration(target, details, anchor);
			append_hydration(details, summary);
			append_hydration(summary, span);
			append_hydration(span, svg0);
			append_hydration(svg0, use0);
			append_hydration(span, t0);
			append_hydration(span, svg1);
			append_hydration(svg1, use1);
			append_hydration(details, t1);
			append_hydration(details, div2);
			append_hydration(div2, div0);
			append_hydration(div2, t2);
			append_hydration(div2, div1);
			mount_component(predictivesearch, div1, null);
			append_hydration(div1, t3);
			append_hydration(div1, button);
			append_hydration(button, svg2);
			append_hydration(svg2, use2);
			current = true;
		},
		p(ctx, dirty) {
			const predictivesearch_changes = {};
			if (dirty[0] & /*cart*/ 2097152) predictivesearch_changes.cart = /*cart*/ ctx[21];
			if (dirty[0] & /*shop*/ 1) predictivesearch_changes.shop = /*shop*/ ctx[0];
			if (dirty[0] & /*menu_json*/ 16777216) predictivesearch_changes.menu_json = /*menu_json*/ ctx[24];
			if (dirty[0] & /*settings*/ 33554432) predictivesearch_changes.settings = /*settings*/ ctx[25];
			if (dirty[0] & /*logo_html*/ 67108864) predictivesearch_changes.logo_html = /*logo_html*/ ctx[26];
			if (dirty[0] & /*routes*/ 134217728) predictivesearch_changes.routes = /*routes*/ ctx[27];
			if (dirty[0] & /*request*/ 268435456) predictivesearch_changes.request = /*request*/ ctx[28];
			if (dirty[0] & /*account_url*/ 536870912) predictivesearch_changes.account_url = /*account_url*/ ctx[29];
			if (dirty[0] & /*account_text*/ 1073741824) predictivesearch_changes.account_text = /*account_text*/ ctx[30];
			if (dirty[0] & /*shop$name*/ 4194304) predictivesearch_changes.shop$name = /*shop$name*/ ctx[22];
			if (dirty[0] & /*section$settings*/ 8388608) predictivesearch_changes.section$settings = /*section$settings*/ ctx[23];
			if (dirty[0] & /*rawinclude_b7c846d6*/ 4) predictivesearch_changes.rawinclude_b7c846d6 = /*rawinclude_b7c846d6*/ ctx[2];
			if (dirty[0] & /*rawinclude_5513f9e2*/ 8) predictivesearch_changes.rawinclude_5513f9e2 = /*rawinclude_5513f9e2*/ ctx[3];
			if (dirty[0] & /*rawinclude_548f9315*/ 16) predictivesearch_changes.rawinclude_548f9315 = /*rawinclude_548f9315*/ ctx[4];
			if (dirty[0] & /*rawinclude_76fe91f8*/ 32) predictivesearch_changes.rawinclude_76fe91f8 = /*rawinclude_76fe91f8*/ ctx[5];
			if (dirty[0] & /*rawinclude_2041cdf9*/ 64) predictivesearch_changes.rawinclude_2041cdf9 = /*rawinclude_2041cdf9*/ ctx[6];
			if (dirty[0] & /*rawinclude_7f9a5b3f*/ 128) predictivesearch_changes.rawinclude_7f9a5b3f = /*rawinclude_7f9a5b3f*/ ctx[7];
			if (dirty[0] & /*rawinclude_d7392808*/ 256) predictivesearch_changes.rawinclude_d7392808 = /*rawinclude_d7392808*/ ctx[8];
			if (dirty[0] & /*rawinclude_32303a26*/ 512) predictivesearch_changes.rawinclude_32303a26 = /*rawinclude_32303a26*/ ctx[9];
			if (dirty[0] & /*rawinclude_1c46a520*/ 1024) predictivesearch_changes.rawinclude_1c46a520 = /*rawinclude_1c46a520*/ ctx[10];
			if (dirty[0] & /*rawinclude_f7398384*/ 2048) predictivesearch_changes.rawinclude_f7398384 = /*rawinclude_f7398384*/ ctx[11];
			if (dirty[0] & /*rawinclude_0cce0950*/ 4096) predictivesearch_changes.rawinclude_0cce0950 = /*rawinclude_0cce0950*/ ctx[12];
			if (dirty[0] & /*rawinclude_2fe7f822*/ 8192) predictivesearch_changes.rawinclude_2fe7f822 = /*rawinclude_2fe7f822*/ ctx[13];
			if (dirty[0] & /*rawinclude_46d75d50*/ 16384) predictivesearch_changes.rawinclude_46d75d50 = /*rawinclude_46d75d50*/ ctx[14];
			if (dirty[0] & /*rawinclude_102fa95c*/ 32768) predictivesearch_changes.rawinclude_102fa95c = /*rawinclude_102fa95c*/ ctx[15];
			if (dirty[0] & /*rawinclude_18d5c954*/ 65536) predictivesearch_changes.rawinclude_18d5c954 = /*rawinclude_18d5c954*/ ctx[16];
			if (dirty[0] & /*rawinclude_53f2ac54*/ 131072) predictivesearch_changes.rawinclude_53f2ac54 = /*rawinclude_53f2ac54*/ ctx[17];
			if (dirty[0] & /*rawinclude_679e0e24*/ 262144) predictivesearch_changes.rawinclude_679e0e24 = /*rawinclude_679e0e24*/ ctx[18];
			if (dirty[0] & /*rawinclude_3be65912*/ 524288) predictivesearch_changes.rawinclude_3be65912 = /*rawinclude_3be65912*/ ctx[19];
			if (dirty[0] & /*rawinclude_602baf9d*/ 1048576) predictivesearch_changes.rawinclude_602baf9d = /*rawinclude_602baf9d*/ ctx[20];
			if (dirty[0] & /*lec*/ 2) predictivesearch_changes.lec = /*lec*/ ctx[1];

			if (dirty[0] & /*routes, settings*/ 167772160 | dirty[1] & /*$$scope*/ 4) {
				predictivesearch_changes.$$scope = { dirty, ctx };
			}

			predictivesearch.$set(predictivesearch_changes);

			if (!current || dirty[0] & /*settings*/ 33554432) {
				toggle_class(div1, "search-modal__content-top", /*settings*/ ctx[25].inputs_shadow_vertical_offset != 0 && /*settings*/ ctx[25].inputs_shadow_vertical_offset < 0);
			}

			if (!current || dirty[0] & /*settings*/ 33554432) {
				toggle_class(div1, "search-modal__content-bottom", /*settings*/ ctx[25].inputs_shadow_vertical_offset == 0 || /*settings*/ ctx[25].inputs_shadow_vertical_offset > 0);
			}
		},
		i(local) {
			if (current) return;
			transition_in(predictivesearch.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(predictivesearch.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(details);
			destroy_component(predictivesearch);
		}
	};
}

// (1317:4) {#if section.settings.logo_position != 'middle-center' }
function create_if_block_12(ctx) {
	let if_block_anchor;

	function select_block_type_1(ctx, dirty) {
		if (/*request*/ ctx[28].page_type == 'index') return create_if_block_13;
		return create_else_block_6;
	}

	let current_block_type = select_block_type_1(ctx, [-1, -1]);
	let if_block = current_block_type(ctx);

	return {
		c() {
			if_block.c();
			if_block_anchor = empty();
		},
		l(nodes) {
			if_block.l(nodes);
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if_block.m(target, anchor);
			insert_hydration(target, if_block_anchor, anchor);
		},
		p(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type_1(ctx, dirty)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			}
		},
		d(detaching) {
			if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

// (1328:6) {:else}
function create_else_block_6(ctx) {
	let a;
	let a_href_value;

	function select_block_type_3(ctx, dirty) {
		if (/*section*/ ctx[31].settings.logo != '') return create_if_block_15;
		return create_else_block_7;
	}

	let current_block_type = select_block_type_3(ctx, [-1, -1]);
	let if_block = current_block_type(ctx);

	return {
		c() {
			a = element("a");
			if_block.c();
			this.h();
		},
		l(nodes) {
			a = claim_element(nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			if_block.l(a_nodes);
			a_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(a, "href", a_href_value = /*routes*/ ctx[27].root_url);
			attr(a, "class", "header__heading-link link link--text focus-inset svelte-i7v2jh");
		},
		m(target, anchor) {
			insert_hydration(target, a, anchor);
			if_block.m(a, null);
		},
		p(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type_3(ctx, dirty)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(a, null);
				}
			}

			if (dirty[0] & /*routes*/ 134217728 && a_href_value !== (a_href_value = /*routes*/ ctx[27].root_url)) {
				attr(a, "href", a_href_value);
			}
		},
		d(detaching) {
			if (detaching) detach(a);
			if_block.d();
		}
	};
}

// (1318:6) {#if request.page_type == 'index' }
function create_if_block_13(ctx) {
	let h1;
	let a;
	let a_href_value;

	function select_block_type_2(ctx, dirty) {
		if (/*section*/ ctx[31].settings.logo != '') return create_if_block_14;
		return create_else_block_5;
	}

	let current_block_type = select_block_type_2(ctx, [-1, -1]);
	let if_block = current_block_type(ctx);

	return {
		c() {
			h1 = element("h1");
			a = element("a");
			if_block.c();
			this.h();
		},
		l(nodes) {
			h1 = claim_element(nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			a = claim_element(h1_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			if_block.l(a_nodes);
			a_nodes.forEach(detach);
			h1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(a, "href", a_href_value = /*routes*/ ctx[27].root_url);
			attr(a, "class", "header__heading-link link link--text focus-inset svelte-i7v2jh");
			attr(h1, "class", "header__heading svelte-i7v2jh");
		},
		m(target, anchor) {
			insert_hydration(target, h1, anchor);
			append_hydration(h1, a);
			if_block.m(a, null);
		},
		p(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type_2(ctx, dirty)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(a, null);
				}
			}

			if (dirty[0] & /*routes*/ 134217728 && a_href_value !== (a_href_value = /*routes*/ ctx[27].root_url)) {
				attr(a, "href", a_href_value);
			}
		},
		d(detaching) {
			if (detaching) detach(h1);
			if_block.d();
		}
	};
}

// (1332:10) {:else}
function create_else_block_7(ctx) {
	let span;
	let t_value = /*shop*/ ctx[0].name + "";
	let t;

	return {
		c() {
			span = element("span");
			t = text(t_value);
			this.h();
		},
		l(nodes) {
			span = claim_element(nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, t_value);
			span_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(span, "class", "h2 svelte-i7v2jh");
		},
		m(target, anchor) {
			insert_hydration(target, span, anchor);
			append_hydration(span, t);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*shop*/ 1 && t_value !== (t_value = /*shop*/ ctx[0].name + "")) set_data(t, t_value);
		},
		d(detaching) {
			if (detaching) detach(span);
		}
	};
}

// (1330:10) {#if section.settings.logo != '' }
function create_if_block_15(ctx) {
	let html_tag;
	let raw_value = (/*logo_html*/ ctx[26] || '') + "";
	let html_anchor;

	return {
		c() {
			html_tag = new HtmlTagHydration(false);
			html_anchor = empty();
			this.h();
		},
		l(nodes) {
			html_tag = claim_html_tag(nodes, false);
			html_anchor = empty();
			this.h();
		},
		h() {
			html_tag.a = html_anchor;
		},
		m(target, anchor) {
			html_tag.m(raw_value, target, anchor);
			insert_hydration(target, html_anchor, anchor);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*logo_html*/ 67108864 && raw_value !== (raw_value = (/*logo_html*/ ctx[26] || '') + "")) html_tag.p(raw_value);
		},
		d(detaching) {
			if (detaching) detach(html_anchor);
			if (detaching) html_tag.d();
		}
	};
}

// (1323:12) {:else}
function create_else_block_5(ctx) {
	let span;
	let t_value = /*shop*/ ctx[0].name + "";
	let t;

	return {
		c() {
			span = element("span");
			t = text(t_value);
			this.h();
		},
		l(nodes) {
			span = claim_element(nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, t_value);
			span_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(span, "class", "h2 svelte-i7v2jh");
		},
		m(target, anchor) {
			insert_hydration(target, span, anchor);
			append_hydration(span, t);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*shop*/ 1 && t_value !== (t_value = /*shop*/ ctx[0].name + "")) set_data(t, t_value);
		},
		d(detaching) {
			if (detaching) detach(span);
		}
	};
}

// (1321:12) {#if section.settings.logo != '' }
function create_if_block_14(ctx) {
	let html_tag;
	let raw_value = (/*logo_html*/ ctx[26] || '') + "";
	let html_anchor;

	return {
		c() {
			html_tag = new HtmlTagHydration(false);
			html_anchor = empty();
			this.h();
		},
		l(nodes) {
			html_tag = claim_html_tag(nodes, false);
			html_anchor = empty();
			this.h();
		},
		h() {
			html_tag.a = html_anchor;
		},
		m(target, anchor) {
			html_tag.m(raw_value, target, anchor);
			insert_hydration(target, html_anchor, anchor);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*logo_html*/ 67108864 && raw_value !== (raw_value = (/*logo_html*/ ctx[26] || '') + "")) html_tag.p(raw_value);
		},
		d(detaching) {
			if (detaching) detach(html_anchor);
			if (detaching) html_tag.d();
		}
	};
}

// (1339:4) {#if section.settings.logo_position == 'middle-center' }
function create_if_block_8(ctx) {
	let if_block_anchor;

	function select_block_type_4(ctx, dirty) {
		if (/*request*/ ctx[28].page_type == 'index') return create_if_block_9;
		return create_else_block_3;
	}

	let current_block_type = select_block_type_4(ctx, [-1, -1]);
	let if_block = current_block_type(ctx);

	return {
		c() {
			if_block.c();
			if_block_anchor = empty();
		},
		l(nodes) {
			if_block.l(nodes);
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if_block.m(target, anchor);
			insert_hydration(target, if_block_anchor, anchor);
		},
		p(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type_4(ctx, dirty)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			}
		},
		d(detaching) {
			if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

// (1350:6) {:else}
function create_else_block_3(ctx) {
	let a;
	let a_href_value;

	function select_block_type_6(ctx, dirty) {
		if (/*section*/ ctx[31].settings.logo != '') return create_if_block_11;
		return create_else_block_4;
	}

	let current_block_type = select_block_type_6(ctx, [-1, -1]);
	let if_block = current_block_type(ctx);

	return {
		c() {
			a = element("a");
			if_block.c();
			this.h();
		},
		l(nodes) {
			a = claim_element(nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			if_block.l(a_nodes);
			a_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(a, "href", a_href_value = /*routes*/ ctx[27].root_url);
			attr(a, "class", "header__heading-link link link--text focus-inset svelte-i7v2jh");
		},
		m(target, anchor) {
			insert_hydration(target, a, anchor);
			if_block.m(a, null);
		},
		p(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type_6(ctx, dirty)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(a, null);
				}
			}

			if (dirty[0] & /*routes*/ 134217728 && a_href_value !== (a_href_value = /*routes*/ ctx[27].root_url)) {
				attr(a, "href", a_href_value);
			}
		},
		d(detaching) {
			if (detaching) detach(a);
			if_block.d();
		}
	};
}

// (1340:6) {#if request.page_type == 'index' }
function create_if_block_9(ctx) {
	let h1;
	let a;
	let a_href_value;

	function select_block_type_5(ctx, dirty) {
		if (/*section*/ ctx[31].settings.logo != '') return create_if_block_10;
		return create_else_block_2;
	}

	let current_block_type = select_block_type_5(ctx, [-1, -1]);
	let if_block = current_block_type(ctx);

	return {
		c() {
			h1 = element("h1");
			a = element("a");
			if_block.c();
			this.h();
		},
		l(nodes) {
			h1 = claim_element(nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			a = claim_element(h1_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			if_block.l(a_nodes);
			a_nodes.forEach(detach);
			h1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(a, "href", a_href_value = /*routes*/ ctx[27].root_url);
			attr(a, "class", "header__heading-link link link--text focus-inset svelte-i7v2jh");
			attr(h1, "class", "header__heading svelte-i7v2jh");
		},
		m(target, anchor) {
			insert_hydration(target, h1, anchor);
			append_hydration(h1, a);
			if_block.m(a, null);
		},
		p(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type_5(ctx, dirty)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(a, null);
				}
			}

			if (dirty[0] & /*routes*/ 134217728 && a_href_value !== (a_href_value = /*routes*/ ctx[27].root_url)) {
				attr(a, "href", a_href_value);
			}
		},
		d(detaching) {
			if (detaching) detach(h1);
			if_block.d();
		}
	};
}

// (1354:10) {:else}
function create_else_block_4(ctx) {
	let span;
	let t_value = /*shop*/ ctx[0].name + "";
	let t;

	return {
		c() {
			span = element("span");
			t = text(t_value);
			this.h();
		},
		l(nodes) {
			span = claim_element(nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, t_value);
			span_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(span, "class", "h2 svelte-i7v2jh");
		},
		m(target, anchor) {
			insert_hydration(target, span, anchor);
			append_hydration(span, t);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*shop*/ 1 && t_value !== (t_value = /*shop*/ ctx[0].name + "")) set_data(t, t_value);
		},
		d(detaching) {
			if (detaching) detach(span);
		}
	};
}

// (1352:10) {#if section.settings.logo != '' }
function create_if_block_11(ctx) {
	let html_tag;
	let raw_value = (/*logo_html*/ ctx[26] || '') + "";
	let html_anchor;

	return {
		c() {
			html_tag = new HtmlTagHydration(false);
			html_anchor = empty();
			this.h();
		},
		l(nodes) {
			html_tag = claim_html_tag(nodes, false);
			html_anchor = empty();
			this.h();
		},
		h() {
			html_tag.a = html_anchor;
		},
		m(target, anchor) {
			html_tag.m(raw_value, target, anchor);
			insert_hydration(target, html_anchor, anchor);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*logo_html*/ 67108864 && raw_value !== (raw_value = (/*logo_html*/ ctx[26] || '') + "")) html_tag.p(raw_value);
		},
		d(detaching) {
			if (detaching) detach(html_anchor);
			if (detaching) html_tag.d();
		}
	};
}

// (1345:12) {:else}
function create_else_block_2(ctx) {
	let span;
	let t_value = /*shop*/ ctx[0].name + "";
	let t;

	return {
		c() {
			span = element("span");
			t = text(t_value);
			this.h();
		},
		l(nodes) {
			span = claim_element(nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, t_value);
			span_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(span, "class", "h2 svelte-i7v2jh");
		},
		m(target, anchor) {
			insert_hydration(target, span, anchor);
			append_hydration(span, t);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*shop*/ 1 && t_value !== (t_value = /*shop*/ ctx[0].name + "")) set_data(t, t_value);
		},
		d(detaching) {
			if (detaching) detach(span);
		}
	};
}

// (1343:12) {#if section.settings.logo != '' }
function create_if_block_10(ctx) {
	let html_tag;
	let raw_value = (/*logo_html*/ ctx[26] || '') + "";
	let html_anchor;

	return {
		c() {
			html_tag = new HtmlTagHydration(false);
			html_anchor = empty();
			this.h();
		},
		l(nodes) {
			html_tag = claim_html_tag(nodes, false);
			html_anchor = empty();
			this.h();
		},
		h() {
			html_tag.a = html_anchor;
		},
		m(target, anchor) {
			html_tag.m(raw_value, target, anchor);
			insert_hydration(target, html_anchor, anchor);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*logo_html*/ 67108864 && raw_value !== (raw_value = (/*logo_html*/ ctx[26] || '') + "")) html_tag.p(raw_value);
		},
		d(detaching) {
			if (detaching) detach(html_anchor);
			if (detaching) html_tag.d();
		}
	};
}

// (1398:24) {:else}
function create_else_block_1(ctx) {
	let input;
	let input_placeholder_value;

	return {
		c() {
			input = element("input");
			this.h();
		},
		l(nodes) {
			input = claim_element(nodes, "INPUT", {
				class: true,
				id: true,
				type: true,
				name: true,
				placeholder: true
			});

			this.h();
		},
		h() {
			attr(input, "class", "search__input field__input svelte-i7v2jh");
			attr(input, "id", "Search-In-Modal");
			attr(input, "type", "search");
			attr(input, "name", "q");
			input.value = "";
			attr(input, "placeholder", input_placeholder_value = /*liquid*/ ctx[32].t('general.search.search'));
		},
		m(target, anchor) {
			insert_hydration(target, input, anchor);
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(input);
		}
	};
}

// (1380:22) {#if settings.predictive_search_enabled }
function create_if_block_7(ctx) {
	let input;
	let input_placeholder_value;

	return {
		c() {
			input = element("input");
			this.h();
		},
		l(nodes) {
			input = claim_element(nodes, "INPUT", {
				class: true,
				id: true,
				type: true,
				name: true,
				placeholder: true,
				role: true,
				"aria-expanded": true,
				"aria-owns": true,
				"aria-controls": true,
				"aria-haspopup": true,
				"aria-autocomplete": true,
				autocorrect: true,
				autocomplete: true,
				autocapitalize: true,
				spellcheck: true
			});

			this.h();
		},
		h() {
			attr(input, "class", "search__input field__input svelte-i7v2jh");
			attr(input, "id", "Search-In-Modal");
			attr(input, "type", "search");
			attr(input, "name", "q");
			input.value = "";
			attr(input, "placeholder", input_placeholder_value = /*liquid*/ ctx[32].t('general.search.search'));
			attr(input, "role", "combobox");
			attr(input, "aria-expanded", "false");
			attr(input, "aria-owns", "predictive-search-results-list");
			attr(input, "aria-controls", "predictive-search-results-list");
			attr(input, "aria-haspopup", "listbox");
			attr(input, "aria-autocomplete", "list");
			attr(input, "autocorrect", "off");
			attr(input, "autocomplete", "off");
			attr(input, "autocapitalize", "off");
			attr(input, "spellcheck", "false");
		},
		m(target, anchor) {
			insert_hydration(target, input, anchor);
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(input);
		}
	};
}

// (1417:18) {#if settings.predictive_search_enabled }
function create_if_block_6(ctx) {
	let div1;
	let div0;
	let svg;
	let circle;
	let t;
	let span;

	return {
		c() {
			div1 = element("div");
			div0 = element("div");
			svg = svg_element("svg");
			circle = svg_element("circle");
			t = space();
			span = element("span");
			this.h();
		},
		l(nodes) {
			div1 = claim_element(nodes, "DIV", {
				class: true,
				tabindex: true,
				"data-predictive-search": true
			});

			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);

			svg = claim_svg_element(div0_nodes, "svg", {
				"aria-hidden": true,
				focusable: true,
				role: true,
				class: true,
				viewBox: true,
				xmlns: true
			});

			var svg_nodes = children(svg);

			circle = claim_svg_element(svg_nodes, "circle", {
				class: true,
				fill: true,
				"stroke-width": true,
				cx: true,
				cy: true,
				r: true
			});

			children(circle).forEach(detach);
			svg_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t = claim_space(nodes);

			span = claim_element(nodes, "SPAN", {
				class: true,
				role: true,
				"aria-hidden": true
			});

			children(span).forEach(detach);
			this.h();
		},
		h() {
			attr(circle, "class", "path svelte-i7v2jh");
			attr(circle, "fill", "none");
			attr(circle, "stroke-width", "6");
			attr(circle, "cx", "33");
			attr(circle, "cy", "33");
			attr(circle, "r", "30");
			attr(svg, "aria-hidden", "true");
			attr(svg, "focusable", "false");
			attr(svg, "role", "presentation");
			attr(svg, "class", "spinner svelte-i7v2jh");
			attr(svg, "viewBox", "0 0 66 66");
			attr(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr(div0, "class", "predictive-search__loading-state svelte-i7v2jh");
			attr(div1, "class", "predictive-search predictive-search--header svelte-i7v2jh");
			attr(div1, "tabindex", "-1");
			attr(div1, "data-predictive-search", "");
			attr(span, "class", "predictive-search-status visually-hidden svelte-i7v2jh");
			attr(span, "role", "status");
			attr(span, "aria-hidden", "true");
		},
		m(target, anchor) {
			insert_hydration(target, div1, anchor);
			append_hydration(div1, div0);
			append_hydration(div0, svg);
			append_hydration(svg, circle);
			insert_hydration(target, t, anchor);
			insert_hydration(target, span, anchor);
		},
		d(detaching) {
			if (detaching) detach(div1);
			if (detaching) detach(t);
			if (detaching) detach(span);
		}
	};
}

// (1377:16) <PredictiveSearch  class="search-modal__form"   cart={cart} shop={shop} menu_json={menu_json} settings={settings} logo_html={logo_html} routes={routes} request={request} account_url={account_url} account_text={account_text}  shop$name={shop$name} section$settings={section$settings}   rawinclude_b7c846d6={rawinclude_b7c846d6} rawinclude_5513f9e2={rawinclude_5513f9e2} rawinclude_548f9315={rawinclude_548f9315} rawinclude_76fe91f8={rawinclude_76fe91f8} rawinclude_2041cdf9={rawinclude_2041cdf9} rawinclude_7f9a5b3f={rawinclude_7f9a5b3f} rawinclude_d7392808={rawinclude_d7392808} rawinclude_32303a26={rawinclude_32303a26} rawinclude_1c46a520={rawinclude_1c46a520} rawinclude_f7398384={rawinclude_f7398384} rawinclude_0cce0950={rawinclude_0cce0950} rawinclude_2fe7f822={rawinclude_2fe7f822} rawinclude_46d75d50={rawinclude_46d75d50} rawinclude_102fa95c={rawinclude_102fa95c} rawinclude_18d5c954={rawinclude_18d5c954} rawinclude_53f2ac54={rawinclude_53f2ac54} rawinclude_679e0e24={rawinclude_679e0e24} rawinclude_3be65912={rawinclude_3be65912} rawinclude_602baf9d={rawinclude_602baf9d} lec={lec} >
function create_default_slot_1(ctx) {
	let form;
	let div;
	let t0;
	let label;
	let t1_value = /*liquid*/ ctx[32].t('general.search.search') + "";
	let t1;
	let label_data_translation_value;
	let t2;
	let input;
	let t3;
	let button;
	let svg;
	let use;
	let button_aria_label_value;
	let t4;
	let form_action_value;

	function select_block_type_7(ctx, dirty) {
		if (/*settings*/ ctx[25].predictive_search_enabled) return create_if_block_7;
		return create_else_block_1;
	}

	let current_block_type = select_block_type_7(ctx, [-1, -1]);
	let if_block0 = current_block_type(ctx);
	let if_block1 = /*settings*/ ctx[25].predictive_search_enabled && create_if_block_6(ctx);

	return {
		c() {
			form = element("form");
			div = element("div");
			if_block0.c();
			t0 = space();
			label = element("label");
			t1 = text(t1_value);
			t2 = space();
			input = element("input");
			t3 = space();
			button = element("button");
			svg = svg_element("svg");
			use = svg_element("use");
			t4 = space();
			if (if_block1) if_block1.c();
			this.h();
		},
		l(nodes) {
			form = claim_element(nodes, "FORM", {
				action: true,
				method: true,
				role: true,
				class: true
			});

			var form_nodes = children(form);
			div = claim_element(form_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			if_block0.l(div_nodes);
			t0 = claim_space(div_nodes);

			label = claim_element(div_nodes, "LABEL", {
				class: true,
				for: true,
				"data-translation": true
			});

			var label_nodes = children(label);
			t1 = claim_text(label_nodes, t1_value);
			label_nodes.forEach(detach);
			t2 = claim_space(div_nodes);
			input = claim_element(div_nodes, "INPUT", { type: true, name: true, class: true });
			t3 = claim_space(div_nodes);
			button = claim_element(div_nodes, "BUTTON", { class: true, "aria-label": true });
			var button_nodes = children(button);

			svg = claim_svg_element(button_nodes, "svg", {
				class: true,
				"aria-hidden": true,
				focusable: true,
				role: true
			});

			var svg_nodes = children(svg);
			use = claim_svg_element(svg_nodes, "use", { href: true, class: true });
			var use_nodes = children(use);
			use_nodes.forEach(detach);
			svg_nodes.forEach(detach);
			button_nodes.forEach(detach);
			div_nodes.forEach(detach);
			t4 = claim_space(form_nodes);
			if (if_block1) if_block1.l(form_nodes);
			form_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(label, "class", "field__label svelte-i7v2jh");
			attr(label, "for", "Search-In-Modal");
			attr(label, "data-translation", label_data_translation_value = /*liquid*/ ctx[32].t('general.search.search'));
			attr(input, "type", "hidden");
			attr(input, "name", "options[prefix]");
			input.value = "last";
			attr(input, "class", "svelte-i7v2jh");
			attr(use, "href", "#icon-search");
			attr(use, "class", "svelte-i7v2jh");
			attr(svg, "class", "icon icon-search svelte-i7v2jh");
			attr(svg, "aria-hidden", "true");
			attr(svg, "focusable", "false");
			attr(svg, "role", "presentation");
			attr(button, "class", "search__button field__button svelte-i7v2jh");
			attr(button, "aria-label", button_aria_label_value = /*liquid*/ ctx[32].t('general.search.search'));
			attr(div, "class", "field svelte-i7v2jh");
			attr(form, "action", form_action_value = /*routes*/ ctx[27].search_url);
			attr(form, "method", "get");
			attr(form, "role", "search");
			attr(form, "class", "search search-modal__form svelte-i7v2jh");
		},
		m(target, anchor) {
			insert_hydration(target, form, anchor);
			append_hydration(form, div);
			if_block0.m(div, null);
			append_hydration(div, t0);
			append_hydration(div, label);
			append_hydration(label, t1);
			append_hydration(div, t2);
			append_hydration(div, input);
			append_hydration(div, t3);
			append_hydration(div, button);
			append_hydration(button, svg);
			append_hydration(svg, use);
			append_hydration(form, t4);
			if (if_block1) if_block1.m(form, null);
		},
		p(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type_7(ctx, dirty)) && if_block0) {
				if_block0.p(ctx, dirty);
			} else {
				if_block0.d(1);
				if_block0 = current_block_type(ctx);

				if (if_block0) {
					if_block0.c();
					if_block0.m(div, t0);
				}
			}

			if (/*settings*/ ctx[25].predictive_search_enabled) {
				if (if_block1) {
					
				} else {
					if_block1 = create_if_block_6(ctx);
					if_block1.c();
					if_block1.m(form, null);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (dirty[0] & /*routes*/ 134217728 && form_action_value !== (form_action_value = /*routes*/ ctx[27].search_url)) {
				attr(form, "action", form_action_value);
			}
		},
		d(detaching) {
			if (detaching) detach(form);
			if_block0.d();
			if (if_block1) if_block1.d();
		}
	};
}

// (1362:6) <DetailsModal  classes="header__search"  cart={cart} shop={shop} menu_json={menu_json} settings={settings} logo_html={logo_html} routes={routes} request={request} account_url={account_url} account_text={account_text}  shop$name={shop$name} section$settings={section$settings}   rawinclude_b7c846d6={rawinclude_b7c846d6} rawinclude_5513f9e2={rawinclude_5513f9e2} rawinclude_548f9315={rawinclude_548f9315} rawinclude_76fe91f8={rawinclude_76fe91f8} rawinclude_2041cdf9={rawinclude_2041cdf9} rawinclude_7f9a5b3f={rawinclude_7f9a5b3f} rawinclude_d7392808={rawinclude_d7392808} rawinclude_32303a26={rawinclude_32303a26} rawinclude_1c46a520={rawinclude_1c46a520} rawinclude_f7398384={rawinclude_f7398384} rawinclude_0cce0950={rawinclude_0cce0950} rawinclude_2fe7f822={rawinclude_2fe7f822} rawinclude_46d75d50={rawinclude_46d75d50} rawinclude_102fa95c={rawinclude_102fa95c} rawinclude_18d5c954={rawinclude_18d5c954} rawinclude_53f2ac54={rawinclude_53f2ac54} rawinclude_679e0e24={rawinclude_679e0e24} rawinclude_3be65912={rawinclude_3be65912} rawinclude_602baf9d={rawinclude_602baf9d} lec={lec} >
function create_default_slot(ctx) {
	let details;
	let summary;
	let span;
	let svg0;
	let use0;
	let t0;
	let svg1;
	let use1;
	let summary_aria_label_value;
	let t1;
	let div2;
	let div0;
	let t2;
	let div1;
	let predictivesearch;
	let t3;
	let button;
	let svg2;
	let use2;
	let button_aria_label_value;
	let div2_aria_label_value;
	let current;

	predictivesearch = new Predictive_search({
			props: {
				class: "search-modal__form",
				cart: /*cart*/ ctx[21],
				shop: /*shop*/ ctx[0],
				menu_json: /*menu_json*/ ctx[24],
				settings: /*settings*/ ctx[25],
				logo_html: /*logo_html*/ ctx[26],
				routes: /*routes*/ ctx[27],
				request: /*request*/ ctx[28],
				account_url: /*account_url*/ ctx[29],
				account_text: /*account_text*/ ctx[30],
				shop$name: /*shop$name*/ ctx[22],
				section$settings: /*section$settings*/ ctx[23],
				rawinclude_b7c846d6: /*rawinclude_b7c846d6*/ ctx[2],
				rawinclude_5513f9e2: /*rawinclude_5513f9e2*/ ctx[3],
				rawinclude_548f9315: /*rawinclude_548f9315*/ ctx[4],
				rawinclude_76fe91f8: /*rawinclude_76fe91f8*/ ctx[5],
				rawinclude_2041cdf9: /*rawinclude_2041cdf9*/ ctx[6],
				rawinclude_7f9a5b3f: /*rawinclude_7f9a5b3f*/ ctx[7],
				rawinclude_d7392808: /*rawinclude_d7392808*/ ctx[8],
				rawinclude_32303a26: /*rawinclude_32303a26*/ ctx[9],
				rawinclude_1c46a520: /*rawinclude_1c46a520*/ ctx[10],
				rawinclude_f7398384: /*rawinclude_f7398384*/ ctx[11],
				rawinclude_0cce0950: /*rawinclude_0cce0950*/ ctx[12],
				rawinclude_2fe7f822: /*rawinclude_2fe7f822*/ ctx[13],
				rawinclude_46d75d50: /*rawinclude_46d75d50*/ ctx[14],
				rawinclude_102fa95c: /*rawinclude_102fa95c*/ ctx[15],
				rawinclude_18d5c954: /*rawinclude_18d5c954*/ ctx[16],
				rawinclude_53f2ac54: /*rawinclude_53f2ac54*/ ctx[17],
				rawinclude_679e0e24: /*rawinclude_679e0e24*/ ctx[18],
				rawinclude_3be65912: /*rawinclude_3be65912*/ ctx[19],
				rawinclude_602baf9d: /*rawinclude_602baf9d*/ ctx[20],
				lec: /*lec*/ ctx[1],
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			details = element("details");
			summary = element("summary");
			span = element("span");
			svg0 = svg_element("svg");
			use0 = svg_element("use");
			t0 = space();
			svg1 = svg_element("svg");
			use1 = svg_element("use");
			t1 = space();
			div2 = element("div");
			div0 = element("div");
			t2 = space();
			div1 = element("div");
			create_component(predictivesearch.$$.fragment);
			t3 = space();
			button = element("button");
			svg2 = svg_element("svg");
			use2 = svg_element("use");
			this.h();
		},
		l(nodes) {
			details = claim_element(nodes, "DETAILS", { class: true });
			var details_nodes = children(details);

			summary = claim_element(details_nodes, "SUMMARY", {
				class: true,
				"aria-haspopup": true,
				"aria-label": true
			});

			var summary_nodes = children(summary);
			span = claim_element(summary_nodes, "SPAN", { class: true });
			var span_nodes = children(span);

			svg0 = claim_svg_element(span_nodes, "svg", {
				class: true,
				"aria-hidden": true,
				focusable: true,
				role: true
			});

			var svg0_nodes = children(svg0);
			use0 = claim_svg_element(svg0_nodes, "use", { href: true, class: true });
			var use0_nodes = children(use0);
			use0_nodes.forEach(detach);
			svg0_nodes.forEach(detach);
			t0 = claim_space(span_nodes);

			svg1 = claim_svg_element(span_nodes, "svg", {
				class: true,
				"aria-hidden": true,
				focusable: true,
				role: true
			});

			var svg1_nodes = children(svg1);
			use1 = claim_svg_element(svg1_nodes, "use", { href: true, class: true });
			var use1_nodes = children(use1);
			use1_nodes.forEach(detach);
			svg1_nodes.forEach(detach);
			span_nodes.forEach(detach);
			summary_nodes.forEach(detach);
			t1 = claim_space(details_nodes);

			div2 = claim_element(details_nodes, "DIV", {
				class: true,
				role: true,
				"aria-modal": true,
				"aria-label": true
			});

			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			children(div0).forEach(detach);
			t2 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true, tabindex: true });
			var div1_nodes = children(div1);
			claim_component(predictivesearch.$$.fragment, div1_nodes);
			t3 = claim_space(div1_nodes);

			button = claim_element(div1_nodes, "BUTTON", {
				type: true,
				class: true,
				"aria-label": true
			});

			var button_nodes = children(button);

			svg2 = claim_svg_element(button_nodes, "svg", {
				class: true,
				"aria-hidden": true,
				focusable: true,
				role: true
			});

			var svg2_nodes = children(svg2);
			use2 = claim_svg_element(svg2_nodes, "use", { href: true, class: true });
			var use2_nodes = children(use2);
			use2_nodes.forEach(detach);
			svg2_nodes.forEach(detach);
			button_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			details_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(use0, "href", "#icon-search");
			attr(use0, "class", "svelte-i7v2jh");
			attr(svg0, "class", "modal__toggle-open icon icon-search svelte-i7v2jh");
			attr(svg0, "aria-hidden", "true");
			attr(svg0, "focusable", "false");
			attr(svg0, "role", "presentation");
			attr(use1, "href", "#icon-close");
			attr(use1, "class", "svelte-i7v2jh");
			attr(svg1, "class", "modal__toggle-close icon icon-close svelte-i7v2jh");
			attr(svg1, "aria-hidden", "true");
			attr(svg1, "focusable", "false");
			attr(svg1, "role", "presentation");
			attr(span, "class", "svelte-i7v2jh");
			attr(summary, "class", "header__icon header__icon--search header__icon--summary link focus-inset modal__toggle svelte-i7v2jh");
			attr(summary, "aria-haspopup", "dialog");
			attr(summary, "aria-label", summary_aria_label_value = /*liquid*/ ctx[32].t('general.search.search'));
			attr(div0, "class", "modal-overlay svelte-i7v2jh");
			attr(use2, "href", "#icon-close");
			attr(use2, "class", "svelte-i7v2jh");
			attr(svg2, "class", "icon icon-close svelte-i7v2jh");
			attr(svg2, "aria-hidden", "true");
			attr(svg2, "focusable", "false");
			attr(svg2, "role", "presentation");
			attr(button, "type", "button");
			attr(button, "class", "search-modal__close-button modal__close-button link link--text focus-inset svelte-i7v2jh");
			attr(button, "aria-label", button_aria_label_value = /*liquid*/ ctx[32].t('accessibility.close'));
			attr(div1, "class", "search-modal__content svelte-i7v2jh");
			attr(div1, "tabindex", "-1");
			toggle_class(div1, "search-modal__content-top", /*settings*/ ctx[25].inputs_shadow_vertical_offset != 0 && /*settings*/ ctx[25].inputs_shadow_vertical_offset < 0);
			toggle_class(div1, "search-modal__content-bottom", /*settings*/ ctx[25].inputs_shadow_vertical_offset == 0 || /*settings*/ ctx[25].inputs_shadow_vertical_offset > 0);
			attr(div2, "class", "search-modal modal__content gradient svelte-i7v2jh");
			attr(div2, "role", "dialog");
			attr(div2, "aria-modal", "true");
			attr(div2, "aria-label", div2_aria_label_value = /*liquid*/ ctx[32].t('general.search.search'));
			attr(details, "class", "svelte-i7v2jh");
		},
		m(target, anchor) {
			insert_hydration(target, details, anchor);
			append_hydration(details, summary);
			append_hydration(summary, span);
			append_hydration(span, svg0);
			append_hydration(svg0, use0);
			append_hydration(span, t0);
			append_hydration(span, svg1);
			append_hydration(svg1, use1);
			append_hydration(details, t1);
			append_hydration(details, div2);
			append_hydration(div2, div0);
			append_hydration(div2, t2);
			append_hydration(div2, div1);
			mount_component(predictivesearch, div1, null);
			append_hydration(div1, t3);
			append_hydration(div1, button);
			append_hydration(button, svg2);
			append_hydration(svg2, use2);
			current = true;
		},
		p(ctx, dirty) {
			const predictivesearch_changes = {};
			if (dirty[0] & /*cart*/ 2097152) predictivesearch_changes.cart = /*cart*/ ctx[21];
			if (dirty[0] & /*shop*/ 1) predictivesearch_changes.shop = /*shop*/ ctx[0];
			if (dirty[0] & /*menu_json*/ 16777216) predictivesearch_changes.menu_json = /*menu_json*/ ctx[24];
			if (dirty[0] & /*settings*/ 33554432) predictivesearch_changes.settings = /*settings*/ ctx[25];
			if (dirty[0] & /*logo_html*/ 67108864) predictivesearch_changes.logo_html = /*logo_html*/ ctx[26];
			if (dirty[0] & /*routes*/ 134217728) predictivesearch_changes.routes = /*routes*/ ctx[27];
			if (dirty[0] & /*request*/ 268435456) predictivesearch_changes.request = /*request*/ ctx[28];
			if (dirty[0] & /*account_url*/ 536870912) predictivesearch_changes.account_url = /*account_url*/ ctx[29];
			if (dirty[0] & /*account_text*/ 1073741824) predictivesearch_changes.account_text = /*account_text*/ ctx[30];
			if (dirty[0] & /*shop$name*/ 4194304) predictivesearch_changes.shop$name = /*shop$name*/ ctx[22];
			if (dirty[0] & /*section$settings*/ 8388608) predictivesearch_changes.section$settings = /*section$settings*/ ctx[23];
			if (dirty[0] & /*rawinclude_b7c846d6*/ 4) predictivesearch_changes.rawinclude_b7c846d6 = /*rawinclude_b7c846d6*/ ctx[2];
			if (dirty[0] & /*rawinclude_5513f9e2*/ 8) predictivesearch_changes.rawinclude_5513f9e2 = /*rawinclude_5513f9e2*/ ctx[3];
			if (dirty[0] & /*rawinclude_548f9315*/ 16) predictivesearch_changes.rawinclude_548f9315 = /*rawinclude_548f9315*/ ctx[4];
			if (dirty[0] & /*rawinclude_76fe91f8*/ 32) predictivesearch_changes.rawinclude_76fe91f8 = /*rawinclude_76fe91f8*/ ctx[5];
			if (dirty[0] & /*rawinclude_2041cdf9*/ 64) predictivesearch_changes.rawinclude_2041cdf9 = /*rawinclude_2041cdf9*/ ctx[6];
			if (dirty[0] & /*rawinclude_7f9a5b3f*/ 128) predictivesearch_changes.rawinclude_7f9a5b3f = /*rawinclude_7f9a5b3f*/ ctx[7];
			if (dirty[0] & /*rawinclude_d7392808*/ 256) predictivesearch_changes.rawinclude_d7392808 = /*rawinclude_d7392808*/ ctx[8];
			if (dirty[0] & /*rawinclude_32303a26*/ 512) predictivesearch_changes.rawinclude_32303a26 = /*rawinclude_32303a26*/ ctx[9];
			if (dirty[0] & /*rawinclude_1c46a520*/ 1024) predictivesearch_changes.rawinclude_1c46a520 = /*rawinclude_1c46a520*/ ctx[10];
			if (dirty[0] & /*rawinclude_f7398384*/ 2048) predictivesearch_changes.rawinclude_f7398384 = /*rawinclude_f7398384*/ ctx[11];
			if (dirty[0] & /*rawinclude_0cce0950*/ 4096) predictivesearch_changes.rawinclude_0cce0950 = /*rawinclude_0cce0950*/ ctx[12];
			if (dirty[0] & /*rawinclude_2fe7f822*/ 8192) predictivesearch_changes.rawinclude_2fe7f822 = /*rawinclude_2fe7f822*/ ctx[13];
			if (dirty[0] & /*rawinclude_46d75d50*/ 16384) predictivesearch_changes.rawinclude_46d75d50 = /*rawinclude_46d75d50*/ ctx[14];
			if (dirty[0] & /*rawinclude_102fa95c*/ 32768) predictivesearch_changes.rawinclude_102fa95c = /*rawinclude_102fa95c*/ ctx[15];
			if (dirty[0] & /*rawinclude_18d5c954*/ 65536) predictivesearch_changes.rawinclude_18d5c954 = /*rawinclude_18d5c954*/ ctx[16];
			if (dirty[0] & /*rawinclude_53f2ac54*/ 131072) predictivesearch_changes.rawinclude_53f2ac54 = /*rawinclude_53f2ac54*/ ctx[17];
			if (dirty[0] & /*rawinclude_679e0e24*/ 262144) predictivesearch_changes.rawinclude_679e0e24 = /*rawinclude_679e0e24*/ ctx[18];
			if (dirty[0] & /*rawinclude_3be65912*/ 524288) predictivesearch_changes.rawinclude_3be65912 = /*rawinclude_3be65912*/ ctx[19];
			if (dirty[0] & /*rawinclude_602baf9d*/ 1048576) predictivesearch_changes.rawinclude_602baf9d = /*rawinclude_602baf9d*/ ctx[20];
			if (dirty[0] & /*lec*/ 2) predictivesearch_changes.lec = /*lec*/ ctx[1];

			if (dirty[0] & /*routes, settings*/ 167772160 | dirty[1] & /*$$scope*/ 4) {
				predictivesearch_changes.$$scope = { dirty, ctx };
			}

			predictivesearch.$set(predictivesearch_changes);

			if (!current || dirty[0] & /*settings*/ 33554432) {
				toggle_class(div1, "search-modal__content-top", /*settings*/ ctx[25].inputs_shadow_vertical_offset != 0 && /*settings*/ ctx[25].inputs_shadow_vertical_offset < 0);
			}

			if (!current || dirty[0] & /*settings*/ 33554432) {
				toggle_class(div1, "search-modal__content-bottom", /*settings*/ ctx[25].inputs_shadow_vertical_offset == 0 || /*settings*/ ctx[25].inputs_shadow_vertical_offset > 0);
			}
		},
		i(local) {
			if (current) return;
			transition_in(predictivesearch.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(predictivesearch.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(details);
			destroy_component(predictivesearch);
		}
	};
}

// (1440:6) {#if shop.customer_accounts_enabled }
function create_if_block_5(ctx) {
	let a;
	let html_tag;
	let raw_value = /*rawinclude_2041cdf9*/ ctx[6][index || 0] + "";
	let t0;
	let span;
	let t1;

	return {
		c() {
			a = element("a");
			html_tag = new HtmlTagHydration(false);
			t0 = space();
			span = element("span");
			t1 = text(/*account_text*/ ctx[30]);
			this.h();
		},
		l(nodes) {
			a = claim_element(nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			html_tag = claim_html_tag(a_nodes, false);
			t0 = claim_space(a_nodes);
			span = claim_element(a_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t1 = claim_text(span_nodes, /*account_text*/ ctx[30]);
			span_nodes.forEach(detach);
			a_nodes.forEach(detach);
			this.h();
		},
		h() {
			html_tag.a = t0;
			attr(span, "class", "visually-hidden svelte-i7v2jh");
			attr(a, "href", /*account_url*/ ctx[29]);
			attr(a, "class", "header__icon header__icon--account link focus-inset svelte-i7v2jh");
			toggle_class(a, "small-hide", /*section*/ ctx[31].settings.menu != '');
		},
		m(target, anchor) {
			insert_hydration(target, a, anchor);
			html_tag.m(raw_value, a);
			append_hydration(a, t0);
			append_hydration(a, span);
			append_hydration(span, t1);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*rawinclude_2041cdf9*/ 64 && raw_value !== (raw_value = /*rawinclude_2041cdf9*/ ctx[6][index || 0] + "")) html_tag.p(raw_value);
			if (dirty[0] & /*account_text*/ 1073741824) set_data(t1, /*account_text*/ ctx[30]);

			if (dirty[0] & /*account_url*/ 536870912) {
				attr(a, "href", /*account_url*/ ctx[29]);
			}

			if (dirty[1] & /*section*/ 1) {
				toggle_class(a, "small-hide", /*section*/ ctx[31].settings.menu != '');
			}
		},
		d(detaching) {
			if (detaching) detach(a);
		}
	};
}

// (1452:10) {:else}
function create_else_block(ctx) {
	let html_tag;
	let raw_value = /*rawinclude_53f2ac54*/ ctx[17][index || 0] + "";
	let html_anchor;

	return {
		c() {
			html_tag = new HtmlTagHydration(false);
			html_anchor = empty();
			this.h();
		},
		l(nodes) {
			html_tag = claim_html_tag(nodes, false);
			html_anchor = empty();
			this.h();
		},
		h() {
			html_tag.a = html_anchor;
		},
		m(target, anchor) {
			html_tag.m(raw_value, target, anchor);
			insert_hydration(target, html_anchor, anchor);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*rawinclude_53f2ac54*/ 131072 && raw_value !== (raw_value = /*rawinclude_53f2ac54*/ ctx[17][index || 0] + "")) html_tag.p(raw_value);
		},
		d(detaching) {
			if (detaching) detach(html_anchor);
			if (detaching) html_tag.d();
		}
	};
}

// (1450:10) {#if cart.items.length == 0 }
function create_if_block_4(ctx) {
	let html_tag;
	let raw_value = /*rawinclude_18d5c954*/ ctx[16][index || 0] + "";
	let html_anchor;

	return {
		c() {
			html_tag = new HtmlTagHydration(false);
			html_anchor = empty();
			this.h();
		},
		l(nodes) {
			html_tag = claim_html_tag(nodes, false);
			html_anchor = empty();
			this.h();
		},
		h() {
			html_tag.a = html_anchor;
		},
		m(target, anchor) {
			html_tag.m(raw_value, target, anchor);
			insert_hydration(target, html_anchor, anchor);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*rawinclude_18d5c954*/ 65536 && raw_value !== (raw_value = /*rawinclude_18d5c954*/ ctx[16][index || 0] + "")) html_tag.p(raw_value);
		},
		d(detaching) {
			if (detaching) detach(html_anchor);
			if (detaching) html_tag.d();
		}
	};
}

// (1456:8) {#if cart.items.length > 0 }
function create_if_block_2(ctx) {
	let div;
	let t0;
	let span;
	let t1_value = /*liquid*/ ctx[32].t('sections.header.cart_count') + "";
	let t1;
	let span_data_translation_value;
	let if_block = /*cart*/ ctx[21].item_count < 100 && create_if_block_3(ctx);

	return {
		c() {
			div = element("div");
			if (if_block) if_block.c();
			t0 = space();
			span = element("span");
			t1 = text(t1_value);
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			if (if_block) if_block.l(div_nodes);
			t0 = claim_space(div_nodes);
			span = claim_element(div_nodes, "SPAN", { class: true, "data-translation": true });
			var span_nodes = children(span);
			t1 = claim_text(span_nodes, t1_value);
			span_nodes.forEach(detach);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(span, "class", "visually-hidden svelte-i7v2jh");
			attr(span, "data-translation", span_data_translation_value = /*liquid*/ ctx[32].t('sections.header.cart_count'));
			attr(div, "class", "cart-count-bubble svelte-i7v2jh");
		},
		m(target, anchor) {
			insert_hydration(target, div, anchor);
			if (if_block) if_block.m(div, null);
			append_hydration(div, t0);
			append_hydration(div, span);
			append_hydration(span, t1);
		},
		p(ctx, dirty) {
			if (/*cart*/ ctx[21].item_count < 100) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_3(ctx);
					if_block.c();
					if_block.m(div, t0);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		d(detaching) {
			if (detaching) detach(div);
			if (if_block) if_block.d();
		}
	};
}

// (1458:12) {#if cart.item_count < 100 }
function create_if_block_3(ctx) {
	let span;
	let t_value = /*cart*/ ctx[21].item_count + "";
	let t;

	return {
		c() {
			span = element("span");
			t = text(t_value);
			this.h();
		},
		l(nodes) {
			span = claim_element(nodes, "SPAN", { "aria-hidden": true, class: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, t_value);
			span_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(span, "aria-hidden", "true");
			attr(span, "class", "svelte-i7v2jh");
		},
		m(target, anchor) {
			insert_hydration(target, span, anchor);
			append_hydration(span, t);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*cart*/ 2097152 && t_value !== (t_value = /*cart*/ ctx[21].item_count + "")) set_data(t, t_value);
		},
		d(detaching) {
			if (detaching) detach(span);
		}
	};
}

// (1469:0) {#if settings.cart_type == "notification" }
function create_if_block_1(ctx) {
	let html_tag;
	let raw_value = /*rawinclude_679e0e24*/ ctx[18][index || 0] + "";
	let html_anchor;

	return {
		c() {
			html_tag = new HtmlTagHydration(false);
			html_anchor = empty();
			this.h();
		},
		l(nodes) {
			html_tag = claim_html_tag(nodes, false);
			html_anchor = empty();
			this.h();
		},
		h() {
			html_tag.a = html_anchor;
		},
		m(target, anchor) {
			html_tag.m(raw_value, target, anchor);
			insert_hydration(target, html_anchor, anchor);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*rawinclude_679e0e24*/ 262144 && raw_value !== (raw_value = /*rawinclude_679e0e24*/ ctx[18][index || 0] + "")) html_tag.p(raw_value);
		},
		d(detaching) {
			if (detaching) detach(html_anchor);
			if (detaching) html_tag.d();
		}
	};
}

// (1475:0) {#if request.page_type == 'index' }
function create_if_block(ctx) {
	let html_tag;
	let raw_value = /*rawinclude_602baf9d*/ ctx[20][index || 0] + "";
	let html_anchor;

	return {
		c() {
			html_tag = new HtmlTagHydration(false);
			html_anchor = empty();
			this.h();
		},
		l(nodes) {
			html_tag = claim_html_tag(nodes, false);
			html_anchor = empty();
			this.h();
		},
		h() {
			html_tag.a = html_anchor;
		},
		m(target, anchor) {
			html_tag.m(raw_value, target, anchor);
			insert_hydration(target, html_anchor, anchor);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*rawinclude_602baf9d*/ 1048576 && raw_value !== (raw_value = /*rawinclude_602baf9d*/ ctx[20][index || 0] + "")) html_tag.p(raw_value);
		},
		d(detaching) {
			if (detaching) detach(html_anchor);
			if (detaching) html_tag.d();
		}
	};
}

function create_fragment(ctx) {
	let div0;
	let html_tag;
	let raw0_value = /*rawinclude_548f9315*/ ctx[4][index || 0] + "";
	let t0;
	let html_tag_1;
	let raw1_value = /*rawinclude_76fe91f8*/ ctx[5][index || 0] + "";
	let t1;
	let html_tag_2;
	let raw2_value = /*rawinclude_2041cdf9*/ ctx[6][index || 0] + "";
	let t2;
	let html_tag_3;
	let raw3_value = /*rawinclude_7f9a5b3f*/ ctx[7][index || 0] + "";
	let t3;
	let html_tag_4;
	let raw4_value = /*rawinclude_d7392808*/ ctx[8][index || 0] + "";
	let t4;
	let html_tag_5;
	let raw5_value = /*rawinclude_32303a26*/ ctx[9][index || 0] + "";
	let t5;
	let html_tag_6;
	let raw6_value = /*rawinclude_1c46a520*/ ctx[10][index || 0] + "";
	let t6;
	let html_tag_7;
	let raw7_value = /*rawinclude_f7398384*/ ctx[11][index || 0] + "";
	let t7;
	let html_tag_8;
	let raw8_value = /*rawinclude_0cce0950*/ ctx[12][index || 0] + "";
	let t8;
	let html_tag_9;
	let raw9_value = /*rawinclude_2fe7f822*/ ctx[13][index || 0] + "";
	let t9;
	let html_tag_10;
	let raw10_value = /*rawinclude_46d75d50*/ ctx[14][index || 0] + "";
	let t10;
	let html_tag_11;
	let raw11_value = /*rawinclude_102fa95c*/ ctx[15][index || 0] + "";
	let t11;
	let html_tag_12;
	let raw12_value = /*rawinclude_5513f9e2*/ ctx[3][index || 0] + "";
	let t12;
	let html_tag_13;
	let raw13_value = /*rawinclude_18d5c954*/ ctx[16][index || 0] + "";
	let t13;
	let html_tag_14;
	let raw14_value = /*rawinclude_53f2ac54*/ ctx[17][index || 0] + "";
	let t14;
	let html_tag_15;
	let raw15_value = /*rawinclude_679e0e24*/ ctx[18][index || 0] + "";
	let t15;
	let html_tag_16;
	let raw16_value = /*rawinclude_3be65912*/ ctx[19][index || 0] + "";
	let t16;
	let html_tag_17;
	let raw17_value = /*rawinclude_602baf9d*/ ctx[20][index || 0] + "";
	let t17;
	let svg;
	let symbol0;
	let path0;
	let symbol1;
	let path1;
	let t18;
	let div2;
	let header;
	let t19;
	let t20;
	let t21;
	let t22;
	let div1;
	let detailsmodal;
	let t23;
	let t24;
	let a;
	let t25;
	let span;
	let t26_value = /*liquid*/ ctx[32].t('templates.cart.cart') + "";
	let t26;
	let span_data_translation_value;
	let t27;
	let a_href_value;
	let header_class_value;
	let div2_class_value;
	let t28;
	let t29;
	let html_tag_18;
	let raw18_value = /*rawinclude_3be65912*/ ctx[19][index || 0] + "";
	let t30;
	let if_block8_anchor;
	let current;
	let if_block0 = /*section*/ ctx[31].settings.menu != '' && create_if_block_19(ctx);
	let if_block1 = (/*section*/ ctx[31].settings.logo_position == 'top-center' || /*section*/ ctx[31].settings.menu == '') && create_if_block_16(ctx);
	let if_block2 = /*section*/ ctx[31].settings.logo_position != 'middle-center' && create_if_block_12(ctx);
	let if_block3 = /*section*/ ctx[31].settings.logo_position == 'middle-center' && create_if_block_8(ctx);

	detailsmodal = new Details_modal({
			props: {
				classes: "header__search",
				cart: /*cart*/ ctx[21],
				shop: /*shop*/ ctx[0],
				menu_json: /*menu_json*/ ctx[24],
				settings: /*settings*/ ctx[25],
				logo_html: /*logo_html*/ ctx[26],
				routes: /*routes*/ ctx[27],
				request: /*request*/ ctx[28],
				account_url: /*account_url*/ ctx[29],
				account_text: /*account_text*/ ctx[30],
				shop$name: /*shop$name*/ ctx[22],
				section$settings: /*section$settings*/ ctx[23],
				rawinclude_b7c846d6: /*rawinclude_b7c846d6*/ ctx[2],
				rawinclude_5513f9e2: /*rawinclude_5513f9e2*/ ctx[3],
				rawinclude_548f9315: /*rawinclude_548f9315*/ ctx[4],
				rawinclude_76fe91f8: /*rawinclude_76fe91f8*/ ctx[5],
				rawinclude_2041cdf9: /*rawinclude_2041cdf9*/ ctx[6],
				rawinclude_7f9a5b3f: /*rawinclude_7f9a5b3f*/ ctx[7],
				rawinclude_d7392808: /*rawinclude_d7392808*/ ctx[8],
				rawinclude_32303a26: /*rawinclude_32303a26*/ ctx[9],
				rawinclude_1c46a520: /*rawinclude_1c46a520*/ ctx[10],
				rawinclude_f7398384: /*rawinclude_f7398384*/ ctx[11],
				rawinclude_0cce0950: /*rawinclude_0cce0950*/ ctx[12],
				rawinclude_2fe7f822: /*rawinclude_2fe7f822*/ ctx[13],
				rawinclude_46d75d50: /*rawinclude_46d75d50*/ ctx[14],
				rawinclude_102fa95c: /*rawinclude_102fa95c*/ ctx[15],
				rawinclude_18d5c954: /*rawinclude_18d5c954*/ ctx[16],
				rawinclude_53f2ac54: /*rawinclude_53f2ac54*/ ctx[17],
				rawinclude_679e0e24: /*rawinclude_679e0e24*/ ctx[18],
				rawinclude_3be65912: /*rawinclude_3be65912*/ ctx[19],
				rawinclude_602baf9d: /*rawinclude_602baf9d*/ ctx[20],
				lec: /*lec*/ ctx[1],
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	let if_block4 = /*shop*/ ctx[0].customer_accounts_enabled && create_if_block_5(ctx);

	function select_block_type_8(ctx, dirty) {
		if (/*cart*/ ctx[21].items.length == 0) return create_if_block_4;
		return create_else_block;
	}

	let current_block_type = select_block_type_8(ctx, [-1, -1]);
	let if_block5 = current_block_type(ctx);
	let if_block6 = /*cart*/ ctx[21].items.length > 0 && create_if_block_2(ctx);
	let if_block7 = /*settings*/ ctx[25].cart_type == "notification" && create_if_block_1(ctx);
	let if_block8 = /*request*/ ctx[28].page_type == 'index' && create_if_block(ctx);

	return {
		c() {
			div0 = element("div");
			html_tag = new HtmlTagHydration(false);
			t0 = space();
			html_tag_1 = new HtmlTagHydration(false);
			t1 = space();
			html_tag_2 = new HtmlTagHydration(false);
			t2 = space();
			html_tag_3 = new HtmlTagHydration(false);
			t3 = space();
			html_tag_4 = new HtmlTagHydration(false);
			t4 = space();
			html_tag_5 = new HtmlTagHydration(false);
			t5 = space();
			html_tag_6 = new HtmlTagHydration(false);
			t6 = space();
			html_tag_7 = new HtmlTagHydration(false);
			t7 = space();
			html_tag_8 = new HtmlTagHydration(false);
			t8 = space();
			html_tag_9 = new HtmlTagHydration(false);
			t9 = space();
			html_tag_10 = new HtmlTagHydration(false);
			t10 = space();
			html_tag_11 = new HtmlTagHydration(false);
			t11 = space();
			html_tag_12 = new HtmlTagHydration(false);
			t12 = space();
			html_tag_13 = new HtmlTagHydration(false);
			t13 = space();
			html_tag_14 = new HtmlTagHydration(false);
			t14 = space();
			html_tag_15 = new HtmlTagHydration(false);
			t15 = space();
			html_tag_16 = new HtmlTagHydration(false);
			t16 = space();
			html_tag_17 = new HtmlTagHydration(false);
			t17 = space();
			svg = svg_element("svg");
			symbol0 = svg_element("symbol");
			path0 = svg_element("path");
			symbol1 = svg_element("symbol");
			path1 = svg_element("path");
			t18 = space();
			div2 = element("div");
			header = element("header");
			if (if_block0) if_block0.c();
			t19 = space();
			if (if_block1) if_block1.c();
			t20 = space();
			if (if_block2) if_block2.c();
			t21 = space();
			if (if_block3) if_block3.c();
			t22 = space();
			div1 = element("div");
			create_component(detailsmodal.$$.fragment);
			t23 = space();
			if (if_block4) if_block4.c();
			t24 = space();
			a = element("a");
			if_block5.c();
			t25 = space();
			span = element("span");
			t26 = text(t26_value);
			t27 = space();
			if (if_block6) if_block6.c();
			t28 = space();
			if (if_block7) if_block7.c();
			t29 = space();
			html_tag_18 = new HtmlTagHydration(false);
			t30 = space();
			if (if_block8) if_block8.c();
			if_block8_anchor = empty();
			this.h();
		},
		l(nodes) {
			div0 = claim_element(nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			html_tag = claim_html_tag(div0_nodes, false);
			t0 = claim_space(div0_nodes);
			html_tag_1 = claim_html_tag(div0_nodes, false);
			t1 = claim_space(div0_nodes);
			html_tag_2 = claim_html_tag(div0_nodes, false);
			t2 = claim_space(div0_nodes);
			html_tag_3 = claim_html_tag(div0_nodes, false);
			t3 = claim_space(div0_nodes);
			html_tag_4 = claim_html_tag(div0_nodes, false);
			t4 = claim_space(div0_nodes);
			html_tag_5 = claim_html_tag(div0_nodes, false);
			t5 = claim_space(div0_nodes);
			html_tag_6 = claim_html_tag(div0_nodes, false);
			t6 = claim_space(div0_nodes);
			html_tag_7 = claim_html_tag(div0_nodes, false);
			t7 = claim_space(div0_nodes);
			html_tag_8 = claim_html_tag(div0_nodes, false);
			t8 = claim_space(div0_nodes);
			html_tag_9 = claim_html_tag(div0_nodes, false);
			t9 = claim_space(div0_nodes);
			html_tag_10 = claim_html_tag(div0_nodes, false);
			t10 = claim_space(div0_nodes);
			html_tag_11 = claim_html_tag(div0_nodes, false);
			t11 = claim_space(div0_nodes);
			html_tag_12 = claim_html_tag(div0_nodes, false);
			t12 = claim_space(div0_nodes);
			html_tag_13 = claim_html_tag(div0_nodes, false);
			t13 = claim_space(div0_nodes);
			html_tag_14 = claim_html_tag(div0_nodes, false);
			t14 = claim_space(div0_nodes);
			html_tag_15 = claim_html_tag(div0_nodes, false);
			t15 = claim_space(div0_nodes);
			html_tag_16 = claim_html_tag(div0_nodes, false);
			t16 = claim_space(div0_nodes);
			html_tag_17 = claim_html_tag(div0_nodes, false);
			div0_nodes.forEach(detach);
			t17 = claim_space(nodes);
			svg = claim_svg_element(nodes, "svg", { xmlns: true, class: true });
			var svg_nodes = children(svg);

			symbol0 = claim_svg_element(svg_nodes, "symbol", {
				id: true,
				viewBox: true,
				fill: true,
				class: true
			});

			var symbol0_nodes = children(symbol0);

			path0 = claim_svg_element(symbol0_nodes, "path", {
				"fill-rule": true,
				"clip-rule": true,
				d: true,
				fill: true,
				class: true
			});

			children(path0).forEach(detach);
			symbol0_nodes.forEach(detach);

			symbol1 = claim_svg_element(svg_nodes, "symbol", {
				id: true,
				class: true,
				fill: true,
				viewBox: true
			});

			var symbol1_nodes = children(symbol1);
			path1 = claim_svg_element(symbol1_nodes, "path", { d: true, fill: true, class: true });
			var path1_nodes = children(path1);
			path1_nodes.forEach(detach);
			symbol1_nodes.forEach(detach);
			svg_nodes.forEach(detach);
			t18 = claim_space(nodes);
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			header = claim_element(div2_nodes, "HEADER", { class: true });
			var header_nodes = children(header);
			if (if_block0) if_block0.l(header_nodes);
			t19 = claim_space(header_nodes);
			if (if_block1) if_block1.l(header_nodes);
			t20 = claim_space(header_nodes);
			if (if_block2) if_block2.l(header_nodes);
			t21 = claim_space(header_nodes);
			if (if_block3) if_block3.l(header_nodes);
			t22 = claim_space(header_nodes);
			div1 = claim_element(header_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			claim_component(detailsmodal.$$.fragment, div1_nodes);
			t23 = claim_space(div1_nodes);
			if (if_block4) if_block4.l(div1_nodes);
			t24 = claim_space(div1_nodes);
			a = claim_element(div1_nodes, "A", { href: true, class: true, id: true });
			var a_nodes = children(a);
			if_block5.l(a_nodes);
			t25 = claim_space(a_nodes);
			span = claim_element(a_nodes, "SPAN", { class: true, "data-translation": true });
			var span_nodes = children(span);
			t26 = claim_text(span_nodes, t26_value);
			span_nodes.forEach(detach);
			t27 = claim_space(a_nodes);
			if (if_block6) if_block6.l(a_nodes);
			a_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			header_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t28 = claim_space(nodes);
			if (if_block7) if_block7.l(nodes);
			t29 = claim_space(nodes);
			html_tag_18 = claim_html_tag(nodes, false);
			t30 = claim_space(nodes);
			if (if_block8) if_block8.l(nodes);
			if_block8_anchor = empty();
			this.h();
		},
		h() {
			html_tag.a = t0;
			html_tag_1.a = t1;
			html_tag_2.a = t2;
			html_tag_3.a = t3;
			html_tag_4.a = t4;
			html_tag_5.a = t5;
			html_tag_6.a = t6;
			html_tag_7.a = t7;
			html_tag_8.a = t8;
			html_tag_9.a = t9;
			html_tag_10.a = t10;
			html_tag_11.a = t11;
			html_tag_12.a = t12;
			html_tag_13.a = t13;
			html_tag_14.a = t14;
			html_tag_15.a = t15;
			html_tag_16.a = t16;
			html_tag_17.a = null;
			attr(div0, "class", "hidden svelte-i7v2jh");
			attr(path0, "fill-rule", "evenodd");
			attr(path0, "clip-rule", "evenodd");
			attr(path0, "d", "M11.03 11.68A5.784 5.784 0 112.85 3.5a5.784 5.784 0 018.18 8.18zm.26 1.12a6.78 6.78 0 11.72-.7l5.4 5.4a.5.5 0 11-.71.7l-5.41-5.4z");
			attr(path0, "fill", "currentColor");
			attr(path0, "class", "svelte-i7v2jh");
			attr(symbol0, "id", "icon-search");
			attr(symbol0, "viewBox", "0 0 18 19");
			attr(symbol0, "fill", "none");
			attr(symbol0, "class", "svelte-i7v2jh");
			attr(path1, "d", "M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z");
			attr(path1, "fill", "currentColor");
			attr(path1, "class", "svelte-i7v2jh");
			attr(symbol1, "id", "icon-close");
			attr(symbol1, "class", "icon icon-close svelte-i7v2jh");
			attr(symbol1, "fill", "none");
			attr(symbol1, "viewBox", "0 0 18 17");
			attr(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr(svg, "class", "hidden svelte-i7v2jh");
			attr(span, "class", "visually-hidden svelte-i7v2jh");
			attr(span, "data-translation", span_data_translation_value = /*liquid*/ ctx[32].t('templates.cart.cart'));
			attr(a, "href", a_href_value = /*routes*/ ctx[27].cart_url);
			attr(a, "class", "header__icon header__icon--cart link focus-inset svelte-i7v2jh");
			attr(a, "id", "cart-icon-bubble");
			attr(div1, "class", "header__icons svelte-i7v2jh");
			attr(header, "class", header_class_value = "header header--" + /*section*/ ctx[31].settings.logo_position + " header--mobile-" + /*section*/ ctx[31].settings.mobile_logo_position + " page-width" + " svelte-i7v2jh");
			toggle_class(header, "header--has-menu", /*section*/ ctx[31].settings.menu);
			attr(div2, "class", div2_class_value = "header-wrapper color-" + /*section*/ ctx[31].settings.color_scheme + " gradient" + " svelte-i7v2jh");
			toggle_class(div2, "header-wrapper--border-bottom", /*section*/ ctx[31].settings.show_line_separator);
			html_tag_18.a = t30;
		},
		m(target, anchor) {
			insert_hydration(target, div0, anchor);
			html_tag.m(raw0_value, div0);
			append_hydration(div0, t0);
			html_tag_1.m(raw1_value, div0);
			append_hydration(div0, t1);
			html_tag_2.m(raw2_value, div0);
			append_hydration(div0, t2);
			html_tag_3.m(raw3_value, div0);
			append_hydration(div0, t3);
			html_tag_4.m(raw4_value, div0);
			append_hydration(div0, t4);
			html_tag_5.m(raw5_value, div0);
			append_hydration(div0, t5);
			html_tag_6.m(raw6_value, div0);
			append_hydration(div0, t6);
			html_tag_7.m(raw7_value, div0);
			append_hydration(div0, t7);
			html_tag_8.m(raw8_value, div0);
			append_hydration(div0, t8);
			html_tag_9.m(raw9_value, div0);
			append_hydration(div0, t9);
			html_tag_10.m(raw10_value, div0);
			append_hydration(div0, t10);
			html_tag_11.m(raw11_value, div0);
			append_hydration(div0, t11);
			html_tag_12.m(raw12_value, div0);
			append_hydration(div0, t12);
			html_tag_13.m(raw13_value, div0);
			append_hydration(div0, t13);
			html_tag_14.m(raw14_value, div0);
			append_hydration(div0, t14);
			html_tag_15.m(raw15_value, div0);
			append_hydration(div0, t15);
			html_tag_16.m(raw16_value, div0);
			append_hydration(div0, t16);
			html_tag_17.m(raw17_value, div0);
			insert_hydration(target, t17, anchor);
			insert_hydration(target, svg, anchor);
			append_hydration(svg, symbol0);
			append_hydration(symbol0, path0);
			append_hydration(svg, symbol1);
			append_hydration(symbol1, path1);
			insert_hydration(target, t18, anchor);
			insert_hydration(target, div2, anchor);
			append_hydration(div2, header);
			if (if_block0) if_block0.m(header, null);
			append_hydration(header, t19);
			if (if_block1) if_block1.m(header, null);
			append_hydration(header, t20);
			if (if_block2) if_block2.m(header, null);
			append_hydration(header, t21);
			if (if_block3) if_block3.m(header, null);
			append_hydration(header, t22);
			append_hydration(header, div1);
			mount_component(detailsmodal, div1, null);
			append_hydration(div1, t23);
			if (if_block4) if_block4.m(div1, null);
			append_hydration(div1, t24);
			append_hydration(div1, a);
			if_block5.m(a, null);
			append_hydration(a, t25);
			append_hydration(a, span);
			append_hydration(span, t26);
			append_hydration(a, t27);
			if (if_block6) if_block6.m(a, null);
			insert_hydration(target, t28, anchor);
			if (if_block7) if_block7.m(target, anchor);
			insert_hydration(target, t29, anchor);
			html_tag_18.m(raw18_value, target, anchor);
			insert_hydration(target, t30, anchor);
			if (if_block8) if_block8.m(target, anchor);
			insert_hydration(target, if_block8_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if ((!current || dirty[0] & /*rawinclude_548f9315*/ 16) && raw0_value !== (raw0_value = /*rawinclude_548f9315*/ ctx[4][index || 0] + "")) html_tag.p(raw0_value);
			if ((!current || dirty[0] & /*rawinclude_76fe91f8*/ 32) && raw1_value !== (raw1_value = /*rawinclude_76fe91f8*/ ctx[5][index || 0] + "")) html_tag_1.p(raw1_value);
			if ((!current || dirty[0] & /*rawinclude_2041cdf9*/ 64) && raw2_value !== (raw2_value = /*rawinclude_2041cdf9*/ ctx[6][index || 0] + "")) html_tag_2.p(raw2_value);
			if ((!current || dirty[0] & /*rawinclude_7f9a5b3f*/ 128) && raw3_value !== (raw3_value = /*rawinclude_7f9a5b3f*/ ctx[7][index || 0] + "")) html_tag_3.p(raw3_value);
			if ((!current || dirty[0] & /*rawinclude_d7392808*/ 256) && raw4_value !== (raw4_value = /*rawinclude_d7392808*/ ctx[8][index || 0] + "")) html_tag_4.p(raw4_value);
			if ((!current || dirty[0] & /*rawinclude_32303a26*/ 512) && raw5_value !== (raw5_value = /*rawinclude_32303a26*/ ctx[9][index || 0] + "")) html_tag_5.p(raw5_value);
			if ((!current || dirty[0] & /*rawinclude_1c46a520*/ 1024) && raw6_value !== (raw6_value = /*rawinclude_1c46a520*/ ctx[10][index || 0] + "")) html_tag_6.p(raw6_value);
			if ((!current || dirty[0] & /*rawinclude_f7398384*/ 2048) && raw7_value !== (raw7_value = /*rawinclude_f7398384*/ ctx[11][index || 0] + "")) html_tag_7.p(raw7_value);
			if ((!current || dirty[0] & /*rawinclude_0cce0950*/ 4096) && raw8_value !== (raw8_value = /*rawinclude_0cce0950*/ ctx[12][index || 0] + "")) html_tag_8.p(raw8_value);
			if ((!current || dirty[0] & /*rawinclude_2fe7f822*/ 8192) && raw9_value !== (raw9_value = /*rawinclude_2fe7f822*/ ctx[13][index || 0] + "")) html_tag_9.p(raw9_value);
			if ((!current || dirty[0] & /*rawinclude_46d75d50*/ 16384) && raw10_value !== (raw10_value = /*rawinclude_46d75d50*/ ctx[14][index || 0] + "")) html_tag_10.p(raw10_value);
			if ((!current || dirty[0] & /*rawinclude_102fa95c*/ 32768) && raw11_value !== (raw11_value = /*rawinclude_102fa95c*/ ctx[15][index || 0] + "")) html_tag_11.p(raw11_value);
			if ((!current || dirty[0] & /*rawinclude_5513f9e2*/ 8) && raw12_value !== (raw12_value = /*rawinclude_5513f9e2*/ ctx[3][index || 0] + "")) html_tag_12.p(raw12_value);
			if ((!current || dirty[0] & /*rawinclude_18d5c954*/ 65536) && raw13_value !== (raw13_value = /*rawinclude_18d5c954*/ ctx[16][index || 0] + "")) html_tag_13.p(raw13_value);
			if ((!current || dirty[0] & /*rawinclude_53f2ac54*/ 131072) && raw14_value !== (raw14_value = /*rawinclude_53f2ac54*/ ctx[17][index || 0] + "")) html_tag_14.p(raw14_value);
			if ((!current || dirty[0] & /*rawinclude_679e0e24*/ 262144) && raw15_value !== (raw15_value = /*rawinclude_679e0e24*/ ctx[18][index || 0] + "")) html_tag_15.p(raw15_value);
			if ((!current || dirty[0] & /*rawinclude_3be65912*/ 524288) && raw16_value !== (raw16_value = /*rawinclude_3be65912*/ ctx[19][index || 0] + "")) html_tag_16.p(raw16_value);
			if ((!current || dirty[0] & /*rawinclude_602baf9d*/ 1048576) && raw17_value !== (raw17_value = /*rawinclude_602baf9d*/ ctx[20][index || 0] + "")) html_tag_17.p(raw17_value);

			if (/*section*/ ctx[31].settings.menu != '') {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty[1] & /*section*/ 1) {
						transition_in(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_19(ctx);
					if_block0.c();
					transition_in(if_block0, 1);
					if_block0.m(header, t19);
				}
			} else if (if_block0) {
				group_outros();

				transition_out(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				check_outros();
			}

			if (/*section*/ ctx[31].settings.logo_position == 'top-center' || /*section*/ ctx[31].settings.menu == '') {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty[1] & /*section*/ 1) {
						transition_in(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block_16(ctx);
					if_block1.c();
					transition_in(if_block1, 1);
					if_block1.m(header, t20);
				}
			} else if (if_block1) {
				group_outros();

				transition_out(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				check_outros();
			}

			if (/*section*/ ctx[31].settings.logo_position != 'middle-center') {
				if (if_block2) {
					if_block2.p(ctx, dirty);
				} else {
					if_block2 = create_if_block_12(ctx);
					if_block2.c();
					if_block2.m(header, t21);
				}
			} else if (if_block2) {
				if_block2.d(1);
				if_block2 = null;
			}

			if (/*section*/ ctx[31].settings.logo_position == 'middle-center') {
				if (if_block3) {
					if_block3.p(ctx, dirty);
				} else {
					if_block3 = create_if_block_8(ctx);
					if_block3.c();
					if_block3.m(header, t22);
				}
			} else if (if_block3) {
				if_block3.d(1);
				if_block3 = null;
			}

			const detailsmodal_changes = {};
			if (dirty[0] & /*cart*/ 2097152) detailsmodal_changes.cart = /*cart*/ ctx[21];
			if (dirty[0] & /*shop*/ 1) detailsmodal_changes.shop = /*shop*/ ctx[0];
			if (dirty[0] & /*menu_json*/ 16777216) detailsmodal_changes.menu_json = /*menu_json*/ ctx[24];
			if (dirty[0] & /*settings*/ 33554432) detailsmodal_changes.settings = /*settings*/ ctx[25];
			if (dirty[0] & /*logo_html*/ 67108864) detailsmodal_changes.logo_html = /*logo_html*/ ctx[26];
			if (dirty[0] & /*routes*/ 134217728) detailsmodal_changes.routes = /*routes*/ ctx[27];
			if (dirty[0] & /*request*/ 268435456) detailsmodal_changes.request = /*request*/ ctx[28];
			if (dirty[0] & /*account_url*/ 536870912) detailsmodal_changes.account_url = /*account_url*/ ctx[29];
			if (dirty[0] & /*account_text*/ 1073741824) detailsmodal_changes.account_text = /*account_text*/ ctx[30];
			if (dirty[0] & /*shop$name*/ 4194304) detailsmodal_changes.shop$name = /*shop$name*/ ctx[22];
			if (dirty[0] & /*section$settings*/ 8388608) detailsmodal_changes.section$settings = /*section$settings*/ ctx[23];
			if (dirty[0] & /*rawinclude_b7c846d6*/ 4) detailsmodal_changes.rawinclude_b7c846d6 = /*rawinclude_b7c846d6*/ ctx[2];
			if (dirty[0] & /*rawinclude_5513f9e2*/ 8) detailsmodal_changes.rawinclude_5513f9e2 = /*rawinclude_5513f9e2*/ ctx[3];
			if (dirty[0] & /*rawinclude_548f9315*/ 16) detailsmodal_changes.rawinclude_548f9315 = /*rawinclude_548f9315*/ ctx[4];
			if (dirty[0] & /*rawinclude_76fe91f8*/ 32) detailsmodal_changes.rawinclude_76fe91f8 = /*rawinclude_76fe91f8*/ ctx[5];
			if (dirty[0] & /*rawinclude_2041cdf9*/ 64) detailsmodal_changes.rawinclude_2041cdf9 = /*rawinclude_2041cdf9*/ ctx[6];
			if (dirty[0] & /*rawinclude_7f9a5b3f*/ 128) detailsmodal_changes.rawinclude_7f9a5b3f = /*rawinclude_7f9a5b3f*/ ctx[7];
			if (dirty[0] & /*rawinclude_d7392808*/ 256) detailsmodal_changes.rawinclude_d7392808 = /*rawinclude_d7392808*/ ctx[8];
			if (dirty[0] & /*rawinclude_32303a26*/ 512) detailsmodal_changes.rawinclude_32303a26 = /*rawinclude_32303a26*/ ctx[9];
			if (dirty[0] & /*rawinclude_1c46a520*/ 1024) detailsmodal_changes.rawinclude_1c46a520 = /*rawinclude_1c46a520*/ ctx[10];
			if (dirty[0] & /*rawinclude_f7398384*/ 2048) detailsmodal_changes.rawinclude_f7398384 = /*rawinclude_f7398384*/ ctx[11];
			if (dirty[0] & /*rawinclude_0cce0950*/ 4096) detailsmodal_changes.rawinclude_0cce0950 = /*rawinclude_0cce0950*/ ctx[12];
			if (dirty[0] & /*rawinclude_2fe7f822*/ 8192) detailsmodal_changes.rawinclude_2fe7f822 = /*rawinclude_2fe7f822*/ ctx[13];
			if (dirty[0] & /*rawinclude_46d75d50*/ 16384) detailsmodal_changes.rawinclude_46d75d50 = /*rawinclude_46d75d50*/ ctx[14];
			if (dirty[0] & /*rawinclude_102fa95c*/ 32768) detailsmodal_changes.rawinclude_102fa95c = /*rawinclude_102fa95c*/ ctx[15];
			if (dirty[0] & /*rawinclude_18d5c954*/ 65536) detailsmodal_changes.rawinclude_18d5c954 = /*rawinclude_18d5c954*/ ctx[16];
			if (dirty[0] & /*rawinclude_53f2ac54*/ 131072) detailsmodal_changes.rawinclude_53f2ac54 = /*rawinclude_53f2ac54*/ ctx[17];
			if (dirty[0] & /*rawinclude_679e0e24*/ 262144) detailsmodal_changes.rawinclude_679e0e24 = /*rawinclude_679e0e24*/ ctx[18];
			if (dirty[0] & /*rawinclude_3be65912*/ 524288) detailsmodal_changes.rawinclude_3be65912 = /*rawinclude_3be65912*/ ctx[19];
			if (dirty[0] & /*rawinclude_602baf9d*/ 1048576) detailsmodal_changes.rawinclude_602baf9d = /*rawinclude_602baf9d*/ ctx[20];
			if (dirty[0] & /*lec*/ 2) detailsmodal_changes.lec = /*lec*/ ctx[1];

			if (dirty[0] & /*settings, cart, shop, menu_json, logo_html, routes, request, account_url, account_text, shop$name, section$settings, rawinclude_b7c846d6, rawinclude_5513f9e2, rawinclude_548f9315, rawinclude_76fe91f8, rawinclude_2041cdf9, rawinclude_7f9a5b3f, rawinclude_d7392808, rawinclude_32303a26, rawinclude_1c46a520, rawinclude_f7398384, rawinclude_0cce0950, rawinclude_2fe7f822, rawinclude_46d75d50, rawinclude_102fa95c, rawinclude_18d5c954, rawinclude_53f2ac54, rawinclude_679e0e24, rawinclude_3be65912, rawinclude_602baf9d, lec*/ 2147483647 | dirty[1] & /*$$scope*/ 4) {
				detailsmodal_changes.$$scope = { dirty, ctx };
			}

			detailsmodal.$set(detailsmodal_changes);

			if (/*shop*/ ctx[0].customer_accounts_enabled) {
				if (if_block4) {
					if_block4.p(ctx, dirty);
				} else {
					if_block4 = create_if_block_5(ctx);
					if_block4.c();
					if_block4.m(div1, t24);
				}
			} else if (if_block4) {
				if_block4.d(1);
				if_block4 = null;
			}

			if (current_block_type === (current_block_type = select_block_type_8(ctx, dirty)) && if_block5) {
				if_block5.p(ctx, dirty);
			} else {
				if_block5.d(1);
				if_block5 = current_block_type(ctx);

				if (if_block5) {
					if_block5.c();
					if_block5.m(a, t25);
				}
			}

			if (/*cart*/ ctx[21].items.length > 0) {
				if (if_block6) {
					if_block6.p(ctx, dirty);
				} else {
					if_block6 = create_if_block_2(ctx);
					if_block6.c();
					if_block6.m(a, null);
				}
			} else if (if_block6) {
				if_block6.d(1);
				if_block6 = null;
			}

			if (!current || dirty[0] & /*routes*/ 134217728 && a_href_value !== (a_href_value = /*routes*/ ctx[27].cart_url)) {
				attr(a, "href", a_href_value);
			}

			if (!current || dirty[1] & /*section*/ 1 && header_class_value !== (header_class_value = "header header--" + /*section*/ ctx[31].settings.logo_position + " header--mobile-" + /*section*/ ctx[31].settings.mobile_logo_position + " page-width" + " svelte-i7v2jh")) {
				attr(header, "class", header_class_value);
			}

			if (!current || dirty[1] & /*section, section*/ 1) {
				toggle_class(header, "header--has-menu", /*section*/ ctx[31].settings.menu);
			}

			if (!current || dirty[1] & /*section*/ 1 && div2_class_value !== (div2_class_value = "header-wrapper color-" + /*section*/ ctx[31].settings.color_scheme + " gradient" + " svelte-i7v2jh")) {
				attr(div2, "class", div2_class_value);
			}

			if (!current || dirty[1] & /*section, section*/ 1) {
				toggle_class(div2, "header-wrapper--border-bottom", /*section*/ ctx[31].settings.show_line_separator);
			}

			if (/*settings*/ ctx[25].cart_type == "notification") {
				if (if_block7) {
					if_block7.p(ctx, dirty);
				} else {
					if_block7 = create_if_block_1(ctx);
					if_block7.c();
					if_block7.m(t29.parentNode, t29);
				}
			} else if (if_block7) {
				if_block7.d(1);
				if_block7 = null;
			}

			if ((!current || dirty[0] & /*rawinclude_3be65912*/ 524288) && raw18_value !== (raw18_value = /*rawinclude_3be65912*/ ctx[19][index || 0] + "")) html_tag_18.p(raw18_value);

			if (/*request*/ ctx[28].page_type == 'index') {
				if (if_block8) {
					if_block8.p(ctx, dirty);
				} else {
					if_block8 = create_if_block(ctx);
					if_block8.c();
					if_block8.m(if_block8_anchor.parentNode, if_block8_anchor);
				}
			} else if (if_block8) {
				if_block8.d(1);
				if_block8 = null;
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block0);
			transition_in(if_block1);
			transition_in(detailsmodal.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(if_block0);
			transition_out(if_block1);
			transition_out(detailsmodal.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div0);
			if (detaching) detach(t17);
			if (detaching) detach(svg);
			if (detaching) detach(t18);
			if (detaching) detach(div2);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			if (if_block2) if_block2.d();
			if (if_block3) if_block3.d();
			destroy_component(detailsmodal);
			if (if_block4) if_block4.d();
			if_block5.d();
			if (if_block6) if_block6.d();
			if (detaching) detach(t28);
			if (if_block7) if_block7.d(detaching);
			if (detaching) detach(t29);
			if (detaching) html_tag_18.d();
			if (detaching) detach(t30);
			if (if_block8) if_block8.d(detaching);
			if (detaching) detach(if_block8_anchor);
		}
	};
}

let index = 0;

function instance($$self, $$props, $$invalidate) {
	let { lec } = $$props;
	const liquid = cachedLiquid(lec);
	let { rawinclude_b7c846d6 } = $$props;
	let { rawinclude_5513f9e2 } = $$props;
	let { rawinclude_548f9315 } = $$props;
	let { rawinclude_76fe91f8 } = $$props;
	let { rawinclude_2041cdf9 } = $$props;
	let { rawinclude_7f9a5b3f } = $$props;
	let { rawinclude_d7392808 } = $$props;
	let { rawinclude_32303a26 } = $$props;
	let { rawinclude_1c46a520 } = $$props;
	let { rawinclude_f7398384 } = $$props;
	let { rawinclude_0cce0950 } = $$props;
	let { rawinclude_2fe7f822 } = $$props;
	let { rawinclude_46d75d50 } = $$props;
	let { rawinclude_102fa95c } = $$props;
	let { rawinclude_18d5c954 } = $$props;
	let { rawinclude_53f2ac54 } = $$props;
	let { rawinclude_679e0e24 } = $$props;
	let { rawinclude_3be65912 } = $$props;
	let { rawinclude_602baf9d } = $$props;
	let { cart } = $$props;
	let { shop } = $$props;
	let { shop$name } = $$props;
	shop.name = shop$name;
	const section = {};
	let { section$settings } = $$props;
	section.settings = section$settings;
	let { menu_json } = $$props;
	section.settings.menu = JSON.parse(menu_json);
	let { settings } = $$props;
	let { logo_html } = $$props;
	console.log('settings ', settings);
	let { routes } = $$props;
	let { request } = $$props;
	let { account_url } = $$props;
	let { account_text } = $$props;
	console.log('section header ', section);
	console.log('section.settings.menu ', section.settings.menu);

	$$self.$$set = $$props => {
		if ('lec' in $$props) $$invalidate(1, lec = $$props.lec);
		if ('rawinclude_b7c846d6' in $$props) $$invalidate(2, rawinclude_b7c846d6 = $$props.rawinclude_b7c846d6);
		if ('rawinclude_5513f9e2' in $$props) $$invalidate(3, rawinclude_5513f9e2 = $$props.rawinclude_5513f9e2);
		if ('rawinclude_548f9315' in $$props) $$invalidate(4, rawinclude_548f9315 = $$props.rawinclude_548f9315);
		if ('rawinclude_76fe91f8' in $$props) $$invalidate(5, rawinclude_76fe91f8 = $$props.rawinclude_76fe91f8);
		if ('rawinclude_2041cdf9' in $$props) $$invalidate(6, rawinclude_2041cdf9 = $$props.rawinclude_2041cdf9);
		if ('rawinclude_7f9a5b3f' in $$props) $$invalidate(7, rawinclude_7f9a5b3f = $$props.rawinclude_7f9a5b3f);
		if ('rawinclude_d7392808' in $$props) $$invalidate(8, rawinclude_d7392808 = $$props.rawinclude_d7392808);
		if ('rawinclude_32303a26' in $$props) $$invalidate(9, rawinclude_32303a26 = $$props.rawinclude_32303a26);
		if ('rawinclude_1c46a520' in $$props) $$invalidate(10, rawinclude_1c46a520 = $$props.rawinclude_1c46a520);
		if ('rawinclude_f7398384' in $$props) $$invalidate(11, rawinclude_f7398384 = $$props.rawinclude_f7398384);
		if ('rawinclude_0cce0950' in $$props) $$invalidate(12, rawinclude_0cce0950 = $$props.rawinclude_0cce0950);
		if ('rawinclude_2fe7f822' in $$props) $$invalidate(13, rawinclude_2fe7f822 = $$props.rawinclude_2fe7f822);
		if ('rawinclude_46d75d50' in $$props) $$invalidate(14, rawinclude_46d75d50 = $$props.rawinclude_46d75d50);
		if ('rawinclude_102fa95c' in $$props) $$invalidate(15, rawinclude_102fa95c = $$props.rawinclude_102fa95c);
		if ('rawinclude_18d5c954' in $$props) $$invalidate(16, rawinclude_18d5c954 = $$props.rawinclude_18d5c954);
		if ('rawinclude_53f2ac54' in $$props) $$invalidate(17, rawinclude_53f2ac54 = $$props.rawinclude_53f2ac54);
		if ('rawinclude_679e0e24' in $$props) $$invalidate(18, rawinclude_679e0e24 = $$props.rawinclude_679e0e24);
		if ('rawinclude_3be65912' in $$props) $$invalidate(19, rawinclude_3be65912 = $$props.rawinclude_3be65912);
		if ('rawinclude_602baf9d' in $$props) $$invalidate(20, rawinclude_602baf9d = $$props.rawinclude_602baf9d);
		if ('cart' in $$props) $$invalidate(21, cart = $$props.cart);
		if ('shop' in $$props) $$invalidate(0, shop = $$props.shop);
		if ('shop$name' in $$props) $$invalidate(22, shop$name = $$props.shop$name);
		if ('section$settings' in $$props) $$invalidate(23, section$settings = $$props.section$settings);
		if ('menu_json' in $$props) $$invalidate(24, menu_json = $$props.menu_json);
		if ('settings' in $$props) $$invalidate(25, settings = $$props.settings);
		if ('logo_html' in $$props) $$invalidate(26, logo_html = $$props.logo_html);
		if ('routes' in $$props) $$invalidate(27, routes = $$props.routes);
		if ('request' in $$props) $$invalidate(28, request = $$props.request);
		if ('account_url' in $$props) $$invalidate(29, account_url = $$props.account_url);
		if ('account_text' in $$props) $$invalidate(30, account_text = $$props.account_text);
	};

	return [
		shop,
		lec,
		rawinclude_b7c846d6,
		rawinclude_5513f9e2,
		rawinclude_548f9315,
		rawinclude_76fe91f8,
		rawinclude_2041cdf9,
		rawinclude_7f9a5b3f,
		rawinclude_d7392808,
		rawinclude_32303a26,
		rawinclude_1c46a520,
		rawinclude_f7398384,
		rawinclude_0cce0950,
		rawinclude_2fe7f822,
		rawinclude_46d75d50,
		rawinclude_102fa95c,
		rawinclude_18d5c954,
		rawinclude_53f2ac54,
		rawinclude_679e0e24,
		rawinclude_3be65912,
		rawinclude_602baf9d,
		cart,
		shop$name,
		section$settings,
		menu_json,
		settings,
		logo_html,
		routes,
		request,
		account_url,
		account_text,
		section,
		liquid
	];
}

class Header extends SvelteComponent {
	constructor(options) {
		super();

		init(
			this,
			options,
			instance,
			create_fragment,
			safe_not_equal,
			{
				lec: 1,
				rawinclude_b7c846d6: 2,
				rawinclude_5513f9e2: 3,
				rawinclude_548f9315: 4,
				rawinclude_76fe91f8: 5,
				rawinclude_2041cdf9: 6,
				rawinclude_7f9a5b3f: 7,
				rawinclude_d7392808: 8,
				rawinclude_32303a26: 9,
				rawinclude_1c46a520: 10,
				rawinclude_f7398384: 11,
				rawinclude_0cce0950: 12,
				rawinclude_2fe7f822: 13,
				rawinclude_46d75d50: 14,
				rawinclude_102fa95c: 15,
				rawinclude_18d5c954: 16,
				rawinclude_53f2ac54: 17,
				rawinclude_679e0e24: 18,
				rawinclude_3be65912: 19,
				rawinclude_602baf9d: 20,
				cart: 21,
				shop: 0,
				shop$name: 22,
				section$settings: 23,
				menu_json: 24,
				settings: 25,
				logo_html: 26,
				routes: 27,
				request: 28,
				account_url: 29,
				account_text: 30
			},
			null,
			[-1, -1]
		);
	}
}

var index$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Header
});

export { Header, addToCart, disableScrollOnBody, enableScrollOnBody, index$1 as index };
