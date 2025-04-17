import Image from "next/image";
import React from "react";
import hh from "@/assets/images/hh.png";
import auto from "@/assets/images/auto.png";
import cubek from "@/assets/images/cubek.png";
import image from "@/assets/images/image.svg";

const Easy = () => {
  return (
    <div className="container mx-auto w-10/12 flex justify-center gap-6 ">
      <div className="flex  flex-col items-start  gap-5  ">
        <p className="text-2x text-[#5E6282]">Easy and Fast</p>
        <p className="text-[#14183E] text-5xl  mt-3 dark:text-white/50 font-semibold">
          Book your next trip in 3 easy steps
        </p>
        <div className="w-[450px] h-[200px] gap-7 flex flex-col ">
          {" "}
          <div className="flex gap-4  ">
            {" "}
            <Image src={cubek} alt="" width={80} />
            <div>
              {" "}
              <p className="text-[#5E6282] font-semibold text-xl">
                Choose Destination
              </p>
              <p className="text-[#5E6282] font-poppins">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            {" "}
            <Image src={auto} alt="" width={80} height={40} />
            <div>
              {" "}
              <p className="text-[#5E6282] font-semibold text-xl">
                Make Payment
              </p>
              <p className="text-[#5E6282] font-poppins">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            {" "}
            <Image src={hh} alt="" width={80} />
            <div>
              {" "}
              <p className="text-[#5E6282] font-semibold text-xl">
                Reach Airport on Selected Date
              </p>
              <p className="text-[#5E6282] font-poppins">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          src={image}
          alt="Trip To Greece"
          width={800}
          height={600}
          className="-mt-10"
        />
      </div>
    </div>
  );
};

export default Easy;
