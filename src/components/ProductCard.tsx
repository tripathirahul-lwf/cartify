import type { Product } from "../types";
import { useCartStore } from "../store/cartStore";
import { Plus, Minus, ShoppingBag } from "lucide-react";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const items = useCartStore((state) => state.items);
  const increaseQty = useCartStore((state) => state.increaseQty);
  const decreaseQty = useCartStore((state) => state.decreaseQty);

  const item = items.find((i) => i.id === product.id);

  return (
    <div className="group bg-white rounded-4xl p-4 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
      <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square bg-slate-50">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-3 right-3 glass px-3 py-1 rounded-full">
          <span className="text-xs font-bold text-slate-900">${product.price}</span>
        </div>
      </div>

      <div className="grow">
        <h2 className="text-xl font-semibold text-slate-800 mb-1 line-clamp-1">
          {product.title}
        </h2>
        <p className="text-slate-400 text-xs font-medium line-clamp-2 leading-relaxed mb-4">
          {product.description}
        </p>
      </div>

      <div className="mt-auto">
        {!item ? (
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-slate-900 text-white py-3 rounded-2xl text-sm font-bold hover:bg-slate-800 transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Add to Cart</span>
            <ShoppingBag size={16} />
          </button>
        ) : (
          <div className="flex items-center justify-between bg-slate-100 rounded-2xl p-1">
            <button
              onClick={() => decreaseQty(product.id)}
              className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm text-slate-600 hover:text-red-500 transition-colors cursor-pointer"
            >
              <Minus size={16} />
            </button>

            <span className="font-bold text-slate-900 px-4">{item.quantity}</span>

            <button
              onClick={() => increaseQty(product.id)}
              className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <Plus size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

