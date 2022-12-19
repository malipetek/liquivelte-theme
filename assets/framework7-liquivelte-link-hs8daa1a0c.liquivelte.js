import { SvelteComponent, init, safe_not_equal, create_slot, assign, element, space, claim_element, children, claim_space, detach, set_attributes, insert_hydration, append_hydration, listen, action_destroyer, transition_in, group_outros, transition_out, check_outros, update_slot_base, get_all_dirty_from_scope, get_slot_changes, get_spread_update, is_function, run_all, compute_rest_props, compute_slots, createEventDispatcher, exclude_internal_props, create_component, claim_component, mount_component, destroy_component, text, claim_text, toggle_class, set_data, binding_callbacks } from './liquivelte-svelte-hs532e1aa9.liquivelte.js';
import { useTooltip, useRouteProps, createEmitter, getReactiveContext, useSmartSelect, extend, routerAttrs, isStringProp, restProps, actionsAttrs, classNames, colorClasses, routerClasses, actionsClasses, useIcon } from './framework7-liquivelte-hs5d6b599e.liquivelte.js';
import { Use_icon } from './framework7-liquivelte-use-icon-hs8daa1a0c.liquivelte.js';
import { Badge } from './framework7-liquivelte-badge-hs8daa1a0c.liquivelte.js';

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/node_modules/framework7-liquivelte/components/link.liquivelte generated by Svelte v3.50.0 */

function create_if_block_2(ctx) {
	let useicon;
	let current;

	useicon = new Use_icon({
			props: {
				icon: /*icon*/ ctx[9],
				lec: /*lec*/ ctx[0]
			}
		});

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
			if (dirty[0] & /*icon*/ 512) useicon_changes.icon = /*icon*/ ctx[9];
			if (dirty[0] & /*lec*/ 1) useicon_changes.lec = /*lec*/ ctx[0];
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

// (123:2) {#if text != undefined || badge != undefined }
function create_if_block(ctx) {
	let span;
	let t0;
	let t1;
	let current;
	let if_block = /*badge*/ ctx[2] != undefined && create_if_block_1(ctx);

	return {
		c() {
			span = element("span");
			t0 = text(/*text*/ ctx[1]);
			t1 = space();
			if (if_block) if_block.c();
			this.h();
		},
		l(nodes) {
			span = claim_element(nodes, "SPAN", {});
			var span_nodes = children(span);
			t0 = claim_text(span_nodes, /*text*/ ctx[1]);
			t1 = claim_space(span_nodes);
			if (if_block) if_block.l(span_nodes);
			span_nodes.forEach(detach);
			this.h();
		},
		h() {
			toggle_class(span, "tabbar-label", /*isTabbarLabel*/ ctx[7]);
		},
		m(target, anchor) {
			insert_hydration(target, span, anchor);
			append_hydration(span, t0);
			append_hydration(span, t1);
			if (if_block) if_block.m(span, null);
			current = true;
		},
		p(ctx, dirty) {
			if (!current || dirty[0] & /*text*/ 2) set_data(t0, /*text*/ ctx[1]);

			if (/*badge*/ ctx[2] != undefined) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty[0] & /*badge*/ 4) {
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

			if (!current || dirty[0] & /*isTabbarLabel*/ 128) {
				toggle_class(span, "tabbar-label", /*isTabbarLabel*/ ctx[7]);
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

// (126:6) {#if badge != undefined }
function create_if_block_1(ctx) {
	let badge_1;
	let current;

	badge_1 = new Badge({
			props: {
				color: /*badgeColor*/ ctx[3],
				lec: /*lec*/ ctx[0],
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
			if (dirty[0] & /*badgeColor*/ 8) badge_1_changes.color = /*badgeColor*/ ctx[3];
			if (dirty[0] & /*lec*/ 1) badge_1_changes.lec = /*lec*/ ctx[0];

			if (dirty[0] & /*$$scope, badge*/ 1073741828) {
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

// (126:31) <Badge  color="{ badgeColor }"     lec={lec} >
function create_default_slot(ctx) {
	let t;

	return {
		c() {
			t = text(/*badge*/ ctx[2]);
		},
		l(nodes) {
			t = claim_text(nodes, /*badge*/ ctx[2]);
		},
		m(target, anchor) {
			insert_hydration(target, t, anchor);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*badge*/ 4) set_data(t, /*badge*/ ctx[2]);
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
	let useTooltip_action;
	let useRouteProps_action;
	let current;
	let mounted;
	let dispose;
	let if_block0 = /*icon*/ ctx[9] && create_if_block_2(ctx);
	const default_slot_template = /*#slots*/ ctx[28].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[30], null);
	let if_block1 = (/*text*/ ctx[1] != undefined || /*badge*/ ctx[2] != undefined) && create_if_block(ctx);
	let a_levels = [{ class: /*classes*/ ctx[10] }, /*attrs*/ ctx[11]];
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
			a = claim_element(nodes, "A", { class: true });
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
			/*a_binding*/ ctx[29](a);
			current = true;

			if (!mounted) {
				dispose = [
					listen(a, "click", /*onClick*/ ctx[12]),
					action_destroyer(useTooltip_action = useTooltip.call(null, a, {
						tooltip: /*tooltip*/ ctx[4],
						tooltipTrigger: /*tooltipTrigger*/ ctx[5]
					})),
					action_destroyer(useRouteProps_action = useRouteProps.call(null, a, /*routeProps*/ ctx[6]))
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (/*icon*/ ctx[9]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty[0] & /*icon*/ 512) {
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
				if (default_slot.p && (!current || dirty[0] & /*$$scope*/ 1073741824)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[30],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[30])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[30], dirty, null),
						null
					);
				}
			}

			if (/*text*/ ctx[1] != undefined || /*badge*/ ctx[2] != undefined) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty[0] & /*text, badge*/ 6) {
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
				(!current || dirty[0] & /*classes*/ 1024) && { class: /*classes*/ ctx[10] },
				dirty[0] & /*attrs*/ 2048 && /*attrs*/ ctx[11]
			]));

			if (useTooltip_action && is_function(useTooltip_action.update) && dirty[0] & /*tooltip, tooltipTrigger*/ 48) useTooltip_action.update.call(null, {
				tooltip: /*tooltip*/ ctx[4],
				tooltipTrigger: /*tooltipTrigger*/ ctx[5]
			});

			if (useRouteProps_action && is_function(useRouteProps_action.update) && dirty[0] & /*routeProps*/ 64) useRouteProps_action.update.call(null, /*routeProps*/ ctx[6]);
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
			/*a_binding*/ ctx[29](null);
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let isTabbarLabel;
	let hrefComputed;
	let attrs;
	let hasDefaultSlots;
	let iconOnlyComputed;
	let classes;
	let icon;

	const omit_props_names = [
		"lec","class","noLinkClass","text","tabLink","tabLinkActive","tabbarLabel","iconOnly","badge","badgeColor","href","target","tooltip","tooltipTrigger","routeProps","smartSelect","smartSelectParams","smartSelectInstance"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	const $$slots = compute_slots(slots);
	let { lec } = $$props;
	const emit = createEmitter(createEventDispatcher, $$props);
	let { class: className = undefined } = $$props;
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
			$$invalidate(8, el);
		});
	}

	$$self.$$set = $$new_props => {
		$$invalidate(34, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(36, $$restProps = compute_rest_props($$props, omit_props_names));
		if ('lec' in $$new_props) $$invalidate(0, lec = $$new_props.lec);
		if ('class' in $$new_props) $$invalidate(13, className = $$new_props.class);
		if ('noLinkClass' in $$new_props) $$invalidate(14, noLinkClass = $$new_props.noLinkClass);
		if ('text' in $$new_props) $$invalidate(1, text = $$new_props.text);
		if ('tabLink' in $$new_props) $$invalidate(15, tabLink = $$new_props.tabLink);
		if ('tabLinkActive' in $$new_props) $$invalidate(16, tabLinkActive = $$new_props.tabLinkActive);
		if ('tabbarLabel' in $$new_props) $$invalidate(17, tabbarLabel = $$new_props.tabbarLabel);
		if ('iconOnly' in $$new_props) $$invalidate(18, iconOnly = $$new_props.iconOnly);
		if ('badge' in $$new_props) $$invalidate(2, badge = $$new_props.badge);
		if ('badgeColor' in $$new_props) $$invalidate(3, badgeColor = $$new_props.badgeColor);
		if ('href' in $$new_props) $$invalidate(19, href = $$new_props.href);
		if ('target' in $$new_props) $$invalidate(20, target = $$new_props.target);
		if ('tooltip' in $$new_props) $$invalidate(4, tooltip = $$new_props.tooltip);
		if ('tooltipTrigger' in $$new_props) $$invalidate(5, tooltipTrigger = $$new_props.tooltipTrigger);
		if ('routeProps' in $$new_props) $$invalidate(6, routeProps = $$new_props.routeProps);
		if ('smartSelect' in $$new_props) $$invalidate(21, smartSelect = $$new_props.smartSelect);
		if ('smartSelectParams' in $$new_props) $$invalidate(22, smartSelectParams = $$new_props.smartSelectParams);
		if ('$$scope' in $$new_props) $$invalidate(30, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*tabbarLabel, TabbarContext*/ 16908288) {
			$$invalidate(7, isTabbarLabel = tabbarLabel || TabbarContext.tabbarHasLabels);
		}

		if ($$self.$$.dirty[0] & /*href*/ 524288) {
			$$invalidate(27, hrefComputed = href === true ? '#' : href || undefined);
		}

		$$invalidate(11, attrs = extend(
			{
				href: hrefComputed,
				target,
				'data-tab': isStringProp(tabLink) && tabLink || undefined,
				...restProps($$restProps)
			},
			routerAttrs($$props),
			actionsAttrs($$props)
		));

		if ($$self.$$.dirty[0] & /*iconOnly, text, hasDefaultSlots*/ 67371010) {
			$$invalidate(25, iconOnlyComputed = iconOnly || !text && !hasDefaultSlots);
		}

		$$invalidate(10, classes = classNames(
			className,
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

		$$invalidate(9, icon = useIcon($$props));
	};

	$$invalidate(26, hasDefaultSlots = $$slots.default);
	$$props = exclude_internal_props($$props);

	return [
		lec,
		text,
		badge,
		badgeColor,
		tooltip,
		tooltipTrigger,
		routeProps,
		isTabbarLabel,
		el,
		icon,
		classes,
		attrs,
		onClick,
		className,
		noLinkClass,
		tabLink,
		tabLinkActive,
		tabbarLabel,
		iconOnly,
		href,
		target,
		smartSelect,
		smartSelectParams,
		smartSelectInstance,
		TabbarContext,
		iconOnlyComputed,
		hasDefaultSlots,
		hrefComputed,
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
				lec: 0,
				class: 13,
				noLinkClass: 14,
				text: 1,
				tabLink: 15,
				tabLinkActive: 16,
				tabbarLabel: 17,
				iconOnly: 18,
				badge: 2,
				badgeColor: 3,
				href: 19,
				target: 20,
				tooltip: 4,
				tooltipTrigger: 5,
				routeProps: 6,
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
