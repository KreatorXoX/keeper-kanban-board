import { Column } from "@/types";
import React, { useEffect, useMemo, useState } from "react";
import { PiPen, PiTrash } from "react-icons/pi";
import { useSortable } from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

type Props = {
  column: Column;
  isActive?: boolean;
  deleteColumnHandler: (id: string) => void;
  updateColumnHandler: (id: string, title: string) => void;
  isDark?: boolean;
};

export default function ColumnContainer({
  column,
  isActive,
  deleteColumnHandler,
  updateColumnHandler,
  isDark,
}: Props) {
  const [isEditMode, setEditMode] = useState<boolean>(false);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    active,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
    disabled: isEditMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className={`
           ${
             isDark
               ? "bg-darkColumnBg text-darkText"
               : "bg-lightColumnBg text-lightText"
           }
           ${isActive ? "h-[3.4rem] md:h-[70vh]" : "h-[3.4rem]  md:h-[70vh]"}
           border
        border-rose-500
  opacity-40
        rounded-xl select-none  min-w-[400px] max-w-[400px] overflow-x-hidden overflow-y-auto no-scrollbar

        `}
      >
        {/* Title */}
        <div
          {...attributes}
          {...listeners}
          className={`font-semibold
             ${
               isDark
                 ? "bg-darkBackgroundBg text-darkText border-darkColumnBg"
                 : "bg-lightBackgroundBg text-lightText border-lightColumnBg"
             }
           rounded-lg
        p-2 cursor-grab rounded-b-none flex justify-between items-center group
        w-full  border-4
        `}
        ></div>

        {/* Task Content */}
        <div></div>

        {/* Footer */}
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={{
        ...style,
      }}
      className={`
         ${
           isDark
             ? "bg-darkColumnBg text-darkText"
             : "bg-lightColumnBg text-lightText"
         }
         ${isActive ? "h-[50vh] md:h-[70vh]" : "h-[3.4rem] md:h-[70vh]"}
         
      

      rounded-xl select-none  min-w-[400px] max-w-[400px] overflow-x-hidden overflow-y-auto no-scrollbar
    

      `}
    >
      {/* Title */}
      <div
        className={`group flex justify-between items-center
               ${
                 isDark
                   ? "bg-darkTitleBg text-darkText border-darkColumnBg"
                   : "bg-lightTitleBg text-lightText border-lightColumnBg"
               }
           rounded-lg
        p-2  rounded-b-none
        w-full  border-4

          `}
      >
        <div
          {...attributes}
          {...listeners}
          className={`font-semibold w-full cursor-grab
      
      `}
        >
          <h2
            className="truncate 
      "
          >
            {isEditMode && (
              <input
                className=" bg-lightColumnBg border border-rose-500 outline-none rounded dark:bg-darkColumnBg"
                type="text"
                autoFocus
                value={column.title}
                onChange={(e) => updateColumnHandler(column.id, e.target.value)}
                onKeyDown={(e) => {
                  if (e.key !== "Enter") return;
                  setEditMode(false);
                }}
                onBlur={() => setEditMode(false)}
              />
            )}
            {!isEditMode && column.title}
            {/* <span className="absolute -top-14 group-hover:top-0 left-0 p-3 z-50 bg-red-500 transition-all text-sm duration-500 w-full">
          {column.title}
        </span> */}
          </h2>
        </div>
        <button onClick={() => setEditMode((prev) => !prev)}>
          <PiPen
            size={30}
            className="text-gray-500 hover:text-lightText dark:hover:text-darkText cursor-pointer dark:hover:bg-darkColumnBg hover:bg-lightColumnBg
          rounded-full p-1 transition invisible group-hover:visible 
          "
          />
        </button>
        <button onClick={deleteColumnHandler.bind(null, column.id)}>
          <PiTrash
            size={30}
            className="text-gray-500 hover:text-lightText dark:hover:text-darkText cursor-pointer dark:hover:bg-darkColumnBg hover:bg-lightColumnBg
          rounded-full p-1 transition invisible group-hover:visible 
          "
          />
        </button>
      </div>
      <div
        className={`flex flex-col justify-between  h-[calc(100%-10vh)]
      
      `}
      >
        {/* Task Content */}
   <div className='p-2'>{column?.tasks ? column.tasks : 
        `          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam quidem
          ipsam id mollitia et dicta delectus consectetur minus, sint corporis
          vero? Est saepe dolore adipisci eos atque enim nihil quidem. Officiis
          corrupti laborum iusto dolorem tempora enim ab nisi dicta ducimus
          rerum, eveniet fuga ea labore soluta totam perferendis? Cupiditate at
          officia eaque doloribus, dolorem vel accusamus. Vero, consequatur
          dolorum?`
          }</div>
        {/* Footer */}
        <button className="">Add Task</button>
      </div>
    </div>
  );
}
