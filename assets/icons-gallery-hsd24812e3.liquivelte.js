import { SvelteComponent, init, safe_not_equal, element, claim_element, children, detach, attr, insert_hydration, transition_in, check_outros, transition_out, destroy_each, getContext, assign, exclude_internal_props, text, space, create_component, claim_text, claim_space, claim_component, append_hydration, mount_component, set_data, destroy_component, group_outros } from './liquivelte-svelte-hs75fa7249.liquivelte.js';
import { Icon } from './header-hsf6a27ce4.liquivelte.js';
import './framework7-liquivelte-get-params-hsf7b0a459.liquivelte.js';
import './framework7-liquivelte-utils-hs84a9c325.liquivelte.js';
import './framework7-liquivelte-params-list-hse5f5b7fb.liquivelte.js';
import './store.js-hs608720b7.liquivelte.js';
import './product-carousel-hs6613fc30.liquivelte.js';
import './framework7-liquivelte-hs7cccafc5.liquivelte.js';
import './framework7-liquivelte-popup-hsb6d11cdb.liquivelte.js';
import './framework7-liquivelte-view-hsd7ca4772.liquivelte.js';
import './framework7-liquivelte-router-context-provider-hs6ce7143b.liquivelte.js';
import './framework7-liquivelte-login-screen-hse2891b0e.liquivelte.js';
import './framework7-liquivelte-sheet-hs1878d772.liquivelte.js';
import './framework7-liquivelte-popover-hs5f0433a4.liquivelte.js';
import './framework7-liquivelte-panel-hs631fa697.liquivelte.js';
import './framework7-liquivelte-block-title-hs43eb0265.liquivelte.js';
import './framework7-liquivelte-block-hs8b98a9a4.liquivelte.js';
import './framework7-liquivelte-swiper-slide-hsc173c79f.liquivelte.js';
import './framework7-liquivelte-swiper-hs7cef8298.liquivelte.js';
import './framework7-liquivelte-mount-swiper-hs2e0ee625.liquivelte.js';
import './framework7-liquivelte-get-changed-params-hse7431b82.liquivelte.js';
import './framework7-liquivelte-update-swiper-hs2234c08f.liquivelte.js';
import './liquivelte-liquid-hse8b69f91.liquivelte.js';
import './framework7-liquivelte-card-content-hs237af4ce.liquivelte.js';
import './framework7-liquivelte-card-footer-hs326c719f.liquivelte.js';
import './framework7-liquivelte-card-header-hsd8d20cd2.liquivelte.js';
import './framework7-liquivelte-card-hsa84c9b0c.liquivelte.js';
import './framework7-liquivelte-link-hs56d87ec1.liquivelte.js';
import './framework7-liquivelte-use-icon-hs65073cfd.liquivelte.js';
import './framework7-liquivelte-icon-hsa35de90a.liquivelte.js';
import './framework7-liquivelte-badge-hs78101d76.liquivelte.js';
import './framework7-liquivelte-button-hs908dcf02.liquivelte.js';
import './framework7-liquivelte-preloader-hsc20082b2.liquivelte.js';
import './framework7-liquivelte-stepper-hse159bbb1.liquivelte.js';
import './framework7-liquivelte-list-item-hsaef9f160.liquivelte.js';
import './framework7-liquivelte-list-hsb776d5a5.liquivelte.js';
import './framework7-liquivelte-accordion-content-hs55062447.liquivelte.js';
import './framework7-liquivelte-col-hs603a52df.liquivelte.js';
import './framework7-liquivelte-row-hs5b282b43.liquivelte.js';
import './framework7-liquivelte-appbar-hs2f4b6db1.liquivelte.js';
import './framework7-liquivelte-page-hsa81a261d.liquivelte.js';
import './framework7-liquivelte-page-content-hse544cda8.liquivelte.js';

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/src/sections/icons-gallery.liquivelte generated by Svelte v3.50.0 */

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[7] = list[i];
	child_ctx[10] = i;

	const constants_0 = {
		first: /*index*/ child_ctx[10] === 0,
		index: /*index*/ child_ctx[10] + 1,
		index0: /*index*/ child_ctx[10],
		last: /*index*/ child_ctx[10] === /*icons*/ child_ctx[0].length - 1,
		rindex: /*icons*/ child_ctx[0].length - /*index*/ child_ctx[10],
		rindex0: /*icons*/ child_ctx[0].length - /*index*/ child_ctx[10] - 1,
		length: /*icons*/ child_ctx[0].length
	};

	child_ctx[8] = constants_0;
	return child_ctx;
}

// (29:2) {#each  icons as icon, index   }
function create_each_block(ctx) {
	let div1;
	let h3;
	let t0_value = /*icon*/ ctx[7] + "";
	let t0;
	let t1;
	let div0;
	let icon;
	let t2;
	let current;
	icon = new Icon({ props: { name: /*icon*/ ctx[7] } });

	return {
		c() {
			div1 = element("div");
			h3 = element("h3");
			t0 = text(t0_value);
			t1 = space();
			div0 = element("div");
			create_component(icon.$$.fragment);
			t2 = space();
			this.h();
		},
		l(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h3 = claim_element(div1_nodes, "H3", {});
			var h3_nodes = children(h3);
			t0 = claim_text(h3_nodes, t0_value);
			h3_nodes.forEach(detach);
			t1 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			claim_component(icon.$$.fragment, div0_nodes);
			div0_nodes.forEach(detach);
			t2 = claim_space(div1_nodes);
			div1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div0, "class", "w-8");
			attr(div1, "class", "svelte-87m1e3");
		},
		m(target, anchor) {
			insert_hydration(target, div1, anchor);
			append_hydration(div1, h3);
			append_hydration(h3, t0);
			append_hydration(div1, t1);
			append_hydration(div1, div0);
			mount_component(icon, div0, null);
			append_hydration(div1, t2);
			current = true;
		},
		p(ctx, dirty) {
			if ((!current || dirty & /*icons*/ 1) && t0_value !== (t0_value = /*icon*/ ctx[7] + "")) set_data(t0, t0_value);
			const icon_changes = {};
			if (dirty & /*icons*/ 1) icon_changes.name = /*icon*/ ctx[7];
			icon.$set(icon_changes);
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
			if (detaching) detach(div1);
			destroy_component(icon);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let current;
	let each_value = /*icons*/ ctx[0];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div, "class", "gallery svelte-87m1e3");
		},
		m(target, anchor) {
			insert_hydration(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (dirty & /*icons*/ 1) {
				each_value = /*icons*/ ctx[0];
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
						each_blocks[i].m(div, null);
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
			if (detaching) detach(div);
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

function instance($$self, $$props, $$invalidate) {
	let { importsSeek = 'lower' } = $$props;
	let themeImports = getContext('svelteProps') || {};
	getContext('lec') || {};
	(() => window.cicR = $$props.resetCicR ? 1 : window.cicR + 1)();
	const cic = window.cicR;
	let { icons = themeImports['icons'].find(e => e.component_index == fc(themeImports['icons'].map(e => e.component_index), cic, importsSeek)).value } = $$props;

	$$self.$$set = $$new_props => {
		$$invalidate(6, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ('importsSeek' in $$new_props) $$invalidate(1, importsSeek = $$new_props.importsSeek);
		if ('icons' in $$new_props) $$invalidate(0, icons = $$new_props.icons);
	};

	$$props = exclude_internal_props($$props);
	return [icons, importsSeek];
}

class Icons_gallery extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { importsSeek: 1, icons: 0 });
	}
}

export { Icons_gallery as default };