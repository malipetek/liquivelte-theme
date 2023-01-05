import { SvelteComponent, init, safe_not_equal, create_slot, assign, element, space, claim_element, children, claim_space, detach, set_attributes, insert_hydration, append_hydration, listen, action_destroyer, transition_in, group_outros, transition_out, check_outros, update_slot_base, get_all_dirty_from_scope, get_slot_changes, get_spread_update, is_function, run_all, compute_rest_props, getContext, createEventDispatcher, exclude_internal_props, create_component, claim_component, mount_component, destroy_component, text, claim_text, toggle_class, set_data, compute_slots, binding_callbacks } from './liquivelte-svelte-hs532e1aa9.liquivelte.js';
import { cachedLiquid } from './liquivelte-liquid-hs8daa1a0c.liquivelte.js';
import { useTooltip, useRouteProps, createEmitter, getReactiveContext, useSmartSelect, extend, routerAttrs, isStringProp, restProps, actionsAttrs, classNames, colorClasses, routerClasses, actionsClasses, useIcon } from './framework7-liquivelte-hsa0091f48.liquivelte.js';
import { Use_icon } from './framework7-liquivelte-use-icon-hs8daa1a0c.liquivelte.js';
import { Badge } from './framework7-liquivelte-badge-hs8daa1a0c.liquivelte.js';

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/node_modules/framework7-liquivelte/components/link.liquivelte generated by Svelte v3.50.0 */

function create_if_block_2(ctx) {
	let useicon;
	let current;
	useicon = new Use_icon({ props: { icon: /*icon*/ ctx[11] } });

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
			if (dirty[0] & /*icon*/ 2048) useicon_changes.icon = /*icon*/ ctx[11];
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

// (126:2) {#if text != undefined || badge != undefined }
function create_if_block(ctx) {
	let span;
	let t0_value = /*liquid*/ ctx[13].default(/*text*/ ctx[2], '') + "";
	let t0;
	let t1;
	let current;
	let if_block = /*badge*/ ctx[3] != undefined && create_if_block_1(ctx);

	return {
		c() {
			span = element("span");
			t0 = text(t0_value);
			t1 = space();
			if (if_block) if_block.c();
			this.h();
		},
		l(nodes) {
			span = claim_element(nodes, "SPAN", {});
			var span_nodes = children(span);
			t0 = claim_text(span_nodes, t0_value);
			t1 = claim_space(span_nodes);
			if (if_block) if_block.l(span_nodes);
			span_nodes.forEach(detach);
			this.h();
		},
		h() {
			toggle_class(span, "tabbar-label", /*isTabbarLabel*/ ctx[8]);
		},
		m(target, anchor) {
			insert_hydration(target, span, anchor);
			append_hydration(span, t0);
			append_hydration(span, t1);
			if (if_block) if_block.m(span, null);
			current = true;
		},
		p(ctx, dirty) {
			if ((!current || dirty[0] & /*text*/ 4) && t0_value !== (t0_value = /*liquid*/ ctx[13].default(/*text*/ ctx[2], '') + "")) set_data(t0, t0_value);

			if (/*badge*/ ctx[3] != undefined) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty[0] & /*badge*/ 8) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block_1(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(span, null);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}

			if (!current || dirty[0] & /*isTabbarLabel*/ 256) {
				toggle_class(span, "tabbar-label", /*isTabbarLabel*/ ctx[8]);
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
			if (detaching) detach(span);
			if (if_block) if_block.d();
		}
	};
}

// (129:6) {#if badge != undefined }
function create_if_block_1(ctx) {
	let badge_1;
	let current;

	badge_1 = new Badge({
			props: {
				color: /*badgeColor*/ ctx[4],
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(badge_1.$$.fragment);
		},
		l(nodes) {
			claim_component(badge_1.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(badge_1, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const badge_1_changes = {};
			if (dirty[0] & /*badgeColor*/ 16) badge_1_changes.color = /*badgeColor*/ ctx[4];

			if (dirty[0] & /*$$scope, badge*/ 536870920) {
				badge_1_changes.$$scope = { dirty, ctx };
			}

			badge_1.$set(badge_1_changes);
		},
		i(local) {
			if (current) return;
			transition_in(badge_1.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(badge_1.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(badge_1, detaching);
		}
	};
}

// (129:31) <Badge  color="{ badgeColor }" >
function create_default_slot(ctx) {
	let t_value = /*liquid*/ ctx[13].default(/*badge*/ ctx[3], '') + "";
	let t;

	return {
		c() {
			t = text(t_value);
		},
		l(nodes) {
			t = claim_text(nodes, t_value);
		},
		m(target, anchor) {
			insert_hydration(target, t, anchor);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*badge*/ 8 && t_value !== (t_value = /*liquid*/ ctx[13].default(/*badge*/ ctx[3], '') + "")) set_data(t, t_value);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

function create_fragment(ctx) {
	let a;
	let t0;
	let t1;
	let a_class_value;
	let useTooltip_action;
	let useRouteProps_action;
	let current;
	let mounted;
	let dispose;
	let if_block0 = /*icon*/ ctx[11] && create_if_block_2(ctx);
	const default_slot_template = /*#slots*/ ctx[27].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[29], null);
	let if_block1 = (/*text*/ ctx[2] != undefined || /*badge*/ ctx[3] != undefined) && create_if_block(ctx);

	let a_levels = [
		{
			class: a_class_value = "" + (/*classes*/ ctx[1] + " " + /*computedClasses*/ ctx[9])
		},
		{ href: /*href*/ ctx[0] },
		/*attrs*/ ctx[12]
	];

	let a_data = {};

	for (let i = 0; i < a_levels.length; i += 1) {
		a_data = assign(a_data, a_levels[i]);
	}

	return {
		c() {
			a = element("a");
			if (if_block0) if_block0.c();
			t0 = space();
			if (default_slot) default_slot.c();
			t1 = space();
			if (if_block1) if_block1.c();
			this.h();
		},
		l(nodes) {
			a = claim_element(nodes, "A", { class: true, href: true });
			var a_nodes = children(a);
			if (if_block0) if_block0.l(a_nodes);
			t0 = claim_space(a_nodes);
			if (default_slot) default_slot.l(a_nodes);
			t1 = claim_space(a_nodes);
			if (if_block1) if_block1.l(a_nodes);
			a_nodes.forEach(detach);
			this.h();
		},
		h() {
			set_attributes(a, a_data);
		},
		m(target, anchor) {
			insert_hydration(target, a, anchor);
			if (if_block0) if_block0.m(a, null);
			append_hydration(a, t0);

			if (default_slot) {
				default_slot.m(a, null);
			}

			append_hydration(a, t1);
			if (if_block1) if_block1.m(a, null);
			/*a_binding*/ ctx[28](a);
			current = true;

			if (!mounted) {
				dispose = [
					listen(a, "click", /*onClick*/ ctx[14]),
					action_destroyer(useTooltip_action = useTooltip.call(null, a, {
						tooltip: /*tooltip*/ ctx[5],
						tooltipTrigger: /*tooltipTrigger*/ ctx[6]
					})),
					action_destroyer(useRouteProps_action = useRouteProps.call(null, a, /*routeProps*/ ctx[7]))
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (/*icon*/ ctx[11]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty[0] & /*icon*/ 2048) {
						transition_in(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_2(ctx);
					if_block0.c();
					transition_in(if_block0, 1);
					if_block0.m(a, t0);
				}
			} else if (if_block0) {
				group_outros();

				transition_out(if_block0, 1, 1, () => {
					if_block0 = null;
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

			if (/*text*/ ctx[2] != undefined || /*badge*/ ctx[3] != undefined) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty[0] & /*text, badge*/ 12) {
						transition_in(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					transition_in(if_block1, 1);
					if_block1.m(a, null);
				}
			} else if (if_block1) {
				group_outros();

				transition_out(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				check_outros();
			}

			set_attributes(a, a_data = get_spread_update(a_levels, [
				(!current || dirty[0] & /*classes, computedClasses*/ 514 && a_class_value !== (a_class_value = "" + (/*classes*/ ctx[1] + " " + /*computedClasses*/ ctx[9]))) && { class: a_class_value },
				(!current || dirty[0] & /*href*/ 1) && { href: /*href*/ ctx[0] },
				dirty[0] & /*attrs*/ 4096 && /*attrs*/ ctx[12]
			]));

			if (useTooltip_action && is_function(useTooltip_action.update) && dirty[0] & /*tooltip, tooltipTrigger*/ 96) useTooltip_action.update.call(null, {
				tooltip: /*tooltip*/ ctx[5],
				tooltipTrigger: /*tooltipTrigger*/ ctx[6]
			});

			if (useRouteProps_action && is_function(useRouteProps_action.update) && dirty[0] & /*routeProps*/ 128) useRouteProps_action.update.call(null, /*routeProps*/ ctx[7]);
		},
		i(local) {
			if (current) return;
			transition_in(if_block0);
			transition_in(default_slot, local);
			transition_in(if_block1);
			current = true;
		},
		o(local) {
			transition_out(if_block0);
			transition_out(default_slot, local);
			transition_out(if_block1);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(a);
			if (if_block0) if_block0.d();
			if (default_slot) default_slot.d(detaching);
			if (if_block1) if_block1.d();
			/*a_binding*/ ctx[28](null);
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let isTabbarLabel;
	let attrs;
	let hasDefaultSlots;
	let iconOnlyComputed;
	let icon;

	const omit_props_names = [
		"classes","noLinkClass","text","tabLink","tabLinkActive","tabbarLabel","iconOnly","badge","badgeColor","href","target","tooltip","tooltipTrigger","routeProps","smartSelect","smartSelectParams","smartSelectInstance"
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
	let { noLinkClass = false } = $$props;
	let { text = undefined } = $$props;
	let { tabLink = undefined } = $$props;
	let { tabLinkActive = false } = $$props;
	let { tabbarLabel = false } = $$props;
	let { iconOnly = false } = $$props;
	let { badge = undefined } = $$props;
	let { badgeColor = undefined } = $$props;
	let { href = '#' } = $$props;
	let { target = undefined } = $$props;
	let { tooltip = undefined } = $$props;
	let { tooltipTrigger = undefined } = $$props;
	let { routeProps = undefined } = $$props;
	let { smartSelect = false } = $$props;
	let { smartSelectParams = undefined } = $$props;
	let el;
	let f7SmartSelect;

	function smartSelectInstance() {
		return f7SmartSelect;
	}

	let TabbarContext = getReactiveContext('TabbarContext', newValue => {
		$$invalidate(24, TabbarContext = newValue);
	}) || {};

	function onClick() {
		emit('click');
	}

	useSmartSelect(
		{ smartSelect, smartSelectParams },
		instance => {
			f7SmartSelect = instance;
		},
		() => el
	);

	function a_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			el = $$value;
			$$invalidate(10, el);
		});
	}

	$$self.$$set = $$new_props => {
		$$invalidate(34, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(36, $$restProps = compute_rest_props($$props, omit_props_names));
		if ('classes' in $$new_props) $$invalidate(1, classes = $$new_props.classes);
		if ('noLinkClass' in $$new_props) $$invalidate(15, noLinkClass = $$new_props.noLinkClass);
		if ('text' in $$new_props) $$invalidate(2, text = $$new_props.text);
		if ('tabLink' in $$new_props) $$invalidate(16, tabLink = $$new_props.tabLink);
		if ('tabLinkActive' in $$new_props) $$invalidate(17, tabLinkActive = $$new_props.tabLinkActive);
		if ('tabbarLabel' in $$new_props) $$invalidate(18, tabbarLabel = $$new_props.tabbarLabel);
		if ('iconOnly' in $$new_props) $$invalidate(19, iconOnly = $$new_props.iconOnly);
		if ('badge' in $$new_props) $$invalidate(3, badge = $$new_props.badge);
		if ('badgeColor' in $$new_props) $$invalidate(4, badgeColor = $$new_props.badgeColor);
		if ('href' in $$new_props) $$invalidate(0, href = $$new_props.href);
		if ('target' in $$new_props) $$invalidate(20, target = $$new_props.target);
		if ('tooltip' in $$new_props) $$invalidate(5, tooltip = $$new_props.tooltip);
		if ('tooltipTrigger' in $$new_props) $$invalidate(6, tooltipTrigger = $$new_props.tooltipTrigger);
		if ('routeProps' in $$new_props) $$invalidate(7, routeProps = $$new_props.routeProps);
		if ('smartSelect' in $$new_props) $$invalidate(21, smartSelect = $$new_props.smartSelect);
		if ('smartSelectParams' in $$new_props) $$invalidate(22, smartSelectParams = $$new_props.smartSelectParams);
		if ('$$scope' in $$new_props) $$invalidate(29, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*tabbarLabel, TabbarContext*/ 17039360) {
			$$invalidate(8, isTabbarLabel = tabbarLabel || TabbarContext.tabbarHasLabels);
		}

		if ($$self.$$.dirty[0] & /*href*/ 1) {
			$$invalidate(0, href = href === true ? '#' : href || undefined);
		}

		$$invalidate(12, attrs = extend(
			{
				target,
				'data-tab': isStringProp(tabLink) && tabLink || undefined,
				...restProps($$restProps)
			},
			routerAttrs($$props),
			actionsAttrs($$props)
		));

		if ($$self.$$.dirty[0] & /*iconOnly, text, hasDefaultSlots*/ 67633156) {
			$$invalidate(25, iconOnlyComputed = iconOnly || !text && !hasDefaultSlots);
		}

		$$invalidate(9, computedClasses = classNames(
			classes,
			{
				link: !(noLinkClass || isTabbarLabel),
				'icon-only': iconOnlyComputed,
				'tab-link': tabLink || tabLink === '',
				'tab-link-active': tabLinkActive,
				'smart-select': smartSelect
			},
			colorClasses($$props),
			routerClasses($$props),
			actionsClasses($$props)
		));

		$$invalidate(11, icon = useIcon($$props));
	};

	$$invalidate(26, hasDefaultSlots = $$slots.default);
	$$props = exclude_internal_props($$props);

	return [
		href,
		classes,
		text,
		badge,
		badgeColor,
		tooltip,
		tooltipTrigger,
		routeProps,
		isTabbarLabel,
		computedClasses,
		el,
		icon,
		attrs,
		liquid,
		onClick,
		noLinkClass,
		tabLink,
		tabLinkActive,
		tabbarLabel,
		iconOnly,
		target,
		smartSelect,
		smartSelectParams,
		smartSelectInstance,
		TabbarContext,
		iconOnlyComputed,
		hasDefaultSlots,
		slots,
		a_binding,
		$$scope
	];
}

class Link extends SvelteComponent {
	constructor(options) {
		super();

		init(
			this,
			options,
			instance,
			create_fragment,
			safe_not_equal,
			{
				classes: 1,
				noLinkClass: 15,
				text: 2,
				tabLink: 16,
				tabLinkActive: 17,
				tabbarLabel: 18,
				iconOnly: 19,
				badge: 3,
				badgeColor: 4,
				href: 0,
				target: 20,
				tooltip: 5,
				tooltipTrigger: 6,
				routeProps: 7,
				smartSelect: 21,
				smartSelectParams: 22,
				smartSelectInstance: 23
			},
			null,
			[-1, -1]
		);
	}

	get smartSelectInstance() {
		return this.$$.ctx[23];
	}
}

export { Link };
