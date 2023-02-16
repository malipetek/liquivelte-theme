import { SvelteComponent, init, safe_not_equal, element, claim_element, children, detach, attr, insert_hydration, update_keyed_each, check_outros, transition_in, transition_out, getContext, onMount, afterUpdate, assign, exclude_internal_props, empty, create_component, claim_component, mount_component, destroy_component, group_outros, outro_and_destroy_block } from './liquivelte-svelte-hs75fa7249.liquivelte.js';
import { f7ready } from './framework7-liquivelte-hs7cccafc5.liquivelte.js';
import './framework7-liquivelte-get-params-hsf7b0a459.liquivelte.js';
import { Product_card } from './product-carousel-hs1d516ba7.liquivelte.js';
import './framework7-liquivelte-popup-hsb6d11cdb.liquivelte.js';
import './framework7-liquivelte-view-hsd7ca4772.liquivelte.js';
import './framework7-liquivelte-router-context-provider-hs6ce7143b.liquivelte.js';
import './framework7-liquivelte-login-screen-hse2891b0e.liquivelte.js';
import './framework7-liquivelte-sheet-hs1878d772.liquivelte.js';
import './framework7-liquivelte-popover-hs5f0433a4.liquivelte.js';
import './framework7-liquivelte-panel-hs631fa697.liquivelte.js';
import './framework7-liquivelte-utils-hs84a9c325.liquivelte.js';
import './framework7-liquivelte-params-list-hse5f5b7fb.liquivelte.js';
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
import './store.js-hsdafe1872.liquivelte.js';
import './framework7-liquivelte-button-hs908dcf02.liquivelte.js';
import './framework7-liquivelte-preloader-hsc20082b2.liquivelte.js';
import './framework7-liquivelte-stepper-hse159bbb1.liquivelte.js';
import './header-hs79932741.liquivelte.js';
import './framework7-liquivelte-list-item-hsaef9f160.liquivelte.js';
import './framework7-liquivelte-list-hsb776d5a5.liquivelte.js';
import './framework7-liquivelte-accordion-content-hs55062447.liquivelte.js';
import './framework7-liquivelte-col-hs603a52df.liquivelte.js';
import './framework7-liquivelte-row-hs5b282b43.liquivelte.js';
import './framework7-liquivelte-appbar-hs2f4b6db1.liquivelte.js';
import './framework7-liquivelte-page-hsa81a261d.liquivelte.js';
import './framework7-liquivelte-page-content-hse544cda8.liquivelte.js';

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/src/sections/collection-product-grid.liquivelte generated by Svelte v3.50.0 */

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[8] = list[i];
	child_ctx[11] = i;

	const constants_0 = {
		first: /*index*/ child_ctx[11] === 0,
		index: /*index*/ child_ctx[11] + 1,
		index0: /*index*/ child_ctx[11],
		last: /*index*/ child_ctx[11] === /*collection*/ child_ctx[0].products.length - 1,
		rindex: /*collection*/ child_ctx[0].products.length - /*index*/ child_ctx[11],
		rindex0: /*collection*/ child_ctx[0].products.length - /*index*/ child_ctx[11] - 1,
		length: /*collection*/ child_ctx[0].products.length
	};

	child_ctx[9] = constants_0;
	return child_ctx;
}

// (52:2) {#each  collection.products as product, index  (product.id) }
function create_each_block(key_1, ctx) {
	let first;
	let productcard;
	let current;

	productcard = new Product_card({
			props: {
				initialRender,
				product: /*product*/ ctx[8]
			}
		});

	return {
		key: key_1,
		first: null,
		c() {
			first = empty();
			create_component(productcard.$$.fragment);
			this.h();
		},
		l(nodes) {
			first = empty();
			claim_component(productcard.$$.fragment, nodes);
			this.h();
		},
		h() {
			this.first = first;
		},
		m(target, anchor) {
			insert_hydration(target, first, anchor);
			mount_component(productcard, target, anchor);
			current = true;
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			const productcard_changes = {};
			if (dirty & /*initialRender*/ 0) productcard_changes.initialRender = initialRender;
			if (dirty & /*collection*/ 1) productcard_changes.product = /*product*/ ctx[8];
			productcard.$set(productcard_changes);
		},
		i(local) {
			if (current) return;
			transition_in(productcard.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(productcard.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(first);
			destroy_component(productcard, detaching);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let current;
	let each_value = /*collection*/ ctx[0].products;
	const get_key = ctx => /*product*/ ctx[8].id;

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

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
			attr(div, "class", "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5");
		},
		m(target, anchor) {
			insert_hydration(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (dirty & /*initialRender, collection*/ 1) {
				each_value = /*collection*/ ctx[0].products;
				group_outros();
				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div, outro_and_destroy_block, create_each_block, null, get_each_context);
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
			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d();
			}
		}
	};
}

let initialRender = true;

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
	let { collection = themeImports['collection'].find(e => e.component_index == fc(themeImports['collection'].map(e => e.component_index), cic, importsSeek)).value } = $$props;
	let { collectionƒƒproducts } = $$props;

	try {
		collection = collection || {};
	} catch(e) {
		
	} /*whatever*/

	collection.products = themeImports['collectionƒƒproducts'].find(e => e.component_index == fc(themeImports['collectionƒƒproducts'].map(e => e.component_index), cic, importsSeek)).value;

	onMount(() => {
		f7ready(f7 => {
			window.f7 = f7;

			document.addEventListener('filters-changed', async e => {
				console.log('filters event received', e);
				const { urlToFetch } = e.detail || {};

				if (urlToFetch) {
					urlToFetch.searchParams.set('view', 'data');
					const response = await fetch(urlToFetch);
					const data = await response.json();
					$$invalidate(0, collection.products = data.products, collection);
				}
			});
		});
	});

	afterUpdate(() => {
		initialRender = false;
	});

	$$self.$$set = $$new_props => {
		$$invalidate(7, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ('importsSeek' in $$new_props) $$invalidate(1, importsSeek = $$new_props.importsSeek);
		if ('collection' in $$new_props) $$invalidate(0, collection = $$new_props.collection);
		if ('collectionƒƒproducts' in $$new_props) $$invalidate(2, collectionƒƒproducts = $$new_props.collectionƒƒproducts);
	};

	$$props = exclude_internal_props($$props);
	return [collection, importsSeek, collectionƒƒproducts];
}

class Collection_product_grid extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			importsSeek: 1,
			collection: 0,
			collectionƒƒproducts: 2
		});
	}
}

export { Collection_product_grid as default };
