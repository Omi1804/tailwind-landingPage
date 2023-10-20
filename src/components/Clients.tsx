const Clients = () => {
  return (
    <div>
      <div className="text-center my-10 text-[#4D4D4D]">
        <h1 className=" text-4xl font-medium my-2">Our Clients</h1>
        <p className="text-sm font-light tracking-wider my-2">
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
        <div className="grid grid-cols-3 gap-20 justify-items-center mx-20 my-7">
          <div className=" shadow-md p-4">
            <img
              src="/community1.svg"
              className="mx-auto my-2 w-14 h-14"
              alt=""
            />
            <h1 className=" text-2xl mx-4 font-semibold my-4 text-[#4D4D4D]">
              Membership Organisations
            </h1>
            <p className=" text-s mx-2 text-[#00000088]">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className=" shadow-md p-4">
            <img
              src="/community2.svg"
              className="mx-auto my-2 w-14 h-14"
              alt=""
            />
            <h1 className=" text-2xl mx-4 font-semibold my-4 text-[#4D4D4D]">
              National Associations
            </h1>
            <p className=" text-s mx-2 text-[#00000088]">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className=" shadow-md p-4">
            <img
              src="/community3.svg"
              className="mx-auto my-2 w-14 h-14"
              alt=""
            />
            <h1 className=" text-2xl mx-4 font-semibold my-4 text-[#4D4D4D]">
              Clubs And Groups
            </h1>
            <p className=" text-s mx-2 text-[#00000088]">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
