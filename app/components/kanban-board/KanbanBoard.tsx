"use client";
import React, { useState } from "react";
import Button from "../UI-elements/Button";
import { PiPlus, PiDatabase } from "react-icons/pi";
import { Column } from "@/types";
import { v4 as uuidv4 } from "uuid";
import { generateFunnyName } from "@/utils/generateName";
import ColumnContainer from "../ColumnContainer";
type Props = {};

export default function KanbanBoard({}: Props) {
  const [columns, setColumns] = useState<Column[]>([]);
  const isActive = false;
  const addColumn = () => {
    const newColumn: Column = {
      id: uuidv4(),
      title: generateFunnyName(),
    };
    setColumns((prev) => [...prev, newColumn]);
  };
  return (
    <div className="flex w-full items-center ">
      <div className="mx-auto flex flex-col h-[75vh] md:flex-row justify-start items-center md:items-baseline  md:justify-between  gap-10 w-full">
        <div className="overflow-x-auto flex w-full md:flex-row flex-col items-center gap-5">
          {columns.map((col, idx) => (
            <ColumnContainer
              key={col.id}
              isActive={columns.length === 1 || isActive}
              column={col}
            />
          ))}
        </div>
        <div className="order order-first md:order-last flex flex-col gap-2">
          <Button icon={PiPlus} kanban label="Add Column" onClick={addColumn} />
          <Button
            icon={PiDatabase}
            kanban
            secondary
            label="Save Board"
            onClick={addColumn}
          />
        </div>
      </div>
    </div>
  );
}
