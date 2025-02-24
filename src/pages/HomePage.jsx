import Menu from "../component/Menu";
import Navbar from "../component/Navbar";
import Slider from "../component/Slider";
import Categories from "../component/Categories";
import Products from "../component/Products";
import News from "../component/News";
import Footer from "../component/Footer";

const HomePage = () =>{
    return (
        <div>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products quantity={10}/>
            <News/>
            <Footer/>
        </div>
    )
}

export default HomePage

// import React from "react";
// import { motion } from "framer-motion";
// // import { Button } from "@/components/ui/button";

// export default function HomePage() {
//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-900">
//       {/* Header */}
//       <header className="p-4 bg-white shadow-md flex justify-between items-center">
//         <h1 className="text-xl font-bold">Sohoshop</h1>
//         <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//           مشاهده محصولات
//         </button>
//       </header>

//       {/* Hero Section */}
//       <motion.section
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-center py-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white"
//       >
//         <h2 className="text-4xl font-extrabold">جدیدترین محصولات مد و فشن</h2>
//         <p className="mt-2 text-lg">
//           بهترین قیمت‌ها و پیشنهادهای ویژه برای شما
//         </p>
//         <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//           خرید کنید
//         </button>
//       </motion.section>

//       {/* Product Section */}
//       <section className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//         {[1, 2, 3].map((product) => (
//           <motion.div
//             key={product}
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: product * 0.2 }}
//             className="bg-white p-4 shadow-lg rounded-lg"
//           >
//             <img
//               src="/placeholder.png"
//               alt="Product"
//               className="w-full h-48 object-cover rounded-md"
//             />
//             <h3 className="text-lg font-bold mt-2">محصول {product}</h3>
//             <p className="text-gray-600">توضیح کوتاه درباره محصول</p>
//             <button className="mt-2 bg-blue-500 text-white w-full">
//               افزودن به سبد خرید
//             </button>
//           </motion.div>
//         ))}
//       </section>
//     </div>
//   );
// }
