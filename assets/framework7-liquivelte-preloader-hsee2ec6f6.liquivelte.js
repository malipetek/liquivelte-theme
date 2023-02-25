import { SvelteComponent, init, safe_not_equal, assign, element, claim_element, children, detach, set_attributes, insert_hydration, get_spread_update, noop, compute_rest_props, getContext, exclude_internal_props, attr, append_hydration, space, claim_space, svg_element, claim_svg_element } from './liquivelte-svelte-hse72de747.liquivelte.js';
import { restProps, useTheme, classNames, colorClasses } from './framework7-liquivelte-hs390c8ed0.liquivelte.js';

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/node_modules/framework7-liquivelte/components/preloader.liquivelte generated by Svelte v3.50.0 */

function create_else_block(ctx) {
	let span;

	return {
		c() {
			span = element("span");
			this.h();
		},
		l(nodes) {
			span = claim_element(nodes, "SPAN", { class: true });
			children(span).forEach(detach);
			this.h();
		},
		h() {
			attr(span, "class", "preloader-inner");
		},
		m(target, anchor) {
			insert_hydration(target, span, anchor);
		},
		d(detaching) {
			if (detaching) detach(span);
		}
	};
}

// (60:34) 
function create_if_block_2(ctx) {
	let span1;
	let span0;

	return {
		c() {
			span1 = element("span");
			span0 = element("span");
			this.h();
		},
		l(nodes) {
			span1 = claim_element(nodes, "SPAN", { class: true });
			var span1_nodes = children(span1);
			span0 = claim_element(span1_nodes, "SPAN", { class: true });
			children(span0).forEach(detach);
			span1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(span0, "class", "preloader-inner-circle");
			attr(span1, "class", "preloader-inner");
		},
		m(target, anchor) {
			insert_hydration(target, span1, anchor);
			append_hydration(span1, span0);
		},
		d(detaching) {
			if (detaching) detach(span1);
		}
	};
}

// (49:31) 
function create_if_block_1(ctx) {
	let span8;
	let span0;
	let t0;
	let span1;
	let t1;
	let span2;
	let t2;
	let span3;
	let t3;
	let span4;
	let t4;
	let span5;
	let t5;
	let span6;
	let t6;
	let span7;

	return {
		c() {
			span8 = element("span");
			span0 = element("span");
			t0 = space();
			span1 = element("span");
			t1 = space();
			span2 = element("span");
			t2 = space();
			span3 = element("span");
			t3 = space();
			span4 = element("span");
			t4 = space();
			span5 = element("span");
			t5 = space();
			span6 = element("span");
			t6 = space();
			span7 = element("span");
			this.h();
		},
		l(nodes) {
			span8 = claim_element(nodes, "SPAN", { class: true });
			var span8_nodes = children(span8);
			span0 = claim_element(span8_nodes, "SPAN", { class: true });
			children(span0).forEach(detach);
			t0 = claim_space(span8_nodes);
			span1 = claim_element(span8_nodes, "SPAN", { class: true });
			children(span1).forEach(detach);
			t1 = claim_space(span8_nodes);
			span2 = claim_element(span8_nodes, "SPAN", { class: true });
			children(span2).forEach(detach);
			t2 = claim_space(span8_nodes);
			span3 = claim_element(span8_nodes, "SPAN", { class: true });
			children(span3).forEach(detach);
			t3 = claim_space(span8_nodes);
			span4 = claim_element(span8_nodes, "SPAN", { class: true });
			children(span4).forEach(detach);
			t4 = claim_space(span8_nodes);
			span5 = claim_element(span8_nodes, "SPAN", { class: true });
			children(span5).forEach(detach);
			t5 = claim_space(span8_nodes);
			span6 = claim_element(span8_nodes, "SPAN", { class: true });
			children(span6).forEach(detach);
			t6 = claim_space(span8_nodes);
			span7 = claim_element(span8_nodes, "SPAN", { class: true });
			children(span7).forEach(detach);
			span8_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(span0, "class", "preloader-inner-line");
			attr(span1, "class", "preloader-inner-line");
			attr(span2, "class", "preloader-inner-line");
			attr(span3, "class", "preloader-inner-line");
			attr(span4, "class", "preloader-inner-line");
			attr(span5, "class", "preloader-inner-line");
			attr(span6, "class", "preloader-inner-line");
			attr(span7, "class", "preloader-inner-line");
			attr(span8, "class", "preloader-inner");
		},
		m(target, anchor) {
			insert_hydration(target, span8, anchor);
			append_hydration(span8, span0);
			append_hydration(span8, t0);
			append_hydration(span8, span1);
			append_hydration(span8, t1);
			append_hydration(span8, span2);
			append_hydration(span8, t2);
			append_hydration(span8, span3);
			append_hydration(span8, t3);
			append_hydration(span8, span4);
			append_hydration(span8, t4);
			append_hydration(span8, span5);
			append_hydration(span8, t5);
			append_hydration(span8, span6);
			append_hydration(span8, t6);
			append_hydration(span8, span7);
		},
		d(detaching) {
			if (detaching) detach(span8);
		}
	};
}

// (43:2) {#if theme && theme.md}
function create_if_block(ctx) {
	let span;
	let svg;
	let circle;

	return {
		c() {
			span = element("span");
			svg = svg_element("svg");
			circle = svg_element("circle");
			this.h();
		},
		l(nodes) {
			span = claim_element(nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			svg = claim_svg_element(span_nodes, "svg", { viewBox: true });
			var svg_nodes = children(svg);
			circle = claim_svg_element(svg_nodes, "circle", { cx: true, cy: true, r: true });
			children(circle).forEach(detach);
			svg_nodes.forEach(detach);
			span_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(circle, "cx", "18");
			attr(circle, "cy", "18");
			attr(circle, "r", "16");
			attr(svg, "viewBox", "0 0 36 36");
			attr(span, "class", "preloader-inner");
		},
		m(target, anchor) {
			insert_hydration(target, span, anchor);
			append_hydration(span, svg);
			append_hydration(svg, circle);
		},
		d(detaching) {
			if (detaching) detach(span);
		}
	};
}

function create_fragment(ctx) {
	let span;

	function select_block_type(ctx, dirty) {
		if (/*theme*/ ctx[0] && /*theme*/ ctx[0].md) return create_if_block;
		if (/*theme*/ ctx[0] && /*theme*/ ctx[0].ios) return create_if_block_1;
		if (/*theme*/ ctx[0] && /*theme*/ ctx[0].aurora) return create_if_block_2;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	let span_levels = [
		{ style: /*preloaderStyle*/ ctx[1] },
		{ class: /*computedClasses*/ ctx[2] },
		restProps(/*$$restProps*/ ctx[3])
	];

	let span_data = {};

	for (let i = 0; i < span_levels.length; i += 1) {
		span_data = assign(span_data, span_levels[i]);
	}

	return {
		c() {
			span = element("span");
			if_block.c();
			this.h();
		},
		l(nodes) {
			span = claim_element(nodes, "SPAN", { style: true, class: true });
			var span_nodes = children(span);
			if_block.l(span_nodes);
			span_nodes.forEach(detach);
			this.h();
		},
		h() {
			set_attributes(span, span_data);
		},
		m(target, anchor) {
			insert_hydration(target, span, anchor);
			if_block.m(span, null);
		},
		p(ctx, [dirty]) {
			if (current_block_type !== (current_block_type = select_block_type(ctx))) {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(span, null);
				}
			}

			set_attributes(span, span_data = get_spread_update(span_levels, [
				dirty & /*preloaderStyle*/ 2 && { style: /*preloaderStyle*/ ctx[1] },
				{ class: /*computedClasses*/ ctx[2] },
				dirty & /*$$restProps*/ 8 && restProps(/*$$restProps*/ ctx[3])
			]));
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(span);
			if_block.d();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let sizeComputed;
	let preloaderStyle;
	const omit_props_names = ["importsSeek","style","classes","size"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { importsSeek = 'lower' } = $$props;
	getContext('svelteProps') || {};
	getContext('lec') || {};
	(() => window.cicR = $$props.resetCicR ? 1 : window.cicR + 1)();
	let { style = undefined } = $$props;
	let computedClasses = undefined;
	let { classes = '' } = $$props;
	let { size = undefined } = $$props;

	let theme = useTheme(t => {
		$$invalidate(0, theme = t);
	});

	$$self.$$set = $$new_props => {
		$$invalidate(13, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
		if ('importsSeek' in $$new_props) $$invalidate(5, importsSeek = $$new_props.importsSeek);
		if ('style' in $$new_props) $$invalidate(6, style = $$new_props.style);
		if ('classes' in $$new_props) $$invalidate(4, classes = $$new_props.classes);
		if ('size' in $$new_props) $$invalidate(7, size = $$new_props.size);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*size*/ 128) {
			$$invalidate(8, sizeComputed = size && typeof size === 'string' && size.indexOf('px') >= 0
			? size.replace('px', '')
			: size);
		}

		if ($$self.$$.dirty & /*style, sizeComputed*/ 320) {
			$$invalidate(1, preloaderStyle = ((style || '') + (sizeComputed
			? `;width: ${sizeComputed}px; height: ${sizeComputed}px; --f7-preloader-size: ${sizeComputed}px`
			: '')).replace(';;', ';'));
		}

		$$invalidate(4, classes = classNames(classes, 'preloader', colorClasses($$props)));
	};

	$$props = exclude_internal_props($$props);

	return [
		theme,
		preloaderStyle,
		computedClasses,
		$$restProps,
		classes,
		importsSeek,
		style,
		size,
		sizeComputed
	];
}

class Preloader extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			importsSeek: 5,
			style: 6,
			classes: 4,
			size: 7
		});
	}
}

export { Preloader };
