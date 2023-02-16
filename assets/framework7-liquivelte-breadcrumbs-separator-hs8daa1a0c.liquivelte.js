import { SvelteComponent, init, safe_not_equal, assign, element, claim_element, children, detach, set_attributes, insert_hydration, get_spread_update, noop, compute_rest_props, getContext, exclude_internal_props } from './liquivelte-svelte-hs035d430e.liquivelte.js';
import { restProps, classNames } from './framework7-liquivelte-hsa0091f48.liquivelte.js';

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/node_modules/framework7-liquivelte/components/breadcrumbs-separator.liquivelte generated by Svelte v3.50.0 */

function create_fragment(ctx) {
	let div;
	let div_class_value;

	let div_levels = [
		{
			class: div_class_value = "breadcrumbs-separator " + /*classes*/ ctx[0]
		},
		restProps(/*$$restProps*/ ctx[1])
	];

	let div_data = {};

	for (let i = 0; i < div_levels.length; i += 1) {
		div_data = assign(div_data, div_levels[i]);
	}

	return {
		c() {
			div = element("div");
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			children(div).forEach(detach);
			this.h();
		},
		h() {
			set_attributes(div, div_data);
		},
		m(target, anchor) {
			insert_hydration(target, div, anchor);
		},
		p(ctx, [dirty]) {
			set_attributes(div, div_data = get_spread_update(div_levels, [
				dirty & /*classes*/ 1 && div_class_value !== (div_class_value = "breadcrumbs-separator " + /*classes*/ ctx[0]) && { class: div_class_value },
				dirty & /*$$restProps*/ 2 && restProps(/*$$restProps*/ ctx[1])
			]));
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	const omit_props_names = ["importsSeek","classes"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { importsSeek = 'lower' } = $$props;
	getContext('svelteProps') || {};
	getContext('lec') || {};
	(() => window.cicR = $$props.resetCicR ? 1 : window.cicR + 1)();
	let { classes = '' } = $$props;

	$$self.$$set = $$new_props => {
		$$invalidate(8, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(1, $$restProps = compute_rest_props($$props, omit_props_names));
		if ('importsSeek' in $$new_props) $$invalidate(2, importsSeek = $$new_props.importsSeek);
		if ('classes' in $$new_props) $$invalidate(0, classes = $$new_props.classes);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*classes*/ 1) {
			$$invalidate(0, classes = classNames(classes));
		}
	};

	$$props = exclude_internal_props($$props);
	return [classes, $$restProps, importsSeek];
}

class Breadcrumbs_separator extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { importsSeek: 2, classes: 0 });
	}
}

export { Breadcrumbs_separator };
