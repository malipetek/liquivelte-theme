import { SvelteComponent, init, safe_not_equal, element, space, text, claim_element, children, claim_space, claim_text, detach, attr, set_style, insert_hydration, append_hydration, group_outros, transition_out, check_outros, transition_in, set_data, getContext, onMount, tick, assign, exclude_internal_props, create_component, claim_component, mount_component, destroy_component, empty, destroy_each, binding_callbacks } from './liquivelte-svelte-hs75fa7249.liquivelte.js';
import './framework7-liquivelte-hs7cccafc5.liquivelte.js';
import { Swiper_slide } from './framework7-liquivelte-swiper-slide-hsc173c79f.liquivelte.js';
import { Swiper_1 } from './framework7-liquivelte-swiper-hs7cef8298.liquivelte.js';
import { freeMode, Mousewheel } from './framework7-liquivelte-get-params-hsf7b0a459.liquivelte.js';
import { Image } from './header-hsbcd51f53.liquivelte.js';
import './framework7-liquivelte-popup-hsb6d11cdb.liquivelte.js';
import './framework7-liquivelte-view-hsd7ca4772.liquivelte.js';
import './framework7-liquivelte-router-context-provider-hs6ce7143b.liquivelte.js';
import './framework7-liquivelte-login-screen-hse2891b0e.liquivelte.js';
import './framework7-liquivelte-sheet-hs1878d772.liquivelte.js';
import './framework7-liquivelte-popover-hs5f0433a4.liquivelte.js';
import './framework7-liquivelte-panel-hs631fa697.liquivelte.js';
import './framework7-liquivelte-mount-swiper-hs2e0ee625.liquivelte.js';
import './framework7-liquivelte-utils-hs84a9c325.liquivelte.js';
import './framework7-liquivelte-get-changed-params-hse7431b82.liquivelte.js';
import './framework7-liquivelte-params-list-hse5f5b7fb.liquivelte.js';
import './framework7-liquivelte-update-swiper-hs2234c08f.liquivelte.js';
import './store.js-hs3dbbde31.liquivelte.js';
import './product-carousel-hs2c26b0c9.liquivelte.js';
import './framework7-liquivelte-block-title-hs43eb0265.liquivelte.js';
import './framework7-liquivelte-block-hs8b98a9a4.liquivelte.js';
import './liquivelte-liquid-hsdedf7d33.liquivelte.js';
import './framework7-liquivelte-card-content-hs237af4ce.liquivelte.js';
import './framework7-liquivelte-card-footer-hs326c719f.liquivelte.js';
import './framework7-liquivelte-card-header-hsd8d20cd2.liquivelte.js';
import './framework7-liquivelte-card-hs4499b808.liquivelte.js';
import './framework7-liquivelte-link-hs3e2e6c10.liquivelte.js';
import './framework7-liquivelte-use-icon-hs37f50cff.liquivelte.js';
import './framework7-liquivelte-icon-hse2d53d53.liquivelte.js';
import './framework7-liquivelte-badge-hs78101d76.liquivelte.js';
import './framework7-liquivelte-button-hsc5076004.liquivelte.js';
import './framework7-liquivelte-preloader-hsc20082b2.liquivelte.js';
import './framework7-liquivelte-stepper-hs3744d602.liquivelte.js';
import './framework7-liquivelte-list-item-hsdf08093c.liquivelte.js';
import './framework7-liquivelte-list-hsb776d5a5.liquivelte.js';
import './framework7-liquivelte-accordion-content-hs55062447.liquivelte.js';
import './framework7-liquivelte-col-hs603a52df.liquivelte.js';
import './framework7-liquivelte-row-hs5b282b43.liquivelte.js';
import './framework7-liquivelte-appbar-hs2f4b6db1.liquivelte.js';
import './framework7-liquivelte-page-hsa81a261d.liquivelte.js';
import './framework7-liquivelte-page-content-hse544cda8.liquivelte.js';

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/src/sections/slider-general/blocks/image-with-card.liquivelte generated by Svelte v3.50.0 */

function create_else_block$1(ctx) {
	let image;
	let current;

	image = new Image({
			props: {
				source: /*block*/ ctx[0].settings.image,
				sizes: "100vw@fixed",
				loading: "lazy"
			}
		});

	return {
		c() {
			create_component(image.$$.fragment);
		},
		l(nodes) {
			claim_component(image.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(image, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const image_changes = {};
			if (dirty & /*block*/ 1) image_changes.source = /*block*/ ctx[0].settings.image;
			image.$set(image_changes);
		},
		i(local) {
			if (current) return;
			transition_in(image.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(image.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(image, detaching);
		}
	};
}

// (37:0) {#if forloop.index == 1 }
function create_if_block$1(ctx) {
	let image;
	let current;

	image = new Image({
			props: {
				source: /*block*/ ctx[0].settings.image,
				sizes: "100vw@fixed",
				loading: "eager"
			}
		});

	return {
		c() {
			create_component(image.$$.fragment);
		},
		l(nodes) {
			claim_component(image.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(image, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const image_changes = {};
			if (dirty & /*block*/ 1) image_changes.source = /*block*/ ctx[0].settings.image;
			image.$set(image_changes);
		},
		i(local) {
			if (current) return;
			transition_in(image.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(image.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(image, detaching);
		}
	};
}

function create_fragment$1(ctx) {
	let div1;
	let current_block_type_index;
	let if_block;
	let t0;
	let div0;
	let h2;
	let t1_value = /*block*/ ctx[0].settings.card_title + "";
	let t1;
	let t2;
	let h3;
	let t3_value = /*block*/ ctx[0].settings.card_subtitle + "";
	let t3;
	let t4;
	let p;
	let raw_value = (/*block*/ ctx[0].settings.card_content || '') + "";
	let current;
	const if_block_creators = [create_if_block$1, create_else_block$1];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*forloop*/ ctx[1].index == 1) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c() {
			div1 = element("div");
			if_block.c();
			t0 = space();
			div0 = element("div");
			h2 = element("h2");
			t1 = text(t1_value);
			t2 = space();
			h3 = element("h3");
			t3 = text(t3_value);
			t4 = space();
			p = element("p");
			this.h();
		},
		l(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			if_block.l(div1_nodes);
			t0 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true, style: true });
			var div0_nodes = children(div0);
			h2 = claim_element(div0_nodes, "H2", {});
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, t1_value);
			h2_nodes.forEach(detach);
			t2 = claim_space(div0_nodes);
			h3 = claim_element(div0_nodes, "H3", {});
			var h3_nodes = children(h3);
			t3 = claim_text(h3_nodes, t3_value);
			h3_nodes.forEach(detach);
			t4 = claim_space(div0_nodes);
			p = claim_element(div0_nodes, "P", {});
			var p_nodes = children(p);
			p_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div0, "class", "card svelte-1y26zq9");
			set_style(div0, "top", /*block*/ ctx[0].settings.card_top + "%");
			set_style(div0, "left", /*block*/ ctx[0].settings.card_left + "%");
			set_style(div0, "width", /*block*/ ctx[0].settings.card_width + "%");
			set_style(div0, "height", /*block*/ ctx[0].settings.card_height + "%");
			attr(div1, "class", "relative");
		},
		m(target, anchor) {
			insert_hydration(target, div1, anchor);
			if_blocks[current_block_type_index].m(div1, null);
			append_hydration(div1, t0);
			append_hydration(div1, div0);
			append_hydration(div0, h2);
			append_hydration(h2, t1);
			append_hydration(div0, t2);
			append_hydration(div0, h3);
			append_hydration(h3, t3);
			append_hydration(div0, t4);
			append_hydration(div0, p);
			p.innerHTML = raw_value;
			current = true;
		},
		p(ctx, [dirty]) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				transition_in(if_block, 1);
				if_block.m(div1, t0);
			}

			if ((!current || dirty & /*block*/ 1) && t1_value !== (t1_value = /*block*/ ctx[0].settings.card_title + "")) set_data(t1, t1_value);
			if ((!current || dirty & /*block*/ 1) && t3_value !== (t3_value = /*block*/ ctx[0].settings.card_subtitle + "")) set_data(t3, t3_value);
			if ((!current || dirty & /*block*/ 1) && raw_value !== (raw_value = (/*block*/ ctx[0].settings.card_content || '') + "")) p.innerHTML = raw_value;
			if (!current || dirty & /*block*/ 1) {
				set_style(div0, "top", /*block*/ ctx[0].settings.card_top + "%");
			}

			if (!current || dirty & /*block*/ 1) {
				set_style(div0, "left", /*block*/ ctx[0].settings.card_left + "%");
			}

			if (!current || dirty & /*block*/ 1) {
				set_style(div0, "width", /*block*/ ctx[0].settings.card_width + "%");
			}

			if (!current || dirty & /*block*/ 1) {
				set_style(div0, "height", /*block*/ ctx[0].settings.card_height + "%");
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div1);
			if_blocks[current_block_type_index].d();
		}
	};
}

function instance$1($$self, $$props, $$invalidate) {
	let { importsSeek = 'lower' } = $$props;
	getContext('svelteProps') || {};
	getContext('lec') || {};
	(() => window.cicR = $$props.resetCicR ? 1 : window.cicR + 1)();
	let { block } = $$props;
	let { forloop } = $$props;

	onMount(() => {
		console.log('mounted', block);
		tick();
	});

	console.log('block w/ card', block);

	$$self.$$set = $$new_props => {
		$$invalidate(7, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ('importsSeek' in $$new_props) $$invalidate(2, importsSeek = $$new_props.importsSeek);
		if ('block' in $$new_props) $$invalidate(0, block = $$new_props.block);
		if ('forloop' in $$new_props) $$invalidate(1, forloop = $$new_props.forloop);
	};

	$$props = exclude_internal_props($$props);
	return [block, forloop, importsSeek];
}

class Image_with_card extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { importsSeek: 2, block: 0, forloop: 1 });
	}
}

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/src/sections/slider-general/index.liquivelte generated by Svelte v3.50.0 */

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[11] = list[i];
	child_ctx[14] = i;

	const constants_0 = {
		first: /*index*/ child_ctx[14] === 0,
		index: /*index*/ child_ctx[14] + 1,
		index0: /*index*/ child_ctx[14],
		last: /*index*/ child_ctx[14] === /*section*/ child_ctx[0].blocks.length - 1,
		rindex: /*section*/ child_ctx[0].blocks.length - /*index*/ child_ctx[14],
		rindex0: /*section*/ child_ctx[0].blocks.length - /*index*/ child_ctx[14] - 1,
		length: /*section*/ child_ctx[0].blocks.length
	};

	child_ctx[12] = constants_0;
	return child_ctx;
}

// (33:2) {#if section.settings.flush_with_header }
function create_if_block_3(ctx) {
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
			attr(div, "class", "flush-shadow");
		},
		m(target, anchor) {
			insert_hydration(target, div, anchor);
		},
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

// (69:43) 
function create_if_block_2(ctx) {
	let swiperslide;
	let current;

	swiperslide = new Swiper_slide({
			props: {
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(swiperslide.$$.fragment);
		},
		l(nodes) {
			claim_component(swiperslide.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(swiperslide, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const swiperslide_changes = {};

			if (dirty & /*$$scope, section*/ 32769) {
				swiperslide_changes.$$scope = { dirty, ctx };
			}

			swiperslide.$set(swiperslide_changes);
		},
		i(local) {
			if (current) return;
			transition_in(swiperslide.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(swiperslide.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(swiperslide, detaching);
		}
	};
}

// (52:6) {#if block.type == 'image' }
function create_if_block(ctx) {
	let swiperslide;
	let current;

	swiperslide = new Swiper_slide({
			props: {
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(swiperslide.$$.fragment);
		},
		l(nodes) {
			claim_component(swiperslide.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(swiperslide, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const swiperslide_changes = {};

			if (dirty & /*$$scope, section*/ 32769) {
				swiperslide_changes.$$scope = { dirty, ctx };
			}

			swiperslide.$set(swiperslide_changes);
		},
		i(local) {
			if (current) return;
			transition_in(swiperslide.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(swiperslide.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(swiperslide, detaching);
		}
	};
}

// (70:8) <SwiperSlide   >
function create_default_slot_2(ctx) {
	let imagewithcard;
	let t;
	let current;

	imagewithcard = new Image_with_card({
			props: {
				block: /*block*/ ctx[11],
				forloop: /*forloop*/ ctx[12]
			}
		});

	return {
		c() {
			create_component(imagewithcard.$$.fragment);
			t = space();
		},
		l(nodes) {
			claim_component(imagewithcard.$$.fragment, nodes);
			t = claim_space(nodes);
		},
		m(target, anchor) {
			mount_component(imagewithcard, target, anchor);
			insert_hydration(target, t, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const imagewithcard_changes = {};
			if (dirty & /*section*/ 1) imagewithcard_changes.block = /*block*/ ctx[11];
			if (dirty & /*section*/ 1) imagewithcard_changes.forloop = /*forloop*/ ctx[12];
			imagewithcard.$set(imagewithcard_changes);
		},
		i(local) {
			if (current) return;
			transition_in(imagewithcard.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(imagewithcard.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(imagewithcard, detaching);
			if (detaching) detach(t);
		}
	};
}

// (60:10) {:else}
function create_else_block(ctx) {
	let image;
	let current;

	image = new Image({
			props: {
				source: /*block*/ ctx[11].settings.image,
				sizes: "100vw@fixed",
				loading: "lazy"
			}
		});

	return {
		c() {
			create_component(image.$$.fragment);
		},
		l(nodes) {
			claim_component(image.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(image, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const image_changes = {};
			if (dirty & /*section*/ 1) image_changes.source = /*block*/ ctx[11].settings.image;
			image.$set(image_changes);
		},
		i(local) {
			if (current) return;
			transition_in(image.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(image.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(image, detaching);
		}
	};
}

// (54:10) {#if forloop.index == 1 }
function create_if_block_1(ctx) {
	let image;
	let current;

	image = new Image({
			props: {
				source: /*block*/ ctx[11].settings.image,
				sizes: "100vw@fixed",
				loading: "eager"
			}
		});

	return {
		c() {
			create_component(image.$$.fragment);
		},
		l(nodes) {
			claim_component(image.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(image, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const image_changes = {};
			if (dirty & /*section*/ 1) image_changes.source = /*block*/ ctx[11].settings.image;
			image.$set(image_changes);
		},
		i(local) {
			if (current) return;
			transition_in(image.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(image.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(image, detaching);
		}
	};
}

// (53:8) <SwiperSlide   >
function create_default_slot_1(ctx) {
	let current_block_type_index;
	let if_block;
	let t;
	let current;
	const if_block_creators = [create_if_block_1, create_else_block];
	const if_blocks = [];

	function select_block_type_1(ctx, dirty) {
		if (/*forloop*/ ctx[12].index == 1) return 0;
		return 1;
	}

	current_block_type_index = select_block_type_1(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c() {
			if_block.c();
			t = space();
		},
		l(nodes) {
			if_block.l(nodes);
			t = claim_space(nodes);
		},
		m(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			insert_hydration(target, t, anchor);
			current = true;
		},
		p(ctx, dirty) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type_1(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				transition_in(if_block, 1);
				if_block.m(t.parentNode, t);
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) detach(t);
		}
	};
}

// (42:4) {#each  section.blocks as block, index   }
function create_each_block(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block, create_if_block_2];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*block*/ ctx[11].type == 'image') return 0;
		if (/*block*/ ctx[11].type == 'image-card') return 1;
		return -1;
	}

	if (~(current_block_type_index = select_block_type(ctx))) {
		if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
	}

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
			if (~current_block_type_index) {
				if_blocks[current_block_type_index].m(target, anchor);
			}

			insert_hydration(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if (~current_block_type_index) {
					if_blocks[current_block_type_index].p(ctx, dirty);
				}
			} else {
				if (if_block) {
					group_outros();

					transition_out(if_blocks[previous_block_index], 1, 1, () => {
						if_blocks[previous_block_index] = null;
					});

					check_outros();
				}

				if (~current_block_type_index) {
					if_block = if_blocks[current_block_type_index];

					if (!if_block) {
						if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
						if_block.c();
					} else {
						if_block.p(ctx, dirty);
					}

					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				} else {
					if_block = null;
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (~current_block_type_index) {
				if_blocks[current_block_type_index].d(detaching);
			}

			if (detaching) detach(if_block_anchor);
		}
	};
}

// (37:2) <Swiper  freemode="{ { enabled: true, sticky: true } }"            mousewheel="{ { forceToAxis: true, sensitivity: 1.5 } }"           modules="{[FreeMode, Mousewheel]}"            preloadImages="{false}"          >
function create_default_slot(ctx) {
	let each_1_anchor;
	let current;
	let each_value = /*section*/ ctx[0].blocks;
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

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
			current = true;
		},
		p(ctx, dirty) {
			if (dirty & /*section*/ 1) {
				each_value = /*section*/ ctx[0].blocks;
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			destroy_each(each_blocks, detaching);
			if (detaching) detach(each_1_anchor);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let t;
	let swiper;
	let current;
	let if_block = /*section*/ ctx[0].settings.flush_with_header && create_if_block_3();

	swiper = new Swiper_1({
			props: {
				freemode: { enabled: true, sticky: true },
				mousewheel: { forceToAxis: true, sensitivity: 1.5 },
				modules: [freeMode, Mousewheel],
				preloadImages: false,
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			div = element("div");
			if (if_block) if_block.c();
			t = space();
			create_component(swiper.$$.fragment);
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			if (if_block) if_block.l(div_nodes);
			t = claim_space(div_nodes);
			claim_component(swiper.$$.fragment, div_nodes);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div, "class", "relative");
		},
		m(target, anchor) {
			insert_hydration(target, div, anchor);
			if (if_block) if_block.m(div, null);
			append_hydration(div, t);
			mount_component(swiper, div, null);
			/*div_binding*/ ctx[5](div);
			current = true;
		},
		p(ctx, [dirty]) {
			if (/*section*/ ctx[0].settings.flush_with_header) {
				if (if_block) ; else {
					if_block = create_if_block_3();
					if_block.c();
					if_block.m(div, t);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			const swiper_changes = {};

			if (dirty & /*$$scope, section*/ 32769) {
				swiper_changes.$$scope = { dirty, ctx };
			}

			swiper.$set(swiper_changes);
		},
		i(local) {
			if (current) return;
			transition_in(swiper.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(swiper.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (if_block) if_block.d();
			destroy_component(swiper);
			/*div_binding*/ ctx[5](null);
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
	getContext('lec') || {};
	(() => window.cicR = $$props.resetCicR ? 1 : window.cicR + 1)();
	const cic = window.cicR;
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
	let container;

	function div_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			container = $$value;
			$$invalidate(1, container);
		});
	}

	$$self.$$set = $$new_props => {
		$$invalidate(10, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ('importsSeek' in $$new_props) $$invalidate(2, importsSeek = $$new_props.importsSeek);
		if ('sectionƒƒsettings' in $$new_props) $$invalidate(3, sectionƒƒsettings = $$new_props.sectionƒƒsettings);
		if ('sectionƒƒblocks' in $$new_props) $$invalidate(4, sectionƒƒblocks = $$new_props.sectionƒƒblocks);
	};

	$$props = exclude_internal_props($$props);

	return [
		section,
		container,
		importsSeek,
		sectionƒƒsettings,
		sectionƒƒblocks,
		div_binding
	];
}

class Slider_general extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			importsSeek: 2,
			sectionƒƒsettings: 3,
			sectionƒƒblocks: 4
		});
	}
}

export { Slider_general as default };
