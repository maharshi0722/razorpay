import Image from "next/image";
import React from "react";

const PaymentGateway = () => {
  return (
    <div className="lg:mt-[120px] mt-[40px] max-w-[1080px] w-full mx-auto  relative">
      <Image
        src="/dotedline2.PNG"
        width={100}
        height={100}
        className="h-[60px] w-[210px] absolute top-[-70px] lg:block hidden "
        alt="Picture of the author"
      ></Image>
      <Image
        src="/alldotted.PNG"
        width={100}
        height={100}
        className="h-[200px] w-[260px] absolute top-[-60px] right-[-215px] lg:block hidden"
        alt="Picture of the author"
      ></Image>

      <div className="relative w-11/12 max-w-[1080px] mx-auto pt-4  space-y-3 ">
        <h2 className="text-center text-2xl font-bold leading-[1.2]">
          Accept Payments with Razorpay Payment Suite
        </h2>
        <div className="h-1 w-6 bg-green-400 mx-auto"></div>
        <div className="border-[1px] border-gray-200 w-full flex flex-col lg:flex-row rounded-md relative p-10 min-h-[520px]">
          <div className="flex flex-col justify-between">
            <h1 className="text-[25px] font-bold leading-[1.2]">
              Supercharge your business with the <br /> all‑powerful{" "}
              <span className="text-sky-400">Payment Gateway</span>
            </h1>
            <ul className="flex flex-col gap-3">
              <li>100+ Payment Methods</li>
              <li>Industry Leading Success Rate</li>
              <li>Superior Checkout Experience</li>
              <li>Easy to Integrate</li>
              <li>Instant Settlements from day 1</li>
              <li>In-depth Reporting and Insights</li>
            </ul>
            <div className="flex flex-row gap-3 items-center">
              <button className="border-[1px] bg-sky-500 py-3 px-4 text-white">Sign Up Now</button>

              <div>
                <a className="text-sky-400"> Know More </a>
              </div>
            </div>
          </div>

          <Image
            src="/payment-suite.png"
            width={500}
            height={500}
            className="h-[460px] lg:w-[450px] w-auto object-contain items-center justify-center"
            alt="Picture of the author"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default PaymentGateway;
