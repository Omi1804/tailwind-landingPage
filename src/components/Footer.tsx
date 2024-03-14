const Footer = () => {
  return (
    <div className="grid grid-cols-[40%,13%,13%,35%] bg-[#263238] text-white py-10">
      <div className="flex flex-col items-start justify-center pl-28">
        <p className=" text-s tracking-wide text-[#F5F7FA]">
          Copyright © 2020 Landify UI Kit.
        </p>
        <p className=" text-xs mt-2 tracking-wide text-[#F5F7FA]">
          All rights reserved
        </p>
        <div className="flex mt-6">
          <p className="w-8 h-8 mr-4 rounded-full bg-[#3C474C]"></p>
          <p className="w-8 h-8 mr-4 rounded-full bg-[#3C474C]"></p>
          <p className="w-8 h-8 mr-4 rounded-full bg-[#3C474C]"></p>
          <p className="w-8 h-8 mr-4 rounded-full bg-[#3C474C]"></p>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <h1 className=" text-xl font-medium my-3">Company</h1>
        <ul className="flex flex-col items-start justify-center text-xs ">
          <li className="my-1 font-extralight">About Us</li>
          <li className="my-1 font-extralight">Blog</li>
          <li className="my-1 font-extralight">Contact Us</li>
          <li className="my-1 font-extralight">Pricing</li>
          <li className="my-1 font-extralight">Testimonials</li>
        </ul>
      </div>
      <div className="flex flex-col justify-center">
        <h1 className=" text-xl font-medium my-3">Support</h1>
        <ul className="flex flex-col items-start justify-center text-xs ">
          <li className="my-1 font-extralight">Help Center</li>
          <li className="my-1 font-extralight">Terms and Services</li>
          <li className="my-1 font-extralight">Legal</li>
          <li className="my-1 font-extralight">Privacy Policy</li>
          <li className="my-1 font-extralight">Status</li>
        </ul>
      </div>
      <div className="px-10">
        <h1 className=" text-xl font-medium my-2">Status up to date</h1>
        <div className="bg-[#3C474C] w-[15rem] h-[2.5rem] rounded-md px-3 flex items-center my-5">
          <input
            className=" bg-transparent border-none outline-none"
            type="text"
            placeholder="Your email address"
          />
          <span className="material-symbols-outlined text-xl ">send</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
