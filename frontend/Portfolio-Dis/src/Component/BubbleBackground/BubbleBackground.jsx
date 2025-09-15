// BubbleBackground.jsx
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const createBubble = () => ({
  id: Math.random(),
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
  vx: (Math.random() - 0.5) * 1.5,
  vy: (Math.random() - 0.5) * 1.5,
  radius: 15 + Math.random() * 25,
  speedBoost: 0,
});

const detectCollision = (a, b) => {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy) < a.radius + b.radius;
};

const bounce = (a, b) => {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  const angle = Math.atan2(dy, dx);
  const speed = 2;

  a.vx = Math.cos(angle) * speed * (1 + a.speedBoost);
  a.vy = Math.sin(angle) * speed * (1 + a.speedBoost);
  b.vx = -Math.cos(angle) * speed * (1 + b.speedBoost);
  b.vy = -Math.sin(angle) * speed * (1 + b.speedBoost);

  a.speedBoost = 1;
  b.speedBoost = 1;
};

const Bubble = ({ bubble }) => (
  <motion.div
    animate={{
      x: bubble.x,
      y: bubble.y,
      scale: 1 + Math.sin(bubble.id + bubble.y * 0.01) * 0.02,
    }}
    transition={{ duration: 0.05, ease: "linear" }}
    style={{
      position: "absolute",
      width: bubble.radius * 2,
      height: bubble.radius * 2,
      borderRadius: "50%",
      backgroundColor: "transparent",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      boxShadow:
        "inset -4px -4px 10px rgba(255, 255, 255, 0.1), 0 0 10px rgba(0, 153, 255, 0.2)",
      pointerEvents: "none",
    }}
  />
);

const BubbleBackground = () => {
  const [bubbles, setBubbles] = useState([]);
  const animationRef = useRef();

  const generateBubbles = () => {
    const width = window.innerWidth;
    let count = 10;
    if (width < 500) count = 6;
    else if (width < 768) count = 8;
    else if (width < 1024) count = 12;
    else count = 16;

    setBubbles(Array.from({ length: count }, createBubble));
  };

  useEffect(() => {
    generateBubbles();
    window.addEventListener("resize", generateBubbles);
    return () => window.removeEventListener("resize", generateBubbles);
  }, []);

  useEffect(() => {
    const update = () => {
      setBubbles((prev) => {
        const next = prev.map((b) => ({ ...b }));
        next.forEach((b) => {
          b.x += b.vx * (1 + b.speedBoost);
          b.y += b.vy * (1 + b.speedBoost);

          if (b.speedBoost > 0) {
            b.speedBoost -= 0.05;
            if (b.speedBoost < 0) b.speedBoost = 0;
          }

          if (b.x <= 0) b.vx = Math.abs(b.vx);
          if (b.x >= window.innerWidth - b.radius * 2) b.vx = -Math.abs(b.vx);
          if (b.y <= 0) b.vy = Math.abs(b.vy);
          if (b.y >= window.innerHeight - b.radius * 2) b.vy = -Math.abs(b.vy);
        });

        for (let i = 0; i < next.length; i++) {
          for (let j = i + 1; j < next.length; j++) {
            if (detectCollision(next[i], next[j])) bounce(next[i], next[j]);
          }
        }
        return next;
      });
      animationRef.current = requestAnimationFrame(update);
    };

    animationRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {bubbles.map((b) => (
        <Bubble key={b.id} bubble={b} />
      ))}
    </div>
  );
};

export default BubbleBackground;
