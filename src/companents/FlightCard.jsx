import React from "react";
import antena from "@/assets/images/antene.png";
import samalyot from "@/assets/images/samalyot.png";
import mikrafon from "@/assets/images/mikrafon.png";
import kluc from "@/assets/images/kluc.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

const FlightCard = () => {
  const t = useTranslations();
  return (
    <div className="mt-20 container mx-auto w-10/12">
      <p className="text-2xl text-center text-[#5E6282]">{t("category")}</p>
      <h1 className="text-[#14183E] text-5xl text-center mt-3 dark:text-white/50">
        {t("we")}
      </h1>
      <div className="flex justify-between gap-5 mt-9 ">
        <div className="max-w-70 bg-white rounded-2xl  hover:shadow-2xl p-6 text-center flex flex-col items-center gap-2.5 dark:bg-blue-950 dark:hover:bg-blue-900">
          <Image src={antena} alt="antena" width={120} className="" />
          <p className="text-[#1E1D4C ] ">{t("calculated")} </p>
          <p className="text-[#5E6282]">{t("built")}</p>
        </div>{" "}
        <div className="max-w-70 bg-white rounded-2xl  hover:shadow-2xl p-6 text-center flex flex-col items-center gap-2.5 dark:bg-blue-950 dark:hover:bg-blue-900">
          <Image src={samalyot} alt="antena" width={120} className="" />
          <p className="text-[#1E1D4C ] ">{t("best")}</p>
          <p className="text-[#5E6282]">{t("park")}</p>
        </div>{" "}
        <div className="max-w-70 bg-white rounded-2xl  hover:shadow-2xl p-6 text-center flex flex-col items-center gap-2.5 dark:bg-blue-950 dark:hover:bg-blue-900">
          <Image src={mikrafon} alt="antena" width={120} className="" />
          <p className="text-[#1E1D4C ] ">{t("locol")} </p>
          <p className="text-[#5E6282]">
         {t("barot")}.
          </p>
        </div>
        <div className="max-w-70 bg-white rounded-2xl  hover:shadow-2xl p-6 text-center flex flex-col items-center gap-2.5 dark:bg-blue-950 dark:hover:bg-blue-900">
          <Image src={kluc} alt="antena" width={120} className="" />
          <p className="text-[#1E1D4C ] ">{t("Customization")} </p>
          <p className="text-[#5E6282]">
          {t("delever")}
          </p>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default FlightCard;
