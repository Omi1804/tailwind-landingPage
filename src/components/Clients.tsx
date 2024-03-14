import React from "react";

const Clients = () => {
  return (
    <div>
      <div className="text-center my-10 text-[#4D4D4D]">
        <h1 className=" text-4xl font-medium my-2">Our Clients</h1>
        <p className=" text-sm font-light tracking-wider my-2">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="flex mx-20 my-5 py-5 px-10 items-center justify-around">
          <img className="w-12 h-12 mx-4" src="/Logo1.svg" alt="" />
          <img className="w-12 h-12 mx-4" src="/Logo2.svg" alt="" />
          <img className="w-12 h-12 mx-4" src="/Logo3.svg" alt="" />
          <img className="w-12 h-12 mx-4" src="/Logo4.svg" alt="" />
          <img className="w-12 h-12 mx-4" src="/Logo5.svg" alt="" />
          <img className="w-12 h-12 mx-4" src="/Logo6.svg" alt="" />
          <img className="w-12 h-12 mx-4" src="/Logo7.svg" alt="" />
        </div>
      </div>
      <div className="text-center my-10 text-[#4D4D4D]">
        <h1 className=" text-3xl font-medium my-2 w-[27rem] mx-auto tracking-wide">
          Manage your entire community in a single system
        </h1>
        <p className=" text-sm font-light tracking-wider my-4">
          Who is Nextcent suitable for?
        </p>
        <div className="grid grid-cols-3">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
