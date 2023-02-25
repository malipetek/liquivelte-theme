import { SvelteComponent, init, safe_not_equal, create_slot, assign, element, claim_element, children, detach, set_attributes, insert_hydration, update_slot_base, get_all_dirty_from_scope, get_slot_changes, get_spread_update, transition_in, transition_out, compute_rest_props, getContext, onMount, onDestroy, exclude_internal_props, createEventDispatcher, binding_callbacks } from './liquivelte-svelte-hse72de747.liquivelte.js';
import { restProps, createEmitter, f7ready, app, classNames, modalStateClasses, colorClasses } from './framework7-liquivelte-hs390c8ed0.liquivelte.js';

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/node_modules/framework7-liquivelte/components/popup.liquivelte generated by Svelte v3.50.0 */
const get_default_slot_changes = dirty => ({ popup: dirty[0] & /*f7Popup*/ 4 });
const get_default_slot_context = ctx => ({ popup: /*f7Popup*/ ctx[2] });

function create_fragment(ctx) {
	let div;
	let current;
	const default_slot_template = /*#slots*/ ctx[19].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[18], get_default_slot_context);
	let div_levels = [{ class: /*computedClasses*/ ctx[0] }, restProps(/*$$restProps*/ ctx[3])];
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

			/*div_binding*/ ctx[20](div);
			current = true;
		},
		p(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty[0] & /*$$scope, f7Popup*/ 262148)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[18],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[18])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[18], dirty, get_default_slot_changes),
						get_default_slot_context
					);
				}
			}

			set_attributes(div, div_data = get_spread_update(div_levels, [
				(!current || dirty[0] & /*computedClasses*/ 1) && { class: /*computedClasses*/ ctx[0] },
				dirty[0] & /*$$restProps*/ 8 && restProps(/*$$restProps*/ ctx[3])
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
			/*div_binding*/ ctx[20](null);
		}
	};
}

function instance_1($$self, $$props, $$invalidate) {
	const omit_props_names = [
		"importsSeek","classes","tabletFullscreen","opened","animate","backdrop","backdropEl","closeByBackdropClick","closeOnEscape","swipeToClose","swipeHandler","push","containerEl","instance"
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
	let { tabletFullscreen = undefined } = $$props;
	let { opened = undefined } = $$props;
	let { animate = undefined } = $$props;
	let { backdrop = undefined } = $$props;
	let { backdropEl = undefined } = $$props;
	let { closeByBackdropClick = undefined } = $$props;
	let { closeOnEscape = undefined } = $$props;
	let { swipeToClose = false } = $$props;
	let { swipeHandler = undefined } = $$props;
	let { push = undefined } = $$props;
	let { containerEl = undefined } = $$props;
	let el;
	let f7Popup;
	const state = { isOpened: opened, isClosing: false };

	function instance() {
		return f7Popup;
	}

	function onSwipeStart(instance) {
		emit('popupSwipeStart', [instance]);
	}

	function onSwipeMove(instance) {
		emit('popupSwipeMove', [instance]);
	}

	function onSwipeEnd(instance) {
		emit('popupSwipeEnd', [instance]);
	}

	function onSwipeClose(instance) {
		emit('popupSwipeClose', [instance]);
	}

	function onOpen(instance) {
		Object.assign(state, { isOpened: true, isClosing: false });
		emit('popupOpen', [instance]);
		$$invalidate(4, opened = true);
	}

	function onOpened(instance) {
		emit('popupOpened', [instance]);
	}

	function onClose(instance) {
		Object.assign(state, { isOpened: false, isClosing: true });
		emit('popupClose', [instance]);
	}

	function onClosed(instance) {
		Object.assign(state, { isClosing: false });
		emit('popupClosed', [instance]);
		$$invalidate(4, opened = false);
	}

	let initialWatched = false;

	function watchOpened(openedPassed) {
		if (!initialWatched) {
			initialWatched = true;
			return;
		}

		if (!f7Popup) return;
		if (openedPassed) f7Popup.open(); else f7Popup.close();
	}

	onMount(() => {
		const popupParams = {
			el,
			on: {
				swipeStart: onSwipeStart,
				swipeMove: onSwipeMove,
				swipeEnd: onSwipeEnd,
				swipeClose: onSwipeClose,
				open: onOpen,
				opened: onOpened,
				close: onClose,
				closed: onClosed
			}
		};

		if (typeof closeByBackdropClick !== 'undefined') popupParams.closeByBackdropClick = closeByBackdropClick;
		if (typeof closeOnEscape !== 'undefined') popupParams.closeOnEscape = closeOnEscape;
		if (typeof animate !== 'undefined') popupParams.animate = animate;
		if (typeof backdrop !== 'undefined') popupParams.backdrop = backdrop;
		if (typeof backdropEl !== 'undefined') popupParams.backdropEl = backdropEl;
		if (typeof swipeToClose !== 'undefined') popupParams.swipeToClose = swipeToClose;
		if (typeof swipeHandler !== 'undefined') popupParams.swipeHandler = swipeHandler;
		if (typeof containerEl !== 'undefined') popupParams.containerEl = containerEl;

		f7ready(() => {
			$$invalidate(2, f7Popup = app.f7.popup.create(popupParams));

			if (opened) {
				f7Popup.open(false);
			}
		});
	});

	onDestroy(() => {
		if (f7Popup) f7Popup.destroy();
		$$invalidate(2, f7Popup = null);
	});

	function div_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			el = $$value;
			$$invalidate(1, el);
		});
	}

	$$self.$$set = $$new_props => {
		$$invalidate(37, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
		if ('importsSeek' in $$new_props) $$invalidate(5, importsSeek = $$new_props.importsSeek);
		if ('classes' in $$new_props) $$invalidate(6, classes = $$new_props.classes);
		if ('tabletFullscreen' in $$new_props) $$invalidate(7, tabletFullscreen = $$new_props.tabletFullscreen);
		if ('opened' in $$new_props) $$invalidate(4, opened = $$new_props.opened);
		if ('animate' in $$new_props) $$invalidate(8, animate = $$new_props.animate);
		if ('backdrop' in $$new_props) $$invalidate(9, backdrop = $$new_props.backdrop);
		if ('backdropEl' in $$new_props) $$invalidate(10, backdropEl = $$new_props.backdropEl);
		if ('closeByBackdropClick' in $$new_props) $$invalidate(11, closeByBackdropClick = $$new_props.closeByBackdropClick);
		if ('closeOnEscape' in $$new_props) $$invalidate(12, closeOnEscape = $$new_props.closeOnEscape);
		if ('swipeToClose' in $$new_props) $$invalidate(13, swipeToClose = $$new_props.swipeToClose);
		if ('swipeHandler' in $$new_props) $$invalidate(14, swipeHandler = $$new_props.swipeHandler);
		if ('push' in $$new_props) $$invalidate(15, push = $$new_props.push);
		if ('containerEl' in $$new_props) $$invalidate(16, containerEl = $$new_props.containerEl);
		if ('$$scope' in $$new_props) $$invalidate(18, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		$$invalidate(0, computedClasses = classNames(
			classes,
			'popup',
			{
				'popup-tablet-fullscreen': tabletFullscreen,
				'popup-push': push
			},
			modalStateClasses(state),
			colorClasses($$props)
		));

		if ($$self.$$.dirty[0] & /*opened*/ 16) {
			watchOpened(opened);
		}
	};

	$$props = exclude_internal_props($$props);

	return [
		computedClasses,
		el,
		f7Popup,
		$$restProps,
		opened,
		importsSeek,
		classes,
		tabletFullscreen,
		animate,
		backdrop,
		backdropEl,
		closeByBackdropClick,
		closeOnEscape,
		swipeToClose,
		swipeHandler,
		push,
		containerEl,
		instance,
		$$scope,
		slots,
		div_binding
	];
}

class Popup extends SvelteComponent {
	constructor(options) {
		super();

		init(
			this,
			options,
			instance_1,
			create_fragment,
			safe_not_equal,
			{
				importsSeek: 5,
				classes: 6,
				tabletFullscreen: 7,
				opened: 4,
				animate: 8,
				backdrop: 9,
				backdropEl: 10,
				closeByBackdropClick: 11,
				closeOnEscape: 12,
				swipeToClose: 13,
				swipeHandler: 14,
				push: 15,
				containerEl: 16,
				instance: 17
			},
			null,
			[-1, -1]
		);
	}

	get instance() {
		return this.$$.ctx[17];
	}
}

export { Popup };
