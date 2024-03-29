import { SvelteComponent, init, safe_not_equal, empty, insert_hydration, group_outros, transition_out, check_outros, transition_in, detach, compute_rest_props, getContext, createEventDispatcher, onMount, onDestroy, assign, exclude_internal_props, binding_callbacks, create_slot, element, space, claim_element, children, claim_space, set_attributes, toggle_class, append_hydration, listen, update_slot_base, get_all_dirty_from_scope, get_slot_changes, get_spread_update, attr } from './liquivelte-svelte-hsa803e515.liquivelte.js';
import { createEmitter, f7ready, app, classNames, colorClasses, restProps } from './framework7-liquivelte-hs2475aa90.liquivelte.js';

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/node_modules/framework7-liquivelte/components/col.liquivelte generated by Svelte v3.50.0 */

function create_if_block_2(ctx) {
	let span;
	let t;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[18].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[17], null);
	let if_block = /*resizable*/ ctx[7] && /*resizableHandler*/ ctx[10] && create_if_block_3();

	let span_levels = [
		{ ",": "" },
		{ class: /*computedClasses*/ ctx[11] },
		restProps(/*$$restProps*/ ctx[14])
	];

	let span_data = {};

	for (let i = 0; i < span_levels.length; i += 1) {
		span_data = assign(span_data, span_levels[i]);
	}

	return {
		c() {
			span = element("span");
			if (default_slot) default_slot.c();
			t = space();
			if (if_block) if_block.c();
			this.h();
		},
		l(nodes) {
			span = claim_element(nodes, "SPAN", { ",": true, class: true });
			var span_nodes = children(span);
			if (default_slot) default_slot.l(span_nodes);
			t = claim_space(span_nodes);
			if (if_block) if_block.l(span_nodes);
			span_nodes.forEach(detach);
			this.h();
		},
		h() {
			set_attributes(span, span_data);
			toggle_class(span, "col-width", /*width*/ ctx[1] != 'auto');
			toggle_class(span, "xsmall", /*xsmall*/ ctx[2]);
			toggle_class(span, "small", /*small*/ ctx[3]);
			toggle_class(span, "medium", /*medium*/ ctx[4]);
			toggle_class(span, "large", /*large*/ ctx[5]);
			toggle_class(span, "xlarge", /*xlarge*/ ctx[6]);
			toggle_class(span, "resizable", resizeable);
			toggle_class(span, "resizable-fixed", /*resizableFixed*/ ctx[8]);
			toggle_class(span, "resizable-absolute", /*resizableAbsolute*/ ctx[9]);
		},
		m(target, anchor) {
			insert_hydration(target, span, anchor);

			if (default_slot) {
				default_slot.m(span, null);
			}

			append_hydration(span, t);
			if (if_block) if_block.m(span, null);
			/*span_binding*/ ctx[20](span);
			current = true;

			if (!mounted) {
				dispose = listen(span, "click", /*onClick*/ ctx[13]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 131072)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[17],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[17])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[17], dirty, null),
						null
					);
				}
			}

			if (/*resizable*/ ctx[7] && /*resizableHandler*/ ctx[10]) {
				if (if_block) ; else {
					if_block = create_if_block_3();
					if_block.c();
					if_block.m(span, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			set_attributes(span, span_data = get_spread_update(span_levels, [
				{ ",": "" },
				(!current || dirty & /*computedClasses*/ 2048) && { class: /*computedClasses*/ ctx[11] },
				dirty & /*$$restProps*/ 16384 && restProps(/*$$restProps*/ ctx[14])
			]));

			toggle_class(span, "col-width", /*width*/ ctx[1] != 'auto');
			toggle_class(span, "xsmall", /*xsmall*/ ctx[2]);
			toggle_class(span, "small", /*small*/ ctx[3]);
			toggle_class(span, "medium", /*medium*/ ctx[4]);
			toggle_class(span, "large", /*large*/ ctx[5]);
			toggle_class(span, "xlarge", /*xlarge*/ ctx[6]);
			toggle_class(span, "resizable", resizeable);
			toggle_class(span, "resizable-fixed", /*resizableFixed*/ ctx[8]);
			toggle_class(span, "resizable-absolute", /*resizableAbsolute*/ ctx[9]);
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
			if (detaching) detach(span);
			if (default_slot) default_slot.d(detaching);
			if (if_block) if_block.d();
			/*span_binding*/ ctx[20](null);
			mounted = false;
			dispose();
		}
	};
}

// (64:0) {#if tag == 'div' }
function create_if_block(ctx) {
	let div;
	let t;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[18].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[17], null);
	let if_block = /*resizable*/ ctx[7] && /*resizableHandler*/ ctx[10] && create_if_block_1();
	let div_levels = [{ class: /*computedClasses*/ ctx[11] }, restProps(/*$$restProps*/ ctx[14])];
	let div_data = {};

	for (let i = 0; i < div_levels.length; i += 1) {
		div_data = assign(div_data, div_levels[i]);
	}

	return {
		c() {
			div = element("div");
			if (default_slot) default_slot.c();
			t = space();
			if (if_block) if_block.c();
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			if (default_slot) default_slot.l(div_nodes);
			t = claim_space(div_nodes);
			if (if_block) if_block.l(div_nodes);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			set_attributes(div, div_data);
			toggle_class(div, "col-width", /*width*/ ctx[1] != 'auto');
			toggle_class(div, "xsmall", /*xsmall*/ ctx[2]);
			toggle_class(div, "small", /*small*/ ctx[3]);
			toggle_class(div, "medium", /*medium*/ ctx[4]);
			toggle_class(div, "large", /*large*/ ctx[5]);
			toggle_class(div, "xlarge", /*xlarge*/ ctx[6]);
			toggle_class(div, "resizable", /*resizable*/ ctx[7]);
			toggle_class(div, "resizable-fixed", /*resizableFixed*/ ctx[8]);
			toggle_class(div, "resizable-absolute", /*resizableAbsolute*/ ctx[9]);
		},
		m(target, anchor) {
			insert_hydration(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			append_hydration(div, t);
			if (if_block) if_block.m(div, null);
			/*div_binding*/ ctx[19](div);
			current = true;

			if (!mounted) {
				dispose = listen(div, "click", /*onClick*/ ctx[13]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 131072)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[17],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[17])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[17], dirty, null),
						null
					);
				}
			}

			if (/*resizable*/ ctx[7] && /*resizableHandler*/ ctx[10]) {
				if (if_block) ; else {
					if_block = create_if_block_1();
					if_block.c();
					if_block.m(div, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			set_attributes(div, div_data = get_spread_update(div_levels, [
				(!current || dirty & /*computedClasses*/ 2048) && { class: /*computedClasses*/ ctx[11] },
				dirty & /*$$restProps*/ 16384 && restProps(/*$$restProps*/ ctx[14])
			]));

			toggle_class(div, "col-width", /*width*/ ctx[1] != 'auto');
			toggle_class(div, "xsmall", /*xsmall*/ ctx[2]);
			toggle_class(div, "small", /*small*/ ctx[3]);
			toggle_class(div, "medium", /*medium*/ ctx[4]);
			toggle_class(div, "large", /*large*/ ctx[5]);
			toggle_class(div, "xlarge", /*xlarge*/ ctx[6]);
			toggle_class(div, "resizable", /*resizable*/ ctx[7]);
			toggle_class(div, "resizable-fixed", /*resizableFixed*/ ctx[8]);
			toggle_class(div, "resizable-absolute", /*resizableAbsolute*/ ctx[9]);
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
			if (if_block) if_block.d();
			/*div_binding*/ ctx[19](null);
			mounted = false;
			dispose();
		}
	};
}

// (94:4) {#if resizable && resizableHandler }
function create_if_block_3(ctx) {
	let span;

	return {
		c() {
			span = element("span");
			this.h();
		},
		l(nodes) {
			span = claim_element(nodes, "SPAN", { class: true });
			children(span).forEach(detach);
			this.h();
		},
		h() {
			attr(span, "class", "resize-handler");
		},
		m(target, anchor) {
			insert_hydration(target, span, anchor);
		},
		d(detaching) {
			if (detaching) detach(span);
		}
	};
}

// (78:4) {#if resizable && resizableHandler }
function create_if_block_1(ctx) {
	let span;

	return {
		c() {
			span = element("span");
			this.h();
		},
		l(nodes) {
			span = claim_element(nodes, "SPAN", { class: true });
			children(span).forEach(detach);
			this.h();
		},
		h() {
			attr(span, "class", "resize-handler");
		},
		m(target, anchor) {
			insert_hydration(target, span, anchor);
		},
		d(detaching) {
			if (detaching) detach(span);
		}
	};
}

function create_fragment(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block, create_if_block_2];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*tag*/ ctx[0] == 'div') return 0;
		if (/*tag*/ ctx[0] == 'span') return 1;
		return -1;
	}

	if (~(current_block_type_index = select_block_type(ctx))) {
		if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
	}

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l(nodes) {
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if (~current_block_type_index) {
				if_blocks[current_block_type_index].m(target, anchor);
			}

			insert_hydration(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if (~current_block_type_index) {
					if_blocks[current_block_type_index].p(ctx, dirty);
				}
			} else {
				if (if_block) {
					group_outros();

					transition_out(if_blocks[previous_block_index], 1, 1, () => {
						if_blocks[previous_block_index] = null;
					});

					check_outros();
				}

				if (~current_block_type_index) {
					if_block = if_blocks[current_block_type_index];

					if (!if_block) {
						if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
						if_block.c();
					} else {
						if_block.p(ctx, dirty);
					}

					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				} else {
					if_block = null;
				}
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
			if (~current_block_type_index) {
				if_blocks[current_block_type_index].d(detaching);
			}

			if (detaching) detach(if_block_anchor);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	const omit_props_names = [
		"importsSeek","classes","tag","width","xsmall","small","medium","large","xlarge","resizable","resizableFixed","resizableAbsolute","resizableHandler"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	let { importsSeek = 'lower' } = $$props;
	getContext('svelteProps') || {};
	getContext('lec') || {};
	(() => window.cicR = $$props.resetCicR ? 1 : window.cicR + 1)();
	const emit = createEmitter(createEventDispatcher, $$props);
	let computedClasses = undefined;
	let { classes = '' } = $$props;
	let { tag = 'div' } = $$props;
	let { width = 'auto' } = $$props;
	let { xsmall = undefined } = $$props;
	let { small = undefined } = $$props;
	let { medium = undefined } = $$props;
	let { large = undefined } = $$props;
	let { xlarge = undefined } = $$props;
	let { resizable = false } = $$props;
	let { resizableFixed = false } = $$props;
	let { resizableAbsolute = false } = $$props;
	let { resizableHandler = true } = $$props;
	let el;

	function onClick() {
		emit('click');
	}

	function onResize(targetEl) {
		if (el !== targetEl) return;
		emit('gridResize');
	}

	onMount(() => {
		f7ready(() => {
			app.f7.on('gridResize', onResize);
		});
	});

	onDestroy(() => {
		if (!app.f7) return;
		app.f7.off('gridResize', onResize);
	});

	function div_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			el = $$value;
			$$invalidate(12, el);
		});
	}

	function span_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			el = $$value;
			$$invalidate(12, el);
		});
	}

	$$self.$$set = $$new_props => {
		$$invalidate(27, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(14, $$restProps = compute_rest_props($$props, omit_props_names));
		if ('importsSeek' in $$new_props) $$invalidate(15, importsSeek = $$new_props.importsSeek);
		if ('classes' in $$new_props) $$invalidate(16, classes = $$new_props.classes);
		if ('tag' in $$new_props) $$invalidate(0, tag = $$new_props.tag);
		if ('width' in $$new_props) $$invalidate(1, width = $$new_props.width);
		if ('xsmall' in $$new_props) $$invalidate(2, xsmall = $$new_props.xsmall);
		if ('small' in $$new_props) $$invalidate(3, small = $$new_props.small);
		if ('medium' in $$new_props) $$invalidate(4, medium = $$new_props.medium);
		if ('large' in $$new_props) $$invalidate(5, large = $$new_props.large);
		if ('xlarge' in $$new_props) $$invalidate(6, xlarge = $$new_props.xlarge);
		if ('resizable' in $$new_props) $$invalidate(7, resizable = $$new_props.resizable);
		if ('resizableFixed' in $$new_props) $$invalidate(8, resizableFixed = $$new_props.resizableFixed);
		if ('resizableAbsolute' in $$new_props) $$invalidate(9, resizableAbsolute = $$new_props.resizableAbsolute);
		if ('resizableHandler' in $$new_props) $$invalidate(10, resizableHandler = $$new_props.resizableHandler);
		if ('$$scope' in $$new_props) $$invalidate(17, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		$$invalidate(11, computedClasses = classNames(classes, colorClasses($$props)));
	};

	$$props = exclude_internal_props($$props);

	return [
		tag,
		width,
		xsmall,
		small,
		medium,
		large,
		xlarge,
		resizable,
		resizableFixed,
		resizableAbsolute,
		resizableHandler,
		computedClasses,
		el,
		onClick,
		$$restProps,
		importsSeek,
		classes,
		$$scope,
		slots,
		div_binding,
		span_binding
	];
}

class Col extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			importsSeek: 15,
			classes: 16,
			tag: 0,
			width: 1,
			xsmall: 2,
			small: 3,
			medium: 4,
			large: 5,
			xlarge: 6,
			resizable: 7,
			resizableFixed: 8,
			resizableAbsolute: 9,
			resizableHandler: 10
		});
	}
}

export { Col };
