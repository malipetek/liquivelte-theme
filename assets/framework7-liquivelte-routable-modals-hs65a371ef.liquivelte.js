import { SvelteComponent, init, safe_not_equal, element, claim_element, children, detach, attr, insert_hydration, group_outros, update_keyed_each, outro_and_destroy_block, check_outros, transition_in, transition_out, getContext, onMount, afterUpdate, onDestroy, assign, exclude_internal_props, empty, create_component, claim_component, mount_component, get_spread_update, get_spread_object, destroy_component, tick, binding_callbacks } from './liquivelte-svelte-hs860fcb0f.liquivelte.js';
import { app } from './framework7-liquivelte-hsbc78d147.liquivelte.js';

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/node_modules/framework7-liquivelte/components/routable-modals.liquivelte generated by Svelte v3.50.0 */

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[11] = list[i];
	return child_ctx;
}

// (45:2) {#each modals as modal (modal.id)}
function create_each_block(key_1, ctx) {
	let first;
	let switch_instance;
	let switch_instance_anchor;
	let current;
	const switch_instance_spread_levels = [/*modal*/ ctx[11].props];
	var switch_value = /*modal*/ ctx[11].component;

	function switch_props(ctx) {
		let switch_instance_props = {};

		for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
			switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
		}

		return { props: switch_instance_props };
	}

	if (switch_value) {
		switch_instance = new switch_value(switch_props());
	}

	return {
		key: key_1,
		first: null,
		c() {
			first = empty();
			if (switch_instance) create_component(switch_instance.$$.fragment);
			switch_instance_anchor = empty();
			this.h();
		},
		l(nodes) {
			first = empty();
			if (switch_instance) claim_component(switch_instance.$$.fragment, nodes);
			switch_instance_anchor = empty();
			this.h();
		},
		h() {
			this.first = first;
		},
		m(target, anchor) {
			insert_hydration(target, first, anchor);

			if (switch_instance) {
				mount_component(switch_instance, target, anchor);
			}

			insert_hydration(target, switch_instance_anchor, anchor);
			current = true;
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;

			const switch_instance_changes = (dirty & /*modals*/ 1)
			? get_spread_update(switch_instance_spread_levels, [get_spread_object(/*modal*/ ctx[11].props)])
			: {};

			if (switch_value !== (switch_value = /*modal*/ ctx[11].component)) {
				if (switch_instance) {
					group_outros();
					const old_component = switch_instance;

					transition_out(old_component.$$.fragment, 1, 0, () => {
						destroy_component(old_component, 1);
					});

					check_outros();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props());
					create_component(switch_instance.$$.fragment);
					transition_in(switch_instance.$$.fragment, 1);
					mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
				} else {
					switch_instance = null;
				}
			} else if (switch_value) {
				switch_instance.$set(switch_instance_changes);
			}
		},
		i(local) {
			if (current) return;
			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
			current = true;
		},
		o(local) {
			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(first);
			if (detaching) detach(switch_instance_anchor);
			if (switch_instance) destroy_component(switch_instance, detaching);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let current;
	let each_value = /*modals*/ ctx[0];
	const get_key = ctx => /*modal*/ ctx[11].id;

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	return {
		c() {
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div, "class", "framework7-modals");
		},
		m(target, anchor) {
			insert_hydration(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			/*div_binding*/ ctx[3](div);
			current = true;
		},
		p(ctx, [dirty]) {
			if (dirty & /*modals*/ 1) {
				each_value = /*modals*/ ctx[0];
				group_outros();
				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div, outro_and_destroy_block, create_each_block, null, get_each_context);
				check_outros();
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d();
			}

			/*div_binding*/ ctx[3](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { importsSeek = 'lower' } = $$props;
	getContext('svelteProps') || {};
	getContext('lec') || {};
	(() => window.cicR = $$props.resetCicR ? 1 : window.cicR + 1)();
	let modals = [];
	let el;
	let routerData;

	onMount(() => {
		routerData = {
			el,
			modals,
			setModals(m) {
				tick().then(() => {
					$$invalidate(0, modals = m);
				});
			}
		};

		app.f7routers.modals = routerData;
	});

	afterUpdate(() => {
		if (!routerData) return;
		app.f7events.emit('modalsRouterDidUpdate', routerData);
	});

	onDestroy(() => {
		if (!routerData) return;
		app.f7routers.modals = null;
		routerData = null;
	});

	function div_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			el = $$value;
			$$invalidate(1, el);
		});
	}

	$$self.$$set = $$new_props => {
		$$invalidate(10, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ('importsSeek' in $$new_props) $$invalidate(2, importsSeek = $$new_props.importsSeek);
	};

	$$props = exclude_internal_props($$props);
	return [modals, el, importsSeek, div_binding];
}

class Routable_modals extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { importsSeek: 2 });
	}
}

export { Routable_modals };
