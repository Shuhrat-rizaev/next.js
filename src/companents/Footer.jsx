import Image from "next/image";
import React from "react";
import logo from "@/assets/images/logotep.png";
import gogle from "@/assets/images/gogle.png";
import appstore from "@/assets/images/appstore.png";
const Footer = () => {
  return (
    <div>
      {" "}
      <div className="container mx-auto w-[85%]">
        <div className="mt-20 flex  justify-between gap-4">
          <div className="items-start flex flex-col gap-2">
          <div className="logo dark:bg-gray-500 p-3 rounded-2xl">
          <Image src={logo} alt="Logotep" width={160} />
        </div>
            <p className="w-60">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>
          <div className="items-start flex flex-col gap-2">
            <p className="font-semibold text-xl mb-4">Company</p>
            <p>About</p>
            <p>Careers</p>
            <p>Mobile</p>
          </div>
          <div className="items-start flex flex-col gap-2">
            <p className="font-semibold text-xl mb-4">Contact</p>
            <p>Help/FAQe</p>
            <p>Raddem Vaucher</p>
            <p>Contact Us</p>
          </div>
          <div className="items-start flex flex-col gap-2">
            <p className="font-semibold text-xl mb-4">Download Our App</p>
            <p className="w-60">
              Download our App & get extra 20% Discount on your first Order...!{" "}
            </p>
            <div className="flex gap-4">
              <Image src={gogle} alt="Google link" width={180} />
              <Image src={appstore} alt="App Store Link" width={180} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
