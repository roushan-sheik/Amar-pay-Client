import React from "react";
import ProductCard from "./ProductCard";
import getAllProducts from "../data/products";
import { useGetProductsQuery } from "../redux/api/api";

const Products = () => {
  const { data, isLoading } =useGetProductsQuery({});
  return (
    <div className="container">
      <h1 className="text-4xl font-bold my-10">All Products</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {data?.data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;