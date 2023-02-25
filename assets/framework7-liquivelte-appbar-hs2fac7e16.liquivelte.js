import { SvelteComponent, init, safe_not_equal, create_slot, assign, element, space, claim_element, children, claim_space, detach, set_attributes, insert_hydration, append_hydration, update_slot_base, get_all_dirty_from_scope, get_slot_changes, group_outros, transition_out, check_outros, transition_in, get_spread_update, compute_rest_props, getContext, exclude_internal_props, attr } from './liquivelte-svelte-hs090e373f.liquivelte.js';
import { restProps, classNames, colorClasses } from './framework7-liquivelte-hs33dd931d.liquivelte.js';

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/node_modules/framework7-liquivelte/components/appbar.liquivelte generated by Svelte v3.50.0 */
const get_after_inner_slot_changes = dirty => ({});
const get_after_inner_slot_context = ctx => ({});
const get_before_inner_slot_changes = dirty => ({});
const get_before_inner_slot_context = ctx => ({});

// (46:2) {:else}
function create_else_block(ctx) {
	let current;
	const default_slot_template = /*#slots*/ ctx[11].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[10], null);

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
				if (default_slot.p && (!current || dirty & /*$$scope*/ 1024)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[10],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[10])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[10], dirty, null),
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

// (42:2) {#if inner }
function create_if_block(ctx) {
	let div;
	let div_class_value;
	let current;
	const default_slot_template = /*#slots*/ ctx[11].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[10], null);

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
			attr(div, "class", div_class_value = "appbar-inner " + /*innerClasses*/ ctx[3]);
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
				if (default_slot.p && (!current || dirty & /*$$scope*/ 1024)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[10],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[10])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[10], dirty, null),
						null
					);
				}
			}

			if (!current || dirty & /*innerClasses*/ 8 && div_class_value !== (div_class_value = "appbar-inner " + /*innerClasses*/ ctx[3])) {
				attr(div, "class", div_class_value);
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
	const before_inner_slot_template = /*#slots*/ ctx[11]["before-inner"];
	const before_inner_slot = create_slot(before_inner_slot_template, ctx, /*$$scope*/ ctx[10], get_before_inner_slot_context);
	const if_block_creators = [create_if_block, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*inner*/ ctx[1]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
	const after_inner_slot_template = /*#slots*/ ctx[11]["after-inner"];
	const after_inner_slot = create_slot(after_inner_slot_template, ctx, /*$$scope*/ ctx[10], get_after_inner_slot_context);

	let div_levels = [
		{
			class: div_class_value = "appbar " + /*classes*/ ctx[0] + " " + /*computedClasses*/ ctx[2]
		},
		restProps(/*$$restProps*/ ctx[4])
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
			div = claim_element(nodes, "DIV", { class: true });
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

			current = true;
		},
		p(ctx, [dirty]) {
			if (before_inner_slot) {
				if (before_inner_slot.p && (!current || dirty & /*$$scope*/ 1024)) {
					update_slot_base(
						before_inner_slot,
						before_inner_slot_template,
						ctx,
						/*$$scope*/ ctx[10],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[10])
						: get_slot_changes(before_inner_slot_template, /*$$scope*/ ctx[10], dirty, get_before_inner_slot_changes),
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
				if (after_inner_slot.p && (!current || dirty & /*$$scope*/ 1024)) {
					update_slot_base(
						after_inner_slot,
						after_inner_slot_template,
						ctx,
						/*$$scope*/ ctx[10],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[10])
						: get_slot_changes(after_inner_slot_template, /*$$scope*/ ctx[10], dirty, get_after_inner_slot_changes),
						get_after_inner_slot_context
					);
				}
			}

			set_attributes(div, div_data = get_spread_update(div_levels, [
				(!current || dirty & /*classes, computedClasses*/ 5 && div_class_value !== (div_class_value = "appbar " + /*classes*/ ctx[0] + " " + /*computedClasses*/ ctx[2])) && { class: div_class_value },
				dirty & /*$$restProps*/ 16 && restProps(/*$$restProps*/ ctx[4])
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
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let innerClasses;

	const omit_props_names = [
		"importsSeek","classes","noShadow","noHairline","inner","innerClass","innerClassName"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	let { importsSeek = 'lower' } = $$props;
	getContext('svelteProps') || {};
	getContext('lec') || {};
	(() => window.cicR = $$props.resetCicR ? 1 : window.cicR + 1)();
	let computedClasses = undefined;
	let { classes = '' } = $$props;
	let { noShadow = undefined } = $$props;
	let { noHairline = undefined } = $$props;
	let { inner = true } = $$props;
	let { innerClass = undefined } = $$props;
	let { innerClassName = undefined } = $$props;

	$$self.$$set = $$new_props => {
		$$invalidate(16, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(4, $$restProps = compute_rest_props($$props, omit_props_names));
		if ('importsSeek' in $$new_props) $$invalidate(5, importsSeek = $$new_props.importsSeek);
		if ('classes' in $$new_props) $$invalidate(0, classes = $$new_props.classes);
		if ('noShadow' in $$new_props) $$invalidate(6, noShadow = $$new_props.noShadow);
		if ('noHairline' in $$new_props) $$invalidate(7, noHairline = $$new_props.noHairline);
		if ('inner' in $$new_props) $$invalidate(1, inner = $$new_props.inner);
		if ('innerClass' in $$new_props) $$invalidate(8, innerClass = $$new_props.innerClass);
		if ('innerClassName' in $$new_props) $$invalidate(9, innerClassName = $$new_props.innerClassName);
		if ('$$scope' in $$new_props) $$invalidate(10, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		$$invalidate(2, computedClasses = classNames(
			classes,
			{
				'no-shadow': noShadow,
				'no-hairline': noHairline
			},
			colorClasses($$props)
		));

		if ($$self.$$.dirty & /*innerClass, innerClassName*/ 768) {
			$$invalidate(3, innerClasses = classNames(innerClass, innerClassName));
		}
	};

	$$props = exclude_internal_props($$props);

	return [
		classes,
		inner,
		computedClasses,
		innerClasses,
		$$restProps,
		importsSeek,
		noShadow,
		noHairline,
		innerClass,
		innerClassName,
		$$scope,
		slots
	];
}

class Appbar extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			importsSeek: 5,
			classes: 0,
			noShadow: 6,
			noHairline: 7,
			inner: 1,
			innerClass: 8,
			innerClassName: 9
		});
	}
}

export { Appbar };