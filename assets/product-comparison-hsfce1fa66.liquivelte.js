import { internal, SvelteComponent, init, safe_not_equal, element, text, space, claim_element, children, claim_text, detach, claim_space, attr, insert_hydration, append_hydration, set_data, transition_in, check_outros, transition_out, destroy_each, getContext, assign, exclude_internal_props, empty, group_outros, select_value, set_style, add_render_callback, create_bidirectional_transition, cubicInOut, fade, src_url_equal, select_option, listen } from './liquivelte-svelte-hs860fcb0f.liquivelte.js';
import { commonjsGlobal, cachedLiquid } from './liquivelte-liquid-hsf5ca955b.liquivelte.js';
import { cartStore } from './store.js-hs0e33545c.liquivelte.js';
import './framework7-liquivelte-get-params-hsa26ede4c.liquivelte.js';
import './framework7-liquivelte-utils-hs4f3069f4.liquivelte.js';
import './framework7-liquivelte-params-list-hs47bd97f3.liquivelte.js';
import './product-carousel-hsd019cde1.liquivelte.js';
import './framework7-liquivelte-hsbc78d147.liquivelte.js';
import './framework7-liquivelte-popup-hs40942790.liquivelte.js';
import './framework7-liquivelte-view-hsd52a64b1.liquivelte.js';
import './framework7-liquivelte-router-context-provider-hsf6db1e25.liquivelte.js';
import './framework7-liquivelte-login-screen-hsf8fd91c9.liquivelte.js';
import './framework7-liquivelte-sheet-hs145d5250.liquivelte.js';
import './framework7-liquivelte-popover-hs7287b426.liquivelte.js';
import './framework7-liquivelte-panel-hsc31b6190.liquivelte.js';
import './framework7-liquivelte-block-title-hsa5828d29.liquivelte.js';
import './framework7-liquivelte-block-hs361837ca.liquivelte.js';
import './framework7-liquivelte-swiper-slide-hs2b3c6d61.liquivelte.js';
import './framework7-liquivelte-swiper-hs9aa23be4.liquivelte.js';
import './framework7-liquivelte-mount-swiper-hsbfe85190.liquivelte.js';
import './framework7-liquivelte-get-changed-params-hs348c5f9d.liquivelte.js';
import './framework7-liquivelte-update-swiper-hse4d69695.liquivelte.js';
import './framework7-liquivelte-card-content-hse1b7b389.liquivelte.js';
import './framework7-liquivelte-card-footer-hs7dbd61e1.liquivelte.js';
import './framework7-liquivelte-card-header-hsf9dd2810.liquivelte.js';
import './framework7-liquivelte-card-hsf6970dbe.liquivelte.js';
import './framework7-liquivelte-link-hs17587a47.liquivelte.js';
import './framework7-liquivelte-use-icon-hsa8562e17.liquivelte.js';
import './framework7-liquivelte-icon-hse5756811.liquivelte.js';
import './framework7-liquivelte-badge-hsf28c6a45.liquivelte.js';
import './framework7-liquivelte-button-hs207429cd.liquivelte.js';
import './framework7-liquivelte-preloader-hs406ff193.liquivelte.js';
import './framework7-liquivelte-stepper-hscc0fc0a0.liquivelte.js';
import './header-hs625ca8e2.liquivelte.js';
import './framework7-liquivelte-list-item-hsd9bdb728.liquivelte.js';
import './framework7-liquivelte-list-hse30fa577.liquivelte.js';
import './framework7-liquivelte-accordion-content-hsd2ea1e59.liquivelte.js';
import './framework7-liquivelte-col-hs190227a8.liquivelte.js';
import './framework7-liquivelte-row-hs9239593e.liquivelte.js';
import './framework7-liquivelte-appbar-hs372fc339.liquivelte.js';
import './framework7-liquivelte-page-hs7953f173.liquivelte.js';
import './framework7-liquivelte-page-content-hse592fb35.liquivelte.js';

var outin = {};

(function (exports) {
var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var internal_1 = internal;
function outin(settings) {
    var states = [1, 2, 3, 4, 5, 6, 7];
    var INIT = states[0], OUTRO = states[1], INTRO_DELAYED = states[2], INTRO = states[3], COMPLETED = states[4], ABORTED = states[5], UNDO = states[6];
    var className = "svelte-outin";
    var concurrent = {};
    function findActive(node) {
        var found = Object.entries(concurrent).find(function (_a) {
            var entry = _a[1];
            return entry.out === node || entry["in"] === node;
        });
        if (found) {
            return [found[1], found[0]];
        }
        return [undefined, -1];
    }
    var idle = true;
    var starting = [];
    var autoincrement = 0;
    function splitOptions(transition) {
        return Array.isArray(transition) ? transition : [transition, {}];
    }
    var _a = settings.out
        ? splitOptions(settings.out)
        : splitOptions(settings.transition), outFn = _a[0], outParams = _a[1];
    var _b = settings["in"]
        ? splitOptions(settings["in"])
        : splitOptions(settings.transition), inFn = _b[0], inParams = _b[1];
    function outro(node, options) {
        var _a, _b;
        var config = outFn(node, __assign(__assign({}, outParams), options));
        var position = window.getComputedStyle(node).position;
        if (["fixed", "absolute"].indexOf(position) === -1) {
            (0, internal_1.append_styles)(node, "outin", ".svelte-outin { position: absolute !important; }");
            node.classList.add(className);
        }
        var active = findActive(node)[0];
        if (active) {
            if (idle) {
                active.out = node;
                active["in"] = undefined;
            }
        }
        else if (idle) {
            active = {
                delay: ((_a = config.duration) !== null && _a !== void 0 ? _a : 0) + ((_b = config.delay) !== null && _b !== void 0 ? _b : 0),
                out: node,
                "in": undefined,
                state: INIT
            };
            autoincrement += 1;
            concurrent[autoincrement] = active;
        }
        else {
            return config;
        }
        if (idle) {
            starting.push(active);
        }
        if (active.state === INIT) {
            if (idle) {
                active.state = OUTRO;
                node.addEventListener("outroend", onOutroEnd);
            }
        }
        else if (active.state === INTRO) {
            active.state = UNDO;
        }
        else if (active.state === INTRO_DELAYED) {
            active.state = ABORTED;
        }
        return config;
    }
    function onOutroEnd(e) {
        var node = e.target;
        node.removeEventListener("outroend", onOutroEnd);
        var active = findActive(node)[0];
        if (!active) {
            return;
        }
        if (active.state === INTRO_DELAYED) {
            active.state = INTRO;
        }
    }
    function intro(node, options) {
        var _a, _b, _c;
        node.classList.remove(className);
        var config = inFn(node, __assign(__assign({}, inParams), options));
        var active = findActive(node)[0];
        if (idle) {
            var startIndex = starting.findIndex(function (start) { return start["in"] === undefined; });
            var last = true;
            if (startIndex !== -1) {
                active = starting[startIndex];
                active["in"] = node;
                last = startIndex === starting.length - 1;
            }
            if (last) {
                idle = true;
                starting.length = 0;
            }
        }
        if (!active) {
            idle = false;
            starting.length = 0;
            return config;
        }
        if (!active["in"]) {
            active["in"] = node;
        }
        var first = active["in"] === node;
        if (active.state === OUTRO) {
            if (active.delay === 0) {
                if (first) {
                    active.state = INTRO;
                    node.addEventListener("introend", onIntroEnd);
                }
            }
            else {
                config.delay = active.delay + ((_a = config.delay) !== null && _a !== void 0 ? _a : 0);
                if (first) {
                    active.state = INTRO_DELAYED;
                    node.addEventListener("introend", onIntroEnd);
                }
            }
        }
        else if (active.state === INTRO_DELAYED) {
            config.delay = active.delay + ((_b = config.delay) !== null && _b !== void 0 ? _b : 0);
        }
        else if (active.state === ABORTED) {
            if (first) {
                active.state = INTRO;
                node.addEventListener("introend", onIntroEnd);
            }
        }
        else if (active.state === UNDO) {
            if (first) {
                active.state = INTRO_DELAYED;
                config.delay = active.delay + ((_c = config.delay) !== null && _c !== void 0 ? _c : 0);
                node.addEventListener("introend", onIntroEnd);
            }
        }
        return config;
    }
    function onIntroEnd(e) {
        e.target.removeEventListener("introend", onIntroEnd);
        var _a = findActive(e.target), ref = _a[0], id = _a[1];
        if (!ref) {
            return;
        }
        if (ref.state === INTRO) {
            ref.state = COMPLETED;
            delete concurrent[id];
        }
        else if (ref.state === INTRO_DELAYED) {
            ref.state = COMPLETED;
            ref.out.removeEventListener("outroend", onOutroEnd);
            delete concurrent[id];
        }
    }
    return [outro, intro];
}
exports["default"] = outin;
}(outin));

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/src/sections/product-comparison.liquivelte generated by Svelte v3.50.0 */

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[12] = list[i];
	child_ctx[15] = i;

	const constants_0 = {
		first: /*index*/ child_ctx[15] === 0,
		index: /*index*/ child_ctx[15] + 1,
		index0: /*index*/ child_ctx[15],
		last: /*index*/ child_ctx[15] === /*section*/ child_ctx[0].blocks.length - 1,
		rindex: /*section*/ child_ctx[0].blocks.length - /*index*/ child_ctx[15],
		rindex0: /*section*/ child_ctx[0].blocks.length - /*index*/ child_ctx[15] - 1,
		length: /*section*/ child_ctx[0].blocks.length
	};

	child_ctx[13] = constants_0;
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[12] = list[i];
	child_ctx[15] = i;

	const constants_0 = {
		first: /*index*/ child_ctx[15] === 0,
		index: /*index*/ child_ctx[15] + 1,
		index0: /*index*/ child_ctx[15],
		last: /*index*/ child_ctx[15] === /*section*/ child_ctx[0].blocks.length - 1,
		rindex: /*section*/ child_ctx[0].blocks.length - /*index*/ child_ctx[15],
		rindex0: /*section*/ child_ctx[0].blocks.length - /*index*/ child_ctx[15] - 1,
		length: /*section*/ child_ctx[0].blocks.length
	};

	child_ctx[13] = constants_0;
	return child_ctx;
}

function get_each_context_2(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[12] = list[i];
	child_ctx[15] = i;

	const constants_0 = {
		first: /*index*/ child_ctx[15] === 0,
		index: /*index*/ child_ctx[15] + 1,
		index0: /*index*/ child_ctx[15],
		last: /*index*/ child_ctx[15] === /*section*/ child_ctx[0].blocks.length - 1,
		rindex: /*section*/ child_ctx[0].blocks.length - /*index*/ child_ctx[15],
		rindex0: /*section*/ child_ctx[0].blocks.length - /*index*/ child_ctx[15] - 1,
		length: /*section*/ child_ctx[0].blocks.length
	};

	child_ctx[13] = constants_0;
	return child_ctx;
}

// (80:6) {#if current_block == forloop.index }
function create_if_block_1(ctx) {
	let div;
	let div_transition;
	let current;

	return {
		c() {
			div = element("div");
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true, style: true });
			children(div).forEach(detach);
			this.h();
		},
		h() {
			attr(div, "class", "backplate svelte-1ldfpml");
			set_style(div, "background-color", /*block*/ ctx[12].settings.bg_color);
		},
		m(target, anchor) {
			insert_hydration(target, div, anchor);
			current = true;
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;

			if (!current || dirty & /*section*/ 1) {
				set_style(div, "background-color", /*block*/ ctx[12].settings.bg_color);
			}
		},
		i(local) {
			if (current) return;

			add_render_callback(() => {
				if (!div_transition) div_transition = create_bidirectional_transition(div, fade, { easing: cubicInOut, duration: 700 }, true);
				div_transition.run(1);
			});

			current = true;
		},
		o(local) {
			if (!div_transition) div_transition = create_bidirectional_transition(div, fade, { easing: cubicInOut, duration: 700 }, false);
			div_transition.run(0);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (detaching && div_transition) div_transition.end();
		}
	};
}

// (70:4) {#each  section.blocks as block, index   }
function create_each_block_2(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*current_block*/ ctx[1] == /*forloop*/ ctx[13].index && create_if_block_1(ctx);

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
			current = true;
		},
		p(ctx, dirty) {
			if (/*current_block*/ ctx[1] == /*forloop*/ ctx[13].index) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*current_block, section*/ 3) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block_1(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
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
			if (if_block) if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

// (97:4) {#if current_block == forloop.index }
function create_if_block(ctx) {
	let div26;
	let div25;
	let div11;
	let div0;
	let img0;
	let img0_src_value;
	let img0_height_value;
	let t0;
	let div10;
	let select;
	let t1;
	let div3;
	let div1;
	let span0;
	let t2_value = /*block*/ ctx[12].settings.product_1_param_1_value + "";
	let t2;
	let span0_transition;
	let t3;
	let t4_value = /*block*/ ctx[12].settings.product_1_param_1_unit + "";
	let t4;
	let t5;
	let div2;
	let t6_value = /*block*/ ctx[12].settings.param_1 + "";
	let t6;
	let t7;
	let div6;
	let div4;
	let span1;
	let t8_value = /*block*/ ctx[12].settings.product_1_param_2_value + "";
	let t8;
	let span1_transition;
	let t9;
	let t10_value = /*block*/ ctx[12].settings.product_1_param_2_unit + "";
	let t10;
	let t11;
	let div5;
	let t12_value = /*block*/ ctx[12].settings.param_2 + "";
	let t12;
	let t13;
	let div9;
	let div7;
	let span2;
	let t14_value = /*block*/ ctx[12].settings.product_1_param_3_value + "";
	let t14;
	let span2_transition;
	let t15;
	let t16_value = /*block*/ ctx[12].settings.product_1_param_3_unit + "";
	let t16;
	let t17;
	let div8;
	let t18_value = /*block*/ ctx[12].settings.param_3 + "";
	let t18;
	let t19;
	let div24;
	let div12;
	let img1;
	let img1_src_value;
	let img1_height_value;
	let t20;
	let div23;
	let div13;
	let t21_value = /*block*/ ctx[12].settings.product_title_2 + "";
	let t21;
	let t22;
	let div16;
	let div14;
	let span3;
	let t23_value = /*block*/ ctx[12].settings.product_2_param_1_value + "";
	let t23;
	let span3_transition;
	let t24;
	let t25_value = /*block*/ ctx[12].settings.product_2_param_1_unit + "";
	let t25;
	let t26;
	let div15;
	let t27_value = /*block*/ ctx[12].settings.param_1 + "";
	let t27;
	let t28;
	let div19;
	let div17;
	let span4;
	let t29_value = /*block*/ ctx[12].settings.product_2_param_2_value + "";
	let t29;
	let span4_transition;
	let t30;
	let t31_value = /*block*/ ctx[12].settings.product_2_param_2_unit + "";
	let t31;
	let t32;
	let div18;
	let t33_value = /*block*/ ctx[12].settings.param_2 + "";
	let t33;
	let t34;
	let div22;
	let div20;
	let span5;
	let t35_value = /*block*/ ctx[12].settings.product_2_param_3_value + "";
	let t35;
	let span5_transition;
	let t36;
	let t37_value = /*block*/ ctx[12].settings.product_2_param_3_unit + "";
	let t37;
	let t38;
	let div21;
	let t39_value = /*block*/ ctx[12].settings.param_3 + "";
	let t39;
	let t40;
	let div26_transition;
	let current;
	let mounted;
	let dispose;
	let each_value_1 = /*section*/ ctx[0].blocks;
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	return {
		c() {
			div26 = element("div");
			div25 = element("div");
			div11 = element("div");
			div0 = element("div");
			img0 = element("img");
			t0 = space();
			div10 = element("div");
			select = element("select");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t1 = space();
			div3 = element("div");
			div1 = element("div");
			span0 = element("span");
			t2 = text(t2_value);
			t3 = space();
			t4 = text(t4_value);
			t5 = space();
			div2 = element("div");
			t6 = text(t6_value);
			t7 = space();
			div6 = element("div");
			div4 = element("div");
			span1 = element("span");
			t8 = text(t8_value);
			t9 = space();
			t10 = text(t10_value);
			t11 = space();
			div5 = element("div");
			t12 = text(t12_value);
			t13 = space();
			div9 = element("div");
			div7 = element("div");
			span2 = element("span");
			t14 = text(t14_value);
			t15 = space();
			t16 = text(t16_value);
			t17 = space();
			div8 = element("div");
			t18 = text(t18_value);
			t19 = space();
			div24 = element("div");
			div12 = element("div");
			img1 = element("img");
			t20 = space();
			div23 = element("div");
			div13 = element("div");
			t21 = text(t21_value);
			t22 = space();
			div16 = element("div");
			div14 = element("div");
			span3 = element("span");
			t23 = text(t23_value);
			t24 = space();
			t25 = text(t25_value);
			t26 = space();
			div15 = element("div");
			t27 = text(t27_value);
			t28 = space();
			div19 = element("div");
			div17 = element("div");
			span4 = element("span");
			t29 = text(t29_value);
			t30 = space();
			t31 = text(t31_value);
			t32 = space();
			div18 = element("div");
			t33 = text(t33_value);
			t34 = space();
			div22 = element("div");
			div20 = element("div");
			span5 = element("span");
			t35 = text(t35_value);
			t36 = space();
			t37 = text(t37_value);
			t38 = space();
			div21 = element("div");
			t39 = text(t39_value);
			t40 = space();
			this.h();
		},
		l(nodes) {
			div26 = claim_element(nodes, "DIV", { class: true });
			var div26_nodes = children(div26);
			div25 = claim_element(div26_nodes, "DIV", { class: true });
			var div25_nodes = children(div25);
			div11 = claim_element(div25_nodes, "DIV", { class: true });
			var div11_nodes = children(div11);
			div0 = claim_element(div11_nodes, "DIV", { class: true, style: true });
			var div0_nodes = children(div0);

			img0 = claim_element(div0_nodes, "IMG", {
				class: true,
				loading: true,
				src: true,
				width: true,
				height: true
			});

			div0_nodes.forEach(detach);
			t0 = claim_space(div11_nodes);
			div10 = claim_element(div11_nodes, "DIV", { class: true });
			var div10_nodes = children(div10);
			select = claim_element(div10_nodes, "SELECT", { class: true });
			var select_nodes = children(select);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(select_nodes);
			}

			select_nodes.forEach(detach);
			t1 = claim_space(div10_nodes);
			div3 = claim_element(div10_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div1 = claim_element(div3_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			span0 = claim_element(div1_nodes, "SPAN", { class: true });
			var span0_nodes = children(span0);
			t2 = claim_text(span0_nodes, t2_value);
			span0_nodes.forEach(detach);
			t3 = claim_space(div1_nodes);
			t4 = claim_text(div1_nodes, t4_value);
			div1_nodes.forEach(detach);
			t5 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			t6 = claim_text(div2_nodes, t6_value);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t7 = claim_space(div10_nodes);
			div6 = claim_element(div10_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div4 = claim_element(div6_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			span1 = claim_element(div4_nodes, "SPAN", { class: true });
			var span1_nodes = children(span1);
			t8 = claim_text(span1_nodes, t8_value);
			span1_nodes.forEach(detach);
			t9 = claim_space(div4_nodes);
			t10 = claim_text(div4_nodes, t10_value);
			div4_nodes.forEach(detach);
			t11 = claim_space(div6_nodes);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			t12 = claim_text(div5_nodes, t12_value);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t13 = claim_space(div10_nodes);
			div9 = claim_element(div10_nodes, "DIV", { class: true });
			var div9_nodes = children(div9);
			div7 = claim_element(div9_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			span2 = claim_element(div7_nodes, "SPAN", { class: true });
			var span2_nodes = children(span2);
			t14 = claim_text(span2_nodes, t14_value);
			span2_nodes.forEach(detach);
			t15 = claim_space(div7_nodes);
			t16 = claim_text(div7_nodes, t16_value);
			div7_nodes.forEach(detach);
			t17 = claim_space(div9_nodes);
			div8 = claim_element(div9_nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			t18 = claim_text(div8_nodes, t18_value);
			div8_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			t19 = claim_space(div25_nodes);
			div24 = claim_element(div25_nodes, "DIV", { class: true });
			var div24_nodes = children(div24);
			div12 = claim_element(div24_nodes, "DIV", { class: true, style: true });
			var div12_nodes = children(div12);

			img1 = claim_element(div12_nodes, "IMG", {
				class: true,
				loading: true,
				src: true,
				width: true,
				height: true
			});

			div12_nodes.forEach(detach);
			t20 = claim_space(div24_nodes);
			div23 = claim_element(div24_nodes, "DIV", { class: true });
			var div23_nodes = children(div23);
			div13 = claim_element(div23_nodes, "DIV", { class: true });
			var div13_nodes = children(div13);
			t21 = claim_text(div13_nodes, t21_value);
			div13_nodes.forEach(detach);
			t22 = claim_space(div23_nodes);
			div16 = claim_element(div23_nodes, "DIV", { class: true });
			var div16_nodes = children(div16);
			div14 = claim_element(div16_nodes, "DIV", { class: true });
			var div14_nodes = children(div14);
			span3 = claim_element(div14_nodes, "SPAN", { class: true });
			var span3_nodes = children(span3);
			t23 = claim_text(span3_nodes, t23_value);
			span3_nodes.forEach(detach);
			t24 = claim_space(div14_nodes);
			t25 = claim_text(div14_nodes, t25_value);
			div14_nodes.forEach(detach);
			t26 = claim_space(div16_nodes);
			div15 = claim_element(div16_nodes, "DIV", { class: true });
			var div15_nodes = children(div15);
			t27 = claim_text(div15_nodes, t27_value);
			div15_nodes.forEach(detach);
			div16_nodes.forEach(detach);
			t28 = claim_space(div23_nodes);
			div19 = claim_element(div23_nodes, "DIV", { class: true });
			var div19_nodes = children(div19);
			div17 = claim_element(div19_nodes, "DIV", { class: true });
			var div17_nodes = children(div17);
			span4 = claim_element(div17_nodes, "SPAN", { class: true });
			var span4_nodes = children(span4);
			t29 = claim_text(span4_nodes, t29_value);
			span4_nodes.forEach(detach);
			t30 = claim_space(div17_nodes);
			t31 = claim_text(div17_nodes, t31_value);
			div17_nodes.forEach(detach);
			t32 = claim_space(div19_nodes);
			div18 = claim_element(div19_nodes, "DIV", { class: true });
			var div18_nodes = children(div18);
			t33 = claim_text(div18_nodes, t33_value);
			div18_nodes.forEach(detach);
			div19_nodes.forEach(detach);
			t34 = claim_space(div23_nodes);
			div22 = claim_element(div23_nodes, "DIV", { class: true });
			var div22_nodes = children(div22);
			div20 = claim_element(div22_nodes, "DIV", { class: true });
			var div20_nodes = children(div20);
			span5 = claim_element(div20_nodes, "SPAN", { class: true });
			var span5_nodes = children(span5);
			t35 = claim_text(span5_nodes, t35_value);
			span5_nodes.forEach(detach);
			t36 = claim_space(div20_nodes);
			t37 = claim_text(div20_nodes, t37_value);
			div20_nodes.forEach(detach);
			t38 = claim_space(div22_nodes);
			div21 = claim_element(div22_nodes, "DIV", { class: true, "data-failed": true });
			var div21_nodes = children(div21);
			t39 = claim_text(div21_nodes, t39_value);
			div21_nodes.forEach(detach);
			div22_nodes.forEach(detach);
			div23_nodes.forEach(detach);
			div24_nodes.forEach(detach);
			div25_nodes.forEach(detach);
			t40 = claim_space(div26_nodes);
			div26_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(img0, "class", " svelte-1ldfpml");
			attr(img0, "loading", "eager");
			if (!src_url_equal(img0.src, img0_src_value = /*liquid*/ ctx[2].img_url(/*block*/ ctx[12].settings.product_image_1, '300x'))) attr(img0, "src", img0_src_value);
			attr(img0, "width", 300);
			attr(img0, "height", img0_height_value = /*liquid*/ ctx[2].divided_by(300, /*block*/ ctx[12].settings.product_image_1.aspect_ratio));
			attr(div0, "class", "product-image image-1 svelte-1ldfpml");
			set_style(div0, "--ratio", /*block*/ ctx[12].settings.product_image_1.aspect_ratio);
			attr(select, "class", "product-title svelte-1ldfpml");
			if (/*current_block*/ ctx[1] === void 0) add_render_callback(() => /*select_change_handler*/ ctx[6].call(select));
			attr(span0, "class", "svelte-1ldfpml");
			attr(div1, "class", "param-values svelte-1ldfpml");
			attr(div2, "class", "param-name svelte-1ldfpml");
			attr(div3, "class", "param-container svelte-1ldfpml");
			attr(span1, "class", "svelte-1ldfpml");
			attr(div4, "class", "param-values svelte-1ldfpml");
			attr(div5, "class", "param-name svelte-1ldfpml");
			attr(div6, "class", "param-container svelte-1ldfpml");
			attr(span2, "class", "svelte-1ldfpml");
			attr(div7, "class", "param-values svelte-1ldfpml");
			attr(div8, "class", "param-name svelte-1ldfpml");
			attr(div9, "class", "param-container svelte-1ldfpml");
			attr(div10, "class", "product-info svelte-1ldfpml");
			attr(div11, "class", "comparison-item svelte-1ldfpml");
			attr(img1, "class", " svelte-1ldfpml");
			attr(img1, "loading", "eager");
			if (!src_url_equal(img1.src, img1_src_value = /*liquid*/ ctx[2].img_url(/*block*/ ctx[12].settings.product_image_2, '300x'))) attr(img1, "src", img1_src_value);
			attr(img1, "width", 300);
			attr(img1, "height", img1_height_value = /*liquid*/ ctx[2].divided_by(300, /*block*/ ctx[12].settings.product_image_2.aspect_ratio));
			attr(div12, "class", "product-image image-2 svelte-1ldfpml");
			set_style(div12, "--ratio", /*block*/ ctx[12].settings.product_image_1.aspect_ratio);
			attr(div13, "class", "product-title svelte-1ldfpml");
			attr(span3, "class", "svelte-1ldfpml");
			attr(div14, "class", "param-values svelte-1ldfpml");
			attr(div15, "class", "param-name svelte-1ldfpml");
			attr(div16, "class", "param-container svelte-1ldfpml");
			attr(span4, "class", "svelte-1ldfpml");
			attr(div17, "class", "param-values svelte-1ldfpml");
			attr(div18, "class", "param-name svelte-1ldfpml");
			attr(div19, "class", "param-container svelte-1ldfpml");
			attr(span5, "class", "svelte-1ldfpml");
			attr(div20, "class", "param-values svelte-1ldfpml");
			attr(div21, "class", "param-name svelte-1ldfpml");
			attr(div21, "data-failed", "true");
			attr(div22, "class", "param-container svelte-1ldfpml");
			attr(div23, "class", "product-info svelte-1ldfpml");
			attr(div24, "class", "comparison-item svelte-1ldfpml");
			attr(div25, "class", "comparison svelte-1ldfpml");
			attr(div26, "class", "comparison-container svelte-1ldfpml");
		},
		m(target, anchor) {
			insert_hydration(target, div26, anchor);
			append_hydration(div26, div25);
			append_hydration(div25, div11);
			append_hydration(div11, div0);
			append_hydration(div0, img0);
			append_hydration(div11, t0);
			append_hydration(div11, div10);
			append_hydration(div10, select);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(select, null);
			}

			select_option(select, /*current_block*/ ctx[1]);
			append_hydration(div10, t1);
			append_hydration(div10, div3);
			append_hydration(div3, div1);
			append_hydration(div1, span0);
			append_hydration(span0, t2);
			append_hydration(div1, t3);
			append_hydration(div1, t4);
			append_hydration(div3, t5);
			append_hydration(div3, div2);
			append_hydration(div2, t6);
			append_hydration(div10, t7);
			append_hydration(div10, div6);
			append_hydration(div6, div4);
			append_hydration(div4, span1);
			append_hydration(span1, t8);
			append_hydration(div4, t9);
			append_hydration(div4, t10);
			append_hydration(div6, t11);
			append_hydration(div6, div5);
			append_hydration(div5, t12);
			append_hydration(div10, t13);
			append_hydration(div10, div9);
			append_hydration(div9, div7);
			append_hydration(div7, span2);
			append_hydration(span2, t14);
			append_hydration(div7, t15);
			append_hydration(div7, t16);
			append_hydration(div9, t17);
			append_hydration(div9, div8);
			append_hydration(div8, t18);
			append_hydration(div25, t19);
			append_hydration(div25, div24);
			append_hydration(div24, div12);
			append_hydration(div12, img1);
			append_hydration(div24, t20);
			append_hydration(div24, div23);
			append_hydration(div23, div13);
			append_hydration(div13, t21);
			append_hydration(div23, t22);
			append_hydration(div23, div16);
			append_hydration(div16, div14);
			append_hydration(div14, span3);
			append_hydration(span3, t23);
			append_hydration(div14, t24);
			append_hydration(div14, t25);
			append_hydration(div16, t26);
			append_hydration(div16, div15);
			append_hydration(div15, t27);
			append_hydration(div23, t28);
			append_hydration(div23, div19);
			append_hydration(div19, div17);
			append_hydration(div17, span4);
			append_hydration(span4, t29);
			append_hydration(div17, t30);
			append_hydration(div17, t31);
			append_hydration(div19, t32);
			append_hydration(div19, div18);
			append_hydration(div18, t33);
			append_hydration(div23, t34);
			append_hydration(div23, div22);
			append_hydration(div22, div20);
			append_hydration(div20, span5);
			append_hydration(span5, t35);
			append_hydration(div20, t36);
			append_hydration(div20, t37);
			append_hydration(div22, t38);
			append_hydration(div22, div21);
			append_hydration(div21, t39);
			append_hydration(div26, t40);
			current = true;

			if (!mounted) {
				dispose = listen(select, "change", /*select_change_handler*/ ctx[6]);
				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;

			if (!current || dirty & /*section*/ 1 && !src_url_equal(img0.src, img0_src_value = /*liquid*/ ctx[2].img_url(/*block*/ ctx[12].settings.product_image_1, '300x'))) {
				attr(img0, "src", img0_src_value);
			}

			if (!current || dirty & /*section*/ 1 && img0_height_value !== (img0_height_value = /*liquid*/ ctx[2].divided_by(300, /*block*/ ctx[12].settings.product_image_1.aspect_ratio))) {
				attr(img0, "height", img0_height_value);
			}

			if (!current || dirty & /*section*/ 1) {
				set_style(div0, "--ratio", /*block*/ ctx[12].settings.product_image_1.aspect_ratio);
			}

			if (dirty & /*section*/ 1) {
				each_value_1 = /*section*/ ctx[0].blocks;
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_1(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(select, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value_1.length;
			}

			if (dirty & /*current_block, section*/ 3) {
				select_option(select, /*current_block*/ ctx[1]);
			}

			if ((!current || dirty & /*section*/ 1) && t2_value !== (t2_value = /*block*/ ctx[12].settings.product_1_param_1_value + "")) set_data(t2, t2_value);
			if ((!current || dirty & /*section*/ 1) && t4_value !== (t4_value = /*block*/ ctx[12].settings.product_1_param_1_unit + "")) set_data(t4, t4_value);
			if ((!current || dirty & /*section*/ 1) && t6_value !== (t6_value = /*block*/ ctx[12].settings.param_1 + "")) set_data(t6, t6_value);
			if ((!current || dirty & /*section*/ 1) && t8_value !== (t8_value = /*block*/ ctx[12].settings.product_1_param_2_value + "")) set_data(t8, t8_value);
			if ((!current || dirty & /*section*/ 1) && t10_value !== (t10_value = /*block*/ ctx[12].settings.product_1_param_2_unit + "")) set_data(t10, t10_value);
			if ((!current || dirty & /*section*/ 1) && t12_value !== (t12_value = /*block*/ ctx[12].settings.param_2 + "")) set_data(t12, t12_value);
			if ((!current || dirty & /*section*/ 1) && t14_value !== (t14_value = /*block*/ ctx[12].settings.product_1_param_3_value + "")) set_data(t14, t14_value);
			if ((!current || dirty & /*section*/ 1) && t16_value !== (t16_value = /*block*/ ctx[12].settings.product_1_param_3_unit + "")) set_data(t16, t16_value);
			if ((!current || dirty & /*section*/ 1) && t18_value !== (t18_value = /*block*/ ctx[12].settings.param_3 + "")) set_data(t18, t18_value);

			if (!current || dirty & /*section*/ 1 && !src_url_equal(img1.src, img1_src_value = /*liquid*/ ctx[2].img_url(/*block*/ ctx[12].settings.product_image_2, '300x'))) {
				attr(img1, "src", img1_src_value);
			}

			if (!current || dirty & /*section*/ 1 && img1_height_value !== (img1_height_value = /*liquid*/ ctx[2].divided_by(300, /*block*/ ctx[12].settings.product_image_2.aspect_ratio))) {
				attr(img1, "height", img1_height_value);
			}

			if (!current || dirty & /*section*/ 1) {
				set_style(div12, "--ratio", /*block*/ ctx[12].settings.product_image_1.aspect_ratio);
			}

			if ((!current || dirty & /*section*/ 1) && t21_value !== (t21_value = /*block*/ ctx[12].settings.product_title_2 + "")) set_data(t21, t21_value);
			if ((!current || dirty & /*section*/ 1) && t23_value !== (t23_value = /*block*/ ctx[12].settings.product_2_param_1_value + "")) set_data(t23, t23_value);
			if ((!current || dirty & /*section*/ 1) && t25_value !== (t25_value = /*block*/ ctx[12].settings.product_2_param_1_unit + "")) set_data(t25, t25_value);
			if ((!current || dirty & /*section*/ 1) && t27_value !== (t27_value = /*block*/ ctx[12].settings.param_1 + "")) set_data(t27, t27_value);
			if ((!current || dirty & /*section*/ 1) && t29_value !== (t29_value = /*block*/ ctx[12].settings.product_2_param_2_value + "")) set_data(t29, t29_value);
			if ((!current || dirty & /*section*/ 1) && t31_value !== (t31_value = /*block*/ ctx[12].settings.product_2_param_2_unit + "")) set_data(t31, t31_value);
			if ((!current || dirty & /*section*/ 1) && t33_value !== (t33_value = /*block*/ ctx[12].settings.param_2 + "")) set_data(t33, t33_value);
			if ((!current || dirty & /*section*/ 1) && t35_value !== (t35_value = /*block*/ ctx[12].settings.product_2_param_3_value + "")) set_data(t35, t35_value);
			if ((!current || dirty & /*section*/ 1) && t37_value !== (t37_value = /*block*/ ctx[12].settings.product_2_param_3_unit + "")) set_data(t37, t37_value);
			if ((!current || dirty & /*section*/ 1) && t39_value !== (t39_value = /*block*/ ctx[12].settings.param_3 + "")) set_data(t39, t39_value);
		},
		i(local) {
			if (current) return;

			add_render_callback(() => {
				if (!span0_transition) span0_transition = create_bidirectional_transition(span0, incrementor, {}, true);
				span0_transition.run(1);
			});

			add_render_callback(() => {
				if (!span1_transition) span1_transition = create_bidirectional_transition(span1, incrementor, {}, true);
				span1_transition.run(1);
			});

			add_render_callback(() => {
				if (!span2_transition) span2_transition = create_bidirectional_transition(span2, incrementor, {}, true);
				span2_transition.run(1);
			});

			add_render_callback(() => {
				if (!span3_transition) span3_transition = create_bidirectional_transition(span3, incrementor, {}, true);
				span3_transition.run(1);
			});

			add_render_callback(() => {
				if (!span4_transition) span4_transition = create_bidirectional_transition(span4, incrementor, {}, true);
				span4_transition.run(1);
			});

			add_render_callback(() => {
				if (!span5_transition) span5_transition = create_bidirectional_transition(span5, incrementor, {}, true);
				span5_transition.run(1);
			});

			add_render_callback(() => {
				if (!div26_transition) div26_transition = create_bidirectional_transition(div26, fade, { easing: cubicInOut, duration: 700 }, true);
				div26_transition.run(1);
			});

			current = true;
		},
		o(local) {
			if (!span0_transition) span0_transition = create_bidirectional_transition(span0, incrementor, {}, false);
			span0_transition.run(0);
			if (!span1_transition) span1_transition = create_bidirectional_transition(span1, incrementor, {}, false);
			span1_transition.run(0);
			if (!span2_transition) span2_transition = create_bidirectional_transition(span2, incrementor, {}, false);
			span2_transition.run(0);
			if (!span3_transition) span3_transition = create_bidirectional_transition(span3, incrementor, {}, false);
			span3_transition.run(0);
			if (!span4_transition) span4_transition = create_bidirectional_transition(span4, incrementor, {}, false);
			span4_transition.run(0);
			if (!span5_transition) span5_transition = create_bidirectional_transition(span5, incrementor, {}, false);
			span5_transition.run(0);
			if (!div26_transition) div26_transition = create_bidirectional_transition(div26, fade, { easing: cubicInOut, duration: 700 }, false);
			div26_transition.run(0);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div26);
			destroy_each(each_blocks, detaching);
			if (detaching && span0_transition) span0_transition.end();
			if (detaching && span1_transition) span1_transition.end();
			if (detaching && span2_transition) span2_transition.end();
			if (detaching && span3_transition) span3_transition.end();
			if (detaching && span4_transition) span4_transition.end();
			if (detaching && span5_transition) span5_transition.end();
			if (detaching && div26_transition) div26_transition.end();
			mounted = false;
			dispose();
		}
	};
}

// (111:14) {#each  section.blocks as block, index   }
function create_each_block_1(ctx) {
	let option;
	let t0_value = /*block*/ ctx[12].settings.product_title_1 + "";
	let t0;
	let t1;
	let option_value_value;

	return {
		c() {
			option = element("option");
			t0 = text(t0_value);
			t1 = space();
			this.h();
		},
		l(nodes) {
			option = claim_element(nodes, "OPTION", { class: true });
			var option_nodes = children(option);
			t0 = claim_text(option_nodes, t0_value);
			t1 = claim_space(option_nodes);
			option_nodes.forEach(detach);
			this.h();
		},
		h() {
			option.__value = option_value_value = /*forloop*/ ctx[13].index;
			option.value = option.__value;
			attr(option, "class", "svelte-1ldfpml");
		},
		m(target, anchor) {
			insert_hydration(target, option, anchor);
			append_hydration(option, t0);
			append_hydration(option, t1);
		},
		p(ctx, dirty) {
			if (dirty & /*section*/ 1 && t0_value !== (t0_value = /*block*/ ctx[12].settings.product_title_1 + "")) set_data(t0, t0_value);

			if (dirty & /*section*/ 1 && option_value_value !== (option_value_value = /*forloop*/ ctx[13].index)) {
				option.__value = option_value_value;
				option.value = option.__value;
			}
		},
		d(detaching) {
			if (detaching) detach(option);
		}
	};
}

// (87:2) {#each  section.blocks as block, index   }
function create_each_block(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*current_block*/ ctx[1] == /*forloop*/ ctx[13].index && create_if_block(ctx);

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
			current = true;
		},
		p(ctx, dirty) {
			if (/*current_block*/ ctx[1] == /*forloop*/ ctx[13].index) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*current_block, section*/ 3) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
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
			if (if_block) if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

function create_fragment(ctx) {
	let div1;
	let h1;
	let t0_value = /*section*/ ctx[0].settings.title + "";
	let t0;
	let t1;
	let h2;
	let t2_value = /*section*/ ctx[0].settings.subtitle + "";
	let t2;
	let t3;
	let t4;
	let div0;
	let current;
	let each_value_2 = /*section*/ ctx[0].blocks;
	let each_blocks_1 = [];

	for (let i = 0; i < each_value_2.length; i += 1) {
		each_blocks_1[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
	}

	const out = i => transition_out(each_blocks_1[i], 1, 1, () => {
		each_blocks_1[i] = null;
	});

	let each_value = /*section*/ ctx[0].blocks;
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out_1 = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			div1 = element("div");
			h1 = element("h1");
			t0 = text(t0_value);
			t1 = space();
			h2 = element("h2");
			t2 = text(t2_value);
			t3 = space();

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t4 = space();
			div0 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h1 = claim_element(div1_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, t0_value);
			h1_nodes.forEach(detach);
			t1 = claim_space(div1_nodes);
			h2 = claim_element(div1_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t2 = claim_text(h2_nodes, t2_value);
			h2_nodes.forEach(detach);
			t3 = claim_space(div1_nodes);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].l(div1_nodes);
			}

			t4 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div0_nodes);
			}

			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(h1, "class", " svelte-1ldfpml");
			attr(h2, "class", " svelte-1ldfpml");
			attr(div0, "class", "transition-enforcement svelte-1ldfpml");
			attr(div1, "class", "comparison-section-wrapper svelte-1ldfpml");
		},
		m(target, anchor) {
			insert_hydration(target, div1, anchor);
			append_hydration(div1, h1);
			append_hydration(h1, t0);
			append_hydration(div1, t1);
			append_hydration(div1, h2);
			append_hydration(h2, t2);
			append_hydration(div1, t3);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(div1, null);
			}

			append_hydration(div1, t4);
			append_hydration(div1, div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div0, null);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if ((!current || dirty & /*section*/ 1) && t0_value !== (t0_value = /*section*/ ctx[0].settings.title + "")) set_data(t0, t0_value);
			if ((!current || dirty & /*section*/ 1) && t2_value !== (t2_value = /*section*/ ctx[0].settings.subtitle + "")) set_data(t2, t2_value);

			if (dirty & /*section, cubicInOut, current_block*/ 3) {
				each_value_2 = /*section*/ ctx[0].blocks;
				let i;

				for (i = 0; i < each_value_2.length; i += 1) {
					const child_ctx = get_each_context_2(ctx, each_value_2, i);

					if (each_blocks_1[i]) {
						each_blocks_1[i].p(child_ctx, dirty);
						transition_in(each_blocks_1[i], 1);
					} else {
						each_blocks_1[i] = create_each_block_2(child_ctx);
						each_blocks_1[i].c();
						transition_in(each_blocks_1[i], 1);
						each_blocks_1[i].m(div1, t4);
					}
				}

				group_outros();

				for (i = each_value_2.length; i < each_blocks_1.length; i += 1) {
					out(i);
				}

				check_outros();
			}

			if (dirty & /*cubicInOut, section, liquid, current_block*/ 7) {
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
						each_blocks[i].m(div0, null);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out_1(i);
				}

				check_outros();
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value_2.length; i += 1) {
				transition_in(each_blocks_1[i]);
			}

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			each_blocks_1 = each_blocks_1.filter(Boolean);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				transition_out(each_blocks_1[i]);
			}

			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) detach(div1);
			destroy_each(each_blocks_1, detaching);
			destroy_each(each_blocks, detaching);
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

function incrementor(node, { speed = 2, delay = 400 }) {
	const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

	if (!valid) {
		throw new Error(`This transition only works on elements with a single text node child`);
	}

	const text = node.textContent;
	const targetValue = parseInt(text, 10);
	const duration = targetValue / (speed * 0.01);
	node.textContent = 0;

	return {
		delay,
		duration,
		tick: t => {
			node.innerHTML = new Array(("" + targetValue).length - ("" + Math.ceil(t * parseInt(text, 10))).length).fill('&nbsp;').reduce((c, ch) => c + ch, '') + Math.ceil(t * parseInt(text, 10));
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { importsSeek = 'lower' } = $$props;
	let themeImports = getContext('svelteProps') || {};
	let lec = getContext('lec') || {};
	(() => window.cicR = $$props.resetCicR ? 1 : window.cicR + 1)();
	const cic = window.cicR;
	const liquid = cachedLiquid(lec);

	cartStore.subscribe(cartStore => {
		console.log('$cart ', cartStore);
	});

	let section = {};
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
	console.log('section ', section);
	console.log('section blocks', section.blocks);

	let current_block = 1;

	function select_change_handler() {
		current_block = select_value(this);
		$$invalidate(1, current_block);
		$$invalidate(0, section);
	}

	$$self.$$set = $$new_props => {
		$$invalidate(11, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ('importsSeek' in $$new_props) $$invalidate(3, importsSeek = $$new_props.importsSeek);
		if ('sectionƒƒsettings' in $$new_props) $$invalidate(4, sectionƒƒsettings = $$new_props.sectionƒƒsettings);
		if ('sectionƒƒblocks' in $$new_props) $$invalidate(5, sectionƒƒblocks = $$new_props.sectionƒƒblocks);
	};

	$$props = exclude_internal_props($$props);

	return [
		section,
		current_block,
		liquid,
		importsSeek,
		sectionƒƒsettings,
		sectionƒƒblocks,
		select_change_handler
	];
}

class Product_comparison extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			importsSeek: 3,
			sectionƒƒsettings: 4,
			sectionƒƒblocks: 5
		});
	}
}

export { Product_comparison as default };
