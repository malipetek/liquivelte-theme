import { SvelteComponent, init, safe_not_equal, element, text, claim_element, children, claim_text, detach, insert_hydration, append_hydration, noop, getContext, assign, exclude_internal_props } from './liquivelte-svelte-hsa803e515.liquivelte.js';
import './liquivelte-liquid-hs6b49bbd7.liquivelte.js';
import './framework7-liquivelte-get-params-hs5b727abe.liquivelte.js';
import './framework7-liquivelte-utils-hs3552a7bb.liquivelte.js';
import './framework7-liquivelte-params-list-hs7a0c8b0f.liquivelte.js';

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/src/sections/main-page/index.liquivelte generated by Svelte v3.50.0 */

function create_fragment(ctx) {
	let div;
	let t;

	return {
		c() {
			div = element("div");
			t = text("main page");
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);
			t = claim_text(div_nodes, "main page");
			div_nodes.forEach(detach);
		},
		m(target, anchor) {
			insert_hydration(target, div, anchor);
			append_hydration(div, t);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { importsSeek = 'lower' } = $$props;
	getContext('svelteProps') || {};
	getContext('lec') || {};
	(() => window.cicR = $$props.resetCicR ? 1 : window.cicR + 1)();

	$$self.$$set = $$new_props => {
		$$invalidate(5, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ('importsSeek' in $$new_props) $$invalidate(0, importsSeek = $$new_props.importsSeek);
	};

	$$props = exclude_internal_props($$props);
	return [importsSeek];
}

class Main_page extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { importsSeek: 0 });
	}
}

export { Main_page as default };
