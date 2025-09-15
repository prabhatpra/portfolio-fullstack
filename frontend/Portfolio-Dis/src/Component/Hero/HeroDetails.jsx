import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { roles, scrollingDetails, typewriterSettings } from "./HeroData";

const HeroDetails = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    let scrollPos = 0;
    const speed = 0.5;

    let rafId;
    const step = () => {
      const maxScroll = container.scrollHeight;
      scrollPos += speed;

      if (scrollPos >= maxScroll) {
        setTimeout(() => {
          scrollPos = 0;
          rafId = requestAnimationFrame(step);
        }, 1000);
      } else {
        container.scrollTop = scrollPos;
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="flex flex-col max-w-xl mx-auto md:mx-0 px-2 sm:px-0 items-center md:items-start">
      
      {/* Name – hidden on md & sm */}
     <motion.h1
  className="hidden md:block text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4 whitespace-nowrap"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2 }}
>
  Prabhat Prajapati
</motion.h1>


      {/* Typewriter – center on small & md screens, left on lg+ */}
      <div className="w-full text-center md:text-left">
        <Typewriter roles={roles} />
      </div>

      {/* Scrolling details */}
      <div
        className="overflow-hidden h-48 sm:h-56 md:h-64 relative mt-4 w-full text-center md:text-left"
        ref={scrollRef}
      >
        {scrollingDetails.map((line, i) => (
          <p
            key={i}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-cyan-400 mb-2"
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

const Typewriter = ({ roles }) => {
  const [roleIndex, setRoleIndex] = React.useState(0);
  const [typedText, setTypedText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  const { TYPING_SPEED, DELETING_SPEED, PAUSE_TIME } = typewriterSettings;

  useEffect(() => {
    const currentRole = roles[roleIndex].title;
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
  }, [typedText, isDeleting, roleIndex, roles]);

  return (
    <motion.p
      className="text-sm sm:text-base md:text-2xl font-semibold text-white flex gap-2 justify-center md:justify-start mb-4"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <span>I’m</span>
      <span className="text-cyan-400 font-mono">{typedText}</span>
      <span className="animate-pulse text-cyan-400">|</span>
    </motion.p>
  );
};

export default HeroDetails;
