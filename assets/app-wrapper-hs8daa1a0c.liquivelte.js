import { SvelteComponent, init, safe_not_equal, create_component, claim_component, mount_component, transition_in, transition_out, destroy_component, beforeUpdate, create_slot, element, claim_element, children, detach, attr, insert_hydration, append_hydration, action_destroyer, update_slot_base, get_all_dirty_from_scope, get_slot_changes, is_function } from './liquivelte-svelte-hs532e1aa9.liquivelte.js';
import './framework7-liquivelte-hs5d6b599e.liquivelte.js';
import { View } from './framework7-liquivelte-view-hs8daa1a0c.liquivelte.js';
import { App } from './framework7-liquivelte-app-hs8daa1a0c.liquivelte.js';
import { Page } from './framework7-liquivelte-page-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-get-params-hs6b273664.liquivelte.js';
import './framework7-liquivelte-popup-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-login-screen-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-sheet-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-popover-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-panel-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-router-context-provider-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-routable-modals-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-page-content-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-preloader-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-utils-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-params-list-hs8daa1a0c.liquivelte.js';

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/src/snippets/app-wrapper.liquivelte generated by Svelte v3.50.0 */

function create_default_slot_2(ctx) {
	let div1;
	let div0;
	let persistingchild_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[2].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[3], null);

	return {
		c() {
			div1 = element("div");
			div0 = element("div");
			if (default_slot) default_slot.c();
			this.h();
		},
		l(nodes) {
			div1 = claim_element(nodes, "DIV", {});
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			if (default_slot) default_slot.l(div0_nodes);
			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div0, "class", "liveslot");
		},
		m(target, anchor) {
			insert_hydration(target, div1, anchor);
			append_hydration(div1, div0);

			if (default_slot) {
				default_slot.m(div0, null);
			}

			current = true;

			if (!mounted) {
				dispose = action_destroyer(persistingchild_action = persistingchild.call(null, div1, /*ls_cache*/ ctx[1]));
				mounted = true;
			}
		},
		p(ctx, dirty) {
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

			if (persistingchild_action && is_function(persistingchild_action.update) && dirty & /*ls_cache*/ 2) persistingchild_action.update.call(null, /*ls_cache*/ ctx[1]);
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
			if (detaching) detach(div1);
			if (default_slot) default_slot.d(detaching);
			mounted = false;
			dispose();
		}
	};
}

// (7677:2) <View  main     lec={lec} >
function create_default_slot_1(ctx) {
	let page;
	let current;

	page = new Page({
			props: {
				lec: /*lec*/ ctx[0],
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(page.$$.fragment);
		},
		l(nodes) {
			claim_component(page.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(page, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const page_changes = {};
			if (dirty & /*lec*/ 1) page_changes.lec = /*lec*/ ctx[0];

			if (dirty & /*$$scope, ls_cache*/ 10) {
				page_changes.$$scope = { dirty, ctx };
			}

			page.$set(page_changes);
		},
		i(local) {
			if (current) return;
			transition_in(page.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(page.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(page, detaching);
		}
	};
}

// (7676:0) <App  theme="ios" name="My App" id="com.demoapp.test"     lec={lec} >
function create_default_slot(ctx) {
	let view;
	let current;

	view = new View({
			props: {
				main: true,
				lec: /*lec*/ ctx[0],
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(view.$$.fragment);
		},
		l(nodes) {
			claim_component(view.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(view, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const view_changes = {};
			if (dirty & /*lec*/ 1) view_changes.lec = /*lec*/ ctx[0];

			if (dirty & /*$$scope, lec, ls_cache*/ 11) {
				view_changes.$$scope = { dirty, ctx };
			}

			view.$set(view_changes);
		},
		i(local) {
			if (current) return;
			transition_in(view.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(view.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(view, detaching);
		}
	};
}

function create_fragment(ctx) {
	let app;
	let current;

	app = new App({
			props: {
				theme: "ios",
				name: "My App",
				id: "com.demoapp.test",
				lec: /*lec*/ ctx[0],
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(app.$$.fragment);
		},
		l(nodes) {
			claim_component(app.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(app, target, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			const app_changes = {};
			if (dirty & /*lec*/ 1) app_changes.lec = /*lec*/ ctx[0];

			if (dirty & /*$$scope, lec, ls_cache*/ 11) {
				app_changes.$$scope = { dirty, ctx };
			}

			app.$set(app_changes);
		},
		i(local) {
			if (current) return;
			transition_in(app.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(app.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(app, detaching);
		}
	};
}

function persistingchild(node, keep) {
	if (node.children[0] !== keep) {
		node.replaceChild(keep, node.children[0]);
	}
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { lec } = $$props;

	// import { Workbox } from 'workbox-window';
	let ls_cache;

	beforeUpdate(() => {
		if (!ls_cache) {
			$$invalidate(1, ls_cache = document.querySelector('.liveslot'));

			if (ls_cache.isConnected) {
				ls_cache.parentNode.removeChild(ls_cache);
			}
		}

		console.log('oh shit, the wrapper component is about to update');
		return false;
	});

	$$self.$$set = $$props => {
		if ('lec' in $$props) $$invalidate(0, lec = $$props.lec);
		if ('$$scope' in $$props) $$invalidate(3, $$scope = $$props.$$scope);
	};

	return [lec, ls_cache, slots, $$scope];
}

class App_wrapper extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { lec: 0 });
	}
}

export { App_wrapper as default };
