import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
const Sectiontwo = () => {
  return (
    <div>
      <div className="bg-[#F2F4F7] relative mt-20 lg:ml-36 mx-auto ml-2">
        <div className="text-black font-bold font-sans lg:text-4xl lg:max-w-[580px] lg:leading-[51.84px] text-3xl">
          Developed more than <span className="text-[#80A948]">100 </span>
          projects in <span className="text-[#80A948]">15</span> industries
        </div>

        <div className="grid lg:grid-cols-3 mt-11 gap-10 grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-4">
              <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Image
                  src="/socialmedia.png"
                  alt="socialmedia"
                  width={24}
                  height={24}
                  className="absolute"
                />
              </div>
              <div className="font-medium font-sans text-[#101828] text-base">
                Social media
              </div>
            </div>

            <div className="flex flex-row items-center gap-4">
              <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Image
                  src="/sports.png"
                  alt="sports"
                  width={24}
                  height={24}
                  className="absolute"
                />
              </div>
              <div className="font-medium font-sans text-[#101828] text-base">
                Fitness and sport
              </div>
            </div>

            <div className="flex flex-row items-center gap-4">
              <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Image
                  src="/bank.png"
                  alt="bank"
                  width={24}
                  height={24}
                  className="absolute"
                />
              </div>
              <div className="font-medium font-sans text-[#101828] text-base">
                Bank
              </div>
            </div>

            <div className="flex flex-row items-center gap-4">
              <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Image
                  src="/construction.png"
                  alt="construction"
                  width={24}
                  height={24}
                  className="absolute"
                />
              </div>
              <div className="font-medium font-sans text-[#101828] text-base">
                Construction
              </div>
            </div>

            <div className="flex flex-row items-center gap-4">
              <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Image
                  src="/games.png"
                  alt="games"
                  width={24}
                  height={24}
                  className="absolute"
                />
              </div>
              <div className="font-medium font-sans text-[#101828] text-base">
                Game projects
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-4">
              <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Image
                  src="/education.png"
                  alt="education"
                  width={24}
                  height={24}
                  className="absolute"
                />
              </div>
              <div className="font-medium font-sans text-[#101828] text-base">
                Education
              </div>
            </div>

            <div className="flex flex-row items-center gap-4">
              <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Image
                  src="/transport.png"
                  alt="transport"
                  width={24}
                  height={24}
                  className="absolute"
                />
              </div>
              <div className="font-medium font-sans text-[#101828] text-base">
                Auto, transport
              </div>
            </div>

            <div className="flex flex-row items-center gap-4">
              <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Image
                  src="/health.png"
                  alt="health"
                  width={24}
                  height={24}
                  className="absolute"
                />
              </div>
              <div className="font-medium font-sans text-[#101828] text-base">
                Medicine, health
              </div>
            </div>

            <div className="flex flex-row items-center gap-4">
              <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Image
                  src="/food.png"
                  alt="food"
                  width={24}
                  height={24}
                  className="absolute"
                />
              </div>
              <div className="font-medium font-sans text-[#101828] text-base">
                Restaurants, food delivery
              </div>
            </div>

            <div className="flex flex-row items-center gap-4">
              <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Image
                  src="/market.png"
                  alt="market"
                  width={24}
                  height={24}
                  className="absolute"
                />
              </div>
              <div className="font-medium font-sans text-[#101828] text-base">
                Marketplaces
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-4">
              <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Image
                  src="/AR.png"
                  alt="AR"
                  width={24}
                  height={24}
                  className="absolute"
                />
              </div>
              <div className="font-medium font-sans text-[#101828] text-base">
                AR technology
              </div>
            </div>

            <div className="flex flex-row items-center gap-4">
              <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Image
                  src="/TV.png"
                  alt="TV"
                  width={24}
                  height={24}
                  className="absolute"
                />
              </div>
              <div className="font-medium font-sans text-[#101828] text-base">
                TV series
              </div>
            </div>

            <div className="flex flex-row items-center gap-4">
              <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Image
                  src="/startup.png"
                  alt="startup"
                  width={24}
                  height={24}
                  className="absolute"
                />
              </div>
              <div className="font-medium font-sans text-[#101828] text-base">
                Startups
              </div>
            </div>

            <div className="flex flex-row items-center gap-4">
              <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Image
                  src="/religion.png"
                  alt="religion"
                  width={24}
                  height={24}
                  className="absolute"
                />
              </div>
              <div className="font-medium font-sans text-[#101828] text-base">
                Religion
              </div>
            </div>

            <div className="flex flex-row items-center gap-4">
              <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Image
                  src="/online.png"
                  alt="online"
                  width={24}
                  height={24}
                  className="absolute"
                />
              </div>
              <div className="font-medium font-sans text-[#101828] text-base">
                Online cources
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 mt-32">
          <div className="font-sans font-bold text-4xl text-[#101828] ">
            Projects we are proud of
          </div>
          <div className="font-sans font-medium text-base text-[#101828] lg:max-w-[600px]">
            Our software development company is truly proud of the wonderful
            clients we have worked with. We enjoy a long-term partnership
          </div>
        </div>

        <div className="mt-10">
          <div className="md:flex md:flex-row md:gap-14 p-4 grid grid-cols-2 gap-2">
            <div className="flex flex-row">
              <div className="flex flex-col">
                <div className="text-[#101828] font-medium text-base">
                  Project&nbsp;
                </div>
                <div className="h-1 bg-[#FFBA00] text-[#101828] font-medium text-base"></div>
              </div>
              <div> 1</div>
            </div>
            <div className="text-[#101828] font-medium text-base">
              Project 2
            </div>
            <div className="text-[#101828] font-medium text-base">
              Project 3
            </div>
            <div className="text-[#101828] font-medium text-base">
              Project 4
            </div>
          </div>
        </div>

        <div className="mt-8 flex lg:flex-row gap-8 flex-col mx-auto ml-2">
          <div className="lg:max-w-[754px]">
            <div className="font-sans text-[#101828] font-bold text-4xl">
              Project 1
            </div>
            <div className="font-sans text-[#101828] mt-10 text-sm lg:max-w-[600px]">
              Crafted an innovative rental property management app, seamlessly
              integrating secure login, absence registration, and a tenant
              notice board. Elevating the resident experience with user-friendly
              design and efficient communication channels
            </div>

            <div className="mt-10 font-normal text-base">
              Business analysis <span className="text-[#FFBA00]">/</span> iOS{" "}
              <span className="text-[#FFBA00]">/</span> Android{" "}
              <span className="text-[#FFBA00]">/</span> QA{" "}
              <span className="text-[#FFBA00]">/</span> UI/UX Design
            </div>
            <div className="flex flex-row mt-8 gap-8">
              <div className="flex flex-row gap-2">
                <Image src="/place.png" alt="place" width={24} height={24} />
                <div className="text-sm font-sans font-normal">India</div>
              </div>
              <div className="flex flex-row gap-2">
                <Image src="/work.png" alt="work" width={24} height={24} />
                <div className="text-sm font-sans font-normal">Real Estate</div>
              </div>
            </div>

            <div className="flex flex-row mt-8 gap-12">
              <div className="flex flex-col">
                <div className="font-sans font-bold text-2xl">400%</div>
                <div className="font-sans font-normal text-xs text-[#667085]">
                  User Growth
                </div>
              </div>
              <div className="flex flex-col">
                <div className="font-sans font-bold text-2xl">+ 200 000</div>
                <div className="font-sans font-normal text-xs text-[#667085]">
                  Active Users
                </div>
              </div>
            </div>

            <div className="flex flex-row mt-8 gap-5">
              <div>
                <Image src="/ios.png" alt="ios" width={148} height={40} />
              </div>
              <div>
                <Image src="/Group.png" alt="Group" width={136} height={40} />
              </div>
            </div>
          </div>

          <div>
            <Image src="/image.png" alt="image" width={750} height={750} />
          </div>
        </div>
      </div>
      <div className="max-h-[1440px] bg-gradient-to-r from-yellow-400 to-custom-green pb-12">
        <div className="flex lg:flex-row lg:gap-60 flex-col gap-10 justify-center items-center">
          <div className="mt-24 flex flex-col lg:ml-9 ml-2">
            <div className="text-white font-sans font-bold text-4xl ">
              Lets discuss<br></br> Your project
            </div>
            <div className="font-sans font-medium text-white mt-6">
              Lets figure out how to create an effective application, <br></br>
              its cost and terms of its development
            </div>
          </div>
          <div className="contactinfo relative lg:max-w-xl lg:max-h-70 bg-white mt-20 mx-10 lg:mx-1 p-6 shadow-md rounded-lg self-center">
            <div className="flex lg:flex-row lg:gap-10 flex-col">
              <div className="form flex flex-col gap-6 py-6 w-full">
                <div className="grid lg:grid-cols-2 gap-6 w-full">
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
                <div className="flex justify-end mt-6">
                  <Button className="py-6 px-9 bg-[#FFB900] text-white rounded-lg">
                    Discuss the project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="lg:ml-44 py-11 font-bold font-sans text-black text-3xl ml-5">
          Application Development Stages
        </div>
        <div className="grid lg:grid-cols-3 lg:ml-40 mt-8 lg:mr-9 grid-cols-1 mx-auto gap-0 ml-5">
          <div className="max-w-[392px] max-h-[564px] flex flex-col gap-10">
            <div className="flex flex-col shadow-lg shadow-current p-7 rounded-lg gap-3 relative">
              <Image src="/1.png" alt="1" width={85.9} height={172} className=" absolute right-1 top-0"/>
              <div className="flex flex-row items-center gap-4">
                <div>
                  <Image
                    src="/planing.png"
                    alt="planing"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="font-sans font-bold text-xl">Analysis</div>
              </div>
              <div className="font-sans font-normal text-sm">
                We craft precise technical specs, aligning with your business,
                technology, and user requirements.
              </div>
            </div>

            <div className="flex flex-col shadow-lg shadow-current p-7 rounded-lg gap-3 relative">
            <Image src="/1.png" alt="1" width={85.9} height={172} className=" absolute right-1 top-0"/>
              <div className="flex flex-row items-center gap-4">
                <div>
                  <Image
                    src="/planing.png"
                    alt="planing"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="font-sans font-bold text-xl">Analysis</div>
              </div>
              <div className="font-sans font-normal text-sm">
                We craft precise technical specs, aligning with your business,
                technology, and user requirements.
              </div>
            </div>

            <div className="flex flex-col shadow-lg shadow-current p-7 rounded-lg gap-3 relative">
            <Image src="/1.png" alt="1" width={85.9} height={172} className=" absolute right-1 top-0"/>
              <div className="flex flex-row items-center gap-4">
                <div>
                  <Image
                    src="/planing.png"
                    alt="planing"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="font-sans font-bold text-xl">Analysis</div>
              </div>
              <div className="font-sans font-normal text-sm">
                We craft precise technical specs, aligning with your business,
                technology, and user requirements.
              </div>
            </div>
          </div>
          <div className="lg:-mt-28">
            <Image src="/dd.png" alt="dd" width={440} height={564} />
          </div>
          <div className="max-w-[392px] max-h-[564px] flex flex-col gap-10">
            <div className="flex flex-col shadow-lg shadow-current p-7 rounded-lg gap-3 relative">
            <Image src="/1.png" alt="1" width={85.9} height={172} className=" absolute right-1 top-0"/>
              <div className="flex flex-row items-center gap-4">
                <div>
                  <Image
                    src="/planing.png"
                    alt="planing"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="font-sans font-bold text-xl">Analysis</div>
              </div>
              <div className="font-sans font-normal text-sm">
                We craft precise technical specs, aligning with your business,
                technology, and user requirements.
              </div>
            </div>

            <div className="flex flex-col shadow-lg shadow-current p-7 rounded-lg gap-3 relative">
            <Image src="/1.png" alt="1" width={85.9} height={172} className=" absolute right-1 top-0"/>
              <div className="flex flex-row items-center gap-4">
                <div>
                  <Image
                    src="/planing.png"
                    alt="planing"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="font-sans font-bold text-xl">Analysis</div>
              </div>
              <div className="font-sans font-normal text-sm">
                We craft precise technical specs, aligning with your business,
                technology, and user requirements.
              </div>
            </div>

            <div className="flex flex-col shadow-lg shadow-current p-7 rounded-lg gap-3 relative">
            <Image src="/1.png" alt="1" width={85.9} height={172} className=" absolute right-1 top-0"/>
              <div className="flex flex-row items-center gap-4">
                <div>
                  <Image
                    src="/planing.png"
                    alt="planing"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="font-sans font-bold text-xl">Analysis</div>
              </div>
              <div className="font-sans font-normal text-sm">
                We craft precise technical specs, aligning with your business,
                technology, and user requirements.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectiontwo;
