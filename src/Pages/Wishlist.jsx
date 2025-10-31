import React, { useEffect, useState } from "react";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("wishlist"));
    if (savedList) setWishlist(savedList);
  }, []);


  return (
    <div>
      <div className="feature flex flex-wrap justify-center items-center lg:justify-between gap-3  w-11/12 mx-auto my-8">
        <h1 className="text-3xl font-bold">
          Wishlist{" "}
          <span className="text-sm text-gray-400">
            ({wishlist.length}) Products Found
          </span>{" "}
        </h1>

        <label className="input">sort</label>
      </div>
      
      <div className="space-y-6 ">
        {wishlist.map((p) => (
          <div className="dv flex justify-center items-center card bg-white/70 backdrop-blur-md shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-500 rounded-lg border border-white/40  hover:border-gray-400">
            <div className=" w-11/12 mx-auto flex flex-wrap justify-between items-center gap-5">
              <div className="flex gap-3">
                <figure className="">
                  <img
                    className="h-20 w-15 rounded-lg my-2"
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    alt="Movie"
                  />
                </figure>
                <div className="flex">
                  <div className=" align flex flex-col flex-wrap justify-center ">
                    <h2 className="text-lg font-semibold">{p.name}</h2>
                    <p>{p.price}</p>
                  </div>
                </div>
              </div>
              <div className="">
                <button className="px-5 py-2 rounded-lg bg-white/30 backdrop-blur-md border border-gray-300 text-gray-800 font-medium shadow-md  hover:bg-red/40 hover:shadow-xl hover:border-red-400 transition-all duration-300 cursor-pointer hover:text-black">
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
