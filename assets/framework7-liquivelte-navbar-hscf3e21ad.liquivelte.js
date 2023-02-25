import { SvelteComponent, init, safe_not_equal, create_slot, assign, element, space, claim_element, children, detach, claim_space, attr, set_attributes, insert_hydration, append_hydration, update_slot_base, get_all_dirty_from_scope, get_slot_changes, transition_in, group_outros, transition_out, check_outros, get_spread_update, compute_rest_props, getContext, onMount, afterUpdate, onDestroy, exclude_internal_props, create_component, claim_component, mount_component, destroy_component, text, claim_text, set_data, compute_slots, createEventDispatcher, binding_callbacks } from './liquivelte-svelte-hs8b900a8a.liquivelte.js';
import { cachedLiquid } from './liquivelte-liquid-hs9c1bba77.liquivelte.js';
import { restProps, createEmitter, useTheme, f7ready, app, classNames, colorClasses } from './framework7-liquivelte-hs01c0185d.liquivelte.js';
import { Nav_left } from './framework7-liquivelte-nav-left-hs053a15be.liquivelte.js';
import { Nav_title } from './framework7-liquivelte-nav-title-hs20cf06cf.liquivelte.js';
import { Nav_right } from './framework7-liquivelte-nav-right-hsa065450e.liquivelte.js';

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/node_modules/framework7-liquivelte/components/navbar.liquivelte generated by Svelte v3.50.0 */
const get_after_inner_slot_changes = dirty => ({});
const get_after_inner_slot_context = ctx => ({});
const get_title_large_slot_changes = dirty => ({});
const get_title_large_slot_context = ctx => ({});
const get_right_slot_changes = dirty => ({});
const get_right_slot_context = ctx => ({});
const get_nav_right_slot_changes = dirty => ({});
const get_nav_right_slot_context = ctx => ({});
const get_title_slot_changes = dirty => ({});
const get_title_slot_context = ctx => ({});
const get_left_slot_changes = dirty => ({});
const get_left_slot_context = ctx => ({});
const get_nav_left_slot_changes = dirty => ({});
const get_nav_left_slot_context = ctx => ({});
const get_before_inner_slot_changes = dirty => ({});
const get_before_inner_slot_context = ctx => ({});

// (207:4) {#if backLink || hasLeftSlots }
function create_if_block_3(ctx) {
	let navleft;
	let current;

	navleft = new Nav_left({
			props: {
				backLink: /*backLink*/ ctx[1],
				backLinkUrl: /*backLinkUrl*/ ctx[2],
				backLinkForce: /*backLinkForce*/ ctx[3],
				backLinkShowText: /*backLinkShowText*/ ctx[4],
				onBackClick: /*onBackClick*/ ctx[17],
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(navleft.$$.fragment);
		},
		l(nodes) {
			claim_component(navleft.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(navleft, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const navleft_changes = {};
			if (dirty[0] & /*backLink*/ 2) navleft_changes.backLink = /*backLink*/ ctx[1];
			if (dirty[0] & /*backLinkUrl*/ 4) navleft_changes.backLinkUrl = /*backLinkUrl*/ ctx[2];
			if (dirty[0] & /*backLinkForce*/ 8) navleft_changes.backLinkForce = /*backLinkForce*/ ctx[3];
			if (dirty[0] & /*backLinkShowText*/ 16) navleft_changes.backLinkShowText = /*backLinkShowText*/ ctx[4];

			if (dirty[1] & /*$$scope*/ 65536) {
				navleft_changes.$$scope = { dirty, ctx };
			}

			navleft.$set(navleft_changes);
		},
		i(local) {
			if (current) return;
			transition_in(navleft.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(navleft.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(navleft, detaching);
		}
	};
}

// (208:6) <NavLeft  {backLink} {backLinkUrl} {backLinkForce} {backLinkShowText} {onBackClick} >
function create_default_slot_2(ctx) {
	let t;
	let current;
	const nav_left_slot_template = /*#slots*/ ctx[45]["nav-left"];
	const nav_left_slot = create_slot(nav_left_slot_template, ctx, /*$$scope*/ ctx[47], get_nav_left_slot_context);
	const left_slot_template = /*#slots*/ ctx[45].left;
	const left_slot = create_slot(left_slot_template, ctx, /*$$scope*/ ctx[47], get_left_slot_context);

	return {
		c() {
			if (nav_left_slot) nav_left_slot.c();
			t = space();
			if (left_slot) left_slot.c();
		},
		l(nodes) {
			if (nav_left_slot) nav_left_slot.l(nodes);
			t = claim_space(nodes);
			if (left_slot) left_slot.l(nodes);
		},
		m(target, anchor) {
			if (nav_left_slot) {
				nav_left_slot.m(target, anchor);
			}

			insert_hydration(target, t, anchor);

			if (left_slot) {
				left_slot.m(target, anchor);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (nav_left_slot) {
				if (nav_left_slot.p && (!current || dirty[1] & /*$$scope*/ 65536)) {
					update_slot_base(
						nav_left_slot,
						nav_left_slot_template,
						ctx,
						/*$$scope*/ ctx[47],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[47])
						: get_slot_changes(nav_left_slot_template, /*$$scope*/ ctx[47], dirty, get_nav_left_slot_changes),
						get_nav_left_slot_context
					);
				}
			}

			if (left_slot) {
				if (left_slot.p && (!current || dirty[1] & /*$$scope*/ 65536)) {
					update_slot_base(
						left_slot,
						left_slot_template,
						ctx,
						/*$$scope*/ ctx[47],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[47])
						: get_slot_changes(left_slot_template, /*$$scope*/ ctx[47], dirty, get_left_slot_changes),
						get_left_slot_context
					);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(nav_left_slot, local);
			transition_in(left_slot, local);
			current = true;
		},
		o(local) {
			transition_out(nav_left_slot, local);
			transition_out(left_slot, local);
			current = false;
		},
		d(detaching) {
			if (nav_left_slot) nav_left_slot.d(detaching);
			if (detaching) detach(t);
			if (left_slot) left_slot.d(detaching);
		}
	};
}

// (213:4) {#if title || subtitle || hasTitleSlots }
function create_if_block_2(ctx) {
	let navtitle;
	let current;

	navtitle = new Nav_title({
			props: {
				title: /*title*/ ctx[5],
				subtitle: /*subtitle*/ ctx[6],
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(navtitle.$$.fragment);
		},
		l(nodes) {
			claim_component(navtitle.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(navtitle, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const navtitle_changes = {};
			if (dirty[0] & /*title*/ 32) navtitle_changes.title = /*title*/ ctx[5];
			if (dirty[0] & /*subtitle*/ 64) navtitle_changes.subtitle = /*subtitle*/ ctx[6];

			if (dirty[1] & /*$$scope*/ 65536) {
				navtitle_changes.$$scope = { dirty, ctx };
			}

			navtitle.$set(navtitle_changes);
		},
		i(local) {
			if (current) return;
			transition_in(navtitle.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(navtitle.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(navtitle, detaching);
		}
	};
}

// (214:6) <NavTitle  {title} {subtitle} >
function create_default_slot_1(ctx) {
	let current;
	const title_slot_template = /*#slots*/ ctx[45].title;
	const title_slot = create_slot(title_slot_template, ctx, /*$$scope*/ ctx[47], get_title_slot_context);

	return {
		c() {
			if (title_slot) title_slot.c();
		},
		l(nodes) {
			if (title_slot) title_slot.l(nodes);
		},
		m(target, anchor) {
			if (title_slot) {
				title_slot.m(target, anchor);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (title_slot) {
				if (title_slot.p && (!current || dirty[1] & /*$$scope*/ 65536)) {
					update_slot_base(
						title_slot,
						title_slot_template,
						ctx,
						/*$$scope*/ ctx[47],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[47])
						: get_slot_changes(title_slot_template, /*$$scope*/ ctx[47], dirty, get_title_slot_changes),
						get_title_slot_context
					);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(title_slot, local);
			current = true;
		},
		o(local) {
			transition_out(title_slot, local);
			current = false;
		},
		d(detaching) {
			if (title_slot) title_slot.d(detaching);
		}
	};
}

// (218:4) {#if hasRightSlots }
function create_if_block_1(ctx) {
	let navright;
	let current;

	navright = new Nav_right({
			props: {
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(navright.$$.fragment);
		},
		l(nodes) {
			claim_component(navright.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(navright, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const navright_changes = {};

			if (dirty[1] & /*$$scope*/ 65536) {
				navright_changes.$$scope = { dirty, ctx };
			}

			navright.$set(navright_changes);
		},
		i(local) {
			if (current) return;
			transition_in(navright.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(navright.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(navright, detaching);
		}
	};
}

// (219:6) <NavRight  >
function create_default_slot(ctx) {
	let t;
	let current;
	const nav_right_slot_template = /*#slots*/ ctx[45]["nav-right"];
	const nav_right_slot = create_slot(nav_right_slot_template, ctx, /*$$scope*/ ctx[47], get_nav_right_slot_context);
	const right_slot_template = /*#slots*/ ctx[45].right;
	const right_slot = create_slot(right_slot_template, ctx, /*$$scope*/ ctx[47], get_right_slot_context);

	return {
		c() {
			if (nav_right_slot) nav_right_slot.c();
			t = space();
			if (right_slot) right_slot.c();
		},
		l(nodes) {
			if (nav_right_slot) nav_right_slot.l(nodes);
			t = claim_space(nodes);
			if (right_slot) right_slot.l(nodes);
		},
		m(target, anchor) {
			if (nav_right_slot) {
				nav_right_slot.m(target, anchor);
			}

			insert_hydration(target, t, anchor);

			if (right_slot) {
				right_slot.m(target, anchor);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (nav_right_slot) {
				if (nav_right_slot.p && (!current || dirty[1] & /*$$scope*/ 65536)) {
					update_slot_base(
						nav_right_slot,
						nav_right_slot_template,
						ctx,
						/*$$scope*/ ctx[47],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[47])
						: get_slot_changes(nav_right_slot_template, /*$$scope*/ ctx[47], dirty, get_nav_right_slot_changes),
						get_nav_right_slot_context
					);
				}
			}

			if (right_slot) {
				if (right_slot.p && (!current || dirty[1] & /*$$scope*/ 65536)) {
					update_slot_base(
						right_slot,
						right_slot_template,
						ctx,
						/*$$scope*/ ctx[47],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[47])
						: get_slot_changes(right_slot_template, /*$$scope*/ ctx[47], dirty, get_right_slot_changes),
						get_right_slot_context
					);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(nav_right_slot, local);
			transition_in(right_slot, local);
			current = true;
		},
		o(local) {
			transition_out(nav_right_slot, local);
			transition_out(right_slot, local);
			current = false;
		},
		d(detaching) {
			if (nav_right_slot) nav_right_slot.d(detaching);
			if (detaching) detach(t);
			if (right_slot) right_slot.d(detaching);
		}
	};
}

// (224:4) {#if largeTitle || hasTitleLargeSlots }
function create_if_block(ctx) {
	let div1;
	let div0;
	let t0_value = /*liquid*/ ctx[16].default(/*largeTitle*/ ctx[12], '') + "";
	let t0;
	let t1;
	let current;
	const title_large_slot_template = /*#slots*/ ctx[45]["title-large"];
	const title_large_slot = create_slot(title_large_slot_template, ctx, /*$$scope*/ ctx[47], get_title_large_slot_context);

	return {
		c() {
			div1 = element("div");
			div0 = element("div");
			t0 = text(t0_value);
			t1 = space();
			if (title_large_slot) title_large_slot.c();
			this.h();
		},
		l(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t0 = claim_text(div0_nodes, t0_value);
			t1 = claim_space(div0_nodes);
			if (title_large_slot) title_large_slot.l(div0_nodes);
			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div0, "class", "title-large-text");
			attr(div1, "class", "title-large");
		},
		m(target, anchor) {
			insert_hydration(target, div1, anchor);
			append_hydration(div1, div0);
			append_hydration(div0, t0);
			append_hydration(div0, t1);

			if (title_large_slot) {
				title_large_slot.m(div0, null);
			}

			current = true;
		},
		p(ctx, dirty) {
			if ((!current || dirty[0] & /*largeTitle*/ 4096) && t0_value !== (t0_value = /*liquid*/ ctx[16].default(/*largeTitle*/ ctx[12], '') + "")) set_data(t0, t0_value);

			if (title_large_slot) {
				if (title_large_slot.p && (!current || dirty[1] & /*$$scope*/ 65536)) {
					update_slot_base(
						title_large_slot,
						title_large_slot_template,
						ctx,
						/*$$scope*/ ctx[47],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[47])
						: get_slot_changes(title_large_slot_template, /*$$scope*/ ctx[47], dirty, get_title_large_slot_changes),
						get_title_large_slot_context
					);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(title_large_slot, local);
			current = true;
		},
		o(local) {
			transition_out(title_large_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div1);
			if (title_large_slot) title_large_slot.d(detaching);
		}
	};
}

function create_fragment(ctx) {
	let div2;
	let div0;
	let t0;
	let t1;
	let div1;
	let t2;
	let t3;
	let t4;
	let t5;
	let div1_class_value;
	let t6;
	let div2_class_value;
	let current;
	const before_inner_slot_template = /*#slots*/ ctx[45]["before-inner"];
	const before_inner_slot = create_slot(before_inner_slot_template, ctx, /*$$scope*/ ctx[47], get_before_inner_slot_context);
	let if_block0 = (/*backLink*/ ctx[1] || /*hasLeftSlots*/ ctx[15]) && create_if_block_3(ctx);
	let if_block1 = (/*title*/ ctx[5] || /*subtitle*/ ctx[6] || /*hasTitleSlots*/ ctx[13]) && create_if_block_2(ctx);
	let if_block2 = /*hasRightSlots*/ ctx[14] && create_if_block_1(ctx);
	let if_block3 = (/*largeTitle*/ ctx[12] || /*hasTitleLargeSlots*/ ctx[11]) && create_if_block(ctx);
	const default_slot_template = /*#slots*/ ctx[45].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[47], null);
	const after_inner_slot_template = /*#slots*/ ctx[45]["after-inner"];
	const after_inner_slot = create_slot(after_inner_slot_template, ctx, /*$$scope*/ ctx[47], get_after_inner_slot_context);

	let div2_levels = [
		{
			class: div2_class_value = "navbar " + /*classes*/ ctx[0] + " " + /*computedClasses*/ ctx[8]
		},
		{ "data-f7-slot": /*f7Slot*/ ctx[7] },
		restProps(/*$$restProps*/ ctx[18])
	];

	let div2_data = {};

	for (let i = 0; i < div2_levels.length; i += 1) {
		div2_data = assign(div2_data, div2_levels[i]);
	}

	return {
		c() {
			div2 = element("div");
			div0 = element("div");
			t0 = space();
			if (before_inner_slot) before_inner_slot.c();
			t1 = space();
			div1 = element("div");
			if (if_block0) if_block0.c();
			t2 = space();
			if (if_block1) if_block1.c();
			t3 = space();
			if (if_block2) if_block2.c();
			t4 = space();
			if (if_block3) if_block3.c();
			t5 = space();
			if (default_slot) default_slot.c();
			t6 = space();
			if (after_inner_slot) after_inner_slot.c();
			this.h();
		},
		l(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true, "data-f7-slot": true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			children(div0).forEach(detach);
			t0 = claim_space(div2_nodes);
			if (before_inner_slot) before_inner_slot.l(div2_nodes);
			t1 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			if (if_block0) if_block0.l(div1_nodes);
			t2 = claim_space(div1_nodes);
			if (if_block1) if_block1.l(div1_nodes);
			t3 = claim_space(div1_nodes);
			if (if_block2) if_block2.l(div1_nodes);
			t4 = claim_space(div1_nodes);
			if (if_block3) if_block3.l(div1_nodes);
			t5 = claim_space(div1_nodes);
			if (default_slot) default_slot.l(div1_nodes);
			div1_nodes.forEach(detach);
			t6 = claim_space(div2_nodes);
			if (after_inner_slot) after_inner_slot.l(div2_nodes);
			div2_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div0, "class", "navbar-bg");
			attr(div1, "class", div1_class_value = "navbar-inner " + /*innerClasses*/ ctx[10]);
			set_attributes(div2, div2_data);
		},
		m(target, anchor) {
			insert_hydration(target, div2, anchor);
			append_hydration(div2, div0);
			append_hydration(div2, t0);

			if (before_inner_slot) {
				before_inner_slot.m(div2, null);
			}

			append_hydration(div2, t1);
			append_hydration(div2, div1);
			if (if_block0) if_block0.m(div1, null);
			append_hydration(div1, t2);
			if (if_block1) if_block1.m(div1, null);
			append_hydration(div1, t3);
			if (if_block2) if_block2.m(div1, null);
			append_hydration(div1, t4);
			if (if_block3) if_block3.m(div1, null);
			append_hydration(div1, t5);

			if (default_slot) {
				default_slot.m(div1, null);
			}

			append_hydration(div2, t6);

			if (after_inner_slot) {
				after_inner_slot.m(div2, null);
			}

			/*div2_binding*/ ctx[46](div2);
			current = true;
		},
		p(ctx, dirty) {
			if (before_inner_slot) {
				if (before_inner_slot.p && (!current || dirty[1] & /*$$scope*/ 65536)) {
					update_slot_base(
						before_inner_slot,
						before_inner_slot_template,
						ctx,
						/*$$scope*/ ctx[47],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[47])
						: get_slot_changes(before_inner_slot_template, /*$$scope*/ ctx[47], dirty, get_before_inner_slot_changes),
						get_before_inner_slot_context
					);
				}
			}

			if (/*backLink*/ ctx[1] || /*hasLeftSlots*/ ctx[15]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty[0] & /*backLink, hasLeftSlots*/ 32770) {
						transition_in(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_3(ctx);
					if_block0.c();
					transition_in(if_block0, 1);
					if_block0.m(div1, t2);
				}
			} else if (if_block0) {
				group_outros();

				transition_out(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				check_outros();
			}

			if (/*title*/ ctx[5] || /*subtitle*/ ctx[6] || /*hasTitleSlots*/ ctx[13]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty[0] & /*title, subtitle, hasTitleSlots*/ 8288) {
						transition_in(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block_2(ctx);
					if_block1.c();
					transition_in(if_block1, 1);
					if_block1.m(div1, t3);
				}
			} else if (if_block1) {
				group_outros();

				transition_out(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				check_outros();
			}

			if (/*hasRightSlots*/ ctx[14]) {
				if (if_block2) {
					if_block2.p(ctx, dirty);

					if (dirty[0] & /*hasRightSlots*/ 16384) {
						transition_in(if_block2, 1);
					}
				} else {
					if_block2 = create_if_block_1(ctx);
					if_block2.c();
					transition_in(if_block2, 1);
					if_block2.m(div1, t4);
				}
			} else if (if_block2) {
				group_outros();

				transition_out(if_block2, 1, 1, () => {
					if_block2 = null;
				});

				check_outros();
			}

			if (/*largeTitle*/ ctx[12] || /*hasTitleLargeSlots*/ ctx[11]) {
				if (if_block3) {
					if_block3.p(ctx, dirty);

					if (dirty[0] & /*largeTitle, hasTitleLargeSlots*/ 6144) {
						transition_in(if_block3, 1);
					}
				} else {
					if_block3 = create_if_block(ctx);
					if_block3.c();
					transition_in(if_block3, 1);
					if_block3.m(div1, t5);
				}
			} else if (if_block3) {
				group_outros();

				transition_out(if_block3, 1, 1, () => {
					if_block3 = null;
				});

				check_outros();
			}

			if (default_slot) {
				if (default_slot.p && (!current || dirty[1] & /*$$scope*/ 65536)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[47],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[47])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[47], dirty, null),
						null
					);
				}
			}

			if (!current || dirty[0] & /*innerClasses*/ 1024 && div1_class_value !== (div1_class_value = "navbar-inner " + /*innerClasses*/ ctx[10])) {
				attr(div1, "class", div1_class_value);
			}

			if (after_inner_slot) {
				if (after_inner_slot.p && (!current || dirty[1] & /*$$scope*/ 65536)) {
					update_slot_base(
						after_inner_slot,
						after_inner_slot_template,
						ctx,
						/*$$scope*/ ctx[47],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[47])
						: get_slot_changes(after_inner_slot_template, /*$$scope*/ ctx[47], dirty, get_after_inner_slot_changes),
						get_after_inner_slot_context
					);
				}
			}

			set_attributes(div2, div2_data = get_spread_update(div2_levels, [
				(!current || dirty[0] & /*classes, computedClasses*/ 257 && div2_class_value !== (div2_class_value = "navbar " + /*classes*/ ctx[0] + " " + /*computedClasses*/ ctx[8])) && { class: div2_class_value },
				(!current || dirty[0] & /*f7Slot*/ 128) && { "data-f7-slot": /*f7Slot*/ ctx[7] },
				dirty[0] & /*$$restProps*/ 262144 && restProps(/*$$restProps*/ ctx[18])
			]));
		},
		i(local) {
			if (current) return;
			transition_in(before_inner_slot, local);
			transition_in(if_block0);
			transition_in(if_block1);
			transition_in(if_block2);
			transition_in(if_block3);
			transition_in(default_slot, local);
			transition_in(after_inner_slot, local);
			current = true;
		},
		o(local) {
			transition_out(before_inner_slot, local);
			transition_out(if_block0);
			transition_out(if_block1);
			transition_out(if_block2);
			transition_out(if_block3);
			transition_out(default_slot, local);
			transition_out(after_inner_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div2);
			if (before_inner_slot) before_inner_slot.d(detaching);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			if (if_block2) if_block2.d();
			if (if_block3) if_block3.d();
			if (default_slot) default_slot.d(detaching);
			if (after_inner_slot) after_inner_slot.d(detaching);
			/*div2_binding*/ ctx[46](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let hasLeftSlots;
	let hasRightSlots;
	let hasTitleSlots;
	let largeTitle;
	let hasTitleLargeSlots;
	let addLeftTitleClass;
	let addCenterTitleClass;
	let isLarge;
	let isTransparent;
	let isTransparentVisible;
	let innerClasses;

	const omit_props_names = [
		"importsSeek","classes","backLink","backLinkUrl","backLinkForce","backLinkShowText","sliding","title","subtitle","hidden","noShadow","noHairline","innerClass","innerClassName","large","largeTransparent","transparent","titleLarge","f7Slot","hide","show","size"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	const $$slots = compute_slots(slots);
	let { importsSeek = 'lower' } = $$props;
	getContext('svelteProps') || {};
	let lec = getContext('lec') || {};
	(() => window.cicR = $$props.resetCicR ? 1 : window.cicR + 1)();
	const liquid = cachedLiquid(lec);
	const emit = createEmitter(createEventDispatcher, $$props);
	let computedClasses = undefined;
	let { classes = '' } = $$props;
	let { backLink = undefined } = $$props;
	let { backLinkUrl = undefined } = $$props;
	let { backLinkForce = false } = $$props;
	let { backLinkShowText = undefined } = $$props;
	let { sliding = true } = $$props;
	let { title = undefined } = $$props;
	let { subtitle = undefined } = $$props;
	let { hidden = false } = $$props;
	let { noShadow = false } = $$props;
	let { noHairline = false } = $$props;
	let { innerClass = undefined } = $$props;
	let { innerClassName = undefined } = $$props;
	let { large = false } = $$props;
	let { largeTransparent = false } = $$props;
	let { transparent = false } = $$props;
	let { titleLarge = undefined } = $$props;
	let { f7Slot = 'fixed' } = $$props;
	let el;

	let theme = useTheme(t => {
		$$invalidate(33, theme = t);
	});

	let routerPositionClass = '';
	let largeCollapsed = false;
	let routerNavbarRole = null;
	let routerNavbarRoleDetailRoot = false;
	let routerNavbarMasterStack = false;
	let transparentVisible = false;

	function hide(animate) {
		app.f7.navbar.hide(el, animate);
	}

	function show(animate) {
		app.f7.navbar.show(el, animate);
	}

	function size() {
		app.f7.navbar.size(el);
	}

	function onHide(navbarEl) {
		if (el !== navbarEl) return;
		emit('navbarHide');
	}

	function onShow(navbarEl) {
		if (el !== navbarEl) return;
		emit('navbarShow');
	}

	function onNavbarTransparentShow(navbarEl) {
		if (el !== navbarEl) return;
		$$invalidate(39, transparentVisible = true);
		emit('navbarTransparentShow');
	}

	function onNavbarTransparentHide(navbarEl) {
		if (el !== navbarEl) return;
		$$invalidate(39, transparentVisible = false);
		emit('navbarTransparentHide');
	}

	function onExpand(navbarEl) {
		if (el !== navbarEl) return;
		$$invalidate(35, largeCollapsed = false);
		emit('navbarExpand');
	}

	function onCollapse(navbarEl) {
		if (el !== navbarEl) return;
		$$invalidate(35, largeCollapsed = true);
		emit('navbarCollapse');
	}

	function onNavbarPosition(navbarEl, position) {
		if (el !== navbarEl) return;
		$$invalidate(34, routerPositionClass = position ? `navbar-${position}` : position);
	}

	function onNavbarRole(navbarEl, rolesData) {
		if (el !== navbarEl) return;
		$$invalidate(36, routerNavbarRole = rolesData.role);
		$$invalidate(37, routerNavbarRoleDetailRoot = rolesData.detailRoot);
	}

	function onNavbarMasterStack(navbarEl) {
		if (el !== navbarEl) return;
		$$invalidate(38, routerNavbarMasterStack = true);
	}

	function onNavbarMasterUnstack(navbarEl) {
		if (el !== navbarEl) return;
		$$invalidate(38, routerNavbarMasterStack = false);
	}

	function onBackClick() {
		emit('clickBack');
	}

	function mountNavbar() {
		app.f7.on('navbarShow', onShow);
		app.f7.on('navbarHide', onHide);
		app.f7.on('navbarCollapse', onCollapse);
		app.f7.on('navbarExpand', onExpand);
		app.f7.on('navbarPosition', onNavbarPosition);
		app.f7.on('navbarRole', onNavbarRole);
		app.f7.on('navbarMasterStack', onNavbarMasterStack);
		app.f7.on('navbarMasterUnstack', onNavbarMasterUnstack);
		app.f7.on('navbarTransparentShow', onNavbarTransparentShow);
		app.f7.on('navbarTransparentHide', onNavbarTransparentHide);
	}

	function destroyNavbar() {
		app.f7.off('navbarShow', onShow);
		app.f7.off('navbarHide', onHide);
		app.f7.off('navbarCollapse', onCollapse);
		app.f7.off('navbarExpand', onExpand);
		app.f7.off('navbarPosition', onNavbarPosition);
		app.f7.off('navbarRole', onNavbarRole);
		app.f7.off('navbarMasterStack', onNavbarMasterStack);
		app.f7.off('navbarMasterUnstack', onNavbarMasterUnstack);
		app.f7.off('navbarTransparentShow', onNavbarTransparentShow);
		app.f7.off('navbarTransparentHide', onNavbarTransparentHide);
	}

	onMount(() => {
		f7ready(() => {
			mountNavbar();
		});
	});

	afterUpdate(() => {
		if (!app.f7) return;
		app.f7.navbar.size(el);
	});

	onDestroy(() => {
		if (!app.f7) return;
		destroyNavbar();
	});

	function div2_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			el = $$value;
			$$invalidate(9, el);
		});
	}

	$$self.$$set = $$new_props => {
		$$invalidate(64, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(18, $$restProps = compute_rest_props($$props, omit_props_names));
		if ('importsSeek' in $$new_props) $$invalidate(19, importsSeek = $$new_props.importsSeek);
		if ('classes' in $$new_props) $$invalidate(0, classes = $$new_props.classes);
		if ('backLink' in $$new_props) $$invalidate(1, backLink = $$new_props.backLink);
		if ('backLinkUrl' in $$new_props) $$invalidate(2, backLinkUrl = $$new_props.backLinkUrl);
		if ('backLinkForce' in $$new_props) $$invalidate(3, backLinkForce = $$new_props.backLinkForce);
		if ('backLinkShowText' in $$new_props) $$invalidate(4, backLinkShowText = $$new_props.backLinkShowText);
		if ('sliding' in $$new_props) $$invalidate(20, sliding = $$new_props.sliding);
		if ('title' in $$new_props) $$invalidate(5, title = $$new_props.title);
		if ('subtitle' in $$new_props) $$invalidate(6, subtitle = $$new_props.subtitle);
		if ('hidden' in $$new_props) $$invalidate(21, hidden = $$new_props.hidden);
		if ('noShadow' in $$new_props) $$invalidate(22, noShadow = $$new_props.noShadow);
		if ('noHairline' in $$new_props) $$invalidate(23, noHairline = $$new_props.noHairline);
		if ('innerClass' in $$new_props) $$invalidate(24, innerClass = $$new_props.innerClass);
		if ('innerClassName' in $$new_props) $$invalidate(25, innerClassName = $$new_props.innerClassName);
		if ('large' in $$new_props) $$invalidate(26, large = $$new_props.large);
		if ('largeTransparent' in $$new_props) $$invalidate(27, largeTransparent = $$new_props.largeTransparent);
		if ('transparent' in $$new_props) $$invalidate(28, transparent = $$new_props.transparent);
		if ('titleLarge' in $$new_props) $$invalidate(29, titleLarge = $$new_props.titleLarge);
		if ('f7Slot' in $$new_props) $$invalidate(7, f7Slot = $$new_props.f7Slot);
		if ('$$scope' in $$new_props) $$invalidate(47, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*titleLarge, large, title*/ 603979808) {
			$$invalidate(12, largeTitle = titleLarge || large && title);
		}

		if ($$self.$$.dirty[1] & /*theme*/ 4) {
			$$invalidate(41, addLeftTitleClass = theme && theme.ios && app.f7 && !app.f7.params.navbar.iosCenterTitle);
		}

		if ($$self.$$.dirty[1] & /*theme*/ 4) {
			$$invalidate(40, addCenterTitleClass = theme && theme.md && app.f7 && app.f7.params.navbar.mdCenterTitle || theme && theme.aurora && app.f7 && app.f7.params.navbar.auroraCenterTitle);
		}

		if ($$self.$$.dirty[0] & /*large, largeTransparent*/ 201326592) {
			$$invalidate(44, isLarge = large || largeTransparent);
		}

		if ($$self.$$.dirty[0] & /*transparent, largeTransparent*/ 402653184 | $$self.$$.dirty[1] & /*isLarge*/ 8192) {
			$$invalidate(43, isTransparent = transparent || isLarge && largeTransparent);
		}

		if ($$self.$$.dirty[1] & /*isTransparent, transparentVisible*/ 4352) {
			$$invalidate(42, isTransparentVisible = isTransparent && transparentVisible);
		}

		$$invalidate(8, computedClasses = classNames(
			routerPositionClass,
			{
				'navbar-hidden': hidden,
				'navbar-large': isLarge,
				'navbar-large-collapsed': isLarge && largeCollapsed,
				'navbar-transparent': isTransparent,
				'navbar-transparent-visible': isTransparentVisible,
				'navbar-master': routerNavbarRole === 'master',
				'navbar-master-detail': routerNavbarRole === 'detail',
				'navbar-master-detail-root': routerNavbarRoleDetailRoot === true,
				'navbar-master-stacked': routerNavbarMasterStack === true,
				'no-shadow': noShadow,
				'no-hairline': noHairline
			},
			colorClasses($$props)
		));

		if ($$self.$$.dirty[0] & /*innerClass, innerClassName, sliding*/ 51380224 | $$self.$$.dirty[1] & /*addLeftTitleClass, addCenterTitleClass*/ 1536) {
			$$invalidate(10, innerClasses = classNames(innerClass, innerClassName, {
				sliding,
				'navbar-inner-left-title': addLeftTitleClass,
				'navbar-inner-centered-title': addCenterTitleClass
			}));
		}
	};

	$$invalidate(15, hasLeftSlots = $$slots['nav-left'] || $$slots['left']);

	// eslint-disable-next-line
	$$invalidate(14, hasRightSlots = $$slots['nav-right'] || $$slots['right']);

	// eslint-disable-next-line
	$$invalidate(13, hasTitleSlots = $$slots['title']);

	// eslint-disable-next-line
	$$invalidate(11, hasTitleLargeSlots = $$slots['title-large']);

	$$props = exclude_internal_props($$props);

	return [
		classes,
		backLink,
		backLinkUrl,
		backLinkForce,
		backLinkShowText,
		title,
		subtitle,
		f7Slot,
		computedClasses,
		el,
		innerClasses,
		hasTitleLargeSlots,
		largeTitle,
		hasTitleSlots,
		hasRightSlots,
		hasLeftSlots,
		liquid,
		onBackClick,
		$$restProps,
		importsSeek,
		sliding,
		hidden,
		noShadow,
		noHairline,
		innerClass,
		innerClassName,
		large,
		largeTransparent,
		transparent,
		titleLarge,
		hide,
		show,
		size,
		theme,
		routerPositionClass,
		largeCollapsed,
		routerNavbarRole,
		routerNavbarRoleDetailRoot,
		routerNavbarMasterStack,
		transparentVisible,
		addCenterTitleClass,
		addLeftTitleClass,
		isTransparentVisible,
		isTransparent,
		isLarge,
		slots,
		div2_binding,
		$$scope
	];
}

class Navbar extends SvelteComponent {
	constructor(options) {
		super();

		init(
			this,
			options,
			instance,
			create_fragment,
			safe_not_equal,
			{
				importsSeek: 19,
				classes: 0,
				backLink: 1,
				backLinkUrl: 2,
				backLinkForce: 3,
				backLinkShowText: 4,
				sliding: 20,
				title: 5,
				subtitle: 6,
				hidden: 21,
				noShadow: 22,
				noHairline: 23,
				innerClass: 24,
				innerClassName: 25,
				large: 26,
				largeTransparent: 27,
				transparent: 28,
				titleLarge: 29,
				f7Slot: 7,
				hide: 30,
				show: 31,
				size: 32
			},
			null,
			[-1, -1, -1]
		);
	}

	get hide() {
		return this.$$.ctx[30];
	}

	get show() {
		return this.$$.ctx[31];
	}

	get size() {
		return this.$$.ctx[32];
	}
}

export { Navbar };
