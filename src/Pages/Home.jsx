import React from "react";
import { Link, } from "react-router";
import ProductCard from "../Components/ProductCard";
import useProductsData from "../Hooks/useProductsData";

const Home = () => {
  // loading, error baki ekhno
  const {products , } =useProductsData();

  const homeShowProducts = products.slice(0,6);
  
  return (
    <div className="">
      <div className="feature flex justify-between w-11/12 mx-auto">
        <h1 className="text-3xl font-bold">Features Products </h1>
        <Link to="/products">
          <button className="px-5 py-2 rounded-lg bg-white/30 backdrop-blur-md border border-gray-300 text-gray-800 font-medium shadow-sm hover:bg-white/40 hover:shadow-lg hover:border-gray-400 transition-all duration-300 cursor-pointer">
            All Products
          </button>
        </Link>
      </div>
      <div className="w-11/12 mx-auto grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-5 my-8">
        {homeShowProducts.map((product, index) => (
          <ProductCard key={index} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
