import { SvelteComponent, init, safe_not_equal, element, space, text, claim_element, children, detach, claim_space, claim_text, attr, set_style, insert_hydration, append_hydration, noop, destroy_each, getContext, component_subscribe, onMount, assign, exclude_internal_props, src_url_equal, add_render_callback, add_resize_listener, tweened, binding_callbacks, identity } from './liquivelte-svelte-hse72de747.liquivelte.js';
import { cachedLiquid } from './liquivelte-liquid-hs18c7db27.liquivelte.js';
import './framework7-liquivelte-get-params-hs062c4e9e.liquivelte.js';
import './framework7-liquivelte-utils-hs98d1f35e.liquivelte.js';
import './framework7-liquivelte-params-list-hsa4b1a348.liquivelte.js';

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/src/sections/exploding-gallery.liquivelte generated by Svelte v3.50.0 */

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[36] = list[i];
	child_ctx[39] = i;

	const constants_0 = {
		first: /*index*/ child_ctx[39] === 0,
		index: /*index*/ child_ctx[39] + 1,
		index0: /*index*/ child_ctx[39],
		last: /*index*/ child_ctx[39] === /*section*/ child_ctx[4].blocks.length - 1,
		rindex: /*section*/ child_ctx[4].blocks.length - /*index*/ child_ctx[39],
		rindex0: /*section*/ child_ctx[4].blocks.length - /*index*/ child_ctx[39] - 1,
		length: /*section*/ child_ctx[4].blocks.length
	};

	child_ctx[37] = constants_0;
	return child_ctx;
}

// (124:6) {#each  section.blocks as block, index   }
function create_each_block(ctx) {
	let div;
	let picture;
	let source0;
	let source0_srcset_value;
	let t0;
	let source1;
	let source1_srcset_value;
	let t1;
	let img;
	let img_src_value;
	let img_alt_value;
	let t2;
	let div_resize_listener;

	function div_elementresize_handler() {
		/*div_elementresize_handler*/ ctx[23].call(div, /*forloop*/ ctx[37]);
	}

	return {
		c() {
			div = element("div");
			picture = element("picture");
			source0 = element("source");
			t0 = space();
			source1 = element("source");
			t1 = space();
			img = element("img");
			t2 = space();
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true, style: true });
			var div_nodes = children(div);
			picture = claim_element(div_nodes, "PICTURE", { class: true });
			var picture_nodes = children(picture);
			source0 = claim_element(picture_nodes, "SOURCE", { media: true, srcset: true });
			t0 = claim_space(picture_nodes);
			source1 = claim_element(picture_nodes, "SOURCE", { media: true, srcset: true });
			t1 = claim_space(picture_nodes);

			img = claim_element(picture_nodes, "IMG", {
				class: true,
				src: true,
				alt: true,
				style: true
			});

			picture_nodes.forEach(detach);
			t2 = claim_space(div_nodes);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(source0, "media", "(min-width:650px)");
			attr(source0, "srcset", source0_srcset_value = /*liquid*/ ctx[9].img_url(/*block*/ ctx[36].settings.image, 'x800'));
			attr(source1, "media", "(min-width:1200px)");
			attr(source1, "srcset", source1_srcset_value = /*liquid*/ ctx[9].img_url(/*block*/ ctx[36].settings.image, 'x800'));
			attr(img, "class", " svelte-12dbek");
			if (!src_url_equal(img.src, img_src_value = /*liquid*/ ctx[9].img_url(/*block*/ ctx[36].settings.image, 'x800'))) attr(img, "src", img_src_value);
			attr(img, "alt", img_alt_value = /*block*/ ctx[36].settings.image.alt);
			set_style(img, "width", "auto");
			attr(picture, "class", " svelte-12dbek");
			attr(div, "class", "image-container a svelte-12dbek");
			set_style(div, "--image-aspect-ratio", /*block*/ ctx[36].settings.image.aspect_ratio);
			add_render_callback(() => div_elementresize_handler.call(div));
		},
		m(target, anchor) {
			insert_hydration(target, div, anchor);
			append_hydration(div, picture);
			append_hydration(picture, source0);
			append_hydration(picture, t0);
			append_hydration(picture, source1);
			append_hydration(picture, t1);
			append_hydration(picture, img);
			append_hydration(div, t2);
			div_resize_listener = add_resize_listener(div, div_elementresize_handler.bind(div));
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;

			if (dirty[0] & /*section*/ 16 && source0_srcset_value !== (source0_srcset_value = /*liquid*/ ctx[9].img_url(/*block*/ ctx[36].settings.image, 'x800'))) {
				attr(source0, "srcset", source0_srcset_value);
			}

			if (dirty[0] & /*section*/ 16 && source1_srcset_value !== (source1_srcset_value = /*liquid*/ ctx[9].img_url(/*block*/ ctx[36].settings.image, 'x800'))) {
				attr(source1, "srcset", source1_srcset_value);
			}

			if (dirty[0] & /*section*/ 16 && !src_url_equal(img.src, img_src_value = /*liquid*/ ctx[9].img_url(/*block*/ ctx[36].settings.image, 'x800'))) {
				attr(img, "src", img_src_value);
			}

			if (dirty[0] & /*section*/ 16 && img_alt_value !== (img_alt_value = /*block*/ ctx[36].settings.image.alt)) {
				attr(img, "alt", img_alt_value);
			}

			if (dirty[0] & /*section*/ 16) {
				set_style(div, "--image-aspect-ratio", /*block*/ ctx[36].settings.image.aspect_ratio);
			}
		},
		d(detaching) {
			if (detaching) detach(div);
			div_resize_listener();
		}
	};
}

function create_fragment(ctx) {
	let div3;
	let div1;
	let div0;
	let t0;
	let div2;
	let t1;
	let div3_style_value;
	let each_value = /*section*/ ctx[4].blocks;
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			div3 = element("div");
			div1 = element("div");
			div0 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t0 = space();
			div2 = element("div");
			t1 = text(" ");
			this.h();
		},
		l(nodes) {
			div3 = claim_element(nodes, "DIV", { class: true, style: true });
			var div3_nodes = children(div3);
			div1 = claim_element(div3_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div0_nodes);
			}

			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t0 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true, style: true });
			var div2_nodes = children(div2);
			t1 = claim_text(div2_nodes, " ");
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div0, "class", "exp-gallery-stage svelte-12dbek");
			attr(div1, "class", "stage-container svelte-12dbek");
			attr(div2, "class", "exp-gallery-placeholder");
			set_style(div2, "height", /*liquid*/ ctx[9].plus(/*stageHeight*/ ctx[5], keepFor) + "px");
			attr(div3, "class", "exp-gallery-container svelte-12dbek");
			attr(div3, "style", div3_style_value = "--explode-gap: 1em; --explode-size-imbalance: 0%; --image-oversize: 1; " + /*animationVariables*/ ctx[6].join(';') + "; " + /*widthVariables*/ ctx[8].join(';') + "; " + /*heightVariables*/ ctx[7].join(';'));
		},
		m(target, anchor) {
			insert_hydration(target, div3, anchor);
			append_hydration(div3, div1);
			append_hydration(div1, div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div0, null);
			}

			/*div0_binding*/ ctx[24](div0);
			append_hydration(div3, t0);
			append_hydration(div3, div2);
			append_hydration(div2, t1);
			/*div3_binding*/ ctx[25](div3);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*section, itemWidths, itemHeights, liquid*/ 540) {
				each_value = /*section*/ ctx[4].blocks;
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div0, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if (dirty[0] & /*stageHeight*/ 32) {
				set_style(div2, "height", /*liquid*/ ctx[9].plus(/*stageHeight*/ ctx[5], keepFor) + "px");
			}

			if (dirty[0] & /*animationVariables, widthVariables, heightVariables*/ 448 && div3_style_value !== (div3_style_value = "--explode-gap: 1em; --explode-size-imbalance: 0%; --image-oversize: 1; " + /*animationVariables*/ ctx[6].join(';') + "; " + /*widthVariables*/ ctx[8].join(';') + "; " + /*heightVariables*/ ctx[7].join(';'))) {
				attr(div3, "style", div3_style_value);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div3);
			destroy_each(each_blocks, detaching);
			/*div0_binding*/ ctx[24](null);
			/*div3_binding*/ ctx[25](null);
		}
	};
}
let keepFor = 900;

function fc(e, t, r) {
	const n = e.find(e => e === t);

	return n || e.reduce((e, n) => {
		let o = Math.abs(e - t), i = Math.abs(n - t);

		return "higher" === r
		? n > t && i <= o ? n : e
		: "lower" === r ? n < t && i <= o ? n : e : void 0;
	});
}

function instance($$self, $$props, $$invalidate) {
	let widthVariables;
	let heightVariables;
	let $progress;
	let { importsSeek = 'lower' } = $$props;
	let themeImports = getContext('svelteProps') || {};
	let lec = getContext('lec') || {};
	(() => window.cicR = $$props.resetCicR ? 1 : window.cicR + 1)();
	const cic = window.cicR;
	const liquid = cachedLiquid(lec);
	let container, stage;
	let scrollY = 0;
	const section = {};
	let { sectionƒƒsettings } = $$props;

	try {
		section = section || {};
	} catch(e) {
		
	} /*whatever*/

	section.settings = themeImports['sectionƒƒsettings'].find(e => e.component_index == fc(themeImports['sectionƒƒsettings'].map(e => e.component_index), cic, importsSeek)).value;
	let { sectionƒƒblocks } = $$props;

	try {
		section = section || {};
	} catch(e) {
		
	} /*whatever*/

	section.blocks = themeImports['sectionƒƒblocks'].find(e => e.component_index == fc(themeImports['sectionƒƒblocks'].map(e => e.component_index), cic, importsSeek)).value;
	let { imbalance = themeImports['imbalance'].find(e => e.component_index == fc(themeImports['imbalance'].map(e => e.component_index), cic, importsSeek)).value } = $$props;
	const itemWidths = [];
	const itemHeights = [];
	let height = 0;
	let isTopped = 0;
	let cachedHeight = 0;
	let keptFor = 0;
	let progressPercent = 0;
	let stageHeight = 0;
	let fifthImage;

	let animations = [
		{
			from: 52,
			to: 77,
			valueFrom: 1,
			valueTo: 10,
			variable: '--explode-gap',
			unit: 'em'
		},
		{
			from: 33,
			to: 66,
			valueFrom: 0,
			valueTo: 20,
			variable: '--explode-size-imbalance',
			unit: '%'
		},
		{
			from: 66,
			to: 100,
			valueFrom: 1,
			valueTo: 2,
			variable: '--image-oversize'
		}
	];

	const progress = tweened(0, { duration: 100, easing: identity });
	component_subscribe($$self, progress, value => $$invalidate(22, $progress = value));

	// $: explodeGap = progressPercent > 33 ? `${1 + (10) * (progressPercent - 33) / 100}em` : '1em';
	let animationVariables = [1];

	onMount(() => {
		document.querySelector('.mainview .page-content').addEventListener('scroll', e => {
			$$invalidate(15, scrollY = e.target.scrollTop);
		});
	});

	function div_elementresize_handler(forloop) {
		itemWidths[forloop.index] = this.clientWidth;
		itemHeights[forloop.index] = this.clientHeight;
		$$invalidate(2, itemWidths);
		$$invalidate(3, itemHeights);
	}

	function div0_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			stage = $$value;
			$$invalidate(1, stage);
		});
	}

	function div3_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			container = $$value;
			$$invalidate(0, container);
		});
	}

	$$self.$$set = $$new_props => {
		$$invalidate(35, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ('importsSeek' in $$new_props) $$invalidate(11, importsSeek = $$new_props.importsSeek);
		if ('sectionƒƒsettings' in $$new_props) $$invalidate(12, sectionƒƒsettings = $$new_props.sectionƒƒsettings);
		if ('sectionƒƒblocks' in $$new_props) $$invalidate(13, sectionƒƒblocks = $$new_props.sectionƒƒblocks);
		if ('imbalance' in $$new_props) $$invalidate(14, imbalance = $$new_props.imbalance);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*fifthImage*/ 2097152) {
			if (!fifthImage) {
				$$invalidate(21, fifthImage = [...document.querySelectorAll('.image-container')][4].children[0]);
			}
		}

		if ($$self.$$.dirty[0] & /*container, stage, scrollY, isTopped, keptFor, cachedHeight, progressPercent*/ 1998851) {
			if (container && stage) {
				(container.offsetTop, $$invalidate(16, height = container.clientHeight), container.offsetTop < scrollY + window.innerHeight, container.offsetTop - (scrollY + window.innerHeight), $$invalidate(17, isTopped = container.offsetTop - scrollY < 0), $$invalidate(18, cachedHeight = isTopped ? cachedHeight : container.clientHeight), $$invalidate(19, keptFor = Math.abs(container.offsetTop - scrollY)), container.offsetTop - scrollY < 0 && keepFor > keptFor
				? keptFor
				: isTopped ? keepFor : 0, $$invalidate(20, progressPercent = (scrollY + window.innerHeight - container.offsetTop) / (container.clientHeight + window.innerHeight) * 100), $$invalidate(20, progressPercent = progressPercent > 0 ? progressPercent : 0));

				progress.set(progressPercent);
				$$invalidate(5, stageHeight = stage.clientHeight);
			} // console.log('stageHeight ', stageHeight);
			// console.log('progressPercent ', progressPercent);
		}

		if ($$self.$$.dirty[0] & /*$progress*/ 4194304) {
			$$invalidate(6, animationVariables = animations.map(animation => {
				let animationProgress = ($progress - animation.from) / (animation.to - animation.from);
				let value = animation.valueFrom + (animation.valueTo - animation.valueFrom) * animationProgress;

				value = value < animation.valueFrom
				? animation.valueFrom
				: value > animation.valueTo
					? animation.valueTo
					: Math.round(value * 1e6) / 1e6;

				return `${animation.variable}:${value}${animation.unit || ''}`;
			}));
		}

		if ($$self.$$.dirty[0] & /*itemWidths*/ 4) {
			$$invalidate(8, widthVariables = itemWidths.map((width, index) => `--item-${index}-width: ${width}px`));
		}

		if ($$self.$$.dirty[0] & /*itemHeights*/ 8) {
			$$invalidate(7, heightVariables = itemHeights.map((height, index) => `--item-${index}-height: ${height}px`));
		}
	};

	$$props = exclude_internal_props($$props);

	return [
		container,
		stage,
		itemWidths,
		itemHeights,
		section,
		stageHeight,
		animationVariables,
		heightVariables,
		widthVariables,
		liquid,
		progress,
		importsSeek,
		sectionƒƒsettings,
		sectionƒƒblocks,
		imbalance,
		scrollY,
		height,
		isTopped,
		cachedHeight,
		keptFor,
		progressPercent,
		fifthImage,
		$progress,
		div_elementresize_handler,
		div0_binding,
		div3_binding
	];
}

class Exploding_gallery extends SvelteComponent {
	constructor(options) {
		super();

		init(
			this,
			options,
			instance,
			create_fragment,
			safe_not_equal,
			{
				importsSeek: 11,
				sectionƒƒsettings: 12,
				sectionƒƒblocks: 13,
				imbalance: 14
			},
			null,
			[-1, -1]
		);
	}
}

export { Exploding_gallery as default };
