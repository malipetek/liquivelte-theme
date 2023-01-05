import { SvelteComponent, init, safe_not_equal, assign, element, space, claim_element, children, claim_space, detach, set_attributes, insert_hydration, append_hydration, listen, action_destroyer, transition_in, group_outros, transition_out, check_outros, get_spread_update, is_function, run_all, compute_rest_props, compute_slots, getContext, createEventDispatcher, exclude_internal_props, create_slot, text, claim_text, attr, set_data, update_slot_base, get_all_dirty_from_scope, get_slot_changes, create_component, claim_component, mount_component, destroy_component, noop, binding_callbacks } from './liquivelte-svelte-hs532e1aa9.liquivelte.js';
import { cachedLiquid } from './liquivelte-liquid-hs8daa1a0c.liquivelte.js';
import { restProps, useTooltip, createEmitter, classNames, colorClasses, useIcon } from './framework7-liquivelte-hsa0091f48.liquivelte.js';
import { Use_icon } from './framework7-liquivelte-use-icon-hs8daa1a0c.liquivelte.js';

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/node_modules/framework7-liquivelte/components/chip.liquivelte generated by Svelte v3.50.0 */
const get_text_slot_changes = dirty => ({});
const get_text_slot_context = ctx => ({});
const get_media_slot_changes = dirty => ({});
const get_media_slot_context = ctx => ({});

// (76:2) {#if media || hasMediaSlots || icon }
function create_if_block_2(ctx) {
	let div;
	let t0;
	let t1_value = /*liquid*/ ctx[13].default(/*media*/ ctx[1], '') + "";
	let t1;
	let t2;
	let div_class_value;
	let current;
	let if_block = /*icon*/ ctx[8] && create_if_block_3(ctx);
	const media_slot_template = /*#slots*/ ctx[21].media;
	const media_slot = create_slot(media_slot_template, ctx, /*$$scope*/ ctx[20], get_media_slot_context);

	return {
		c() {
			div = element("div");
			if (if_block) if_block.c();
			t0 = space();
			t1 = text(t1_value);
			t2 = space();
			if (media_slot) media_slot.c();
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			if (if_block) if_block.l(div_nodes);
			t0 = claim_space(div_nodes);
			t1 = claim_text(div_nodes, t1_value);
			t2 = claim_space(div_nodes);
			if (media_slot) media_slot.l(div_nodes);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div, "class", div_class_value = "chip-media " + /*mediaClasses*/ ctx[12]);
		},
		m(target, anchor) {
			insert_hydration(target, div, anchor);
			if (if_block) if_block.m(div, null);
			append_hydration(div, t0);
			append_hydration(div, t1);
			append_hydration(div, t2);

			if (media_slot) {
				media_slot.m(div, null);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (/*icon*/ ctx[8]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*icon*/ 256) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block_3(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(div, t0);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}

			if ((!current || dirty & /*media*/ 2) && t1_value !== (t1_value = /*liquid*/ ctx[13].default(/*media*/ ctx[1], '') + "")) set_data(t1, t1_value);

			if (media_slot) {
				if (media_slot.p && (!current || dirty & /*$$scope*/ 1048576)) {
					update_slot_base(
						media_slot,
						media_slot_template,
						ctx,
						/*$$scope*/ ctx[20],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[20])
						: get_slot_changes(media_slot_template, /*$$scope*/ ctx[20], dirty, get_media_slot_changes),
						get_media_slot_context
					);
				}
			}

			if (!current || dirty & /*mediaClasses*/ 4096 && div_class_value !== (div_class_value = "chip-media " + /*mediaClasses*/ ctx[12])) {
				attr(div, "class", div_class_value);
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block);
			transition_in(media_slot, local);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			transition_out(media_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (if_block) if_block.d();
			if (media_slot) media_slot.d(detaching);
		}
	};
}

// (78:6) {#if icon }
function create_if_block_3(ctx) {
	let useicon;
	let current;
	useicon = new Use_icon({ props: { icon: /*icon*/ ctx[8] } });

	return {
		c() {
			create_component(useicon.$$.fragment);
		},
		l(nodes) {
			claim_component(useicon.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(useicon, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const useicon_changes = {};
			if (dirty & /*icon*/ 256) useicon_changes.icon = /*icon*/ ctx[8];
			useicon.$set(useicon_changes);
		},
		i(local) {
			if (current) return;
			transition_in(useicon.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(useicon.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(useicon, detaching);
		}
	};
}

// (85:2) {#if text || hasTextSlots || hasDefaultSlots }
function create_if_block_1(ctx) {
	let div;
	let t0_value = /*liquid*/ ctx[13].default(/*text*/ ctx[2], '') + "";
	let t0;
	let t1;
	let t2;
	let current;
	const text_slot_template = /*#slots*/ ctx[21].text;
	const text_slot = create_slot(text_slot_template, ctx, /*$$scope*/ ctx[20], get_text_slot_context);
	const default_slot_template = /*#slots*/ ctx[21].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[20], null);

	return {
		c() {
			div = element("div");
			t0 = text(t0_value);
			t1 = space();
			if (text_slot) text_slot.c();
			t2 = space();
			if (default_slot) default_slot.c();
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			t0 = claim_text(div_nodes, t0_value);
			t1 = claim_space(div_nodes);
			if (text_slot) text_slot.l(div_nodes);
			t2 = claim_space(div_nodes);
			if (default_slot) default_slot.l(div_nodes);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div, "class", "chip-label");
		},
		m(target, anchor) {
			insert_hydration(target, div, anchor);
			append_hydration(div, t0);
			append_hydration(div, t1);

			if (text_slot) {
				text_slot.m(div, null);
			}

			append_hydration(div, t2);

			if (default_slot) {
				default_slot.m(div, null);
			}

			current = true;
		},
		p(ctx, dirty) {
			if ((!current || dirty & /*text*/ 4) && t0_value !== (t0_value = /*liquid*/ ctx[13].default(/*text*/ ctx[2], '') + "")) set_data(t0, t0_value);

			if (text_slot) {
				if (text_slot.p && (!current || dirty & /*$$scope*/ 1048576)) {
					update_slot_base(
						text_slot,
						text_slot_template,
						ctx,
						/*$$scope*/ ctx[20],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[20])
						: get_slot_changes(text_slot_template, /*$$scope*/ ctx[20], dirty, get_text_slot_changes),
						get_text_slot_context
					);
				}
			}

			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 1048576)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[20],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[20])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[20], dirty, null),
						null
					);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(text_slot, local);
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(text_slot, local);
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (text_slot) text_slot.d(detaching);
			if (default_slot) default_slot.d(detaching);
		}
	};
}

// (92:2) {#if deleteable }
function create_if_block(ctx) {
	let a;
	let mounted;
	let dispose;

	return {
		c() {
			a = element("a");
			this.h();
		},
		l(nodes) {
			a = claim_element(nodes, "A", { class: true });
			children(a).forEach(detach);
			this.h();
		},
		h() {
			attr(a, "class", "chip-delete");
		},
		m(target, anchor) {
			insert_hydration(target, a, anchor);

			if (!mounted) {
				dispose = listen(a, "click", /*onDeleteClick*/ ctx[15]);
				mounted = true;
			}
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(a);
			mounted = false;
			dispose();
		}
	};
}

function create_fragment(ctx) {
	let div;
	let t0;
	let t1;
	let div_class_value;
	let useTooltip_action;
	let current;
	let mounted;
	let dispose;
	let if_block0 = (/*media*/ ctx[1] || /*hasMediaSlots*/ ctx[11] || /*icon*/ ctx[8]) && create_if_block_2(ctx);
	let if_block1 = (/*text*/ ctx[2] || /*hasTextSlots*/ ctx[10] || /*hasDefaultSlots*/ ctx[9]) && create_if_block_1(ctx);
	let if_block2 = /*deleteable*/ ctx[3] && create_if_block(ctx);

	let div_levels = [
		{
			class: div_class_value = "chip " + /*classes*/ ctx[0] + " " + /*computedClasses*/ ctx[6]
		},
		restProps(/*$$restProps*/ ctx[16])
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
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			if (if_block0) if_block0.l(div_nodes);
			t0 = claim_space(div_nodes);
			if (if_block1) if_block1.l(div_nodes);
			t1 = claim_space(div_nodes);
			if (if_block2) if_block2.l(div_nodes);
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
			/*div_binding*/ ctx[22](div);
			current = true;

			if (!mounted) {
				dispose = [
					listen(div, "click", /*onClick*/ ctx[14]),
					action_destroyer(useTooltip_action = useTooltip.call(null, div, {
						tooltip: /*tooltip*/ ctx[4],
						tooltipTrigger: /*tooltipTrigger*/ ctx[5]
					}))
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (/*media*/ ctx[1] || /*hasMediaSlots*/ ctx[11] || /*icon*/ ctx[8]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty & /*media, hasMediaSlots, icon*/ 2306) {
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

			if (/*text*/ ctx[2] || /*hasTextSlots*/ ctx[10] || /*hasDefaultSlots*/ ctx[9]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty & /*text, hasTextSlots, hasDefaultSlots*/ 1540) {
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

			if (/*deleteable*/ ctx[3]) {
				if (if_block2) {
					if_block2.p(ctx, dirty);
				} else {
					if_block2 = create_if_block(ctx);
					if_block2.c();
					if_block2.m(div, null);
				}
			} else if (if_block2) {
				if_block2.d(1);
				if_block2 = null;
			}

			set_attributes(div, div_data = get_spread_update(div_levels, [
				(!current || dirty & /*classes, computedClasses*/ 65 && div_class_value !== (div_class_value = "chip " + /*classes*/ ctx[0] + " " + /*computedClasses*/ ctx[6])) && { class: div_class_value },
				dirty & /*$$restProps*/ 65536 && restProps(/*$$restProps*/ ctx[16])
			]));

			if (useTooltip_action && is_function(useTooltip_action.update) && dirty & /*tooltip, tooltipTrigger*/ 48) useTooltip_action.update.call(null, {
				tooltip: /*tooltip*/ ctx[4],
				tooltipTrigger: /*tooltipTrigger*/ ctx[5]
			});
		},
		i(local) {
			if (current) return;
			transition_in(if_block0);
			transition_in(if_block1);
			current = true;
		},
		o(local) {
			transition_out(if_block0);
			transition_out(if_block1);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			if (if_block2) if_block2.d();
			/*div_binding*/ ctx[22](null);
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let mediaClasses;
	let hasMediaSlots;
	let hasTextSlots;
	let hasDefaultSlots;
	let icon;

	const omit_props_names = [
		"classes","media","text","deleteable","mediaBgColor","mediaTextColor","outline","tooltip","tooltipTrigger"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	const $$slots = compute_slots(slots);
	getContext('svelteProps') || {};
	let lec = getContext('lec') || {};
	const liquid = cachedLiquid(lec);
	const emit = createEmitter(createEventDispatcher, $$props);
	let computedClasses = undefined;
	let { classes = '' } = $$props;
	let { media = undefined } = $$props;
	let { text = undefined } = $$props;
	let { deleteable = undefined } = $$props;
	let { mediaBgColor = undefined } = $$props;
	let { mediaTextColor = undefined } = $$props;
	let { outline = undefined } = $$props;
	let { tooltip = undefined } = $$props;
	let { tooltipTrigger = undefined } = $$props;
	let el;

	function onClick(e) {
		emit('click', [e]);
	}

	function onDeleteClick(e) {
		emit('delete', [e]);
	}

	function div_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			el = $$value;
			$$invalidate(7, el);
		});
	}

	$$self.$$set = $$new_props => {
		$$invalidate(26, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(16, $$restProps = compute_rest_props($$props, omit_props_names));
		if ('classes' in $$new_props) $$invalidate(0, classes = $$new_props.classes);
		if ('media' in $$new_props) $$invalidate(1, media = $$new_props.media);
		if ('text' in $$new_props) $$invalidate(2, text = $$new_props.text);
		if ('deleteable' in $$new_props) $$invalidate(3, deleteable = $$new_props.deleteable);
		if ('mediaBgColor' in $$new_props) $$invalidate(17, mediaBgColor = $$new_props.mediaBgColor);
		if ('mediaTextColor' in $$new_props) $$invalidate(18, mediaTextColor = $$new_props.mediaTextColor);
		if ('outline' in $$new_props) $$invalidate(19, outline = $$new_props.outline);
		if ('tooltip' in $$new_props) $$invalidate(4, tooltip = $$new_props.tooltip);
		if ('tooltipTrigger' in $$new_props) $$invalidate(5, tooltipTrigger = $$new_props.tooltipTrigger);
		if ('$$scope' in $$new_props) $$invalidate(20, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		$$invalidate(6, computedClasses = classNames(classes, { 'chip-outline': outline }, colorClasses($$props)));

		if ($$self.$$.dirty & /*mediaTextColor, mediaBgColor*/ 393216) {
			$$invalidate(12, mediaClasses = classNames(mediaTextColor && `text-color-${mediaTextColor}`, mediaBgColor && `bg-color-${mediaBgColor}`));
		}

		$$invalidate(8, icon = useIcon($$props));
	};

	$$invalidate(11, hasMediaSlots = $$slots.media);

	// eslint-disable-next-line
	$$invalidate(10, hasTextSlots = $$slots.text);

	// eslint-disable-next-line
	$$invalidate(9, hasDefaultSlots = $$slots.default);

	$$props = exclude_internal_props($$props);

	return [
		classes,
		media,
		text,
		deleteable,
		tooltip,
		tooltipTrigger,
		computedClasses,
		el,
		icon,
		hasDefaultSlots,
		hasTextSlots,
		hasMediaSlots,
		mediaClasses,
		liquid,
		onClick,
		onDeleteClick,
		$$restProps,
		mediaBgColor,
		mediaTextColor,
		outline,
		$$scope,
		slots,
		div_binding
	];
}

class Chip extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			classes: 0,
			media: 1,
			text: 2,
			deleteable: 3,
			mediaBgColor: 17,
			mediaTextColor: 18,
			outline: 19,
			tooltip: 4,
			tooltipTrigger: 5
		});
	}
}

export { Chip };
