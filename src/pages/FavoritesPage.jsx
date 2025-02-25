import {
  Add,
  DeleteForeverTwoTone,
  DeleteOutline,
  Remove,
} from "@mui/icons-material";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { clearItem, clearList } from "../redux/favoriteRedux";

const FavoritePage = () => {
  const favorite = useSelector((state) => state.favorite);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearList());
  };
  
  const itemHandleClick = (product) => {
    dispatch(clearItem(product));
  };

  return (
    <div className="bg-gray-100 mt-10 min-h-screen">
      <Navbar />
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-semibold text-center text-gray-700 mb-8">لیست علاقه‌مندی‌ها</h1>
        
        {/* Clear All Button */}
        <div className="flex justify-end mb-6">
          {favorite.products.length > 0 ? (
            <button
              onClick={handleClick}
              className="p-3 font-semibold cursor-pointer rounded-md shadow-lg hover:shadow-none bg-fuchsia-800/70 hover:bg-fuchsia-800/80 text-white transition-all duration-300 transform hover:scale-105"
            >
              حذف همه کالاهای محبوب
            </button>
          ) : null}
        </div>

        {/* Favorite Products */}
        <div className="space-y-6">
          {favorite.products.length === 0 ? (
            <div className="flex justify-center text-xl text-red-600">
              <h2>کالایی در لیست علاقمندی‌ها وجود ندارد.</h2>
            </div>
          ) : (
            favorite.products.map((product) => (
              <div
                key={product._id}
                className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                {/* Product Image and Info */}
                <div className="flex items-center space-x-4">
                  <img
                    className="w-[120px] h-[120px] object-contain"
                    src={product.img}
                    alt={product.title}
                  />
                  <div className="flex flex-col">
                    <div className="mb-2">
                      <b>محصول: </b>{product.title}
                    </div>
                    <div className="mb-2">
                      <b>کد: </b>{product._id}
                    </div>
                    <div
                      className="w-[20px] h-[20px] rounded-full"
                      style={{ background: product.color }}
                    ></div>
                    <div className="mt-2">
                      <b>سایز: </b>{product.size}
                    </div>
                  </div>
                </div>

                {/* Price and Delete Button */}
                <div className="flex items-center space-x-3">
                  <div className="text-xl font-semibold">
                    {Intl.NumberFormat().format(product.price)} ریال
                  </div>
                  <DeleteOutline
                    onClick={() => itemHandleClick(product)}
                    className="!text-[30px] text-red-600 cursor-pointer transition-all duration-300 transform hover:scale-105"
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FavoritePage;
