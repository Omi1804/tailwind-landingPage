import React from "react";

const Marketing = () => {
  return (
    <div className="my-10 w-full text-center py-10">
      <p className="w-[25rem] text-[#263238] tracking-wide font-medium text-3xl mx-auto">
        Caring is the new marketing
      </p>
      <p className="text-sm font-light w-[40rem] mx-auto tracking-wider my-2 text-[#000000a3]">
        The Nextcent blog is the best place to read about the latest membership
        insights, trends and more. See who's joining the community, read about
        how our community are increasing their membership income and lot's
        more.​
      </p>
      <div className="grid grid-cols-3 items-center justify-items-center px-24 my-5">
        <div className="relative w-[20rem] h-[18rem]">
          <img
            src="/marketing1.jpg"
            className="w-full h-full rounded-2xl  object-cover object-center"
            alt=""
          />
          <div className="p-3 mx-5 rounded-lg  bg-[#F5F7FA] absolute -bottom-12 shadow-md ">
            <p className=" text-[#000000b0] mb-4 text-base font-medium">
              Creating Streamlined Safeguarding Processes with OneRen
            </p>
            <button className="flex items-center justify-center mx-auto gap-2 text-[#4CAF4F]">
              Readmore
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </button>
          </div>
        </div>
        <div className="relative w-[20rem] h-[18rem] ">
          <img
            src="/marketing2.jpg"
            className="w-full h-full rounded-2xl  object-cover object-center"
            alt=""
          />
          <div className="p-3 mx-5 rounded-lg  bg-[#F5F7FA] absolute -bottom-12 shadow-md ">
            <p className=" text-[#000000b0] mb-4 text-base font-medium">
              What are your safeguarding responsibilities and how can you manage
              them?
            </p>
            <button className="flex items-center justify-center mx-auto gap-2 text-[#4CAF4F]">
              Readmore
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </button>
          </div>
        </div>
        <div className="relative w-[20rem] h-[18rem] ">
          <img
            src="/marketing3.jpg"
            className="w-full h-full rounded-2xl  object-cover object-center"
            alt=""
          />
          <div className="p-3 mx-5 rounded-lg  bg-[#F5F7FA] absolute -bottom-12 shadow-md ">
            <p className=" text-[#000000b0] mb-4 text-base font-medium">
              Revamping the Membership Model with Triathlon Australia Readmore
            </p>
            <button className="flex items-center justify-center mx-auto gap-2 text-[#4CAF4F]">
              Readmore
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
