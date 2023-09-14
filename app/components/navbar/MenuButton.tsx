import React from "react";

type Props = {};

export default function MenuButton({}: Props) {
  return (
    <div className="h-14 w-14 rounded-full dark:bg-slate-700 bg-blue-800 cursor-pointer overflow-hidden p-2 group  ">
      <div className="h-full w-full relative">
        <div className="w-full group-active:bg-rose-500 h-[3px] bg-slate-200 group-hover:bg-yellow-500 rounded-full absolute top-2 group-hover:top-6 group-hover:rotate-[30deg] transition-all  duration-500"></div>
        <div className="w-full group-active:bg-rose-500 h-[3px] bg-slate-200 group-hover:bg-green-600 rounded-full absolute top-1/2 group-hover:rotate-[90deg] group-hover:-left-2  group-hover:right-1/2  transition-all  duration-500"></div>

        <div className="w-full group-active:bg-rose-500 h-[3px] bg-slate-200 group-hover:bg-yellow-500 rounded-full absolute top-8 group-hover:top-3 group-hover:rotate-[-30deg] transition-all  duration-500"></div>
      </div>
    </div>
  );
}
