import { SvelteComponent, init, safe_not_equal, element, text, space, claim_element, children, claim_text, detach, claim_space, attr, toggle_class, set_style, add_render_callback, insert_hydration, append_hydration, add_resize_listener, listen, action_destroyer, set_data, transition_in, check_outros, transition_out, create_bidirectional_transition, destroy_each, run_all, component_subscribe, getContext, set_store_value, spring, assign, exclude_internal_props, binding_callbacks, bind, create_component, claim_component, src_url_equal, mount_component, add_flush_callback, quintInOut, destroy_component, group_outros, is_function } from './liquivelte-svelte-hs8b900a8a.liquivelte.js';
import { cachedLiquid } from './liquivelte-liquid-hs9c1bba77.liquivelte.js';
import { Loadable, Quantity_box, Icon } from './header-hs7f598b85.liquivelte.js';
import { cartStore, cartOpen } from './store.js-hs786c2939.liquivelte.js';
import { disableScrollOnBody, enableScrollOnBody } from './product-carousel-hs14c475a1.liquivelte.js';
import './framework7-liquivelte-get-params-hsf7b0a459.liquivelte.js';
import './framework7-liquivelte-utils-hs84a9c325.liquivelte.js';
import './framework7-liquivelte-params-list-hse5f5b7fb.liquivelte.js';
import './framework7-liquivelte-hs01c0185d.liquivelte.js';
import './framework7-liquivelte-popup-hsd1b443d8.liquivelte.js';
import './framework7-liquivelte-view-hsa1941a4c.liquivelte.js';
import './framework7-liquivelte-router-context-provider-hsad0db293.liquivelte.js';
import './framework7-liquivelte-login-screen-hs10876efe.liquivelte.js';
import './framework7-liquivelte-sheet-hsdde39230.liquivelte.js';
import './framework7-liquivelte-popover-hsfee652eb.liquivelte.js';
import './framework7-liquivelte-panel-hs292f30bc.liquivelte.js';
import './framework7-liquivelte-link-hs0fd8a504.liquivelte.js';
import './framework7-liquivelte-use-icon-hs960d614e.liquivelte.js';
import './framework7-liquivelte-icon-hs1118943e.liquivelte.js';
import './framework7-liquivelte-badge-hs7f0278e4.liquivelte.js';
import './framework7-liquivelte-list-item-hs86ef6f23.liquivelte.js';
import './framework7-liquivelte-list-hs875e3969.liquivelte.js';
import './framework7-liquivelte-accordion-content-hs79a4f9f5.liquivelte.js';
import './framework7-liquivelte-block-title-hs296de5dc.liquivelte.js';
import './framework7-liquivelte-block-hsf6073460.liquivelte.js';
import './framework7-liquivelte-button-hsf3bf6e97.liquivelte.js';
import './framework7-liquivelte-preloader-hse20e7ba5.liquivelte.js';
import './framework7-liquivelte-col-hs53645d82.liquivelte.js';
import './framework7-liquivelte-row-hs656d33d4.liquivelte.js';
import './framework7-liquivelte-stepper-hs2317c2c8.liquivelte.js';
import './framework7-liquivelte-appbar-hs7ed8996c.liquivelte.js';
import './framework7-liquivelte-page-hs8f08dad3.liquivelte.js';
import './framework7-liquivelte-page-content-hs724da838.liquivelte.js';
import './framework7-liquivelte-swiper-slide-hsc608f6d3.liquivelte.js';
import './framework7-liquivelte-swiper-hs96468327.liquivelte.js';
import './framework7-liquivelte-mount-swiper-hs2e0ee625.liquivelte.js';
import './framework7-liquivelte-get-changed-params-hse7431b82.liquivelte.js';
import './framework7-liquivelte-update-swiper-hs2234c08f.liquivelte.js';
import './framework7-liquivelte-card-content-hs3f4af6ef.liquivelte.js';
import './framework7-liquivelte-card-footer-hs1b97a5bf.liquivelte.js';
import './framework7-liquivelte-card-header-hs0b4f7c78.liquivelte.js';
import './framework7-liquivelte-card-hs3e5699f3.liquivelte.js';

function swipe(node, p = {}) {

    // document.addEventListener('mousemove', move);
    // document.addEventListener('touchmove', move);

    node.addEventListener('mouseup', stopMove);
    node.addEventListener('touchend', stopMove);
    
	node.addEventListener('mousedown', startMove);
	node.addEventListener('touchstart', startMove);

    let x = 0;
    let y = 0;

    function startMove(event) {
        x = event.changedTouches ? event.changedTouches[0].clientX : event.clientX;
        y = event.changedTouches ? event.changedTouches[0].clientY : event.clientY;

		node.dispatchEvent(new CustomEvent('swipeStart', {
			detail: { x, y }
		}));
        // console.log('start move');
		window.addEventListener('mousemove', move);
		window.addEventListener('mouseup', stopMove);
		window.addEventListener('touchmove', move);
		window.addEventListener('touchend', stopMove);
    }
    function move(event) {
        // console.log('startmove');
        const dx = (event.changedTouches ? event.changedTouches[0].clientX : event.clientX) - x;
        const dy = (event.changedTouches ? event.changedTouches[0].clientY : event.clientY) - y;

		x = event.changedTouches ? event.changedTouches[0].clientX : event.clientX;
		y = event.changedTouches ? event.changedTouches[0].clientY : event.clientY;

		node.dispatchEvent(new CustomEvent('swipe', {
			detail: { x, y, dx, dy }
		}));
    }
    function stopMove(event) {
        // console.log('stopmove');
        x = event.changedTouches ? event.changedTouches[0].clientX : event.clientX;
        y = event.changedTouches ? event.changedTouches[0].clientY : event.clientY;

        node.dispatchEvent(new CustomEvent('swipeEnd', {
			detail: { x, y }
		}));
        window.removeEventListener('mousemove', move);
		window.removeEventListener('mouseup', stopMove);
		window.removeEventListener('touchmove', move);
		window.removeEventListener('touchend', stopMove);

    }
    return {
        update(p) {
        },
        destroy() {
            document.removeEventListener('mousemove', move);
            document.removeEventListener('touchmove', move);
            document.removeEventListener('lostpointercapture', stopMove);
            document.removeEventListener('touchcancel', stopMove);
        }
    }
}

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/src/sections/main-cart.liquivelte generated by Svelte v3.50.0 */

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[31] = list[i];
	child_ctx[34] = i;

	const constants_0 = {
		first: /*index*/ child_ctx[34] === 0,
		index: /*index*/ child_ctx[34] + 1,
		index0: /*index*/ child_ctx[34],
		last: /*index*/ child_ctx[34] === /*cart*/ child_ctx[0].items.length - 1,
		rindex: /*cart*/ child_ctx[0].items.length - /*index*/ child_ctx[34],
		rindex0: /*cart*/ child_ctx[0].items.length - /*index*/ child_ctx[34] - 1,
		length: /*cart*/ child_ctx[0].items.length
	};

	child_ctx[32] = constants_0;
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[35] = list[i];
	child_ctx[34] = i;

	const constants_0 = {
		first: /*index*/ child_ctx[34] === 0,
		index: /*index*/ child_ctx[34] + 1,
		index0: /*index*/ child_ctx[34],
		last: /*index*/ child_ctx[34] === /*item*/ child_ctx[31].variant_options.length - 1,
		rindex: /*item*/ child_ctx[31].variant_options.length - /*index*/ child_ctx[34],
		rindex0: /*item*/ child_ctx[31].variant_options.length - /*index*/ child_ctx[34] - 1,
		length: /*item*/ child_ctx[31].variant_options.length
	};

	child_ctx[32] = constants_0;
	return child_ctx;
}

// (130:9) {#each  item.variant_options as option, index   }
function create_each_block_1(ctx) {
	let span;
	let t0_value = /*option*/ ctx[35] + "";
	let t0;
	let t1;
	let br;

	return {
		c() {
			span = element("span");
			t0 = text(t0_value);
			t1 = space();
			br = element("br");
			this.h();
		},
		l(nodes) {
			span = claim_element(nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t0 = claim_text(span_nodes, t0_value);
			span_nodes.forEach(detach);
			t1 = claim_space(nodes);
			br = claim_element(nodes, "BR", {});
			this.h();
		},
		h() {
			attr(span, "class", "text-gray-500 text-base line-item-option");
		},
		m(target, anchor) {
			insert_hydration(target, span, anchor);
			append_hydration(span, t0);
			insert_hydration(target, t1, anchor);
			insert_hydration(target, br, anchor);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*cart*/ 1 && t0_value !== (t0_value = /*option*/ ctx[35] + "")) set_data(t0, t0_value);
		},
		d(detaching) {
			if (detaching) detach(span);
			if (detaching) detach(t1);
			if (detaching) detach(br);
		}
	};
}

// (144:7) <Loadable  bind:loading  >
function create_default_slot_1(ctx) {
	let quantitybox;
	let current;

	quantitybox = new Quantity_box({
			props: {
				minimum: /*min_amounts_data*/ ctx[10][/*item*/ ctx[31].id],
				quantity: /*item*/ ctx[31].quantity
			}
		});

	quantitybox.$on("qtychange", function () {
		if (is_function(quantityChange.bind(/*item*/ ctx[31]))) quantityChange.bind(/*item*/ ctx[31]).apply(this, arguments);
	});

	return {
		c() {
			create_component(quantitybox.$$.fragment);
		},
		l(nodes) {
			claim_component(quantitybox.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(quantitybox, target, anchor);
			current = true;
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			const quantitybox_changes = {};
			if (dirty[0] & /*cart*/ 1) quantitybox_changes.minimum = /*min_amounts_data*/ ctx[10][/*item*/ ctx[31].id];
			if (dirty[0] & /*cart*/ 1) quantitybox_changes.quantity = /*item*/ ctx[31].quantity;
			quantitybox.$set(quantitybox_changes);
		},
		i(local) {
			if (current) return;
			transition_in(quantitybox.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(quantitybox.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(quantitybox, detaching);
		}
	};
}

// (149:7) <Loadable  bind:loading  >
function create_default_slot(ctx) {
	let div;
	let icon;
	let current;
	let mounted;
	let dispose;

	icon = new Icon({
			props: { name: "icon-garbage", color: "#a6a6a6" }
		});

	function click_handler() {
		return /*click_handler*/ ctx[19](/*item*/ ctx[31]);
	}

	return {
		c() {
			div = element("div");
			create_component(icon.$$.fragment);
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(icon.$$.fragment, div_nodes);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div, "class", "pointer");
		},
		m(target, anchor) {
			insert_hydration(target, div, anchor);
			mount_component(icon, div, null);
			current = true;

			if (!mounted) {
				dispose = listen(div, "click", click_handler);
				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
		},
		i(local) {
			if (current) return;
			transition_in(icon.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(icon.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			destroy_component(icon);
			mounted = false;
			dispose();
		}
	};
}

// (114:4) {#each  cart.items as item, index   }
function create_each_block(ctx) {
	let div5;
	let img;
	let img_src_value;
	let t0;
	let div2;
	let div1;
	let span;
	let t1_value = /*item*/ ctx[31].product_title + "";
	let t1;
	let t2;
	let div0;
	let t3;
	let loadable0;
	let updating_loading;
	let t4;
	let div4;
	let loadable1;
	let updating_loading_1;
	let t5;
	let div3;
	let t6_value = /*liquid*/ ctx[9].money(/*item*/ ctx[31].price) + "";
	let t6;
	let t7;
	let div5_data_id_value;
	let div5_transition;
	let current;
	let each_value_1 = /*item*/ ctx[31].variant_options;
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	function loadable0_loading_binding(value) {
		/*loadable0_loading_binding*/ ctx[18](value);
	}

	let loadable0_props = {
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	};

	if (/*loading*/ ctx[5] !== void 0) {
		loadable0_props.loading = /*loading*/ ctx[5];
	}

	loadable0 = new Loadable({ props: loadable0_props });
	binding_callbacks.push(() => bind(loadable0, 'loading', loadable0_loading_binding));

	function loadable1_loading_binding(value) {
		/*loadable1_loading_binding*/ ctx[20](value);
	}

	let loadable1_props = {
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	};

	if (/*loading*/ ctx[5] !== void 0) {
		loadable1_props.loading = /*loading*/ ctx[5];
	}

	loadable1 = new Loadable({ props: loadable1_props });
	binding_callbacks.push(() => bind(loadable1, 'loading', loadable1_loading_binding));

	return {
		c() {
			div5 = element("div");
			img = element("img");
			t0 = space();
			div2 = element("div");
			div1 = element("div");
			span = element("span");
			t1 = text(t1_value);
			t2 = space();
			div0 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t3 = space();
			create_component(loadable0.$$.fragment);
			t4 = space();
			div4 = element("div");
			create_component(loadable1.$$.fragment);
			t5 = space();
			div3 = element("div");
			t6 = text(t6_value);
			t7 = space();
			this.h();
		},
		l(nodes) {
			div5 = claim_element(nodes, "DIV", { "data-id": true, class: true });
			var div5_nodes = children(div5);
			img = claim_element(div5_nodes, "IMG", { src: true, alt: true, class: true });
			t0 = claim_space(div5_nodes);
			div2 = claim_element(div5_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			span = claim_element(div1_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t1 = claim_text(span_nodes, t1_value);
			span_nodes.forEach(detach);
			t2 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div0_nodes);
			}

			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t3 = claim_space(div2_nodes);
			claim_component(loadable0.$$.fragment, div2_nodes);
			div2_nodes.forEach(detach);
			t4 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			claim_component(loadable1.$$.fragment, div4_nodes);
			t5 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			t6 = claim_text(div3_nodes, t6_value);
			div3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			t7 = claim_space(div5_nodes);
			div5_nodes.forEach(detach);
			this.h();
		},
		h() {
			if (!src_url_equal(img.src, img_src_value = /*liquid*/ ctx[9].img_url(/*item*/ ctx[31].image, '120x'))) attr(img, "src", img_src_value);
			attr(img, "alt", "cart item product image");
			attr(img, "class", "flex-grow-0 mr-2 w-32");
			attr(span, "class", "cart-item-title text-lg");
			attr(div0, "class", "cart-item-options");
			attr(div1, "class", "cart-item-content__up");
			attr(div2, "class", "cart-item-content");
			attr(div3, "class", "cart-item-price text-black text-xl");
			attr(div4, "class", "cart-item-right");
			attr(div5, "data-id", div5_data_id_value = /*item*/ ctx[31].id);
			attr(div5, "class", "cart-item w-full flex mb-10");
		},
		m(target, anchor) {
			insert_hydration(target, div5, anchor);
			append_hydration(div5, img);
			append_hydration(div5, t0);
			append_hydration(div5, div2);
			append_hydration(div2, div1);
			append_hydration(div1, span);
			append_hydration(span, t1);
			append_hydration(div1, t2);
			append_hydration(div1, div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div0, null);
			}

			append_hydration(div2, t3);
			mount_component(loadable0, div2, null);
			append_hydration(div5, t4);
			append_hydration(div5, div4);
			mount_component(loadable1, div4, null);
			append_hydration(div4, t5);
			append_hydration(div4, div3);
			append_hydration(div3, t6);
			append_hydration(div5, t7);
			current = true;
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;

			if (!current || dirty[0] & /*cart*/ 1 && !src_url_equal(img.src, img_src_value = /*liquid*/ ctx[9].img_url(/*item*/ ctx[31].image, '120x'))) {
				attr(img, "src", img_src_value);
			}

			if ((!current || dirty[0] & /*cart*/ 1) && t1_value !== (t1_value = /*item*/ ctx[31].product_title + "")) set_data(t1, t1_value);

			if (dirty[0] & /*cart*/ 1) {
				each_value_1 = /*item*/ ctx[31].variant_options;
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_1(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div0, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value_1.length;
			}

			const loadable0_changes = {};

			if (dirty[0] & /*cart*/ 1 | dirty[1] & /*$$scope*/ 64) {
				loadable0_changes.$$scope = { dirty, ctx };
			}

			if (!updating_loading && dirty[0] & /*loading*/ 32) {
				updating_loading = true;
				loadable0_changes.loading = /*loading*/ ctx[5];
				add_flush_callback(() => updating_loading = false);
			}

			loadable0.$set(loadable0_changes);
			const loadable1_changes = {};

			if (dirty[0] & /*cart*/ 1 | dirty[1] & /*$$scope*/ 64) {
				loadable1_changes.$$scope = { dirty, ctx };
			}

			if (!updating_loading_1 && dirty[0] & /*loading*/ 32) {
				updating_loading_1 = true;
				loadable1_changes.loading = /*loading*/ ctx[5];
				add_flush_callback(() => updating_loading_1 = false);
			}

			loadable1.$set(loadable1_changes);
			if ((!current || dirty[0] & /*cart*/ 1) && t6_value !== (t6_value = /*liquid*/ ctx[9].money(/*item*/ ctx[31].price) + "")) set_data(t6, t6_value);

			if (!current || dirty[0] & /*cart*/ 1 && div5_data_id_value !== (div5_data_id_value = /*item*/ ctx[31].id)) {
				attr(div5, "data-id", div5_data_id_value);
			}
		},
		i(local) {
			if (current) return;
			transition_in(loadable0.$$.fragment, local);
			transition_in(loadable1.$$.fragment, local);

			add_render_callback(() => {
				if (!div5_transition) div5_transition = create_bidirectional_transition(div5, scale, { duration: 300, easing: quintInOut }, true);
				div5_transition.run(1);
			});

			current = true;
		},
		o(local) {
			transition_out(loadable0.$$.fragment, local);
			transition_out(loadable1.$$.fragment, local);
			if (!div5_transition) div5_transition = create_bidirectional_transition(div5, scale, { duration: 300, easing: quintInOut }, false);
			div5_transition.run(0);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div5);
			destroy_each(each_blocks, detaching);
			destroy_component(loadable0);
			destroy_component(loadable1);
			if (detaching && div5_transition) div5_transition.end();
		}
	};
}

function create_fragment(ctx) {
	let button0;
	let t0;
	let t1;
	let t2;
	let div0;
	let t3;
	let div10;
	let form;
	let input;
	let t4;
	let div9;
	let div8;
	let div1;
	let span0;
	let t5;
	let t6;
	let span1;
	let t7;
	let div2;
	let t8;
	let div3;
	let t9;
	let div6;
	let div4;
	let span2;
	let t10_value = /*liquid*/ ctx[9].t('general.cart.subtotal') + "";
	let t10;
	let t11;
	let span3;
	let t12_value = /*liquid*/ ctx[9].money(/*cart*/ ctx[0].items_subtotal_price) + "";
	let t12;
	let t13;
	let div5;
	let t14;
	let t15;
	let button1;
	let t16;
	let t17;
	let a;
	let t18;
	let t19;
	let div7;
	let t20;
	let t21;
	let t22;
	let button2;
	let t23;
	let div10_resize_listener;
	let div10_transition;
	let current;
	let mounted;
	let dispose;
	let each_value = /*cart*/ ctx[0].items;
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			button0 = element("button");
			t0 = text(/*cart_action*/ ctx[7]);
			t1 = text(" Cart");
			t2 = space();
			div0 = element("div");
			t3 = space();
			div10 = element("div");
			form = element("form");
			input = element("input");
			t4 = space();
			div9 = element("div");
			div8 = element("div");
			div1 = element("div");
			span0 = element("span");
			t5 = text("Shopping Cart");
			t6 = space();
			span1 = element("span");
			t7 = space();
			div2 = element("div");
			t8 = space();
			div3 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t9 = space();
			div6 = element("div");
			div4 = element("div");
			span2 = element("span");
			t10 = text(t10_value);
			t11 = space();
			span3 = element("span");
			t12 = text(t12_value);
			t13 = space();
			div5 = element("div");
			t14 = text("Taxes and shipping calculated at checkout");
			t15 = space();
			button1 = element("button");
			t16 = text("Checkout");
			t17 = space();
			a = element("a");
			t18 = text("View Cart");
			t19 = space();
			div7 = element("div");
			t20 = text("Loading ");
			t21 = text(/*loading*/ ctx[5]);
			t22 = space();
			button2 = element("button");
			t23 = text("Toggle");
			this.h();
		},
		l(nodes) {
			button0 = claim_element(nodes, "BUTTON", {});
			var button0_nodes = children(button0);
			t0 = claim_text(button0_nodes, /*cart_action*/ ctx[7]);
			t1 = claim_text(button0_nodes, " Cart");
			button0_nodes.forEach(detach);
			t2 = claim_space(nodes);

			div0 = claim_element(nodes, "DIV", {
				"cart-drawer-backdrop": true,
				class: true
			});

			children(div0).forEach(detach);
			t3 = claim_space(nodes);
			div10 = claim_element(nodes, "DIV", { id: true, class: true, style: true });
			var div10_nodes = children(div10);
			form = claim_element(div10_nodes, "FORM", { action: true, method: true, class: true });
			var form_nodes = children(form);
			input = claim_element(form_nodes, "INPUT", { type: true, name: true });
			t4 = claim_space(form_nodes);
			div9 = claim_element(form_nodes, "DIV", { class: true });
			var div9_nodes = children(div9);
			div8 = claim_element(div9_nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			div1 = claim_element(div8_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			span0 = claim_element(div1_nodes, "SPAN", {});
			var span0_nodes = children(span0);
			t5 = claim_text(span0_nodes, "Shopping Cart");
			span0_nodes.forEach(detach);
			t6 = claim_space(div1_nodes);
			span1 = claim_element(div1_nodes, "SPAN", { class: true });
			var span1_nodes = children(span1);
			span1_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t7 = claim_space(div8_nodes);
			div2 = claim_element(div8_nodes, "DIV", { class: true });
			children(div2).forEach(detach);
			t8 = claim_space(div8_nodes);
			div3 = claim_element(div8_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div3_nodes);
			}

			div3_nodes.forEach(detach);
			t9 = claim_space(div8_nodes);
			div6 = claim_element(div8_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div4 = claim_element(div6_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			span2 = claim_element(div4_nodes, "SPAN", { class: true, "data-t": true });
			var span2_nodes = children(span2);
			t10 = claim_text(span2_nodes, t10_value);
			span2_nodes.forEach(detach);
			t11 = claim_space(div4_nodes);

			span3 = claim_element(div4_nodes, "SPAN", {
				"cart-drawer-subtotal-text": true,
				class: true
			});

			var span3_nodes = children(span3);
			t12 = claim_text(span3_nodes, t12_value);
			span3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			t13 = claim_space(div6_nodes);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			t14 = claim_text(div5_nodes, "Taxes and shipping calculated at checkout");
			div5_nodes.forEach(detach);
			t15 = claim_space(div6_nodes);
			button1 = claim_element(div6_nodes, "BUTTON", { class: true });
			var button1_nodes = children(button1);
			t16 = claim_text(button1_nodes, "Checkout");
			button1_nodes.forEach(detach);
			t17 = claim_space(div6_nodes);
			a = claim_element(div6_nodes, "A", { class: true, href: true });
			var a_nodes = children(a);
			t18 = claim_text(a_nodes, "View Cart");
			a_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t19 = claim_space(div8_nodes);
			div7 = claim_element(div8_nodes, "DIV", {});
			var div7_nodes = children(div7);
			t20 = claim_text(div7_nodes, "Loading ");
			t21 = claim_text(div7_nodes, /*loading*/ ctx[5]);
			t22 = claim_space(div7_nodes);
			button2 = claim_element(div7_nodes, "BUTTON", { class: true, type: true });
			var button2_nodes = children(button2);
			t23 = claim_text(button2_nodes, "Toggle");
			button2_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			form_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div0, "cart-drawer-backdrop", "");
			attr(div0, "class", "w-full h-full inset-0 fixed z-9");
			toggle_class(div0, "hidden", /*$cartOpen*/ ctx[1] != true);
			attr(input, "type", "text");
			input.hidden = true;
			attr(input, "name", "checkout");
			input.value = "Checkout";
			attr(span1, "class", "float-right close pointer");
			attr(div1, "class", "cart-drawer-title text-gray f-14 uppercase");
			attr(div2, "class", "spacer");
			attr(div3, "class", "cart-drawer-items");
			attr(span2, "class", "text-gray text-base float-left");
			attr(span2, "data-t", /*liquid*/ ctx[9].t('general.cart.subtotal'));
			attr(span3, "cart-drawer-subtotal-text", "");
			attr(span3, "class", "float-right text-black text-lg ");
			attr(div4, "class", "cart-drawer-subtotal");
			attr(div5, "class", "cart-drawer-taxes-notice text-base text-black float-left");
			attr(button1, "class", "mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500");
			attr(a, "class", "mt-10 w-full bg-gray-300 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-black hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500");
			attr(a, "href", "/cart");
			attr(div6, "class", "cart-drawer-bottom");
			attr(button2, "class", "mt-10 w-full bg-gray-300 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-black hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500");
			attr(button2, "type", "button");
			attr(div8, "class", "cart-drawer-inner-up");
			attr(div9, "class", "cart-drawer-inner");
			attr(form, "action", "/cart");
			attr(form, "method", "post");
			form.noValidate = "";
			attr(form, "class", "cart");
			attr(div10, "id", "cart-drawer");
			attr(div10, "class", "block fixed top-0 bg-white p-16 h-full z-10 -right-full transition-all duration-300 max-w-full");
			set_style(div10, "transform", "translateX(" + /*$swipeLeft*/ ctx[8] + "px)");
			add_render_callback(() => /*div10_elementresize_handler*/ ctx[25].call(div10));
			toggle_class(div10, "right-0", /*$cartOpen*/ ctx[1]);
		},
		m(target, anchor) {
			insert_hydration(target, button0, anchor);
			append_hydration(button0, t0);
			append_hydration(button0, t1);
			insert_hydration(target, t2, anchor);
			insert_hydration(target, div0, anchor);
			insert_hydration(target, t3, anchor);
			insert_hydration(target, div10, anchor);
			append_hydration(div10, form);
			append_hydration(form, input);
			append_hydration(form, t4);
			append_hydration(form, div9);
			append_hydration(div9, div8);
			append_hydration(div8, div1);
			append_hydration(div1, span0);
			append_hydration(span0, t5);
			append_hydration(div1, t6);
			append_hydration(div1, span1);
			append_hydration(div8, t7);
			append_hydration(div8, div2);
			append_hydration(div8, t8);
			append_hydration(div8, div3);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div3, null);
			}

			append_hydration(div8, t9);
			append_hydration(div8, div6);
			append_hydration(div6, div4);
			append_hydration(div4, span2);
			append_hydration(span2, t10);
			append_hydration(div4, t11);
			append_hydration(div4, span3);
			append_hydration(span3, t12);
			append_hydration(div6, t13);
			append_hydration(div6, div5);
			append_hydration(div5, t14);
			append_hydration(div6, t15);
			append_hydration(div6, button1);
			append_hydration(button1, t16);
			append_hydration(div6, t17);
			append_hydration(div6, a);
			append_hydration(a, t18);
			append_hydration(div8, t19);
			append_hydration(div8, div7);
			append_hydration(div7, t20);
			append_hydration(div7, t21);
			append_hydration(div7, t22);
			append_hydration(div7, button2);
			append_hydration(button2, t23);
			/*form_binding*/ ctx[23](form);
			/*div10_binding*/ ctx[24](div10);
			div10_resize_listener = add_resize_listener(div10, /*div10_elementresize_handler*/ ctx[25].bind(div10));
			current = true;

			if (!mounted) {
				dispose = [
					listen(button0, "click", /*toggleCart*/ ctx[15]),
					listen(div0, "click", /*closeCart*/ ctx[14]),
					listen(span1, "click", /*closeCart*/ ctx[14]),
					listen(button1, "click", /*click_handler_1*/ ctx[21]),
					listen(button2, "click", /*click_handler_2*/ ctx[22]),
					action_destroyer(swipe.call(null, div10)),
					listen(div10, "swipe", /*handleSwipe*/ ctx[11]),
					listen(div10, "swipeStart", /*handleSwipeStart*/ ctx[13]),
					listen(div10, "swipeEnd", /*handleSwipeEnd*/ ctx[12])
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (!current || dirty[0] & /*cart_action*/ 128) set_data(t0, /*cart_action*/ ctx[7]);

			if (!current || dirty[0] & /*$cartOpen*/ 2) {
				toggle_class(div0, "hidden", /*$cartOpen*/ ctx[1] != true);
			}

			if (dirty[0] & /*cart, liquid, loading, min_amounts_data*/ 1569) {
				each_value = /*cart*/ ctx[0].items;
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
						each_blocks[i].m(div3, null);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}

			if ((!current || dirty[0] & /*cart*/ 1) && t12_value !== (t12_value = /*liquid*/ ctx[9].money(/*cart*/ ctx[0].items_subtotal_price) + "")) set_data(t12, t12_value);
			if (!current || dirty[0] & /*loading*/ 32) set_data(t21, /*loading*/ ctx[5]);

			if (!current || dirty[0] & /*$swipeLeft*/ 256) {
				set_style(div10, "transform", "translateX(" + /*$swipeLeft*/ ctx[8] + "px)");
			}

			if (!current || dirty[0] & /*$cartOpen*/ 2) {
				toggle_class(div10, "right-0", /*$cartOpen*/ ctx[1]);
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			add_render_callback(() => {
				if (!div10_transition) div10_transition = create_bidirectional_transition(div10, fly, { x: 440 }, true);
				div10_transition.run(1);
			});

			current = true;
		},
		o(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			if (!div10_transition) div10_transition = create_bidirectional_transition(div10, fly, { x: 440 }, false);
			div10_transition.run(0);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(button0);
			if (detaching) detach(t2);
			if (detaching) detach(div0);
			if (detaching) detach(t3);
			if (detaching) detach(div10);
			destroy_each(each_blocks, detaching);
			/*form_binding*/ ctx[23](null);
			/*div10_binding*/ ctx[24](null);
			div10_resize_listener();
			if (detaching && div10_transition) div10_transition.end();
			mounted = false;
			run_all(dispose);
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

function quantityChange(event) {
	updateLineItem(this.id, event.detail.quantity);
}

function instance($$self, $$props, $$invalidate) {
	let cart_action;
	let $cartOpen;
	let $swipeLeft;
	component_subscribe($$self, cartOpen, $$value => $$invalidate(1, $cartOpen = $$value));
	let { importsSeek = 'lower' } = $$props;
	let themeImports = getContext('svelteProps') || {};
	let lec = getContext('lec') || {};
	(() => window.cicR = $$props.resetCicR ? 1 : window.cicR + 1)();
	const cic = window.cicR;
	const liquid = cachedLiquid(lec);
	let { cart = themeImports['cart'].find(e => e.component_index == fc(themeImports['cart'].map(e => e.component_index), cic, importsSeek)).value } = $$props;
	let { min_amounts = themeImports['min_amounts'].find(e => e.component_index == fc(themeImports['min_amounts'].map(e => e.component_index), cic, importsSeek)).value } = $$props;
	const min_amounts_data = JSON.parse(min_amounts);
	cartStore.set(cart);
	let drawerWidth = 0;
	let formNode;
	let drawerNode;
	let loading = false;

	// console.log('cart store ', $cartStore);
	set_store_value(cartOpen, $cartOpen = false, $cartOpen);

	const swipeLeft = spring(0, { stiffness: 0.2, damping: 0.4 });
	component_subscribe($$self, swipeLeft, value => $$invalidate(8, $swipeLeft = value));

	function handleSwipe(e) {
		e.detail;

		// console.log('x,y,dx', x, y, dx, dy);
		swipeLeft.update($swipeLeft => $swipeLeft + e.detail.dx);

		if ($swipeLeft > drawerWidth / 3) {
			closeCart();
		}
	}

	function handleSwipeEnd(e) {
		$$invalidate(6, swipeLeft.stiffness = 0.2, swipeLeft);
		$$invalidate(6, swipeLeft.damping = 0.4, swipeLeft);
		swipeLeft.set(0);
	}

	function handleSwipeStart() {
		$$invalidate(6, swipeLeft.stiffness = $$invalidate(6, swipeLeft.damping = 1, swipeLeft), swipeLeft);
	}

	function closeCart() {
		set_store_value(cartOpen, $cartOpen = false, $cartOpen);
	}

	function toggleCart() {
		set_store_value(cartOpen, $cartOpen = !$cartOpen, $cartOpen);
	}

	function loadable0_loading_binding(value) {
		loading = value;
		$$invalidate(5, loading);
	}

	const click_handler = item => updateLineItem(item.id, 0);

	function loadable1_loading_binding(value) {
		loading = value;
		$$invalidate(5, loading);
	}

	const click_handler_1 = () => submit();
	const click_handler_2 = () => $$invalidate(5, loading = !loading);

	function form_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			formNode = $$value;
			$$invalidate(3, formNode);
		});
	}

	function div10_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			drawerNode = $$value;
			$$invalidate(4, drawerNode);
		});
	}

	function div10_elementresize_handler() {
		drawerWidth = this.clientWidth;
		$$invalidate(2, drawerWidth);
	}

	$$self.$$set = $$new_props => {
		$$invalidate(30, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ('importsSeek' in $$new_props) $$invalidate(16, importsSeek = $$new_props.importsSeek);
		if ('cart' in $$new_props) $$invalidate(0, cart = $$new_props.cart);
		if ('min_amounts' in $$new_props) $$invalidate(17, min_amounts = $$new_props.min_amounts);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*$cartOpen*/ 2) {
			$$invalidate(7, cart_action = !$cartOpen ? 'Open' : 'Close');
		}

		if ($$self.$$.dirty[0] & /*$cartOpen*/ 2) {
			if ($cartOpen) {
				disableScrollOnBody();
			} else {
				enableScrollOnBody();
			}
		}
	};

	$$props = exclude_internal_props($$props);

	return [
		cart,
		$cartOpen,
		drawerWidth,
		formNode,
		drawerNode,
		loading,
		swipeLeft,
		cart_action,
		$swipeLeft,
		liquid,
		min_amounts_data,
		handleSwipe,
		handleSwipeEnd,
		handleSwipeStart,
		closeCart,
		toggleCart,
		importsSeek,
		min_amounts,
		loadable0_loading_binding,
		click_handler,
		loadable1_loading_binding,
		click_handler_1,
		click_handler_2,
		form_binding,
		div10_binding,
		div10_elementresize_handler
	];
}

class Main_cart extends SvelteComponent {
	constructor(options) {
		super();

		init(
			this,
			options,
			instance,
			create_fragment,
			safe_not_equal,
			{
				importsSeek: 16,
				cart: 0,
				min_amounts: 17
			},
			null,
			[-1, -1]
		);
	}
}

export { Main_cart as default };
