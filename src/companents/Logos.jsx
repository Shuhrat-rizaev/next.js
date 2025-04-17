import React from "react";
import Image from "next/image";
import axon from "@/assets/images/axon.png";
import jetstar from "@/assets/images/jetstar.png";
import e from "@/assets/images/e.png";
import qantas from "@/assets/images/qantas.png";
import alitalia from "@/assets/images/alitalia.png";

const logos = () => {
  return (
    <div className="container mx-auto w-10/12 h-[215px]">
      <div className=" flex  gap-9  justify-center items-center dark:bg-white/50 h-[114] rounded-2xl">
        <Image src={axon} alt="Logos" width={210} className="" />
        <Image src={jetstar} alt="Logos" width={220} className="" />
        <Image src={e} alt="Logos" width={210} height={114} className="" />
        <Image src={qantas} alt="Logos" width={215} className=" " />
        <Image src={alitalia} alt="Logos" width={210} height={42} />
      </div>
    </div>
  );
};

export default logos;
