import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { roles, scrollingDetails, typewriterSettings } from "./HeroData";

const HeroDetails = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    let scrollPos = 0;
    const speed = 0.5; // pixels per frame

    // Total scroll distance = height of content + container
    const totalScroll = content.offsetHeight + container.offsetHeight;

    const step = () => {
      scrollPos += speed;

      if (scrollPos >= totalScroll) {
        scrollPos = 0; // reset to start
      }

      // Move the whole content block
      content.style.transform = `translateY(${container.offsetHeight - scrollPos}px)`;

      requestAnimationFrame(step);
    };

    const rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="flex flex-col max-w-xl mx-auto md:mx-0 px-2 sm:px-0 items-center md:items-start">
      {/* Name */}
      <motion.h1
        className="hidden md:block text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4 whitespace-nowrap"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Prabhat Prajapati
      </motion.h1>

      {/* Typewriter */}
      <div className="w-full text-center md:text-left">
        <Typewriter roles={roles} />
      </div>

      {/* Scrolling details */}
      <div
        ref={containerRef}
        className="overflow-hidden h-64 sm:h-72 md:h-80 relative mt-4 w-full text-center md:text-left"
      >
        <div ref={contentRef}>
          {scrollingDetails.map((line, i) => (
            <p
              key={i}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-yellow-700 dark:text-cyan-400 mb-2"
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const Typewriter = ({ roles }) => {
  const [roleIndex, setRoleIndex] = React.useState(0);
  const [typedText, setTypedText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  const { TYPING_SPEED, DELETING_SPEED, PAUSE_TIME } = typewriterSettings;

  React.useEffect(() => {
    const currentRole = roles[roleIndex]?.title || "";
    if (!currentRole) return;

    let timer;

    if (!isDeleting && typedText.length < currentRole.length) {
      timer = setTimeout(
        () => setTypedText(currentRole.slice(0, typedText.length + 1)),
        TYPING_SPEED
      );
    } else if (!isDeleting && typedText.length === currentRole.length) {
      timer = setTimeout(() => setIsDeleting(true), PAUSE_TIME);
    } else if (isDeleting && typedText.length > 0) {
      timer = setTimeout(
        () => setTypedText(currentRole.slice(0, typedText.length - 1)),
        DELETING_SPEED
      );
    } else if (isDeleting && typedText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex, roles, TYPING_SPEED, DELETING_SPEED, PAUSE_TIME]);

  return (
    <motion.p
      className="text-sm sm:text-base md:text-2xl font-semibold text-white flex gap-2 justify-center md:justify-start mb-4"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <span className="text-blue-500 font-extrabold">I’m</span>
      <span className="text-pink-400 dark:text-cyan-400 font-mono">{typedText}</span>
      <span className="animate-pulse text-cyan-400">|</span>
    </motion.p>
  );
};

export default HeroDetails;
