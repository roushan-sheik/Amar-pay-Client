import React from "react";

const Banner = () => {
  return (
    <div className="mt-3 bg-gradient-to-r from-black to-gray-800 text-white py-16 px-4 text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Welcome to AmarPay
        </h1>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-lg">
          Your gateway to quality products and excellent service.
        </p>
        <a
          href="/products"
          className="bg-white text-black font-semibold py-2 px-6 rounded-lg hover:bg-black hover:text-white transition duration-300 shadow-lg"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Banner;
