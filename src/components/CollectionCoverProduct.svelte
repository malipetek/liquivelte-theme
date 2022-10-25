<script>
    import { quintOut } from 'svelte/easing';
    import { scale } from 'svelte/transition';
    let componentNode;
    export let product;
    export let x = 50;
    export let y = 50;
    let open = false;
    document.addEventListener('click', e => {
        if(e.path.indexOf(componentNode) == -1) {
            open = false;
        }
    })
</script>
{#if product }
<div class="cover-product-container" style="left: { x }%; top: { y }%" bind:this="{componentNode}">
    <div class="cover-product"
    class:open="{open}"> 
        {#if open }
            <div class="cover-product-card" transition:scale="{ { duration: 300, easing: quintOut } }" >
                <div class="cover-product-card__content">
                    <div class="cover-product-card__title f-10 text-black">{ product.title }</div>
                    <div class="cover-product-card__fabric-content f-10"></div>
                    <div class="cover-product-card__price f-10">${ `${(""+product.price).slice(0, -2)}.${(""+product.price).slice(-2)}` }</div>
                </div>
                
                <a class="cover-product-card__link " href="/products/{product.handle}">View Product</a>
            </div>
        {/if}
        <div class="cover-product-dot" on:click="{() => open = !open }"></div>
    </div>
</div>
{/if}
<style>
    .cover-product-card {
        background-color: #fff;
        border-radius: 4px;
        position: absolute;
        width: 170px;
        height: 133px;
        bottom: 26px;
        left: -85px;
        padding: 15px;
        display: flex;
        flex-direction: column;
        transform-origin: 50% 100%;
    }

    .cover-product-card__content {
        flex: 1 1 100%;
    }
    .cover-product-card__price {
        color: var(--color_icon_gray);
    }
    .cover-product-card__link {
        text-decoration: underline;
        color: #000000CC;
    }
    .cover-product-card:after {
        content: '';
        display: block;
        width: 0;
        height: 0;
        position: absolute;
        border-width: 10px;
        border-color: #fff transparent transparent transparent;
        border-style: solid;
        bottom: -19px;
        left: 75px;
    }

    .cover-product {
        position: relative;
        width: 0px;
        height: 0px;
        z-index: 10;
    }
    .cover-product.open {
        z-index: 11;
    }
    .cover-product-container {
        position: absolute;
    }
    .cover-product-dot {
        width: 34px;
        height: 34px;
        border-radius: 55%;
        background-color: #70707099;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: -17px;
        left: -17px;
    }
    .cover-product-dot:after, .cover-product-dot:before {
        content: '';
        display: block;
        width: 1px;
        height: 16px;
        background-color: #fff;
        transition: transform .2s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    .cover-product-dot:before {
        transform: rotate(90deg);
        margin-right: -1px;
    }
    .open .cover-product-dot:before {
        transform: rotate(45deg);
    }
    .open .cover-product-dot:after {
        transform: rotate(-45deg);
    }
</style>