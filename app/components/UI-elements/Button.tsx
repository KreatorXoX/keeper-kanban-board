"use client";
import React from "react";
import { IconType } from "react-icons/lib";

type Props = {
  label?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  kanban?: boolean;
  secondary?: boolean;
  small?: boolean;
  icon?: IconType;
};

export default function Button({
  label = "Generic",
  onClick,
  disabled,
  outline,
  kanban,
  secondary,
  small,
  icon: ButtonIcon,
}: Props) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
  relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full
  ${outline ? "bg-white" : "bg-buttonColor"}
  ${
    outline
      ? "border-2 border-black hover:opacity-80"
      : "border-none outline-none"
  }
  ${outline ? "text-black" : "text-white"}
  ${outline ? "hover:bg-neutral-50" : ""}
  ${small ? "py-1" : "py-3"}
  ${small ? "text-sm" : "text-base"}
  ${small ? "font-light" : "font-semibold"}
  ${secondary ? "bg-orange-600" : ""}
  ${
    kanban
      ? "w-[300px] h-[50px] min-w-[200px] hover:ring-2 ring-blue-700"
      : "font-semibold"
  }
  `}
    >
      {ButtonIcon && (
        <ButtonIcon
          size={`${small ? "20" : "25"}`}
          className={`${small ? "top-4" : "top-3"} absolute left-3`}
        />
      )}
      {label}
    </button>
  );
}
