import { SvelteComponent, init, safe_not_equal, element, claim_element, children, detach, attr, insert_hydration, transition_in, check_outros, transition_out, destroy_each, getContext, assign, exclude_internal_props, text, space, create_component, claim_text, claim_space, claim_component, append_hydration, mount_component, set_data, destroy_component, group_outros } from './liquivelte-svelte-hs090e373f.liquivelte.js';
import { Icon } from './header-hs71f23220.liquivelte.js';
import './liquivelte-liquid-hse5fd4a35.liquivelte.js';
import './framework7-liquivelte-get-params-hsb1e4d723.liquivelte.js';
import './framework7-liquivelte-utils-hs2bad2506.liquivelte.js';
import './framework7-liquivelte-params-list-hs24f17e13.liquivelte.js';
import './store.js-hsfb1e7932.liquivelte.js';
import './product-carousel-hsbf2f1379.liquivelte.js';
import './framework7-liquivelte-hs33dd931d.liquivelte.js';
import './framework7-liquivelte-popup-hsb970c206.liquivelte.js';
import './framework7-liquivelte-view-hscb88d550.liquivelte.js';
import './framework7-liquivelte-router-context-provider-hs43d87188.liquivelte.js';
import './framework7-liquivelte-login-screen-hsa2b3037f.liquivelte.js';
import './framework7-liquivelte-sheet-hs6b26a509.liquivelte.js';
import './framework7-liquivelte-popover-hs032af6c2.liquivelte.js';
import './framework7-liquivelte-panel-hs2bdd25f6.liquivelte.js';
import './framework7-liquivelte-block-title-hse97da654.liquivelte.js';
import './framework7-liquivelte-block-hs65cdf1dd.liquivelte.js';
import './framework7-liquivelte-swiper-slide-hsc059bb7b.liquivelte.js';
import './framework7-liquivelte-swiper-hs47381909.liquivelte.js';
import './framework7-liquivelte-mount-swiper-hsb5c2f4a0.liquivelte.js';
import './framework7-liquivelte-get-changed-params-hsa2f01129.liquivelte.js';
import './framework7-liquivelte-update-swiper-hsbd782d24.liquivelte.js';
import './framework7-liquivelte-card-content-hs575cc31d.liquivelte.js';
import './framework7-liquivelte-card-footer-hs06ffdb74.liquivelte.js';
import './framework7-liquivelte-card-header-hse3c6c15f.liquivelte.js';
import './framework7-liquivelte-card-hs32d9aaed.liquivelte.js';
import './framework7-liquivelte-link-hse74493da.liquivelte.js';
import './framework7-liquivelte-use-icon-hsa87a419d.liquivelte.js';
import './framework7-liquivelte-icon-hs04fd4a05.liquivelte.js';
import './framework7-liquivelte-badge-hs89a927dc.liquivelte.js';
import './framework7-liquivelte-button-hs9bcddf2d.liquivelte.js';
import './framework7-liquivelte-preloader-hs38ebb4b8.liquivelte.js';
import './framework7-liquivelte-stepper-hs0b3e626c.liquivelte.js';
import './framework7-liquivelte-list-item-hs15e890e9.liquivelte.js';
import './framework7-liquivelte-list-hs6439623e.liquivelte.js';
import './framework7-liquivelte-accordion-content-hse524ca59.liquivelte.js';
import './framework7-liquivelte-col-hs2da9052e.liquivelte.js';
import './framework7-liquivelte-row-hs519e1c7d.liquivelte.js';
import './framework7-liquivelte-appbar-hs2fac7e16.liquivelte.js';
import './framework7-liquivelte-page-hs5827d292.liquivelte.js';
import './framework7-liquivelte-page-content-hs022ac40f.liquivelte.js';

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