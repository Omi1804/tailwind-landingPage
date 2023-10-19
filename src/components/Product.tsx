import React from "react";

const Product = () => {
  return (
    <div className="grid grid-cols-[30%,70%] my-10 p-5 bg-[#F5F7FA]">
      <div className="flex items-center justify-end">
        <img
          src="/product.png"
          className="w-[20rem] h-[20rem] object-contain"
          alt=""
        />
      </div>
      <div className="py-5 px-16">
        <p className=" text-base fons text-justify w-[90%]">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <p className=" text-[#4CAF4F] my-3 text-base font-semibold tracking-wide">
          Tim Smith
        </p>
        <p className=" text-sm font-light text-[#00000098]">
          British Dragon Boat Racing Association
        </p>
        <div className="flex items-center">
          <div className="flex items-center my-5 justify-center">
            <img
              className="mr-10 w-10 h-10 object-contain "
              src="/Logo1.svg"
              alt=""
            />
            <img
              className="mr-10 w-10 h-10 object-contain "
              src="/Logo2.svg"
              alt=""
            />
            <img
              className="mr-10 w-10 h-10 object-contain "
              src="/Logo3.svg"
              alt=""
            />
            <img
              className="mr-10 w-10 h-10 object-contain "
              src="/Logo4.svg"
              alt=""
            />
            <img
              className="mr-10 w-10 h-10 object-contain "
              src="/Logo5.svg"
              alt=""
            />
          </div>
          <button className="text-[#4CAF4F] flex items-center font-semibold justify-center">
            Meet all customers
            <span className="material-symbols-outlined mx-1 text-xl">
              arrow_right_alt
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
