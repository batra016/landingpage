"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { Button } from "./ui/button";
import Link from "next/link";

const Headertop = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const navbarRef = useRef<HTMLDivElement | null>(null);

  const handleMenu = () => {
    setIsNavbarVisible((prev) => !prev);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://kit.fontawesome.com/8744b2dd45.js";
    script.crossOrigin = "anonymous";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="wrapper m-0 p-0 box-border  bg-[#F2F4F7]">
      {!isNavbarVisible && (
        <div className="navbar max-w-[1222px] h-[92px] mt-6 mx-auto px-4 py-6 gap-20 bg-stone-50 rounded-t-lg rounded-b-lg relative lg:w-full z-20">
          <div className="headerleft flex items-center mx-auto absolute -top-1/2 gap-8">
            <Image src="/logo.png" alt="logoimage" width={174} height={60} />
            <div className="navbar lg:flex hidden gap-6 items-center justify-center">
              <ul className="flex gap-6 items-center justify-center">
                <li className="text-black cursor-pointer hover:text-blue-700 transition-all duration-200">
                  <a href="/" className="text-sm font-medium font-sans">
                    Services
                  </a>
                </li>
                <li className="text-black cursor-pointer hover:text-blue-700 transition-all duration-200">
                  <a href="/" className="text-sm font-medium font-sans">
                    Media
                  </a>
                </li>
                <li className="text-black cursor-pointer hover:text-blue-700 transition-all duration-200">
                  <a href="#" className="text-sm font-medium font-sans">
                    Cases
                  </a>
                </li>
                <li className="text-black cursor-pointer hover:text-blue-700 transition-all duration-200">
                  <a href="#" className="text-sm font-medium font-sans">
                    FAQ
                  </a>
                </li>
                <li className="text-black cursor-pointer hover:text-blue-700 transition-all duration-200">
                  <a href="#" className="text-sm font-medium font-sans">
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="headerright gap-8 absolute right-10 items-center py-2 lg:flex hidden">
            <div className="mbileframe flex gap-2 items-center">
              <Image
                src="/smartphone.png"
                alt="smartphoneimage"
                width={24}
                height={24}
              />
              <div className="flex gap-4 items-center">
                <div className="text-[#80A948] text-sm font-medium font-sans">
                  +91
                </div>
                <div className="text-[#80A948] text-sm font-medium font-sans">
                  000000000
                </div>
              </div>
            </div>
            <div className="gmail flex gap-2 items-center">
              <Image src="/mail.png" alt="mailimage" width={24} height={24} />
              <div className="text-[#80A948] text-sm font-medium">
                demo@gmail.com
              </div>
            </div>
          </div>
          <button
            className="absolute right-10 py-2 lg:hidden"
            onClick={handleMenu}
          >
            <i className="fa-solid fa-bars text-black"></i>
          </button>
        </div>
      )}
      <div
        ref={navbarRef}
        className={`fixed top-0 left-0 inset-0 w-full bg-white p-2 z-50 flex flex-col ${
          isNavbarVisible ? "block" : "hidden"
        }`}
      >
        <div className="nav-bar flex justify-between items-center mb-4">
          <Image src="/logo.png" alt="logoimage" width={174} height={60} />
          <button className="navbar-button lg:hidden" onClick={handleMenu}>
            <i className="fa-solid fa-xmark text-black"></i>
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <a
            href="#"
            className="text-black hover:text-blue-700 transition-all duration-200 border-4 border-solid p-2 border-blue-950 rounded-sm font-sans"
          >
            Services
          </a>
          <a
            href="#"
            className="text-black hover:text-blue-700 transition-all duration-200 border-4 border-solid p-2 border-blue-700 rounded-sm font-sans"
          >
            Media
          </a>
          <a
            href="#"
            className="text-black hover:text-blue-700 transition-all duration-200 border-4 border-solid p-2 border-blue-950 rounded-sm font-sans"
          >
            Cases
          </a>
          <a
            href="#"
            className="text-black hover:text-blue-700 transition-all duration-200 border-4 border-solid p-2 border-blue-700 rounded-sm font-sans"
          >
            FAQ
          </a>
          <a
            href="#"
            className="text-black hover:text-blue-700 transition-all duration-200 border-4 border-solid p-2 border-blue-950 rounded-sm font-sans"
          >
            Contacts
          </a>
        </div>
      </div>
    </div>
  );
};

export default Headertop;
