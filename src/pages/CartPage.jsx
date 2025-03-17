import React, { useContext } from "react";
import { CartContext } from "../context/CartProvider";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(productId, newQuantity);
    }
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container my-5 h-100">
      <h2 className="text-center mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="row">
          {cart.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="fw-bold">${item.price}</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="btn btn-danger mt-2"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <div className="text-center mt-4">
          <h4>Total: ${totalPrice.toFixed(2)}</h4>
          <button className="btn btn-success">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
