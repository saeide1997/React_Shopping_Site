import { categories } from '../data';
import CategoryItem from './CategoryItem';

const Categories = () => {
  return (
    <div className="m-4 p-4 rounded-xl shadow bg-gradient-to-l from-fuchsia-800/80 to-fuchsia-700/60">
      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 text-center sm:text-right">
        دسته‌بندی‌ها
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
