import React, { useState } from "react";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";
const ProductCart = ({ product }: { product: any }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const handleShowModal = (product: any) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
  }

  return (
    <div className="relative">
      {showModal && (
        <Modal
          product={selectedProduct}
          onClose={handleCloseModal}
          handleAddToCart={() => {}}
        />
      )}

<div
  onClick={() => handleShowModal(product)}
  className="border rounded-lg shadow-lg overflow-hidden bg-black transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col h-full"
>
  <img
    src={product.image}
    alt={product.name}
    className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-75"
  />
  <div className="p-4 flex flex-col flex-grow">
    <h3 className="text-xl font-semibold text-white mb-2">
      {product.name}
    </h3>
    <p className="text-gray-300 mb-4 flex-grow">{product.description}</p>
    <p className="text-lg font-bold text-white mb-4">{product.price}</p>
    <button
      onClick={(e) => {
        e.stopPropagation();
        handleAddToCart(product);
      }}
      className="bg-white text-black font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 hover:text-white transition duration-300 shadow-md hover:shadow-lg"
    >
      Add to Cart
    </button>
  </div>
</div>

    </div>
  );
};

export default ProductCart;
