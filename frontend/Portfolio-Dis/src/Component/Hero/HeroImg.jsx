// HeroImg.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroImage from "../../assets/myimg/prabhat.jpg";

const HeroImg = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex justify-center md:justify-start w-full">
      {/* ===== Outer Card ===== */}
      <motion.div
        className="
          relative
          w-56 sm:w-64 md:w-72 lg:w-80   /* Narrow width */
          h-80 sm:h-96 md:h-[28rem] lg:h-[32rem] /* Tall height */
          rounded-3xl
          overflow-hidden
          bg-gradient-to-br from-white/90 to-gray-100/70 dark:from-gray-900 dark:to-gray-800
          border border-gray-200/60 dark:border-gray-700/60
          shadow-xl
          backdrop-blur-md
          flex flex-col items-center justify-end
          group
        "
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 250, damping: 20 }}
      >
        {/* Profile Image */}
        <div className="absolute top-0 left-0 w-full h-2/3 overflow-hidden">
          <motion.img
            src={HeroImage}
            alt="Prabhat Prajapati"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        </div>

        {/* Name & Button */}
        <div className="relative flex flex-col items-center gap-2 p-4 sm:p-5 md:p-6 text-center">
          <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold text-gray-900 dark:text-white tracking-wide">
            Prabhat Prajapati
          </h1>

          <button
            onClick={() => setIsModalOpen(true)}
            className="
              mt-2 px-5 py-2
    bg-gradient-to-r from-slate-600 via-green-200 to-violet-600
    dark:from-lime-600 dark:via-amber-300 dark:to-green-950
    text-indigo-600 font-bold text-sm sm:text-base
    rounded-xl
    shadow-md
    hover:shadow-lg hover:scale-105
    transition-all duration-300
    cursor-pointer
    focus:outline-none focus:ring-2 focus:ring-blue-400
    flex items-center justify-center gap-2
            "
          >
            About me<span className="text-white text-lg">→</span>
          </button>
        </div>
      </motion.div>

      {/* ===== Popup Modal ===== */}
<AnimatePresence>
  {isModalOpen && (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={() => setIsModalOpen(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          bg-white/10 dark:bg-gray-500/10
          backdrop-blur-xl
          border border-cyan-300 dark:border-red-600/50
          rounded-2xl
          shadow-1xl
          p-6 sm:p-8
          w-full max-w-sm sm:max-w-md
          text-center
        "
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 text-2xl font-bold hover:text-cyan-500 transition-colors duration-200"
        >
          &times;
        </button>

        {/* Profile Image */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-cyan-400/50 dark:ring-violet-900 shadow-lg">
          <img
            src={HeroImage}
            alt="Prabhat Prajapati"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-indigo-600 dark:text-amber-500 mb-2">
          About Me
        </h2>

        {/* Short Description */}
        <p className="text-amber-400 dark:text-cyan-600 text-sm sm:text-base md:text-base leading-relaxed">
          I am a <span className="font-semibold"> Java-based Full Stack Developer </span> 
          working on secure microservices using <span className="font-semibold text-green-700 dark:text-pink-400"> Spring Boot </span>. 
          I also work with <span className="font-semibold text-cyan-600 dark:text-cyan-400"> React </span> 
          and <span className="font-semibold text-blue-600 dark:text-purple-400"> Tailwind CSS </span> 
           to build modern, responsive web apps.
        </p>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
};

export default HeroImg;
