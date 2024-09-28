import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import party from "../../public/assets/images/party.png";
import Drinks from "../../public/assets/icons/drinks.svg";
import turkey from "../../public/assets/images/turkey.png";
import spicy_chicken from '../../public/assets/images/chicken_wing.png';
import sessame_chicken from '../../public/assets/images/sesame-chicken.png';
import sweet_salad from '../../public/assets/images/sweet-salad.png';
import potatoes from '../../public/assets/images/potatoe.png';
import qrCode from '../../public/assets/images/qr_code.png'
import Download from '../../public/assets/icons/download.svg'
import Share from '../../public/assets/icons/share.svg'

import { ClipboardTick, ElementPlus, MenuBoard } from "iconsax-react";
import Card from "@/components/Card";
import MealCard from "@/components/MealCard";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter()
  const cards = [
    {
      title: "Total food items",
      quantity: 34,
      icon: <MenuBoard size={40} color="#6dad05" />,
    },
    {
      title: "Sent orders (WhatsApp)",
      quantity: 198,
      icon: <ClipboardTick size={40} color="#ef4439" />,
    },
    {
      title: "Total categories",
      quantity: 18,
      icon: <ElementPlus size={40} color="#007ddd" />,
    },
    {
      title: "Total drinks",
      quantity: 23,
      icon: <Drinks className="fill-[#ee7608] text-3xl w-10 h-10" size={40} />,
    },
  ];

  const meals = [
    {
      tag: "aed 18",
      image: spicy_chicken,
      title: "Spicy Chicken wings",
      rating: 4.5,
      quantity: 152,
    },
    {
      tag: "aed 22",
      image: sessame_chicken,
      title: "Sessame chicken",
      rating: 4.5,
      quantity: 40,
    },
    {
      tag: "aed 19",
      image: sweet_salad,
      title: "Chikai spicy and sweet salad",
      rating: 4.5,
      quantity: 34,
    },
    {
      tag: "aed 28",
      image: potatoes,
      title: "Roasted fried potatoes",
      rating: 4.5,
      quantity: 45,
    },
  ];

  return (
    <Sidebar>
      <div className="p-8 pt-0 pr-16 grid">
        <div className="flex items-center gap-2 py-10">
          <p className="text-3xl text-grey-500 font-bold">
            Welcome to{" "}
            <span className="font-extrabold">
              <span className="uppercase">Yasmeen</span> Restuarant
            </span>
          </p>
          <Image src={party} alt="party" className="w-8 h-8" />
        </div>
        <div className="flex items-center justify-between mt-1 gap-6">
          {cards.map((card) => {
            return <Card item={card} key={card.title} />;
          })}
        </div>
        <div className="grid grid-cols-3 mt-8 gap-8">
          <div className="col-span-2 bg-white px-8 py-6 rounded-[35px] grid gap-4">
            <div className="flex items-center justify-between">
              <div className="flex gap-4 items-center">
                <div className="w-14 h-14 bg-primary-210 rounded-xl items-center justify-center flex">
                  <Image src={turkey} alt="turkey" />
                </div>
                <div>
                  <p className="text-grey-300 text-2xl font-bold font-plus">
                    Most ordered meals
                  </p>
                  <p className="text-sm text-grey-500">Top 4 meal</p>
                </div>
              </div>
              <div className="flex gap-4 backy-button px-4 py-3 pr-10 rounded-xl shadow-md shadow-[#ee760840] items-center cursor-pointer" onClick={() => router.push("/food-items")}>
                <MenuBoard size={16} color="#fff" />
                <p className="text-white font-semibold text-base">Meal list</p>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2 p-3">
              {meals
                .map((item) => (
                  <MealCard item={item} key={item.title}/>
                ))}
            </div>
          </div>
          <div className="col-span-1 bg-white px-8 py-6 pr-12 flex flex-col gap-4 rounded-[35px]">
            <div>
            <p className="font-bold text-grey-300 text-2xl">QR Code for menu</p>
            <p className="font-normal text-grey-500 text-sm">Download and print</p>
            </div>
            <div className="flex items-start justify-between">
                <div className="rounded-[25px] bg-grey-475 p-4 w-[186px] h-[186px]">
                  <Image src={qrCode} alt="qr-code" className="w-full h-full"/>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-full items-center justify-center p-2 bg-primary-210"><Download className="w-full h-full"/></div>
                  <div className="w-12 h-12 rounded-full items-center justify-center p-2 bg-secondary-210"><Share className="w-full h-full"/></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}
