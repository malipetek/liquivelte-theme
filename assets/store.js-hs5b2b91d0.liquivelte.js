import { writable } from './liquivelte-svelte-hse72de747.liquivelte.js';
import { addToCart, updateLineItem } from './product-carousel-hse8edf5c1.liquivelte.js';

const cartOpen = writable(false);
const loading = writable(false);

function createCartStore() {
	const { subscribe, set, update } = writable(0);
  subscribe(state => {
  });
	
  return {
    subscribe,
    set,
    update,
    add: async (options) => {
      loading.set(true);
      const newCartData = await addToCart(options);
      set({ ...newCartData });
      loading.set(false);
    },
    setQuantity: async (variantId, qty) => {
      loading.set(true);
      const newCartData = await updateLineItem(variantId, qty);
      set({ ...newCartData });
      loading.set(false);
    },
    increment: async (variantId, qty) => {
      loading.set(true);
      const newCartData = await updateLineItem(variantId, qty + 1);
      set({ ...newCartData });
      loading.set(false);
    },
    decrement: async (variantId, qty) => {
      loading.set(true);
      const newCartData = await updateLineItem(variantId, qty - 1);
      set({ ...newCartData });
      loading.set(false);
    },
    reset: () => {
      
    }
	};
}

const cartStore = createCartStore();

export { cartOpen, cartStore, loading };
