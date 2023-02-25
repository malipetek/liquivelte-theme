import { SvelteComponent, init, safe_not_equal, empty, insert_hydration, group_outros, transition_out, check_outros, transition_in, detach, getContext, assign, exclude_internal_props, create_component, claim_component, mount_component, destroy_component, noop, binding_callbacks, bind, add_flush_callback, component_subscribe, space, claim_space, element, text, claim_element, children, claim_text, attr, append_hydration, set_data, src_url_equal, destroy_each } from './liquivelte-svelte-hs8b900a8a.liquivelte.js';
import './framework7-liquivelte-hs01c0185d.liquivelte.js';
import { Block_title } from './framework7-liquivelte-block-title-hs296de5dc.liquivelte.js';
import { Block } from './framework7-liquivelte-block-hsf6073460.liquivelte.js';
import { Swiper_slide } from './framework7-liquivelte-swiper-slide-hsc608f6d3.liquivelte.js';
import { Swiper_1 } from './framework7-liquivelte-swiper-hs96468327.liquivelte.js';
import { freeMode, Mousewheel, Pagination } from './framework7-liquivelte-get-params-hsf7b0a459.liquivelte.js';
import { cachedLiquid } from './liquivelte-liquid-hs9c1bba77.liquivelte.js';
import { Card_content } from './framework7-liquivelte-card-content-hs3f4af6ef.liquivelte.js';
import { Card_footer } from './framework7-liquivelte-card-footer-hs1b97a5bf.liquivelte.js';
import { Card_header } from './framework7-liquivelte-card-header-hs0b4f7c78.liquivelte.js';
import { Card } from './framework7-liquivelte-card-hs3e5699f3.liquivelte.js';
import { Link } from './framework7-liquivelte-link-hs0fd8a504.liquivelte.js';
import { cartStore } from './store.js-hs786c2939.liquivelte.js';
import { Button } from './framework7-liquivelte-button-hsf3bf6e97.liquivelte.js';
import { Stepper } from './framework7-liquivelte-stepper-hs2317c2c8.liquivelte.js';
import { Icon, Loadable, Image } from './header-hs7f598b85.liquivelte.js';

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

/**
 * @typedef {object} AddToCartResult
 * @property any
 */
/**
 * @param  {Object} Props
 * @returns 
 */
async function addToCart({
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


async function updateLineItem(itemid, quantity) {
  await fetch(`/cart/update.js`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
        updates: { [itemid]: quantity }
    })
  });
  const cartResponse = await fetch('/cart.js');
  const newCartData = await cartResponse.json();
  return newCartData;
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

function srcset({ source, sizes, square, liquid }) {
  const image_test_mode = (new URL(window.location.href)).searchParams.has('sizetest');
  const default_sizes = '320@320, 640@640, 768@768, 960@960, 1024@1024, 1280@1280, 1440@1440, 1536@1536, 1920@1920';
  sizes = sizes.indexOf('%') > -1 || sizes.indexOf('vw') > -1 ? default_sizes.replace(/ /g, '').split(',') : sizes.replace(/ /g, '').split(',');
  const aspect_ratio = source.aspect_ratio || (source.aspect_ratio > 0 ? source.aspect_ratio : 1);

  let srcset = '';
  for (const size of sizes) {
    const [img_width, _] = size.split('@');
    const img_width_x2 = img_width * 2;
    const img_width_x3 = img_width * 3;

    if (image_test_mode) {
      srcset += `https://via.placeholder.com/${img_width}x${square ? img_width : Math.ceil(img_width / aspect_ratio)}w,`;
      srcset += `https://via.placeholder.com/${img_width_x2}x${square ? img_width_x2 : Math.ceil(img_width_x2 / aspect_ratio)}w,`;
      srcset += `https://via.placeholder.com/${img_width_x3}x${square ? img_width_x3 : Math.ceil(img_width_x3 / aspect_ratio)}w`;
    } else {
      if (square) {
        srcset += `${liquid.image_url(source, { width: img_width, height: img_width })} ${img_width}w, `;
        srcset += `${liquid.image_url(source, { width: img_width_x2, height: img_width_x2 })} ${img_width_x2}w, `;
        srcset += `${liquid.image_url(source, { width: img_width_x3, height: img_width_x3 })} ${img_width_x3}w `;
      } else {
        if (square === true) {
          srcset += `${liquid.image_url(source, { width: `${img_width} x`, height: `${img_width} x` })} ${img_width}w, `;
          srcset += `${liquid.image_url(source, { width: `${img_width_x2} x`, height: `${img_width_x2} x` })} ${img_width_x2}w, `;
          srcset += `${liquid.image_url(source, { width: `${img_width_x3} x`, height: `${img_width_x3} x` })} ${img_width_x3}w`;
        } else {
          srcset += `${liquid.image_url(source, { width: img_width, height: Math.ceil(img_width / aspect_ratio) })} ${img_width}w, `;
          srcset += `${liquid.image_url(source, { width: img_width_x2, height: Math.ceil(img_width_x2 / aspect_ratio) })} ${img_width_x2}w, `;
          srcset += `${liquid.image_url(source, { width: img_width_x3, height: Math.ceil(img_width_x3 / aspect_ratio) })} ${img_width_x3}w`;
        }
      }
    }
  }

  return srcset;
}

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/src/snippets/vertical-stepper.liquivelte generated by Svelte v3.50.0 */

function create_else_block$1(ctx) {
	let button;
	let current;

	button = new Button({
			props: {
				onClick: /*onClick*/ ctx[1],
				large: true,
				raised: true,
				outline: true,
				disabled: /*disabled*/ ctx[2],
				classes: "bg-themebg",
				$$slots: { default: [create_default_slot$2] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(button.$$.fragment);
		},
		l(nodes) {
			claim_component(button.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(button, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const button_changes = {};
			if (dirty & /*onClick*/ 2) button_changes.onClick = /*onClick*/ ctx[1];
			if (dirty & /*disabled*/ 4) button_changes.disabled = /*disabled*/ ctx[2];

			if (dirty & /*$$scope*/ 4096) {
				button_changes.$$scope = { dirty, ctx };
			}

			button.$set(button_changes);
		},
		i(local) {
			if (current) return;
			transition_in(button.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(button.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(button, detaching);
		}
	};
}

// (24:0) {#if value != 0 }
function create_if_block$1(ctx) {
	let stepper;
	let current;

	stepper = new Stepper({
			props: {
				classes: "vertical ",
				onChange: /*onChange*/ ctx[0],
				value: /*value*/ ctx[3],
				small: true
			}
		});

	return {
		c() {
			create_component(stepper.$$.fragment);
		},
		l(nodes) {
			claim_component(stepper.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(stepper, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const stepper_changes = {};
			if (dirty & /*onChange*/ 1) stepper_changes.onChange = /*onChange*/ ctx[0];
			if (dirty & /*value*/ 8) stepper_changes.value = /*value*/ ctx[3];
			stepper.$set(stepper_changes);
		},
		i(local) {
			if (current) return;
			transition_in(stepper.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(stepper.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(stepper, detaching);
		}
	};
}

// (27:4) <Button            onClick="{onClick}"         large         raised         outline         disabled="{ disabled }"          classes="bg-themebg"          >
function create_default_slot$2(ctx) {
	let icon;
	let current;

	icon = new Icon({
			props: { name: "icon-plus", width: "20" }
		});

	return {
		c() {
			create_component(icon.$$.fragment);
		},
		l(nodes) {
			claim_component(icon.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(icon, target, anchor);
			current = true;
		},
		p: noop,
		i(local) {
			if (current) return;
			transition_in(icon.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(icon.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(icon, detaching);
		}
	};
}

function create_fragment$2(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block$1, create_else_block$1];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*value*/ ctx[3] != 0) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

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
			if_blocks[current_block_type_index].m(target, anchor);
			insert_hydration(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				transition_in(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
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
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

function instance$2($$self, $$props, $$invalidate) {
	let { importsSeek = 'lower' } = $$props;
	getContext('svelteProps') || {};
	getContext('lec') || {};
	(() => window.cicR = $$props.resetCicR ? 1 : window.cicR + 1)();
	let { onChange = () => 1 } = $$props;
	let { onClick = () => 1 } = $$props;
	let { disabled = false } = $$props;
	let { small } = $$props;
	let { large } = $$props;
	let { value = 0 } = $$props;

	$$self.$$set = $$new_props => {
		$$invalidate(11, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ('importsSeek' in $$new_props) $$invalidate(4, importsSeek = $$new_props.importsSeek);
		if ('onChange' in $$new_props) $$invalidate(0, onChange = $$new_props.onChange);
		if ('onClick' in $$new_props) $$invalidate(1, onClick = $$new_props.onClick);
		if ('disabled' in $$new_props) $$invalidate(2, disabled = $$new_props.disabled);
		if ('small' in $$new_props) $$invalidate(5, small = $$new_props.small);
		if ('large' in $$new_props) $$invalidate(6, large = $$new_props.large);
		if ('value' in $$new_props) $$invalidate(3, value = $$new_props.value);
	};

	$$props = exclude_internal_props($$props);
	return [onChange, onClick, disabled, value, importsSeek, small, large];
}

class Vertical_stepper extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance$2, create_fragment$2, safe_not_equal, {
			importsSeek: 4,
			onChange: 0,
			onClick: 1,
			disabled: 2,
			small: 5,
			large: 6,
			value: 3
		});
	}
}

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/src/snippets/product-card.liquivelte generated by Svelte v3.50.0 */

function create_default_slot_6(ctx) {
	let verticalstepper;
	let updating_value;
	let current;

	function verticalstepper_value_binding(value) {
		/*verticalstepper_value_binding*/ ctx[11](value);
	}

	let verticalstepper_props = {
		small: true,
		disabled: !/*product*/ ctx[1].available,
		onChange: /*quantityChange*/ ctx[8].bind(/*cartItem*/ ctx[2]),
		onClick: /*addToCart*/ ctx[7]
	};

	if (/*quantity*/ ctx[5] !== void 0) {
		verticalstepper_props.value = /*quantity*/ ctx[5];
	}

	verticalstepper = new Vertical_stepper({ props: verticalstepper_props });
	binding_callbacks.push(() => bind(verticalstepper, 'value', verticalstepper_value_binding));

	return {
		c() {
			create_component(verticalstepper.$$.fragment);
		},
		l(nodes) {
			claim_component(verticalstepper.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(verticalstepper, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const verticalstepper_changes = {};
			if (dirty & /*product*/ 2) verticalstepper_changes.disabled = !/*product*/ ctx[1].available;
			if (dirty & /*cartItem*/ 4) verticalstepper_changes.onChange = /*quantityChange*/ ctx[8].bind(/*cartItem*/ ctx[2]);

			if (!updating_value && dirty & /*quantity*/ 32) {
				updating_value = true;
				verticalstepper_changes.value = /*quantity*/ ctx[5];
				add_flush_callback(() => updating_value = false);
			}

			verticalstepper.$set(verticalstepper_changes);
		},
		i(local) {
			if (current) return;
			transition_in(verticalstepper.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(verticalstepper.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(verticalstepper, detaching);
		}
	};
}

// (69:6) {:else}
function create_else_block(ctx) {
	let image;
	let current;

	image = new Image({
			props: {
				source: /*product*/ ctx[1].featured_image,
				style: "aspect-ratio: " + /*product*/ ctx[1].featured_image.aspect_ratio,
				sizes: "300@fixed"
			}
		});

	return {
		c() {
			create_component(image.$$.fragment);
		},
		l(nodes) {
			claim_component(image.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(image, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const image_changes = {};
			if (dirty & /*product*/ 2) image_changes.source = /*product*/ ctx[1].featured_image;
			if (dirty & /*product*/ 2) image_changes.style = "aspect-ratio: " + /*product*/ ctx[1].featured_image.aspect_ratio;
			image.$set(image_changes);
		},
		i(local) {
			if (current) return;
			transition_in(image.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(image.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(image, detaching);
		}
	};
}

// (62:6) {#if initialRender == false }
function create_if_block(ctx) {
	let img;
	let img_srcset_value;
	let img_src_value;
	let img_alt_value;

	return {
		c() {
			img = element("img");
			this.h();
		},
		l(nodes) {
			img = claim_element(nodes, "IMG", {
				srcset: true,
				sizes: true,
				src: true,
				alt: true
			});

			this.h();
		},
		h() {
			attr(img, "srcset", img_srcset_value = srcset({
				liquid: /*liquid*/ ctx[6],
				source: /*product*/ ctx[1].media[0],
				sizes: '300@fixed'
			}));

			attr(img, "sizes", "300px");
			if (!src_url_equal(img.src, img_src_value = /*product*/ ctx[1].media[0].src)) attr(img, "src", img_src_value);
			attr(img, "alt", img_alt_value = /*product*/ ctx[1].media[0].alt);
		},
		m(target, anchor) {
			insert_hydration(target, img, anchor);
			/*img_binding*/ ctx[12](img);
		},
		p(ctx, dirty) {
			if (dirty & /*product*/ 2 && img_srcset_value !== (img_srcset_value = srcset({
				liquid: /*liquid*/ ctx[6],
				source: /*product*/ ctx[1].media[0],
				sizes: '300@fixed'
			}))) {
				attr(img, "srcset", img_srcset_value);
			}

			if (dirty & /*product*/ 2 && !src_url_equal(img.src, img_src_value = /*product*/ ctx[1].media[0].src)) {
				attr(img, "src", img_src_value);
			}

			if (dirty & /*product*/ 2 && img_alt_value !== (img_alt_value = /*product*/ ctx[1].media[0].alt)) {
				attr(img, "alt", img_alt_value);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(img);
			/*img_binding*/ ctx[12](null);
		}
	};
}

// (61:4) <Link  href="/products/{ product.handle }" >
function create_default_slot_5(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*initialRender*/ ctx[0] == false) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

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
			if_blocks[current_block_type_index].m(target, anchor);
			insert_hydration(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				transition_in(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
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
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

// (57:2) <CardHeader    classes="no-border"   valign="bottom"    >
function create_default_slot_4(ctx) {
	let link;
	let current;

	link = new Link({
			props: {
				href: "/products/" + /*product*/ ctx[1].handle,
				$$slots: { default: [create_default_slot_5] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(link.$$.fragment);
		},
		l(nodes) {
			claim_component(link.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(link, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const link_changes = {};
			if (dirty & /*product*/ 2) link_changes.href = "/products/" + /*product*/ ctx[1].handle;

			if (dirty & /*$$scope, product, imageElement, initialRender*/ 524307) {
				link_changes.$$scope = { dirty, ctx };
			}

			link.$set(link_changes);
		},
		i(local) {
			if (current) return;
			transition_in(link.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(link.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(link, detaching);
		}
	};
}

// (77:2) <CardContent  >
function create_default_slot_3$1(ctx) {
	let h3;
	let t0_value = /*product*/ ctx[1].title + "";
	let t0;
	let t1;
	let div;
	let t2_value = /*liquid*/ ctx[6].money(/*product*/ ctx[1].price) + "";
	let t2;

	return {
		c() {
			h3 = element("h3");
			t0 = text(t0_value);
			t1 = space();
			div = element("div");
			t2 = text(t2_value);
			this.h();
		},
		l(nodes) {
			h3 = claim_element(nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			t0 = claim_text(h3_nodes, t0_value);
			h3_nodes.forEach(detach);
			t1 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			t2 = claim_text(div_nodes, t2_value);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(h3, "class", "text-lg");
			attr(div, "class", "text-theme text-base");
		},
		m(target, anchor) {
			insert_hydration(target, h3, anchor);
			append_hydration(h3, t0);
			insert_hydration(target, t1, anchor);
			insert_hydration(target, div, anchor);
			append_hydration(div, t2);
		},
		p(ctx, dirty) {
			if (dirty & /*product*/ 2 && t0_value !== (t0_value = /*product*/ ctx[1].title + "")) set_data(t0, t0_value);
			if (dirty & /*product*/ 2 && t2_value !== (t2_value = /*liquid*/ ctx[6].money(/*product*/ ctx[1].price) + "")) set_data(t2, t2_value);
		},
		d(detaching) {
			if (detaching) detach(h3);
			if (detaching) detach(t1);
			if (detaching) detach(div);
		}
	};
}

// (87:4) <Link  >
function create_default_slot_2$1(ctx) {
	let t;

	return {
		c() {
			t = text("Details");
		},
		l(nodes) {
			t = claim_text(nodes, "Details");
		},
		m(target, anchor) {
			insert_hydration(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (86:2) <CardFooter  >
function create_default_slot_1$1(ctx) {
	let link;
	let current;

	link = new Link({
			props: {
				$$slots: { default: [create_default_slot_2$1] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(link.$$.fragment);
		},
		l(nodes) {
			claim_component(link.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(link, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const link_changes = {};

			if (dirty & /*$$scope*/ 524288) {
				link_changes.$$scope = { dirty, ctx };
			}

			link.$set(link_changes);
		},
		i(local) {
			if (current) return;
			transition_in(link.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(link.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(link, detaching);
		}
	};
}

// (49:0) <Card  classes="card-header-pic" swipeToClose hideToolbarOnOpen hideNavbarOnOpen bind:expandableOpened="{expandableOpened}" >
function create_default_slot$1(ctx) {
	let loadable;
	let t0;
	let cardheader;
	let t1;
	let cardcontent;
	let t2;
	let cardfooter;
	let current;

	loadable = new Loadable({
			props: {
				classes: "absolute -right-[10px] -top-[10px] z-10",
				centered: true,
				$$slots: { default: [create_default_slot_6] },
				$$scope: { ctx }
			}
		});

	cardheader = new Card_header({
			props: {
				classes: "no-border",
				valign: "bottom",
				$$slots: { default: [create_default_slot_4] },
				$$scope: { ctx }
			}
		});

	cardcontent = new Card_content({
			props: {
				$$slots: { default: [create_default_slot_3$1] },
				$$scope: { ctx }
			}
		});

	cardfooter = new Card_footer({
			props: {
				$$slots: { default: [create_default_slot_1$1] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(loadable.$$.fragment);
			t0 = space();
			create_component(cardheader.$$.fragment);
			t1 = space();
			create_component(cardcontent.$$.fragment);
			t2 = space();
			create_component(cardfooter.$$.fragment);
		},
		l(nodes) {
			claim_component(loadable.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(cardheader.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(cardcontent.$$.fragment, nodes);
			t2 = claim_space(nodes);
			claim_component(cardfooter.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(loadable, target, anchor);
			insert_hydration(target, t0, anchor);
			mount_component(cardheader, target, anchor);
			insert_hydration(target, t1, anchor);
			mount_component(cardcontent, target, anchor);
			insert_hydration(target, t2, anchor);
			mount_component(cardfooter, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const loadable_changes = {};

			if (dirty & /*$$scope, product, cartItem, quantity*/ 524326) {
				loadable_changes.$$scope = { dirty, ctx };
			}

			loadable.$set(loadable_changes);
			const cardheader_changes = {};

			if (dirty & /*$$scope, product, imageElement, initialRender*/ 524307) {
				cardheader_changes.$$scope = { dirty, ctx };
			}

			cardheader.$set(cardheader_changes);
			const cardcontent_changes = {};

			if (dirty & /*$$scope, product*/ 524290) {
				cardcontent_changes.$$scope = { dirty, ctx };
			}

			cardcontent.$set(cardcontent_changes);
			const cardfooter_changes = {};

			if (dirty & /*$$scope*/ 524288) {
				cardfooter_changes.$$scope = { dirty, ctx };
			}

			cardfooter.$set(cardfooter_changes);
		},
		i(local) {
			if (current) return;
			transition_in(loadable.$$.fragment, local);
			transition_in(cardheader.$$.fragment, local);
			transition_in(cardcontent.$$.fragment, local);
			transition_in(cardfooter.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(loadable.$$.fragment, local);
			transition_out(cardheader.$$.fragment, local);
			transition_out(cardcontent.$$.fragment, local);
			transition_out(cardfooter.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(loadable, detaching);
			if (detaching) detach(t0);
			destroy_component(cardheader, detaching);
			if (detaching) detach(t1);
			destroy_component(cardcontent, detaching);
			if (detaching) detach(t2);
			destroy_component(cardfooter, detaching);
		}
	};
}

function create_fragment$1(ctx) {
	let card;
	let updating_expandableOpened;
	let current;

	function card_expandableOpened_binding(value) {
		/*card_expandableOpened_binding*/ ctx[13](value);
	}

	let card_props = {
		classes: "card-header-pic",
		swipeToClose: true,
		hideToolbarOnOpen: true,
		hideNavbarOnOpen: true,
		$$slots: { default: [create_default_slot$1] },
		$$scope: { ctx }
	};

	if (/*expandableOpened*/ ctx[3] !== void 0) {
		card_props.expandableOpened = /*expandableOpened*/ ctx[3];
	}

	card = new Card({ props: card_props });
	binding_callbacks.push(() => bind(card, 'expandableOpened', card_expandableOpened_binding));

	return {
		c() {
			create_component(card.$$.fragment);
		},
		l(nodes) {
			claim_component(card.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(card, target, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			const card_changes = {};

			if (dirty & /*$$scope, product, imageElement, initialRender, cartItem, quantity*/ 524343) {
				card_changes.$$scope = { dirty, ctx };
			}

			if (!updating_expandableOpened && dirty & /*expandableOpened*/ 8) {
				updating_expandableOpened = true;
				card_changes.expandableOpened = /*expandableOpened*/ ctx[3];
				add_flush_callback(() => updating_expandableOpened = false);
			}

			card.$set(card_changes);
		},
		i(local) {
			if (current) return;
			transition_in(card.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(card.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(card, detaching);
		}
	};
}

function instance$1($$self, $$props, $$invalidate) {
	let quantity;
	let $cartStore;
	component_subscribe($$self, cartStore, $$value => $$invalidate(10, $cartStore = $$value));
	let { importsSeek = 'lower' } = $$props;
	getContext('svelteProps') || {};
	let lec = getContext('lec') || {};
	(() => window.cicR = $$props.resetCicR ? 1 : window.cicR + 1)();
	const liquid = cachedLiquid(lec);
	let { initialRender } = $$props;
	let { product } = $$props;
	let expandableOpened = false;
	let imageElement;

	let cartItem;

	function addToCart() {
		cartStore.add({ product });
	}

	function quantityChange(event) {
		cartStore.setQuantity(this.id, +event.target.value);
	}

	function verticalstepper_value_binding(value) {
		quantity = value;
		((($$invalidate(5, quantity), $$invalidate(2, cartItem)), $$invalidate(10, $cartStore)), $$invalidate(1, product));
	}

	function img_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			imageElement = $$value;
			$$invalidate(4, imageElement);
		});
	}

	function card_expandableOpened_binding(value) {
		expandableOpened = value;
		$$invalidate(3, expandableOpened);
	}

	$$self.$$set = $$new_props => {
		$$invalidate(18, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ('importsSeek' in $$new_props) $$invalidate(9, importsSeek = $$new_props.importsSeek);
		if ('initialRender' in $$new_props) $$invalidate(0, initialRender = $$new_props.initialRender);
		if ('product' in $$new_props) $$invalidate(1, product = $$new_props.product);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$cartStore, product*/ 1026) {
			if ($cartStore) {
				$$invalidate(2, cartItem = $cartStore.items.find(i => i.product?.id == product.id || i.product_id == product.id));
			}
		}

		if ($$self.$$.dirty & /*cartItem*/ 4) {
			$$invalidate(5, quantity = cartItem?.quantity || 0);
		}

		if ($$self.$$.dirty & /*initialRender*/ 1) {
			console.log('product ', initialRender);
		}
	};

	$$props = exclude_internal_props($$props);

	return [
		initialRender,
		product,
		cartItem,
		expandableOpened,
		imageElement,
		quantity,
		liquid,
		addToCart,
		quantityChange,
		importsSeek,
		$cartStore,
		verticalstepper_value_binding,
		img_binding,
		card_expandableOpened_binding
	];
}

class Product_card extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance$1, create_fragment$1, safe_not_equal, {
			importsSeek: 9,
			initialRender: 0,
			product: 1
		});
	}
}

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/src/sections/product-carousel/index.liquivelte generated by Svelte v3.50.0 */

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[11] = list[i];
	child_ctx[14] = i;

	const constants_0 = {
		first: /*index*/ child_ctx[14] === 0,
		index: /*index*/ child_ctx[14] + 1,
		index0: /*index*/ child_ctx[14],
		last: /*index*/ child_ctx[14] === /*products*/ child_ctx[1].length - 1,
		rindex: /*products*/ child_ctx[1].length - /*index*/ child_ctx[14],
		rindex0: /*products*/ child_ctx[1].length - /*index*/ child_ctx[14] - 1,
		length: /*products*/ child_ctx[1].length
	};

	child_ctx[12] = constants_0;
	return child_ctx;
}

// (47:0) <BlockTitle  >
function create_default_slot_3(ctx) {
	let t;

	return {
		c() {
			t = text(/*collection_title*/ ctx[0]);
		},
		l(nodes) {
			t = claim_text(nodes, /*collection_title*/ ctx[0]);
		},
		m(target, anchor) {
			insert_hydration(target, t, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*collection_title*/ 1) set_data(t, /*collection_title*/ ctx[0]);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (64:4) <SwiperSlide   >
function create_default_slot_2(ctx) {
	let productcard;
	let t;
	let current;
	productcard = new Product_card({ props: { product: /*product*/ ctx[11] } });

	return {
		c() {
			create_component(productcard.$$.fragment);
			t = space();
		},
		l(nodes) {
			claim_component(productcard.$$.fragment, nodes);
			t = claim_space(nodes);
		},
		m(target, anchor) {
			mount_component(productcard, target, anchor);
			insert_hydration(target, t, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const productcard_changes = {};
			if (dirty & /*products*/ 2) productcard_changes.product = /*product*/ ctx[11];
			productcard.$set(productcard_changes);
		},
		i(local) {
			if (current) return;
			transition_in(productcard.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(productcard.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(productcard, detaching);
			if (detaching) detach(t);
		}
	};
}

// (54:4) {#each  products as product, index   }
function create_each_block(ctx) {
	let swiperslide;
	let current;

	swiperslide = new Swiper_slide({
			props: {
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(swiperslide.$$.fragment);
		},
		l(nodes) {
			claim_component(swiperslide.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(swiperslide, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const swiperslide_changes = {};

			if (dirty & /*$$scope, products*/ 32770) {
				swiperslide_changes.$$scope = { dirty, ctx };
			}

			swiperslide.$set(swiperslide_changes);
		},
		i(local) {
			if (current) return;
			transition_in(swiperslide.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(swiperslide.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(swiperslide, detaching);
		}
	};
}

// (48:0) <Swiper  modules="{[FreeMode, Mousewheel, Pagination]}"            freemode="{ { enabled: true, sticky: true } }"           pagination="{true}"            mousewheel="{ { enabled: true, forceToAxis: true, sensitivity: 1.5 } }"           breakpoints="{breakpoints}"            >
function create_default_slot_1(ctx) {
	let each_1_anchor;
	let current;
	let each_value = /*products*/ ctx[1];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l(nodes) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_hydration(target, each_1_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if (dirty & /*products*/ 2) {
				each_value = /*products*/ ctx[1];
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
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
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
			destroy_each(each_blocks, detaching);
			if (detaching) detach(each_1_anchor);
		}
	};
}

// (46:0) <Block  classes="product-carousel" >
function create_default_slot(ctx) {
	let blocktitle;
	let t;
	let swiper;
	let current;

	blocktitle = new Block_title({
			props: {
				$$slots: { default: [create_default_slot_3] },
				$$scope: { ctx }
			}
		});

	swiper = new Swiper_1({
			props: {
				modules: [freeMode, Mousewheel, Pagination],
				freemode: { enabled: true, sticky: true },
				pagination: true,
				mousewheel: {
					enabled: true,
					forceToAxis: true,
					sensitivity: 1.5
				},
				breakpoints: /*breakpoints*/ ctx[2],
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(blocktitle.$$.fragment);
			t = space();
			create_component(swiper.$$.fragment);
		},
		l(nodes) {
			claim_component(blocktitle.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(swiper.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(blocktitle, target, anchor);
			insert_hydration(target, t, anchor);
			mount_component(swiper, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const blocktitle_changes = {};

			if (dirty & /*$$scope, collection_title*/ 32769) {
				blocktitle_changes.$$scope = { dirty, ctx };
			}

			blocktitle.$set(blocktitle_changes);
			const swiper_changes = {};

			if (dirty & /*$$scope, products*/ 32770) {
				swiper_changes.$$scope = { dirty, ctx };
			}

			swiper.$set(swiper_changes);
		},
		i(local) {
			if (current) return;
			transition_in(blocktitle.$$.fragment, local);
			transition_in(swiper.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(blocktitle.$$.fragment, local);
			transition_out(swiper.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(blocktitle, detaching);
			if (detaching) detach(t);
			destroy_component(swiper, detaching);
		}
	};
}

function create_fragment(ctx) {
	let block;
	let current;

	block = new Block({
			props: {
				classes: "product-carousel",
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(block.$$.fragment);
		},
		l(nodes) {
			claim_component(block.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(block, target, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			const block_changes = {};

			if (dirty & /*$$scope, products, collection_title*/ 32771) {
				block_changes.$$scope = { dirty, ctx };
			}

			block.$set(block_changes);
		},
		i(local) {
			if (current) return;
			transition_in(block.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(block.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(block, detaching);
		}
	};
}

function fc(e, t, r) {
	const n = e.find(e => e === t);

	return n || e.reduce((e, n) => {
		let o = Math.abs(e - t), i = Math.abs(n - t);

		return "higher" === r
		? n > t && i <= o ? n : e
		: "lower" === r ? n < t && i <= o ? n : e : void 0;
	});
}

function instance($$self, $$props, $$invalidate) {
	let { importsSeek = 'lower' } = $$props;
	let themeImports = getContext('svelteProps') || {};
	getContext('lec') || {};
	(() => window.cicR = $$props.resetCicR ? 1 : window.cicR + 1)();
	const cic = window.cicR;
	const section = {};
	let { collection_title = themeImports['collection_title'].find(e => e.component_index == fc(themeImports['collection_title'].map(e => e.component_index), cic, importsSeek)).value } = $$props;
	let { sectionƒƒsettings } = $$props;

	try {
		section = section || {};
	} catch(e) {
		
	} /*whatever*/

	section.settings = themeImports['sectionƒƒsettings'].find(e => e.component_index == fc(themeImports['sectionƒƒsettings'].map(e => e.component_index), cic, importsSeek)).value;
	let { products = themeImports['products'].find(e => e.component_index == fc(themeImports['products'].map(e => e.component_index), cic, importsSeek)).value } = $$props;

	const breakpoints = {
		"640": { slidesPerView: 2 },
		"768": { slidesPerView: 3 },
		"1024": { slidesPerView: 4 },
		"1280": { slidesPerView: 4 },
		"1536": { slidesPerView: 4 }
	};

	$$self.$$set = $$new_props => {
		$$invalidate(10, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ('importsSeek' in $$new_props) $$invalidate(3, importsSeek = $$new_props.importsSeek);
		if ('collection_title' in $$new_props) $$invalidate(0, collection_title = $$new_props.collection_title);
		if ('sectionƒƒsettings' in $$new_props) $$invalidate(4, sectionƒƒsettings = $$new_props.sectionƒƒsettings);
		if ('products' in $$new_props) $$invalidate(1, products = $$new_props.products);
	};

	$$props = exclude_internal_props($$props);
	return [collection_title, products, breakpoints, importsSeek, sectionƒƒsettings];
}

class Product_carousel extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			importsSeek: 3,
			collection_title: 0,
			sectionƒƒsettings: 4,
			products: 1
		});
	}
}

var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: Product_carousel
});

export { Product_card, Product_carousel, addToCart, disableScrollOnBody, enableScrollOnBody, index, updateLineItem };
