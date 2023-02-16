import { SvelteComponent, init, safe_not_equal, create_slot, assign, element, space, claim_element, children, claim_space, detach, set_attributes, insert_hydration, append_hydration, update_slot_base, get_all_dirty_from_scope, get_slot_changes, get_spread_update, transition_in, transition_out, compute_rest_props, getContext, onMount, onDestroy, exclude_internal_props, attr, createEventDispatcher, binding_callbacks } from './liquivelte-svelte-hs75fa7249.liquivelte.js';
import { restProps, createEmitter, f7ready, app, noUndefinedProps, classNames, colorClasses } from './framework7-liquivelte-hs7cccafc5.liquivelte.js';

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/node_modules/framework7-liquivelte/components/panel.liquivelte generated by Svelte v3.50.0 */
const get_default_slot_changes = dirty => ({ panel: dirty[0] & /*f7Panel*/ 32 });
const get_default_slot_context = ctx => ({ panel: /*f7Panel*/ ctx[5] });

// (216:2) {#if resizable }
function create_if_block(ctx) {
	let div;

	return {
		c() {
			div = element("div");
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			children(div).forEach(detach);
			this.h();
		},
		h() {
			attr(div, "class", "panel-resize-handler");
		},
		m(target, anchor) {
			insert_hydration(target, div, anchor);
		},
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let t;
	let div_class_value;
	let current;
	const default_slot_template = /*#slots*/ ctx[31].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[30], get_default_slot_context);
	let if_block = /*resizable*/ ctx[1] && create_if_block();

	let div_levels = [
		{
			class: div_class_value = "panel " + /*classes*/ ctx[0] + " " + /*computedClasses*/ ctx[3]
		},
		{ "data-f7-slot": /*f7Slot*/ ctx[2] },
		restProps(/*$$restProps*/ ctx[6])
	];

	let div_data = {};

	for (let i = 0; i < div_levels.length; i += 1) {
		div_data = assign(div_data, div_levels[i]);
	}

	return {
		c() {
			div = element("div");
			if (default_slot) default_slot.c();
			t = space();
			if (if_block) if_block.c();
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true, "data-f7-slot": true });
			var div_nodes = children(div);
			if (default_slot) default_slot.l(div_nodes);
			t = claim_space(div_nodes);
			if (if_block) if_block.l(div_nodes);
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

			append_hydration(div, t);
			if (if_block) if_block.m(div, null);
			/*div_binding*/ ctx[32](div);
			current = true;
		},
		p(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty[0] & /*$$scope, f7Panel*/ 1073741856)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[30],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[30])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[30], dirty, get_default_slot_changes),
						get_default_slot_context
					);
				}
			}

			if (/*resizable*/ ctx[1]) {
				if (if_block) ; else {
					if_block = create_if_block();
					if_block.c();
					if_block.m(div, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			set_attributes(div, div_data = get_spread_update(div_levels, [
				(!current || dirty[0] & /*classes, computedClasses*/ 9 && div_class_value !== (div_class_value = "panel " + /*classes*/ ctx[0] + " " + /*computedClasses*/ ctx[3])) && { class: div_class_value },
				(!current || dirty[0] & /*f7Slot*/ 4) && { "data-f7-slot": /*f7Slot*/ ctx[2] },
				dirty[0] & /*$$restProps*/ 64 && restProps(/*$$restProps*/ ctx[6])
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
			if (if_block) if_block.d();
			/*div_binding*/ ctx[32](null);
		}
	};
}

function instance_1($$self, $$props, $$invalidate) {
	let sideComputed;
	let effectComputed;

	const omit_props_names = [
		"importsSeek","classes","side","effect","cover","reveal","push","left","right","opened","resizable","backdrop","backdropEl","containerEl","closeByBackdropClick","visibleBreakpoint","collapsedBreakpoint","swipe","swipeNoFollow","swipeOnlyClose","swipeActiveArea","swipeThreshold","f7Slot","instance"
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
	let { side = undefined } = $$props;
	let { effect = undefined } = $$props;
	let { cover = false } = $$props;
	let { reveal = false } = $$props;
	let { push = false } = $$props;
	let { left = false } = $$props;
	let { right = false } = $$props;
	let { opened = false } = $$props;
	let { resizable = false } = $$props;
	let { backdrop = true } = $$props;
	let { backdropEl = undefined } = $$props;
	let { containerEl = undefined } = $$props;
	let { closeByBackdropClick = undefined } = $$props;
	let { visibleBreakpoint = undefined } = $$props;
	let { collapsedBreakpoint = undefined } = $$props;
	let { swipe = false } = $$props;
	let { swipeNoFollow = false } = $$props;
	let { swipeOnlyClose = false } = $$props;
	let { swipeActiveArea = 0 } = $$props;
	let { swipeThreshold = 0 } = $$props;
	let { f7Slot = 'fixed' } = $$props;
	let el;
	let f7Panel;

	const state = {
		isOpened: false,
		isClosing: false,
		isCollapsed: false,
		isBreakpoint: false
	};

	function instance() {
		return f7Panel;
	}

	let resizableOld = resizable;
	let initialWatchedResizable = false;

	function watchResizable(r) {
		if (!initialWatchedResizable) {
			initialWatchedResizable = true;
			return;
		}

		if (f7Panel && r && !resizableOld) {
			f7Panel.enableResizable();
		} else if (f7Panel && !r && resizableOld) {
			f7Panel.disableResizable();
		}

		resizableOld = r;
	}

	let openedOld = opened;
	let initialWatchedOpened = false;

	function watchOpened(o) {
		if (!initialWatchedOpened) {
			initialWatchedOpened = true;
			return;
		}

		if (f7Panel && o && !openedOld) {
			f7Panel.open();
		} else if (f7Panel && !o && openedOld) {
			f7Panel.close();
		}

		openedOld = o;
	}

	function onOpen(...args) {
		Object.assign(state, { isOpened: true, isClosing: false });
		emit('panelOpen', args);
		$$invalidate(7, opened = true);
	}

	function onOpened(...args) {
		emit('panelOpened', args);
	}

	function onClose(...args) {
		Object.assign(state, { isOpened: false, isClosing: true });
		emit('panelClose', args);
	}

	function onClosed(...args) {
		Object.assign(state, { isClosing: false });
		emit('panelClosed', args);
		$$invalidate(7, opened = false);
	}

	function onBackdropClick(...args) {
		emit('panelBackdropClick', args);
	}

	function onSwipe(...args) {
		emit('panelSwipe', args);
	}

	function onSwipeOpen(...args) {
		emit('panelSwipeOpen', args);
	}

	function onBreakpoint(...args) {
		Object.assign(state, { isBreakpoint: true, isCollapsed: false });
		emit('panelBreakpoint', args);
	}

	function onCollapsedBreakpoint(...args) {
		Object.assign(state, { isBreakpoint: false, isCollapsed: true });
		emit('panelCollapsedBreakpoint', args);
	}

	function onResize(...args) {
		emit('panelResize', args);
	}

	onMount(() => {
		f7ready(() => {
			const dom7 = app.f7.$;

			if (dom7('.panel-backdrop').length === 0) {
				dom7('<div class="panel-backdrop"></div>').insertBefore(el);
			}

			const params = noUndefinedProps({
				el,
				resizable,
				backdrop,
				backdropEl,
				containerEl,
				closeByBackdropClick,
				visibleBreakpoint,
				collapsedBreakpoint,
				swipe,
				swipeNoFollow,
				swipeOnlyClose,
				swipeActiveArea,
				swipeThreshold,
				on: {
					open: onOpen,
					opened: onOpened,
					close: onClose,
					closed: onClosed,
					backdropClick: onBackdropClick,
					swipe: onSwipe,
					swipeOpen: onSwipeOpen,
					collapsedBreakpoint: onCollapsedBreakpoint,
					breakpoint: onBreakpoint,
					resize: onResize
				}
			});

			$$invalidate(5, f7Panel = app.f7.panel.create(params));

			if (opened) {
				f7Panel.open(false);
			}
		});
	});

	onDestroy(() => {
		if (f7Panel && f7Panel.destroy) {
			f7Panel.destroy();
		}

		$$invalidate(5, f7Panel = null);
	});

	function div_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			el = $$value;
			$$invalidate(4, el);
		});
	}

	$$self.$$set = $$new_props => {
		$$invalidate(55, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(6, $$restProps = compute_rest_props($$props, omit_props_names));
		if ('importsSeek' in $$new_props) $$invalidate(8, importsSeek = $$new_props.importsSeek);
		if ('classes' in $$new_props) $$invalidate(0, classes = $$new_props.classes);
		if ('side' in $$new_props) $$invalidate(9, side = $$new_props.side);
		if ('effect' in $$new_props) $$invalidate(10, effect = $$new_props.effect);
		if ('cover' in $$new_props) $$invalidate(11, cover = $$new_props.cover);
		if ('reveal' in $$new_props) $$invalidate(12, reveal = $$new_props.reveal);
		if ('push' in $$new_props) $$invalidate(13, push = $$new_props.push);
		if ('left' in $$new_props) $$invalidate(14, left = $$new_props.left);
		if ('right' in $$new_props) $$invalidate(15, right = $$new_props.right);
		if ('opened' in $$new_props) $$invalidate(7, opened = $$new_props.opened);
		if ('resizable' in $$new_props) $$invalidate(1, resizable = $$new_props.resizable);
		if ('backdrop' in $$new_props) $$invalidate(16, backdrop = $$new_props.backdrop);
		if ('backdropEl' in $$new_props) $$invalidate(17, backdropEl = $$new_props.backdropEl);
		if ('containerEl' in $$new_props) $$invalidate(18, containerEl = $$new_props.containerEl);
		if ('closeByBackdropClick' in $$new_props) $$invalidate(19, closeByBackdropClick = $$new_props.closeByBackdropClick);
		if ('visibleBreakpoint' in $$new_props) $$invalidate(20, visibleBreakpoint = $$new_props.visibleBreakpoint);
		if ('collapsedBreakpoint' in $$new_props) $$invalidate(21, collapsedBreakpoint = $$new_props.collapsedBreakpoint);
		if ('swipe' in $$new_props) $$invalidate(22, swipe = $$new_props.swipe);
		if ('swipeNoFollow' in $$new_props) $$invalidate(23, swipeNoFollow = $$new_props.swipeNoFollow);
		if ('swipeOnlyClose' in $$new_props) $$invalidate(24, swipeOnlyClose = $$new_props.swipeOnlyClose);
		if ('swipeActiveArea' in $$new_props) $$invalidate(25, swipeActiveArea = $$new_props.swipeActiveArea);
		if ('swipeThreshold' in $$new_props) $$invalidate(26, swipeThreshold = $$new_props.swipeThreshold);
		if ('f7Slot' in $$new_props) $$invalidate(2, f7Slot = $$new_props.f7Slot);
		if ('$$scope' in $$new_props) $$invalidate(30, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*side, left, right*/ 49664) {
			// eslint-disable-next-line
			$$invalidate(29, sideComputed = side || (left ? 'left' : right ? 'right' : 'left'));
		}

		if ($$self.$$.dirty[0] & /*effect, reveal, push*/ 13312) {
			// eslint-disable-next-line
			$$invalidate(28, effectComputed = effect || (reveal ? 'reveal' : push ? 'push' : 'cover'));
		}

		$$invalidate(3, computedClasses = classNames(
			classes,
			{
				'panel-in': state.isOpened && !state.isClosing && !state.isBreakpoint,
				'panel-in-breakpoint': state.isBreakpoint,
				'panel-in-collapsed': state.isCollapsed,
				'panel-resizable': resizable,
				[`panel-${sideComputed}`]: sideComputed,
				[`panel-${effectComputed}`]: effectComputed
			},
			colorClasses($$props)
		));

		if ($$self.$$.dirty[0] & /*resizable*/ 2) {
			watchResizable(resizable);
		}

		if ($$self.$$.dirty[0] & /*opened*/ 128) {
			watchOpened(opened);
		}
	};

	$$props = exclude_internal_props($$props);

	return [
		classes,
		resizable,
		f7Slot,
		computedClasses,
		el,
		f7Panel,
		$$restProps,
		opened,
		importsSeek,
		side,
		effect,
		cover,
		reveal,
		push,
		left,
		right,
		backdrop,
		backdropEl,
		containerEl,
		closeByBackdropClick,
		visibleBreakpoint,
		collapsedBreakpoint,
		swipe,
		swipeNoFollow,
		swipeOnlyClose,
		swipeActiveArea,
		swipeThreshold,
		instance,
		effectComputed,
		sideComputed,
		$$scope,
		slots,
		div_binding
	];
}

class Panel extends SvelteComponent {
	constructor(options) {
		super();

		init(
			this,
			options,
			instance_1,
			create_fragment,
			safe_not_equal,
			{
				importsSeek: 8,
				classes: 0,
				side: 9,
				effect: 10,
				cover: 11,
				reveal: 12,
				push: 13,
				left: 14,
				right: 15,
				opened: 7,
				resizable: 1,
				backdrop: 16,
				backdropEl: 17,
				containerEl: 18,
				closeByBackdropClick: 19,
				visibleBreakpoint: 20,
				collapsedBreakpoint: 21,
				swipe: 22,
				swipeNoFollow: 23,
				swipeOnlyClose: 24,
				swipeActiveArea: 25,
				swipeThreshold: 26,
				f7Slot: 2,
				instance: 27
			},
			null,
			[-1, -1]
		);
	}

	get instance() {
		return this.$$.ctx[27];
	}
}

export { Panel };
