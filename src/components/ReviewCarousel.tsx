import React, { useState } from "react";
import {
  Star,
  TrendingDown,
  Heart,
  CheckCircle,
  Award,
  X,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ReviewCarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  interface Review {
    id: number;
    name: string;
    age: number;
    role: string;
    rating: number;
    comment: string;
    // image: string;
    beforeAfter: {
      hba1c: { before: string; after: string };
      weight: { before: string; after: string };
      medications: { before: string; after: string };
    };
    timeframe: string;
    achievement: string;
  }

  const reviews: Review[] = [
    {
      id: 1,
      name: "Namrata Thakar",
      age: 39,
      role: "IT Professional, Mumbai",
      rating: 5,
      comment:
        "I was on 3 medications for my diabetes. After 6 months with NutriiPal, I'm completely medicine-free! My HbA1c dropped from 8.5 to 5.8.",
      // image:
      //   "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
      beforeAfter: {
        hba1c: { before: "10.5%", after: "7.8%" },
        weight: { before: "92kg", after: "78kg" },
        medications: { before: "3 drugs", after: "0 drugs" },
      },
      timeframe: "3 months",
      achievement: "Medicine-Free",
    },
    {
      id: 2,
      name: "Anshul Chandwani",
      age: 38,
      role: "Teacher, Mumbai",
      rating: 5,
      comment:
        "NutriiPal taught me how to eat my favorite dal-rice without spiking my sugar. Cured from grade 3 fatty lever and lost 15kg with stopping all diabetes medications!",
      // image:
      //   "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
      beforeAfter: {
        hba1c: { before: "13.6%", after: "6.4%" },
        weight: { before: "78kg", after: "63kg" },
        medications: { before: "3 drugs", after: "0 drugs" },
      },
      timeframe: "3 months",
      achievement: "Fatty Liver Reversed",
    },
    {
      id: 3,
      name: "Ketan Parsiya",
      age: 35,
      role: "Business Owner, Ahmedabad",
      rating: 5,
      comment:
        "From taking insulin daily to zero medications in 8 months. The holistic approach actually works! My energy levels are amazing now.",
      // image:
      //   "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
      beforeAfter: {
        hba1c: { before: "9%", after: "6.5%" },
        weight: { before: "95kg", after: "82kg" },
        medications: { before: "Insulin", after: "0 drugs" },
      },
      timeframe: "3 months",
      achievement: "Insulin-Free",
    },
    {
      id: 4,
      name: "Bhavesh",
      age: 36,
      role: "Mumbai",
      rating: 5,
      comment:
        "From taking insulin daily to zero medications in 3 months. The holistic approach actually works! My energy levels are amazing now.",
      // image:
      //   "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
      beforeAfter: {
        hba1c: { before: "15.7%", after: "6.5%" },
        weight: { before: "95kg", after: "82kg" },
        medications: { before: "Insulin", after: "0 drugs" },
      },
      timeframe: "3 months",
      achievement: "Medication-Free",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
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
    // <div className="relative max-w-4xl mx-auto">
    //   <div className="relative h-[450px] sm:h-[400px]">
    //     <AnimatePresence initial={false} custom={direction} mode="wait">
    //       <motion.div
    //         key={currentIndex}
    //         custom={direction}
    //         variants={slideVariants}
    //         initial="enter"
    //         animate="center"
    //         exit="exit"
    //         transition={{
    //           x: { type: "spring", stiffness: 300, damping: 30 },
    //           opacity: { duration: 0.2 },
    //         }}
    //         className="absolute inset-0"
    //       >
    //         <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/50 h-full flex flex-col justify-between relative overflow-hidden">
    //           <div className="absolute top-6 right-6 opacity-10">
    //             <Quote className="w-20 h-20 text-green-600" />
    //           </div>

    //           <div className="relative z-10">
    //             {/* Badge */}
    //             <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4">
    //               <span className="text-sm font-bold text-green-700">
    //                 ✓ Medicine-Free Success
    //               </span>
    //             </div>

    //             {/* Stars */}
    //             <div className="flex justify-center mb-6">
    //               {[...Array(reviews[currentIndex].rating)].map((_, i) => (
    //                 <motion.div
    //                   key={i}
    //                   initial={{ scale: 0, rotate: -180 }}
    //                   animate={{ scale: 1, rotate: 0 }}
    //                   transition={{ delay: i * 0.1, type: "spring" }}
    //                 >
    //                   <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
    //                 </motion.div>
    //               ))}
    //             </div>

    //             {/* Comment */}
    //             <p className="text-xl sm:text-2xl text-gray-800 italic text-center leading-relaxed mb-8 font-medium">
    //               "{reviews[currentIndex].comment}"
    //             </p>

    //             {/* Reviewer Info */}
    //             <div className="flex items-center justify-center gap-4">
    //               <motion.img
    //                 initial={{ scale: 0 }}
    //                 animate={{ scale: 1 }}
    //                 transition={{ type: "spring", delay: 0.3 }}
    //                 src={reviews[currentIndex].image}
    //                 alt={reviews[currentIndex].name}
    //                 className="w-16 h-16 rounded-full object-cover border-4 border-green-200 shadow-lg"
    //               />
    //               <div className="text-left">
    //                 <h3 className="font-bold text-xl text-gray-900">
    //                   {reviews[currentIndex].name}
    //                 </h3>
    //                 <p className="text-sm text-emerald-600 font-semibold">
    //                   {reviews[currentIndex].role}
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </motion.div>
    //     </AnimatePresence>
    //   </div>

    //   {/* Navigation Buttons */}
    //   <motion.button
    //     onClick={prevSlide}
    //     whileHover={{ scale: 1.1, x: -5 }}
    //     whileTap={{ scale: 0.9 }}
    //     className="absolute left-0 sm:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-xl rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center border-2 border-green-100 z-20"
    //   >
    //     <ChevronLeft className="w-6 h-6 text-emerald-600" />
    //   </motion.button>

    //   <motion.button
    //     onClick={nextSlide}
    //     whileHover={{ scale: 1.1, x: 5 }}
    //     whileTap={{ scale: 0.9 }}
    //     className="absolute right-0 sm:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-xl rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center border-2 border-green-100 z-20"
    //   >
    //     <ChevronRight className="w-6 h-6 text-emerald-600" />
    //   </motion.button>

    //   {/* Dots Indicator */}
    //   <div className="flex justify-center mt-8 space-x-3">
    //     {reviews.map((_, index) => (
    //       <motion.button
    //         key={index}
    //         onClick={() => {
    //           setDirection(index > currentIndex ? 1 : -1);
    //           setCurrentIndex(index);
    //         }}
    //         whileHover={{ scale: 1.2 }}
    //         whileTap={{ scale: 0.9 }}
    //         className={`rounded-full transition-all ${
    //           index === currentIndex
    //             ? "w-8 h-3 bg-gradient-to-r from-emerald-500 to-green-600"
    //             : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
    //         }`}
    //       />
    //     ))}
    //   </div>
    // </div>

    <div className="relative max-w-4xl mx-auto">
      {/* Timeline Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-300 via-emerald-400 to-green-300 hidden md:block" />

      {reviews.map((review, index) => (
        <motion.div
          key={review.id}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className={`relative flex items-center gap-8 mb-12 ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          {/* Timeline Dot */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full border-4 border-white shadow-lg z-10" />

          {/* Content */}
          <div className="flex-1">
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-xl border-2 border-green-100 hover:border-green-300 transition-all"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {/* <img
                    src={review.image}
                    alt={review.name}
                    className="w-16 h-16 rounded-full border-4 border-green-200"
                  /> */}
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">
                      {review.name}
                    </h3>
                    <p className="text-sm text-emerald-600">{review.role}</p>
                  </div>
                </div>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                  {review.timeframe}
                </div>
              </div>

              {/* Stats Row */}
              <div className="flex gap-3 mb-4">
                <div className="flex-1 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-3 text-center border border-red-100">
                  <div className="text-xs text-gray-600 mb-1">Before</div>
                  <div className="font-bold text-red-600">
                    {review.beforeAfter.hba1c.before}
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-2xl">→</div>
                </div>
                <div className="flex-1 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-3 text-center border border-green-200">
                  <div className="text-xs text-gray-600 mb-1">After</div>
                  <div className="font-bold text-green-600">
                    {review.beforeAfter.hba1c.after}
                  </div>
                </div>
              </div>

              {/* Comment */}
              <p className="text-gray-700 italic mb-3">"{review.comment}"</p>

              {/* Achievement Badge */}
              <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-bold inline-flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                {review.achievement}
              </div>
            </motion.div>
          </div>

          {/* Empty space for alternating layout */}
          <div className="hidden md:block flex-1" />
        </motion.div>
      ))}
    </div>
  );
};
export default ReviewCarouselComponent;
