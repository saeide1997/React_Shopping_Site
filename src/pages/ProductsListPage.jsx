import { useLocation } from "react-router-dom";
import { useState } from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import News from "../component/News";
import Products from "../component/Products";

const ProductsList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2]
    ? decodeURIComponent(location.pathname.split("/")[2])
    : "";
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilter((prev) => ({
      ...prev,
      [e.target.name]: value,
    }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 text-center my-6">
          {category || "محصولات"}
        </h2>

        {/* فیلتر و مرتب‌سازی */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-4 rounded-lg shadow-sm">
          <div className="flex flex-wrap items-center gap-3">
            <h5 className="text-gray-700 font-medium">فیلتر محصولات:</h5>
            <select
              name="color"
              onChange={handleFilter}
              className="h-[40px] px-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-gray-400"
            >
              <option value="" disabled>
                نوع
              </option>
              <option value="gold">طلایی</option>
              <option value="silver">نقره‌ای</option>
              <option value="pelatin">پلاتین</option>
              <option value="steel">استیل</option>
            </select>
            <select
              name="size"
              onChange={handleFilter}
              className="h-[40px] px-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-gray-400"
            >
              <option value="" disabled>
                سایز
              </option>
              <option value="s">Small</option>
              <option value="md">Medium</option>
              <option value="l">Large</option>
              <option value="xl">X-Large</option>
              <option value="xxl">XX-Large</option>
            </select>
          </div>

          {/* مرتب‌سازی */}
          <div className="flex items-center justify-center md:justify-end gap-3">
            <h5 className="text-gray-700 font-medium">ترتیب محصولات:</h5>
            <select
              onChange={(e) => setSort(e.target.value)}
              className="h-[40px] px-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-gray-400"
            >
              <option value="newest">تازه‌ترین</option>
              <option value="asc">ارزان‌ترین</option>
              <option value="dsc">گران‌ترین</option>
            </select>
          </div>
        </div>

        {/* نمایش محصولات */}
        <div className="mt-6">
          <Products category={category} filters={filter} sort={sort} quantity={10000} />
        </div>

        {/* سایر بخش‌ها */}
        <News />
      </div>
      <Footer />
    </div>
  );
};

export default ProductsList;
