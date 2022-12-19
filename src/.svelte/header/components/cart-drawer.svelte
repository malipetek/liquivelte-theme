
<script>
  import cachedLiquid from 'liquivelte-liquid.js';
  export let lec;
  const liquid = cachedLiquid(lec);
  let index = 0;

  export let cart;
  import { Button, Block, View, Page, List, ListItem, Stepper } from 'framework7-liquivelte'; 
  import Loadable from '../../../snippets/loadable.liquivelte';
	import QuantityBox from '../../../snippets/quantity-box.liquivelte';
  import { cartStore, cartOpen } from '../../../scripts/store.module.js';

	export let min_amounts;
	// const min_amounts_data = JSON.parse(min_amounts);
	console.log('min amounts ', min_amounts);
  let loading = false;

	async function updateLineItem(itemid, quantity) {
		loading = true;
		await fetch(`/cart/update.js`, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
					updates: { [itemid]: quantity }
			})
		})
		const cartResponse = await fetch('/cart?view=json');
		const newCartData = await cartResponse.json()
		$cartStore.items = newCartData.items;
		$cartStore.items_subtotal_price = newCartData.items_subtotal_price;

		loading = false;
	}
	function quantityChange(event) {
		updateLineItem(this.id, event.detail.quantity); 
	}

  $: console.log('------> cart ', cart);
  </script>
  <View   cart={cart} min_amounts={min_amounts}    lec={lec} >
    <Page   cart={cart} min_amounts={min_amounts}    lec={lec} >
			<List  mediaList  cart={cart} min_amounts={min_amounts}    lec={lec} >
				{#each  cart.items as item, index  }
{@const forloop = {
  first: index === 0,
  index: index + 1,
  index0: index,
  last: index === ( cart.items).length - 1,
  rindex: ( cart.items).length - index,
  rindex0: ( cart.items).length - index - 1,
  length: ( cart.items).length,
} }
				<ListItem 
				title="{ item.product_title }"
			  cart={cart} min_amounts={min_amounts}    lec={lec} >
			<div slot="after" class="ml-2"> { liquid.money(item.price) } </div>
			<div slot="text" class="cart-item-options">
				{#each  item.variant_options as option, index  }
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
				<img slot="media" src="{ liquid.img_url(item.image, '120x') }" width="80" />
				<div slot="after-start">
					<Stepper  buttonsOnly="{true}" small raised   cart={cart} min_amounts={min_amounts}    lec={lec} />
				</div>
			</ListItem>
			{/each}
			</List>
      <Block   cart={cart} min_amounts={min_amounts}    lec={lec} >
				{#each  cart.items as item, index  }
{@const forloop = {
  first: index === 0,
  index: index + 1,
  index0: index,
  last: index === ( cart.items).length - 1,
  rindex: ( cart.items).length - index,
  rindex0: ( cart.items).length - index - 1,
  length: ( cart.items).length,
} }

					<div data-id="{ item.id }" class="cart-item w-full flex mb-10" transition:scale="{ { duration: 300, easing: quintInOut } }" >
						<img src="{ liquid.img_url(item.image, '120x') }" alt="cart item product image" class="flex-grow-0 mr-2 w-32" />
						<div class="cart-item-content">
							<div class="cart-item-content__up"> 
								<span class="cart-item-title text-lg"> { item.product_title } </span>
								<div class="cart-item-options">
									{#each  item.variant_options as option, index  }
{@const forloop = {
  first: index === 0,
  index: index + 1,
  index0: index,
  last: index === ( item.variant_options).length - 1,
  rindex: ( item.variant_options).length - index,
  rindex0: ( item.variant_options).length - index - 1,
  length: ( item.variant_options).length,
} }
									<span class="text-gray-500 text-base line-item-option"> { option } </span> <br>
									{/each}
								</div>
							</div>
							<Loadable  bind:loading   cart={cart} min_amounts={min_amounts}    lec={lec} > 
								<QuantityBox  quantity="{item.quantity}" on:qtychange="{quantityChange.bind(item)}"   cart={cart} min_amounts={min_amounts}    lec={lec} /> 
							</Loadable>
						</div>
						<div class="cart-item-right">
							<Loadable  bind:loading   cart={cart} min_amounts={min_amounts}    lec={lec} > 
								<div class="pointer" on:click="{() => updateLineItem(item.id, 0) }" > </div>
							</Loadable>
							<div class="cart-item-price text-black text-xl"> { liquid.money(item.price) } </div>
						</div> 
					</div>
				{/each}      
			</Block>
    </Page>
  </View>

	<style>
		
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
/*================ Spinner Icon ================*/
.icon-spinner {
  -moz-animation: spin 500ms infinite linear;
  -o-animation: spin 500ms infinite linear;
  -webkit-animation: spin 500ms infinite linear;
  animation: spin 500ms infinite linear;
}

@-webkit-keyframes spin {
  0% {
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -ms-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
	</style>