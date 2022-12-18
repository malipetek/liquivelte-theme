<script>
  import cachedLiquid from 'liquivelte-liquid.js';
  export let lec;
  const liquid = cachedLiquid(lec);
  let index = 0;

  import { Card, CardHeader, CardContent, CardFooter, Link, Button } from 'framework7-liquivelte';
  export let product;
  let expandableOpened = false;
  $: console.log('expandableOpened ', expandableOpened);
  function expandedToggle() {
    expandableOpened = !expandableOpened;
  }

  let clicked = 0;
  function increment() {
    clicked = clicked + 1
  }
  
</script>

<Card  class="card-header-pic" swipeToClose hideToolbarOnOpen hideNavbarOnOpen bind:expandableOpened="{expandableOpened}"     lec={lec} >
  <CardHeader 
  class="no-border"
  valign="bottom"
       lec={lec} >
  <img src="{ liquid.image_url(product.media[0], {"width":"300"}) }" 
  width="300"
  style="aspect-ratio: { product.media[0].aspect_ratio }" />
</CardHeader>
<CardContent      lec={lec} >
<div on:click="{increment}">
  <h3>
    { product.title }
  </h3>
  { liquid.money(product.price) }
</div> 
</CardContent>
    <CardFooter      lec={lec} >
      <Button      lec={lec} > Add to Card </Button> 
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

