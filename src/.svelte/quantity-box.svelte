
<script>
  import { getContext, setContext } from 'svelte';
  export let themeImports = getContext('svelteProps');
  export let rawIncludes = getContext('rawIncludes');
  export let lec = getContext('lec');

  import cachedLiquid from 'liquivelte-liquid.js';
  const liquid = cachedLiquid(lec);
  let index = 0;

export let inputWidth = themeImports['inputWidth'];
import { createEventDispatcher } from 'svelte';

export let quantity = 1; // default is 1 
export let minimum = 0;
const dispatch = createEventDispatcher();
let boxSize = 16;

$: quantity = quantity == null ? 0 : quantity;

$: inputWidth = boxSize + (boxSize * (quantity.toString().length - 1) * .3);

  const qtyChange = (change) => {
      // console.log('Qty change');
      quantity = quantity + change;
      dispatch('qtychange', { quantity }); 
  }
</script>

<div class="quantity-box">  
<div class:disabled={quantity <= minimum} class="minus-icon cursor-pointer" on:click="{ () => qtyChange(-1) }">-</div>
<input class="quantity text-base" name="quantity" type="number" min="0" data-quantity-input style="width: { inputWidth };" bind:value="{ quantity }" />
<div class="plus-icon cursor-pointer" on:click="{ () => qtyChange(1) }">+</div>
</div> 

<style global lang="scss">
    @import '../styles/breakpoints.scss';

    :root {
        --box-size: 32px;
        @include sm {
            --box-size: 24px;
        }
    }
    input.quantity {
        width: var(--box-size);
    }
    .quantity-box {
        border: 1px solid #E7EBED;
        display: flex;
        line-height: 1;
        flex-grow: 0;
        width: fit-content;
    }
    .plus-icon, .minus-icon {
        text-align: center;
        user-select: none;
        line-height: var(--box-size);
    }
    .plus-icon {
        width: var(--box-size);
        height: var(--box-size);
        border-left: 1px solid #E7EBED;
    }

    .minus-icon {
        width: var(--box-size);
        height: var(--box-size);
        border-right: 1px solid #E7EBED;
    }
    .quantity-box input {
        padding: 0!important;
        border: none!important;
        height: var(--box-size);
        color: #33342F;
        text-align: center;
        min-height: unset;
    }
    .quantity-box input:focus {
        outline: none;
    }
    /* Chrome, Safari, Edge, Opera */
    .quantity-box input::-webkit-outer-spin-button,
    .quantity-box input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    .quantity-box input[type=number] {
        -moz-appearance: textfield;
    }

    .disabled {
        pointer-events: none;
        opacity: 0.5;
        cursor: not-allowed;
    }
</style>