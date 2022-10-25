import { writable, derived } from "svelte/store";
import { addToCart, updateHistoryState } from './utils.js';
export const cartStore = writable({});
export const cartOpen = writable(false);

function createCartStore() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
    add: ({ form, variantId, qty }) => {
      if (form) {
        addToCart(form)
      }
      if (variantId) {
        addToCart()
      }
    },
    decrement: () => {
      
    },
    reset: () => {
      
    }
	};
}
