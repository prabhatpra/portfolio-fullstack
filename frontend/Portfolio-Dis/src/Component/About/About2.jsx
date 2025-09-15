import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";

const skills = [
  { icon: <FaReact size={28} />, title: "React" },
  { icon: <FaHtml5 size={28} />, title: "HTML5" },
  { icon: <FaCss3Alt size={28} />, title: "CSS3" },
  { icon: <FaJs size={28} />, title: "JavaScript" },
];

const AboutPage2 = () => {
  return (
    <section className="relative w-screen min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-800 py-24 px-6">
      <motion.div
        className="max-w-6xl w-full text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl font-bold text-pink-600 dark:text-purple-400 mb-6">
          My Skills
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-12">
          I specialize in front-end development and love creating interactive and visually appealing web applications.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 flex flex-col items-center shadow-xl hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-pink-500 dark:text-purple-400 mb-3">{skill.icon}</div>
              <h3 className="font-bold text-lg">{skill.title}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutPage2;
