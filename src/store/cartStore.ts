import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem, Product } from "../types";

interface CartState {
  items: CartItem[];

  addToCart: (product: Product) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (product) => {
        const items = get().items;
        const existing = items.find((item) => item.id === product.id);

        if (existing) {
          set({
            items: items.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({
            items: [
              ...items,
              {
                id: product.id,
                title: product.title,
                price: product.price,
                thumbnail: product.thumbnail,
                quantity: 1,
              },
            ],
          });
        }
      },

      increaseQty: (id) => {
        set({
          items: get().items.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        });
      },

      decreaseQty: (id) => {
        const updated = get().items.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
        set({ items: updated.filter((item) => item.quantity > 0) });
      },

      removeItem: (id) => {
        set({ items: get().items.filter((item) => item.id !== id) });
      },

      clearCart: () => {
        set({ items: [] });
      },
    }),
    {
      name: "cart-storage",
    }
  )
);