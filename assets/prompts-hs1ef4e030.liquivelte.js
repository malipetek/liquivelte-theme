import { SvelteComponent, init, safe_not_equal, element, claim_element, children, detach, attr, insert_hydration, noop, getContext, onMount, assign, exclude_internal_props } from './liquivelte-svelte-hsa803e515.liquivelte.js';
import { f7ready } from './framework7-liquivelte-hs2475aa90.liquivelte.js';
import './framework7-liquivelte-get-params-hs5b727abe.liquivelte.js';
import './liquivelte-liquid-hs6b49bbd7.liquivelte.js';
import './framework7-liquivelte-popup-hsc2bb4ca9.liquivelte.js';
import './framework7-liquivelte-view-hs5879c99b.liquivelte.js';
import './framework7-liquivelte-router-context-provider-hse7089cdf.liquivelte.js';
import './framework7-liquivelte-login-screen-hs3e3c04a8.liquivelte.js';
import './framework7-liquivelte-sheet-hse1bd4eb5.liquivelte.js';
import './framework7-liquivelte-popover-hs31a1f66d.liquivelte.js';
import './framework7-liquivelte-panel-hs11af60cd.liquivelte.js';
import './framework7-liquivelte-utils-hs3552a7bb.liquivelte.js';
import './framework7-liquivelte-params-list-hs7a0c8b0f.liquivelte.js';

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/src/sections/prompts/index.liquivelte generated by Svelte v3.50.0 */

function create_fragment(ctx) {
	let div;

	return {
		c() {
			div = element("div");
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { prompts: true });
			var div_nodes = children(div);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div, "prompts", "");
		},
		m(target, anchor) {
			insert_hydration(target, div, anchor);
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
	let notification;

	onMount(() => {
		f7ready(f7 => {
			notification = f7.notification.create({
				title: 'Newsletter',
				titleRightText: 'now',
				subtitle: 'Subscribe to newsletter to get 20% off',
				text: 'Tap on this to subscribe.',
				closeTimeout: 3000
			});

			setTimeout(
				() => {
					notification.open();
				},
				2000
			);
		});
	});

	$$self.$$set = $$new_props => {
		$$invalidate(6, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ('importsSeek' in $$new_props) $$invalidate(0, importsSeek = $$new_props.importsSeek);
	};

	$$props = exclude_internal_props($$props);
	return [importsSeek];
}

class Prompts extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { importsSeek: 0 });
	}
}

export { Prompts as default };
