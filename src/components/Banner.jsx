import React from "react";

const Banner = () => {
  return (
    <section
      className="text-center text-white py-5"
      style={{
        background:
          "url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.1') no-repeat center/cover",
      }}
    >
      <div className="container">
        <h1>Discover the Best Deals</h1>
        <p>Shop the latest trends at unbeatable prices.</p>
        <a href="#" className="btn btn-light">
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default Banner;
