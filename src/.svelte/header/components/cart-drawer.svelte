
<script>
  import cachedLiquid from 'liquivelte-liquid.js';
  export let lec;
  const liquid = cachedLiquid(lec);
  let index = 0;

export let inputWidth;
  export let cart;
  import { Button, Block, BlockTitle, View, Page, List, ListItem, Stepper } from 'framework7-liquivelte'; 
  import Loadable from '../../../snippets/loadable.liquivelte';
	import QuantityBox from '../../../snippets/quantity-box.liquivelte';
  import { cartStore, cartOpen } from '../../../scripts/store.module.js';

	export let min_amounts;
	// const min_amounts_data = JSON.parse(min_amounts);

	function quantityChange(event) {
		cartStore.setQuantity(this.id, +event.target.value); 
	}
 
	cartStore.set(cart);
  </script>
  <View  classes="cart-drawer"  inputWidth={inputWidth} cart={cart} min_amounts={min_amounts}    lec={lec} >
    <Page   inputWidth={inputWidth} cart={cart} min_amounts={min_amounts}    lec={lec} >
			<Block   inputWidth={inputWidth} cart={cart} min_amounts={min_amounts}    lec={lec} >
				<BlockTitle   inputWidth={inputWidth} cart={cart} min_amounts={min_amounts}    lec={lec} >
					Cart
				</BlockTitle>
			</Block>
			<List    inputWidth={inputWidth} cart={cart} min_amounts={min_amounts}    lec={lec} >
				{#each  $cartStore.items as item, index  (item.id) }
{@const forloop = {
  first: index === 0,
  index: index + 1,
  index0: index,
  last: index === ( $cartStore.items).length - 1,
  rindex: ( $cartStore.items).length - index,
  rindex0: ( $cartStore.items).length - index - 1,
  length: ( $cartStore.items).length,
} }
					<ListItem  classes="h-[120px]"  inputWidth={inputWidth} cart={cart} min_amounts={min_amounts}    lec={lec} >
						<div slot="header" class="text-xl mb-4">{ item.product_title }</div>
						<div slot="after" class="ml-2"> { liquid.money(item.price) } </div>
						<div slot="text" class="cart-item-options">
							{#each  item.variant_options as option, index   }
{@const forloop = {
  first: index === 0,
  index: index + 1,
  index0: index,
  last: index === ( item.variant_options).length - 1,
  rindex: ( item.variant_options).length - index,
  rindex0: ( item.variant_options).length - index - 1,
  length: ( item.variant_options).length,
} }
							<span class="text-gray-500k text-base line-item-option"> { option } </span> <br>
							{/each}
						</div>
						<div slot="media">
							{#if item.image }
								<img src="{ liquid.image_url(item.image, {"width":"120"}) }" width="80" />
							{/if}
						</div>
						<div slot="footer" class="ml-2">
							<Loadable    inputWidth={inputWidth} cart={cart} min_amounts={min_amounts}    lec={lec} > 
								<Stepper  raised 
									onChange="{ quantityChange.bind(item) }"
									value="{item.quantity}"
									  inputWidth={inputWidth} cart={cart} min_amounts={min_amounts}    lec={lec} />
							</Loadable>
						</div>
					</ListItem>
				{/each}
			</List>
			<Block  classes="cart-drawer-bottom"  inputWidth={inputWidth} cart={cart} min_amounts={min_amounts}    lec={lec} >
					<div class="cart-drawer-subtotal">
						<span class="text-gray text-base float-left" data-t="{ liquid.t('general.cart.subtotal') }"> { liquid.t('general.cart.subtotal') } </span> 
						<span cart-drawer-subtotal-text class="float-right text-black text-lg ">{ liquid.money(cart.items_subtotal_price) }</span>
					</div>
					<div class="cart-drawer-taxes-notice text-base text-black float-left"> Taxes and shipping calculated at checkout </div>
					<button on:click="{() => submit() }" class="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
						 Checkout 
					</button>
					<a class="mt-10 w-full bg-gray-300 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-black hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" href="/cart"> View Cart </a>
			</Block>
    </Page>
  </View>

	<style lang="postcss">
	.cart-drawer {
		.item-title {
			overflow: visible;
		}
	}		
	.cart-drawer-bottom {
		align-self: flex-end;
		width: 100%;
	}
	.quantity-box {
			display: inline-flex;
			align-self: flex-start;
		}

	.cart-drawer-subtotal {
			margin-bottom: 10px;
		}
		.cart-drawer-taxes-notice {
			margin-bottom: 15px;
		}
		.cart-drawer-subtotal-text {
			float: right;
		}

	</style>