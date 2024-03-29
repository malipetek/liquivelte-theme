import { SvelteComponent, init, safe_not_equal, create_slot, element, space, create_component, claim_element, children, claim_space, claim_component, detach, attr, insert_hydration, append_hydration, mount_component, update_slot_base, get_all_dirty_from_scope, get_slot_changes, transition_in, transition_out, destroy_component, getContext, onMount, assign, exclude_internal_props, binding_callbacks } from './liquivelte-svelte-hse72de747.liquivelte.js';
import { app, f7init, noUndefinedProps, classNames, colorClasses } from './framework7-liquivelte-hs390c8ed0.liquivelte.js';
import { Routable_modals } from './framework7-liquivelte-routable-modals-hs29491664.liquivelte.js';

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/node_modules/framework7-liquivelte/components/app.liquivelte generated by Svelte v3.50.0 */

function create_fragment(ctx) {
	let div;
	let t;
	let routablemodals;
	let current;
	const default_slot_template = /*#slots*/ ctx[4].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[3], null);
	routablemodals = new Routable_modals({});

	return {
		c() {
			div = element("div");
			if (default_slot) default_slot.c();
			t = space();
			create_component(routablemodals.$$.fragment);
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			if (default_slot) default_slot.l(div_nodes);
			t = claim_space(div_nodes);
			claim_component(routablemodals.$$.fragment, div_nodes);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div, "class", /*classes*/ ctx[0]);
		},
		m(target, anchor) {
			insert_hydration(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			append_hydration(div, t);
			mount_component(routablemodals, div, null);
			/*div_binding*/ ctx[5](div);
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

			if (!current || dirty & /*classes*/ 1) {
				attr(div, "class", /*classes*/ ctx[0]);
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			transition_in(routablemodals.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			transition_out(routablemodals.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (default_slot) default_slot.d(detaching);
			destroy_component(routablemodals);
			/*div_binding*/ ctx[5](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { importsSeek = 'lower' } = $$props;
	getContext('svelteProps') || {};
	getContext('lec') || {};
	(() => window.cicR = $$props.resetCicR ? 1 : window.cicR + 1)();
	let { classes = '' } = $$props;
	let el;

	if (!app.f7 || typeof window === 'undefined') {
		f7init(el, noUndefinedProps($$props), false);
	}

	onMount(() => {
		const parentEl = el.parentNode;

		if (parentEl && parentEl !== document.body && parentEl.parentNode === document.body) {
			parentEl.style.height = '100%';
		}

		if (app.f7) {
			app.f7.init(el);
			return;
		}

		f7init(el, noUndefinedProps($$props), true);
	});

	function div_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			el = $$value;
			$$invalidate(1, el);
		});
	}

	$$self.$$set = $$new_props => {
		$$invalidate(11, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ('importsSeek' in $$new_props) $$invalidate(2, importsSeek = $$new_props.importsSeek);
		if ('classes' in $$new_props) $$invalidate(0, classes = $$new_props.classes);
		if ('$$scope' in $$new_props) $$invalidate(3, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		$$invalidate(0, classes = classNames(classes, 'framework7-root', colorClasses($$props)));
	};

	$$props = exclude_internal_props($$props);
	return [classes, el, importsSeek, $$scope, slots, div_binding];
}

class App extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { importsSeek: 2, classes: 0 });
	}
}

export { App };
