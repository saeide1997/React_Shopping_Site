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
  const cartt = useSelector((state) => state.cart);

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };
  return (
    <div className="bg-gray-100 !min-w-screen">
      <Navbar />
      <div className=" flex flex-col sm:flex-row items-center justify-center">
        <div className=" w-[90%] sm:w-[95%] sm:flex-row mt-20 flex flex-col p-6 bg-white shadow-lg rounded-xl ">
          <div className="flex-1 flex justify-center">
            <img
              className="w-2/4 h-auto object-contain"
              src={product.img}
              alt=""
            />
          </div>
          <div className="flex-2">
          <h1 className="font-bold text-xl md:text-2xl text-gray-800 mb-4">
            {product.title}
          </h1>
          <p className="text-gray-600 mb-2 text-sm md:text-base">
            {product.desc}
          </p>
          <span className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
            {NumberFormat.format(product.price)} ریال
          </span>

          <div className="flex flex-wrap items-center my-2">
            <h5 className="ml-3 text-gray-700 font-medium text-sm md:text-base">
              رنگ:
            </h5>
            {product.color?.map((c) => (
              <div
                key={c}
                className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-gray-300 cursor-pointer mr-3"
                style={{ background: c }}
                onClick={() => setColor(c)}
              ></div>
            ))}
          </div>

          <div className="flex items-center my-2">
            <h5 className="ml-3 text-gray-700 font-medium text-sm md:text-base">
              اندازه:
            </h5>
            <select
              className="h-8 px-4 py-2 bg-gray-100 rounded-lg border border-gray-300 text-gray-700 focus:outline-none text-sm md:text-base"
              onChange={(e) => setSize(e.target.value)}
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
            className="my-2 text-sm md:text-base !-m-2"
          />

          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <Remove
                className="cursor-pointer text-gray-700 w-6 h-6"
                onClick={() => handleQuantity("des")}
              />
              <span className="mx-2 text-lg md:text-xl font-bold">
                {quantity}
              </span>
              <Add
                className="cursor-pointer text-gray-700 w-6 h-6"
                onClick={() => handleQuantity("inc")}
              />
            </div>

            <button
              onClick={handleClick}
              className="px-4 py-2 bg-pink-600 text-white rounded-lg shadow-md hover:bg-pink-700 transition duration-200 text-sm md:text-base"
            >
              افزودن به سبد خرید
            </button>
          </div>

          <div className="flex justify-center mt-6">
            <div className="flex items-center bg-pink-100 text-gray-700 p-2 rounded-md shadow-md hover:shadow-lg cursor-pointer text-sm md:text-base">
              <FavoriteBorderOutlined className="mr-2" />
              افزودن به علاقه مندی ها
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* محصولات مشابه */}
      <Products quantity={4} />

      <Footer />
    </div>
  );
};

export default ProductPage;
