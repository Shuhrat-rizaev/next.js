import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import rome1 from "@/assets/images/rome1.png";
import evropa from "@/assets/images/europa.png";
import london from "@/assets/images/london.png";

const Selling = () => {
  const t = useTranslations();
  return (
    <div className="container w-10/12 mx-auto mt-20">
      <p className="text-2xl text-center text-[#5E6282]">{t("top")}</p>
      <h1 className="text-[#14183E] text-5xl text-center mt-3 dark:text-white/50">
        {t("topD")}
      </h1>
      <div className="flex">
        <div className="flex mt-10">
          <Image
            src={rome1}
            alt="Rome"
            width={500}
            height={400}
            className=" "
          />
          <Image
            src={london}
            alt="Rome"
            width={500}
            height={400}
            className=" "
          />
          <Image
            src={evropa}
            alt="Rome"
            width={500}
            height={100}
            className=" "
          />
        </div>
      </div>
    </div>
  );
};

export default Selling;
