import { SvelteComponent, init, safe_not_equal, create_slot, assign, element, claim_element, children, detach, set_attributes, toggle_class, insert_hydration, update_slot_base, get_all_dirty_from_scope, get_slot_changes, get_spread_update, transition_in, transition_out, compute_rest_props, getContext, exclude_internal_props } from './liquivelte-svelte-hs532e1aa9.liquivelte.js';
import { restProps, classNames, colorClasses } from './framework7-liquivelte-hsa0091f48.liquivelte.js';

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/node_modules/framework7-liquivelte/components/block-title.liquivelte generated by Svelte v3.50.0 */

function create_fragment(ctx) {
	let div;
	let div_class_value;
	let current;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);

	let div_levels = [
		{
			class: div_class_value = "'block-title' " + /*classes*/ ctx[2] + " " + /*computedClasses*/ ctx[3]
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
			set_attributes(div, div_data);
			toggle_class(div, "block-title-large", /*large*/ ctx[0]);
			toggle_class(div, "block-title-medium", /*medium*/ ctx[1]);
		},
		m(target, anchor) {
			insert_hydration(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[5],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[5])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[5], dirty, null),
						null
					);
				}
			}

			set_attributes(div, div_data = get_spread_update(div_levels, [
				(!current || dirty & /*classes, computedClasses*/ 12 && div_class_value !== (div_class_value = "'block-title' " + /*classes*/ ctx[2] + " " + /*computedClasses*/ ctx[3])) && { class: div_class_value },
				dirty & /*$$restProps*/ 16 && restProps(/*$$restProps*/ ctx[4])
			]));

			toggle_class(div, "block-title-large", /*large*/ ctx[0]);
			toggle_class(div, "block-title-medium", /*medium*/ ctx[1]);
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

function instance($$self, $$props, $$invalidate) {
	const omit_props_names = ["large","medium","classes"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	getContext('svelteProps') || {};
	getContext('lec') || {};
	let { large = false } = $$props;
	let { medium = false } = $$props;
	let computedClasses = undefined;
	let { classes = '' } = $$props;

	$$self.$$set = $$new_props => {
		$$invalidate(10, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(4, $$restProps = compute_rest_props($$props, omit_props_names));
		if ('large' in $$new_props) $$invalidate(0, large = $$new_props.large);
		if ('medium' in $$new_props) $$invalidate(1, medium = $$new_props.medium);
		if ('classes' in $$new_props) $$invalidate(2, classes = $$new_props.classes);
		if ('$$scope' in $$new_props) $$invalidate(5, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		$$invalidate(3, computedClasses = classNames(classes, colorClasses($$props)));
	};

	$$props = exclude_internal_props($$props);
	return [large, medium, classes, computedClasses, $$restProps, $$scope, slots];
}

class Block_title extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { large: 0, medium: 1, classes: 2 });
	}
}

export { Block_title };
