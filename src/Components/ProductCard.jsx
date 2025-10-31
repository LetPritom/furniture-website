import React from "react";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  const { name, category, price, image, description, id } = product;
  // console.log(product);
  return (
    <div className="card bg-white/70 backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 rounded-2xl border border-white/40">
      <figure className="h-58 overflow-hidden">
        <img className="w-full object-cover" src={image} alt="furniture" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="title">
          <p className="font-semibold">{description}</p>
          <p className="font-semibold">category : {category}</p>
          <p className="font-semibold">${price}</p>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/products/${id}`}>
          
          <button className="px-5 py-2 rounded-lg bg-white/30 backdrop-blur-md border border-gray-300 text-gray-800 font-medium shadow-md  hover:bg-white/40 hover:shadow-xl hover:border-gray-400 transition-all duration-300 cursor-pointer hover:text-black">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
