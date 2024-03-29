import { SvelteComponent, init, safe_not_equal, create_slot, assign, element, space, claim_element, children, claim_space, detach, set_attributes, insert_hydration, append_hydration, update_slot_base, get_all_dirty_from_scope, get_slot_changes, group_outros, transition_out, check_outros, transition_in, get_spread_update, compute_rest_props, getContext, createEventDispatcher, onMount, afterUpdate, onDestroy, exclude_internal_props, binding_callbacks, create_component, claim_component, mount_component, destroy_component } from './liquivelte-svelte-hsa803e515.liquivelte.js';
import { restProps, createEmitter, f7ready, app, classNames, colorClasses } from './framework7-liquivelte-hs2475aa90.liquivelte.js';
import { Page_content } from './framework7-liquivelte-page-content-hs12d7c72d.liquivelte.js';

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/node_modules/framework7-liquivelte/components/page.liquivelte generated by Svelte v3.50.0 */
const get_static_slot_changes_1 = dirty => ({});
const get_static_slot_context_1 = ctx => ({});
const get_static_slot_changes = dirty => ({});
const get_static_slot_context = ctx => ({});
const get_fixed_slot_changes = dirty => ({});
const get_fixed_slot_context = ctx => ({});

// (354:2) {:else}
function create_else_block(ctx) {
	let t;
	let current;
	const static_slot_template = /*#slots*/ ctx[47].static;
	const static_slot = create_slot(static_slot_template, ctx, /*$$scope*/ ctx[49], get_static_slot_context_1);
	const default_slot_template = /*#slots*/ ctx[47].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[49], null);

	return {
		c() {
			if (static_slot) static_slot.c();
			t = space();
			if (default_slot) default_slot.c();
		},
		l(nodes) {
			if (static_slot) static_slot.l(nodes);
			t = claim_space(nodes);
			if (default_slot) default_slot.l(nodes);
		},
		m(target, anchor) {
			if (static_slot) {
				static_slot.m(target, anchor);
			}

			insert_hydration(target, t, anchor);

			if (default_slot) {
				default_slot.m(target, anchor);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (static_slot) {
				if (static_slot.p && (!current || dirty[1] & /*$$scope*/ 262144)) {
					update_slot_base(
						static_slot,
						static_slot_template,
						ctx,
						/*$$scope*/ ctx[49],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[49])
						: get_slot_changes(static_slot_template, /*$$scope*/ ctx[49], dirty, get_static_slot_changes_1),
						get_static_slot_context_1
					);
				}
			}

			if (default_slot) {
				if (default_slot.p && (!current || dirty[1] & /*$$scope*/ 262144)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[49],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[49])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[49], dirty, null),
						null
					);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(static_slot, local);
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(static_slot, local);
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (static_slot) static_slot.d(detaching);
			if (detaching) detach(t);
			if (default_slot) default_slot.d(detaching);
		}
	};
}

// (328:2) {#if pageContent }
function create_if_block(ctx) {
	let pagecontent;
	let current;

	pagecontent = new Page_content({
			props: {
				ptr: /*ptr*/ ctx[2],
				ptrDistance: /*ptrDistance*/ ctx[3],
				ptrPreloader: /*ptrPreloader*/ ctx[4],
				ptrBottom: /*ptrBottom*/ ctx[5],
				ptrMousewheel: /*ptrMousewheel*/ ctx[6],
				infinite: /*infinite*/ ctx[7],
				infiniteTop: /*infiniteTop*/ ctx[8],
				infiniteDistance: /*infiniteDistance*/ ctx[9],
				infinitePreloader: /*infinitePreloader*/ ctx[10],
				hideBarsOnScroll: /*hideBarsOnScroll*/ ctx[11],
				hideNavbarOnScroll: /*hideNavbarOnScroll*/ ctx[12],
				hideToolbarOnScroll: /*hideToolbarOnScroll*/ ctx[13],
				messagesContent: /*messagesContent*/ ctx[14],
				loginScreen: /*loginScreen*/ ctx[15],
				onPtrPullStart: /*onPtrPullStart*/ ctx[19],
				onPtrPullMove: /*onPtrPullMove*/ ctx[20],
				onPtrPullEnd: /*onPtrPullEnd*/ ctx[21],
				onPtrRefresh: /*onPtrRefresh*/ ctx[22],
				onPtrDone: /*onPtrDone*/ ctx[23],
				onInfinite: /*onInfinite*/ ctx[24],
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(pagecontent.$$.fragment);
		},
		l(nodes) {
			claim_component(pagecontent.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(pagecontent, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const pagecontent_changes = {};
			if (dirty[0] & /*ptr*/ 4) pagecontent_changes.ptr = /*ptr*/ ctx[2];
			if (dirty[0] & /*ptrDistance*/ 8) pagecontent_changes.ptrDistance = /*ptrDistance*/ ctx[3];
			if (dirty[0] & /*ptrPreloader*/ 16) pagecontent_changes.ptrPreloader = /*ptrPreloader*/ ctx[4];
			if (dirty[0] & /*ptrBottom*/ 32) pagecontent_changes.ptrBottom = /*ptrBottom*/ ctx[5];
			if (dirty[0] & /*ptrMousewheel*/ 64) pagecontent_changes.ptrMousewheel = /*ptrMousewheel*/ ctx[6];
			if (dirty[0] & /*infinite*/ 128) pagecontent_changes.infinite = /*infinite*/ ctx[7];
			if (dirty[0] & /*infiniteTop*/ 256) pagecontent_changes.infiniteTop = /*infiniteTop*/ ctx[8];
			if (dirty[0] & /*infiniteDistance*/ 512) pagecontent_changes.infiniteDistance = /*infiniteDistance*/ ctx[9];
			if (dirty[0] & /*infinitePreloader*/ 1024) pagecontent_changes.infinitePreloader = /*infinitePreloader*/ ctx[10];
			if (dirty[0] & /*hideBarsOnScroll*/ 2048) pagecontent_changes.hideBarsOnScroll = /*hideBarsOnScroll*/ ctx[11];
			if (dirty[0] & /*hideNavbarOnScroll*/ 4096) pagecontent_changes.hideNavbarOnScroll = /*hideNavbarOnScroll*/ ctx[12];
			if (dirty[0] & /*hideToolbarOnScroll*/ 8192) pagecontent_changes.hideToolbarOnScroll = /*hideToolbarOnScroll*/ ctx[13];
			if (dirty[0] & /*messagesContent*/ 16384) pagecontent_changes.messagesContent = /*messagesContent*/ ctx[14];
			if (dirty[0] & /*loginScreen*/ 32768) pagecontent_changes.loginScreen = /*loginScreen*/ ctx[15];

			if (dirty[1] & /*$$scope*/ 262144) {
				pagecontent_changes.$$scope = { dirty, ctx };
			}

			pagecontent.$set(pagecontent_changes);
		},
		i(local) {
			if (current) return;
			transition_in(pagecontent.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(pagecontent.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(pagecontent, detaching);
		}
	};
}

// (329:4) <PageContent        ptr="{ptr}"       ptrDistance="{ptrDistance}"       ptrPreloader="{ptrPreloader}"       ptrBottom="{ptrBottom}"       ptrMousewheel="{ptrMousewheel}"       infinite="{infinite}"       infiniteTop="{infiniteTop}"       infiniteDistance="{infiniteDistance}"       infinitePreloader="{infinitePreloader}"       hideBarsOnScroll="{hideBarsOnScroll}"       hideNavbarOnScroll="{hideNavbarOnScroll}"       hideToolbarOnScroll="{hideToolbarOnScroll}"       messagesContent="{messagesContent}"       loginScreen="{loginScreen}"       onPtrPullStart="{onPtrPullStart}"       onPtrPullMove="{onPtrPullMove}"       onPtrPullEnd="{onPtrPullEnd}"       onPtrRefresh="{onPtrRefresh}"       onPtrDone="{onPtrDone}"       onInfinite="{onInfinite}"      >
function create_default_slot(ctx) {
	let t;
	let current;
	const static_slot_template = /*#slots*/ ctx[47].static;
	const static_slot = create_slot(static_slot_template, ctx, /*$$scope*/ ctx[49], get_static_slot_context);
	const default_slot_template = /*#slots*/ ctx[47].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[49], null);

	return {
		c() {
			if (static_slot) static_slot.c();
			t = space();
			if (default_slot) default_slot.c();
		},
		l(nodes) {
			if (static_slot) static_slot.l(nodes);
			t = claim_space(nodes);
			if (default_slot) default_slot.l(nodes);
		},
		m(target, anchor) {
			if (static_slot) {
				static_slot.m(target, anchor);
			}

			insert_hydration(target, t, anchor);

			if (default_slot) {
				default_slot.m(target, anchor);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (static_slot) {
				if (static_slot.p && (!current || dirty[1] & /*$$scope*/ 262144)) {
					update_slot_base(
						static_slot,
						static_slot_template,
						ctx,
						/*$$scope*/ ctx[49],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[49])
						: get_slot_changes(static_slot_template, /*$$scope*/ ctx[49], dirty, get_static_slot_changes),
						get_static_slot_context
					);
				}
			}

			if (default_slot) {
				if (default_slot.p && (!current || dirty[1] & /*$$scope*/ 262144)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[49],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[49])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[49], dirty, null),
						null
					);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(static_slot, local);
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(static_slot, local);
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (static_slot) static_slot.d(detaching);
			if (detaching) detach(t);
			if (default_slot) default_slot.d(detaching);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let t;
	let current_block_type_index;
	let if_block;
	let div_class_value;
	let current;
	const fixed_slot_template = /*#slots*/ ctx[47].fixed;
	const fixed_slot = create_slot(fixed_slot_template, ctx, /*$$scope*/ ctx[49], get_fixed_slot_context);
	const if_block_creators = [create_if_block, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*pageContent*/ ctx[1]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	let div_levels = [
		{
			class: div_class_value = "page " + /*classes*/ ctx[16] + " " + /*computedClasses*/ ctx[17]
		},
		{ "data-name": /*name*/ ctx[0] },
		restProps(/*$$restProps*/ ctx[25])
	];

	let div_data = {};

	for (let i = 0; i < div_levels.length; i += 1) {
		div_data = assign(div_data, div_levels[i]);
	}

	return {
		c() {
			div = element("div");
			if (fixed_slot) fixed_slot.c();
			t = space();
			if_block.c();
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true, "data-name": true });
			var div_nodes = children(div);
			if (fixed_slot) fixed_slot.l(div_nodes);
			t = claim_space(div_nodes);
			if_block.l(div_nodes);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			set_attributes(div, div_data);
		},
		m(target, anchor) {
			insert_hydration(target, div, anchor);

			if (fixed_slot) {
				fixed_slot.m(div, null);
			}

			append_hydration(div, t);
			if_blocks[current_block_type_index].m(div, null);
			/*div_binding*/ ctx[48](div);
			current = true;
		},
		p(ctx, dirty) {
			if (fixed_slot) {
				if (fixed_slot.p && (!current || dirty[1] & /*$$scope*/ 262144)) {
					update_slot_base(
						fixed_slot,
						fixed_slot_template,
						ctx,
						/*$$scope*/ ctx[49],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[49])
						: get_slot_changes(fixed_slot_template, /*$$scope*/ ctx[49], dirty, get_fixed_slot_changes),
						get_fixed_slot_context
					);
				}
			}

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
				if_block.m(div, null);
			}

			set_attributes(div, div_data = get_spread_update(div_levels, [
				(!current || dirty[0] & /*classes, computedClasses*/ 196608 && div_class_value !== (div_class_value = "page " + /*classes*/ ctx[16] + " " + /*computedClasses*/ ctx[17])) && { class: div_class_value },
				(!current || dirty[0] & /*name*/ 1) && { "data-name": /*name*/ ctx[0] },
				dirty[0] & /*$$restProps*/ 33554432 && restProps(/*$$restProps*/ ctx[25])
			]));
		},
		i(local) {
			if (current) return;
			transition_in(fixed_slot, local);
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(fixed_slot, local);
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (fixed_slot) fixed_slot.d(detaching);
			if_blocks[current_block_type_index].d();
			/*div_binding*/ ctx[48](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let forceSubnavbar;
	let forceNavbarLarge;

	const omit_props_names = [
		"importsSeek","name","stacked","withSubnavbar","subnavbar","withNavbarLarge","navbarLarge","noNavbar","noToolbar","tabs","pageContent","noSwipeback","ptr","ptrDistance","ptrPreloader","ptrBottom","ptrMousewheel","infinite","infiniteTop","infiniteDistance","infinitePreloader","hideBarsOnScroll","hideNavbarOnScroll","hideToolbarOnScroll","messagesContent","loginScreen","classes"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	let { importsSeek = 'lower' } = $$props;
	getContext('svelteProps') || {};
	getContext('lec') || {};
	(() => window.cicR = $$props.resetCicR ? 1 : window.cicR + 1)();
	const emit = createEmitter(createEventDispatcher, $$props);
	let { name = undefined } = $$props;
	let { stacked = undefined } = $$props;
	let { withSubnavbar = undefined } = $$props;
	let { subnavbar = undefined } = $$props;
	let { withNavbarLarge = undefined } = $$props;
	let { navbarLarge = undefined } = $$props;
	let { noNavbar = undefined } = $$props;
	let { noToolbar = undefined } = $$props;
	let { tabs = undefined } = $$props;
	let { pageContent = true } = $$props;
	let { noSwipeback = undefined } = $$props;
	let { ptr = undefined } = $$props;
	let { ptrDistance = undefined } = $$props;
	let { ptrPreloader = true } = $$props;
	let { ptrBottom = undefined } = $$props;
	let { ptrMousewheel = undefined } = $$props;
	let { infinite = undefined } = $$props;
	let { infiniteTop = undefined } = $$props;
	let { infiniteDistance = undefined } = $$props;
	let { infinitePreloader = true } = $$props;
	let { hideBarsOnScroll = undefined } = $$props;
	let { hideNavbarOnScroll = undefined } = $$props;
	let { hideToolbarOnScroll = undefined } = $$props;
	let { messagesContent = undefined } = $$props;
	let { loginScreen = undefined } = $$props;
	let computedClasses = undefined;
	let { classes = '' } = $$props;

	// State
	let el;

	let hasSubnavbar = false;
	let hasNavbarLarge = false;
	let hasNavbarLargeCollapsed = false;
	let hasCardExpandableOpened = false;
	let routerPositionClass = '';
	let routerForceUnstack = false;
	let routerPageRole = null;
	let routerPageRoleDetailRoot = false;
	let routerPageMasterStack = false;

	// Handlers
	function onPtrPullStart() {
		emit('ptrPullStart');
	}

	function onPtrPullMove() {
		emit('ptrPullMove');
	}

	function onPtrPullEnd() {
		emit('ptrPullEnd');
	}

	function onPtrRefresh(done) {
		emit('ptrRefresh', [done]);
	}

	function onPtrDone() {
		emit('ptrDone');
	}

	function onInfinite() {
		emit('infinite');
	}

	// Main Page Events
	function onPageMounted(page) {
		if (el !== page.el) return;
		emit('pageMounted', [page]);
	}

	function onPageInit(page) {
		if (el !== page.el) return;

		if (typeof withSubnavbar === 'undefined' && typeof subnavbar === 'undefined') {
			if (page.$navbarEl && page.$navbarEl.length && page.$navbarEl.find('.subnavbar').length || page.$el.children('.navbar').find('.subnavbar').length) {
				$$invalidate(36, hasSubnavbar = true);
			}
		}

		if (typeof withNavbarLarge === 'undefined' && typeof navbarLarge === 'undefined') {
			if (page.$navbarEl && page.$navbarEl.hasClass('navbar-large') || page.$el.children('.navbar-large').length) {
				$$invalidate(37, hasNavbarLarge = true);
			}
		}

		emit('pageInit', [page]);
	}

	function onPageReinit(page) {
		if (el !== page.el) return;
		emit('pageReinit', [page]);
	}

	function onPageBeforeIn(page) {
		if (el !== page.el) return;

		if (!page.swipeBack) {
			if (page.from === 'next') {
				$$invalidate(40, routerPositionClass = 'page-next');
			}

			if (page.from === 'previous') {
				$$invalidate(40, routerPositionClass = 'page-previous');
			}
		}

		emit('pageBeforeIn', [page]);
	}

	function onPageBeforeOut(page) {
		if (el !== page.el) return;
		emit('pageBeforeOut', [page]);
	}

	function onPageAfterOut(page) {
		if (el !== page.el) return;

		if (page.to === 'next') {
			$$invalidate(40, routerPositionClass = 'page-next');
		}

		if (page.to === 'previous') {
			$$invalidate(40, routerPositionClass = 'page-previous');
		}

		emit('pageAfterOut', [page]);
	}

	function onPageAfterIn(page) {
		if (el !== page.el) return;
		$$invalidate(40, routerPositionClass = 'page-current');
		emit('pageAfterIn', [page]);
	}

	function onPageBeforeRemove(page) {
		if (el !== page.el) return;

		if (page.$navbarEl && page.$navbarEl[0] && page.$navbarEl.parent()[0] && page.$navbarEl.parent()[0] !== el) {
			page.$el.prepend(page.$navbarEl);
		}

		emit('pageBeforeRemove', [page]);
	}

	function onPageBeforeUnmount(page) {
		if (el !== page.el) return;
		emit('pageBeforeUnmount', [page]);
	}

	// Helper events
	function onPageStack(pageEl) {
		if (el !== pageEl) return;
		$$invalidate(41, routerForceUnstack = false);
	}

	function onPageUnstack(pageEl) {
		if (el !== pageEl) return;
		$$invalidate(41, routerForceUnstack = true);
	}

	function onPagePosition(pageEl, position) {
		if (el !== pageEl) return;
		$$invalidate(40, routerPositionClass = `page-${position}`);
	}

	function onPageRole(pageEl, rolesData) {
		if (el !== pageEl) return;
		$$invalidate(42, routerPageRole = rolesData.role);
		$$invalidate(43, routerPageRoleDetailRoot = rolesData.detailRoot);
	}

	function onPageMasterStack(pageEl) {
		if (el !== pageEl) return;
		$$invalidate(44, routerPageMasterStack = true);
	}

	function onPageMasterUnstack(pageEl) {
		if (el !== pageEl) return;
		$$invalidate(44, routerPageMasterStack = false);
	}

	function onPageNavbarLargeCollapsed(pageEl) {
		if (el !== pageEl) return;
		$$invalidate(38, hasNavbarLargeCollapsed = true);
	}

	function onPageNavbarLargeExpanded(pageEl) {
		if (el !== pageEl) return;
		$$invalidate(38, hasNavbarLargeCollapsed = false);
	}

	function onCardOpened(cardEl, pageEl) {
		if (el !== pageEl) return;
		$$invalidate(39, hasCardExpandableOpened = true);
	}

	function onCardClose(cardEl, pageEl) {
		if (el !== pageEl) return;
		$$invalidate(39, hasCardExpandableOpened = false);
	}

	function onPageTabShow(pageEl) {
		if (el !== pageEl) return;
		emit('pageTabShow');
	}

	function onPageTabHide(pageEl) {
		if (el !== pageEl) return;
		emit('pageTabHide');
	}

	// Mount/destroy
	function mountPage() {
		app.f7.on('pageMounted', onPageMounted);
		app.f7.on('pageInit', onPageInit);
		app.f7.on('pageReinit', onPageReinit);
		app.f7.on('pageBeforeIn', onPageBeforeIn);
		app.f7.on('pageBeforeOut', onPageBeforeOut);
		app.f7.on('pageAfterOut', onPageAfterOut);
		app.f7.on('pageAfterIn', onPageAfterIn);
		app.f7.on('pageBeforeRemove', onPageBeforeRemove);
		app.f7.on('pageBeforeUnmount', onPageBeforeUnmount);
		app.f7.on('pageStack', onPageStack);
		app.f7.on('pageUnstack', onPageUnstack);
		app.f7.on('pagePosition', onPagePosition);
		app.f7.on('pageRole', onPageRole);
		app.f7.on('pageMasterStack', onPageMasterStack);
		app.f7.on('pageMasterUnstack', onPageMasterUnstack);
		app.f7.on('pageNavbarLargeCollapsed', onPageNavbarLargeCollapsed);
		app.f7.on('pageNavbarLargeExpanded', onPageNavbarLargeExpanded);
		app.f7.on('cardOpened', onCardOpened);
		app.f7.on('cardClose', onCardClose);
		app.f7.on('pageTabShow', onPageTabShow);
		app.f7.on('pageTabHide', onPageTabHide);
	}

	function destroyPage() {
		app.f7.off('pageMounted', onPageMounted);
		app.f7.off('pageInit', onPageInit);
		app.f7.off('pageReinit', onPageReinit);
		app.f7.off('pageBeforeIn', onPageBeforeIn);
		app.f7.off('pageBeforeOut', onPageBeforeOut);
		app.f7.off('pageAfterOut', onPageAfterOut);
		app.f7.off('pageAfterIn', onPageAfterIn);
		app.f7.off('pageBeforeRemove', onPageBeforeRemove);
		app.f7.off('pageBeforeUnmount', onPageBeforeUnmount);
		app.f7.off('pageStack', onPageStack);
		app.f7.off('pageUnstack', onPageUnstack);
		app.f7.off('pagePosition', onPagePosition);
		app.f7.off('pageRole', onPageRole);
		app.f7.off('pageMasterStack', onPageMasterStack);
		app.f7.off('pageMasterUnstack', onPageMasterUnstack);
		app.f7.off('pageNavbarLargeCollapsed', onPageNavbarLargeCollapsed);
		app.f7.off('pageNavbarLargeExpanded', onPageNavbarLargeExpanded);
		app.f7.off('cardOpened', onCardOpened);
		app.f7.off('cardClose', onCardClose);
		app.f7.off('pageTabShow', onPageTabShow);
		app.f7.off('pageTabHide', onPageTabHide);
	}

	onMount(() => {
		f7ready(() => {
			if (el) {
				const dom7 = app.f7.$;
				const fixedEls = dom7(el).children('.page-content').children('[data-f7-slot="fixed"]');

				if (fixedEls.length) {
					for (let i = fixedEls.length - 1; i >= 0; i -= 1) {
						dom7(el).prepend(fixedEls[i]);
					}
				}
			}

			mountPage();
		});
	});

	afterUpdate(() => {
		if (el && app.f7) {
			const dom7 = app.f7.$;
			const fixedEls = dom7(el).children('.page-content').children('[data-f7-slot="fixed"]');

			if (fixedEls.length) {
				for (let i = fixedEls.length - 1; i >= 0; i -= 1) {
					dom7(el).prepend(fixedEls[i]);
				}
			}
		}
	});

	onDestroy(() => {
		if (!app.f7) return;
		destroyPage();
	});

	function div_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			el = $$value;
			$$invalidate(18, el);
		});
	}

	$$self.$$set = $$new_props => {
		$$invalidate(78, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(25, $$restProps = compute_rest_props($$props, omit_props_names));
		if ('importsSeek' in $$new_props) $$invalidate(26, importsSeek = $$new_props.importsSeek);
		if ('name' in $$new_props) $$invalidate(0, name = $$new_props.name);
		if ('stacked' in $$new_props) $$invalidate(27, stacked = $$new_props.stacked);
		if ('withSubnavbar' in $$new_props) $$invalidate(28, withSubnavbar = $$new_props.withSubnavbar);
		if ('subnavbar' in $$new_props) $$invalidate(29, subnavbar = $$new_props.subnavbar);
		if ('withNavbarLarge' in $$new_props) $$invalidate(30, withNavbarLarge = $$new_props.withNavbarLarge);
		if ('navbarLarge' in $$new_props) $$invalidate(31, navbarLarge = $$new_props.navbarLarge);
		if ('noNavbar' in $$new_props) $$invalidate(32, noNavbar = $$new_props.noNavbar);
		if ('noToolbar' in $$new_props) $$invalidate(33, noToolbar = $$new_props.noToolbar);
		if ('tabs' in $$new_props) $$invalidate(34, tabs = $$new_props.tabs);
		if ('pageContent' in $$new_props) $$invalidate(1, pageContent = $$new_props.pageContent);
		if ('noSwipeback' in $$new_props) $$invalidate(35, noSwipeback = $$new_props.noSwipeback);
		if ('ptr' in $$new_props) $$invalidate(2, ptr = $$new_props.ptr);
		if ('ptrDistance' in $$new_props) $$invalidate(3, ptrDistance = $$new_props.ptrDistance);
		if ('ptrPreloader' in $$new_props) $$invalidate(4, ptrPreloader = $$new_props.ptrPreloader);
		if ('ptrBottom' in $$new_props) $$invalidate(5, ptrBottom = $$new_props.ptrBottom);
		if ('ptrMousewheel' in $$new_props) $$invalidate(6, ptrMousewheel = $$new_props.ptrMousewheel);
		if ('infinite' in $$new_props) $$invalidate(7, infinite = $$new_props.infinite);
		if ('infiniteTop' in $$new_props) $$invalidate(8, infiniteTop = $$new_props.infiniteTop);
		if ('infiniteDistance' in $$new_props) $$invalidate(9, infiniteDistance = $$new_props.infiniteDistance);
		if ('infinitePreloader' in $$new_props) $$invalidate(10, infinitePreloader = $$new_props.infinitePreloader);
		if ('hideBarsOnScroll' in $$new_props) $$invalidate(11, hideBarsOnScroll = $$new_props.hideBarsOnScroll);
		if ('hideNavbarOnScroll' in $$new_props) $$invalidate(12, hideNavbarOnScroll = $$new_props.hideNavbarOnScroll);
		if ('hideToolbarOnScroll' in $$new_props) $$invalidate(13, hideToolbarOnScroll = $$new_props.hideToolbarOnScroll);
		if ('messagesContent' in $$new_props) $$invalidate(14, messagesContent = $$new_props.messagesContent);
		if ('loginScreen' in $$new_props) $$invalidate(15, loginScreen = $$new_props.loginScreen);
		if ('classes' in $$new_props) $$invalidate(16, classes = $$new_props.classes);
		if ('$$scope' in $$new_props) $$invalidate(49, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*subnavbar, withSubnavbar*/ 805306368 | $$self.$$.dirty[1] & /*hasSubnavbar*/ 32) {
			$$invalidate(46, forceSubnavbar = typeof subnavbar === 'undefined' && typeof withSubnavbar === 'undefined'
			? hasSubnavbar
			: false);
		}

		if ($$self.$$.dirty[0] & /*withNavbarLarge*/ 1073741824 | $$self.$$.dirty[1] & /*navbarLarge, hasNavbarLarge*/ 65) {
			$$invalidate(45, forceNavbarLarge = typeof navbarLarge === 'undefined' && typeof withNavbarLarge === 'undefined'
			? hasNavbarLarge
			: false);
		}

		$$invalidate(17, computedClasses = classNames(
			classes,
			routerPositionClass,
			{
				stacked: stacked && !routerForceUnstack,
				tabs,
				'page-with-subnavbar': subnavbar || withSubnavbar || forceSubnavbar,
				'page-with-navbar-large': navbarLarge || withNavbarLarge || forceNavbarLarge,
				'no-navbar': noNavbar,
				'no-toolbar': noToolbar,
				'no-swipeback': noSwipeback,
				'page-master': routerPageRole === 'master',
				'page-master-detail': routerPageRole === 'detail',
				'page-master-detail-root': routerPageRoleDetailRoot === true,
				'page-master-stacked': routerPageMasterStack === true,
				'page-with-navbar-large-collapsed': hasNavbarLargeCollapsed === true,
				'page-with-card-opened': hasCardExpandableOpened === true,
				'login-screen-page': loginScreen
			},
			colorClasses($$props)
		));
	};

	$$props = exclude_internal_props($$props);

	return [
		name,
		pageContent,
		ptr,
		ptrDistance,
		ptrPreloader,
		ptrBottom,
		ptrMousewheel,
		infinite,
		infiniteTop,
		infiniteDistance,
		infinitePreloader,
		hideBarsOnScroll,
		hideNavbarOnScroll,
		hideToolbarOnScroll,
		messagesContent,
		loginScreen,
		classes,
		computedClasses,
		el,
		onPtrPullStart,
		onPtrPullMove,
		onPtrPullEnd,
		onPtrRefresh,
		onPtrDone,
		onInfinite,
		$$restProps,
		importsSeek,
		stacked,
		withSubnavbar,
		subnavbar,
		withNavbarLarge,
		navbarLarge,
		noNavbar,
		noToolbar,
		tabs,
		noSwipeback,
		hasSubnavbar,
		hasNavbarLarge,
		hasNavbarLargeCollapsed,
		hasCardExpandableOpened,
		routerPositionClass,
		routerForceUnstack,
		routerPageRole,
		routerPageRoleDetailRoot,
		routerPageMasterStack,
		forceNavbarLarge,
		forceSubnavbar,
		slots,
		div_binding,
		$$scope
	];
}

class Page extends SvelteComponent {
	constructor(options) {
		super();

		init(
			this,
			options,
			instance,
			create_fragment,
			safe_not_equal,
			{
				importsSeek: 26,
				name: 0,
				stacked: 27,
				withSubnavbar: 28,
				subnavbar: 29,
				withNavbarLarge: 30,
				navbarLarge: 31,
				noNavbar: 32,
				noToolbar: 33,
				tabs: 34,
				pageContent: 1,
				noSwipeback: 35,
				ptr: 2,
				ptrDistance: 3,
				ptrPreloader: 4,
				ptrBottom: 5,
				ptrMousewheel: 6,
				infinite: 7,
				infiniteTop: 8,
				infiniteDistance: 9,
				infinitePreloader: 10,
				hideBarsOnScroll: 11,
				hideNavbarOnScroll: 12,
				hideToolbarOnScroll: 13,
				messagesContent: 14,
				loginScreen: 15,
				classes: 16
			},
			null,
			[-1, -1, -1]
		);
	}
}

export { Page };
