"use client";

import React from "react";
import DarkModeSwich from "./DarkModeSwich";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import decore from "@/assets/images/Decore.png";
import decore2 from "@/assets/images/decore2.png";
import { useTheme } from "next-themes";
import LangSwitch from "./LangSwitch";
import { useTranslations } from "next-intl";
const Navbar = () => {
  const { theme } = useTheme();
  const te = useTranslations();
  return (
    <>
      <Image
        src={theme == "dark" ? decore2 : decore}
        alt="decore "
        width={600}
        height={600}
        className="absolute top-0 right-0 -z-10"
      />
      <div className="flex justify-between items-center container w-10/12 mx-auto py-10">
        <div className="logo dark:bg-gray-500 p-3 rounded-2xl">
          <Image src={logo} alt="Logotep" width={160} />
        </div>
        <div className="links">
          <ul className="flex gap-4 items-center">
            <li>{te("m")}</li>
            <li>{te("h")}</li>
            <li>{te("p")}</li>
            <li>{te("b")}</li>
          </ul>
        </div>
        <div className="layouts flex gap-4">
          <DarkModeSwich /> <LangSwitch />
        </div>
      </div>
    </>
  );
};

export default Navbar;
