"use client";

import { useTheme } from "next-themes";

const DarkModeSwich = () => {
  const { theme, setTheme } = useTheme();
  console.log(theme);
  return (
    <div>
      <button
        onClick={() => {
          if (theme == "dark") {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
        className="dark:text-gray-900"
      >
        {theme == "light" ? "TUN" : "KUN"}
      </button>
    </div>
  );
};

export default DarkModeSwich;
