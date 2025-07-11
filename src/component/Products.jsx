import { popularProducts } from "../data";
import Product from "./Product";
// import Product from '../../my-react/src/component/Product';
import { useEffect, useState } from "react";
import axios from "axios";

const Products = ({ category, filters, sort, quantity }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // const fetchInfo = async()=>{
  // await fetch('https://eccommerce.liara.run/api/product/allProducts')
  // .then((res)=> res.json())
  // .then((data)=>{setProducts(data)})

  // }

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `https://eccommerce.liara.run/api/product/products?category=${category}`
            : "https://eccommerce.liara.run/api/product/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, category, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <div className="shadoww m-4 ">
        <h3 className="pt-10 pr-10 text-gray-800">آخرین محصولات</h3>
      <div className="flex p-5 flex-wrap justify-between ">
        {category
          ? filteredProducts.map((item) => (
              <Product item={item} key={item.id} />
            ))
          : products
              .slice(0, quantity)
              .map((item) => <Product item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default Products;
