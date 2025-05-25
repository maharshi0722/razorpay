import React from "react";
import Image from "next/image";
const Business = () => {
  return (
    <div className="bg-[#02042a]">
      <div className="mt-[220px] max-w-[1080px] w-full mx-auto  relative text-white">
        <div className="relative w-11/12 max-w-[1080px] mx-auto   space-y-5 pt-[140px] pb-10">
          <h2 className="text-center text-2xl font-bold leading-[1.2] ">
            Explore Razorpay Business Banking
          </h2>
          <div className="h-1 w-6 bg-green-400 mx-auto"></div>
          <div className="border-[1px] border-gray-200 w-full  rounded-md flex lg:flex-row flex-col  relative p-10 min-h-[520px] mt-10">
            <div className="flex flex-col justify-between items-start lg:w-1/2 w-full md=:gap-0 gap-12">
              <div className="flex flex-wrap items-center   ">
                <h1 className="text-[25px] font-bold leading-[1.2]">
                  Manage your company’s finances 
                  <br />
                </h1>
                <div className="flex items-center  text-[25px] font-bold  sm:mt-0 mt-2 ">
                   with
                  <Image
                    src="/logo.png"
                    width={150}
                    height={70}
                    alt="Logo"
                    className="pt-1 object-contain pl-2 "
                  />
                  
                </div>
              </div>

              <ul className="flex flex-col gap-3">
                <li>100+ Payment Methods</li>
                <li>Industry Leading Success Rate</li>
                <li>Superior Checkout Experience</li>
                <li>Easy to Integrate</li>
                <li>Instant Settlements from day 1</li>
                <li>In-depth Reporting and Insights</li>
              </ul>
              <div className="flex md:flex-row flex-col gap-3 items-center">
                <button className="border-[1px] bg-sky-500 py-3 px-4 text-white cursor-pointer rounded-md ">
                  Sign Up Now
                </button>

                <div>
                  <p className="text-sky-400"> Know More </p>
                </div>
              </div>
            </div>

            <Image
              src="/hero-illustration.jpg"
              width={500}
              height={100}
              className="md:h-[400px] w-[530px] "
              alt="Picture of the author"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
