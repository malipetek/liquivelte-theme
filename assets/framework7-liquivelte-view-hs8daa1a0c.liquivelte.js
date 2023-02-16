import { SvelteComponent, init, safe_not_equal, create_slot, element, space, claim_element, children, claim_space, detach, attr, toggle_class, insert_hydration, append_hydration, update_slot_base, get_all_dirty_from_scope, get_slot_changes, transition_in, group_outros, check_outros, transition_out, destroy_each, getContext, createEventDispatcher, onMount, tick, afterUpdate, onDestroy, assign, exclude_internal_props, create_component, claim_component, mount_component, destroy_component, binding_callbacks, empty, get_spread_update, get_spread_object } from './liquivelte-svelte-hs035d430e.liquivelte.js';
import { createEmitter, app, noUndefinedProps, getRouterInitialComponent, useTab, f7ready, classNames, colorClasses, getRouterId } from './framework7-liquivelte-hsa0091f48.liquivelte.js';
import { Router_context_provider } from './framework7-liquivelte-router-context-provider-hs8daa1a0c.liquivelte.js';

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/node_modules/framework7-liquivelte/components/view.liquivelte generated by Svelte v3.50.0 */

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[37] = list[i];
	child_ctx[40] = i;

	const constants_0 = {
		first: /*index*/ child_ctx[40] === 0,
		index: /*index*/ child_ctx[40] + 1,
		index0: /*index*/ child_ctx[40],
		last: /*index*/ child_ctx[40] === /*viewpages*/ child_ctx[8].length - 1,
		rindex: /*viewpages*/ child_ctx[8].length - /*index*/ child_ctx[40],
		rindex0: /*viewpages*/ child_ctx[8].length - /*index*/ child_ctx[40] - 1,
		length: /*viewpages*/ child_ctx[8].length
	};

	child_ctx[38] = constants_0;
	return child_ctx;
}

const get_default_slot_spread_changes_1 = dirty => dirty[0] & /*viewpages*/ 256;
const get_default_slot_changes_1 = dirty => ({});
const get_default_slot_context_1 = ctx => ({ .../*page*/ ctx[37].props });
const get_default_slot_spread_changes = dirty => dirty[0] & /*viewpages*/ 256;
const get_default_slot_changes = dirty => ({ view: dirty[0] & /*f7View*/ 64 });

const get_default_slot_context = ctx => ({
	view: /*f7View*/ ctx[6],
	.../*page*/ ctx[37].props
});

// (227:6) {:else}
function create_else_block(ctx) {
	let current;
	const default_slot_template = /*#slots*/ ctx[13].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[15], get_default_slot_context_1);

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
		p(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty[0] & /*$$scope, viewpages*/ 33024)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[15],
						get_default_slot_spread_changes_1(dirty) || !current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[15])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[15], dirty, get_default_slot_changes_1),
						get_default_slot_context_1
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

// (225:6) {#if initialized }
function create_if_block(ctx) {
	let switch_instance;
	let switch_instance_anchor;
	let current;
	const switch_instance_spread_levels = [/*page*/ ctx[37].props];
	var switch_value = /*page*/ ctx[37].component;

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
		c() {
			if (switch_instance) create_component(switch_instance.$$.fragment);
			switch_instance_anchor = empty();
		},
		l(nodes) {
			if (switch_instance) claim_component(switch_instance.$$.fragment, nodes);
			switch_instance_anchor = empty();
		},
		m(target, anchor) {
			if (switch_instance) {
				mount_component(switch_instance, target, anchor);
			}

			insert_hydration(target, switch_instance_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const switch_instance_changes = (dirty[0] & /*viewpages*/ 256)
			? get_spread_update(switch_instance_spread_levels, [get_spread_object(/*page*/ ctx[37].props)])
			: {};

			if (switch_value !== (switch_value = /*page*/ ctx[37].component)) {
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
			if (detaching) detach(switch_instance_anchor);
			if (switch_instance) destroy_component(switch_instance, detaching);
		}
	};
}

// (224:4) <RouterContextProvider  route="{page.props.f7route}" router="{page.props.f7router}" >
function create_default_slot(ctx) {
	let current_block_type_index;
	let if_block;
	let t;
	let current;
	const if_block_creators = [create_if_block, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*initialized*/ ctx[7]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c() {
			if_block.c();
			t = space();
		},
		l(nodes) {
			if_block.l(nodes);
			t = claim_space(nodes);
		},
		m(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			insert_hydration(target, t, anchor);
			current = true;
		},
		p(ctx, dirty) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				transition_in(if_block, 1);
				if_block.m(t.parentNode, t);
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) detach(t);
		}
	};
}

// (214:2) {#each  viewpages as page, index   }
function create_each_block(ctx) {
	let routercontextprovider;
	let current;

	routercontextprovider = new Router_context_provider({
			props: {
				route: /*page*/ ctx[37].props.f7route,
				router: /*page*/ ctx[37].props.f7router,
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(routercontextprovider.$$.fragment);
		},
		l(nodes) {
			claim_component(routercontextprovider.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(routercontextprovider, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const routercontextprovider_changes = {};
			if (dirty[0] & /*viewpages*/ 256) routercontextprovider_changes.route = /*page*/ ctx[37].props.f7route;
			if (dirty[0] & /*viewpages*/ 256) routercontextprovider_changes.router = /*page*/ ctx[37].props.f7router;

			if (dirty[0] & /*$$scope, viewpages, initialized*/ 33152) {
				routercontextprovider_changes.$$scope = { dirty, ctx };
			}

			routercontextprovider.$set(routercontextprovider_changes);
		},
		i(local) {
			if (current) return;
			transition_in(routercontextprovider.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(routercontextprovider.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(routercontextprovider, detaching);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let t;
	let div_class_value;
	let current;
	const default_slot_template = /*#slots*/ ctx[13].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[15], get_default_slot_context);
	let each_value = /*viewpages*/ ctx[8];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			div = element("div");
			if (default_slot) default_slot.c();
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true, style: true, id: true });
			var div_nodes = children(div);
			if (default_slot) default_slot.l(div_nodes);
			t = claim_space(div_nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div, "class", div_class_value = "view " + /*classes*/ ctx[2] + " " + /*computedClasses*/ ctx[4]);
			attr(div, "style", /*style*/ ctx[1]);
			attr(div, "id", /*id*/ ctx[0]);
			toggle_class(div, "view-main", /*main*/ ctx[3]);
		},
		m(target, anchor) {
			insert_hydration(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			append_hydration(div, t);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			/*div_binding*/ ctx[14](div);
			current = true;
		},
		p(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty[0] & /*$$scope, f7View, viewpages*/ 33088)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[15],
						get_default_slot_spread_changes(dirty) || !current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[15])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[15], dirty, get_default_slot_changes),
						get_default_slot_context
					);
				}
			}

			if (dirty[0] & /*viewpages, initialized, $$scope*/ 33152) {
				each_value = /*viewpages*/ ctx[8];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(div, null);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}

			if (!current || dirty[0] & /*classes, computedClasses*/ 20 && div_class_value !== (div_class_value = "view " + /*classes*/ ctx[2] + " " + /*computedClasses*/ ctx[4])) {
				attr(div, "class", div_class_value);
			}

			if (!current || dirty[0] & /*style*/ 2) {
				attr(div, "style", /*style*/ ctx[1]);
			}

			if (!current || dirty[0] & /*id*/ 1) {
				attr(div, "id", /*id*/ ctx[0]);
			}

			if (!current || dirty[0] & /*classes, computedClasses, main*/ 28) {
				toggle_class(div, "view-main", /*main*/ ctx[3]);
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (default_slot) default_slot.d(detaching);
			destroy_each(each_blocks, detaching);
			/*div_binding*/ ctx[14](null);
		}
	};
}

function instance_1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { importsSeek = 'lower' } = $$props;
	getContext('svelteProps') || {};
	getContext('lec') || {};
	(() => window.cicR = $$props.resetCicR ? 1 : window.cicR + 1)();
	let { id = undefined } = $$props;
	let { style = undefined } = $$props;
	let { init = true } = $$props;
	let { url = undefined } = $$props;
	let computedClasses = undefined;
	let { classes = '' } = $$props;
	let { main } = $$props;
	const emit = createEmitter(createEventDispatcher, $$props);
	const { tab, tabActive, browserHistoryInitialMatch = true, initRouterOnTabShow } = $$props;
	const shouldInitRouter = !(initRouterOnTabShow && tab && !tabActive);
	let initialPage;
	let initialRoute;
	let el;
	let routerData;
	let f7View;
	let initialized = false;

	function instance() {
		return f7View;
	}

	function onViewInit(view) {
		emit('viewInit', [view]);

		if (!init) {
			$$invalidate(6, f7View = view);
			routerData.instance = view;
		}
	}

	if (app.f7 && !f7View && init) {
		const routerId = getRouterId();

		f7View = app.f7.views.create(el, {
			routerId,
			init: false,
			...noUndefinedProps($$props),
			browserHistoryInitialMatch,
			on: { init: onViewInit }
		});

		routerData = { routerId, instance: f7View };
		app.f7routers.views.push(routerData);

		if (shouldInitRouter && f7View && f7View.router && (url || main)) {
			const initialData = getRouterInitialComponent(f7View.router);
			initialPage = initialData.initialPage;
			initialRoute = initialData.initialRoute;

			if (initialRoute && initialRoute.route && initialRoute.route.masterRoute) {
				initialPage = undefined;
				initialRoute = undefined;
			}
		}
	}

	let viewpages = initialPage ? [initialPage] : [];

	function onResize(view, width) {
		emit('viewResize', [width]);
	}

	function onSwipeBackMove(data) {
		emit('swipeBackMove', [data]);
	}

	function onSwipeBackBeforeChange(data) {
		emit('swipeBackBeforeChange', [data]);
	}

	function onSwipeBackAfterChange(data) {
		emit('swipeBackAfterChange', [data]);
	}

	function onSwipeBackBeforeReset(data) {
		emit('swipeBackBeforeReset', [data]);
	}

	function onSwipeBackAfterReset(data) {
		emit('swipeBackAfterReset', [data]);
	}

	useTab(() => el, emit);

	onMount(() => {
		$$invalidate(7, initialized = true);

		f7ready(() => {
			if (f7View) {
				routerData.el = el;
				routerData.pages = viewpages;

				routerData.setPages = newPages => {
					tick().then(() => {
						$$invalidate(8, viewpages = newPages);
					});
				};

				if (initialPage && initialPage.isAsync && !initialPage.initialComponent) {
					initialPage.component().then(() => {
						setTimeout(
							() => {
								f7View.init(el);

								if (initialPage) {
									initialPage.el = f7View.router.currentPageEl;

									if (initialRoute && initialRoute.route && initialRoute.route.keepAlive) {
										initialRoute.route.keepAliveData = { pageEl: initialPage.el };
									}
								}
							},
							100
						);
					});
				} else {
					f7View.init(el);

					if (initialPage) {
						initialPage.el = f7View.router.currentPageEl;

						if (initialRoute && initialRoute.route && initialRoute.route.keepAlive) {
							initialRoute.route.keepAliveData = { pageEl: initialPage.el };
						}
					}
				}
			} else {
				const routerId = getRouterId();

				routerData = {
					el,
					routerId,
					viewpages,
					instance: f7View,
					setPages(newPages) {
						tick().then(() => {
							$$invalidate(8, viewpages = newPages);
						});
					}
				};

				app.f7routers.views.push(routerData);

				routerData.instance = app.f7.views.create(el, {
					routerId,
					...noUndefinedProps($$props),
					browserHistoryInitialMatch,
					on: { init: onViewInit }
				});

				$$invalidate(6, f7View = routerData.instance);
			}

			if (!init) return;
			f7View.on('resize', onResize);
			f7View.on('swipebackMove', onSwipeBackMove);
			f7View.on('swipebackBeforeChange', onSwipeBackBeforeChange);
			f7View.on('swipebackAfterChange', onSwipeBackAfterChange);
			f7View.on('swipebackBeforeReset', onSwipeBackBeforeReset);
			f7View.on('swipebackAfterReset', onSwipeBackAfterReset);
		});
	});

	afterUpdate(() => {
		if (!routerData) return;
		app.f7events.emit('viewRouterDidUpdate', routerData);
	});

	onDestroy(() => {
		if (f7View) {
			f7View.off('resize', onResize);
			f7View.off('swipebackMove', onSwipeBackMove);
			f7View.off('swipebackBeforeChange', onSwipeBackBeforeChange);
			f7View.off('swipebackAfterChange', onSwipeBackAfterChange);
			f7View.off('swipebackBeforeReset', onSwipeBackBeforeReset);
			f7View.off('swipebackAfterReset', onSwipeBackAfterReset);
			if (f7View.destroy) f7View.destroy();
			$$invalidate(6, f7View = null);
		}

		app.f7routers.views.splice(app.f7routers.views.indexOf(routerData), 1);
		routerData = null;
	});

	function div_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			el = $$value;
			$$invalidate(5, el);
		});
	}

	$$self.$$set = $$new_props => {
		$$invalidate(36, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ('importsSeek' in $$new_props) $$invalidate(9, importsSeek = $$new_props.importsSeek);
		if ('id' in $$new_props) $$invalidate(0, id = $$new_props.id);
		if ('style' in $$new_props) $$invalidate(1, style = $$new_props.style);
		if ('init' in $$new_props) $$invalidate(10, init = $$new_props.init);
		if ('url' in $$new_props) $$invalidate(11, url = $$new_props.url);
		if ('classes' in $$new_props) $$invalidate(2, classes = $$new_props.classes);
		if ('main' in $$new_props) $$invalidate(3, main = $$new_props.main);
		if ('$$scope' in $$new_props) $$invalidate(15, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		$$invalidate(4, computedClasses = classNames(classes, { 'tab-active': tabActive, tab }, colorClasses($$props)));
	};

	$$props = exclude_internal_props($$props);

	return [
		id,
		style,
		classes,
		main,
		computedClasses,
		el,
		f7View,
		initialized,
		viewpages,
		importsSeek,
		init,
		url,
		instance,
		slots,
		div_binding,
		$$scope
	];
}

class View extends SvelteComponent {
	constructor(options) {
		super();

		init(
			this,
			options,
			instance_1,
			create_fragment,
			safe_not_equal,
			{
				importsSeek: 9,
				id: 0,
				style: 1,
				init: 10,
				url: 11,
				classes: 2,
				main: 3,
				instance: 12
			},
			null,
			[-1, -1]
		);
	}

	get instance() {
		return this.$$.ctx[12];
	}
}

export { View };
