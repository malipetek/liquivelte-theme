import { writable, derived } from "svelte/store";
import { addToCart, updateLineItem, updateHistoryState } from './utils.js';
export const cartOpen = writable(false);
export const loading = writable(false);

function createCartStore() {
	const { subscribe, set, update } = writable(0);
  let cart;
  subscribe(state => {
    cart = state;
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

export const cartStore = createCartStore();
