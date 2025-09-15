
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Import the 4 pages
import AboutPage1 from "./About1";
import AboutPage2 from "./About2";
import AboutPage3 from "./About3";
import AboutPage4 from "./About4";

const pages = [AboutPage1, AboutPage2, AboutPage3, AboutPage4];

const About = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    setCurrentPage((prev) => (prev < pages.length - 1 ? prev + 1 : prev));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const CurrentComponent = pages[currentPage];

  return (
    <div id="about" className="relative w-screen min-h-screen overflow-hidden">
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
        >
          <CurrentComponent />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="absolute bottom-8 w-full flex justify-center gap-6">
        <button
          onClick={prevPage}
          className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white px-6 py-2 rounded-full shadow hover:scale-105 transition-transform"
        >
          Prev
        </button>
        <button
          onClick={nextPage}
          className="bg-blue-500 dark:bg-purple-600 text-white px-6 py-2 rounded-full shadow hover:scale-105 transition-transform"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default About;
