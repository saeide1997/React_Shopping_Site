import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
  return (
    <div className="relative h-96 bg-fuchsia-100/50 rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:scale-[1.02]">
      {/* تصویر دسته‌بندی */}
      <img
        className="w-full h-full object-contain aspect-square"
        src={item.img}
        alt={item.title}
      />

      {/* لایه رویی و دکمه */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-center justify-center flex-col transition duration-300">
        <Link
          to={`/products/${item.title}`}
          className="bg-fuchsia-600 text-white px-4 py-2 rounded-full shadow hover:bg-fuchsia-700 transition"
        >
          حالا بخرید!
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
