"use client";
import React from "react";
import {
  StarIcon,
  HomeIcon,
  Squares2X2Icon,
  ArrowsPointingOutIcon
} from "@heroicons/react/24/solid";

import Image from "next/image";
import hotelImg from "../../../public/images/room.png"; 
const HotelRoom = () => {
  return (
   <div className="grid grid-cols-1 md:grid-cols-4 gap-10 p-6">

     <div className="w-full h-fit  rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
      {/* Image */}
      <div className="relative">
        <Image
          src={hotelImg}
          alt="Hotel"
          className="object-cover w-full h-48"
          width={400}
          height={300}
        />

        {/* Star Rating */}
        <div className="absolute bottom-3 left-3 bg-white bg-opacity-80 px-2 py-1 rounded-full flex items-center space-x-1">
          <StarIcon className="w-4 h-4 text-yellow-400" />
          <span className="text-xs font-medium text-gray-800">4.5</span>
        </div>
      </div>

      {/* Content */}
      <div className="w-full mx-auto p-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Sofitel Algiers Hamma Garden
        </h3>
        <p className="text-gray-600 text-sm mt-1">
          Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.
        </p>

        <div className="flex items-baseline mt-3">
          <span className="text-gray-900 font-bold text-xl">699</span>
          <span className="text-gray-500 text-sm ml-2">Per Night</span>
        </div>

        {/* Specs */}
        <div className="flex justify-between mt-4 text-gray-600 text-sm">
          <div className="flex items-center space-x-1">
            <HomeIcon className="w-4 h-4" />
            <span>2 Bedroom</span>
          </div>
          <div className="flex items-center space-x-1">
            <Squares2X2Icon className="w-4 h-4" />
            <span>2 Bathroom</span>
          </div>
          <div className="flex items-center space-x-1">
            <ArrowsPointingOutIcon className="w-4 h-4" />
            <span>1,200 sq ft</span>
          </div>
        </div>

        {/* Button */}
        <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full font-medium">
          Book Now
        </button>
      </div>
    </div>

     <div className="w-full h-fit  rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
      {/* Image */}
      <div className="relative">
        <Image
          src={hotelImg}
          alt="Hotel"
          className="object-cover w-full h-48"
          width={400}
          height={300}
        />

        {/* Star Rating */}
        <div className="absolute bottom-3 left-3 bg-white bg-opacity-80 px-2 py-1 rounded-full flex items-center space-x-1">
          <StarIcon className="w-4 h-4 text-yellow-400" />
          <span className="text-xs font-medium text-gray-800">4.5</span>
        </div>
      </div>

      {/* Content */}
      <div className="w-full mx-auto p-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Sofitel Algiers Hamma Garden
        </h3>
        <p className="text-gray-600 text-sm mt-1">
          Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.
        </p>

        <div className="flex items-baseline mt-3">
          <span className="text-gray-900 font-bold text-xl">699</span>
          <span className="text-gray-500 text-sm ml-2">Per Night</span>
        </div>

        {/* Specs */}
        <div className="flex justify-between mt-4 text-gray-600 text-sm">
          <div className="flex items-center space-x-1">
            <HomeIcon className="w-4 h-4" />
            <span>2 Bedroom</span>
          </div>
          <div className="flex items-center space-x-1">
            <Squares2X2Icon className="w-4 h-4" />
            <span>2 Bathroom</span>
          </div>
          <div className="flex items-center space-x-1">
            <ArrowsPointingOutIcon className="w-4 h-4" />
            <span>1,200 sq ft</span>
          </div>
        </div>

        {/* Button */}
        <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full font-medium">
          Book Now
        </button>
      </div>
    </div>

     <div className="w-full h-fit  rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
      {/* Image */}
      <div className="relative">
        <Image
          src={hotelImg}
          alt="Hotel"
          className="object-cover w-full h-48"
          width={400}
          height={300}
        />

        {/* Star Rating */}
        <div className="absolute bottom-3 left-3 bg-white bg-opacity-80 px-2 py-1 rounded-full flex items-center space-x-1">
          <StarIcon className="w-4 h-4 text-yellow-400" />
          <span className="text-xs font-medium text-gray-800">4.5</span>
        </div>
      </div>

      {/* Content */}
      <div className="w-full mx-auto p-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Sofitel Algiers Hamma Garden
        </h3>
        <p className="text-gray-600 text-sm mt-1">
          Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.
        </p>

        <div className="flex items-baseline mt-3">
          <span className="text-gray-900 font-bold text-xl">699</span>
          <span className="text-gray-500 text-sm ml-2">Per Night</span>
        </div>

        {/* Specs */}
        <div className="flex justify-between mt-4 text-gray-600 text-sm">
          <div className="flex items-center space-x-1">
            <HomeIcon className="w-4 h-4" />
            <span>2 Bedroom</span>
          </div>
          <div className="flex items-center space-x-1">
            <Squares2X2Icon className="w-4 h-4" />
            <span>2 Bathroom</span>
          </div>
          <div className="flex items-center space-x-1">
            <ArrowsPointingOutIcon className="w-4 h-4" />
            <span>1,200 sq ft</span>
          </div>
        </div>

        {/* Button */}
        <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full font-medium">
          Book Now
        </button>
      </div>
    </div>

     <div className="w-full h-fit  rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
      {/* Image */}
      <div className="relative">
        <Image
          src={hotelImg}
          alt="Hotel"
          className="object-cover w-full h-48"
          width={400}
          height={300}
        />

        {/* Star Rating */}
        <div className="absolute bottom-3 left-3 bg-white bg-opacity-80 px-2 py-1 rounded-full flex items-center space-x-1">
          <StarIcon className="w-4 h-4 text-yellow-400" />
          <span className="text-xs font-medium text-gray-800">4.5</span>
        </div>
      </div>

      {/* Content */}
      <div className="w-full mx-auto p-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Sofitel Algiers Hamma Garden
        </h3>
        <p className="text-gray-600 text-sm mt-1">
          Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.
        </p>

        <div className="flex items-baseline mt-3">
          <span className="text-gray-900 font-bold text-xl">699</span>
          <span className="text-gray-500 text-sm ml-2">Per Night</span>
        </div>

        {/* Specs */}
        <div className="flex justify-between mt-4 text-gray-600 text-sm">
          <div className="flex items-center space-x-1">
            <HomeIcon className="w-4 h-4" />
            <span>2 Bedroom</span>
          </div>
          <div className="flex items-center space-x-1">
            <Squares2X2Icon className="w-4 h-4" />
            <span>2 Bathroom</span>
          </div>
          <div className="flex items-center space-x-1">
            <ArrowsPointingOutIcon className="w-4 h-4" />
            <span>1,200 sq ft</span>
          </div>
        </div>

        {/* Button */}
        <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full font-medium">
          Book Now
        </button>
      </div>
    </div>

     <div className="w-full h-fit  rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
      {/* Image */}
      <div className="relative">
        <Image
          src={hotelImg}
          alt="Hotel"
          className="object-cover w-full h-48"
          width={400}
          height={300}
        />

        {/* Star Rating */}
        <div className="absolute bottom-3 left-3 bg-white bg-opacity-80 px-2 py-1 rounded-full flex items-center space-x-1">
          <StarIcon className="w-4 h-4 text-yellow-400" />
          <span className="text-xs font-medium text-gray-800">4.5</span>
        </div>
      </div>

      {/* Content */}
      <div className="w-full mx-auto p-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Sofitel Algiers Hamma Garden
        </h3>
        <p className="text-gray-600 text-sm mt-1">
          Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.
        </p>

        <div className="flex items-baseline mt-3">
          <span className="text-gray-900 font-bold text-xl">699</span>
          <span className="text-gray-500 text-sm ml-2">Per Night</span>
        </div>

        {/* Specs */}
        <div className="flex justify-between mt-4 text-gray-600 text-sm">
          <div className="flex items-center space-x-1">
            <HomeIcon className="w-4 h-4" />
            <span>2 Bedroom</span>
          </div>
          <div className="flex items-center space-x-1">
            <Squares2X2Icon className="w-4 h-4" />
            <span>2 Bathroom</span>
          </div>
          <div className="flex items-center space-x-1">
            <ArrowsPointingOutIcon className="w-4 h-4" />
            <span>1,200 sq ft</span>
          </div>
        </div>

        {/* Button */}
        <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full font-medium">
          Book Now
        </button>
      </div>
    </div>

     <div className="w-full h-fit  rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
      {/* Image */}
      <div className="relative">
        <Image
          src={hotelImg}
          alt="Hotel"
          className="object-cover w-full h-48"
          width={400}
          height={300}
        />

        {/* Star Rating */}
        <div className="absolute bottom-3 left-3 bg-white bg-opacity-80 px-2 py-1 rounded-full flex items-center space-x-1">
          <StarIcon className="w-4 h-4 text-yellow-400" />
          <span className="text-xs font-medium text-gray-800">4.5</span>
        </div>
      </div>

      {/* Content */}
      <div className="w-full mx-auto p-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Sofitel Algiers Hamma Garden
        </h3>
        <p className="text-gray-600 text-sm mt-1">
          Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.
        </p>

        <div className="flex items-baseline mt-3">
          <span className="text-gray-900 font-bold text-xl">699</span>
          <span className="text-gray-500 text-sm ml-2">Per Night</span>
        </div>

        {/* Specs */}
        <div className="flex justify-between mt-4 text-gray-600 text-sm">
          <div className="flex items-center space-x-1">
            <HomeIcon className="w-4 h-4" />
            <span>2 Bedroom</span>
          </div>
          <div className="flex items-center space-x-1">
            <Squares2X2Icon className="w-4 h-4" />
            <span>2 Bathroom</span>
          </div>
          <div className="flex items-center space-x-1">
            <ArrowsPointingOutIcon className="w-4 h-4" />
            <span>1,200 sq ft</span>
          </div>
        </div>

        {/* Button */}
        <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full font-medium">
          Book Now
        </button>
      </div>
    </div>

     <div className="w-full h-fit  rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
      {/* Image */}
      <div className="relative">
        <Image
          src={hotelImg}
          alt="Hotel"
          className="object-cover w-full h-48"
          width={400}
          height={300}
        />

        {/* Star Rating */}
        <div className="absolute bottom-3 left-3 bg-white bg-opacity-80 px-2 py-1 rounded-full flex items-center space-x-1">
          <StarIcon className="w-4 h-4 text-yellow-400" />
          <span className="text-xs font-medium text-gray-800">4.5</span>
        </div>
      </div>

      {/* Content */}
      <div className="w-full mx-auto p-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Sofitel Algiers Hamma Garden
        </h3>
        <p className="text-gray-600 text-sm mt-1">
          Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.
        </p>

        <div className="flex items-baseline mt-3">
          <span className="text-gray-900 font-bold text-xl">699</span>
          <span className="text-gray-500 text-sm ml-2">Per Night</span>
        </div>

        {/* Specs */}
        <div className="flex justify-between mt-4 text-gray-600 text-sm">
          <div className="flex items-center space-x-1">
            <HomeIcon className="w-4 h-4" />
            <span>2 Bedroom</span>
          </div>
          <div className="flex items-center space-x-1">
            <Squares2X2Icon className="w-4 h-4" />
            <span>2 Bathroom</span>
          </div>
          <div className="flex items-center space-x-1">
            <ArrowsPointingOutIcon className="w-4 h-4" />
            <span>1,200 sq ft</span>
          </div>
        </div>

        {/* Button */}
        <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full font-medium">
          Book Now
        </button>
      </div>
    </div>
    
     <div className="w-full h-fit  rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
      {/* Image */}
      <div className="relative">
        <Image
          src={hotelImg}
          alt="Hotel"
          className="object-cover w-full h-48"
          width={400}
          height={300}
        />

        {/* Star Rating */}
        <div className="absolute bottom-3 left-3 bg-white bg-opacity-80 px-2 py-1 rounded-full flex items-center space-x-1">
          <StarIcon className="w-4 h-4 text-yellow-400" />
          <span className="text-xs font-medium text-gray-800">4.5</span>
        </div>
      </div>

      {/* Content */}
      <div className="w-full mx-auto p-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Sofitel Algiers Hamma Garden
        </h3>
        <p className="text-gray-600 text-sm mt-1">
          Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.
        </p>

        <div className="flex items-baseline mt-3">
          <span className="text-gray-900 font-bold text-xl">699</span>
          <span className="text-gray-500 text-sm ml-2">Per Night</span>
        </div>

        {/* Specs */}
        <div className="flex justify-between mt-4 text-gray-600 text-sm">
          <div className="flex items-center space-x-1">
            <HomeIcon className="w-4 h-4" />
            <span>2 Bedroom</span>
          </div>
          <div className="flex items-center space-x-1">
            <Squares2X2Icon className="w-4 h-4" />
            <span>2 Bathroom</span>
          </div>
          <div className="flex items-center space-x-1">
            <ArrowsPointingOutIcon className="w-4 h-4" />
            <span>1,200 sq ft</span>
          </div>
        </div>

        {/* Button */}
        <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full font-medium">
          Book Now
        </button>
      </div>
    </div>

   </div>
  );
};

export default HotelRoom;
