import {
  Facebook,
  Instagram,
  Twitter,
  Room,
  Phone,
  MailOutline,
} from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-700 text-white pt-10">
      <div className="container mx-auto px-5 flex flex-wrap justify-between">
        
        {/* First Column: SOHO Branding */}
        <div className="flex-1 mb-8 md:mb-0 flex flex-col">
          <h1 className="text-3xl font-bold mb-4">SOHO</h1>
          <p className="mb-4">Your Fashion, Your Style</p>
          <div className="flex px-3">
            <div className="cursor-pointer w-[40px] h-[40px] bg-blue-700 flex items-center justify-center rounded-full hover:bg-blue-800 transition-all duration-300">
              <Facebook />
            </div>
            <div className="cursor-pointer w-[40px] h-[40px] bg-fuchsia-500 flex items-center justify-center rounded-full hover:bg-fuchsia-600 transition-all duration-300">
              <Instagram />
            </div>
            <div className="cursor-pointer w-[40px] h-[40px] bg-blue-500 flex items-center justify-center rounded-full hover:bg-blue-600 transition-all duration-300">
              <Twitter />
            </div>
          </div>
        </div>
        
        {/* Second Column: Useful Pages */}
        <div className="flex-1 mb-8 md:mb-0">
          <h3 className="text-xl font-semibold mb-5">صفحات کاربردی</h3>
          <ul className="list-none space-y-3">
            <li className="cursor-pointer hover:text-fuchsia-400 transition-all duration-300">خانه</li>
            <li className="cursor-pointer hover:text-fuchsia-400 transition-all duration-300">پوشاک زنانه</li>
            <li className="cursor-pointer hover:text-fuchsia-400 transition-all duration-300">پوشاک مردانه</li>
            <li className="cursor-pointer hover:text-fuchsia-400 transition-all duration-300">پروفایل</li>
            <li className="cursor-pointer hover:text-fuchsia-400 transition-all duration-300">محصولات محبوب</li>
            <li className="cursor-pointer hover:text-fuchsia-400 transition-all duration-300">تماس با ما</li>
            <li className="cursor-pointer hover:text-fuchsia-400 transition-all duration-300">درباره ما</li>
          </ul>
        </div>
        
        {/* Third Column: Contact Information */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-5">تماس با ما</h3>
          <div className="mb-4 flex items-center">
            <Room className="mr-2 text-fuchsia-400" />
            ایران. تبریز. الهی پرست
          </div>
          <div className="mb-4 flex items-center">
            <Phone className="mr-2 text-fuchsia-400" />
            09144839748
          </div>
          <div className="mb-4 flex items-center">
            <MailOutline className="mr-2 text-fuchsia-400" />
            Saeiide.tm@gmail.com
          </div>
        </div>
      </div>
      
      {/* Footer Bottom: Copyright and Links */}
      <div className="border-t border-gray-700 text-center text-sm">
        <p className="m-0">&copy; {new Date().getFullYear()} SOHO. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
