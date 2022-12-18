<script>
  import cachedLiquid from 'liquivelte-liquid.js';
  export let lec;
  const liquid = cachedLiquid(lec);
  let index = 0;

  export let cart;  
  import { Button, Block, View, Page } from 'framework7-liquivelte'; 
  import Loadable from '../../../snippets/loadable.liquivelte';
  import { cartStore, cartOpen } from '../../../scripts/store.module.js';


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
  <View   cart={cart}    lec={lec} >
    <Page   cart={cart}    lec={lec} >
      <Block   cart={cart}    lec={lec} > 
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
							<Loadable  bind:loading   cart={cart}    lec={lec} > 
								<QuantityBox  minimum={min_amounts_data[item.id]} quantity="{item.quantity}" on:qtychange="{quantityChange.bind(item)}"   cart={cart}    lec={lec} /> 
							</Loadable>
						</div>
						<div class="cart-item-right">
							<Loadable  bind:loading   cart={cart}    lec={lec} > 
								<div class="pointer" on:click="{() => updateLineItem(item.id, 0) }" > </div>
							</Loadable>
							<div class="cart-item-price text-black text-xl"> { liquid.money(item.price) } </div>
						</div> 
					</div>
				{/each}      </Block>
    </Page>
  </View>
