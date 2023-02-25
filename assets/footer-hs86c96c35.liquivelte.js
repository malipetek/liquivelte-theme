import { SvelteComponent, init, safe_not_equal, element, text, claim_element, children, claim_text, detach, insert_hydration, append_hydration, noop } from './liquivelte-svelte-hsa803e515.liquivelte.js';
import './liquivelte-liquid-hs6b49bbd7.liquivelte.js';
import './framework7-liquivelte-get-params-hs5b727abe.liquivelte.js';
import './framework7-liquivelte-utils-hs3552a7bb.liquivelte.js';
import './framework7-liquivelte-params-list-hs7a0c8b0f.liquivelte.js';

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/src/sections/footer.liquivelte generated by Svelte v3.50.0 */

function create_fragment(ctx) {
	let div;
	let t;

	return {
		c() {
			div = element("div");
			t = text("Footer");
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);
			t = claim_text(div_nodes, "Footer");
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

class Footer extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export { Footer as default };