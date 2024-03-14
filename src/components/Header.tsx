import React from "react";

const Header = () => {
  return (
    <div className="w-full flex items-center px-[7rem] py-2 bg-white">
      <div>
        <p className=" text-[1.7rem] text-black">
          P<span className=" text-[#4CAF4F]">cl</span>
        </p>
      </div>
      <ul className="flex pr-10 w-full items-center justify-end ">
        <li className="mx-7 cursor-pointer font-normal text-sm">Home</li>
        <li className="mx-7 cursor-pointer font-normal text-sm">Features</li>
        <li className="mx-7 cursor-pointer font-normal text-sm">Community</li>
        <li className="mx-7 cursor-pointer font-normal text-sm">Blog</li>
        <li className="mx-7 cursor-pointer font-normal text-sm">Pricing</li>
      </ul>
      <button className="flex items-center justify-center w-[11rem] h-9 gap-2 rounded-sm bg-[#4CAF4F] text-xs text-white">
        Register Now
        <span className="material-symbols-outlined text-[1rem]">
          arrow_right_alt
        </span>
      </button>
    </div>
  );
};

export default Header;
