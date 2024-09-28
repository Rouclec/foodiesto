import React, { FC, useEffect, useState } from "react";

import Addons from "../../public/assets/icons/adons.svg";
import Drinks from "../../public/assets/icons/drinks.svg";
import logo from "../../public/assets/images/logo.png";
// import Image from "next/image";
import { HiChevronDown } from "react-icons/hi2";
import {
  Home,
  MenuBoard,
  ElementPlus,
  ClipboardTick,
  Setting3,
} from "iconsax-react";
import Image from "next/image";
import Navbar from "./Navbar";
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
};

const Sidebar: FC<Props> = ({ children }) => {
  const router = useRouter();
  const { pathname } = router;

  const [active, setActive] = useState<{
    name: string;
    route: string;
    tag: string;
    icon: React.JSX.Element;
    icon_active: React.JSX.Element;
  }>();

  const navItems = [
    {
      name: "Dashboard",
      route: "/",
      tag: "home",
      icon: <Home size={24} color="#6f6d6d" />,
      icon_active: <Home size={24} color="#dc810b" />,
    },
    {
      name: "Food items",
      tag: "meal_list",
      route: "/food-items",
      icon: <MenuBoard size={24} color="#6f6d6d" />,
      icon_active: <MenuBoard size={24} color="#dc810b" />,
    },
    {
      name: "Addons",
      tag: "addons",
      route: "/",
      icon: <Addons className="fill-[#6f6d6d] w-6 h-6" />,
      icon_active: <Addons className="fill-[#dc810b] w-6 h-6" />,
    },
    {
      name: "Drinks",
      tag: "drinks",
      route: "/",
      icon: <Drinks className="fill-[#6f6d6d] w-6 h-6" />,
      icon_active: <Drinks className="fill-[#dc810b] w-6 h-6" />,
    },
    {
      name: "Categories",
      tag: "categories",
      route: "/",
      icon: <ElementPlus size={24} color="#6f6d6d" />,
      icon_active: <ElementPlus size={24} color="#dc810b" />,
    },
    {
      name: "Orders sent",
      tag: "orders",
      route: "/",
      icon: <ClipboardTick size={24} color="#6f6d6d" />,
      icon_active: <ClipboardTick size={24} color="#dc810b" />,
    },
    {
      name: "Settings",
      tag: "settings",
      route: "/",
      icon: <Setting3 size={24} color="#6f6d6d" />,
      icon_active: <Setting3 size={24} color="#dc810b" />,
    },
  ];

  useEffect(() => {
    setActive(
      navItems.find((item) => item.route === `/${pathname.split("/")[1]}`)
    );
  }, [pathname]);
  return (
    <div className="flex">
      <div className="fixed z-40 h-screen bg-white transition-all duration-300 ease-in-out w-[264px]">
        <aside className="fixed flex flex-col items-start top-0 left-0 z-40 h-screen bg-white w-[264px] p-4 gap-20">
          <div className="h-[88px]  w-full p-4">
            <Image src={logo} alt="logo" width={124} height={96} />
          </div>
          <div className="p-4 grid w-full">
            {navItems.map((item) => {
              return (
                <div
                  key={item.route}
                  className={`h-[54px] w-full rounded-lg ${
                    item.name === active?.name && "bg-primary-75"
                  } flex items-center p-4 justify-between cursor-pointer transition-all duration-500 ease-out relative`}
                  onClick={() => {
                    setActive(item);
                    router.push(item.route);
                  }}
                >
                  <div className="flex items-center gap-4 cursor-pointer">
                    {item.name === active?.name ? item.icon_active : item.icon}
                    <p
                      className={`text-base ${
                        item.name === active?.name
                          ? "text-primary-400 font-extrabold"
                          : "text-grey-600 font-bold "
                      }`}
                    >
                      {item.name}
                    </p>
                  </div>
                  {item.name === "Settings" && (
                    <HiChevronDown className="w-5 h-5" />
                  )}
                  {item.name === "Orders sent" && (
                    <div className="absolute flex px-4 py-1 bg-secondary-500 rounded-full right-0 my-auto">
                      <p className="font-euclid font-[500] text-xs text-white">
                        23
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </aside>
      </div>
      <main className="w-screen ml-[264px] bg-grey-100 min-h-screen">
        <Navbar item={active} />
        <div className="mt-[88px]">{children}</div>
      </main>
    </div>
  );
};

export default Sidebar;
