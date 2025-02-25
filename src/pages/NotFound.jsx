
import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="flex justify-center items-center min-h-screen p-6">
        <div className="bg-white rounded-lg shadow-lg text-center p-10 w-full max-w-lg">
          <h1 className="text-6xl font-bold text-fuchsia-600 mb-4">404</h1>
          <p className="text-2xl text-gray-800 mb-6">صفحه‌ای که دنبال آن می‌گردید پیدا نشد.</p>
          <p className="text-gray-600 mb-6">متاسفانه، صفحه‌ای که درخواست کرده‌اید وجود ندارد. ممکن است لینک خراب باشد یا صفحه حذف شده باشد.</p>
          <Link
            to="/"
            className="px-6 py-3 bg-fuchsia-800/70 text-white rounded-lg shadow-md hover:bg-fuchsia-700 transition duration-200"
          >
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
