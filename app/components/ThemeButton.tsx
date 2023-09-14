import React from "react";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { useTheme } from "../hooks/useTheme";

const ThemeButton = () => {
  const dark = useTheme((state) => state.dark);
  const toggler = useTheme((state) => state.toggle);
  return (
    <button
      onClick={toggler}
      className="
  rounded-full  p-2 hover:scale-105 transition-color duration-500 hover:bg-blue-900 dark:hover:bg-lightBackground group
  "
    >
      {!dark ? (
        <BsFillMoonStarsFill
          className="text-blue-900 group-hover:text-yellow-400 transition"
          size={20}
        />
      ) : (
        <BsFillSunFill
          className="text-yellow-400 group-hover:text-yellow-500"
          size={20}
        />
      )}
    </button>
  );
};

export default ThemeButton;
