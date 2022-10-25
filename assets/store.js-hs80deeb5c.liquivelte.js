import { writable } from './liquivelte-svelte-hs6e88e89c.liquivelte.js';
import { addToCart } from './header-hs0083e71a.liquivelte.js';

const cartStore = writable({});
const cartOpen = writable(false);

function createCartStore() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
    add: ({ form, variantId, qty }) => {
      if (form) {
        addToCart(form);
      }
      if (variantId) {
        addToCart();
      }
    },
    decrement: () => {
      
    },
    reset: () => {
      
    }
	};
}

export { cartOpen, cartStore };
