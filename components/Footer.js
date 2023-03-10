import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

import Link from "next/link"


const Footer = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="bg-[#0000FF] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-10 px-10 py-10 rounded-3xl items-center justify-center ">
        <div className="flex flex-col items-center lg:items-start gap-5 text-white">
          
            <p className="text-center lg:text-start text-white">
              10 Robert Sobukwe Road ,Bellville,Cape Town,7530
            </p>




          
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5">
          <p className="text-xl font-medium text-white">Company</p>
          <Link href="services">
            <p className="text-base text-white">Our Services</p>
          </Link>
          <Link href="contact">
            <p className="text-base text-white">Contact</p>
          </Link>
          <Link href="courses">
            <p className="text-base text-white">Courses</p>
          </Link>
        </div>

        <div className="footer flex flex-col items-center lg:items-start gap-5">
          <p className="text-xl font-medium">Legal</p>
          <Link href="Privacy">
            <p className="text-base text-white">Privacy Policy</p>
          </Link>
          <Link href="TermsofService">
            <p className="text-base text-white">Terms of Service</p>
          </Link>
        </div>
        <div className="flex items-center gap-5 text-white">
          <a href="tel:+27658808362">Phone Number: +27 65 880 8362</a>
        </div>

        <div className="flex items-center gap-5">
          <a href="https://www.facebook.com/profile.php?id=100068761522863">
            <BsFacebook className="text-3xl text-white-500" />
          </a>
          <a href="https://www.instagram.com/spider_web_designs_official/">
            <BsInstagram className="text-3xl text-white-500" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
