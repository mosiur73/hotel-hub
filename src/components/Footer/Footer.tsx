"use client";
import React from "react";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon
} from "@heroicons/react/24/outline";
import {
  Twitter,
  Facebook,
  Instagram,
  Github
} from "lucide-react";
import Image from "next/image";
import Logo from "../../../public/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#005b99] text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          {/* Logo */}
          <Image src={Logo} alt="Logo" className="h-10 w-auto mb-4" />

          {/* Text */}
          <p className="text-sm leading-6">
            [App Name] makes booking your next stay easy, affordable, and stress-free.
            With thousands of hotels worldwide, exclusive deals, and secure payment
            options, we're here to help you find the perfect place to stay, every time.
          </p>

          {/* Social icons */}
          <div className="flex space-x-4 mt-4">
           <Twitter className="w-5 h-5 text-white hover:text-gray-300" />
  <Facebook className="w-5 h-5 text-white hover:text-gray-300" />
  <Instagram className="w-5 h-5 text-white hover:text-gray-300" />
  <Github className="w-5 h-5 text-white hover:text-gray-300" />
          </div>

          {/* Address */}
          <div className="flex items-center space-x-2 mt-4">
            <MapPinIcon className="w-4 h-4" />
            <span className="text-sm">123 Travel St, Suite 100, City, Country</span>
          </div>
        </div>

       
         {/* Center Links */}
        <div className="space-y-6 lg:pl-24">
          <h4 className="text-lg font-semibold mb-4">Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Hotels</a></li>
            <li><a href="#" className="hover:underline">Deals</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <PhoneIcon className="w-4 h-4" />
            <span className="text-sm">+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center space-x-2">
            <EnvelopeIcon className="w-4 h-4" />
            <span className="text-sm">support@[yourappname].com</span>
          </div>

           <div className="flex gap-4">
             <h4 className="text-lg font-semibold mb-2">Download Our App</h4>
            <Instagram className="w-5 h-5 text-white hover:text-gray-300" />
              <Github className="w-5 h-5 text-white hover:text-gray-300" />
           </div>
         
         
        </div>

       

      </div>

      {/* Bottom Copyright */}
       <div className="text-center text-sm py-4 border-t border-blue-700 mt-8">
        © 2023, All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
