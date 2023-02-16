import { SvelteComponent, init, safe_not_equal, element, text, claim_element, children, claim_text, detach, insert_hydration, append_hydration, noop, getContext, assign, exclude_internal_props } from './liquivelte-svelte-hs035d430e.liquivelte.js';
import './framework7-liquivelte-get-params-hs6b273664.liquivelte.js';
import './framework7-liquivelte-utils-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-params-list-hs8daa1a0c.liquivelte.js';

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/src/sections/collection-banner.liquivelte generated by Svelte v3.50.0 */

function create_fragment(ctx) {
	let h1;
	let t;

	return {
		c() {
			h1 = element("h1");
			t = text("Collection Banner");
		},
		l(nodes) {
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t = claim_text(h1_nodes, "Collection Banner");
			h1_nodes.forEach(detach);
		},
		m(target, anchor) {
			insert_hydration(target, h1, anchor);
			append_hydration(h1, t);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(h1);
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

class Collection_banner extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { importsSeek: 0 });
	}
}

export { Collection_banner as default };
