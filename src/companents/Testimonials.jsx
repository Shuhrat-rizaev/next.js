import Image from "next/image";
import React from "react";
import user from "@/assets/images/user.png";

const Testimonials = () => {
  return (
    <div className="container w-10/12 mx-auto mt-20 flex justify-between">
      <div className="flex flex-col gap-6 justify-center -mt-15 ">
        <p className="text-2xl  text-[#5E6282]">Testimonials</p>
        <p className="text-[#14183E] text-5xl w-[450px] dark:text-white/50">
          What people say about Us.
        </p>
        <div className="flex justify-start space-x-3 mt-10  ">
          <span className="w-3 h-3 bg-[#2F365F] rounded-full"></span>{" "}
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900">
        <div className="relative w-full max-w-md p-6 bg-white rounded-xl shadow-md">
          <div className="absolute -top-6 left-6">
            <Image
              src={user}
              alt="user"
              width={90}
              className="w-12 h-12 rounded-full border-2 border-white shadow-md"
            />
          </div>
          <p className="text-sm text-gray-600 mt-6">
            “On the Windows talking painted pasture yet its express parties use.
            Sure last upon he same as knew next. Of believed or diverted no.”
          </p>
          <div className="mt-4">
            <h4 className="font-bold text-sm text-gray-800">Mike taylor</h4>
            <p className="text-xs text-gray-500">Lahore, Pakistan</p>
          </div>
        </div>

        <div className="mt-6 w-full max-w-md p-4 rounded-xl border border-gray-100 shadow-sm bg-gray-50 opacity-50">
          <h4 className="font-bold text-sm text-gray-600">Chris Thomas</h4>
          <p className="text-xs text-gray-400">CEO of Red Button</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
