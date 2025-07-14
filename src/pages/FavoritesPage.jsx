import { DeleteOutline } from "@mui/icons-material";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { clearItem, clearList } from "../redux/favoriteRedux";

const FavoriteItem = ({ product, onDelete }) => (
  <div
    key={product._id}
    className=" flex flex-col sm:flex-row items-center sm:justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
  >
    {/* تصویر و اطلاعات */}
    <div className="flex items-center space-x-0 sm:space-x-4 space-y-3 sm:space-y-0 flex-col sm:flex-row w-full sm:w-auto">
      <img
        className="w-[120px] h-[120px] object-contain rounded-md"
        src={product.img}
        alt={product.title}
      />
      <div className="flex flex-col space-y-1 text-gray-700">
        <div>
          <b>محصول: </b> {product.title}
        </div>
        <div>
          <b>کد: </b> {product._id}
        </div>
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <div
            className="w-5 h-5 rounded-full border border-gray-300"
            style={{ backgroundColor: product.color }}
            title={`رنگ: ${product.color}`}
          ></div>
          <div>
            <b>سایز: </b> {product.size}
          </div>
        </div>
      </div>
    </div>

    {/* قیمت و دکمه حذف */}
    <div className="flex items-center space-x-5 rtl:space-x-reverse mt-4 sm:mt-0">
      <div className="text-xl font-semibold text-gray-900 whitespace-nowrap">
        {Intl.NumberFormat("fa-IR").format(product.price)} ریال
      </div>
      <DeleteOutline
        onClick={() => onDelete(product)}
        className="!text-[32px] text-red-600 cursor-pointer transition-transform duration-300 hover:scale-110"
        title="حذف محصول"
      />
    </div>
  </div>
);

const FavoritePage = () => {
  const favorite = useSelector((state) => state.favorite);
  const dispatch = useDispatch();

  const handleClearAll = () => {
    if (
      window.confirm(
        "آیا مطمئن هستید که می‌خواهید همه کالاهای محبوب را حذف کنید؟"
      )
    ) {
      dispatch(clearList());
    }
  };

  const handleDeleteItem = (product) => {
    dispatch(clearItem(product));
  };

  return (
    <div className="bg-gray-100 mt-16 min-h-screen flex flex-col">
      <Navbar />
      <main className="container min-h-[500px] mx-auto px-4 py-10 flex-grow">
        {/* <h1 className="text-3xl font-semibold text-center text-gray-700 mb-8">
          لیست علاقه‌مندی‌ها
        </h1> */}

        {/* دکمه حذف همه */}
        {favorite.products.length > 0 && (
          <div className="flex justify-end mb-6">
            <button
              onClick={handleClearAll}
              className="p-3 font-semibold cursor-pointer rounded-md shadow-lg bg-fuchsia-800/80 text-white transition hover:bg-fuchsia-800 transform hover:scale-105"
              aria-label="حذف همه کالاهای محبوب"
            >
              حذف همه کالاهای محبوب
            </button>
          </div>
        )}

        {/* لیست محصولات یا پیام خالی بودن */}
        {favorite.products.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center text-xl text-red-600 space-y-6">
            <h2>کالایی در لیست علاقمندی‌ها وجود ندارد.</h2>
            <a
              href="/products"
              className="px-6 py-3 rounded-md bg-fuchsia-700 text-white font-semibold hover:bg-fuchsia-800 transition"
            >
              بازگشت به صفحه محصولات
            </a>
          </div>
        ) : (
          <div className="space-y-6 max-w-4xl mx-auto">
            {favorite.products.map((product) => (
              <FavoriteItem
                key={product._id}
                product={product}
                onDelete={handleDeleteItem}
              />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default FavoritePage;
