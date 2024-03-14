import React from "react";

const Stats = () => {
  return (
    <div>
      <div className="grid grid-cols-[40%,60%]">
        <div className="flex items-center justify-end pr-12">
          <img
            src="/stats1.svg"
            className="w-[25rem] h-[25rem] object-contain"
            alt=""
          />
        </div>
        <div className="px-7 py-10 flex flex-col justify-center">
          <h1 className=" text-3xl mb-1 w-[75%] font-medium tracking-wide text-[#000000c4]">
            The unseen of spending three years at Pixelgrade
          </h1>
          <p className="text-xs w-[80%] text-justify my-4 font-light text-[#00000087]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <button className="flex items-center justify-center w-[8rem] h-9 gap-2 rounded-sm bg-[#4CAF4F] text-xs text-white">
            Learn More
          </button>
        </div>
      </div>
      <div className="bg-[#F5F7FA] grid grid-cols-2 p-16">
        <div className="flex flex-col justify-center items-start pl-40">
          <h1 className=" text-4xl font-medium tracking-wide w-[90%] leading-10 mb-5">
            Helping a local
            <span className="text-[#4CAF4F] block">
              business reinvent itself
            </span>
          </h1>
          <p className=" text-xs  font-light tracking-wide">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 grid-rows-2 place-items-center">
          <div className="flex items-center w-full h-full justify-start gap-4">
            <img src="/icon2.svg" className=" w-8 h-8 " alt="" />
            <h1 className=" text-xl font-semibold text-[#000]">
              2,245,341
              <span className="block text-xs font-light">Members</span>
            </h1>
          </div>
          <div className="flex items-center w-full h-full justify-start gap-4">
            <img src="/icon1.svg" className=" w-8 h-8 " alt="" />
            <h1 className=" text-xl font-semibold text-[#000]">
              46,328
              <span className="block text-xs font-light">Clubs</span>
            </h1>
          </div>
          <div className="flex items-center w-full h-full justify-start gap-4">
            <img src="/icon3.svg" className=" w-8 h-8 " alt="" />
            <h1 className=" text-xl font-semibold text-[#000]">
              828,867
              <span className="block text-xs font-light">Event Bookings</span>
            </h1>
          </div>
          <div className="flex items-center w-full h-full justify-start gap-4">
            <img src="/icon4.svg" className=" w-8 h-8 " alt="" />
            <h1 className=" text-xl font-semibold text-[#000]">
              1,926,436
              <span className="block text-xs font-light">Payments</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[40%,60%]">
        <div className="flex items-center justify-end pr-12">
          <img
            src="/stats2.svg"
            className="w-[25rem] h-[25rem] object-contain"
            alt=""
          />
        </div>
        <div className="px-7 py-10 flex flex-col justify-center">
          <h1 className=" text-3xl mb-1 w-[75%] font-medium tracking-wide text-[#000000c4]">
            How to design your site footer like we did
          </h1>
          <p className="text-xs w-[80%] text-justify my-4 font-light text-[#00000087]">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <button className="flex items-center justify-center w-[8rem] h-9 gap-2 rounded-sm bg-[#4CAF4F] text-xs text-white">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stats;
