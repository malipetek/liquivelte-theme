import { SvelteComponent, init, safe_not_equal, create_slot, assign, element, space, claim_element, children, claim_space, detach, set_attributes, insert_hydration, append_hydration, transition_in, group_outros, transition_out, check_outros, update_slot_base, get_all_dirty_from_scope, get_slot_changes, get_spread_update, compute_rest_props, getContext, createEventDispatcher, exclude_internal_props, create_component, claim_component, mount_component, destroy_component } from './liquivelte-svelte-hse72de747.liquivelte.js';
import { restProps, createEmitter, useTheme, classNames, colorClasses } from './framework7-liquivelte-hs390c8ed0.liquivelte.js';
import { Link } from './framework7-liquivelte-link-hsa52eb758.liquivelte.js';

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/node_modules/framework7-liquivelte/components/nav-left.liquivelte generated by Svelte v3.50.0 */

function create_if_block(ctx) {
	let link;
	let current;

	link = new Link({
			props: {
				href: /*backLinkUrl*/ ctx[1] || '#',
				back: true,
				icon: "icon-back",
				force: /*backLinkForce*/ ctx[2] || undefined,
				class: !/*backLinkText*/ ctx[4] ? 'icon-only' : undefined,
				text: /*backLinkText*/ ctx[4],
				onClick: /*onBackClick*/ ctx[5]
			}
		});

	return {
		c() {
			create_component(link.$$.fragment);
		},
		l(nodes) {
			claim_component(link.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(link, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const link_changes = {};
			if (dirty & /*backLinkUrl*/ 2) link_changes.href = /*backLinkUrl*/ ctx[1] || '#';
			if (dirty & /*backLinkForce*/ 4) link_changes.force = /*backLinkForce*/ ctx[2] || undefined;
			if (dirty & /*backLinkText*/ 16) link_changes.class = !/*backLinkText*/ ctx[4] ? 'icon-only' : undefined;
			if (dirty & /*backLinkText*/ 16) link_changes.text = /*backLinkText*/ ctx[4];
			link.$set(link_changes);
		},
		i(local) {
			if (current) return;
			transition_in(link.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(link.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(link, detaching);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let t;
	let current;
	let if_block = /*backLink*/ ctx[0] && create_if_block(ctx);
	const default_slot_template = /*#slots*/ ctx[14].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[13], null);
	let div_levels = [{ class: /*computedClasses*/ ctx[3] }, restProps(/*$$restProps*/ ctx[6])];
	let div_data = {};

	for (let i = 0; i < div_levels.length; i += 1) {
		div_data = assign(div_data, div_levels[i]);
	}

	return {
		c() {
			div = element("div");
			if (if_block) if_block.c();
			t = space();
			if (default_slot) default_slot.c();
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			if (if_block) if_block.l(div_nodes);
			t = claim_space(div_nodes);
			if (default_slot) default_slot.l(div_nodes);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			set_attributes(div, div_data);
		},
		m(target, anchor) {
			insert_hydration(target, div, anchor);
			if (if_block) if_block.m(div, null);
			append_hydration(div, t);

			if (default_slot) {
				default_slot.m(div, null);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (/*backLink*/ ctx[0]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*backLink*/ 1) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(div, t);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}

			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 8192)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[13],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[13])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[13], dirty, null),
						null
					);
				}
			}

			set_attributes(div, div_data = get_spread_update(div_levels, [
				(!current || dirty & /*computedClasses*/ 8) && { class: /*computedClasses*/ ctx[3] },
				dirty & /*$$restProps*/ 64 && restProps(/*$$restProps*/ ctx[6])
			]));
		},
		i(local) {
			if (current) return;
			transition_in(if_block);
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (if_block) if_block.d();
			if (default_slot) default_slot.d(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let needBackLinkText;
	let backLinkText;

	const omit_props_names = [
		"importsSeek","classes","backLink","backLinkUrl","backLinkForce","backLinkShowText","sliding"
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
	let { backLink = undefined } = $$props;
	let { backLinkUrl = undefined } = $$props;
	let { backLinkForce = undefined } = $$props;
	let { backLinkShowText = undefined } = $$props;
	let { sliding = undefined } = $$props;

	let theme = useTheme(t => {
		$$invalidate(11, theme = t);
	});

	function onBackClick() {
		emit('clickBack');
		emit('backClick');
	}

	$$self.$$set = $$new_props => {
		$$invalidate(20, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(6, $$restProps = compute_rest_props($$props, omit_props_names));
		if ('importsSeek' in $$new_props) $$invalidate(7, importsSeek = $$new_props.importsSeek);
		if ('classes' in $$new_props) $$invalidate(8, classes = $$new_props.classes);
		if ('backLink' in $$new_props) $$invalidate(0, backLink = $$new_props.backLink);
		if ('backLinkUrl' in $$new_props) $$invalidate(1, backLinkUrl = $$new_props.backLinkUrl);
		if ('backLinkForce' in $$new_props) $$invalidate(2, backLinkForce = $$new_props.backLinkForce);
		if ('backLinkShowText' in $$new_props) $$invalidate(9, backLinkShowText = $$new_props.backLinkShowText);
		if ('sliding' in $$new_props) $$invalidate(10, sliding = $$new_props.sliding);
		if ('$$scope' in $$new_props) $$invalidate(13, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		$$invalidate(3, computedClasses = classNames(classes, 'left', { sliding }, colorClasses($$props)));

		if ($$self.$$.dirty & /*backLinkShowText*/ 512) {
			$$invalidate(12, needBackLinkText = backLinkShowText);
		}

		if ($$self.$$.dirty & /*needBackLinkText, theme*/ 6144) {
			if (typeof needBackLinkText === 'undefined') $$invalidate(12, needBackLinkText = theme && !theme.md);
		}

		if ($$self.$$.dirty & /*backLink, needBackLinkText*/ 4097) {
			$$invalidate(4, backLinkText = backLink !== true && needBackLinkText
			? backLink
			: undefined);
		}
	};

	$$props = exclude_internal_props($$props);

	return [
		backLink,
		backLinkUrl,
		backLinkForce,
		computedClasses,
		backLinkText,
		onBackClick,
		$$restProps,
		importsSeek,
		classes,
		backLinkShowText,
		sliding,
		theme,
		needBackLinkText,
		$$scope,
		slots
	];
}

class Nav_left extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			importsSeek: 7,
			classes: 8,
			backLink: 0,
			backLinkUrl: 1,
			backLinkForce: 2,
			backLinkShowText: 9,
			sliding: 10
		});
	}
}

export { Nav_left };
