import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";
import { FaStar } from "react-icons/fa";


interface Props {
  item: {
    tag: string;
    image: StaticImageData;
    title: string;
    rating: number;
    quantity: number;
  };
}

const MealCard: FC<Props> = ({ item }) => {
  return (
    <div className="grid px-4 py-2 w-full rounded-[30px] bg-grey-450 border-[0.5px] justify-center gap-2 pb-8">
      <div className="relative w-[124px] h-[88px] rounded-3xl items-center justify-center">
        <Image
          src={item.image}
          alt={item.title}
          className="w-full h-full rounded-[24px]"
        />
        <div className="absolute flex items-center justify-center w-[60px] h-6 px-1 py-[10px] rounded-[30px] bg-dark40 top-2 right-2">
          <p className="uppercase text-sm font-bold text-white font-euclid truncate">
            {item.tag}
          </p>
        </div>
      </div>
      <div className="self-start h-16 items-start justify-between flex flex-col">
        <p className="text-sm font-euclid font-[500]">{item.title}</p>
        <div className="flex items-center gap-2 justify-center">
            <div className="flex gap-1 bg-primary-210 w-[33px] h-[15px] rounded-[40px] items-center px-1 ">
                <FaStar className="w-2 text-primary-200"/>
                <p className="font-euclid text-[10px] font-[500] text-primary-200">{item.rating}</p></div>
            <p className="font-euclid font-[500] text-xs text-grey-250">({item.quantity})</p>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
