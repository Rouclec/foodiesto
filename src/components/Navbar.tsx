import React, { FC } from "react";
import england from "../../public/assets/images/england.png";
import profile from "../../public/assets/images/profile.png";
import Image from "next/image";
import { ArrowDown3, Notification } from "iconsax-react";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { HiChevronDown } from "react-icons/hi2";

interface Props {
  item: {
    name: string;
    tag: string;
    route: string;
    icon: React.JSX.Element;
    icon_active: React.JSX.Element;
  } | undefined;
}

const Navbar: FC<Props> = ({ item }) => {
  return (
    <div className="fixed flex left-[264px] right-0 h-[88px] bg-white p-8 pr-16 items-center justify-between">
      <div className="flex gap-4 items-center">
        {item?.icon_active}
        <p className="font-semibold text-grey-500">
          {item?.name} / <span className="font-normal">{item?.tag}</span>
        </p>
      </div>
      <div className="flex gap-9">
        <div className="flex gap-1 items-center p-1 rounded-lg bg-grey-375 h-10 my-auto w-fit">
          <Image
            src={england}
            width={24}
            height={64}
            alt="en"
            className="self-center mt-1"
          />
          <p className="font-semibold text-sm self-center">En</p>
          <ArrowDown3 size={14} color="#6f6d6d" />
        </div>
        <div className="flex items-center justify-evenly gap-6">
          <div className="relative">
            <Notification size={24} color="#dc810b" />
            <div className="absolute w-2 h-2 rounded-full bg-primary-200 -top-[1px] right-[3px]" />
          </div>
          <hr className="border-[1px] h-[40%] border-grey-400" />
          <div className="bg-grey-375 py-2 px-8 rounded-xl flex gap-4 items-center">
            <div>
              <p className="font-euclid text-grey-500">
                <span className="font-bold uppercase">Yasmeen</span> Restaurant
              </p>
              <p className="text-xs text-grey-200">demo34@gmail.com</p>
            </div>
            <div className="w-10 h-10 relative">
              <CircularProgressbarWithChildren
                value={85}
                counterClockwise
                styles={buildStyles({
                  strokeLinecap: "butt",
                  rotation: 0.1,

                  // Text size
                  textSize: "16px",

                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,

                  // Can specify path transition in more detail, or remove it entirely
                  pathTransition: "ease-in-out",

                  // Colors
                  pathColor: `#DC810B`,
                  trailColor: "#c4c4c420",
                })}
              >
                <Image src={profile} className="h-7 w-7" alt="profile" />
              </CircularProgressbarWithChildren>
              <div className="absolute w-2 h-2 rounded-full bg-primary-200 top-1 -right-1" />
            </div>
            <HiChevronDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
