<script> 
    export let addToCartText;
    export let soldOutText;
    export let includeTaxes;
    export let shippingPolicyUrl;
    export let accesibilityError;
    export let quantityMinimumMessage;
    export let shop;

    const props = {
        addToCartText,
        soldOutText,
        includeTaxes,
        shippingPolicyUrl,
        accesibilityError,
        quantityMinimumMessage,
        shop,
    }
  
    import Carousel from './Carousel.svelte';
    import ProductModal from './ProductModal.svelte';
    import liquid from '../liquivelte-liquid.js';
    import { fade } from 'svelte/transition';
    import { flip } from 'svelte/animate';
    import { onMount } from 'svelte';
    import { preloadImage } from '../scripts/utils';
    export let lookbook;
    let currentImage;
    let ind = 0
    // console.log('lookbook ', lookbook);
  
    let imageContainer, lastHeight;
    let modalopen = false;
    let currentProd;
    let numItems = window.innerWidth < 500 ? 3 : window.innerWidth < 750 ? 4 : window.innerWidth < 1000 ? 6 : 8
    let first_image_loaded = false;
    
    function selectionHandler(element) {
        currentImage = lookbook.images.find(img => img.src == element.identifier);
        ind = currentImage ? lookbook.images.indexOf(currentImage) : 0;
    }

    function openModal(handle) {
        // console.log('opening modal');
        currentProd = handle;
        modalopen = true;
    }
 
    onMount(async () => {
        await preloadImage(liquid.img_url(lookbook.images[ind].src, '1500x'))
        first_image_loaded = true;
    });

    window.addEventListener('resize', e => {
        imageContainer.firstElementChild.complete ? (lastHeight = imageContainer.firstElementChild.clientHeight > 100 ? imageContainer.firstElementChild.clientHeight : lastHeight) : imageContainer.firstElementChild.onload = () => (lastHeight = imageContainer.firstElementChild.clientHeight > 100 ? imageContainer.firstElementChild.clientHeight : lastHeight);
        numItems = window.innerWidth < 500 ? 3 : window.innerWidth < 750 ? 4 : window.innerWidth < 1000 ? 6 : 8
    })
    // $: console.log('lookbook.images[ind].product_positions', lookbook.images[ind].product_positions);
    let imageHeight = 500;
</script>
{#if first_image_loaded}    
<div class="lookbook-container" transition:fade>
    <div class="lookbook-up-pane">
        <h2 class="f-22 mb-20"> { lookbook.images[ind].title || `Page ${ind+1}`} </h2>
    </div>
    <div class="lookbook-down-pane">
        <div class="lookbook-left-pane">
        <div class="lookbook-stage" >
            {#each lookbook.images[ind].product_positions as prod (prod.handle) }
                <div
                    on:click={() => openModal(prod.handle)} 
                    animate:flip
                    class="cover-product-container" style="left: { prod.x }%; top: { prod.y }%">
                    <div class="cover-product">
                        <div class="cover-product-dot" >
                        </div>
                    </div>
                </div>
            {/each}
            <div class="lookbook-image-container" bind:this={imageContainer} style="max-height: {lastHeight + 10}px">
                {#each [lookbook.images[ind]] as image, ind (image.id) } 
                    <img on:introend={() => imageContainer.firstElementChild.complete ? (lastHeight = imageContainer.firstElementChild.clientHeight > 100 ? imageContainer.firstElementChild.clientHeight : lastHeight) : imageContainer.firstElementChild.onload = () => (lastHeight = imageContainer.firstElementChild.clientHeight > 100 ? imageContainer.firstElementChild.clientHeight : lastHeight)} 
                    transition:fade={{duration: 250, intro: true}} 
                    src="{ liquid.img_url(image.src, '1500x') }" alt="" />
                {/each}
            </div>
        </div>
        <Carousel items="{numItems}" onSelect={selectionHandler} identifier="src" margin="{8}" arrowSize="{16}">
            {#each lookbook.images as image (image.id) }
                <div class="lookbook-page-thumbnail" data-src="{image.src}">
                    <img src="{ liquid.crop(liquid.img_url(image.src, '250x250'), 'center') }" alt="" />
                </div>
            {/each}
        </Carousel>
        </div>
        <div class="lookbook-right-pane">
            <ul>
                {#each lookbook.images[ind].products as prod (prod.handle) }
                    <li 
                        on:click={() => openModal(prod.handle)} 
                        class="lookbook-prod-list-item"
                        > 
                        {prod.title} 
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</div>
{/if}
<ProductModal {...props} bind:open={modalopen} bind:handle={currentProd} />
