import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="card h-100 text-center d-flex flex-column">
      <img
        src={product.image}
        className="card-img-top"
        alt={product.title}
        style={{ height: "300px", objectFit: "contain" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text flex-grow-1">
          {product.description.substring(0, 100)}...
        </p>
        <p className="fw-bold">${product.price}</p>
        <button className="btn btn-primary mt-auto">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
