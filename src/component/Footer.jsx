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
      <div className="container mx-auto px-5 flex flex-col md:flex-row flex-wrap justify-between gap-8 md:gap-0">
        
        {/* First Column: Branding */}
        <div className="flex-1 mb-8 md:mb-0 flex flex-col">
          <h1 className="text-3xl font-bold mb-4">SOHO</h1>
          <p className="mb-4">Your Fashion, Your Style</p>
          <div className="flex gap-3 px-3">
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
        
        {/* Second Column: Useful Links */}
        <div className="flex-1 mb-8 md:mb-0 text-right">
          <h3 className="text-xl font-semibold mb-5">صفحات کاربردی</h3>
          <ul className="list-none space-y-3">
            {[
              "خانه",
              "پوشاک زنانه",
              "پوشاک مردانه",
              "پروفایل",
              "محصولات محبوب",
              "تماس با ما",
              "درباره ما",
            ].map((item, idx) => (
              <li
                key={idx}
                className="cursor-pointer hover:text-fuchsia-400 transition-all duration-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Third Column: Contact Info */}
        <div className="flex-1 text-right">
          <h3 className="text-xl font-semibold mb-5">تماس با ما</h3>
          <div className="mb-4 flex items-center justify-end hover:text-fuchsia-300 transition-all duration-200">
            <span className="ml-2">ایران. تبریز. الهی‌پرست</span>
            <Room className="text-fuchsia-400" />
          </div>
          <div className="mb-4 flex items-center justify-end hover:text-fuchsia-300 transition-all duration-200">
            <span className="ml-2">09144839748</span>
            <Phone className="text-fuchsia-400" />
          </div>
          <div className="mb-4 flex items-center justify-end hover:text-fuchsia-300 transition-all duration-200">
            <span className="ml-2">Saeiide.tm@gmail.com</span>
            <MailOutline className="text-fuchsia-400" />
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-600 text-center text-sm py-4">
        <p className="m-0">
          &copy; {new Date().getFullYear()} SOHO. تمامی حقوق محفوظ است.
        </p>
      </div>
    </div>
  );
};

export default Footer;
