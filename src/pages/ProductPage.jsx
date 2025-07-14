import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import News from "../component/News";
import Footer from "../component/Footer";
import { Add, FavoriteBorderOutlined, Remove } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/cartRedux";
import { publicRequest } from "../requestMethods";
import Products from "../component/Products";
import { Checkbox, FormControlLabel } from "@mui/material";

const ProductPage = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState();
  const [size, setSize] = useState();
  const dispatch = useDispatch();
  const NumberFormat = new Intl.NumberFormat();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/product/find/" + id);
        setProduct(res.data);
        if (res.data.size?.length) setSize(res.data.size[0]); // انتخاب پیش‌فرض سایز
        if (res.data.color?.length) setColor(res.data.color[0]); // انتخاب پیش‌فرض رنگ
      } catch (err) {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "des") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <main className="container mt-5 mx-auto px-4 py-10 flex flex-col sm:flex-row gap-8">
        {/* تصویر محصول */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={product.img}
            alt={product.title}
            className="max-w-full max-h-[450px] object-contain rounded-xl shadow-md"
          />
        </div>

        {/* اطلاعات محصول */}
        <section className="flex-1 bg-white rounded-2xl p-6 shadow-lg flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-4">{product.title}</h1>
            <p className="text-gray-600 mb-6 leading-relaxed text-justify">{product.desc}</p>

            <span className="block text-2xl font-semibold text-pink-600 mb-6">
              {NumberFormat.format(product.price)} ریال
            </span>

            {/* انتخاب رنگ */}
            <div className="mb-6">
              <h5 className="font-semibold text-gray-700 mb-2">رنگ:</h5>
              <div className="flex gap-3">
                {product.color?.map((c) => (
                  <button
                    key={c}
                    aria-label={`انتخاب رنگ ${c}`}
                    className={`w-8 h-8 rounded-full border-2 focus:outline-none transition-transform hover:scale-110 ${
                      color === c ? "border-pink-600 scale-125" : "border-gray-300"
                    }`}
                    style={{ backgroundColor: c }}
                    onClick={() => setColor(c)}
                    type="button"
                  />
                ))}
              </div>
            </div>

            {/* انتخاب سایز */}
            <div className="mb-6">
              <h5 className="font-semibold text-gray-700 mb-2">اندازه:</h5>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="w-full md:w-48 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-pink-400 focus:outline-none"
              >
                {product.size?.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <FormControlLabel
              control={<Checkbox />}
              label="موجود شد به من اطلاع بده"
              className="mb-6"
            />
          </div>

          {/* کنترل تعداد و دکمه اضافه کردن به سبد */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <button
                onClick={() => handleQuantity("des")}
                disabled={quantity === 1}
                className="p-1 rounded-full border border-gray-300 text-gray-700 hover:bg-pink-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
                aria-label="کاهش تعداد"
              >
                <Remove fontSize="small" />
              </button>
              <span className="text-xl font-semibold">{quantity}</span>
              <button
                onClick={() => handleQuantity("inc")}
                className="p-1 rounded-full border border-gray-300 text-gray-700 hover:bg-pink-100 transition"
                aria-label="افزایش تعداد"
              >
                <Add fontSize="small" />
              </button>
            </div>

            <button
              onClick={handleClick}
              className="px-6 py-2 bg-pink-600 text-white rounded-lg shadow-lg hover:bg-pink-700 transition duration-300 font-semibold"
              aria-label="افزودن به سبد خرید"
            >
              افزودن به سبد خرید
            </button>
          </div>

          {/* دکمه افزودن به علاقه‌مندی‌ها */}
          <button
            type="button"
            className="mt-8 flex items-center justify-center gap-2 text-pink-600 border border-pink-600 rounded-lg px-4 py-2 hover:bg-pink-600 hover:text-white transition duration-300 font-medium shadow-sm"
            aria-label="افزودن به علاقه‌مندی‌ها"
          >
            <FavoriteBorderOutlined />
            افزودن به علاقه مندی‌ها
          </button>
        </section>
      </main>

      {/* محصولات مشابه */}
      <Products quantity={4} />

      <Footer />
    </div>
  );
};

export default ProductPage;
