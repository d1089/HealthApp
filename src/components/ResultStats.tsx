import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Animated Counter Component
const AnimatedCounter = ({
  value,
  duration = 2000,
}: {
  value: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  // Extract number from string (e.g., "500+" -> 500, "4.9/5" -> 4.9, "85%" -> 85)
  const extractNumber = (str: string): number => {
    const match = str.match(/[\d.]+/);
    return match ? parseFloat(match[0]) : 0;
  };

  // Get suffix from string (e.g., "500+" -> "+", "85%" -> "%")
  const getSuffix = (str: string): string => {
    if (str.includes("/")) return `/${str.split("/")[1]}`;
    if (str.includes("+")) return "+";
    if (str.includes("%")) return "%";
    return "";
  };

  const targetNumber = extractNumber(value);
  const suffix = getSuffix(value);
  const isDecimal = value.includes(".");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const startTime = Date.now();
          const endTime = startTime + duration;

          const animate = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = targetNumber * easeOutQuart;

            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(targetNumber);
            }
          };

          animate();
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [targetNumber, duration, hasAnimated]);

  const displayValue = isDecimal
    ? count.toFixed(1)
    : Math.floor(count).toLocaleString();

  return (
    <div ref={elementRef}>
      {displayValue}
      {suffix}
    </div>
  );
};

const ResultStats = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
    >
      {[
        { number: "500+", label: "Lives Transformed", emoji: "✨" },
        { number: "85%", label: "Reduced Medication", emoji: "💊" },
        { number: "4.9/5", label: "Average Rating", emoji: "🌟" },
        { number: "95%", label: "Sustained Results", emoji: "🎯" },
      ].map((stat, index) => (
        <motion.div
          key={stat.label}
          variants={fadeUp}
          whileHover={{ scale: 1.05, y: -5 }}
          className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-green-100 text-center"
        >
          <motion.div
            className="text-3xl mb-2"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
          >
            {stat.emoji}
          </motion.div>
          <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
            <AnimatedCounter value={stat.number} duration={2000} />
          </div>
          <div className="text-sm text-gray-600 font-semibold">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
export default ResultStats;
