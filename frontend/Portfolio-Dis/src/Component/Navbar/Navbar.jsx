import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import Login from "./Login";
import DarkMode from "./DarkMode";
import PrabhatImg from "../../assets/myimg/prabhat.png";

const menuItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Project", link: "#project" },
  { name: "Resume", link: "#resume" },
  { name: "Contact", link: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    hidden: { opacity: 0, scale: 0, originX: 1, originY: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      originX: 1,
      originY: 0,
      transition: { type: "spring", stiffness: 300, damping: 25 },
    },
    exit: { opacity: 0, y: -20, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <div className="fixed top-0 z-40 w-screen transition-all duration-300">
     <div
  className={`shadow-md
    relative mx-auto
    ${scrolled
      ? "w-1/2 h-12 rounded-lg bg-transparent backdrop-blur-md"
      : "w-full h-14 bg-gradient-to-br from-blue-50 via-cyan-200 to-purple-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-800"}
    transition-all duration-300`}
>

        <div className="py-1 px-2 h-full">
          <div className="container mx-auto flex items-center justify-between flex-wrap md:flex-nowrap gap-4 relative">

            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2 font-bold text-xl sm:text-2xl z-50 relative group"
            >
              <img
                src={PrabhatImg}
                alt="logo"
                className={`rounded-full transition-transform duration-300 hover:scale-110 md:hover:scale-150 ${
                  scrolled ? "w-7 h-7" : "w-10 h-10"
                }`}
              />

              {/* Text hidden on scroll */}
              {!scrolled && <span className="md:hidden text-lg">DPro</span>}
              {!scrolled && (
                <span className="hidden md:inline-block transition-transform duration-300 hover:scale-110 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                  DisCoderPro
                </span>
              )}
            </a>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden absolute right-4 top-4 z-50">
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
                className="transition-transform duration-300 ease-in-out transform hover:scale-125"
              >
                {isOpen ? (
                  <HiX className="w-6 h-6 text-black dark:text-white hover:text-red-500" />
                ) : (
                  <HiMenuAlt3 className="w-6 h-6 text-black dark:text-white hover:text-red-500" />
                )}
              </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="absolute top-16 right-4 bg-gradient-to-br
                             from-blue-50/90 via-cyan-200/70 to-purple-100/90
                             dark:from-gray-900/80 dark:via-purple-900/60 dark:to-indigo-800/80
                             text-gray-800 dark:text-gray-200 rounded-lg shadow-md p-2 space-y-2 w-48 z-40 md:hidden origin-top-right backdrop-blur-sm"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={menuVariants}
                >
                  {menuItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="block text-sm text-gray-800 dark:text-gray-200 hover:text-yellow-500 transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Desktop Menu */}
            <div className="hidden md:flex justify-center flex-grow items-center gap-8 font-medium transition-all duration-300">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="text-gray-800 dark:text-gray-200 font-medium hover:text-green-500 dark:hover:text-red-700
                  hover:underline hover:underline-offset-4 transform hover:scale-110 transition duration-300 ease-in-out shadow-sm hover:shadow-lg"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Right side items */}
    <div className="flex items-center gap-4 ml-auto">
  <div className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12">
    <DarkMode />
  </div>
  {!scrolled && (
    <div className="flex items-center p-1 md:pr-8">
      <Login />
    </div>
  )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
