import Image from "next/image";
import React from "react";

const Section = () => {
  return (
    <div className="bg-[#02042a]  pb-8 relative">
      <div className="lg:max-w-[1080px] md:mx-auto w-10/11 text-white flex flex-col lg:flex-row flex-wrap justify-between items-center">
        <div className="flex flex-col flex-wrap gap-8 px-2 md:p-0 ">
          <h1 className="text-[40px]  leading-[1.2] font-bold">
            Power your finance, <br className="lg:block hidden" />
            grow your business
          </h1>
          <div className="w-6 h-1 bg-[#a8ffb0]"></div>
          <p className="text-[18px] text-sky-400 " >
            Accept payments from customers. Automate<br className="lg:block hidden"/> payouts to vendors &
            employees. Never run out<br className="lg:block hidden"/> of working capital.
          </p>
          <button className="bg-sky-500 border-2 border-sky-500 p-3 rounded-lg w-fit">
            Sign Up Now{" "}
          </button>
        </div>
      <Image src="/hero-illustration.jpg"  width={700}
              height={270}
              className="pt-6 flex lg:w-[620px] lg:h-[600px] w-auto  object-contain items-center justify-center"
              alt="Picture of the author"></Image>
      </div>
    </div>
  );
};

export default Section;
