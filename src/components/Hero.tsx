import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Hero = () => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showArrows={true}
      autoPlay={true}
      infiniteLoop={true}
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected) {
          return (
            <li
              className="inline-block mr-3 w-2 h-2 rounded-full bg-green-500"
              onClick={onClickHandler}
              key={index}
              role="button"
              tabIndex={0}
              title={label}
            />
          );
        }
        return (
          <li
            className="inline-block mr-3 w-2 h-2 rounded-full bg-green-200"
            onClick={onClickHandler}
            key={index}
            role="button"
            tabIndex={0}
            title={label}
          />
        );
      }}
      className=""
    >
      <div className="h-full grid grid-cols-[.6fr,.4fr] py-[3rem] bg-[#F5F7FA] ">
        <div className="pl-[7rem] pr-[2rem] flex items-start justify-center flex-col flex-wrap">
          <p className=" text-7xl text-start text-[#4D4D4D] font-medium text tracking-wide">
            Lessons and Insights
          </p>
          <span className="text-7xl mt-2 text-start text-[#4CAF4F] font-medium text tracking-wide">
            From 8 years
          </span>
          <p className="mt-5 mb-7 text-[#717171] text-sm tracking-wide">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="w-[7rem] h-9 rounded-sm bg-[#4CAF4F] text-xs text-white">
            Register
          </button>
        </div>
        <div className="flex items-center pl-10 w-[30rem] h-[33rem]">
          <img src="/hero1.svg" className="object-contain" alt="" />
        </div>
      </div>
      <div className=" h-full grid grid-cols-[.6fr,.4fr] py-[3rem] bg-[#F5F7FA] ">
        <div className="pl-[7rem] pr-[2rem] flex items-start justify-center flex-col flex-wrap">
          <p className=" text-7xl text-start text-[#4D4D4D] font-medium text tracking-wide">
            Carefull and Detailed
          </p>
          <span className="text-7xl mt-2 text-start text-[#4CAF4F] font-medium text tracking-wide">
            Plannings
          </span>
          <p className="mt-5 mb-7 text-[#717171] text-sm tracking-wide">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="w-[7rem] h-9 rounded-sm bg-[#4CAF4F] text-xs text-white">
            Register
          </button>
        </div>
        <div className="flex items-center pl-10 w-[30rem] h-[33rem]">
          <img src="/hero2.svg" className="object-contain" alt="" />
        </div>
      </div>
      <div className=" h-full grid grid-cols-[.6fr,.4fr] py-[3rem] bg-[#F5F7FA] ">
        <div className="pl-[7rem] pr-[2rem] flex items-start justify-center flex-col flex-wrap">
          <p className=" text-7xl text-start text-[#4D4D4D] font-medium text tracking-wide">
            Relaxed and Peaceful
          </p>
          <span className="text-7xl mt-2 text-start text-[#4CAF4F] font-medium text tracking-wide">
            Workflow
          </span>
          <p className="mt-5 mb-7 text-[#717171] text-sm tracking-wide">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="w-[7rem] h-9 rounded-sm bg-[#4CAF4F] text-xs text-white">
            Register
          </button>
        </div>
        <div className="flex items-center pl-10 w-[30rem] h-[33rem]">
          <img src="/hero3.svg" className="object-contain" alt="" />
        </div>
      </div>
    </Carousel>
  );
};

export default Hero;
