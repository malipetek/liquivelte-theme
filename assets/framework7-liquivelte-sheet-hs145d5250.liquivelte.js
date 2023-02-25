import { SvelteComponent, init, safe_not_equal, create_slot, assign, element, space, claim_element, children, claim_space, detach, attr, set_attributes, insert_hydration, append_hydration, update_slot_base, get_all_dirty_from_scope, get_slot_changes, get_spread_update, transition_in, transition_out, compute_rest_props, getContext, createEventDispatcher, onMount, onDestroy, exclude_internal_props, binding_callbacks } from './liquivelte-svelte-hs860fcb0f.liquivelte.js';
import { restProps, createEmitter, f7ready, app, classNames, modalStateClasses, colorClasses } from './framework7-liquivelte-hsbc78d147.liquivelte.js';

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/node_modules/framework7-liquivelte/components/sheet.liquivelte generated by Svelte v3.50.0 */
const get_static_slot_changes = dirty => ({ sheet: dirty[0] & /*f7Sheet*/ 8 });
const get_static_slot_context = ctx => ({ sheet: /*f7Sheet*/ ctx[3] });
const get_default_slot_changes = dirty => ({ sheet: dirty[0] & /*f7Sheet*/ 8 });
const get_default_slot_context = ctx => ({ sheet: /*f7Sheet*/ ctx[3] });
const get_fixed_slot_changes = dirty => ({ sheet: dirty[0] & /*f7Sheet*/ 8 });
const get_fixed_slot_context = ctx => ({ sheet: /*f7Sheet*/ ctx[3] });

function create_fragment(ctx) {
	let div1;
	let t0;
	let div0;
	let t1;
	let current;
	const fixed_slot_template = /*#slots*/ ctx[26].fixed;
	const fixed_slot = create_slot(fixed_slot_template, ctx, /*$$scope*/ ctx[25], get_fixed_slot_context);
	const default_slot_template = /*#slots*/ ctx[26].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[25], get_default_slot_context);
	const static_slot_template = /*#slots*/ ctx[26].static;
	const static_slot = create_slot(static_slot_template, ctx, /*$$scope*/ ctx[25], get_static_slot_context);
	let div1_levels = [{ class: /*computedClasses*/ ctx[0] }, restProps(/*$$restProps*/ ctx[4])];
	let div1_data = {};

	for (let i = 0; i < div1_levels.length; i += 1) {
		div1_data = assign(div1_data, div1_levels[i]);
	}

	return {
		c() {
			div1 = element("div");
			if (fixed_slot) fixed_slot.c();
			t0 = space();
			div0 = element("div");
			if (default_slot) default_slot.c();
			t1 = space();
			if (static_slot) static_slot.c();
			this.h();
		},
		l(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			if (fixed_slot) fixed_slot.l(div1_nodes);
			t0 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			if (default_slot) default_slot.l(div0_nodes);
			t1 = claim_space(div0_nodes);
			if (static_slot) static_slot.l(div0_nodes);
			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div0, "class", "sheet-modal-inner");
			set_attributes(div1, div1_data);
		},
		m(target, anchor) {
			insert_hydration(target, div1, anchor);

			if (fixed_slot) {
				fixed_slot.m(div1, null);
			}

			append_hydration(div1, t0);
			append_hydration(div1, div0);

			if (default_slot) {
				default_slot.m(div0, null);
			}

			append_hydration(div0, t1);

			if (static_slot) {
				static_slot.m(div0, null);
			}

			/*div0_binding*/ ctx[27](div0);
			/*div1_binding*/ ctx[28](div1);
			current = true;
		},
		p(ctx, dirty) {
			if (fixed_slot) {
				if (fixed_slot.p && (!current || dirty[0] & /*$$scope, f7Sheet*/ 33554440)) {
					update_slot_base(
						fixed_slot,
						fixed_slot_template,
						ctx,
						/*$$scope*/ ctx[25],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[25])
						: get_slot_changes(fixed_slot_template, /*$$scope*/ ctx[25], dirty, get_fixed_slot_changes),
						get_fixed_slot_context
					);
				}
			}

			if (default_slot) {
				if (default_slot.p && (!current || dirty[0] & /*$$scope, f7Sheet*/ 33554440)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[25],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[25])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[25], dirty, get_default_slot_changes),
						get_default_slot_context
					);
				}
			}

			if (static_slot) {
				if (static_slot.p && (!current || dirty[0] & /*$$scope, f7Sheet*/ 33554440)) {
					update_slot_base(
						static_slot,
						static_slot_template,
						ctx,
						/*$$scope*/ ctx[25],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[25])
						: get_slot_changes(static_slot_template, /*$$scope*/ ctx[25], dirty, get_static_slot_changes),
						get_static_slot_context
					);
				}
			}

			set_attributes(div1, div1_data = get_spread_update(div1_levels, [
				(!current || dirty[0] & /*computedClasses*/ 1) && { class: /*computedClasses*/ ctx[0] },
				dirty[0] & /*$$restProps*/ 16 && restProps(/*$$restProps*/ ctx[4])
			]));
		},
		i(local) {
			if (current) return;
			transition_in(fixed_slot, local);
			transition_in(default_slot, local);
			transition_in(static_slot, local);
			current = true;
		},
		o(local) {
			transition_out(fixed_slot, local);
			transition_out(default_slot, local);
			transition_out(static_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div1);
			if (fixed_slot) fixed_slot.d(detaching);
			if (default_slot) default_slot.d(detaching);
			if (static_slot) static_slot.d(detaching);
			/*div0_binding*/ ctx[27](null);
			/*div1_binding*/ ctx[28](null);
		}
	};
}

function instance_1($$self, $$props, $$invalidate) {
	let positionComputed;

	const omit_props_names = [
		"importsSeek","classes","opened","animate","top","bottom","position","backdrop","backdropEl","closeByBackdropClick","closeByOutsideClick","closeOnEscape","push","swipeToClose","swipeToStep","swipeHandler","containerEl","instance"
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
	let { top = undefined } = $$props;
	let { bottom = undefined } = $$props;
	let { position = undefined } = $$props;
	let { backdrop = undefined } = $$props;
	let { backdropEl = undefined } = $$props;
	let { closeByBackdropClick = undefined } = $$props;
	let { closeByOutsideClick = undefined } = $$props;
	let { closeOnEscape = undefined } = $$props;
	let { push = undefined } = $$props;
	let { swipeToClose = undefined } = $$props;
	let { swipeToStep = undefined } = $$props;
	let { swipeHandler = undefined } = $$props;
	let { containerEl = undefined } = $$props;
	let el;
	let innerEl;
	let f7Sheet;

	const state = {
		isOpened: opened,
		isClosing: false,
		swipeStep: false
	};

	function instance() {
		return f7Sheet;
	}

	function onOpen(instance) {
		Object.assign(state, { isOpened: true, isClosing: false });
		emit('sheetOpen', [instance]);
		$$invalidate(5, opened = true);
	}

	function onOpened(instance) {
		emit('sheetOpened', [instance]);
	}

	function onClose(instance) {
		Object.assign(state, { isOpened: false, isClosing: true });
		emit('sheetClose', [instance]);
	}

	function onClosed(instance) {
		Object.assign(state, { isClosing: false });
		emit('sheetClosed', [instance]);
		$$invalidate(5, opened = false);
	}

	function onStepProgress(instance, progress) {
		emit('sheetStepProgress', [instance, progress]);
	}

	function onStepOpen(instance) {
		emit('sheetStepOpen', [instance]);
	}

	function onStepClose(instance) {
		emit('sheetStepClose', [instance]);
	}

	let initialWatched = false;

	function watchOpened(openedPassed) {
		if (!initialWatched) {
			initialWatched = true;
			return;
		}

		if (!f7Sheet) return;
		if (openedPassed) f7Sheet.open(); else f7Sheet.close();
	}

	onMount(() => {
		const params = {
			el,
			on: {
				open: onOpen,
				opened: onOpened,
				close: onClose,
				closed: onClosed,
				stepOpen: onStepOpen,
				stepClose: onStepClose,
				stepProgress: onStepProgress,
				// eslint-disable-next-line
				_swipeStep(isSwipeStep) {
					$$invalidate(23, state.swipeStep = isSwipeStep, state);
				}
			}
		};

		if (typeof backdrop !== 'undefined') params.backdrop = backdrop;
		if (typeof animate !== 'undefined') params.animate = animate;
		if (typeof backdropEl !== 'undefined') params.backdropEl = backdropEl;
		if (typeof closeByBackdropClick !== 'undefined') params.closeByBackdropClick = closeByBackdropClick;
		if (typeof closeByOutsideClick !== 'undefined') params.closeByOutsideClick = closeByOutsideClick;
		if (typeof closeOnEscape !== 'undefined') params.closeOnEscape = closeOnEscape;
		if (typeof swipeToClose !== 'undefined') params.swipeToClose = swipeToClose;
		if (typeof swipeToStep !== 'undefined') params.swipeToStep = swipeToStep;
		if (typeof swipeHandler !== 'undefined') params.swipeHandler = swipeHandler;
		if (typeof containerEl !== 'undefined') params.containerEl = containerEl;

		f7ready(() => {
			if (el && innerEl) {
				const dom7 = app.f7.$;
				const fixedEls = dom7(innerEl).children('.navbar, .toolbar, .tabbar, .searchbar');

				if (fixedEls.length) {
					dom7(el).prepend(fixedEls);
				}
			}

			$$invalidate(3, f7Sheet = app.f7.sheet.create(params));

			if (opened) {
				f7Sheet.open(false);
			}
		});
	});

	onDestroy(() => {
		if (f7Sheet) f7Sheet.destroy();
		$$invalidate(3, f7Sheet = null);
	});

	function div0_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			innerEl = $$value;
			$$invalidate(2, innerEl);
		});
	}

	function div1_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			el = $$value;
			$$invalidate(1, el);
		});
	}

	$$self.$$set = $$new_props => {
		$$invalidate(43, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(4, $$restProps = compute_rest_props($$props, omit_props_names));
		if ('importsSeek' in $$new_props) $$invalidate(6, importsSeek = $$new_props.importsSeek);
		if ('classes' in $$new_props) $$invalidate(7, classes = $$new_props.classes);
		if ('opened' in $$new_props) $$invalidate(5, opened = $$new_props.opened);
		if ('animate' in $$new_props) $$invalidate(8, animate = $$new_props.animate);
		if ('top' in $$new_props) $$invalidate(9, top = $$new_props.top);
		if ('bottom' in $$new_props) $$invalidate(10, bottom = $$new_props.bottom);
		if ('position' in $$new_props) $$invalidate(11, position = $$new_props.position);
		if ('backdrop' in $$new_props) $$invalidate(12, backdrop = $$new_props.backdrop);
		if ('backdropEl' in $$new_props) $$invalidate(13, backdropEl = $$new_props.backdropEl);
		if ('closeByBackdropClick' in $$new_props) $$invalidate(14, closeByBackdropClick = $$new_props.closeByBackdropClick);
		if ('closeByOutsideClick' in $$new_props) $$invalidate(15, closeByOutsideClick = $$new_props.closeByOutsideClick);
		if ('closeOnEscape' in $$new_props) $$invalidate(16, closeOnEscape = $$new_props.closeOnEscape);
		if ('push' in $$new_props) $$invalidate(17, push = $$new_props.push);
		if ('swipeToClose' in $$new_props) $$invalidate(18, swipeToClose = $$new_props.swipeToClose);
		if ('swipeToStep' in $$new_props) $$invalidate(19, swipeToStep = $$new_props.swipeToStep);
		if ('swipeHandler' in $$new_props) $$invalidate(20, swipeHandler = $$new_props.swipeHandler);
		if ('containerEl' in $$new_props) $$invalidate(21, containerEl = $$new_props.containerEl);
		if ('$$scope' in $$new_props) $$invalidate(25, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*position, top, bottom*/ 3584) {
			$$invalidate(24, positionComputed = (() => {
				if (position) return position;
				if (top) return 'top';
				if (bottom) return 'bottom';
				return 'bottom';
			})());
		}

		$$invalidate(0, computedClasses = classNames(
			classes,
			'sheet-modal',
			`sheet-modal-${positionComputed}`,
			{
				'sheet-modal-push': push,
				'modal-in-swipe-step': state.swipeStep
			},
			modalStateClasses(state),
			colorClasses($$props)
		));

		if ($$self.$$.dirty[0] & /*opened*/ 32) {
			watchOpened(opened);
		}
	};

	$$props = exclude_internal_props($$props);

	return [
		computedClasses,
		el,
		innerEl,
		f7Sheet,
		$$restProps,
		opened,
		importsSeek,
		classes,
		animate,
		top,
		bottom,
		position,
		backdrop,
		backdropEl,
		closeByBackdropClick,
		closeByOutsideClick,
		closeOnEscape,
		push,
		swipeToClose,
		swipeToStep,
		swipeHandler,
		containerEl,
		instance,
		state,
		positionComputed,
		$$scope,
		slots,
		div0_binding,
		div1_binding
	];
}

class Sheet extends SvelteComponent {
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
				classes: 7,
				opened: 5,
				animate: 8,
				top: 9,
				bottom: 10,
				position: 11,
				backdrop: 12,
				backdropEl: 13,
				closeByBackdropClick: 14,
				closeByOutsideClick: 15,
				closeOnEscape: 16,
				push: 17,
				swipeToClose: 18,
				swipeToStep: 19,
				swipeHandler: 20,
				containerEl: 21,
				instance: 22
			},
			null,
			[-1, -1]
		);
	}

	get instance() {
		return this.$$.ctx[22];
	}
}

export { Sheet };