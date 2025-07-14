import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { Home, ShoppingBag, User, Heart } from "lucide-react";

export default function Tapbar() {
  const quantity = useSelector((state) => state.cart.quantity);
  const favQuantity = useSelector((state) => state.favorite.quantity);
  const { user } = useAuth();
  const location = useLocation();
  const [active, setActive] = useState("home");

  useEffect(() => {
    const currentTab = tabs.find((tab) => tab.path === location.pathname);
    if (currentTab) {
      setActive(currentTab.id);
    }
  }, [location.pathname]);

  const tabs = [
    {
      id: "home",
      label: "خانه",
      icon: <Home size={24} />,
      path: "/",
    },
    {
      id: "shop",
      label: "فروشگاه",
      icon: (
        <Badge badgeContent={quantity} color="error">
          <ShoppingBag size={24} />
        </Badge>
      ),
      path: "/products", // اصلاح مسیر
    },
    {
      id: "wishlist",
      label: "علاقه‌مندی‌ها",
      icon: (
        <Badge badgeContent={favQuantity} color="error">
          <Heart size={24} />
        </Badge>
      ),
      path: "/favorite",
    },
    {
      id: "profile",
      label: user ? "پروفایل" : "ورود",
      icon: <User size={24} />,
      path: "/profile",
    },
  ];

  return (
    <div className="fixed top-0 z-50 left-1/2 transform -translate-x-1/2 min-w-[80%] max-w-md bg-fuchsia-900/70 dark:bg-fuchsia-900/80 text-white rounded-full shadow-lg p-2 flex justify-around items-center backdrop-blur-md">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActive(tab.id)}
          className="relative flex flex-col items-center px-4 py-2 transition-all hover:scale-105"
        >
          {active === tab.id && (
            <motion.div
              layoutId="activeTab"
              className="absolute -top-1 w-16 h-16 bg-purple-500 dark:bg-fuchsia-900/90 rounded-full z-0"
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          )}
          <Link to={tab.path} className="relative z-10">
            <span className="text-white">{tab.icon}</span>
          </Link>
          <span className="relative z-10 text-xs mt-1">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
