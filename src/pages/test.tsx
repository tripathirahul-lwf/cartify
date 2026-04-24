import { useEffect, useState } from "react";
import { api } from "../services/api";
import type { Product } from "../types";
import ProductCard from "../components/ProductCard";
import SEO from "../components/SEO";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("/products");
        setProducts(res.data.products);
      } catch (err) {
        setError("Unable to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <SEO title="Explore Products" description="Browse our premium collection of high-quality products." />
      
      <div className="mb-12">
        <h1 className="text-4xl font-display font-bold text-slate-900 mb-4 tracking-tight">
          Featured <span className="text-blue-600">Products</span>
        </h1>
        <p className="text-slate-500 max-w-lg ">
          Discover our handpicked selection of premium goods designed to elevate your lifestyle.
        </p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-white rounded-4xl p-4 border border-slate-100 shadow-sm animate-pulse">
              <div className="aspect-square bg-slate-100 rounded-2xl mb-4"></div>
              <div className="h-4 bg-slate-100 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-slate-100 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      ) : error ? (
        <div className="text-center py-20">
          <p className="text-red-500 font-bold uppercase tracking-widest">{error}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
