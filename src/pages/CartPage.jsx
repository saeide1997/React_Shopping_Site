import { Add, Remove } from "@mui/icons-material";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <Navbar />
      <div className="p-5 mt-10">
        <div className="flex items-center justify-between mb-6">
          <button className="p-3 ml-2 text-sm font-bold cursor-pointer w-40 border-2 border-fuchsia-800/80 hover:bg-fuchsia-100/80 rounded-md">
            ویرایش سبد خرید
          </button>
          <div className="flex space-x-4 hidden sm:block">
            <span className="cursor-pointer text-fuchsia-800/80 underline">
              سبد خرید ({cart.products.length})
            </span>
            <span className="cursor-pointer text-fuchsia-800/80 underline">
              لیست محبوب (۰)
            </span>
          </div>
          <button className="p-3 font-bold cursor-pointer w-40 bg-fuchsia-800/80 text-white rounded-md hover:bg-fuchsia-600/80">
            تسویه
          </button>
        </div>
        <div className="flex flex-wrap gap-6">
          <div className="w-full lg:w-3/5">
            {cart.products.map((product) => (
              <div key={product._id} className="flex justify-between flex-col lg:flex-row mb-6 p-4 bg-gray-100 rounded-lg shadow-md">
                <div className="flex flex-col lg:flex-row w-full">
                  <img className="w-full lg:w-48 h-48 object-cover rounded-lg" src={product.img} alt={product.title} />
                  <div className="ml-4 flex-1 flex flex-col justify-between p-4">
                    <div className="font-semibold text-lg">{product.title}</div>
                    <div className="text-sm text-gray-600">کد: {product._id}</div>
                    <div className="flex items-center mt-2">
                      <div
                        className="w-6 h-6 rounded-full"
                        style={{ background: product.color }}
                      ></div>
                      <span className="ml-2 text-sm">سایز: {product.size}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center flex-col mt-4 lg:mt-0">
                  <div className="flex items-center space-x-4">
                    <Add className="cursor-pointer text-fuchsia-500/80" />
                    <div className="text-center text-xl font-bold">{product.quantity}</div>
                    <Remove className="cursor-pointer text-fuchsia-500/80" />
                  </div>
                  <div className="mt-4 text-lg font-semibold">
                    {Intl.NumberFormat().format(product.price)} ریال
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-1/3 bg-white rounded-lg p-6 shadow-lg border border-fuchsia-100/80">
            <h2 className="text-xl font-semibold text-fuchsia-600/80 mb-6">خلاصه سفارشات</h2>
            <div className="space-y-4">
              <div className="flex justify-between text-lg">
                <span>جمع خرید</span>
                <span>{Intl.NumberFormat().format(cart.total)} ریال</span>
              </div>
              <div className="flex justify-between text-lg">
                <span>تخفیف شما از خرید</span>
                <span>{Intl.NumberFormat().format(cart.discount)} ریال</span>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <span>مجموع</span>
                <span>{Intl.NumberFormat().format(cart.total + cart.discount)} ریال</span>
              </div>
            </div>
            <button className="w-full mt-6 py-3 bg-fuchsia-800/80 text-white rounded-md hover:bg-fuchsia-600/80 transition duration-200">
              تسویه
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
