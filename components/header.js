import Image from "next/image";
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-center py-[10px] gap-4">
        <p>RazorpayX Payroll: 3 Clicks, Payroll Fixed! Automate payroll now!</p>
        <button className="bg-blue-500 py-2 px-4 text-[13px] text-white rounded-[6px]">Know more!</button>
      </div>
      <header className="bg-[#02042a]">
        <div className="max-w-[1080px] w-full mx-auto relative items-center justify-between flex text-white">
          <Link href="/" className="cursor-pointer py-4">
            <Image
              src="/logo.png"
              width={140}
              height={110}
              alt="Logo"
            />
          </Link>
          <ul className="space-x-6 items-center justify-center pr-2 hidden lg:flex">
            <li className="font-mullish py-7 hover:text-sky-600 cursor-pointer transition-all duration-200 relative group">
              <Link href="#">Payments</Link>
              <div className="absolute bottom-0 w-full h-1 bg-sky-600 hidden group-hover:block transition-all duration-200"></div>
            </li>
            <li className="font-mullish py-7 hover:text-sky-600 cursor-pointer transition-all duration-200 relative group">
              <Link href="#">Banking</Link>
              <div className="absolute bottom-0 w-full h-1 bg-sky-600 hidden group-hover:block transition-all duration-200"></div>
            </li>
            <li className="font-mullish py-7 hover:text-sky-600 cursor-pointer transition-all duration-200 relative group">
              <Link href="#">Corporate card</Link>
              <div className="absolute bottom-0 w-full h-1 bg-sky-600 hidden group-hover:block transition-all duration-200"></div>
            </li>
            <li className="font-mullish py-7 hover:text-sky-600 cursor-pointer transition-all duration-200 relative group">
              <Link href="#">Payroll</Link>
              <div className="absolute bottom-0 w-full h-1 bg-sky-600 hidden group-hover:block transition-all duration-200"></div>
            </li>
            <li className="font-mullish py-7 hover:text-sky-600 cursor-pointer transition-all duration-200 relative group">
              <Link href="#">Resource</Link>
              <div className="absolute bottom-0 w-full h-1 bg-sky-600 hidden group-hover:block transition-all duration-200"></div>
            </li>
            <li className="font-mullish py-7 hover:text-sky-600 cursor-pointer transition-all duration-200 relative group">
              <Link href="#">Support</Link>
              <div className="absolute bottom-0 w-full h-1 bg-sky-600 hidden group-hover:block transition-all duration-200"></div>
            </li>
            <li className="font-mullish py-7 hover:text-sky-600 cursor-pointer transition-all duration-200 relative group">
              <Link href="#">Pricing</Link>
              <div className="absolute bottom-0 w-full h-1 bg-sky-600 hidden group-hover:block transition-all duration-200"></div>
            </li>
          </ul>
          <div className="flex space-x-4 lg:">
            <Image
              src="/indlogo.PNG"
              width={45}
              height={-10}
              className="h-[-40px] pt-2 hidden lg:block"
              alt="Indian Logo"
            />
            <button className="border-[1px] py-2 px-5 border-sky-400 cursor-pointer rounded-sm">
              Log in
            </button>
            <button className="border-2 py-2 px-5 cursor-pointer bg-white border-white rounded-sm text-blue-500 hover:text-blue-800 transition-opacity duration-50">
              Sign up
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
