"use client";
import React from "react";
import { BookmarkIcon, UsersIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

import img1 from "../../../public/images/img1.png";
import img2 from "../../../public/images/img2.png";
import img3 from "../../../public/images/img3.png";
import img4 from "../../../public/images/img4.png";
import img5 from "../../../public/images/img5.png";
import img6 from "../../../public/images/img6.png";
import img7 from "../../../public/images/img7.png";
import img8 from "../../../public/images/img8.png";
import img9 from "../../../public/images/img9.png";

const HeroSection = () => {
  return (
    <div className="w-full mx-auto p-6">
      {/* Top Section */}
      <div className="flex justify-between items-start flex-col md:flex-row mb-6">
        {/* Title + subtitle */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-semibold text-gray-900">
            El Aurassi Hotel
          </h2>
          <p className="text-gray-600 mt-1">
            Spacious, modern rooms with panoramic views of the Mediterranean Sea.
          </p>
        </div>

        {/* Icons + button */}
        <div className="flex items-center space-x-3">
          <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100">
            <BookmarkIcon className="w-5 h-5 text-gray-600" />
          </button>
          <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100">
            <UsersIcon className="w-5 h-5 text-gray-600" />
          </button>
          <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-full">
            Reserve
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>

      {/* Grid Layout */}
      <div>

      <div className="grid grid-cols-1 md:grid-cols-3 ">
        {/* Large image on left */}
        <div className="md:col-span-2">
          <Image
            src={img1}
            alt="Main Room"
            className="w-full h-80 object-cover border-b-2 border-white "
            width={1200}
            height={800}
          />
        </div>

        {/* Small images grid */}
        <div className="grid md:col-span-1 ">
          <Image
            src={img2}
            alt=""
            className="w-full h-[160px] object-cover border-l-2 border-white "
            width={400}
            height={300}
          />
          <Image
            src={img3}
            alt=""
            className="w-full h-[160px] object-cover border-2 border-r-0 border-white "
            width={400}
            height={300}
          />
        </div>
      </div>
      {/* bottom grid  */}
      <div className="grid grid-cols-1 md:grid-cols-6">
        <Image
            src={img4}
            alt=""
            className="w-full h-[160px] object-cover border-r-2 border-white "
            width={400}
            height={300}
          />
        <Image
            src={img5}
            alt=""
            className="w-full h-[160px] object-cover border-r-2 border-white "
            width={400}
            height={300}
          />
        <Image
            src={img6}
            alt=""
            className="w-full h-[160px] object-cover border-r-2 border-white "
            width={400}
            height={300}
          />
        <Image
            src={img7}
            alt=""
            className="w-full h-[160px] object-cover border-r-2 border-white "
            width={400}
            height={300}
          />
        <Image
            src={img8}
            alt=""
            className="w-full h-[160px] object-cover border-r-2 border-white "
            width={400}
            height={300}
          />
        <Image
            src={img9}
            alt=""
            className="w-full h-[160px] object-cover border-r-2 border-white "
            width={400}
            height={300}
          />
          
          


      </div>

       </div>
    </div>
  );
};

export default HeroSection;
