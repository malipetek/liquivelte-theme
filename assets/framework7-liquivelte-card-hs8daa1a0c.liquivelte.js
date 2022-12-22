import { SvelteComponent, init, safe_not_equal, create_slot, assign, element, space, claim_element, children, claim_space, detach, set_attributes, insert_hydration, append_hydration, transition_in, group_outros, transition_out, check_outros, update_slot_base, get_all_dirty_from_scope, get_slot_changes, get_spread_update, compute_rest_props, compute_slots, createEventDispatcher, onMount, onDestroy, exclude_internal_props, create_component, claim_component, mount_component, destroy_component, text, claim_text, set_data, binding_callbacks } from './liquivelte-svelte-hs532e1aa9.liquivelte.js';
import { restProps, createEmitter, f7ready, app, classNames, colorClasses } from './framework7-liquivelte-hs5d6b599e.liquivelte.js';
import { Card_header } from './framework7-liquivelte-card-header-hs8daa1a0c.liquivelte.js';
import { Card_content } from './framework7-liquivelte-card-content-hs8daa1a0c.liquivelte.js';
import { Card_footer } from './framework7-liquivelte-card-footer-hs8daa1a0c.liquivelte.js';

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/node_modules/framework7-liquivelte/components/card.liquivelte generated by Svelte v3.50.0 */
const get_footer_slot_changes = dirty => ({});
const get_footer_slot_context = ctx => ({});
const get_content_slot_changes = dirty => ({});
const get_content_slot_context = ctx => ({});
const get_header_slot_changes = dirty => ({});
const get_header_slot_context = ctx => ({});

// (155:2) {#if title != undefined || hasHeaderSlots }
function create_if_block_2(ctx) {
	let cardheader;
	let current;

	cardheader = new Card_header({
			props: {
				lec: /*lec*/ ctx[0],
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(cardheader.$$.fragment);
		},
		l(nodes) {
			claim_component(cardheader.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(cardheader, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const cardheader_changes = {};
			if (dirty[0] & /*lec*/ 1) cardheader_changes.lec = /*lec*/ ctx[0];

			if (dirty[0] & /*$$scope, title*/ 536870916) {
				cardheader_changes.$$scope = { dirty, ctx };
			}

			cardheader.$set(cardheader_changes);
		},
		i(local) {
			if (current) return;
			transition_in(cardheader.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(cardheader.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(cardheader, detaching);
		}
	};
}

// (156:4) <CardHeader      lec={lec} >
function create_default_slot_2(ctx) {
	let t0;
	let t1;
	let current;
	const header_slot_template = /*#slots*/ ctx[27].header;
	const header_slot = create_slot(header_slot_template, ctx, /*$$scope*/ ctx[29], get_header_slot_context);

	return {
		c() {
			t0 = text(/*title*/ ctx[2]);
			t1 = space();
			if (header_slot) header_slot.c();
		},
		l(nodes) {
			t0 = claim_text(nodes, /*title*/ ctx[2]);
			t1 = claim_space(nodes);
			if (header_slot) header_slot.l(nodes);
		},
		m(target, anchor) {
			insert_hydration(target, t0, anchor);
			insert_hydration(target, t1, anchor);

			if (header_slot) {
				header_slot.m(target, anchor);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (!current || dirty[0] & /*title*/ 4) set_data(t0, /*title*/ ctx[2]);

			if (header_slot) {
				if (header_slot.p && (!current || dirty[0] & /*$$scope*/ 536870912)) {
					update_slot_base(
						header_slot,
						header_slot_template,
						ctx,
						/*$$scope*/ ctx[29],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[29])
						: get_slot_changes(header_slot_template, /*$$scope*/ ctx[29], dirty, get_header_slot_changes),
						get_header_slot_context
					);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(header_slot, local);
			current = true;
		},
		o(local) {
			transition_out(header_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(t0);
			if (detaching) detach(t1);
			if (header_slot) header_slot.d(detaching);
		}
	};
}

// (161:2) {#if content != undefined || hasContentSlots }
function create_if_block_1(ctx) {
	let cardcontent;
	let current;

	cardcontent = new Card_content({
			props: {
				padding: /*padding*/ ctx[14],
				lec: /*lec*/ ctx[0],
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(cardcontent.$$.fragment);
		},
		l(nodes) {
			claim_component(cardcontent.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(cardcontent, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const cardcontent_changes = {};
			if (dirty[0] & /*padding*/ 16384) cardcontent_changes.padding = /*padding*/ ctx[14];
			if (dirty[0] & /*lec*/ 1) cardcontent_changes.lec = /*lec*/ ctx[0];

			if (dirty[0] & /*$$scope, content*/ 536870920) {
				cardcontent_changes.$$scope = { dirty, ctx };
			}

			cardcontent.$set(cardcontent_changes);
		},
		i(local) {
			if (current) return;
			transition_in(cardcontent.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(cardcontent.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(cardcontent, detaching);
		}
	};
}

// (162:4) <CardContent  {padding}     lec={lec} >
function create_default_slot_1(ctx) {
	let t0;
	let t1;
	let current;
	const content_slot_template = /*#slots*/ ctx[27].content;
	const content_slot = create_slot(content_slot_template, ctx, /*$$scope*/ ctx[29], get_content_slot_context);

	return {
		c() {
			t0 = text(/*content*/ ctx[3]);
			t1 = space();
			if (content_slot) content_slot.c();
		},
		l(nodes) {
			t0 = claim_text(nodes, /*content*/ ctx[3]);
			t1 = claim_space(nodes);
			if (content_slot) content_slot.l(nodes);
		},
		m(target, anchor) {
			insert_hydration(target, t0, anchor);
			insert_hydration(target, t1, anchor);

			if (content_slot) {
				content_slot.m(target, anchor);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (!current || dirty[0] & /*content*/ 8) set_data(t0, /*content*/ ctx[3]);

			if (content_slot) {
				if (content_slot.p && (!current || dirty[0] & /*$$scope*/ 536870912)) {
					update_slot_base(
						content_slot,
						content_slot_template,
						ctx,
						/*$$scope*/ ctx[29],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[29])
						: get_slot_changes(content_slot_template, /*$$scope*/ ctx[29], dirty, get_content_slot_changes),
						get_content_slot_context
					);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(content_slot, local);
			current = true;
		},
		o(local) {
			transition_out(content_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(t0);
			if (detaching) detach(t1);
			if (content_slot) content_slot.d(detaching);
		}
	};
}

// (167:2) {#if footer != undefined || hasFooterSlots }
function create_if_block(ctx) {
	let cardfooter;
	let current;

	cardfooter = new Card_footer({
			props: {
				lec: /*lec*/ ctx[0],
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(cardfooter.$$.fragment);
		},
		l(nodes) {
			claim_component(cardfooter.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(cardfooter, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const cardfooter_changes = {};
			if (dirty[0] & /*lec*/ 1) cardfooter_changes.lec = /*lec*/ ctx[0];

			if (dirty[0] & /*$$scope, footer*/ 536870928) {
				cardfooter_changes.$$scope = { dirty, ctx };
			}

			cardfooter.$set(cardfooter_changes);
		},
		i(local) {
			if (current) return;
			transition_in(cardfooter.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(cardfooter.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(cardfooter, detaching);
		}
	};
}

// (168:4) <CardFooter      lec={lec} >
function create_default_slot(ctx) {
	let t0;
	let t1;
	let current;
	const footer_slot_template = /*#slots*/ ctx[27].footer;
	const footer_slot = create_slot(footer_slot_template, ctx, /*$$scope*/ ctx[29], get_footer_slot_context);

	return {
		c() {
			t0 = text(/*footer*/ ctx[4]);
			t1 = space();
			if (footer_slot) footer_slot.c();
		},
		l(nodes) {
			t0 = claim_text(nodes, /*footer*/ ctx[4]);
			t1 = claim_space(nodes);
			if (footer_slot) footer_slot.l(nodes);
		},
		m(target, anchor) {
			insert_hydration(target, t0, anchor);
			insert_hydration(target, t1, anchor);

			if (footer_slot) {
				footer_slot.m(target, anchor);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (!current || dirty[0] & /*footer*/ 16) set_data(t0, /*footer*/ ctx[4]);

			if (footer_slot) {
				if (footer_slot.p && (!current || dirty[0] & /*$$scope*/ 536870912)) {
					update_slot_base(
						footer_slot,
						footer_slot_template,
						ctx,
						/*$$scope*/ ctx[29],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[29])
						: get_slot_changes(footer_slot_template, /*$$scope*/ ctx[29], dirty, get_footer_slot_changes),
						get_footer_slot_context
					);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(footer_slot, local);
			current = true;
		},
		o(local) {
			transition_out(footer_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(t0);
			if (detaching) detach(t1);
			if (footer_slot) footer_slot.d(detaching);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let t0;
	let t1;
	let t2;
	let div_class_value;
	let div_data_animate_value;
	let div_data_hide_navbar_on_open_value;
	let div_data_hide_toolbar_on_open_value;
	let div_data_hide_statusbar_on_open_value;
	let div_data_swipe_to_close_value;
	let div_data_close_by_backdrop_click_value;
	let div_data_backdrop_value;
	let current;
	let if_block0 = (/*title*/ ctx[2] != undefined || /*hasHeaderSlots*/ ctx[19]) && create_if_block_2(ctx);
	let if_block1 = (/*content*/ ctx[3] != undefined || /*hasContentSlots*/ ctx[18]) && create_if_block_1(ctx);
	let if_block2 = (/*footer*/ ctx[4] != undefined || /*hasFooterSlots*/ ctx[17]) && create_if_block(ctx);
	const default_slot_template = /*#slots*/ ctx[27].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[29], null);

	let div_levels = [
		{
			class: div_class_value = "card " + /*classes*/ ctx[1] + " " + /*computedClasses*/ ctx[15]
		},
		{
			"data-animate": div_data_animate_value = typeof /*animate*/ ctx[5] === 'undefined'
			? /*animate*/ ctx[5]
			: /*animate*/ ctx[5].toString()
		},
		{
			"data-hide-navbar-on-open": div_data_hide_navbar_on_open_value = typeof /*hideNavbarOnOpen*/ ctx[6] === 'undefined'
			? /*hideNavbarOnOpen*/ ctx[6]
			: /*hideNavbarOnOpen*/ ctx[6].toString()
		},
		{
			"data-hide-toolbar-on-open": div_data_hide_toolbar_on_open_value = typeof /*hideToolbarOnOpen*/ ctx[7] === 'undefined'
			? /*hideToolbarOnOpen*/ ctx[7]
			: /*hideToolbarOnOpen*/ ctx[7].toString()
		},
		{
			"data-hide-statusbar-on-open": div_data_hide_statusbar_on_open_value = typeof /*hideStatusbarOnOpen*/ ctx[8] === 'undefined'
			? /*hideStatusbarOnOpen*/ ctx[8]
			: /*hideStatusbarOnOpen*/ ctx[8].toString()
		},
		{
			"data-scrollable-el": /*scrollableEl*/ ctx[9]
		},
		{
			"data-swipe-to-close": div_data_swipe_to_close_value = typeof /*swipeToClose*/ ctx[10] === 'undefined'
			? /*swipeToClose*/ ctx[10]
			: /*swipeToClose*/ ctx[10].toString()
		},
		{
			"data-close-by-backdrop-click": div_data_close_by_backdrop_click_value = typeof /*closeByBackdropClick*/ ctx[11] === 'undefined'
			? /*closeByBackdropClick*/ ctx[11]
			: /*closeByBackdropClick*/ ctx[11].toString()
		},
		{
			"data-backdrop": div_data_backdrop_value = typeof /*backdrop*/ ctx[12] === 'undefined'
			? /*backdrop*/ ctx[12]
			: /*backdrop*/ ctx[12].toString()
		},
		{
			"data-backdrop-el": /*backdropEl*/ ctx[13]
		},
		restProps(/*$$restProps*/ ctx[20])
	];

	let div_data = {};

	for (let i = 0; i < div_levels.length; i += 1) {
		div_data = assign(div_data, div_levels[i]);
	}

	return {
		c() {
			div = element("div");
			if (if_block0) if_block0.c();
			t0 = space();
			if (if_block1) if_block1.c();
			t1 = space();
			if (if_block2) if_block2.c();
			t2 = space();
			if (default_slot) default_slot.c();
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", {
				class: true,
				"data-animate": true,
				"data-hide-navbar-on-open": true,
				"data-hide-toolbar-on-open": true,
				"data-hide-statusbar-on-open": true,
				"data-scrollable-el": true,
				"data-swipe-to-close": true,
				"data-close-by-backdrop-click": true,
				"data-backdrop": true,
				"data-backdrop-el": true
			});

			var div_nodes = children(div);
			if (if_block0) if_block0.l(div_nodes);
			t0 = claim_space(div_nodes);
			if (if_block1) if_block1.l(div_nodes);
			t1 = claim_space(div_nodes);
			if (if_block2) if_block2.l(div_nodes);
			t2 = claim_space(div_nodes);
			if (default_slot) default_slot.l(div_nodes);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			set_attributes(div, div_data);
		},
		m(target, anchor) {
			insert_hydration(target, div, anchor);
			if (if_block0) if_block0.m(div, null);
			append_hydration(div, t0);
			if (if_block1) if_block1.m(div, null);
			append_hydration(div, t1);
			if (if_block2) if_block2.m(div, null);
			append_hydration(div, t2);

			if (default_slot) {
				default_slot.m(div, null);
			}

			/*div_binding*/ ctx[28](div);
			current = true;
		},
		p(ctx, dirty) {
			if (/*title*/ ctx[2] != undefined || /*hasHeaderSlots*/ ctx[19]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty[0] & /*title, hasHeaderSlots*/ 524292) {
						transition_in(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_2(ctx);
					if_block0.c();
					transition_in(if_block0, 1);
					if_block0.m(div, t0);
				}
			} else if (if_block0) {
				group_outros();

				transition_out(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				check_outros();
			}

			if (/*content*/ ctx[3] != undefined || /*hasContentSlots*/ ctx[18]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty[0] & /*content, hasContentSlots*/ 262152) {
						transition_in(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block_1(ctx);
					if_block1.c();
					transition_in(if_block1, 1);
					if_block1.m(div, t1);
				}
			} else if (if_block1) {
				group_outros();

				transition_out(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				check_outros();
			}

			if (/*footer*/ ctx[4] != undefined || /*hasFooterSlots*/ ctx[17]) {
				if (if_block2) {
					if_block2.p(ctx, dirty);

					if (dirty[0] & /*footer, hasFooterSlots*/ 131088) {
						transition_in(if_block2, 1);
					}
				} else {
					if_block2 = create_if_block(ctx);
					if_block2.c();
					transition_in(if_block2, 1);
					if_block2.m(div, t2);
				}
			} else if (if_block2) {
				group_outros();

				transition_out(if_block2, 1, 1, () => {
					if_block2 = null;
				});

				check_outros();
			}

			if (default_slot) {
				if (default_slot.p && (!current || dirty[0] & /*$$scope*/ 536870912)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[29],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[29])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[29], dirty, null),
						null
					);
				}
			}

			set_attributes(div, div_data = get_spread_update(div_levels, [
				(!current || dirty[0] & /*classes, computedClasses*/ 32770 && div_class_value !== (div_class_value = "card " + /*classes*/ ctx[1] + " " + /*computedClasses*/ ctx[15])) && { class: div_class_value },
				(!current || dirty[0] & /*animate*/ 32 && div_data_animate_value !== (div_data_animate_value = typeof /*animate*/ ctx[5] === 'undefined'
				? /*animate*/ ctx[5]
				: /*animate*/ ctx[5].toString())) && { "data-animate": div_data_animate_value },
				(!current || dirty[0] & /*hideNavbarOnOpen*/ 64 && div_data_hide_navbar_on_open_value !== (div_data_hide_navbar_on_open_value = typeof /*hideNavbarOnOpen*/ ctx[6] === 'undefined'
				? /*hideNavbarOnOpen*/ ctx[6]
				: /*hideNavbarOnOpen*/ ctx[6].toString())) && {
					"data-hide-navbar-on-open": div_data_hide_navbar_on_open_value
				},
				(!current || dirty[0] & /*hideToolbarOnOpen*/ 128 && div_data_hide_toolbar_on_open_value !== (div_data_hide_toolbar_on_open_value = typeof /*hideToolbarOnOpen*/ ctx[7] === 'undefined'
				? /*hideToolbarOnOpen*/ ctx[7]
				: /*hideToolbarOnOpen*/ ctx[7].toString())) && {
					"data-hide-toolbar-on-open": div_data_hide_toolbar_on_open_value
				},
				(!current || dirty[0] & /*hideStatusbarOnOpen*/ 256 && div_data_hide_statusbar_on_open_value !== (div_data_hide_statusbar_on_open_value = typeof /*hideStatusbarOnOpen*/ ctx[8] === 'undefined'
				? /*hideStatusbarOnOpen*/ ctx[8]
				: /*hideStatusbarOnOpen*/ ctx[8].toString())) && {
					"data-hide-statusbar-on-open": div_data_hide_statusbar_on_open_value
				},
				(!current || dirty[0] & /*scrollableEl*/ 512) && {
					"data-scrollable-el": /*scrollableEl*/ ctx[9]
				},
				(!current || dirty[0] & /*swipeToClose*/ 1024 && div_data_swipe_to_close_value !== (div_data_swipe_to_close_value = typeof /*swipeToClose*/ ctx[10] === 'undefined'
				? /*swipeToClose*/ ctx[10]
				: /*swipeToClose*/ ctx[10].toString())) && {
					"data-swipe-to-close": div_data_swipe_to_close_value
				},
				(!current || dirty[0] & /*closeByBackdropClick*/ 2048 && div_data_close_by_backdrop_click_value !== (div_data_close_by_backdrop_click_value = typeof /*closeByBackdropClick*/ ctx[11] === 'undefined'
				? /*closeByBackdropClick*/ ctx[11]
				: /*closeByBackdropClick*/ ctx[11].toString())) && {
					"data-close-by-backdrop-click": div_data_close_by_backdrop_click_value
				},
				(!current || dirty[0] & /*backdrop*/ 4096 && div_data_backdrop_value !== (div_data_backdrop_value = typeof /*backdrop*/ ctx[12] === 'undefined'
				? /*backdrop*/ ctx[12]
				: /*backdrop*/ ctx[12].toString())) && { "data-backdrop": div_data_backdrop_value },
				(!current || dirty[0] & /*backdropEl*/ 8192) && {
					"data-backdrop-el": /*backdropEl*/ ctx[13]
				},
				dirty[0] & /*$$restProps*/ 1048576 && restProps(/*$$restProps*/ ctx[20])
			]));
		},
		i(local) {
			if (current) return;
			transition_in(if_block0);
			transition_in(if_block1);
			transition_in(if_block2);
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(if_block0);
			transition_out(if_block1);
			transition_out(if_block2);
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			if (if_block2) if_block2.d();
			if (default_slot) default_slot.d(detaching);
			/*div_binding*/ ctx[28](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let hasHeaderSlots;
	let hasContentSlots;
	let hasFooterSlots;

	const omit_props_names = [
		"lec","classes","title","content","footer","outline","expandable","expandableAnimateWidth","expandableOpened","animate","hideNavbarOnOpen","hideToolbarOnOpen","hideStatusbarOnOpen","scrollableEl","swipeToClose","closeByBackdropClick","backdrop","backdropEl","noShadow","noBorder","padding"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	const $$slots = compute_slots(slots);
	let { lec } = $$props;
	const emit = createEmitter(createEventDispatcher, $$props);
	let computedClasses = undefined;
	let { classes } = $$props;
	let { title = undefined } = $$props;
	let { content = undefined } = $$props;
	let { footer = undefined } = $$props;
	let { outline = false } = $$props;
	let { expandable = false } = $$props;
	let { expandableAnimateWidth = false } = $$props;
	let { expandableOpened = false } = $$props;
	let { animate = undefined } = $$props;
	let { hideNavbarOnOpen = undefined } = $$props;
	let { hideToolbarOnOpen = undefined } = $$props;
	let { hideStatusbarOnOpen = undefined } = $$props;
	let { scrollableEl = undefined } = $$props;
	let { swipeToClose = undefined } = $$props;
	let { closeByBackdropClick = undefined } = $$props;
	let { backdrop = undefined } = $$props;
	let { backdropEl = undefined } = $$props;
	let { noShadow = false } = $$props;
	let { noBorder = false } = $$props;
	let { padding = true } = $$props;
	let el;

	/* eslint-enable no-undef */
	function open() {
		app.f7.card.open(el);
	}

	function close() {
		app.f7.card.close(el);
	}

	let initialWatched = false;

	function watchOpened(openedPassed) {
		if (!initialWatched) {
			initialWatched = true;
			return;
		}

		if (openedPassed) {
			open();
		} else {
			close();
		}
	}

	function onBeforeOpen(cardEl, prevent) {
		if (cardEl !== el) return;
		emit('cardBeforeOpen', [el, prevent]);
	}

	function onOpen(cardEl) {
		if (cardEl !== el) return;
		emit('cardOpen', [el]);
		$$invalidate(21, expandableOpened = true);
	}

	function onOpened(cardEl, pageEl) {
		if (cardEl !== el) return;
		emit('cardOpened', [el, pageEl]);
	}

	function onClose(cardEl) {
		if (cardEl !== el) return;
		emit('cardClose', [el]);
	}

	function onClosed(cardEl, pageEl) {
		if (cardEl !== el) return;
		emit('cardClosed', [el, pageEl]);
		$$invalidate(21, expandableOpened = false);
	}

	onMount(() => {
		if (!expandable) return;

		f7ready(() => {
			app.f7.on('cardBeforeOpen', onBeforeOpen);
			app.f7.on('cardOpen', onOpen);
			app.f7.on('cardOpened', onOpened);
			app.f7.on('cardClose', onClose);
			app.f7.on('cardClosed', onClosed);

			if (expandable && expandableOpened && el) {
				app.f7.card.open(el, false);
			}
		});
	});

	onDestroy(() => {
		if (!expandable) return;
		if (!app.f7 || !el) return;
		app.f7.off('cardBeforeOpen', onBeforeOpen);
		app.f7.off('cardOpen', onOpen);
		app.f7.off('cardOpened', onOpened);
		app.f7.off('cardClose', onClose);
		app.f7.off('cardClosed', onClosed);
	});

	function div_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			el = $$value;
			$$invalidate(16, el);
		});
	}

	$$self.$$set = $$new_props => {
		$$invalidate(42, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(20, $$restProps = compute_rest_props($$props, omit_props_names));
		if ('lec' in $$new_props) $$invalidate(0, lec = $$new_props.lec);
		if ('classes' in $$new_props) $$invalidate(1, classes = $$new_props.classes);
		if ('title' in $$new_props) $$invalidate(2, title = $$new_props.title);
		if ('content' in $$new_props) $$invalidate(3, content = $$new_props.content);
		if ('footer' in $$new_props) $$invalidate(4, footer = $$new_props.footer);
		if ('outline' in $$new_props) $$invalidate(22, outline = $$new_props.outline);
		if ('expandable' in $$new_props) $$invalidate(23, expandable = $$new_props.expandable);
		if ('expandableAnimateWidth' in $$new_props) $$invalidate(24, expandableAnimateWidth = $$new_props.expandableAnimateWidth);
		if ('expandableOpened' in $$new_props) $$invalidate(21, expandableOpened = $$new_props.expandableOpened);
		if ('animate' in $$new_props) $$invalidate(5, animate = $$new_props.animate);
		if ('hideNavbarOnOpen' in $$new_props) $$invalidate(6, hideNavbarOnOpen = $$new_props.hideNavbarOnOpen);
		if ('hideToolbarOnOpen' in $$new_props) $$invalidate(7, hideToolbarOnOpen = $$new_props.hideToolbarOnOpen);
		if ('hideStatusbarOnOpen' in $$new_props) $$invalidate(8, hideStatusbarOnOpen = $$new_props.hideStatusbarOnOpen);
		if ('scrollableEl' in $$new_props) $$invalidate(9, scrollableEl = $$new_props.scrollableEl);
		if ('swipeToClose' in $$new_props) $$invalidate(10, swipeToClose = $$new_props.swipeToClose);
		if ('closeByBackdropClick' in $$new_props) $$invalidate(11, closeByBackdropClick = $$new_props.closeByBackdropClick);
		if ('backdrop' in $$new_props) $$invalidate(12, backdrop = $$new_props.backdrop);
		if ('backdropEl' in $$new_props) $$invalidate(13, backdropEl = $$new_props.backdropEl);
		if ('noShadow' in $$new_props) $$invalidate(25, noShadow = $$new_props.noShadow);
		if ('noBorder' in $$new_props) $$invalidate(26, noBorder = $$new_props.noBorder);
		if ('padding' in $$new_props) $$invalidate(14, padding = $$new_props.padding);
		if ('$$scope' in $$new_props) $$invalidate(29, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		$$invalidate(15, computedClasses = classNames(
			classes,
			{
				'card-outline': outline,
				'card-expandable': expandable,
				'card-expandable-animate-width': expandableAnimateWidth,
				'no-shadow': noShadow,
				'no-border': noBorder
			},
			colorClasses($$props)
		));

		if ($$self.$$.dirty[0] & /*expandableOpened*/ 2097152) {
			watchOpened(expandableOpened);
		}
	};

	$$invalidate(19, hasHeaderSlots = $$slots.header);
	$$invalidate(18, hasContentSlots = $$slots.content);
	$$invalidate(17, hasFooterSlots = $$slots.footer);
	$$props = exclude_internal_props($$props);

	return [
		lec,
		classes,
		title,
		content,
		footer,
		animate,
		hideNavbarOnOpen,
		hideToolbarOnOpen,
		hideStatusbarOnOpen,
		scrollableEl,
		swipeToClose,
		closeByBackdropClick,
		backdrop,
		backdropEl,
		padding,
		computedClasses,
		el,
		hasFooterSlots,
		hasContentSlots,
		hasHeaderSlots,
		$$restProps,
		expandableOpened,
		outline,
		expandable,
		expandableAnimateWidth,
		noShadow,
		noBorder,
		slots,
		div_binding,
		$$scope
	];
}

class Card extends SvelteComponent {
	constructor(options) {
		super();

		init(
			this,
			options,
			instance,
			create_fragment,
			safe_not_equal,
			{
				lec: 0,
				classes: 1,
				title: 2,
				content: 3,
				footer: 4,
				outline: 22,
				expandable: 23,
				expandableAnimateWidth: 24,
				expandableOpened: 21,
				animate: 5,
				hideNavbarOnOpen: 6,
				hideToolbarOnOpen: 7,
				hideStatusbarOnOpen: 8,
				scrollableEl: 9,
				swipeToClose: 10,
				closeByBackdropClick: 11,
				backdrop: 12,
				backdropEl: 13,
				noShadow: 25,
				noBorder: 26,
				padding: 14
			},
			null,
			[-1, -1]
		);
	}
}

export { Card };
