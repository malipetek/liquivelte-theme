import { SvelteComponent, init, safe_not_equal, create_slot, assign, element, claim_element, children, detach, set_attributes, insert_hydration, action_destroyer, update_slot_base, get_all_dirty_from_scope, get_slot_changes, get_spread_update, is_function, transition_in, transition_out, compute_rest_props, getContext, exclude_internal_props } from './liquivelte-svelte-hs75fa7249.liquivelte.js';
import { restProps, useTooltip, classNames, colorClasses } from './framework7-liquivelte-hs7cccafc5.liquivelte.js';

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/node_modules/framework7-liquivelte/components/badge.liquivelte generated by Svelte v3.50.0 */

function create_fragment(ctx) {
	let span;
	let span_class_value;
	let useTooltip_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[7].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[6], null);

	let span_levels = [
		{
			class: span_class_value = "badge " + /*classes*/ ctx[0] + " " + /*computedClasses*/ ctx[3]
		},
		restProps(/*$$restProps*/ ctx[4])
	];

	let span_data = {};

	for (let i = 0; i < span_levels.length; i += 1) {
		span_data = assign(span_data, span_levels[i]);
	}

	return {
		c() {
			span = element("span");
			if (default_slot) default_slot.c();
			this.h();
		},
		l(nodes) {
			span = claim_element(nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			if (default_slot) default_slot.l(span_nodes);
			span_nodes.forEach(detach);
			this.h();
		},
		h() {
			set_attributes(span, span_data);
		},
		m(target, anchor) {
			insert_hydration(target, span, anchor);

			if (default_slot) {
				default_slot.m(span, null);
			}

			current = true;

			if (!mounted) {
				dispose = action_destroyer(useTooltip_action = useTooltip.call(null, span, {
					tooltip: /*tooltip*/ ctx[1],
					tooltipTrigger: /*tooltipTrigger*/ ctx[2]
				}));

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 64)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[6],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[6])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[6], dirty, null),
						null
					);
				}
			}

			set_attributes(span, span_data = get_spread_update(span_levels, [
				(!current || dirty & /*classes*/ 1 && span_class_value !== (span_class_value = "badge " + /*classes*/ ctx[0] + " " + /*computedClasses*/ ctx[3])) && { class: span_class_value },
				dirty & /*$$restProps*/ 16 && restProps(/*$$restProps*/ ctx[4])
			]));

			if (useTooltip_action && is_function(useTooltip_action.update) && dirty & /*tooltip, tooltipTrigger*/ 6) useTooltip_action.update.call(null, {
				tooltip: /*tooltip*/ ctx[1],
				tooltipTrigger: /*tooltipTrigger*/ ctx[2]
			});
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
			if (detaching) detach(span);
			if (default_slot) default_slot.d(detaching);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	const omit_props_names = ["importsSeek","classes","tooltip","tooltipTrigger"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	let { importsSeek = 'lower' } = $$props;
	getContext('svelteProps') || {};
	getContext('lec') || {};
	(() => window.cicR = $$props.resetCicR ? 1 : window.cicR + 1)();
	let computedClasses = undefined;
	let { classes = '' } = $$props;
	let { tooltip = undefined } = $$props;
	let { tooltipTrigger = undefined } = $$props;

	$$self.$$set = $$new_props => {
		$$invalidate(12, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(4, $$restProps = compute_rest_props($$props, omit_props_names));
		if ('importsSeek' in $$new_props) $$invalidate(5, importsSeek = $$new_props.importsSeek);
		if ('classes' in $$new_props) $$invalidate(0, classes = $$new_props.classes);
		if ('tooltip' in $$new_props) $$invalidate(1, tooltip = $$new_props.tooltip);
		if ('tooltipTrigger' in $$new_props) $$invalidate(2, tooltipTrigger = $$new_props.tooltipTrigger);
		if ('$$scope' in $$new_props) $$invalidate(6, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		$$invalidate(0, classes = classNames(classes, colorClasses($$props)));
	};

	$$props = exclude_internal_props($$props);

	return [
		classes,
		tooltip,
		tooltipTrigger,
		computedClasses,
		$$restProps,
		importsSeek,
		$$scope,
		slots
	];
}

class Badge extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			importsSeek: 5,
			classes: 0,
			tooltip: 1,
			tooltipTrigger: 2
		});
	}
}

export { Badge };