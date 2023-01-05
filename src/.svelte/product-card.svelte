
<script>
  import { getContext, setContext } from 'svelte';
  export let themeImports = getContext('svelteProps');
  export let rawIncludes = getContext('rawIncludes');
  export let lec = getContext('lec');

  import cachedLiquid from 'liquivelte-liquid.js';
  const liquid = cachedLiquid(lec);
  let index = 0;

  import { Card, CardHeader, CardContent, CardFooter, Link, Button, Badge } from 'framework7-liquivelte';
  import { cartStore } from '../scripts/store.module.js';
  import VerticalStepper from './vertical-stepper.liquivelte';
  import Loadable from './loadable.liquivelte';
  import Icon from './icon.liquivelte';
    
  export let product;
  let expandableOpened = false;

  function expandedToggle() {
    expandableOpened = !expandableOpened;
  }

  let cartItem;
  $: if($cartStore) {
    cartItem = $cartStore.items.find(i => i.product?.id == product.id || i.product_id == product.id);
  }
  function addToCart() {
    cartStore.add({product});
  }

	function quantityChange(event) {
		cartStore.setQuantity(this.id, +event.target.value); 
	}
  
  $: quantity = cartItem?.quantity || 0;
</script>

  <Card  classes="card-header-pic" swipeToClose hideToolbarOnOpen hideNavbarOnOpen bind:expandableOpened="{expandableOpened}"     lec={lec} >
    <Loadable  classes="absolute -right-[10px] -top-[10px] z-10" centered     lec={lec} >
      <VerticalStepper  small
                      disabled="{ !product.available }" 
                      bind:value="{ quantity }"  
                      onChange="{ quantityChange.bind(cartItem) }"
                      onClick="{addToCart}"      lec={lec} >
      </VerticalStepper>
    </Loadable>
    <CardHeader 
    classes="no-border"
    valign="bottom"
         lec={lec} >
    <Link  external href="/products/{ product.handle }"     lec={lec} >
    <img src="{ liquid.image_url(product.media[0], {"width":"300"}) }" 
    width="300"
    style="aspect-ratio: { product.media[0].aspect_ratio }" />
    </Link>
  </CardHeader>
  <CardContent      lec={lec} >
  <div >
    <span> { liquid.money(product.price) } </span>
  </div> 
    <h3>
      { product.title }
    </h3>
  </CardContent>
  
      <CardFooter      lec={lec} >
        <Link      lec={lec} > Add to Wishlist </Link>
      </CardFooter>
  </Card>
<style>
   .card-header-pic .card-header {
    background-size: cover;
    background-position: center;
    color: #fff;
  }
</style>

