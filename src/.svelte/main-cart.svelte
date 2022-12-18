
<script >
  import cachedLiquid from 'liquivelte-liquid.js';
  export let lec;
  const liquid = cachedLiquid(lec);
  let index = 0;

export let inputWidth;
  import QuantityBox from '../snippets/quantity-box.liquivelte';
  import Loadable from '../snippets/loadable.liquivelte';
	import Icon from '../snippets/icon.liquivelte';
  import { cartStore, cartOpen } from '../scripts/store.module.js';
  import { disableScrollOnBody, enableScrollOnBody } from '../scripts/utils.js';
	import { quintInOut } from 'svelte/easing';
	import { flip } from 'svelte/animate';
	import { spring } from 'svelte/motion';

	import swipe from '../scripts/swipe.js';
  export let cart;  

	export let min_amounts;

	const min_amounts_data = JSON.parse(min_amounts);

  cartStore.set(cart);
	let drawerWidth = 0;
	let formNode;
	let drawerNode;
	let loading = false;

  console.log('cart store ', $cartStore);
  $cartOpen = false;
  $: cart_action = !$cartOpen ? 'Open' : 'Close';
  
  $: if($cartOpen) {
		disableScrollOnBody();
	} else {
		enableScrollOnBody(); 
	}

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

	const swipeLeft = spring(0, {
		stiffness: 0.2,
		damping: 0.4
	}); 

	function handleSwipe(e) {
		const {x, y, dx, dy} = e.detail;
		// console.log('x,y,dx', x, y, dx, dy);
		swipeLeft.update($swipeLeft => $swipeLeft + e.detail.dx)
		if($swipeLeft > drawerWidth/3) {
			closeCart();
		}
	}    
	function handleSwipeEnd(e) {
		swipeLeft.stiffness = 0.2;
		swipeLeft.damping = 0.4;
		swipeLeft.set(0);
	}
	function handleSwipeStart() {
		swipeLeft.stiffness = swipeLeft.damping = 1;
	}

	function openCart() {
		$cartOpen = true;
	}
	function closeCart() {
		$cartOpen = false;
	}
	function toggleCart() {
		$cartOpen = !$cartOpen;
	}

	function quantityChange(event) {
		updateLineItem(this.id, event.detail.quantity); 
	}
</script>

<button on:click="{toggleCart}" > { cart_action } Cart </button>
<div 
	cart-drawer-backdrop class="w-full h-full inset-0 fixed z-9"
	class:hidden="{ $cartOpen != true }" 
	on:click="{closeCart}"
	 ></div>
 
<div id="cart-drawer" 
		class="block fixed top-0 bg-white p-16 h-full z-10 -right-full transition-all duration-300 max-w-full"
		use:swipe 
		on:swipe="{handleSwipe}"
		on:swipeStart="{handleSwipeStart}"
		on:swipeEnd="{handleSwipeEnd}"
		style="transform: translateX({$swipeLeft}px)"
		transition:fly="{ { x: 440 } }" 
		bind:this="{drawerNode}"
		bind:clientWidth="{drawerWidth}"
		class:right-0="{ $cartOpen }"
	>	
	<!-- <div class="right-0"> </div> -->
	<form bind:this="{formNode}" action="/cart" method="post" novalidate="" class="cart">
	<input type="text" hidden name="checkout" value="Checkout" />
	<div class="cart-drawer-inner">
	<div class="cart-drawer-inner-up"> 
		<div class="cart-drawer-title text-gray f-14 uppercase"> 
			<span> Shopping Cart </span>
			<span class="float-right close pointer" on:click="{closeCart}" > </span>
		</div>
		<div class="spacer"></div> 
			<div class="cart-drawer-items"> 
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
							<Loadable  bind:loading   inputWidth={inputWidth} cart={cart} min_amounts={min_amounts}    lec={lec} > 
								<QuantityBox  minimum={min_amounts_data[item.id]} quantity="{item.quantity}" on:qtychange="{quantityChange.bind(item)}"   inputWidth={inputWidth} cart={cart} min_amounts={min_amounts}    lec={lec} /> 
							</Loadable>
						</div>
						<div class="cart-item-right">
							<Loadable  bind:loading   inputWidth={inputWidth} cart={cart} min_amounts={min_amounts}    lec={lec} > 
								<div class="pointer" on:click="{() => updateLineItem(item.id, 0) }" > <Icon  name="icon-garbage" color="#a6a6a6"   inputWidth={inputWidth} cart={cart} min_amounts={min_amounts}    lec={lec} /> </div>
							</Loadable>
							<div class="cart-item-price text-black text-xl"> { liquid.money(item.price) } </div>
						</div> 
					</div>
				{/each}
			</div>
				<div class="cart-drawer-bottom">
					<div class="cart-drawer-subtotal">
						<span class="text-gray text-base float-left" data-t="{ liquid.t('general.cart.subtotal') }"> { liquid.t('general.cart.subtotal') } </span> 
						<span cart-drawer-subtotal-text class="float-right text-black text-lg ">{ liquid.money(cart.items_subtotal_price) }</span>
					</div>
					<div class="cart-drawer-taxes-notice text-base text-black float-left"> Taxes and shipping calculated at checkout </div>
					<button on:click="{() => submit() }" class="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
						 Checkout 
					</button>
					<a class="mt-10 w-full bg-gray-300 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-black hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" href="/cart"> View Cart </a>
				</div>
				<div>
					Loading { loading }
						<button class="mt-10 w-full bg-gray-300 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-black hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="button" on:click="{() => loading = !loading}"> Toggle </button>
				</div>
			</div>
		</div>
	</form>
</div>
<style global lang="postcss">
	@tailwind base;
	@tailwind utilities;

	.cart-drawer-items {
		max-height: 50vh;
		margin-right: -30px;
		padding-right: 30px;
		overflow-x: visible;
		overflow-y: scroll;
	}

	.cart-drawer-bottom {
		align-self: flex-end;
		width: 100%;
	}

	.cart-drawer-title {
		width: 300px;
		margin-bottom: 40px;
	}
	
	.cart-item-content, .cart-item-right {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		line-height: 1.1;
	}

	.cart-item-right {
		align-items: flex-end;
	}

	.cart-item-price {
		text-align: end;
	}
	.float-right {
		float: right;
	}
	#cart-drawer .close {
		position: relative;
		width: 10px;
		height: 10px;
	}
	#cart-drawer .close:before, #cart-drawer .close:after {
		content: '';
		display: block;
		position: absolute;
		width: 0px;
		height: 10px;
		border-right: 1px solid #969696;
		left: 5px;
		top: 0;
		transform-origin: center center;
	}
	#cart-drawer .close{

		&:before{
			transform: rotate(45deg);
		}
		&:after{
			transform: rotate(-45deg);
		}
	}
	.quantity-box {
		display: inline-flex;
		align-self: flex-start;
	}

	.view-cart:hover {
		color: var(--color_text_black);
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
