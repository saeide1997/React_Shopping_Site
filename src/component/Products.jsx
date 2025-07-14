import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";

const Products = ({ category, filters, sort, quantity }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `https://eccommerce.liara.run/api/product/products?category=${category}`
            : "https://eccommerce.liara.run/api/product/products"
        );
        setProducts(res.data);
      } catch (err) {
        console.error("خطا در دریافت محصولات", err);
      }
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    if (category && filters) {
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key]?.includes(value)
          )
        )
      );
    }
  }, [products, category, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else if (sort === "desc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
<div className="mb-4 p-6 bg-white rounded-2xl shadow-xl">
  <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8 text-center sm:text-right tracking-tight">
    آخرین محصولات
  </h3>

  {products.length === 0 ? (
    <p className="text-gray-400 italic text-center py-12">محصولی یافت نشد</p>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {(category ? filteredProducts : products.slice(0, quantity)).map(
        (item) => <Product item={item} key={item._id || item.id} />
      )}
    </div>
  )}
</div>
)
};

export default Products;
