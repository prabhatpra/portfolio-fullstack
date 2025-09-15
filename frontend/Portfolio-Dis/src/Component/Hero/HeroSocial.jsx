// HeroSocial.jsx
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub, FaUserCircle } from "react-icons/fa";
import { profileWithImages, basicProfileDescriptions } from "./HeroData";

const HeroSocial = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [profile, setProfile] = useState("instagram");
  const [hoverText, setHoverText] = useState("Instagram Profile");
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRotateY(((x / rect.width) - 0.5) * 30);
    setRotateX(((y / rect.height) - 0.5) * -30);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovering(false);
  };

  const handleMouseEnter = () => setIsHovering(true);

  const glowShadow = isHovering
    ? `${-rotateY / 3}px ${rotateX / 3}px 20px 5px rgba(255,0,0,0.6), inset ${rotateY / 5}px ${-rotateX / 5}px 10px rgba(255,0,0,0.3)`
    : "none";

  // Combine lines from both profileWithImages and basicProfileDescriptions
  const allProfileLines = [
    ...(profileWithImages[profile].lines || []),
    ...(basicProfileDescriptions[profile].lines || [])
  ];

  return (
    <div className="relative">
      {/* Open Button */}
      <div className="w-full flex justify-center items-center mb-6">
        <button
          onClick={() => setPopupOpen(true)}
          className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full shadow-lg flex items-center gap-2"
        >
          <FaUserCircle size={24} />
          Social Profiles
        </button>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {popupOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4"
            onClick={() => setPopupOpen(false)}
          >
         <motion.div
  ref={cardRef}
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
  onMouseEnter={handleMouseEnter}
  style={{
    rotateX: rotateX,
    rotateY: rotateY,
    transformPerspective: 1000,
    boxShadow: glowShadow,
    transition: "box-shadow 0.1s ease-out, transform 0.2s ease-out",
  }}
  className="
    bg-gradient-to-br from-blue-50/90 via-cyan-200/70 to-purple-100/90
    dark:from-gray-900/80 dark:via-purple-900/60 dark:to-indigo-800/80
    p-4 sm:p-6 md:p-8 rounded-2xl w-full max-w-[95%] sm:max-w-2xl md:max-w-4xl 
    h-auto sm:h-[80vh] md:h-[450px] text-gray-800 dark:text-gray-200 
    shadow-xl border border-transparent relative flex flex-col sm:flex-row 
    gap-6 overflow-y-auto sm:overflow-hidden
  "
  onClick={(e) => e.stopPropagation()}
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  exit={{ scale: 0.8, opacity: 0 }}
  transition={{ duration: 0.3 }}
>


              {/* Close Button */}
              <button
                onClick={() => setPopupOpen(false)}
                className="absolute top-4 right-4 text-white text-3xl font-bold"
              >
                &times;
              </button>

              {/* Left: Image + Profile Details */}
              <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                <a
                  href={profileWithImages[profile].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <img
                    src={profileWithImages[profile].img}
                    alt={`${profile} preview`}
                    className="w-full h-48 object-cover rounded-lg mb-3 hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <h2 className="text-red-400 text-lg font-semibold mb-2">{profileWithImages[profile].title}</h2>
                <div className="text-white text-sm space-y-1 mb-2">
                  {allProfileLines.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
                <a
                  href={profileWithImages[profile].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline font-semibold"
                >
                  Click to visit profile
                </a>
              </div>

              {/* Right: Buttons */}
              <div className="w-full md:w-40 flex flex-col justify-center gap-4 md:pl-6">
                <div className="text-center text-white/70 mb-2">{hoverText}</div>

                <button
                  onClick={() => {
                    setProfile("instagram");
                    setHoverText("Instagram Profile");
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition duration-300 ${
                    profile === "instagram"
                      ? "bg-pink-400 text-black shadow-md shadow-pink-500/40"
                      : "bg-white/10 hover:bg-pink-300 hover:text-white"
                  }`}
                >
                  <FaInstagram /> Instagram
                </button>

                <button
                  onClick={() => {
                    setProfile("facebook");
                    setHoverText("Facebook Profile");
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition duration-300 ${
                    profile === "facebook"
                      ? "bg-blue-600 text-black shadow-md shadow-blue-500/40"
                      : "bg-white/10 hover:bg-blue-500 hover:text-white"
                  }`}
                >
                  <FaFacebook /> Facebook
                </button>

                <button
                  onClick={() => {
                    setProfile("linkedin");
                    setHoverText("Connect on LinkedIn");
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition duration-300 ${
                    profile === "linkedin"
                      ? "bg-blue-400 text-black shadow-md shadow-blue-500/40"
                      : "bg-white/10 hover:bg-blue-300 hover:text-white"
                  }`}
                >
                  <FaLinkedin /> LinkedIn
                </button>

                <button
                  onClick={() => {
                    setProfile("github");
                    setHoverText("View GitHub Projects");
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition duration-300 ${
                    profile === "github"
                      ? "bg-green-400 text-black shadow-md shadow-green-500/40"
                      : "bg-white/10 hover:bg-green-300 hover:text-white"
                  }`}
                >
                  <FaGithub /> GitHub
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroSocial;
