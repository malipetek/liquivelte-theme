import { SvelteComponent, init, safe_not_equal, empty, insert_hydration, noop, destroy_each, detach, getContext, assign, exclude_internal_props, element, claim_element, src_url_equal, attr, text, claim_text } from './liquivelte-svelte-hs8b900a8a.liquivelte.js';
import { cachedLiquid } from './liquivelte-liquid-hs9c1bba77.liquivelte.js';
import './framework7-liquivelte-get-params-hsf7b0a459.liquivelte.js';
import './framework7-liquivelte-utils-hs84a9c325.liquivelte.js';
import './framework7-liquivelte-params-list-hse5f5b7fb.liquivelte.js';

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/src/sections/collection-section.liquivelte generated by Svelte v3.50.0 */

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[8] = list[i];
	child_ctx[11] = i;

	const constants_0 = {
		first: /*index*/ child_ctx[11] === 0,
		index: /*index*/ child_ctx[11] + 1,
		index0: /*index*/ child_ctx[11],
		last: /*index*/ child_ctx[11] === section.blocks.length - 1,
		rindex: section.blocks.length - /*index*/ child_ctx[11],
		rindex0: section.blocks.length - /*index*/ child_ctx[11] - 1,
		length: section.blocks.length
	};

	child_ctx[9] = constants_0;
	return child_ctx;
}

// (42:34) 
function create_if_block_1(ctx) {
	let img;
	let img_src_value;

	return {
		c() {
			img = element("img");
			this.h();
		},
		l(nodes) {
			img = claim_element(nodes, "IMG", { src: true, alt: true });
			this.h();
		},
		h() {
			if (!src_url_equal(img.src, img_src_value = /*liquid*/ ctx[0].image_url(/*block*/ ctx[8].settings.src))) attr(img, "src", img_src_value);
			attr(img, "alt", /*block*/ ctx[8].settings.alt);
		},
		m(target, anchor) {
			insert_hydration(target, img, anchor);
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(img);
		}
	};
}

// (39:2) {#if block.type == 'text' }
function create_if_block(ctx) {
	let t0_value = /*block*/ ctx[8].settings.content + "";
	let t0;
	let t1;

	return {
		c() {
			t0 = text(t0_value);
			t1 = text("\n    adsa sdas asdas asd");
		},
		l(nodes) {
			t0 = claim_text(nodes, t0_value);
			t1 = claim_text(nodes, "\n    adsa sdas asdas asd");
		},
		m(target, anchor) {
			insert_hydration(target, t0, anchor);
			insert_hydration(target, t1, anchor);
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(t0);
			if (detaching) detach(t1);
		}
	};
}

// (29:0) {#each  section.blocks as block, index   }
function create_each_block(ctx) {
	let if_block_anchor;

	function select_block_type(ctx, dirty) {
		if (/*block*/ ctx[8].type == 'text') return create_if_block;
		if (/*block*/ ctx[8].type == 'image') return create_if_block_1;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type && current_block_type(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l(nodes) {
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_hydration(target, if_block_anchor, anchor);
		},
		p(ctx, dirty) {
			if (if_block) if_block.p(ctx, dirty);
		},
		d(detaching) {
			if (if_block) {
				if_block.d(detaching);
			}

			if (detaching) detach(if_block_anchor);
		}
	};
}

function create_fragment(ctx) {
	let each_1_anchor;
	let each_value = section.blocks;
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l(nodes) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_hydration(target, each_1_anchor, anchor);
		},
		p(ctx, [dirty]) {
			if (dirty & /*section, liquid*/ 1) {
				each_value = section.blocks;
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			destroy_each(each_blocks, detaching);
			if (detaching) detach(each_1_anchor);
		}
	};
}

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
	let { importsSeek = 'lower' } = $$props;
	let themeImports = getContext('svelteProps') || {};
	let lec = getContext('lec') || {};
	(() => window.cicR = $$props.resetCicR ? 1 : window.cicR + 1)();
	const cic = window.cicR;
	const liquid = cachedLiquid(lec);
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

	$$self.$$set = $$new_props => {
		$$invalidate(7, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ('importsSeek' in $$new_props) $$invalidate(1, importsSeek = $$new_props.importsSeek);
		if ('sectionƒƒsettings' in $$new_props) $$invalidate(2, sectionƒƒsettings = $$new_props.sectionƒƒsettings);
		if ('sectionƒƒblocks' in $$new_props) $$invalidate(3, sectionƒƒblocks = $$new_props.sectionƒƒblocks);
	};

	$$props = exclude_internal_props($$props);
	return [liquid, importsSeek, sectionƒƒsettings, sectionƒƒblocks];
}

class Collection_section extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			importsSeek: 1,
			sectionƒƒsettings: 2,
			sectionƒƒblocks: 3
		});
	}
}

export { Collection_section as default };
