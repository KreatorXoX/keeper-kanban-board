"use client";

import { useTheme } from "../hooks/useTheme";

type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  const { dark } = useTheme();
  return (
    <div
      className={`${
        dark
          ? "dark bg-darkBackground text-lightBackground"
          : "bg-lightBackground text-darkBackground"
      } max-w-[2520px] mx-auto xl:px-16 md:px-8 px-6 py-12 min-h-[calc(100vh-5rem)] min-w-screen text-lg`}
    >
      {children}
    </div>
  );
}
