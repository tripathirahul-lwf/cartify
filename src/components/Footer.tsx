import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-6 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="bg-white w-fit h-10 rounded-lg mb-4 flex items-center justify-center px-3 py-4">
            <Link to="/products" className="flex items-center gap-2 group">
              <img src="/logo.webp" alt="LuxeCart Logo" className="w-40 h-10" />
            </Link>
          </div>
          <p className="max-w-xs text-sm leading-relaxed">
            Elevate your lifestyle with our curated collection of premium products.
            Quality meets elegance in every detail.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/products" className="hover:text-accent transition-colors cursor-pointer">Products</a></li>
            <li><a href="/cart" className="hover:text-accent transition-colors cursor-pointer">Cart</a></li>
            <li><a href="#" className="hover:text-accent transition-colors cursor-pointer">Account</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-accent transition-colors cursor-pointer">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-accent transition-colors cursor-pointer">Returns</a></li>
            <li><a href="#" className="hover:text-accent transition-colors cursor-pointer">FAQ</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-slate-800 mt-12 pt-8 text-xs text-center">
        © {new Date().getFullYear()} Cartify. All rights reserved. Built for excellence.
      </div>
    </footer>
  );
};

export default Footer;
