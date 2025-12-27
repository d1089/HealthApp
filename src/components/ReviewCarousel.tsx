import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  image: string;
  role?: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Health Enthusiast",
    rating: 5,
    comment:
      "NutriiPal has completely transformed my relationship with food. The meal plans are delicious and the nutritional guidance is exceptional!",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Fitness Coach",
    rating: 5,
    comment:
      "Best nutrition program I've ever tried! The personalized meal plans have helped me achieve health goals I never thought possible.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Wellness Advocate",
    rating: 5,
    comment:
      "The holistic approach to nutrition here is amazing. They focus on both physical health and enjoyment of food, which I love!",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const autoPlayTimer = setInterval(nextSlide, 6000);
    return () => clearInterval(autoPlayTimer);
  }, [currentIndex]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="relative overflow-hidden py-10 sm:py-28">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <motion.div
          className="absolute top-20 left-20 text-8xl"
          animate={{ rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          ⭐
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-20 text-8xl"
          animate={{ rotate: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          💬
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-700">
            Real stories from our amazing community
          </p>
        </motion.div> */}

        <div className="relative max-w-4xl mx-auto">
          {/* Review Cards */}
          <div className="relative h-[400px] sm:h-[350px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
              >
                <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/50 h-full flex flex-col justify-between relative overflow-hidden">
                  {/* Quote decoration */}
                  <div className="absolute top-6 right-6 opacity-10">
                    <Quote className="w-20 h-20 text-green-600" />
                  </div>

                  {/* Floating vegetables */}
                  <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <motion.div
                      className="absolute top-10 left-10 text-5xl"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      🥗
                    </motion.div>
                    <motion.div
                      className="absolute bottom-10 right-10 text-5xl"
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 5, repeat: Infinity }}
                    >
                      🥑
                    </motion.div>
                  </div>

                  <div className="relative z-10">
                    {/* Stars */}
                    <div className="flex justify-center mb-6">
                      {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: i * 0.1, type: "spring" }}
                        >
                          <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Comment */}
                    <p className="text-xl sm:text-2xl text-gray-800 italic text-center leading-relaxed mb-8 font-medium">
                      "{reviews[currentIndex].comment}"
                    </p>

                    {/* Reviewer Info */}
                    <div className="flex items-center justify-center gap-4">
                      <motion.img
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.3 }}
                        src={reviews[currentIndex].image}
                        alt={reviews[currentIndex].name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-green-200 shadow-lg"
                      />
                      <div className="text-left">
                        <h3 className="font-bold text-xl text-gray-900">
                          {reviews[currentIndex].name}
                        </h3>
                        {reviews[currentIndex].role && (
                          <p className="text-sm text-emerald-600 font-semibold">
                            {reviews[currentIndex].role}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-0 sm:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-xl rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center border-2 border-green-100 z-20"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6 text-emerald-600" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-0 sm:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-xl rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center border-2 border-green-100 z-20"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6 text-emerald-600" />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {reviews.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 h-3 bg-gradient-to-r from-emerald-500 to-green-600"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { number: "500+", label: "Happy Clients", emoji: "😊" },
            { number: "4.9/5", label: "Average Rating", emoji: "⭐" },
            { number: "95%", label: "Success Rate", emoji: "🎯" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/50 text-center"
            >
              <div className="text-4xl mb-2">{stat.emoji}</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600 font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewCarousel;
