import React, { useState } from "react";
import { motion } from "framer-motion";
import { Dumbbell, TrendingUp, Info } from "lucide-react";
import { openExternal } from "../utils/openExternal";
import { URLS } from "../constants/urls";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const OneRmCalculator: React.FC = () => {
  const [exercise, setExercise] = useState<string>("");
  const [weight, setWeight] = useState<number | "">("");
  const [unit, setUnit] = useState<"kg" | "lb">("kg");
  const [reps, setReps] = useState<number | "">("");
  const [result, setResult] = useState<number | null>(null);

  // Brzycki formula for 1RM
  const calculate1RM = () => {
    if (!weight || !reps) return;
    const rm = Number(weight) * (36 / (37 - Number(reps)));
    setResult(Math.round(rm));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden pt-24 pb-20">
      {/* Fresh Vegetables Background Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-5">
        <div className="absolute top-10 left-10 text-8xl">🥬</div>
        <div className="absolute top-40 right-20 text-7xl">🥕</div>
        <div className="absolute bottom-32 left-32 text-9xl">🥗</div>
        <div className="absolute top-1/3 right-1/4 text-6xl">🥑</div>
        <div className="absolute bottom-20 right-40 text-7xl">🍅</div>
        <div className="absolute top-2/3 left-20 text-8xl">🥒</div>
      </div>

      {/* Animated gradient blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20 z-0">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4">
            1RM Calculator
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
            Calculate your One Repetition Maximum using the Brzycki formula
          </p>
        </motion.div>

        {/* Main Calculator Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/50"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Section - Form */}
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Dumbbell className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Enter Your Lift Details
                </h2>
              </div>

              <div className="space-y-6">
                {/* Exercise Dropdown */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Select Exercise*
                  </label>
                  <select
                    value={exercise}
                    onChange={(e) => setExercise(e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white/50 backdrop-blur transition-all"
                  >
                    <option value="">-- Choose Exercise --</option>
                    <option value="bench">🏋️ Bench Press</option>
                    <option value="squat">🦵 Squat</option>
                    <option value="deadlift">💪 Deadlift</option>
                    <option value="overhead">🙌 Overhead Press</option>
                  </select>
                </div>

                {/* Weight Input */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Weight Lifted*
                    </label>
                    <input
                      type="number"
                      value={weight}
                      onChange={(e) =>
                        setWeight(e.target.value ? Number(e.target.value) : "")
                      }
                      placeholder="Enter weight"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white/50 backdrop-blur transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Unit
                    </label>
                    <select
                      value={unit}
                      onChange={(e) => setUnit(e.target.value as "kg" | "lb")}
                      className="w-full border-2 border-gray-200 rounded-xl px-3 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white/50 backdrop-blur transition-all"
                    >
                      <option value="kg">kg</option>
                      <option value="lb">lb</option>
                    </select>
                  </div>
                </div>

                {/* Reps Input */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Repetitions*
                  </label>
                  <input
                    type="number"
                    value={reps}
                    onChange={(e) =>
                      setReps(e.target.value ? Number(e.target.value) : "")
                    }
                    placeholder="How many reps did you complete?"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white/50 backdrop-blur transition-all"
                  />
                </div>

                <motion.button
                  onClick={calculate1RM}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Calculate 1RM 💪
                </motion.button>
              </div>
            </div>

            {/* Right Section - Results */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 md:p-10 flex flex-col justify-center relative overflow-hidden">
              {/* Floating emojis */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <motion.div
                  className="absolute top-10 right-10 text-6xl"
                  animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  💪
                </motion.div>
                <motion.div
                  className="absolute bottom-10 left-10 text-6xl"
                  animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  🏋️
                </motion.div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="w-6 h-6 text-emerald-600" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    Your 1RM Result
                  </h3>
                </div>

                <motion.div
                  className="bg-white/90 backdrop-blur-xl border-2 border-green-200 rounded-2xl py-10 text-center mb-6 shadow-xl"
                  whileHover={{ scale: 1.02 }}
                >
                  {result ? (
                    <>
                      <div className="text-6xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        {result}
                      </div>
                      <div className="text-3xl font-bold text-gray-600 mt-2">
                        {unit}
                      </div>
                    </>
                  ) : (
                    <div className="text-gray-400 text-xl px-4">
                      Your result will appear here
                    </div>
                  )}
                </motion.div>

                {/* Info Box */}
                <div className="bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-green-100">
                  <div className="flex items-start gap-3 mb-3">
                    <Info className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <h4 className="font-bold text-gray-900">What is 1RM?</h4>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Your{" "}
                    <span className="font-semibold text-emerald-600">
                      One Repetition Maximum (1RM)
                    </span>{" "}
                    is the maximum weight you can lift for a single repetition
                    of an exercise. It's a key metric for determining your
                    strength levels and planning your training programs.
                  </p>
                </div>

                {/* CTA */}
                <div className="bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-lg text-center border border-green-100 mt-6">
                  <p className="font-semibold text-gray-900 mb-2 text-lg">
                    Track your progress!
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    Get personalized strength training and nutrition plans
                  </p>
                  <motion.button
                    onClick={() => openExternal(URLS.GET_STARTED)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition-all"
                  >
                    Start Your Journey 🚀
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/50"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Understanding Your 1RM
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
              <div className="text-4xl mb-3 text-center">📈</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                Track Progress
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed text-center">
                Monitor your strength gains over time by regularly testing your
                1RM for key lifts.
              </p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <div className="text-4xl mb-3 text-center">🎯</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                Set Training Zones
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed text-center">
                Use your 1RM to calculate appropriate weights for different rep
                ranges and training goals.
              </p>
            </div>
            <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
              <div className="text-4xl mb-3 text-center">💡</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                Plan Workouts
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed text-center">
                Design effective training programs based on percentages of your
                1RM for optimal results.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OneRmCalculator;
