import { SvelteComponent, init, safe_not_equal, create_slot, assign, element, claim_element, children, detach, set_attributes, insert_hydration, update_slot_base, get_all_dirty_from_scope, get_slot_changes, get_spread_update, transition_in, transition_out, compute_rest_props, exclude_internal_props, createEventDispatcher, binding_callbacks } from './liquivelte-svelte-hs532e1aa9.liquivelte.js';
import { restProps, createEmitter, useTab, classNames, colorClasses } from './framework7-liquivelte-hs5d6b599e.liquivelte.js';

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/node_modules/framework7-liquivelte/components/block.liquivelte generated by Svelte v3.50.0 */

function create_fragment(ctx) {
	let div;
	let div_class_value;
	let current;
	const default_slot_template = /*#slots*/ ctx[22].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[21], null);

	let div_levels = [
		{
			class: div_class_value = "block " + /*classes*/ ctx[0] + " " + /*computedClasses*/ ctx[1]
		},
		restProps(/*$$restProps*/ ctx[3])
	];

	let div_data = {};

	for (let i = 0; i < div_levels.length; i += 1) {
		div_data = assign(div_data, div_levels[i]);
	}

	return {
		c() {
			div = element("div");
			if (default_slot) default_slot.c();
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			if (default_slot) default_slot.l(div_nodes);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			set_attributes(div, div_data);
		},
		m(target, anchor) {
			insert_hydration(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			/*div_binding*/ ctx[23](div);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 2097152)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[21],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[21])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[21], dirty, null),
						null
					);
				}
			}

			set_attributes(div, div_data = get_spread_update(div_levels, [
				(!current || dirty & /*classes, computedClasses*/ 3 && div_class_value !== (div_class_value = "block " + /*classes*/ ctx[0] + " " + /*computedClasses*/ ctx[1])) && { class: div_class_value },
				dirty & /*$$restProps*/ 8 && restProps(/*$$restProps*/ ctx[3])
			]));
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
			if (detaching) detach(div);
			if (default_slot) default_slot.d(detaching);
			/*div_binding*/ ctx[23](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	const omit_props_names = [
		"lec","inset","xsmallInset","smallInset","mediumInset","largeInset","xlargeInset","strong","tabs","tab","tabActive","accordionList","accordionOpposite","noHairlines","noHairlinesMd","noHairlinesIos","noHairlinesAurora","classes"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	let { lec } = $$props;
	const emit = createEmitter(createEventDispatcher, $$props);
	let { inset = false } = $$props;
	let { xsmallInset = false } = $$props;
	let { smallInset = false } = $$props;
	let { mediumInset = false } = $$props;
	let { largeInset = false } = $$props;
	let { xlargeInset = false } = $$props;
	let { strong = false } = $$props;
	let { tabs = false } = $$props;
	let { tab = false } = $$props;
	let { tabActive = false } = $$props;
	let { accordionList = false } = $$props;
	let { accordionOpposite = false } = $$props;
	let { noHairlines = false } = $$props;
	let { noHairlinesMd = false } = $$props;
	let { noHairlinesIos = false } = $$props;
	let { noHairlinesAurora = false } = $$props;
	let computedClasses = undefined;
	let { classes } = $$props;
	let el;
	useTab(() => el, emit);

	function div_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			el = $$value;
			$$invalidate(2, el);
		});
	}

	$$self.$$set = $$new_props => {
		$$invalidate(26, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
		if ('lec' in $$new_props) $$invalidate(4, lec = $$new_props.lec);
		if ('inset' in $$new_props) $$invalidate(5, inset = $$new_props.inset);
		if ('xsmallInset' in $$new_props) $$invalidate(6, xsmallInset = $$new_props.xsmallInset);
		if ('smallInset' in $$new_props) $$invalidate(7, smallInset = $$new_props.smallInset);
		if ('mediumInset' in $$new_props) $$invalidate(8, mediumInset = $$new_props.mediumInset);
		if ('largeInset' in $$new_props) $$invalidate(9, largeInset = $$new_props.largeInset);
		if ('xlargeInset' in $$new_props) $$invalidate(10, xlargeInset = $$new_props.xlargeInset);
		if ('strong' in $$new_props) $$invalidate(11, strong = $$new_props.strong);
		if ('tabs' in $$new_props) $$invalidate(12, tabs = $$new_props.tabs);
		if ('tab' in $$new_props) $$invalidate(13, tab = $$new_props.tab);
		if ('tabActive' in $$new_props) $$invalidate(14, tabActive = $$new_props.tabActive);
		if ('accordionList' in $$new_props) $$invalidate(15, accordionList = $$new_props.accordionList);
		if ('accordionOpposite' in $$new_props) $$invalidate(16, accordionOpposite = $$new_props.accordionOpposite);
		if ('noHairlines' in $$new_props) $$invalidate(17, noHairlines = $$new_props.noHairlines);
		if ('noHairlinesMd' in $$new_props) $$invalidate(18, noHairlinesMd = $$new_props.noHairlinesMd);
		if ('noHairlinesIos' in $$new_props) $$invalidate(19, noHairlinesIos = $$new_props.noHairlinesIos);
		if ('noHairlinesAurora' in $$new_props) $$invalidate(20, noHairlinesAurora = $$new_props.noHairlinesAurora);
		if ('classes' in $$new_props) $$invalidate(0, classes = $$new_props.classes);
		if ('$$scope' in $$new_props) $$invalidate(21, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		$$invalidate(1, computedClasses = classNames(
			classes,
			{
				inset,
				'xsmall-inset': xsmallInset,
				'small-inset': smallInset,
				'medium-inset': mediumInset,
				'large-inset': largeInset,
				'xlarge-inset': xlargeInset,
				'block-strong': strong,
				'accordion-list': accordionList,
				'accordion-opposite': accordionOpposite,
				tabs,
				tab,
				'tab-active': tabActive,
				'no-hairlines': noHairlines,
				'no-hairlines-md': noHairlinesMd,
				'no-hairlines-ios': noHairlinesIos,
				'no-hairlines-aurora': noHairlinesAurora
			},
			colorClasses($$props)
		));
	};

	$$props = exclude_internal_props($$props);

	return [
		classes,
		computedClasses,
		el,
		$$restProps,
		lec,
		inset,
		xsmallInset,
		smallInset,
		mediumInset,
		largeInset,
		xlargeInset,
		strong,
		tabs,
		tab,
		tabActive,
		accordionList,
		accordionOpposite,
		noHairlines,
		noHairlinesMd,
		noHairlinesIos,
		noHairlinesAurora,
		$$scope,
		slots,
		div_binding
	];
}

class Block extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			lec: 4,
			inset: 5,
			xsmallInset: 6,
			smallInset: 7,
			mediumInset: 8,
			largeInset: 9,
			xlargeInset: 10,
			strong: 11,
			tabs: 12,
			tab: 13,
			tabActive: 14,
			accordionList: 15,
			accordionOpposite: 16,
			noHairlines: 17,
			noHairlinesMd: 18,
			noHairlinesIos: 19,
			noHairlinesAurora: 20,
			classes: 0
		});
	}
}

export { Block };
