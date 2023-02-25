import { SvelteComponent, init, safe_not_equal, create_slot, assign, element, space, claim_element, children, claim_space, detach, set_attributes, insert_hydration, append_hydration, update_slot_base, get_all_dirty_from_scope, get_slot_changes, group_outros, transition_out, check_outros, transition_in, get_spread_update, compute_rest_props, getContext, createEventDispatcher, onMount, afterUpdate, onDestroy, exclude_internal_props, binding_callbacks, attr } from './liquivelte-svelte-hs8b900a8a.liquivelte.js';
import { restProps, createEmitter, useTheme, setReactiveContext, f7ready, app, classNames, colorClasses } from './framework7-liquivelte-hs01c0185d.liquivelte.js';

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/node_modules/framework7-liquivelte/components/toolbar.liquivelte generated by Svelte v3.50.0 */
const get_after_inner_slot_changes = dirty => ({});
const get_after_inner_slot_context = ctx => ({});
const get_before_inner_slot_changes = dirty => ({});
const get_before_inner_slot_context = ctx => ({});

// (122:2) {:else}
function create_else_block(ctx) {
	let current;
	const default_slot_template = /*#slots*/ ctx[25].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[24], null);

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
				if (default_slot.p && (!current || dirty[0] & /*$$scope*/ 16777216)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[24],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[24])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[24], dirty, null),
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

// (118:2) {#if inner }
function create_if_block(ctx) {
	let div;
	let current;
	const default_slot_template = /*#slots*/ ctx[25].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[24], null);

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
			attr(div, "class", "toolbar-inner");
		},
		m(target, anchor) {
			insert_hydration(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty[0] & /*$$scope*/ 16777216)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[24],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[24])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[24], dirty, null),
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
		}
	};
}

function create_fragment(ctx) {
	let div;
	let t0;
	let current_block_type_index;
	let if_block;
	let t1;
	let div_class_value;
	let current;
	const before_inner_slot_template = /*#slots*/ ctx[25]["before-inner"];
	const before_inner_slot = create_slot(before_inner_slot_template, ctx, /*$$scope*/ ctx[24], get_before_inner_slot_context);
	const if_block_creators = [create_if_block, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*inner*/ ctx[1]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
	const after_inner_slot_template = /*#slots*/ ctx[25]["after-inner"];
	const after_inner_slot = create_slot(after_inner_slot_template, ctx, /*$$scope*/ ctx[24], get_after_inner_slot_context);

	let div_levels = [
		{
			class: div_class_value = "toolbar " + /*classes*/ ctx[0] + " " + /*computedClasses*/ ctx[3]
		},
		{ "data-f7-slot": /*f7Slot*/ ctx[2] },
		restProps(/*$$restProps*/ ctx[5])
	];

	let div_data = {};

	for (let i = 0; i < div_levels.length; i += 1) {
		div_data = assign(div_data, div_levels[i]);
	}

	return {
		c() {
			div = element("div");
			if (before_inner_slot) before_inner_slot.c();
			t0 = space();
			if_block.c();
			t1 = space();
			if (after_inner_slot) after_inner_slot.c();
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true, "data-f7-slot": true });
			var div_nodes = children(div);
			if (before_inner_slot) before_inner_slot.l(div_nodes);
			t0 = claim_space(div_nodes);
			if_block.l(div_nodes);
			t1 = claim_space(div_nodes);
			if (after_inner_slot) after_inner_slot.l(div_nodes);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			set_attributes(div, div_data);
		},
		m(target, anchor) {
			insert_hydration(target, div, anchor);

			if (before_inner_slot) {
				before_inner_slot.m(div, null);
			}

			append_hydration(div, t0);
			if_blocks[current_block_type_index].m(div, null);
			append_hydration(div, t1);

			if (after_inner_slot) {
				after_inner_slot.m(div, null);
			}

			/*div_binding*/ ctx[26](div);
			current = true;
		},
		p(ctx, dirty) {
			if (before_inner_slot) {
				if (before_inner_slot.p && (!current || dirty[0] & /*$$scope*/ 16777216)) {
					update_slot_base(
						before_inner_slot,
						before_inner_slot_template,
						ctx,
						/*$$scope*/ ctx[24],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[24])
						: get_slot_changes(before_inner_slot_template, /*$$scope*/ ctx[24], dirty, get_before_inner_slot_changes),
						get_before_inner_slot_context
					);
				}
			}

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
				if_block.m(div, t1);
			}

			if (after_inner_slot) {
				if (after_inner_slot.p && (!current || dirty[0] & /*$$scope*/ 16777216)) {
					update_slot_base(
						after_inner_slot,
						after_inner_slot_template,
						ctx,
						/*$$scope*/ ctx[24],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[24])
						: get_slot_changes(after_inner_slot_template, /*$$scope*/ ctx[24], dirty, get_after_inner_slot_changes),
						get_after_inner_slot_context
					);
				}
			}

			set_attributes(div, div_data = get_spread_update(div_levels, [
				(!current || dirty[0] & /*classes, computedClasses*/ 9 && div_class_value !== (div_class_value = "toolbar " + /*classes*/ ctx[0] + " " + /*computedClasses*/ ctx[3])) && { class: div_class_value },
				(!current || dirty[0] & /*f7Slot*/ 4) && { "data-f7-slot": /*f7Slot*/ ctx[2] },
				dirty[0] & /*$$restProps*/ 32 && restProps(/*$$restProps*/ ctx[5])
			]));
		},
		i(local) {
			if (current) return;
			transition_in(before_inner_slot, local);
			transition_in(if_block);
			transition_in(after_inner_slot, local);
			current = true;
		},
		o(local) {
			transition_out(before_inner_slot, local);
			transition_out(if_block);
			transition_out(after_inner_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (before_inner_slot) before_inner_slot.d(detaching);
			if_blocks[current_block_type_index].d();
			if (after_inner_slot) after_inner_slot.d(detaching);
			/*div_binding*/ ctx[26](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	const omit_props_names = [
		"importsSeek","classes","tabbar","labels","scrollable","hidden","noShadow","noHairline","noBorder","position","topMd","topIos","topAurora","top","bottomMd","bottomIos","bottomAurora","bottom","inner","f7Slot"
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
	let { tabbar = false } = $$props;
	let { labels = false } = $$props;
	let { scrollable = false } = $$props;
	let { hidden = false } = $$props;
	let { noShadow = false } = $$props;
	let { noHairline = false } = $$props;
	let { noBorder = false } = $$props;
	let { position = undefined } = $$props;
	let { topMd = undefined } = $$props;
	let { topIos = undefined } = $$props;
	let { topAurora = undefined } = $$props;
	let { top = undefined } = $$props;
	let { bottomMd = undefined } = $$props;
	let { bottomIos = undefined } = $$props;
	let { bottomAurora = undefined } = $$props;
	let { bottom = undefined } = $$props;
	let { inner = true } = $$props;
	let { f7Slot = 'fixed' } = $$props;
	let el;

	let theme = useTheme(t => {
		$$invalidate(23, theme = t);
	});

	setReactiveContext('TabbarContext', () => ({ tabbarHasLabels: labels }));

	function onShow(toolbarEl) {
		if (el !== toolbarEl) return;
		emit('toolbarShow');
	}

	function onHide(toolbarEl) {
		if (el !== toolbarEl) return;
		emit('toolbarHide');
	}

	onMount(() => {
		f7ready(() => {
			if (tabbar) app.f7.toolbar.setHighlight(el);
			app.f7.on('toolbarShow', onShow);
			app.f7.on('toolbarHide', onHide);
		});
	});

	afterUpdate(() => {
		if (tabbar && app.f7 && el) {
			app.f7.toolbar.setHighlight(el);
		}
	});

	onDestroy(() => {
		if (!app.f7) return;
		app.f7.off('toolbarShow', onShow);
		app.f7.off('toolbarHide', onHide);
	});

	function div_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			el = $$value;
			$$invalidate(4, el);
		});
	}

	$$self.$$set = $$new_props => {
		$$invalidate(34, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(5, $$restProps = compute_rest_props($$props, omit_props_names));
		if ('importsSeek' in $$new_props) $$invalidate(6, importsSeek = $$new_props.importsSeek);
		if ('classes' in $$new_props) $$invalidate(0, classes = $$new_props.classes);
		if ('tabbar' in $$new_props) $$invalidate(7, tabbar = $$new_props.tabbar);
		if ('labels' in $$new_props) $$invalidate(8, labels = $$new_props.labels);
		if ('scrollable' in $$new_props) $$invalidate(9, scrollable = $$new_props.scrollable);
		if ('hidden' in $$new_props) $$invalidate(10, hidden = $$new_props.hidden);
		if ('noShadow' in $$new_props) $$invalidate(11, noShadow = $$new_props.noShadow);
		if ('noHairline' in $$new_props) $$invalidate(12, noHairline = $$new_props.noHairline);
		if ('noBorder' in $$new_props) $$invalidate(13, noBorder = $$new_props.noBorder);
		if ('position' in $$new_props) $$invalidate(14, position = $$new_props.position);
		if ('topMd' in $$new_props) $$invalidate(15, topMd = $$new_props.topMd);
		if ('topIos' in $$new_props) $$invalidate(16, topIos = $$new_props.topIos);
		if ('topAurora' in $$new_props) $$invalidate(17, topAurora = $$new_props.topAurora);
		if ('top' in $$new_props) $$invalidate(18, top = $$new_props.top);
		if ('bottomMd' in $$new_props) $$invalidate(19, bottomMd = $$new_props.bottomMd);
		if ('bottomIos' in $$new_props) $$invalidate(20, bottomIos = $$new_props.bottomIos);
		if ('bottomAurora' in $$new_props) $$invalidate(21, bottomAurora = $$new_props.bottomAurora);
		if ('bottom' in $$new_props) $$invalidate(22, bottom = $$new_props.bottom);
		if ('inner' in $$new_props) $$invalidate(1, inner = $$new_props.inner);
		if ('f7Slot' in $$new_props) $$invalidate(2, f7Slot = $$new_props.f7Slot);
		if ('$$scope' in $$new_props) $$invalidate(24, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		$$invalidate(3, computedClasses = classNames(
			classes,
			{
				tabbar,
				'toolbar-bottom': theme && theme.md && bottomMd || theme && theme.ios && bottomIos || theme && theme.aurora && bottomAurora || bottom || position === 'bottom',
				'toolbar-top': theme && theme.md && topMd || theme && theme.ios && topIos || theme && theme.aurora && topAurora || top || position === 'top',
				'tabbar-labels': labels,
				'tabbar-scrollable': scrollable,
				'toolbar-hidden': hidden,
				'no-shadow': noShadow,
				'no-hairline': noHairline || noBorder
			},
			colorClasses($$props)
		));
	};

	$$props = exclude_internal_props($$props);

	return [
		classes,
		inner,
		f7Slot,
		computedClasses,
		el,
		$$restProps,
		importsSeek,
		tabbar,
		labels,
		scrollable,
		hidden,
		noShadow,
		noHairline,
		noBorder,
		position,
		topMd,
		topIos,
		topAurora,
		top,
		bottomMd,
		bottomIos,
		bottomAurora,
		bottom,
		theme,
		$$scope,
		slots,
		div_binding
	];
}

class Toolbar extends SvelteComponent {
	constructor(options) {
		super();

		init(
			this,
			options,
			instance,
			create_fragment,
			safe_not_equal,
			{
				importsSeek: 6,
				classes: 0,
				tabbar: 7,
				labels: 8,
				scrollable: 9,
				hidden: 10,
				noShadow: 11,
				noHairline: 12,
				noBorder: 13,
				position: 14,
				topMd: 15,
				topIos: 16,
				topAurora: 17,
				top: 18,
				bottomMd: 19,
				bottomIos: 20,
				bottomAurora: 21,
				bottom: 22,
				inner: 1,
				f7Slot: 2
			},
			null,
			[-1, -1]
		);
	}
}

export { Toolbar };
