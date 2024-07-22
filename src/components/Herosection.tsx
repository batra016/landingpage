import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
const Herosection = () => {
  return (
    <div className="relative">
      <div className="leftpart flex gap-8 pt-10">
        <div className="leftsection flex flex-col gap-5 lg:max-w-xl lg:max-h-56 lg:left-[168px] absolute left-5">
          <div className="font-semibold lg:leading-[47.2px] lg:text-[36px] font-sans text-2xl">
            <span className="font-extrabold lg:leading-[47.2px] lg:text-[36px] text-yellow-400 font-sans text-2xl">
              User-Centric Excellence
            </span>
            : Our{" "}
            <span className="font-sans font-extrabold lg:leading-[47.2px] lg:text-[36px] text-2xl">
              App Development services
            </span>{" "}
            Tackles Your Pain Points
          </div>
          <div className="font-sans font-medium lg:text-[17px] leading-5 text-md">
            Experience a Seamless Digital Journey with{" "}
            <span className="font-extrabold font-sans text-[#80A948]">
              Desun
            </span>{" "}
            - Where Every Line of Code Resolves Your Challenges and Elevates
            Your App Experience to Unparalleled Heights.
          </div>
        </div>
        <div className="contactinfo relative lg:max-w-2xl lg:max-h-64 bg-white p-6 mt-72 mx-10 lg:mx-1 lg:left-[168px] flex flex-col shadow-md rounded-lg self-center">
          <div className="font-sans text-[#101828] font-bold lg:max-w-xl text-xl">
            Leave your contacts and we will call you back<br></br>
            within 30 minutes
          </div>
          <div className="flex lg:flex-row lg:gap-10 flex-col">
            <div className="form grid lg:grid-cols-2 gap-6 py-6 grid-cols-1 ">
              <div>
                <label
                  htmlFor="fullname"
                  className="font-medium font-sans text-xs text-[#667085]"
                >
                  Full name
                </label>
                <input
                  type="text"
                  id="fullname"
                  value="My Name"
                  className="font-normal font-sans text-base w-full"
                />
                <div className="bg-[#D0D5DD] w-full h-0.5"></div>
              </div>
              <div>
                <label
                  htmlFor="Phone no"
                  className="font-medium font-sans text-xs text-[#667085]"
                >
                  Phone no
                </label>
                <div className="flex items-center gap-2">
                  <Image
                    src="/flag.png"
                    alt="flagimage"
                    width={18}
                    height={11.98}
                  />
                  <input
                    type="tel"
                    id="Phone no"
                    value="+91 0000000000"
                    className="font-normal font-sans text-base w-full"
                  />
                </div>
                <div className="bg-[#D0D5DD] w-full h-0.5"></div>
              </div>
              <div>
                <label
                  htmlFor="Business name"
                  className="font-medium font-sans text-xs text-[#667085]"
                >
                  Business name
                </label>
                <input
                  type="text"
                  id="Business name"
                  value="ABC Technologies PVT LTD"
                  className="font-normal font-sans text-base w-full"
                />
                <div className="bg-[#D0D5DD] w-full h-0.5"></div>
              </div>
              <div>
                <label
                  htmlFor="Business mail"
                  className="font-medium font-sans text-xs text-[#667085]"
                >
                  Business mail
                </label>
                <input
                  type="email"
                  id="Business mail"
                  value="demoaccount@gmail.com"
                  className="font-normal font-sans text-base w-full"
                />
                <div className="bg-[#D0D5DD] w-full h-0.5"></div>
              </div>
            </div>
            <div className="flex justify-end items-end mb-4">
              <Button className="py-8 px-6 bg-[#80A948]">
                Get<br></br>
                consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/dashboard.png"
          alt="dashboard"
          width={310.49}
          height={672.31}
          className="rounded-r-3xl -rotate-12 absolute left-[890px] -top-4 opacity-0 lg:opacity-100"
        />
        <Image
          src="/categories.png"
          alt="categories"
          width={292.23}
          height={632.77}
          className="rounded-r-3xl -rotate-12 absolute -right-2 -top-[69px] opacity-0 xl:opacity-100"
        />
        <Image
          src="/raiseticket.png"
          alt="raiseticket"
          width={292.23}
          height={632.77}
          className="rounded-r-3xl -rotate-12 absolute left-[1036px] top-[640px] z-10 opacity-0 lg:opacity-100"
        />
        <Image
          src="/bills.png"
          alt="bills"
          width={292.23}
          height={632.77}
          className="rounded-r-3xl -rotate-12 absolute -right-[130px] top-[580px] opacity-0 xl:opacity-100"
        />
        <Image
          src="/vacate.png"
          alt="vacate"
          width={292.23}
          height={632.77}
          className="rounded-r-3xl -rotate-12 absolute right-32 -top-[720px] opacity-0 xl:opacity-100"
        />
        <Image
          src="/categories.png"
          alt="category"
          width={292.23}
          height={632.77}
          className="rounded-r-3xl -rotate-12 absolute left-[780px] -top-[680px] opacity-0 lg:opacity-100"
        />
      </div>
      <div className="logobanner lg:max-w-full max-h-[3792px] bg-white mt-44 z-20 relative py-14 px-14">
        <div className="flex flex-row justify-between border-y-2 border-[#D8D8D8]">
          <Image src="/planet.png" alt="planet" width={163.64} height={72.06} />
          <Image src="/planet.png" alt="planet" width={163.64} height={72.06} />
          <Image src="/planet.png" alt="planet" width={163.64} height={72.06} />
          <Image src="/planet.png" alt="planet" width={163.64} height={72.06} />
          <Image src="/planet.png" alt="planet" width={163.64} height={72.06} />
          <Image src="/planet.png" alt="planet" width={163.64} height={72.06} />
        </div>
        <div className="flex lg:flex-row flex-col mt-7 lg:ml-24">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-8">
              <div className=" font-sans font-bold text-4xl text-[#101828]">
                Full development cycle
              </div>
              <div className="font-medium font-sans text-[#101828] text-sm">
                We use proven technologies
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <div className=" font-sans font-semibold text-[#101828] text-xl">
                  Web
                </div>
                <div className="max-w-md">
                  PHP / Javascript / Node.JS / Web Socket / Socket.io / Vue.js/
                  Nuxt / MySQL / Laravel / GO lang / django / Python
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className=" font-sans font-semibold text-[#101828] text-xl">
                Mobile
                </div>
                <div className="max-w-md">
                Swift / Kotlin / Alamofire / Firebase / CoreData / Room / Realm / Coroutine / RxJava / RxSwift / Unit Test / Navigation
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-start lg:ml-72 mt-12 mx-auto">
            <div className="flex flex-row justify-center items-center gap-3 lg:max-w-56 ">
              <div className="text-[#1D2939] font-normal text-xl font-sans">iOS development</div>
              <div>
                <i className="fa-solid fa-chevron-right text-[#80A948]"></i>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-3">
              <div className="flex flex-col">
                <div className="text-[#101828] font-semibold text-xl font-sans">Android development</div>
                <div className="bg-[#80A948] h-1"></div>
              </div>
              <div>
                <i className="fa-solid fa-chevron-right text-[#80A948]"></i>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-3">
              <div className="text-[#1D2939] font-normal text-xl font-sans">Web development</div>
              <div>
                <i className="fa-solid fa-chevron-right text-[#80A948]"></i>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-3">
              <div className="text-[#1D2939] font-normal text-xl font-sans">UI/UX design</div>
              <div>
                <i className="fa-solid fa-chevron-right text-[#80A948]"></i>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-3">
              <div className="text-[#1D2939] font-normal text-xl font-sans">Testing</div>
              <div>
                <i className="fa-solid fa-chevron-right text-[#80A948]"></i>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-3">
              <div className="text-[#1D2939] font-normal text-xl font-sans">Launch</div>
              <div>
                <i className="fa-solid fa-chevron-right text-[#80A948]"></i>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-3">
              <div className="text-[#1D2939] font-normal text-xl font-sans">IT consulting</div>
              <div>
                <i className="fa-solid fa-chevron-right text-[#80A948]"></i>
              </div>
            </div>
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
