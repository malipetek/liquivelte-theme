import { SvelteComponent, init, safe_not_equal, create_slot, update_slot_base, get_all_dirty_from_scope, get_slot_changes, transition_in, transition_out, getContext, setContext, assign, exclude_internal_props } from './liquivelte-svelte-hse72de747.liquivelte.js';

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/node_modules/framework7-liquivelte/components/router-context-provider.liquivelte generated by Svelte v3.50.0 */

function create_fragment(ctx) {
	let current;
	const default_slot_template = /*#slots*/ ctx[4].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[3], null);

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
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 8)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[3],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[3])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[3], dirty, null),
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

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { importsSeek = 'lower' } = $$props;
	getContext('svelteProps') || {};
	getContext('lec') || {};
	(() => window.cicR = $$props.resetCicR ? 1 : window.cicR + 1)();
	let { route = undefined } = $$props;
	let { router = undefined } = $$props;
	setContext('RouterContext', { route, router });

	$$self.$$set = $$new_props => {
		$$invalidate(9, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ('importsSeek' in $$new_props) $$invalidate(0, importsSeek = $$new_props.importsSeek);
		if ('route' in $$new_props) $$invalidate(1, route = $$new_props.route);
		if ('router' in $$new_props) $$invalidate(2, router = $$new_props.router);
		if ('$$scope' in $$new_props) $$invalidate(3, $$scope = $$new_props.$$scope);
	};

	$$props = exclude_internal_props($$props);
	return [importsSeek, route, router, $$scope, slots];
}

class Router_context_provider extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { importsSeek: 0, route: 1, router: 2 });
	}
}

export { Router_context_provider };
