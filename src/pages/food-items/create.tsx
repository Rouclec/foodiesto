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
import Input from "@/components/Input";
import { title } from "process";
import ImageUploadButton from "@/components/ImageUploadButton";

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
      <div className="pt-14 px-8 flex">
        <div className="bg-white p-9 rounded-[40px] w-[588px] flex flex-col gap-10">
          <div className="flex items-center justify-between">
            <div>
              <p>Step 1/ 3</p>
              <p>Meal information</p>
            </div>
            <div className="flex p-4 items-center gap-6">
              <p>Icon</p>
              <p>Meal list</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="grid gap-[10px]">
              <Input
                item={{
                  title: "Meal name (EN)",
                  value: "Fried spicy vegetable",
                }}
              />
              <Input
                item={{
                  title: "Select category",
                  value: "Vegan",
                  options: [
                    {
                      label: "Vegan",
                      value: "vegan",
                    },
                    {
                      label: "Normal",
                      value: "normal",
                    },
                  ],
                  dropdown: true,
                  onSelect: () => {},
                }}
              />
              <Input
                item={{
                  title: "Select cooking time",
                  value: "30 min",
                  options: [
                    {
                      label: "30 min",
                      value: "30",
                    },
                    {
                      label: "1 hour",
                      value: "60",
                    },
                  ],
                  dropdown: true,
                  onSelect: () => {},
                }}
              />
              <ImageUploadButton />
            </div>
            <div className="grid gap-[10px]">second grid</div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}
