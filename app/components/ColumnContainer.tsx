import { Column } from "@/types";
import React from "react";
import { PiTrash } from "react-icons/pi";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
type Props = {
  column: Column;
  isActive?: boolean;
  deleteColumnHandler: (id: string) => void;
  isDark?: boolean;
};

export default function ColumnContainer({
  column,
  isActive,
  deleteColumnHandler,
  isDark,
}: Props) {
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
             ? "bg-darkColumn text-darkText"
             : "bg-lightColumn text-lightText"
         }
      min-w-full md:min-w-[350px] md:max-w-[350px] md:h-[75vh] md:max-h-[75vh] max-h-[54px] overflow-hidden
 
      rounded-xl cursor-pointer select-none opacity-40 border-2 border-rose-500
      
      `}
      >
        {/* Title */}
        <div
          {...attributes}
          {...listeners}
          className={`font-semibold 
           ${
             isDark
               ? "bg-darkBackground text-darkText border-darkColumn"
               : "bg-lightBackground text-lightText border-lightColumn"
           }
         rounded-lg
      p-2 cursor-grab rounded-b-none flex justify-between items-center group
      w-full  border-4 
      `}
        >
          <h2
            className="truncate 
      "
          >
            {column.title}
            {/* <span className="absolute -top-14 group-hover:top-0 left-0 p-3 z-50 bg-red-500 transition-all text-sm duration-500 w-full">
          {column.title}
        </span> */}
          </h2>
          <button onClick={deleteColumnHandler.bind(null, column.id)}>
            <PiTrash
              size={30}
              className="text-gray-500 hover:text-lightText dark:hover:text-lightColumn cursor-pointer dark:hover:bg-darkColumn hover:bg-lightColumn
          rounded-full p-1 transition invisible group-hover:visible
          "
            />
          </button>
        </div>

        {/* Task Content */}
        <div>Content</div>
        {/* Footer */}
      </div>
    );
  }
  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`${
        isActive ? "min-h-[600px]" : "max-h-[54px] md:max-h-fit overflow-hidden"
      } 
         ${
           isDark
             ? "bg-darkColumn text-darkText"
             : "bg-lightColumn text-lightText"
         }
      min-w-full md:min-w-[350px] md:max-w-[350px] md:h-[75vh] max-h-[75vh]
 
      rounded-xl cursor-pointer select-none
      `}
    >
      {/* Title */}
      <div
        {...attributes}
        {...listeners}
        className={`font-semibold 
           ${
             isDark
               ? "bg-darkBackground text-darkText border-darkColumn"
               : "bg-lightBackground text-lightText border-lightColumn"
           }
         rounded-lg
      p-2 cursor-grab rounded-b-none flex justify-between items-center group
      w-full  border-4 
      `}
      >
        <h2
          className="truncate 
      "
        >
          {column.title}
          {/* <span className="absolute -top-14 group-hover:top-0 left-0 p-3 z-50 bg-red-500 transition-all text-sm duration-500 w-full">
          {column.title}
        </span> */}
        </h2>
        <button onClick={deleteColumnHandler.bind(null, column.id)}>
          <PiTrash
            size={30}
            className="text-gray-500 hover:text-lightText dark:hover:text-lightColumn cursor-pointer dark:hover:bg-darkColumn hover:bg-lightColumn
          rounded-full p-1 transition invisible group-hover:visible
          "
          />
        </button>
      </div>

      {/* Task Content */}
      <div>Content</div>
      {/* Footer */}
    </div>
  );
}
