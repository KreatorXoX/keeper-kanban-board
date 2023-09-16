import React from "react";

type Props = {};

export default function MenuButton({}: Props) {
  return (
    <div className="h-10 w-10 md:h-14 md:w-14 rounded-full dark:bg-darkBackground bg-blue-800 cursor-pointer overflow-hidden p-2 group  ">
      <div className="h-full w-full relative">
        <div className="w-full border-none outline-none group-active:bg-rose-500 h-[3px] bg-lightBackground group-hover:bg-yellow-500 rounded-full absolute top-[1px] md:top-2 group-hover:top-[13px] md:group-hover:top-6 group-hover:rotate-[30deg] transition-all  duration-500"></div>
        <div className="w-full border-none outline-none group-active:bg-rose-500 h-[3px] bg-lightBackground group-hover:bg-green-600 rounded-full absolute top-1/2 group-hover:rotate-[90deg] group-hover:-left-1 md:group-hover:-left-2 transition-all  duration-500"></div>

        <div className="w-full border-none outline-none group-active:bg-rose-500 h-[3px] bg-lightBackground group-hover:bg-yellow-500 rounded-full absolute top-[22px] md:top-8 group-hover:top-[9px] md:group-hover:top-3 group-hover:rotate-[-30deg] transition-all  duration-500"></div>
      </div>
    </div>
  );
}
