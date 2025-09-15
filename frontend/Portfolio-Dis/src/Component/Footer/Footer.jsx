import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="
        relative w-full
        bg-gradient-to-tr from-blue-50/90 via-cyan-200/70 to-purple-100/70
        dark:from-gray-900/80 dark:via-purple-900/60 dark:to-indigo-800/70
        text-gray-800 dark:text-gray-100
        py-8 px-4 sm:px-8
        shadow-lg
        transition-colors duration-700
      "
    >
      {/* Main Flex Container */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left Side: Copyright */}
        <div className="text-sm sm:text-base text-center sm:text-left">
          © {new Date().getFullYear()} Prabhat Prajapati. All rights reserved.
        </div>

        {/* Middle: Contact Info */}
        <div className="text-center space-y-1 text-sm sm:text-base">
          <p>
            Email:{" "}
            <a
              href="mailto:prabhat@example.com"
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 font-semibold hover:underline"
            >
              prabhat@example.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 font-semibold">
              +91 1234567890
            </span>
          </p>
        </div>

        {/* Right Side: Social Links */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-all transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-500 transition-all transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-cyan-500 transition-all transform hover:scale-110"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Bottom Note: Full Width */}
      <div className="mt-6 text-center text-xs sm:text-sm text-gray-600 dark:text-gray-400 w-full">
        Designed & built by{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 font-semibold">
          Prabhat Prajapati
        </span>
      </div>
    </footer>
  );
};

export default Footer;
