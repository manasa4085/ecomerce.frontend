import React from "react";

const Banner = () => {
  return (
    <section
      className="text-center text-white py-5"
      style={{
        background:
          "https://img.freepik.com/free-photo/arrangement-black-friday-shopping-carts-with-copy-space_23-2148667047.jpg?t=st=1742203215~exp=1742206815~hmac=2fc2274724c92b899ee44d7b01029612eeb33d694a3a75cfef1e9b0f3206d77c&w=996",
      }}
    >
      <div className="container">
        <h1>Find it. Love it. Buy it.</h1>
        <p>Fashion, Deals, and More - All in one Place!</p>
        <a href="#" className="btn btn-light">
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default Banner;
