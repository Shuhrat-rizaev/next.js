import React from "react";

const Cards = () => {
  return (
    <div className="container w-10/12 mx-auto bg-[#DFD7F9] rounded-2xl dark:bg-white/50 ">
      <div className="py-16 px-4 flex flex-col items-center text-center relative overflow-hidden">
        <p className="font-poppinstext-2xl md:text-3xl font-bold text-[#3e3e60] max-w-2xl mb-8 dark:text-white/70">
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </p>
        <form className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center bg-white px-4 py-3 rounded-xl shadow-md w-80">
            <input
              type="email"
              placeholder="Your email"
              className="w-full outline-none text-sm dark:text-amber-400"
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-[#FF7D68] to-[#FF9068] text-white font-medium px-6 py-3 rounded-xl shadow-md hover:opacity-90 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Cards;
