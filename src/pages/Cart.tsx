import { useCartStore } from "../store/cartStore";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import { ShoppingBag, Plus, Minus, Trash2, ArrowRight, ShieldCheck, Truck } from "lucide-react";

const Cart = () => {
  const items = useCartStore((state) => state.items);
  const increaseQty = useCartStore((state) => state.increaseQty);
  const decreaseQty = useCartStore((state) => state.decreaseQty);
  const removeItem = useCartStore((state) => state.removeItem);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-6">
        <SEO title="Cart Empty" />
        <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-6">
          <ShoppingBag size={40} className="text-slate-400" />
        </div>
        <h2 className="text-2xl font-display font-bold text-slate-900 mb-2">Your cart is empty</h2>
        <p className="text-slate-500 mb-8 max-w-xs text-center font-medium">
          Looks like you haven't added anything yet. Explore our products to find something you love.
        </p>
        <Link 
          to="/products"
          className="bg-slate-900 text-white px-8 py-3 rounded-2xl font-bold hover:bg-blue-600 transition-all active:scale-95 cursor-pointer flex items-center gap-2"
        >
          <span>Start Shopping</span>
          <ArrowRight size={18} />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <SEO title="Your Cart" description="Review your selected items and proceed to checkout." />
      
      <h1 className="text-4xl font-display font-bold text-slate-900 mb-10 tracking-tight">
        Shopping <span className="text-blue-600">Cart</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Items List */}
        <div className="lg:col-span-2 space-y-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="group bg-white border border-slate-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row items-center gap-6"
            >
              <div className="w-24 h-24 shrink-0 bg-slate-50 rounded-2xl overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="flex-grow text-center sm:text-left">
                <h2 className="text-lg font-display font-bold text-slate-900 mb-1">{item.title}</h2>
                <p className="text-blue-600 font-bold text-sm mb-4 sm:mb-0">${item.price}</p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center bg-slate-50 rounded-2xl p-1 border border-slate-100">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="w-8 h-8 flex items-center justify-center bg-white rounded-xl shadow-sm text-slate-500 hover:text-red-500 transition-colors cursor-pointer"
                >
                  <Minus size={16} />
                </button>

                <span className="font-bold text-slate-900 px-4 min-w-[2.5rem] text-center">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="w-8 h-8 flex items-center justify-center bg-white rounded-xl shadow-sm text-slate-500 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  <Plus size={16} />
                </button>
              </div>

              <div className="min-w-[100px]">
                <p className="text-lg font-display font-bold text-slate-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-xs font-bold text-red-400 uppercase tracking-widest hover:text-red-600 transition-colors mt-1 cursor-pointer flex items-center justify-end gap-1"
                >
                  <Trash2 size={12} />
                  <span>Remove</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="glass rounded-lg p-8 border-white/40 sticky top-24">
            <h2 className="text-xl font-display font-bold text-slate-900 mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <ShoppingBag size={16} />
                  <span>Subtotal</span>
                </div>
                <span className="text-slate-900 font-bold">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <Truck size={16} />
                  <span>Shipping</span>
                </div>
                <span className="text-green-600 font-bold uppercase text-xs tracking-widest">Free</span>
              </div>
              <div className="border-t border-slate-100 pt-4 flex justify-between">
                <span className="text-lg font-bold text-slate-900">Total</span>
                <span className="text-2xl font-display font-bold text-blue-600">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold tracking-wide hover:bg-blue-600 transition-all active:scale-95 shadow-lg shadow-slate-200 cursor-pointer flex items-center justify-center gap-2">
              <span>Proceed to Checkout</span>
              <ArrowRight size={18} />
            </button>
            
            <div className="flex items-center justify-center gap-2 mt-6">
              <ShieldCheck size={14} className="text-slate-400" />
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] text-center">
                Secure Checkout • Fast Delivery
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

