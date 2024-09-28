import React, { FC, useState } from "react";
import Image, { StaticImageData } from "next/image"; // Assuming you are using Next.js
import { Edit2, Eye } from "iconsax-react";
import { FiTrash } from "react-icons/fi";

interface Props {
  item: {
    image: StaticImageData;
    title: string;
    tag: string;
    price: number;
  };
}

const MealListCard: FC<Props> = ({ item }) => {
  const [hoveringIcon, setHoveringIcon] = useState(false);

  return (
    <div className="relative cursor-pointer group min-h-[264px] overflow-hidden w-[200px] h-fit flex flex-col pb-4 bg-white rounded-[25px] transition-all duration-300 hover:shadow-xl hover:scale-105 shadow-md">
      {/* Image container with overflow-hidden */}
      <div className="relative w-full h-[130px] rounded-t-[25px] overflow-hidden">
        {/* Image with scaling and object-fit */}
        <Image
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.1] group-hover:translate-y-[-5%] group-hover:rotate-[5deg]"
          style={{ transformOrigin: "bottom" }} // Set transform origin to bottom
        />
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:rotate-[5deg] group-hover:scale-[1.1] group-hover:translate-y-[-5%]"
          style={{ transformOrigin: "bottom" }}
        />

        <div
          onMouseEnter={() => setHoveringIcon(true)}
          onMouseLeave={() => setHoveringIcon(false)}
          className="bg-green-700 relative"
        >
          <div
            className={`${
              hoveringIcon ? "hidden" : "flex"
            } absolute bottom-2 right-2 opacity-100 hidden group-hover:flex transition-all duration-1000 bg-white rounded-full w-7 h-7 items-center justify-center`}
          >
            <Edit2
              size={12}
              color="#0590de"
              className="transition-all duration-500"
            />
          </div>

          <div
            className={`${
              hoveringIcon ? "flex" : "hidden"
            } absolute bottom-2 right-2  opacity-100 transition-all duration-1000 bg-primary-400 rounded-full w-7 h-7 items-center justify-center`}
          >
            <FiTrash
              size={12}
              color="#ffffff"
              className="transition-all duration-500"
            />
          </div>

          {/* Additional Icons */}
          <div
            className={`${
              hoveringIcon ? "flex" : "hidden"
            } absolute bottom-10 right-2 opacity-100 transition-all duration-1000 bg-white rounded-full w-7 h-7 items-center justify-center`}
          >
            <Edit2
              size={12}
              color="#0590de"
              className="transition-all duration-500"
            />
          </div>
          <div
            className={`${
              hoveringIcon ? "flex" : "hidden"
            } absolute bottom-[72px] right-2 opacity-100 transition-all duration-1000 bg-white rounded-full w-7 h-7 items-center justify-center`}
          >
            <Eye
              size={12}
              color="#0590de"
              className="transition-all duration-500"
            />
          </div>
        </div>
      </div>

      {/* Line below the image */}
      <div className="h-0 bg-primary-220 mt-[2px] transition-all duration-300 rotate-[5deg] group-hover:h-1" />

      <div className="pt-[10px] px-3 flex flex-col gap-[13px]">
        <div>
          {/* Tag with hover color change */}
          <div className="py-1 w-[76px] rounded-md items-center justify-center bg-primary-210 group-hover:bg-primary-200 transition-colors">
            <p className="text-center text-xs text-primary-text group-hover:text-white">
              {item.tag}
            </p>
          </div>
          <p className="font-[500] text-sm text-grey-31">{item.title}</p>
        </div>
        <p>
          <span className="text-grey-275 font-bold text-xl">
            {item.price.toFixed(2)}
          </span>{" "}
          <span className="ml-[10px] font-base text-xs text-grey-31">AED</span>
        </p>
      </div>
    </div>
  );
};

export default MealListCard;
