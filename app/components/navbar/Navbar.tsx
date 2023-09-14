"use client";
import React from "react";
import { useRouter } from "next/navigation";
import MenuButton from "./MenuButton";
import { useTheme } from "@/app/hooks/useTheme";
import ThemeButton from "../ThemeButton";
type Props = {};

export default function Navbar({}: Props) {
  const { push } = useRouter();
  const { dark } = useTheme();
  return (
    <nav
      className={`${
        dark ? "dark bg-slate-700" : "bg-slate-200"
      } h-[5rem] w-full flex items-center justify-center relative`}
    >
      <h2
        className="text-4xl tracking-[5px] dark:text-lightBackground text-blue-800 cursor-pointer select-none hover:underline hover:decoration-slate-400"
        onClick={() => push("/")}
      >
        <span className="italic font-extrabold">K</span>eeper
      </h2>
      <div className="absolute right-10">
        <MenuButton />
      </div>

      <div className="absolute left-10">
        <ThemeButton />
      </div>
    </nav>
  );
}
