import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../context/CartProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  const { addToCart } = useContext(CartContext);

  const handleAdd = () => {
    addToCart(product);
    navigate("/cart");
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setError(error.message);
      }
    };

    fetchProduct();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p className="fw-bold">${product.price}</p>
            <button className="btn btn-primary me-2" onClick={handleAdd}>
              Add to Cart
            </button>
            <button className="btn btn-success">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
