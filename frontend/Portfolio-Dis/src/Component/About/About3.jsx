import React from "react";
import { motion } from "framer-motion";

const experiences = [
  { year: "2020", role: "Junior Developer at XYZ", desc: "Built small web apps and internal tools." },
  { year: "2021", role: "Frontend Developer at ABC", desc: "Worked on interactive React projects and dashboards." },
  { year: "2023", role: "Freelance Developer", desc: "Designed modern UI/UX websites for clients." },
];

const AboutPage3 = () => {
  return (
    <section className="relative w-screen min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-800 py-24 px-6">
      <motion.div
        className="max-w-4xl w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl font-bold text-cyan-600 dark:text-purple-400 text-center mb-10">
          Experience
        </h2>

        <div className="relative border-l-2 border-gray-300 dark:border-gray-600 ml-4">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="mb-10 ml-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              <span className="absolute -left-6 top-0 w-4 h-4 bg-cyan-600 dark:bg-purple-400 rounded-full"></span>
              <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200">{exp.role}</h3>
              <time className="block mb-2 text-sm text-gray-500 dark:text-gray-400">{exp.year}</time>
              <p className="text-gray-700 dark:text-gray-300">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutPage3;
