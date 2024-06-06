import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const API_URL = "https://fakestoreapi.com/products";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // FETCH PRODUCT DATA
  const fetchProducts = async (url) => {
    try {
      setLoading(true);

      const res = await fetch(url);
      const data = await res.json();

      setLoading(false);
      setProducts(data);
    } catch (error) {
      setLoading(false);
      console.log(`Error while fetching products: ${error}`);
    }
  };
  useEffect(() => {
    fetchProducts(API_URL);
  }, []);

  return (
    <>
      <h1 className="max-w-7xl mx-auto mt-10 mb-5 text-3xl font-semibold">
        All Products
      </h1>
      {loading && <div className="max-w-7xl mx-auto text-4xl font-semibold flex items-center justify-center">Loading...</div>}
      <div className="grid grid-cols-4 gap-10 max-w-7xl mx-auto my-10">
        {products.map((productItem) => (
          <ProductCard
            key={productItem.id}
            title={productItem.title}
            description={productItem.description}
            image={productItem.image}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
