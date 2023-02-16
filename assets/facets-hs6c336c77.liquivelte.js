import { SvelteComponent, init, safe_not_equal, create_component, space, claim_component, claim_space, mount_component, insert_hydration, transition_in, transition_out, destroy_component, detach, getContext, assign, exclude_internal_props, empty, group_outros, update_keyed_each, outro_and_destroy_block, check_outros, select_multiple_value, element, text, claim_element, children, claim_text, attr, append_hydration, noop, destroy_each, set_data, add_render_callback, select_options, listen, run_all } from './liquivelte-svelte-hs035d430e.liquivelte.js';
import { cachedLiquid } from './liquivelte-liquid-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-hsa0091f48.liquivelte.js';
import { View } from './framework7-liquivelte-view-hs8daa1a0c.liquivelte.js';
import { Panel } from './framework7-liquivelte-panel-hs8daa1a0c.liquivelte.js';
import { Block } from './framework7-liquivelte-block-hs8daa1a0c.liquivelte.js';
import { Button } from './framework7-liquivelte-button-hs8daa1a0c.liquivelte.js';
import { Chip } from './framework7-liquivelte-chip-hs8daa1a0c.liquivelte.js';
import { Range } from './framework7-liquivelte-range-hs8daa1a0c.liquivelte.js';
import { List_input } from './framework7-liquivelte-list-input-hs8daa1a0c.liquivelte.js';
import { List_item } from './framework7-liquivelte-list-item-hs8daa1a0c.liquivelte.js';
import { List } from './framework7-liquivelte-list-hs8daa1a0c.liquivelte.js';
import { Navbar } from './framework7-liquivelte-navbar-hs8daa1a0c.liquivelte.js';
import { Page } from './framework7-liquivelte-page-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-get-params-hs6b273664.liquivelte.js';
import { Icon } from './header-hs09f16584.liquivelte.js';
import './framework7-liquivelte-popup-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-login-screen-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-sheet-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-popover-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-router-context-provider-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-use-icon-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-icon-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-badge-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-preloader-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-text-editor-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-nav-left-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-link-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-nav-title-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-nav-right-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-page-content-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-utils-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-params-list-hs8daa1a0c.liquivelte.js';
import './store.js-hs8daa1a0c.liquivelte.js';
import './product-carousel-hs1341d979.liquivelte.js';
import './framework7-liquivelte-block-title-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-swiper-slide-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-swiper-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-mount-swiper-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-get-changed-params-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-update-swiper-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-card-content-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-card-footer-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-card-header-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-card-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-stepper-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-accordion-content-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-col-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-row-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-appbar-hs8daa1a0c.liquivelte.js';

/* global setTimeout, clearTimeout */

var dist = function debounce(fn) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var lastCallAt = void 0;
  var deferred = void 0;
  var timer = void 0;
  var pendingArgs = [];
  return function debounced() {
    var currentWait = getWait(wait);
    var currentTime = new Date().getTime();

    var isCold = !lastCallAt || currentTime - lastCallAt > currentWait;

    lastCallAt = currentTime;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (isCold && options.leading) {
      return options.accumulate ? Promise.resolve(fn.call(this, [args])).then(function (result) {
        return result[0];
      }) : Promise.resolve(fn.call.apply(fn, [this].concat(args)));
    }

    if (deferred) {
      clearTimeout(timer);
    } else {
      deferred = defer();
    }

    pendingArgs.push(args);
    timer = setTimeout(flush.bind(this), currentWait);

    if (options.accumulate) {
      var argsIndex = pendingArgs.length - 1;
      return deferred.promise.then(function (results) {
        return results[argsIndex];
      });
    }

    return deferred.promise;
  };

  function flush() {
    var thisDeferred = deferred;
    clearTimeout(timer);

    Promise.resolve(options.accumulate ? fn.call(this, pendingArgs) : fn.apply(this, pendingArgs[pendingArgs.length - 1])).then(thisDeferred.resolve, thisDeferred.reject);

    pendingArgs = [];
    deferred = null;
  }
};

function getWait(wait) {
  return typeof wait === 'function' ? wait() : wait;
}

function defer() {
  var deferred = {};
  deferred.promise = new Promise(function (resolve, reject) {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });
  return deferred;
}

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/src/sections/facets.liquivelte generated by Svelte v3.50.0 */

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[23] = list[i];
	child_ctx[26] = i;

	const constants_0 = {
		first: /*index*/ child_ctx[26] === 0,
		index: /*index*/ child_ctx[26] + 1,
		index0: /*index*/ child_ctx[26],
		last: /*index*/ child_ctx[26] === /*collection*/ child_ctx[0].filters.length - 1,
		rindex: /*collection*/ child_ctx[0].filters.length - /*index*/ child_ctx[26],
		rindex0: /*collection*/ child_ctx[0].filters.length - /*index*/ child_ctx[26] - 1,
		length: /*collection*/ child_ctx[0].filters.length
	};

	child_ctx[24] = constants_0;
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[27] = list[i];
	child_ctx[26] = i;

	const constants_0 = {
		first: /*index*/ child_ctx[26] === 0,
		index: /*index*/ child_ctx[26] + 1,
		index0: /*index*/ child_ctx[26],
		last: /*index*/ child_ctx[26] === /*filter*/ child_ctx[23].active_values.length - 1,
		rindex: /*filter*/ child_ctx[23].active_values.length - /*index*/ child_ctx[26],
		rindex0: /*filter*/ child_ctx[23].active_values.length - /*index*/ child_ctx[26] - 1,
		length: /*filter*/ child_ctx[23].active_values.length
	};

	child_ctx[24] = constants_0;
	return child_ctx;
}

function get_each_context_2(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[23] = list[i];
	child_ctx[29] = list;
	child_ctx[26] = i;

	const constants_0 = {
		first: /*index*/ child_ctx[26] === 0,
		index: /*index*/ child_ctx[26] + 1,
		index0: /*index*/ child_ctx[26],
		last: /*index*/ child_ctx[26] === /*collection*/ child_ctx[0].filters.length - 1,
		rindex: /*collection*/ child_ctx[0].filters.length - /*index*/ child_ctx[26],
		rindex0: /*collection*/ child_ctx[0].filters.length - /*index*/ child_ctx[26] - 1,
		length: /*collection*/ child_ctx[0].filters.length
	};

	child_ctx[24] = constants_0;
	return child_ctx;
}

function get_each_context_3(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[27] = list[i];
	child_ctx[26] = i;

	const constants_0 = {
		first: /*index*/ child_ctx[26] === 0,
		index: /*index*/ child_ctx[26] + 1,
		index0: /*index*/ child_ctx[26],
		last: /*index*/ child_ctx[26] === /*filter*/ child_ctx[23].values.length - 1,
		rindex: /*filter*/ child_ctx[23].values.length - /*index*/ child_ctx[26],
		rindex0: /*filter*/ child_ctx[23].values.length - /*index*/ child_ctx[26] - 1,
		length: /*filter*/ child_ctx[23].values.length
	};

	child_ctx[24] = constants_0;
	return child_ctx;
}

// (114:2) <Button  panelOpen="#filters-panel" >
function create_default_slot_8(ctx) {
	let icon;
	let t0;
	let span;
	let t1_value = /*liquid*/ ctx[3].t('products.facets.filter_button') + "";
	let t1;
	let current;

	icon = new Icon({
			props: { name: "icon-filter", width: "20" }
		});

	return {
		c() {
			create_component(icon.$$.fragment);
			t0 = space();
			span = element("span");
			t1 = text(t1_value);
			this.h();
		},
		l(nodes) {
			claim_component(icon.$$.fragment, nodes);
			t0 = claim_space(nodes);
			span = claim_element(nodes, "SPAN", { class: true, "data-translate": true });
			var span_nodes = children(span);
			t1 = claim_text(span_nodes, t1_value);
			span_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(span, "class", "ml-1");
			attr(span, "data-translate", /*liquid*/ ctx[3].t('products.facets.filter_button'));
		},
		m(target, anchor) {
			mount_component(icon, target, anchor);
			insert_hydration(target, t0, anchor);
			insert_hydration(target, span, anchor);
			append_hydration(span, t1);
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
			if (detaching) detach(t0);
			if (detaching) detach(span);
		}
	};
}

// (118:4) <Button   >
function create_default_slot_7(ctx) {
	let span;
	let t0;
	let t1;
	let icon;
	let current;

	icon = new Icon({
			props: { name: "icon-chevron-down", width: "17" }
		});

	return {
		c() {
			span = element("span");
			t0 = text("Sort");
			t1 = space();
			create_component(icon.$$.fragment);
			this.h();
		},
		l(nodes) {
			span = claim_element(nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t0 = claim_text(span_nodes, "Sort");
			span_nodes.forEach(detach);
			t1 = claim_space(nodes);
			claim_component(icon.$$.fragment, nodes);
			this.h();
		},
		h() {
			attr(span, "class", "mr-1");
		},
		m(target, anchor) {
			insert_hydration(target, span, anchor);
			append_hydration(span, t0);
			insert_hydration(target, t1, anchor);
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
			if (detaching) detach(span);
			if (detaching) detach(t1);
			destroy_component(icon, detaching);
		}
	};
}

// (113:0) <Navbar  >
function create_default_slot_6(ctx) {
	let button0;
	let t;
	let button1;
	let current;

	button0 = new Button({
			props: {
				panelOpen: "#filters-panel",
				$$slots: { default: [create_default_slot_8] },
				$$scope: { ctx }
			}
		});

	button1 = new Button({
			props: {
				$$slots: { default: [create_default_slot_7] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(button0.$$.fragment);
			t = space();
			create_component(button1.$$.fragment);
		},
		l(nodes) {
			claim_component(button0.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(button1.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(button0, target, anchor);
			insert_hydration(target, t, anchor);
			mount_component(button1, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const button0_changes = {};

			if (dirty[1] & /*$$scope*/ 1) {
				button0_changes.$$scope = { dirty, ctx };
			}

			button0.$set(button0_changes);
			const button1_changes = {};

			if (dirty[1] & /*$$scope*/ 1) {
				button1_changes.$$scope = { dirty, ctx };
			}

			button1.$set(button1_changes);
		},
		i(local) {
			if (current) return;
			transition_in(button0.$$.fragment, local);
			transition_in(button1.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(button0.$$.fragment, local);
			transition_out(button1.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(button0, detaching);
			if (detaching) detach(t);
			destroy_component(button1, detaching);
		}
	};
}

// (158:10) {:else}
function create_else_block(ctx) {
	let listitem;
	let current;

	listitem = new List_item({
			props: {
				title: /*filter*/ ctx[23].label,
				smartSelect: true,
				$$slots: { default: [create_default_slot_5] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(listitem.$$.fragment);
		},
		l(nodes) {
			claim_component(listitem.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(listitem, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const listitem_changes = {};
			if (dirty[0] & /*collection*/ 1) listitem_changes.title = /*filter*/ ctx[23].label;

			if (dirty[0] & /*collection*/ 1 | dirty[1] & /*$$scope*/ 1) {
				listitem_changes.$$scope = { dirty, ctx };
			}

			listitem.$set(listitem_changes);
		},
		i(local) {
			if (current) return;
			transition_in(listitem.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(listitem.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(listitem, detaching);
		}
	};
}

// (138:10) {#if filter.type == 'price_range' }
function create_if_block_3(ctx) {
	let listinput;
	let current;

	listinput = new List_input({
			props: {
				input: false,
				$$slots: {
					input: [create_input_slot],
					label: [create_label_slot]
				},
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(listinput.$$.fragment);
		},
		l(nodes) {
			claim_component(listinput.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(listinput, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const listinput_changes = {};

			if (dirty[0] & /*collection, price_max, price_min*/ 7 | dirty[1] & /*$$scope*/ 1) {
				listinput_changes.$$scope = { dirty, ctx };
			}

			listinput.$set(listinput_changes);
		},
		i(local) {
			if (current) return;
			transition_in(listinput.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(listinput.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(listinput, detaching);
		}
	};
}

// (161:14) {#each  filter.values as value, index   }
function create_each_block_3(ctx) {
	let option;
	let t_value = /*value*/ ctx[27].label + "";
	let t;
	let option_value_value;

	return {
		c() {
			option = element("option");
			t = text(t_value);
			this.h();
		},
		l(nodes) {
			option = claim_element(nodes, "OPTION", {});
			var option_nodes = children(option);
			t = claim_text(option_nodes, t_value);
			option_nodes.forEach(detach);
			this.h();
		},
		h() {
			option.__value = option_value_value = /*value*/ ctx[27].value;
			option.value = option.__value;
		},
		m(target, anchor) {
			insert_hydration(target, option, anchor);
			append_hydration(option, t);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*collection*/ 1 && t_value !== (t_value = /*value*/ ctx[27].label + "")) set_data(t, t_value);

			if (dirty[0] & /*collection*/ 1 && option_value_value !== (option_value_value = /*value*/ ctx[27].value)) {
				option.__value = option_value_value;
				option.value = option.__value;
			}
		},
		d(detaching) {
			if (detaching) detach(option);
		}
	};
}

// (159:10) <ListItem  title="{ filter.label }" smartSelect >
function create_default_slot_5(ctx) {
	let select;
	let select_name_value;
	let t;
	let mounted;
	let dispose;
	let each_value_3 = /*filter*/ ctx[23].values;
	let each_blocks = [];

	for (let i = 0; i < each_value_3.length; i += 1) {
		each_blocks[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
	}

	function select_change_handler() {
		/*select_change_handler*/ ctx[11].call(select, /*each_value_2*/ ctx[29], /*index*/ ctx[26]);
	}

	function change_handler(...args) {
		return /*change_handler*/ ctx[12](/*filter*/ ctx[23], ...args);
	}

	return {
		c() {
			select = element("select");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t = space();
			this.h();
		},
		l(nodes) {
			select = claim_element(nodes, "SELECT", { name: true });
			var select_nodes = children(select);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(select_nodes);
			}

			select_nodes.forEach(detach);
			t = claim_space(nodes);
			this.h();
		},
		h() {
			select.multiple = true;
			attr(select, "name", select_name_value = /*filter*/ ctx[23].label);
			if (/*filter*/ ctx[23].active_values_flat === void 0) add_render_callback(select_change_handler);
		},
		m(target, anchor) {
			insert_hydration(target, select, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(select, null);
			}

			select_options(select, /*filter*/ ctx[23].active_values_flat);
			insert_hydration(target, t, anchor);

			if (!mounted) {
				dispose = [
					listen(select, "change", select_change_handler),
					listen(select, "change", change_handler)
				];

				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;

			if (dirty[0] & /*collection*/ 1) {
				each_value_3 = /*filter*/ ctx[23].values;
				let i;

				for (i = 0; i < each_value_3.length; i += 1) {
					const child_ctx = get_each_context_3(ctx, each_value_3, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_3(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(select, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value_3.length;
			}

			if (dirty[0] & /*collection*/ 1 && select_name_value !== (select_name_value = /*filter*/ ctx[23].label)) {
				attr(select, "name", select_name_value);
			}

			if (dirty[0] & /*collection*/ 1) {
				select_options(select, /*filter*/ ctx[23].active_values_flat);
			}
		},
		d(detaching) {
			if (detaching) detach(select);
			destroy_each(each_blocks, detaching);
			if (detaching) detach(t);
			mounted = false;
			run_all(dispose);
		}
	};
}

// (142:12) 
function create_label_slot(ctx) {
	let div;
	let span0;
	let t0_value = /*filter*/ ctx[23].label + "";
	let t0;
	let t1;
	let span1;
	let t2_value = /*liquid*/ ctx[3].money(/*price_min*/ ctx[1]) + "";
	let t2;
	let t3;
	let t4_value = /*liquid*/ ctx[3].money(/*price_max*/ ctx[2]) + "";
	let t4;
	let t5;

	return {
		c() {
			div = element("div");
			span0 = element("span");
			t0 = text(t0_value);
			t1 = space();
			span1 = element("span");
			t2 = text(t2_value);
			t3 = text(" - $");
			t4 = text(t4_value);
			t5 = space();
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { slot: true, class: true });
			var div_nodes = children(div);
			span0 = claim_element(div_nodes, "SPAN", {});
			var span0_nodes = children(span0);
			t0 = claim_text(span0_nodes, t0_value);
			span0_nodes.forEach(detach);
			t1 = claim_space(div_nodes);
			span1 = claim_element(div_nodes, "SPAN", {});
			var span1_nodes = children(span1);
			t2 = claim_text(span1_nodes, t2_value);
			t3 = claim_text(span1_nodes, " - $");
			t4 = claim_text(span1_nodes, t4_value);
			span1_nodes.forEach(detach);
			t5 = claim_space(div_nodes);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div, "slot", "label");
			attr(div, "class", "display-flex justify-content-space-between");
		},
		m(target, anchor) {
			insert_hydration(target, div, anchor);
			append_hydration(div, span0);
			append_hydration(span0, t0);
			append_hydration(div, t1);
			append_hydration(div, span1);
			append_hydration(span1, t2);
			append_hydration(span1, t3);
			append_hydration(span1, t4);
			append_hydration(div, t5);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*collection*/ 1 && t0_value !== (t0_value = /*filter*/ ctx[23].label + "")) set_data(t0, t0_value);
			if (dirty[0] & /*price_min*/ 2 && t2_value !== (t2_value = /*liquid*/ ctx[3].money(/*price_min*/ ctx[1]) + "")) set_data(t2, t2_value);
			if (dirty[0] & /*price_max*/ 4 && t4_value !== (t4_value = /*liquid*/ ctx[3].money(/*price_max*/ ctx[2]) + "")) set_data(t4, t4_value);
		},
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

// (146:14) 
function create_input_slot(ctx) {
	let span;
	let range;
	let t;
	let current;

	function func(...args) {
		return /*func*/ ctx[9](/*filter*/ ctx[23], ...args);
	}

	function func_1(...args) {
		return /*func_1*/ ctx[10](/*filter*/ ctx[23], ...args);
	}

	range = new Range({
			props: {
				min: 0,
				max: /*filter*/ ctx[23].range_max,
				step: 100,
				value: [
					/*filter*/ ctx[23].min_value.value,
					/*filter*/ ctx[23].max_value.value || /*filter*/ ctx[23].range_max
				],
				dual: true,
				onRangeChange: func,
				onRangeChanged: func_1
			}
		});

	return {
		c() {
			span = element("span");
			create_component(range.$$.fragment);
			t = space();
			this.h();
		},
		l(nodes) {
			span = claim_element(nodes, "SPAN", { slot: true });
			var span_nodes = children(span);
			claim_component(range.$$.fragment, span_nodes);
			t = claim_space(span_nodes);
			span_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(span, "slot", "input");
		},
		m(target, anchor) {
			insert_hydration(target, span, anchor);
			mount_component(range, span, null);
			append_hydration(span, t);
			current = true;
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			const range_changes = {};
			if (dirty[0] & /*collection*/ 1) range_changes.max = /*filter*/ ctx[23].range_max;

			if (dirty[0] & /*collection*/ 1) range_changes.value = [
				/*filter*/ ctx[23].min_value.value,
				/*filter*/ ctx[23].max_value.value || /*filter*/ ctx[23].range_max
			];

			if (dirty[0] & /*collection*/ 1) range_changes.onRangeChange = func;
			if (dirty[0] & /*collection*/ 1) range_changes.onRangeChanged = func_1;
			range.$set(range_changes);
		},
		i(local) {
			if (current) return;
			transition_in(range.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(range.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(span);
			destroy_component(range);
		}
	};
}

// (128:8) {#each  collection.filters as filter, index  (filter.label) }
function create_each_block_2(key_1, ctx) {
	let first;
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block_3, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*filter*/ ctx[23].type == 'price_range') return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		key: key_1,
		first: null,
		c() {
			first = empty();
			if_block.c();
			if_block_anchor = empty();
			this.h();
		},
		l(nodes) {
			first = empty();
			if_block.l(nodes);
			if_block_anchor = empty();
			this.h();
		},
		h() {
			this.first = first;
		},
		m(target, anchor) {
			insert_hydration(target, first, anchor);
			if_blocks[current_block_type_index].m(target, anchor);
			insert_hydration(target, if_block_anchor, anchor);
			current = true;
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
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
			if (detaching) detach(first);
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

// (127:6) <List  >
function create_default_slot_4(ctx) {
	let each_blocks = [];
	let each_1_lookup = new Map();
	let each_1_anchor;
	let current;
	let each_value_2 = /*collection*/ ctx[0].filters;
	const get_key = ctx => /*filter*/ ctx[23].label;

	for (let i = 0; i < each_value_2.length; i += 1) {
		let child_ctx = get_each_context_2(ctx, each_value_2, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block_2(key, child_ctx));
	}

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
			if (dirty[0] & /*collection, priceUpdate, priceChange, liquid, price_max, price_min, filterChange*/ 127) {
				each_value_2 = /*collection*/ ctx[0].filters;
				group_outros();
				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value_2, each_1_lookup, each_1_anchor.parentNode, outro_and_destroy_block, create_each_block_2, each_1_anchor, get_each_context_2);
				check_outros();
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value_2.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d(detaching);
			}

			if (detaching) detach(each_1_anchor);
		}
	};
}

// (126:4) <Page  >
function create_default_slot_3(ctx) {
	let list;
	let current;

	list = new List({
			props: {
				$$slots: { default: [create_default_slot_4] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(list.$$.fragment);
		},
		l(nodes) {
			claim_component(list.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(list, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const list_changes = {};

			if (dirty[0] & /*collection, price_max, price_min*/ 7 | dirty[1] & /*$$scope*/ 1) {
				list_changes.$$scope = { dirty, ctx };
			}

			list.$set(list_changes);
		},
		i(local) {
			if (current) return;
			transition_in(list.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(list.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(list, detaching);
		}
	};
}

// (125:4) <View  name="filters-view" stackPages="{true}" >
function create_default_slot_2(ctx) {
	let page;
	let current;

	page = new Page({
			props: {
				$$slots: { default: [create_default_slot_3] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(page.$$.fragment);
		},
		l(nodes) {
			claim_component(page.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(page, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const page_changes = {};

			if (dirty[0] & /*collection, price_max, price_min*/ 7 | dirty[1] & /*$$scope*/ 1) {
				page_changes.$$scope = { dirty, ctx };
			}

			page.$set(page_changes);
		},
		i(local) {
			if (current) return;
			transition_in(page.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(page.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(page, detaching);
		}
	};
}

// (124:0) <Panel  left cover id="filters-panel" >
function create_default_slot_1(ctx) {
	let view;
	let current;

	view = new View({
			props: {
				name: "filters-view",
				stackPages: true,
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(view.$$.fragment);
		},
		l(nodes) {
			claim_component(view.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(view, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const view_changes = {};

			if (dirty[0] & /*collection, price_max, price_min*/ 7 | dirty[1] & /*$$scope*/ 1) {
				view_changes.$$scope = { dirty, ctx };
			}

			view.$set(view_changes);
		},
		i(local) {
			if (current) return;
			transition_in(view.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(view.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(view, detaching);
		}
	};
}

// (194:6) {#each  filter.active_values as value, index   }
function create_each_block_1(ctx) {
	let chip;
	let current;

	function func_2() {
		return /*func_2*/ ctx[13](/*value*/ ctx[27], /*filter*/ ctx[23]);
	}

	chip = new Chip({
			props: {
				text: /*value*/ ctx[27].label,
				deleteable: true,
				onDelete: func_2
			}
		});

	return {
		c() {
			create_component(chip.$$.fragment);
		},
		l(nodes) {
			claim_component(chip.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(chip, target, anchor);
			current = true;
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			const chip_changes = {};
			if (dirty[0] & /*collection*/ 1) chip_changes.text = /*value*/ ctx[27].label;
			if (dirty[0] & /*collection*/ 1) chip_changes.onDelete = func_2;
			chip.$set(chip_changes);
		},
		i(local) {
			if (current) return;
			transition_in(chip.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(chip.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(chip, detaching);
		}
	};
}

// (207:6) {#if filter.type == 'price_range' }
function create_if_block(ctx) {
	let t;
	let if_block1_anchor;
	let current;
	let if_block0 = /*filter*/ ctx[23].min_value.value > 0 && create_if_block_2(ctx);
	let if_block1 = /*filter*/ ctx[23].max_value.value < /*filter*/ ctx[23].range_max && create_if_block_1(ctx);

	return {
		c() {
			if (if_block0) if_block0.c();
			t = space();
			if (if_block1) if_block1.c();
			if_block1_anchor = empty();
		},
		l(nodes) {
			if (if_block0) if_block0.l(nodes);
			t = claim_space(nodes);
			if (if_block1) if_block1.l(nodes);
			if_block1_anchor = empty();
		},
		m(target, anchor) {
			if (if_block0) if_block0.m(target, anchor);
			insert_hydration(target, t, anchor);
			if (if_block1) if_block1.m(target, anchor);
			insert_hydration(target, if_block1_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if (/*filter*/ ctx[23].min_value.value > 0) {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty[0] & /*collection*/ 1) {
						transition_in(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_2(ctx);
					if_block0.c();
					transition_in(if_block0, 1);
					if_block0.m(t.parentNode, t);
				}
			} else if (if_block0) {
				group_outros();

				transition_out(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				check_outros();
			}

			if (/*filter*/ ctx[23].max_value.value < /*filter*/ ctx[23].range_max) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty[0] & /*collection*/ 1) {
						transition_in(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block_1(ctx);
					if_block1.c();
					transition_in(if_block1, 1);
					if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
				}
			} else if (if_block1) {
				group_outros();

				transition_out(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				check_outros();
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block0);
			transition_in(if_block1);
			current = true;
		},
		o(local) {
			transition_out(if_block0);
			transition_out(if_block1);
			current = false;
		},
		d(detaching) {
			if (if_block0) if_block0.d(detaching);
			if (detaching) detach(t);
			if (if_block1) if_block1.d(detaching);
			if (detaching) detach(if_block1_anchor);
		}
	};
}

// (208:8) {#if filter.min_value.value > 0 }
function create_if_block_2(ctx) {
	let chip;
	let current;

	function func_3() {
		return /*func_3*/ ctx[14](/*filter*/ ctx[23]);
	}

	chip = new Chip({
			props: {
				deleteable: true,
				onDelete: func_3,
				$$slots: { text: [create_text_slot_1] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(chip.$$.fragment);
		},
		l(nodes) {
			claim_component(chip.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(chip, target, anchor);
			current = true;
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			const chip_changes = {};
			if (dirty[0] & /*collection*/ 1) chip_changes.onDelete = func_3;

			if (dirty[0] & /*collection*/ 1 | dirty[1] & /*$$scope*/ 1) {
				chip_changes.$$scope = { dirty, ctx };
			}

			chip.$set(chip_changes);
		},
		i(local) {
			if (current) return;
			transition_in(chip.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(chip.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(chip, detaching);
		}
	};
}

// (210:12) 
function create_text_slot_1(ctx) {
	let span;
	let t0;
	let t1_value = /*liquid*/ ctx[3].money(/*filter*/ ctx[23].min_value.value) + "";
	let t1;

	return {
		c() {
			span = element("span");
			t0 = text("Min ");
			t1 = text(t1_value);
			this.h();
		},
		l(nodes) {
			span = claim_element(nodes, "SPAN", { slot: true });
			var span_nodes = children(span);
			t0 = claim_text(span_nodes, "Min ");
			t1 = claim_text(span_nodes, t1_value);
			span_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(span, "slot", "text");
		},
		m(target, anchor) {
			insert_hydration(target, span, anchor);
			append_hydration(span, t0);
			append_hydration(span, t1);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*collection*/ 1 && t1_value !== (t1_value = /*liquid*/ ctx[3].money(/*filter*/ ctx[23].min_value.value) + "")) set_data(t1, t1_value);
		},
		d(detaching) {
			if (detaching) detach(span);
		}
	};
}

// (213:8) {#if filter.max_value.value < filter.range_max }
function create_if_block_1(ctx) {
	let chip;
	let current;

	function func_4() {
		return /*func_4*/ ctx[15](/*filter*/ ctx[23]);
	}

	chip = new Chip({
			props: {
				deleteable: true,
				onDelete: func_4,
				$$slots: { text: [create_text_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(chip.$$.fragment);
		},
		l(nodes) {
			claim_component(chip.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(chip, target, anchor);
			current = true;
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			const chip_changes = {};
			if (dirty[0] & /*collection*/ 1) chip_changes.onDelete = func_4;

			if (dirty[0] & /*collection*/ 1 | dirty[1] & /*$$scope*/ 1) {
				chip_changes.$$scope = { dirty, ctx };
			}

			chip.$set(chip_changes);
		},
		i(local) {
			if (current) return;
			transition_in(chip.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(chip.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(chip, detaching);
		}
	};
}

// (215:12) 
function create_text_slot(ctx) {
	let span;
	let t0;
	let t1_value = /*liquid*/ ctx[3].money(/*filter*/ ctx[23].max_value.value) + "";
	let t1;

	return {
		c() {
			span = element("span");
			t0 = text("Max ");
			t1 = text(t1_value);
			this.h();
		},
		l(nodes) {
			span = claim_element(nodes, "SPAN", { slot: true });
			var span_nodes = children(span);
			t0 = claim_text(span_nodes, "Max ");
			t1 = claim_text(span_nodes, t1_value);
			span_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(span, "slot", "text");
		},
		m(target, anchor) {
			insert_hydration(target, span, anchor);
			append_hydration(span, t0);
			append_hydration(span, t1);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*collection*/ 1 && t1_value !== (t1_value = /*liquid*/ ctx[3].money(/*filter*/ ctx[23].max_value.value) + "")) set_data(t1, t1_value);
		},
		d(detaching) {
			if (detaching) detach(span);
		}
	};
}

// (183:2) {#each  collection.filters as filter, index  (filter.label) }
function create_each_block(key_1, ctx) {
	let first;
	let t;
	let if_block_anchor;
	let current;
	let each_value_1 = /*filter*/ ctx[23].active_values;
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	let if_block = /*filter*/ ctx[23].type == 'price_range' && create_if_block(ctx);

	return {
		key: key_1,
		first: null,
		c() {
			first = empty();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t = space();
			if (if_block) if_block.c();
			if_block_anchor = empty();
			this.h();
		},
		l(nodes) {
			first = empty();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			t = claim_space(nodes);
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
			this.h();
		},
		h() {
			this.first = first;
		},
		m(target, anchor) {
			insert_hydration(target, first, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_hydration(target, t, anchor);
			if (if_block) if_block.m(target, anchor);
			insert_hydration(target, if_block_anchor, anchor);
			current = true;
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;

			if (dirty[0] & /*collection*/ 1) {
				each_value_1 = /*filter*/ ctx[23].active_values;
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block_1(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(t.parentNode, t);
					}
				}

				group_outros();

				for (i = each_value_1.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}

			if (/*filter*/ ctx[23].type == 'price_range') {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty[0] & /*collection*/ 1) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value_1.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			transition_in(if_block);
			current = true;
		},
		o(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(first);
			destroy_each(each_blocks, detaching);
			if (detaching) detach(t);
			if (if_block) if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

// (182:0) <Block  >
function create_default_slot(ctx) {
	let each_blocks = [];
	let each_1_lookup = new Map();
	let each_1_anchor;
	let current;
	let each_value = /*collection*/ ctx[0].filters;
	const get_key = ctx => /*filter*/ ctx[23].label;

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

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
			if (dirty[0] & /*collection, liquid*/ 9) {
				each_value = /*collection*/ ctx[0].filters;
				group_outros();
				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, each_1_anchor.parentNode, outro_and_destroy_block, create_each_block, each_1_anchor, get_each_context);
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
			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d(detaching);
			}

			if (detaching) detach(each_1_anchor);
		}
	};
}

function create_fragment(ctx) {
	let navbar;
	let t0;
	let panel;
	let t1;
	let block;
	let current;

	navbar = new Navbar({
			props: {
				$$slots: { default: [create_default_slot_6] },
				$$scope: { ctx }
			}
		});

	panel = new Panel({
			props: {
				left: true,
				cover: true,
				id: "filters-panel",
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			}
		});

	block = new Block({
			props: {
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(navbar.$$.fragment);
			t0 = space();
			create_component(panel.$$.fragment);
			t1 = space();
			create_component(block.$$.fragment);
		},
		l(nodes) {
			claim_component(navbar.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(panel.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(block.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(navbar, target, anchor);
			insert_hydration(target, t0, anchor);
			mount_component(panel, target, anchor);
			insert_hydration(target, t1, anchor);
			mount_component(block, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const navbar_changes = {};

			if (dirty[1] & /*$$scope*/ 1) {
				navbar_changes.$$scope = { dirty, ctx };
			}

			navbar.$set(navbar_changes);
			const panel_changes = {};

			if (dirty[0] & /*collection, price_max, price_min*/ 7 | dirty[1] & /*$$scope*/ 1) {
				panel_changes.$$scope = { dirty, ctx };
			}

			panel.$set(panel_changes);
			const block_changes = {};

			if (dirty[0] & /*collection*/ 1 | dirty[1] & /*$$scope*/ 1) {
				block_changes.$$scope = { dirty, ctx };
			}

			block.$set(block_changes);
		},
		i(local) {
			if (current) return;
			transition_in(navbar.$$.fragment, local);
			transition_in(panel.$$.fragment, local);
			transition_in(block.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(navbar.$$.fragment, local);
			transition_out(panel.$$.fragment, local);
			transition_out(block.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(navbar, detaching);
			if (detaching) detach(t0);
			destroy_component(panel, detaching);
			if (detaching) detach(t1);
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

function removeFilter(value, filter) {
	if (filter.type == 'price_range') {
		console.log(value, filter);
	}

	filter.active_values_flat = filter.active_values_flat.filter(v => v !== value.value);
}

function instance($$self, $$props, $$invalidate) {
	let { importsSeek = 'lower' } = $$props;
	let themeImports = getContext('svelteProps') || {};
	let lec = getContext('lec') || {};
	(() => window.cicR = $$props.resetCicR ? 1 : window.cicR + 1)();
	const cic = window.cicR;
	const liquid = cachedLiquid(lec);
	const collection = {};
	let { filters = themeImports['filters'].find(e => e.component_index == fc(themeImports['filters'].map(e => e.component_index), cic, importsSeek)).value } = $$props;
	filters = JSON.parse(filters);
	collection.filters = filters;
	let urlToFetch = new URL(window.location.href);

	const _setUrl = async e => {
		urlToFetch = e;
		document.dispatchEvent(new CustomEvent('filters-changed', { detail: { urlToFetch: e } }));
	};

	const setUrl = dist(_setUrl, 500);
	let price_min = 0;
	let price_max = (filters.find(f => f.type == 'price_range') || {}).range_max;

	for (let filter of filters) {
		filter.active_values_flat = filter.active_values.map(e => e.value);

		if (filter.type == 'price_range') {
			if (filter.max_value.value === null) {
				filter.max_value.value = filter.range_max;
			}
		}
	}

	// $: filter_values = 
	// $: console.log('filters ', filters);
	function filterChange(e, filter) {
		filter.inactive_values = filter.values.filter(e => !filter.active_values_flat.includes(e.value)).map(v => ({ ...v, active: false }));
		filter.active_values = filter.values.filter(e => filter.active_values_flat.includes(e.value)).map(v => ({ ...v, active: true }));
		const newURL = new URL(urlToFetch.href);
		newURL.searchParams.delete(filter.param_name);

		if (filter.active_values.length) {
			filter.active_values_flat.forEach(v => newURL.searchParams.append(filter.param_name, v));
		}

		if (newURL.href != urlToFetch.href) {
			setUrl(newURL);
		}

		console.log('filter change ', newURL.href);
	}

	function priceChange([min, max], filter) {
		$$invalidate(
			0,
			collection.filters = collection.filters.map(f => {
				if (f !== filter) return f;

				return {
					...filter,
					max_value: {
						...filter.max_value,
						active: max != filter.range_max ? true : false,
						value: max
					},
					min_value: {
						...filter.min_value,
						active: min ? true : false,
						value: min
					}
				};
			}),
			collection
		);

		const newURL = new URL(urlToFetch.href);

		if (filter.max_value.value != filter.range_max) {
			newURL.searchParams.set(filter.max_value.param_name, (max / 100).toFixed(2));
		} else {
			newURL.searchParams.delete(filter.max_value.param_name);
		}

		if (filter.min_value.value > 0) {
			newURL.searchParams.set(filter.min_value.param_name, (min / 100).toFixed(2));
		} else {
			newURL.searchParams.delete(filter.min_value.param_name);
		}

		if (newURL.href != urlToFetch.href) {
			setUrl(newURL);
		}

		console.log('price filter change ', filter, newURL.href);
	}

	function priceUpdate([min, max], filter) {
		$$invalidate(1, price_min = min);
		$$invalidate(2, price_max = max);
	}

	const func = function (filter, e) {
		priceUpdate(e);
	};

	const func_1 = function (filter, e) {
		priceChange(e, filter);
	};

	function select_change_handler(each_value_2, index) {
		each_value_2[index].active_values_flat = select_multiple_value(this);
		$$invalidate(0, collection);
	}

	const change_handler = (filter, e) => filterChange(e, filter);

	const func_2 = function (value, filter) {
		removeFilter(value, filter);
	};

	const func_3 = function (filter) {
		removeFilter(filter.min_value, filter);
	};

	const func_4 = function (filter) {
		removeFilter(filter.max_value, filter);
	};

	$$self.$$set = $$new_props => {
		$$invalidate(22, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ('importsSeek' in $$new_props) $$invalidate(8, importsSeek = $$new_props.importsSeek);
		if ('filters' in $$new_props) $$invalidate(7, filters = $$new_props.filters);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*filters*/ 128) {
			console.log('filter ', filters);
		}
	};

	$$props = exclude_internal_props($$props);

	return [
		collection,
		price_min,
		price_max,
		liquid,
		filterChange,
		priceChange,
		priceUpdate,
		filters,
		importsSeek,
		func,
		func_1,
		select_change_handler,
		change_handler,
		func_2,
		func_3,
		func_4
	];
}

class Facets extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { importsSeek: 8, filters: 7 }, null, [-1, -1]);
	}
}

export { Facets as default };
