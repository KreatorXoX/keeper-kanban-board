"use client";
import React, { useMemo, useState } from "react";
import Button from "../UI-elements/Button";
import { PiPlus, PiDatabase } from "react-icons/pi";
import { Column } from "@/types";
import { v4 as uuidv4 } from "uuid";
import { generateFunnyName } from "@/utils/generateName";
import ColumnContainer from "../ColumnContainer";

import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";
import { useTheme } from "@/app/hooks/useTheme";
type Props = {};

export default function KanbanBoard({}: Props) {
  const { dark } = useTheme();
  // at the later stage we are going to use zustand to create
  // a kanban board store and use our custom hooks to handle
  // board state and logic
  const [columns, setColumns] = useState<Column[]>([]);
  const [activeColumn, setActiveColumn] = useState<Column | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { delay: 10, tolerance: 0 },
    })
  );

  const addColumnHandler = () => {
    const newColumn: Column = {
      id: uuidv4(),
      title: generateFunnyName(),
    };
    setColumns((prev) => [...prev, newColumn]);
  };
  const deleteColumnHandler = (id: string) => {
    const updatedColumns = columns.filter((col) => col.id !== id);
    setColumns(updatedColumns);
  };

  const updateColumnHandler = (id: string, title: string) => {
    const updatedColumns = columns.map((col) => {
      if (col.id !== id) {
        return col;
      } else {
        return { ...col, title };
      }
    });

    setColumns(updatedColumns);
  };

  const columnIds = useMemo(() => {
    return columns.map((col) => col.id);
  }, [columns]);

  const dragStartHandler = (e: DragStartEvent) => {
    if (e.active.data.current?.type === "Column") {
      setActiveColumn(e.active.data.current.column);
    }
  };
  const dragEndHandler = (e: DragEndEvent) => {
    const { active, over } = e;

    if (!over) return;

    const activeColumnId = active.id;
    const overColumnId = over.id;

    if (activeColumnId === overColumnId) return;
    setColumns((columns) => {
      const activeColumnIdx = columns.findIndex(
        (col) => col.id === activeColumnId
      );
      const overColumnIdx = columns.findIndex((col) => col.id === overColumnId);

      return arrayMove(columns, activeColumnIdx, overColumnIdx);
    });
  };
  return (
    <div className="flex w-full items-center ">
      <DndContext
        onDragStart={dragStartHandler}
        onDragEnd={dragEndHandler}
        sensors={sensors}
      >
        <div className="mx-auto flex flex-col md:h-[75vh] md:flex-row justify-start items-center md:items-baseline  md:justify-between gap-5 md:gap-10 w-full">
          <div className=" overflow-x-auto flex w-full md:flex-row flex-col items-center gap-5 no-scrollbar">
            <SortableContext items={columnIds}>
              {columns.map((col, idx) => (
                <ColumnContainer
                  key={col.id}
                  isActive={columns.length === 1 || activeColumn?.id === col.id}
                  column={col}
                  deleteColumnHandler={deleteColumnHandler}
                  updateColumnHandler={updateColumnHandler}
                  isDark={dark}
                />
              ))}
            </SortableContext>
          </div>

          <div className="order order-first md:order-last flex flex-col gap-2 h-full pt-2">
            <Button
              icon={PiPlus}
              kanban
              label="Add Column"
              onClick={addColumnHandler}
            />
            <Button
              icon={PiDatabase}
              kanban
              secondary
              label="Save Board"
              onClick={addColumnHandler}
            />
          </div>
          {typeof document !== "undefined" &&
            createPortal(
              <DragOverlay>
                {activeColumn && (
                  <ColumnContainer
                    column={activeColumn}
                    deleteColumnHandler={deleteColumnHandler}
                    updateColumnHandler={updateColumnHandler}
                    isDark={dark}
                  />
                )}
              </DragOverlay>,
              document.body
            )}
        </div>
      </DndContext>
    </div>
  );
}
