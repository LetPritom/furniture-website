import React from "react";
import { Link, useParams } from "react-router";
import useProductsData from "../Hooks/useProductsData";

const ProductDetails = () => {
  // usePrams hooks alawas amader ekta objecta return kore jar karone ekhne destructuring KeyboardEvent
  // and amader ekhne param k console.log korle amra ekta object dekte parbo jar modde ekta objects ache and or modde kta id ache
  // r oi id holo amr rotes er modde dynamic korar jonne jieta use kora hoiche oi lekha ta

  // params theke jokhn amra kichu receive kori tokhn oita stringn a convert hoye jai
  // ekhne jemon id a string a convert kore felche

  const { id } = useParams();
  console.log(id);
  const { products, loading,  } = useProductsData();
  const productFind = products.find((find) => String(find.id) === id);
  console.log(productFind);
  if (loading) return <p>Loading...</p>;
  const { name, image, description, category, price } = productFind || {};

  const handleAddToWish = () => {
    const exitingList = JSON.parse(localStorage.getItem("wishlist"));

    let updatedList = [];

    if (exitingList) {
      const isDuplicate = exitingList.some((p) => p.id === productFind.id);
      if (isDuplicate) return alert("your product is already added");
      updatedList = [...exitingList, productFind];
    } else {
      updatedList.push(productFind);
    }
    localStorage.setItem("wishlist", JSON.stringify(updatedList));
    console.log(exitingList);
    return;
  };

  return (
    <div className="card bg-white/70 backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 rounded-2xl border border-white/40">
      <figure className="h-85 overflow-hidden">
        <img className="w-full object-cover" src={image} alt="furniture" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="title">
          <p className="font-semibold">{description}</p>
          <p className="font-semibold">category : {category}</p>
          <p className="font-semibold">${price}</p>
        </div>
        <div
          onClick={() => handleAddToWish()}
          className="card-actions justify-end"
        >
          <Link to="/wishlist">
            <button className="px-5 py-2 rounded-lg bg-white/30 backdrop-blur-md border border-gray-300 text-gray-800 font-medium shadow-md  hover:bg-white/40 hover:shadow-xl hover:border-gray-400 transition-all duration-300 cursor-pointer hover:text-black">
              Add To Wishlist
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
