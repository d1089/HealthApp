import React, { useState } from "react";
import { motion } from "framer-motion";
import { Activity, Zap, TrendingUp } from "lucide-react";
import { openExternal } from "../utils/openExternal";
import { URLS } from "../constants/urls";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const BMRCalculator: React.FC = () => {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [exercise, setExercise] = useState<string>("1.2");
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [bmr, setBmr] = useState<number | null>(null);
  const [tdee, setTdee] = useState<number | null>(null);

  const calculateBMR = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    const a = parseFloat(age);

    if (isNaN(h) || isNaN(w) || isNaN(a)) {
      setBmr(null);
      setTdee(null);
      return;
    }

    let bmrValue: number;
    if (gender === "male") {
      bmrValue = 88.362 + 13.397 * w + 4.799 * h - 5.677 * a;
    } else {
      bmrValue = 447.593 + 9.247 * w + 3.098 * h - 4.33 * a;
    }

    const tdeeValue = bmrValue * parseFloat(exercise);

    setBmr(Math.round(bmrValue));
    setTdee(Math.round(tdeeValue));
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
            BMR & TDEE Calculator
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
            Calculate your Basal Metabolic Rate and Total Daily Energy
            Expenditure
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
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Enter Your Details
                </h2>
              </div>

              <div className="space-y-6">
                {/* Gender */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Gender*
                  </label>
                  <select
                    value={gender}
                    onChange={(e) =>
                      setGender(e.target.value as "male" | "female")
                    }
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white/50 backdrop-blur transition-all"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                {/* Exercise */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Activity Level*
                  </label>
                  <select
                    value={exercise}
                    onChange={(e) => setExercise(e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white/50 backdrop-blur transition-all"
                  >
                    <option value="1.2">Sedentary (little/no exercise)</option>
                    <option value="1.375">
                      Lightly active (1-3 days/week)
                    </option>
                    <option value="1.55">
                      Moderately active (3-5 days/week)
                    </option>
                    <option value="1.725">Very active (6-7 days/week)</option>
                    <option value="1.9">
                      Extra active (hard daily exercise)
                    </option>
                  </select>
                </div>

                {/* Height */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Height (cm)*
                  </label>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="e.g. 170"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white/50 backdrop-blur transition-all"
                  />
                </div>

                {/* Weight */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Weight (kg)*
                  </label>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="e.g. 70"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white/50 backdrop-blur transition-all"
                  />
                </div>

                {/* Age */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Age*
                  </label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="e.g. 25"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white/50 backdrop-blur transition-all"
                  />
                </div>

                <motion.button
                  onClick={calculateBMR}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Calculate Now 🔥
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
                  ⚡
                </motion.div>
              </div>

              <div className="relative z-10 space-y-6">
                {/* BMR Result */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-6 h-6 text-emerald-600" />
                    <h3 className="text-xl font-bold text-gray-900">
                      Your BMR
                    </h3>
                  </div>
                  <motion.div
                    className="bg-white/90 backdrop-blur-xl border-2 border-emerald-200 rounded-2xl py-6 text-center shadow-lg"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                      {bmr ?? "--"}
                    </div>
                    {bmr && (
                      <div className="text-2xl font-bold text-gray-600 mt-1">
                        kcal/day
                      </div>
                    )}
                  </motion.div>
                  <p className="text-sm text-gray-600 mt-2 text-center">
                    Calories burned at rest
                  </p>
                </div>

                {/* TDEE Result */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">
                      Your TDEE
                    </h3>
                  </div>
                  <motion.div
                    className="bg-white/90 backdrop-blur-xl border-2 border-blue-200 rounded-2xl py-6 text-center shadow-lg"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {tdee ?? "--"}
                    </div>
                    {tdee && (
                      <div className="text-2xl font-bold text-gray-600 mt-1">
                        kcal/day
                      </div>
                    )}
                  </motion.div>
                  <p className="text-sm text-gray-600 mt-2 text-center">
                    Total daily energy expenditure
                  </p>
                </div>

                {/* Info Box */}
                <div className="bg-white/90 backdrop-blur-xl p-5 rounded-2xl shadow-lg border border-green-100">
                  <p className="text-sm text-gray-700 leading-relaxed text-center">
                    <span className="font-bold text-emerald-600">BMR</span> is
                    your body's calorie burn at rest.
                    <span className="font-bold text-blue-600"> TDEE</span>{" "}
                    includes your daily activity level.
                  </p>
                </div>

                {/* CTA */}
                <div className="bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-lg text-center border border-green-100">
                  <p className="font-semibold text-gray-900 mb-2 text-lg">
                    Ready to reach your goals?
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    Get personalized nutrition plans tailored to your needs
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

        {/* Info Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/50"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Understanding Your Results
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  What is BMR?
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Your Basal Metabolic Rate (BMR) is the number of calories your
                body needs to maintain basic physiological functions like
                breathing, circulation, and cell production while at complete
                rest.
              </p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  What is TDEE?
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Your Total Daily Energy Expenditure (TDEE) is your BMR
                multiplied by your activity level. It represents the total
                calories you burn in a day, including exercise and daily
                activities.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BMRCalculator;
