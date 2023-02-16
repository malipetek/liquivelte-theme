import { SvelteComponent, init, safe_not_equal, create_slot, assign, element, claim_element, children, detach, set_attributes, insert_hydration, update_slot_base, get_all_dirty_from_scope, get_slot_changes, get_spread_update, transition_in, transition_out, compute_rest_props, getContext, exclude_internal_props } from './liquivelte-svelte-hs035d430e.liquivelte.js';
import { restProps, classNames, colorClasses } from './framework7-liquivelte-hsa0091f48.liquivelte.js';

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/node_modules/framework7-liquivelte/components/nav-right.liquivelte generated by Svelte v3.50.0 */

function create_fragment(ctx) {
	let div;
	let current;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);
	let div_levels = [{ class: /*computedClasses*/ ctx[0] }, restProps(/*$$restProps*/ ctx[1])];
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
				(!current || dirty & /*computedClasses*/ 1) && { class: /*computedClasses*/ ctx[0] },
				dirty & /*$$restProps*/ 2 && restProps(/*$$restProps*/ ctx[1])
			]));
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
	const omit_props_names = ["importsSeek","classes","sliding"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	let { importsSeek = 'lower' } = $$props;
	getContext('svelteProps') || {};
	getContext('lec') || {};
	(() => window.cicR = $$props.resetCicR ? 1 : window.cicR + 1)();
	let computedClasses = undefined;
	let { classes = '' } = $$props;
	let { sliding = undefined } = $$props;

	$$self.$$set = $$new_props => {
		$$invalidate(11, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(1, $$restProps = compute_rest_props($$props, omit_props_names));
		if ('importsSeek' in $$new_props) $$invalidate(2, importsSeek = $$new_props.importsSeek);
		if ('classes' in $$new_props) $$invalidate(3, classes = $$new_props.classes);
		if ('sliding' in $$new_props) $$invalidate(4, sliding = $$new_props.sliding);
		if ('$$scope' in $$new_props) $$invalidate(5, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		$$invalidate(0, computedClasses = classNames(classes, 'right', { sliding }, colorClasses($$props)));
	};

	$$props = exclude_internal_props($$props);
	return [computedClasses, $$restProps, importsSeek, classes, sliding, $$scope, slots];
}

class Nav_right extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { importsSeek: 2, classes: 3, sliding: 4 });
	}
}

export { Nav_right };