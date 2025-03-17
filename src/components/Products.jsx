import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Featured Products</h2>
      <div className="row">
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="col-md-4 mb-4 text-decoration-none text-dark"
          >
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Products;
