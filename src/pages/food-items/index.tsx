import Sidebar from "@/components/Sidebar";
import Drinks from "../../../public/assets/icons/drinks.svg";
import spicyChicken from "../../../public/assets/images/spicy-chicken.jpeg";
import snailSoup from "../../../public/assets/images/spicy-lemon.jpeg";
import cheezePizza from "../../../public/assets/images/cheese-pizza.jpeg";
import japanVegies from "../../../public/assets/images/japan-vegetable.jpeg";
import chickenSoup from "../../../public/assets/images/tomato-pasta.jpeg";
import buffaloChicken from "../../../public/assets/images/buffalo-chicken.jpeg";
import chickenBurger from "../../../public/assets/images/chicken-burger.jpeg";
import cheeseBurger from "../../../public/assets/images/beef-burger.jpeg";
import beefBbq from "../../../public/assets/images/beef-bbq.jpeg";
import grilledBeef from "../../../public/assets/images/grilled-beef.jpeg";

import { ClipboardTick, ElementPlus, MenuBoard } from "iconsax-react";
import { Filter, Search } from "react-iconly";
import { HiChevronDown } from "react-icons/hi2";
import { LuPlus } from "react-icons/lu";
import MealListCard from "@/components/MealListCard";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const meals = [
    {
      tag: "Chicken",
      image: spicyChicken,
      title: "Spicy marinated fried chicken",
      price: 23.5,
    },
    {
      tag: "Sea food",
      image: snailSoup,
      title: "Snails spicy soup with lemon",
      price: 20.75,
    },
    {
      tag: "Pizza",
      image: cheezePizza,
      title: "Japenese mushroom cheese pizza",
      price: 48.5,
    },
    {
      tag: "Vegetables",
      image: japanVegies,
      title: "Japanese mixed vegetables with spices",
      price: 45.0,
    },
    {
      tag: "Chicken",
      image: chickenSoup,
      title: "Tomato spicy pasta marinated in chicken soup",
      price: 32.25,
    },
    {
      tag: "Chicken",
      image: buffaloChicken,
      title: "Spicy buffalo Chicken wings (6pcs)",
      price: 22.75,
    },
    {
      tag: "Burgers",
      image: chickenBurger,
      title: "Chicken cheese burger",
      price: 15.75,
    },
    {
      tag: "Burger",
      image: cheeseBurger,
      title: "Double beef cheese burger",
      price: 34.75,
    },
    {
      tag: "Barbecue",
      image: beefBbq,
      title: "Beef barbecue made with secret spicies",
      price: 62.5,
    },
    {
      tag: "Grills",
      image: grilledBeef,
      title: "Grilled beef with tomato slices and hot sauce",
      price: 43.75,
    },
  ];

  return (
    <Sidebar>
      <div className="p-8 pt-0 pr-16 grid">
        <div className="flex items-center justify-between py-10">
          <div>
            <p className="text-4xl text-grey-500 font-extrabold">
              Meal list (<span className="text-primary-200">87</span>)
            </p>
            <p className="text-grey-300">Manage your food items</p>
          </div>
          <div className="flex items-center justify-evenly gap-6">
            <div className="flex gap-4 bg-grey-210 p-4 rounded-xl items-center cursor-pointer">
              <p className="text-sm text-grey-275">Category</p>
              <hr className="border-[1px] h-6 border-grey-400" />
              <p className="text-sm text-grey-275 font-bold">Chicken</p>
              <HiChevronDown size={12} color="#2c2c2c" />
            </div>
            <div className="flex justify-between bg-grey-210 p-4 rounded-xl items-center cursor-pointer w-[268px]">
              <div className="flex items-center gap-4">
                <Search size={14} primaryColor="#525252" />
                <div className="w-[6px] h-[6px] rounded-full bg-grey-510" />
                <p className="text-sm text-grey-275">Type to search</p>
              </div>
              <div>
                <Filter size={18} primaryColor="#6f6d6d" />
              </div>
            </div>
            <div
              className="flex gap-4 backy-button p-4 pl-6 rounded-xl shadow-md shadow-[#ee760840] items-center cursor-pointer"
              onClick={() => router.push("/food-items/create")}
            >
              <LuPlus size={24} color="#fff" />
              <p className="text-white font-semibold text-base">
                Create new meal
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-x-4 gap-y-9 py-2">
          {meals.map((meal) => {
            return <MealListCard item={meal} key={meal.title} />;
          })}
        </div>
      </div>
    </Sidebar>
  );
}
