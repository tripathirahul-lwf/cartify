import { Link, useNavigate } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
import { useAuthStore } from "../store/authStore";
import { ShoppingCart, LogOut, Package, User } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const items = useCartStore((state) => state.items);
  const { logout, token } = useAuthStore();

  // Show unique items count instead of total quantity
  const totalItems = items.length;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-3 flex justify-between items-center">
        <Link to="/products" className="flex items-center gap-2 group">
          <img src="/logo.webp" alt="LuxeCart Logo" className="w-40 h-10" />
        </Link>

        <div className="flex items-center gap-6">
          <Link 
            to="/products" 
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-2"
          >
            <Package size={16} />
            <span className="hidden sm:inline">Products</span>
          </Link>
          
          <Link to="/cart" className="relative group flex items-center gap-2">
            <div className="text-slate-600 group-hover:text-blue-600 transition-colors">
              <ShoppingCart size={20} />
            </div>
            <span className="text-sm font-medium text-slate-600 group-hover:text-blue-600 transition-colors hidden sm:inline">
              Cart
            </span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-blue-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full animate-bounce shadow-md border-2 border-white">
                {totalItems}
              </span>
            )}
          </Link>

          {token ? (
            <button 
              onClick={handleLogout}
              className="bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-slate-800 transition-all active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <LogOut size={16} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          ) : (
            <Link 
              to="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-blue-700 transition-all cursor-pointer flex items-center gap-2"
            >
              <User size={16} />
              <span>Login</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

