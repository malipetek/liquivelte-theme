import { SvelteComponent, init, safe_not_equal, create_slot, assign, element, space, claim_element, children, claim_space, detach, attr, set_attributes, insert_hydration, append_hydration, update_slot_base, get_all_dirty_from_scope, get_slot_changes, get_spread_update, transition_in, transition_out, compute_rest_props, getContext, createEventDispatcher, onMount, onDestroy, exclude_internal_props, binding_callbacks } from './liquivelte-svelte-hs860fcb0f.liquivelte.js';
import { restProps, createEmitter, noUndefinedProps, f7ready, app, classNames, colorClasses } from './framework7-liquivelte-hsbc78d147.liquivelte.js';

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/node_modules/framework7-liquivelte/components/text-editor.liquivelte generated by Svelte v3.50.0 */

const get_root_slot_changes = dirty => ({
	textEditor: dirty[0] & /*f7TextEditor*/ 4
});

const get_root_slot_context = ctx => ({ textEditor: /*f7TextEditor*/ ctx[2] });

const get_root_end_slot_changes = dirty => ({
	textEditor: dirty[0] & /*f7TextEditor*/ 4
});

const get_root_end_slot_context = ctx => ({ textEditor: /*f7TextEditor*/ ctx[2] });

const get_default_slot_changes = dirty => ({
	textEditor: dirty[0] & /*f7TextEditor*/ 4
});

const get_default_slot_context = ctx => ({ textEditor: /*f7TextEditor*/ ctx[2] });

const get_root_start_slot_changes = dirty => ({
	textEditor: dirty[0] & /*f7TextEditor*/ 4
});

const get_root_start_slot_context = ctx => ({ textEditor: /*f7TextEditor*/ ctx[2] });

function create_fragment(ctx) {
	let div1;
	let t0;
	let div0;
	let t1;
	let t2;
	let current;
	const root_start_slot_template = /*#slots*/ ctx[18]["root-start"];
	const root_start_slot = create_slot(root_start_slot_template, ctx, /*$$scope*/ ctx[17], get_root_start_slot_context);
	const default_slot_template = /*#slots*/ ctx[18].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[17], get_default_slot_context);
	const root_end_slot_template = /*#slots*/ ctx[18]["root-end"];
	const root_end_slot = create_slot(root_end_slot_template, ctx, /*$$scope*/ ctx[17], get_root_end_slot_context);
	const root_slot_template = /*#slots*/ ctx[18].root;
	const root_slot = create_slot(root_slot_template, ctx, /*$$scope*/ ctx[17], get_root_slot_context);
	let div1_levels = [{ class: /*computedClasses*/ ctx[0] }, restProps(/*$$restProps*/ ctx[3])];
	let div1_data = {};

	for (let i = 0; i < div1_levels.length; i += 1) {
		div1_data = assign(div1_data, div1_levels[i]);
	}

	return {
		c() {
			div1 = element("div");
			if (root_start_slot) root_start_slot.c();
			t0 = space();
			div0 = element("div");
			if (default_slot) default_slot.c();
			t1 = space();
			if (root_end_slot) root_end_slot.c();
			t2 = space();
			if (root_slot) root_slot.c();
			this.h();
		},
		l(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			if (root_start_slot) root_start_slot.l(div1_nodes);
			t0 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true, contenteditable: true });
			var div0_nodes = children(div0);
			if (default_slot) default_slot.l(div0_nodes);
			div0_nodes.forEach(detach);
			t1 = claim_space(div1_nodes);
			if (root_end_slot) root_end_slot.l(div1_nodes);
			t2 = claim_space(div1_nodes);
			if (root_slot) root_slot.l(div1_nodes);
			div1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div0, "class", "text-editor-content");
			attr(div0, "contenteditable", "");
			set_attributes(div1, div1_data);
		},
		m(target, anchor) {
			insert_hydration(target, div1, anchor);

			if (root_start_slot) {
				root_start_slot.m(div1, null);
			}

			append_hydration(div1, t0);
			append_hydration(div1, div0);

			if (default_slot) {
				default_slot.m(div0, null);
			}

			append_hydration(div1, t1);

			if (root_end_slot) {
				root_end_slot.m(div1, null);
			}

			append_hydration(div1, t2);

			if (root_slot) {
				root_slot.m(div1, null);
			}

			/*div1_binding*/ ctx[19](div1);
			current = true;
		},
		p(ctx, dirty) {
			if (root_start_slot) {
				if (root_start_slot.p && (!current || dirty[0] & /*$$scope, f7TextEditor*/ 131076)) {
					update_slot_base(
						root_start_slot,
						root_start_slot_template,
						ctx,
						/*$$scope*/ ctx[17],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[17])
						: get_slot_changes(root_start_slot_template, /*$$scope*/ ctx[17], dirty, get_root_start_slot_changes),
						get_root_start_slot_context
					);
				}
			}

			if (default_slot) {
				if (default_slot.p && (!current || dirty[0] & /*$$scope, f7TextEditor*/ 131076)) {
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

			if (root_end_slot) {
				if (root_end_slot.p && (!current || dirty[0] & /*$$scope, f7TextEditor*/ 131076)) {
					update_slot_base(
						root_end_slot,
						root_end_slot_template,
						ctx,
						/*$$scope*/ ctx[17],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[17])
						: get_slot_changes(root_end_slot_template, /*$$scope*/ ctx[17], dirty, get_root_end_slot_changes),
						get_root_end_slot_context
					);
				}
			}

			if (root_slot) {
				if (root_slot.p && (!current || dirty[0] & /*$$scope, f7TextEditor*/ 131076)) {
					update_slot_base(
						root_slot,
						root_slot_template,
						ctx,
						/*$$scope*/ ctx[17],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[17])
						: get_slot_changes(root_slot_template, /*$$scope*/ ctx[17], dirty, get_root_slot_changes),
						get_root_slot_context
					);
				}
			}

			set_attributes(div1, div1_data = get_spread_update(div1_levels, [
				(!current || dirty[0] & /*computedClasses*/ 1) && { class: /*computedClasses*/ ctx[0] },
				dirty[0] & /*$$restProps*/ 8 && restProps(/*$$restProps*/ ctx[3])
			]));
		},
		i(local) {
			if (current) return;
			transition_in(root_start_slot, local);
			transition_in(default_slot, local);
			transition_in(root_end_slot, local);
			transition_in(root_slot, local);
			current = true;
		},
		o(local) {
			transition_out(root_start_slot, local);
			transition_out(default_slot, local);
			transition_out(root_end_slot, local);
			transition_out(root_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div1);
			if (root_start_slot) root_start_slot.d(detaching);
			if (default_slot) default_slot.d(detaching);
			if (root_end_slot) root_end_slot.d(detaching);
			if (root_slot) root_slot.d(detaching);
			/*div1_binding*/ ctx[19](null);
		}
	};
}

function instance_1($$self, $$props, $$invalidate) {
	const omit_props_names = [
		"importsSeek","classes","mode","value","buttons","customButtons","dividers","imageUrlText","linkUrlText","placeholder","clearFormattingOnPaste","resizable","instance"
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
	let { mode = undefined } = $$props;
	let { value = undefined } = $$props;
	let { buttons = undefined } = $$props;
	let { customButtons = undefined } = $$props;
	let { dividers = undefined } = $$props;
	let { imageUrlText = undefined } = $$props;
	let { linkUrlText = undefined } = $$props;
	let { placeholder = undefined } = $$props;
	let { clearFormattingOnPaste = undefined } = $$props;
	let { resizable = false } = $$props;
	let el;
	let f7TextEditor;

	function instance() {
		return f7TextEditor;
	}

	function watchValue(newValue) {
		if (f7TextEditor) {
			f7TextEditor.setValue(newValue);
		}
	}

	function onChange(editor, editorValue) {
		emit('textEditorChange', [editorValue]);
	}

	function onInput(editor, editorValue) {
		emit('textEditorInput', [editorValue]);
	}

	function onFocus() {
		emit('textEditorFocus');
	}

	function onBlur() {
		emit('textEditorBlur');
	}

	function onButtonClick(editor, button) {
		emit('textEditorButtonClick', [button]);
	}

	function onKeyboardOpen() {
		emit('textEditorKeyboardOpen');
	}

	function onKeyboardClose() {
		emit('textEditorKeyboardClose');
	}

	function onPopoverOpen() {
		emit('textEditorPopoverOpen');
	}

	function onPopoverClose() {
		emit('textEditorPopoverClose');
	}

	const onInsertLink = (editor, url) => {
		emit('textEditorInsertLink', [url]);
	};

	const onInsertImage = (editor, url) => {
		emit('textEditorInsertImage', [url]);
	};

	onMount(() => {
		const params = noUndefinedProps({
			el,
			mode,
			value,
			buttons,
			customButtons,
			dividers,
			imageUrlText,
			linkUrlText,
			placeholder,
			clearFormattingOnPaste,
			on: {
				change: onChange,
				input: onInput,
				focus: onFocus,
				blur: onBlur,
				buttonClick: onButtonClick,
				keyboardOpen: onKeyboardOpen,
				keyboardClose: onKeyboardClose,
				popoverOpen: onPopoverOpen,
				popoverClose: onPopoverClose,
				insertLink: onInsertLink,
				insertImage: onInsertImage
			}
		});

		f7ready(() => {
			$$invalidate(2, f7TextEditor = app.f7.textEditor.create(params));
		});
	});

	onDestroy(() => {
		if (f7TextEditor && f7TextEditor.destroy) {
			f7TextEditor.destroy();
			$$invalidate(2, f7TextEditor = null);
		}
	});

	function div1_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			el = $$value;
			$$invalidate(1, el);
		});
	}

	$$self.$$set = $$new_props => {
		$$invalidate(37, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
		if ('importsSeek' in $$new_props) $$invalidate(4, importsSeek = $$new_props.importsSeek);
		if ('classes' in $$new_props) $$invalidate(5, classes = $$new_props.classes);
		if ('mode' in $$new_props) $$invalidate(6, mode = $$new_props.mode);
		if ('value' in $$new_props) $$invalidate(7, value = $$new_props.value);
		if ('buttons' in $$new_props) $$invalidate(8, buttons = $$new_props.buttons);
		if ('customButtons' in $$new_props) $$invalidate(9, customButtons = $$new_props.customButtons);
		if ('dividers' in $$new_props) $$invalidate(10, dividers = $$new_props.dividers);
		if ('imageUrlText' in $$new_props) $$invalidate(11, imageUrlText = $$new_props.imageUrlText);
		if ('linkUrlText' in $$new_props) $$invalidate(12, linkUrlText = $$new_props.linkUrlText);
		if ('placeholder' in $$new_props) $$invalidate(13, placeholder = $$new_props.placeholder);
		if ('clearFormattingOnPaste' in $$new_props) $$invalidate(14, clearFormattingOnPaste = $$new_props.clearFormattingOnPaste);
		if ('resizable' in $$new_props) $$invalidate(15, resizable = $$new_props.resizable);
		if ('$$scope' in $$new_props) $$invalidate(17, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		$$invalidate(0, computedClasses = classNames(classes, 'text-editor', resizable && 'text-editor-resizable', colorClasses($$props)));

		if ($$self.$$.dirty[0] & /*value*/ 128) {
			watchValue(value);
		}
	};

	$$props = exclude_internal_props($$props);

	return [
		computedClasses,
		el,
		f7TextEditor,
		$$restProps,
		importsSeek,
		classes,
		mode,
		value,
		buttons,
		customButtons,
		dividers,
		imageUrlText,
		linkUrlText,
		placeholder,
		clearFormattingOnPaste,
		resizable,
		instance,
		$$scope,
		slots,
		div1_binding
	];
}

class Text_editor extends SvelteComponent {
	constructor(options) {
		super();

		init(
			this,
			options,
			instance_1,
			create_fragment,
			safe_not_equal,
			{
				importsSeek: 4,
				classes: 5,
				mode: 6,
				value: 7,
				buttons: 8,
				customButtons: 9,
				dividers: 10,
				imageUrlText: 11,
				linkUrlText: 12,
				placeholder: 13,
				clearFormattingOnPaste: 14,
				resizable: 15,
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

export { Text_editor };