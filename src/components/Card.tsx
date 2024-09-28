import React, { FC } from "react";

interface Props {
  item: {
    title: string;
    quantity: string | number;
    icon: React.ReactNode;
  };
}

const Card: FC<Props> = ({ item }) => {
  return (
    <div className="group grid bg-white px-6 py-4 rounded-[20px] gap-8 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] shadow-sm">
      <div>
        <p className="font-[500] text-base">{item.title}</p>
        {/* Short line below title */}
        <div className="h-[4px] w-[24px] rounded-lg  bg-grey-500 opacity-20 mt-2 transition-all duration-300 group-hover:w-full group-hover:bg-orange-500 group-hover:h-[1px]"></div>
      </div>

      <div className="flex items-center gap-[120px]">
        {/* Quantity changes font on hover */}
        <p className="text-4xl font-euclid text-grey-500 font-semibold transition-all duration-300 group-hover:font-plus">
          {item.quantity}
        </p>
        {/* Icon rotates on hover using group-hover */}
        <div className="transition-transform duration-300 group-hover:rotate-60">
          {item.icon}
        </div>
      </div>
    </div>
  );
};

export default Card;
