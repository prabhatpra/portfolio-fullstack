import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaLightbulb } from "react-icons/fa";
import BubbleBackground from "../BubbleBackground/BubbleBackground.jsx";

const skills = [
  { icon: <FaCode size={28} />, title: "Clean Code", level: 90 },
  { icon: <FaLaptopCode size={28} />, title: "Web Development", level: 85 },
  { icon: <FaLightbulb size={28} />, title: "Creative Solutions", level: 95 },
];

const About1 = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section
      className="
        relative w-screen min-h-screen overflow-hidden
        bg-gradient-to-br from-blue-50 via-cyan-100 to-purple-100/70
        dark:from-gray-900/80 dark:via-purple-900/60 dark:to-indigo-800/70
        flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-20 py-24
        transition-colors duration-700
      "
    >
      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-white/20 dark:bg-black/20 pointer-events-none z-0"></div>

      {/* Floating Bubbles */}
      <BubbleBackground />

      {/* Main Content */}
      <motion.div
        className="z-10 flex flex-col lg:flex-row items-center gap-12 w-full max-w-7xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* About Image */}
        <motion.div
          className="w-full lg:w-1/2"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          data-aos="fade-right"
        >
          <img
            src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80"
            alt="About illustration"
            className="rounded-3xl shadow-2xl"
          />
        </motion.div>

        {/* Text + Skills */}
        <motion.div
          className="w-full lg:w-1/2 space-y-8 text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          data-aos="fade-left"
        >
          <h2 className="text-5xl font-extrabold text-blue-700 dark:text-purple-400">
            About Me<span className="text-cyan-500">.</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            I’m Prabhat, a passionate developer building modern and interactive web applications. I combine clean code, creative solutions, and smooth animations to craft engaging user experiences that look professional and feel dynamic.
          </p>

          {/* Skill Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl flex flex-col items-center text-center hover:scale-105 hover:rotate-1 transition-transform duration-300"
                whileHover={{ scale: 1.05, rotate: 1 }}
              >
                <div className="text-blue-600 dark:text-purple-400 mb-3">{skill.icon}</div>
                <h3 className="font-bold text-lg">{skill.title}</h3>
                {/* Animated Skill Bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-3">
                  <motion.div
                    className="bg-blue-500 dark:bg-purple-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            className="mt-6 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-purple-600 dark:to-pink-500 text-white px-8 py-3 rounded-full shadow-xl hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Know More
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About1;
