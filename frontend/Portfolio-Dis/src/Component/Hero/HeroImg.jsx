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
              bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600
              text-white font-medium text-sm sm:text-base
              rounded-xl
              shadow-md
              hover:shadow-lg hover:scale-105
              transition-all duration-300
            "
          >
            Learn more about me
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
                bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800
                border border-gray-300/60 dark:border-gray-700
                rounded-2xl
                shadow-2xl
                p-5 sm:p-6 md:p-8 w-full max-w-sm sm:max-w-md
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
                className="absolute top-3 right-3 text-gray-500 dark:text-gray-300 text-2xl font-bold hover:text-cyan-500"
              >
                &times;
              </button>

              {/* Profile Image inside modal */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-cyan-400/70 shadow-lg">
                <img
                  src={HeroImage}
                  alt="Prabhat Prajapati"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                About Me
              </h2>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
                Hi! I'm{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  Prabhat Prajapati
                </span>
                , a passionate developer specializing in{" "}
                <span className="text-cyan-600 dark:text-cyan-400">
                  frontend
                </span>{" "}
                and{" "}
                <span className="text-blue-600 dark:text-purple-400">
                  fullstack
                </span>{" "}
                development. I love building modern, responsive, and
                user-friendly web apps with React, Vite, and the latest tech.
              </p>

              {/* Action Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="mt-5 w-full px-5 py-2 sm:px-6 sm:py-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-xl transition-colors font-medium text-gray-700 dark:text-gray-300 text-sm sm:text-base"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroImg;
