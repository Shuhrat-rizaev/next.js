import Image from "next/image";
import React from "react";
import bg_header from "@/assets/images/bg_header.png";
import { useTranslations } from "next-intl";

const Main = () => {
  const t = useTranslations();
  return (
    <>
      <div className="grid grid-cols-2 container w-10/12 mx-auto">
        <div>
          {/* <p className="text-error font-semibold">{t("hello")}</p> */}
          <p className="text-error font-semibold">{t("Travel")}</p>

          <p className="w-[550px] text-main dark:text-white/50 text-8xl font-semibold leading-24 tracking-tighter">
            {t("travel")}
          </p>
          <p className="text-secondary">{t("Built")}</p>
          <div className="mt-6">
            <button className=" bg-[#F1A501] py-2 px-4 rounded-lg   ">
              {t("fint")}
            </button>
          </div>
        </div>
        <div>
          <Image src={bg_header} alt="Traveller 1" width={550} height={550} />
        </div>
      </div>
    </>
  );
};

export default Main;
