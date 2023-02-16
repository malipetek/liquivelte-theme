import { SvelteComponent, init, safe_not_equal, create_slot, assign, element, space, claim_element, children, detach, claim_space, attr, set_attributes, insert_hydration, append_hydration, update_slot_base, get_all_dirty_from_scope, get_slot_changes, get_spread_update, transition_in, transition_out, compute_rest_props, getContext, createEventDispatcher, onMount, onDestroy, exclude_internal_props, binding_callbacks } from './liquivelte-svelte-hs035d430e.liquivelte.js';
import { restProps, createEmitter, f7ready, app, classNames, modalStateClasses, colorClasses } from './framework7-liquivelte-hsa0091f48.liquivelte.js';

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/node_modules/framework7-liquivelte/components/popover.liquivelte generated by Svelte v3.50.0 */
const get_default_slot_changes = dirty => ({ popover: dirty[0] & /*f7Popover*/ 8 });
const get_default_slot_context = ctx => ({ popover: /*f7Popover*/ ctx[3] });

function create_fragment(ctx) {
	let div2;
	let div0;
	let t;
	let div1;
	let div2_class_value;
	let current;
	const default_slot_template = /*#slots*/ ctx[18].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[17], get_default_slot_context);

	let div2_levels = [
		{
			class: div2_class_value = "popover " + /*classes*/ ctx[0] + " " + /*computedClasses*/ ctx[1]
		},
		restProps(/*$$restProps*/ ctx[4])
	];

	let div2_data = {};

	for (let i = 0; i < div2_levels.length; i += 1) {
		div2_data = assign(div2_data, div2_levels[i]);
	}

	return {
		c() {
			div2 = element("div");
			div0 = element("div");
			t = space();
			div1 = element("div");
			if (default_slot) default_slot.c();
			this.h();
		},
		l(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			children(div0).forEach(detach);
			t = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			if (default_slot) default_slot.l(div1_nodes);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div0, "class", "popover-angle");
			attr(div1, "class", "popover-inner");
			set_attributes(div2, div2_data);
		},
		m(target, anchor) {
			insert_hydration(target, div2, anchor);
			append_hydration(div2, div0);
			append_hydration(div2, t);
			append_hydration(div2, div1);

			if (default_slot) {
				default_slot.m(div1, null);
			}

			/*div2_binding*/ ctx[19](div2);
			current = true;
		},
		p(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty[0] & /*$$scope, f7Popover*/ 131080)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[17],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[17])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[17], dirty, get_default_slot_changes),
						get_default_slot_context
					);
				}
			}

			set_attributes(div2, div2_data = get_spread_update(div2_levels, [
				(!current || dirty[0] & /*classes, computedClasses*/ 3 && div2_class_value !== (div2_class_value = "popover " + /*classes*/ ctx[0] + " " + /*computedClasses*/ ctx[1])) && { class: div2_class_value },
				dirty[0] & /*$$restProps*/ 16 && restProps(/*$$restProps*/ ctx[4])
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
			if (detaching) detach(div2);
			if (default_slot) default_slot.d(detaching);
			/*div2_binding*/ ctx[19](null);
		}
	};
}

function instance_1($$self, $$props, $$invalidate) {
	const omit_props_names = [
		"importsSeek","classes","opened","animate","targetEl","backdrop","backdropEl","closeByBackdropClick","closeByOutsideClick","closeOnEscape","containerEl","verticalPosition","instance"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	let { importsSeek = 'lower' } = $$props;
	getContext('svelteProps') || {};
	getContext('lec') || {};
	(() => window.cicR = $$props.resetCicR ? 1 : window.cicR + 1)();
	const emit = createEmitter(createEventDispatcher, $$props);
	let computedClasses = undefined;
	let { classes = '' } = $$props;
	let { opened = undefined } = $$props;
	let { animate = undefined } = $$props;
	let { targetEl = undefined } = $$props;
	let { backdrop = undefined } = $$props;
	let { backdropEl = undefined } = $$props;
	let { closeByBackdropClick = undefined } = $$props;
	let { closeByOutsideClick = undefined } = $$props;
	let { closeOnEscape = undefined } = $$props;
	let { containerEl = undefined } = $$props;
	let { verticalPosition = undefined } = $$props;
	let el;
	let f7Popover;
	const state = { isOpened: opened, isClosing: false };

	function instance() {
		return f7Popover;
	}

	function onOpen(instance) {
		Object.assign(state, { isOpened: true, isClosing: false });
		emit('popoverOpen', [instance]);
		$$invalidate(5, opened = true);
	}

	function onOpened(instance) {
		emit('popoverOpened', [instance]);
	}

	function onClose(instance) {
		Object.assign(state, { isOpened: false, isClosing: true });
		emit('popoverClose', [instance]);
	}

	function onClosed(instance) {
		Object.assign(state, { isClosing: false });
		emit('popoverClosed', [instance]);
		$$invalidate(5, opened = false);
	}

	let initialWatched = false;

	function watchOpened(openedPassed) {
		if (!initialWatched) {
			initialWatched = true;
			return;
		}

		if (!f7Popover) return;
		if (openedPassed) f7Popover.open(); else f7Popover.close();
	}

	onMount(() => {
		const params = {
			el,
			on: {
				open: onOpen,
				opened: onOpened,
				close: onClose,
				closed: onClosed
			}
		};

		if (targetEl) params.targetEl = targetEl;
		if (typeof animate !== 'undefined') params.animate = animate;
		if (typeof closeByBackdropClick !== 'undefined') params.closeByBackdropClick = closeByBackdropClick;
		if (typeof closeByOutsideClick !== 'undefined') params.closeByOutsideClick = closeByOutsideClick;
		if (typeof closeOnEscape !== 'undefined') params.closeOnEscape = closeOnEscape;
		if (typeof backdrop !== 'undefined') params.backdrop = backdrop;
		if (typeof backdropEl !== 'undefined') params.backdropEl = backdropEl;
		if (typeof containerEl !== 'undefined') params.containerEl = containerEl;
		if (typeof verticalPosition !== 'undefined') params.verticalPosition = verticalPosition;

		f7ready(() => {
			$$invalidate(3, f7Popover = app.f7.popover.create(params));

			if (opened) {
				f7Popover.open(targetEl, false);
			}
		});
	});

	onDestroy(() => {
		if (f7Popover) f7Popover.destroy();
		$$invalidate(3, f7Popover = null);
	});

	function div2_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			el = $$value;
			$$invalidate(2, el);
		});
	}

	$$self.$$set = $$new_props => {
		$$invalidate(32, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(4, $$restProps = compute_rest_props($$props, omit_props_names));
		if ('importsSeek' in $$new_props) $$invalidate(6, importsSeek = $$new_props.importsSeek);
		if ('classes' in $$new_props) $$invalidate(0, classes = $$new_props.classes);
		if ('opened' in $$new_props) $$invalidate(5, opened = $$new_props.opened);
		if ('animate' in $$new_props) $$invalidate(7, animate = $$new_props.animate);
		if ('targetEl' in $$new_props) $$invalidate(8, targetEl = $$new_props.targetEl);
		if ('backdrop' in $$new_props) $$invalidate(9, backdrop = $$new_props.backdrop);
		if ('backdropEl' in $$new_props) $$invalidate(10, backdropEl = $$new_props.backdropEl);
		if ('closeByBackdropClick' in $$new_props) $$invalidate(11, closeByBackdropClick = $$new_props.closeByBackdropClick);
		if ('closeByOutsideClick' in $$new_props) $$invalidate(12, closeByOutsideClick = $$new_props.closeByOutsideClick);
		if ('closeOnEscape' in $$new_props) $$invalidate(13, closeOnEscape = $$new_props.closeOnEscape);
		if ('containerEl' in $$new_props) $$invalidate(14, containerEl = $$new_props.containerEl);
		if ('verticalPosition' in $$new_props) $$invalidate(15, verticalPosition = $$new_props.verticalPosition);
		if ('$$scope' in $$new_props) $$invalidate(17, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		$$invalidate(1, computedClasses = classNames(modalStateClasses(state), colorClasses($$props)));

		if ($$self.$$.dirty[0] & /*opened*/ 32) {
			watchOpened(opened);
		}
	};

	$$props = exclude_internal_props($$props);

	return [
		classes,
		computedClasses,
		el,
		f7Popover,
		$$restProps,
		opened,
		importsSeek,
		animate,
		targetEl,
		backdrop,
		backdropEl,
		closeByBackdropClick,
		closeByOutsideClick,
		closeOnEscape,
		containerEl,
		verticalPosition,
		instance,
		$$scope,
		slots,
		div2_binding
	];
}

class Popover extends SvelteComponent {
	constructor(options) {
		super();

		init(
			this,
			options,
			instance_1,
			create_fragment,
			safe_not_equal,
			{
				importsSeek: 6,
				classes: 0,
				opened: 5,
				animate: 7,
				targetEl: 8,
				backdrop: 9,
				backdropEl: 10,
				closeByBackdropClick: 11,
				closeByOutsideClick: 12,
				closeOnEscape: 13,
				containerEl: 14,
				verticalPosition: 15,
				instance: 16
			},
			null,
			[-1, -1]
		);
	}

	get instance() {
		return this.$$.ctx[16];
	}
}

export { Popover };
