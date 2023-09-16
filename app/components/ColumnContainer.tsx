import { Column } from "@/types";
import React from "react";

type Props = {
  column: Column;
  isActive?: boolean;
};

export default function ColumnContainer({ column, isActive }: Props) {
  return (
    <div
      className={`${
        isActive ? "min-h-[500px]" : "min-h-[45px]"
      } dark:bg-darkColumn bg-lightColumn min-w-full md:min-w-[300px] md:max-w-[300px] md:h-[75vh] max-h-[75vh]
      px-4 py-2
 dark:text-darkText text-lightText
      rounded-xl cursor-pointer select-none
      `}
    >
      <h2 className="truncate text-center font-semibold">
        {column.title}
        {/* <span className="absolute -top-14 group-hover:top-0 left-0 p-3 z-50 bg-red-500 transition-all text-sm duration-500 w-full">
          {column.title}
        </span> */}
      </h2>
    </div>
  );
}
