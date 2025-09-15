// ProjectCard.jsx
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCommentDots, FaImages } from "react-icons/fa";

const ProjectCard = ({
  title,
  description,
  image,
  tech = [],
  liveLink,
  githubLink,
  feedbackLink,
  screenshotsLink,
}) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardRef = useRef(null);

  // Mouse move for 3D effect
  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRotateY(((x / rect.width) - 0.5) * 30);
    setRotateX(((y / rect.height) - 0.5) * -30);
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <>
      {/* Card */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1000,
          boxShadow: isHovering
            ? `0 -10px 20px rgba(0,153,255,0.5), 0 10px 20px rgba(255,0,85,0.4), inset ${rotateY / 5}px ${-rotateX / 5}px 12px rgba(255,255,255,0.08)`
            : "none",
          transition: "box-shadow 0.15s ease-out, transform 0.2s ease-out",
        }}
        className="relative bg-white/5 dark:from-gray-900/80 dark:via-purple-900/60 dark:to-indigo-800/70 bg-gradient-to-br border border-white/10 rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:scale-[1.03] transition-all duration-500"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.4 }}
      >
        {/* Image */}
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-2xl" />

        {/* Content */}
        <div className="p-5 text-white">
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <p className="text-white/80 text-sm">{description}</p>

          {/* Tech tags */}
          {tech.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4 text-xs">
              {tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 shadow-md hover:scale-105 transition-all duration-300"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {/* Links */}
          <div className="flex justify-between items-center mt-6">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-cyan-400 hover:text-white hover:underline"
              >
                <FaExternalLinkAlt /> Live
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-300 hover:text-white hover:underline"
              >
                <FaGithub /> GitHub
              </a>
            )}
          </div>

          {/* View Full Project Button */}
          <div className="mt-8 text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="relative px-6 py-2.5 rounded-full text-white border border-white/20 overflow-hidden group transition-all duration-300"
            >
              <span className="relative z-10">View Full Project</span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500 to-purple-600 transition-opacity duration-500 rounded-full blur-sm"></span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-500 blur-lg"></span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Modal Popup */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-sm p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformPerspective: 1000,
                boxShadow: isHovering
                  ? `0 -10px 20px rgba(0,153,255,0.5), 0 10px 20px rgba(255,0,85,0.4), inset ${rotateY / 5}px ${-rotateX / 5}px 12px rgba(255,255,255,0.08)`
                  : "none",
                transition: "box-shadow 0.15s ease-out, transform 0.2s ease-out",
              }}
              className="bg-gradient-to-br dark:from-gray-900/80 dark:via-purple-900/60 dark:to-indigo-800/70 p-6 rounded-2xl w-full max-w-3xl relative flex flex-col gap-4 overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 text-3xl font-bold text-white"
              >
                &times;
              </button>

              {/* Image */}
              <img src={image} alt={title} className="w-full h-64 object-cover rounded-xl" />

              {/* Title & Description */}
              <h2 className="text-2xl font-bold text-white">{title}</h2>
              <p className="text-white/80">{description}</p>

              {/* Tech tags */}
              {tech.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-sm shadow-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-4">
                {liveLink && <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2 rounded-full bg-blue-500 text-white text-center hover:bg-blue-600">Live Project</a>}
                {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2 rounded-full bg-gray-700 text-white text-center hover:bg-gray-800">View Code</a>}
                {feedbackLink && <a href={feedbackLink} target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2 rounded-full bg-green-500 text-white text-center hover:bg-green-600">Feedback</a>}
                {screenshotsLink && <a href={screenshotsLink} target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2 rounded-full bg-purple-500 text-white text-center hover:bg-purple-600">Screenshots</a>}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
