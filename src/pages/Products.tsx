import { useEffect, useState } from "react";
import { api } from "../services/api";
import type { Product } from "../types";
import ProductCard from "../components/ProductCard";
import SEO from "../components/SEO";
import InfiniteScroll from "react-infinite-scroll-component";

const LIMIT = 12;

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async (initial = false) => {
    try {
      const res = await api.get(
        `/products?limit=${LIMIT}&skip=${initial ? 0 : skip}`
      );

      const newProducts = res.data.products;

      setProducts((prev) =>
        initial ? newProducts : [...prev, ...newProducts]
      );

      setSkip((prev) => prev + LIMIT);

      // stop when no more products
      if (newProducts.length < LIMIT) {
        setHasMore(false);
      }
    } catch (err) {
      console.log("Error fetching products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(true);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <SEO
        title="Explore Products"
        description="Browse our premium collection of high-quality products."
      />

      <div className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Featured <span className="text-blue-600">Products</span>
        </h1>
        <p className="text-slate-500 max-w-lg">
          Discover our handpicked selection of premium goods.
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
      ) : (
        <InfiniteScroll
          dataLength={products.length}
          next={() => fetchProducts()}
          hasMore={hasMore}
          loader={
            <div className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="bg-white rounded-4xl p-4 border border-slate-100 shadow-sm animate-pulse">
                    <div className="aspect-square bg-slate-100 rounded-2xl mb-4"></div>
                    <div className="h-4 bg-slate-100 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-slate-100 rounded w-1/2"></div>
                  </div>
                ))}
              </div>
              <p className="text-center mt-6 text-gray-500">
                Loading more products...
              </p>
            </div>
          }
          endMessage={
            <p className="text-center mt-6 text-gray-400">
              No more products to show. You've seen it all!
            </p>
          }
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};

export default Products;