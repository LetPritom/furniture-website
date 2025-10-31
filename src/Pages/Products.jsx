import React, { useState } from "react";
import useProductsData from "../Hooks/useProductsData";
import ProductCard from "../Components/ProductCard";

const Products = () => {
  const { products } = useProductsData();
  //   console.log(products.length);
  const [search, setSearch] = useState('');
  const searchTrim = search.trim().toLocaleLowerCase()
  const searchProducts = searchTrim ? products.filter((product)=> product.name.toLocaleLowerCase().includes(searchTrim)) :
  products;
//   console.log(search);
  return ( 
    <div className="text-center">
      <div className="feature flex flex-wrap justify-center items-center lg:justify-between gap-3  w-11/12 mx-auto">
        <h1 className="text-3xl font-bold">
          All Products{" "}
          <span className="text-sm text-gray-400">
            ({searchProducts.length}) Products Found
          </span>{" "}
        </h1>
    
        <label className="input">
          <input
          className="w-full"
           value={search}
           onChange={(e)=> setSearch(e.target.value)}
           type="search"
           placeholder="search Products" />
        </label>
      </div>
      <div className="w-11/12 mx-auto grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-5 my-8">
        {searchProducts.map((product, index) => (
          <ProductCard key={index} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
