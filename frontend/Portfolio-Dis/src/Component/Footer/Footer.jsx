import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-blue-50 via-cyan-100 to-purple-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-800 text-gray-800 dark:text-gray-100">
      
      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0">
        
        {/* Left: Branding / Copyright */}
        <div className="flex-1 text-center sm:text-center md:text-left">
          <h1 className="text-xl sm:text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500">
            Prabhat Prajapati
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Middle: Contact Info */}
        <div className="flex-1 text-center space-y-2">
          <p className="text-sm sm:text-base">
            Email:{" "}
            <a
              href="mailto:prabhatprajapati01@gmail.com"
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 font-semibold hover:underline"
            >
              prabhatprajapati01@gmail.com
            </a>
          </p>
          <p className="text-sm sm:text-base">
            Phone:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 font-semibold">
              +91 8409363297
            </span>
          </p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex-1 flex justify-center sm:justify-center md:justify-end gap-6 text-2xl sm:text-2xl md:text-3xl">
          <a
            href="https://github.com/prabhatpra"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/30 dark:bg-gray-800/50 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-transform transform hover:scale-110"
          >
            <FaGithub className="text-gray-800 dark:text-gray-100" />
          </a>
          <a
            href="https://www.linkedin.com/in/prabhat-prajapati-01p6/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/30 dark:bg-gray-800/50 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-transform transform hover:scale-110"
          >
            <FaLinkedin className="text-blue-600 dark:text-blue-400" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/30 dark:bg-gray-800/50 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-transform transform hover:scale-110"
          >
            <FaTwitter className="text-cyan-500 dark:text-cyan-400" />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 dark:border-gray-700 mx-6 md:mx-12"></div>

      {/* Bottom Section */}
      <div className="text-center py-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
        Designed & built with ❤️ by{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 font-semibold">
          Prabhat Prajapati
        </span>
      </div>
    </footer>
  );
};

export default Footer;
