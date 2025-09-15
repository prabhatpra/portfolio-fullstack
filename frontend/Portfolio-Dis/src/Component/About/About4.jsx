import React from "react";
import { motion } from "framer-motion";

const AboutPage4 = () => {
  return (
    <section className="relative w-screen min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-800 py-24 px-6">
      <motion.div
        className="max-w-2xl w-full text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl font-bold text-purple-600 dark:text-pink-400 mb-6">
          Let's Connect
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-12">
          I'm always open for new projects or collaborations. Reach out and let's build something amazing together!
        </p>
        <motion.a
          href="mailto:prabhat@example.com"
          className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-10 py-3 rounded-full shadow-xl hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.1 }}
        >
          Contact Me
        </motion.a>
      </motion.div>
    </section>
  );
};

export default AboutPage4;
