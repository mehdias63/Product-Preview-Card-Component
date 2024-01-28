import React from "react";

export default function Product() {
  return (
    <div className="w-[21.4375rem] h-[38.1875rem] md:w-[37.5rem] md:h-[28.125rem] md:flex bg-white rounded-lg">
      <div>
        <div className="img bg-center bg-contain bg-no-repeat rounded-t-lg"></div>
      </div>
      <div className="py-4 px-6 md:px-5">
        <p className="text-[#6C7289] font-mont font-medium tracking-[0.3125rem] text-[0.75rem] md:mt-4 md:mb-2">
          PERFUME
        </p>
        <h1 className="font-frau font-bold text-[2rem] leading-8 mt-3 mb-4 md:mt-4 md:mb-5">
          Gabrielle Essence Eau De Parfum
        </h1>
        <p className="text-[#6C7289] text-[0.875rem] font-mont font-medium leading-[1.4375rem] mb-2 md:mb-4">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="flex items-center">
          <span className="text-[#3D8168] font-frau font-bold text-[2rem]">
            $149.99
          </span>
          <span className="text-[#6C7289] ml-6 line-through">$169.99</span>
        </div>
        <button className="flex justify-center items-center bg-[#3D8168] text-white px-[5rem] py-2 rounded-lg mt-4 font-mont font-bold hover:bg-[#1A4032] md:px-[3rem] md:mt-8">
          <img className="mr-[1rem]" src="../images/icon-cart.svg" alt="icon" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
