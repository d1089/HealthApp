import React, { useState, ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Info, X } from "lucide-react";
import { openExternal } from "../utils/openExternal";
import { URLS } from "../constants/urls";

interface FormData {
  gender: "male" | "female" | "";
  waist: string;
  waistUnit: "in" | "cm";
  height: string;
  heightUnit: "in" | "cm";
  neck: string;
  neckUnit: "in" | "cm";
  hip?: string;
  hipUnit?: "in" | "cm";
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const toInches = (value: string, unit: "in" | "cm") => {
  const v = parseFloat(value);
  if (isNaN(v)) return NaN;
  return unit === "cm" ? v / 2.54 : v;
};

export default function BodyFatCalculator() {
  const [formData, setFormData] = useState<FormData>({
    gender: "",
    waist: "",
    waistUnit: "in",
    height: "",
    heightUnit: "cm",
    neck: "",
    neckUnit: "in",
    hip: "",
    hipUnit: "in",
  });

  const [bodyFat, setBodyFat] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value } as FormData));
  };

  const calculateBodyFat = () => {
    const {
      gender,
      waist,
      waistUnit,
      neck,
      neckUnit,
      height,
      heightUnit,
      hip,
      hipUnit,
    } = formData;

    const waistIn = toInches(waist, waistUnit);
    const neckIn = toInches(neck, neckUnit);
    const heightIn = toInches(height, heightUnit);
    const hipIn = hip ? toInches(hip, hipUnit || "in") : NaN;

    if (
      !gender ||
      isNaN(waistIn) ||
      isNaN(neckIn) ||
      isNaN(heightIn) ||
      heightIn <= 0
    ) {
      setBodyFat(null);
      return;
    }

    let result: number;

    if (gender === "male") {
      const diff = waistIn - neckIn;
      if (diff <= 0) {
        setBodyFat(null);
        return;
      }
      result = 86.01 * Math.log10(diff) - 70.041 * Math.log10(heightIn) + 36.76;
    } else {
      if (isNaN(hipIn)) {
        setBodyFat(null);
        return;
      }
      const sum = waistIn + hipIn - neckIn;
      if (sum <= 0) {
        setBodyFat(null);
        return;
      }
      result =
        163.205 * Math.log10(sum) - 97.684 * Math.log10(heightIn) - 78.387;
    }

    setBodyFat(result.toFixed(2));
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
            Body Fat Calculator
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
            Calculate your body fat percentage using the U.S. Navy method
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
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Enter Your Measurements
                </h2>
              </div>

              {/* Gender */}
              <label className="block mb-6">
                <span className="text-gray-700 font-semibold mb-2 block">
                  Gender*
                </span>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white/50 backdrop-blur transition-all"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </label>

              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="text-sm text-emerald-600 hover:text-emerald-700 underline mb-6 flex items-center gap-1"
              >
                <Info className="w-4 h-4" />
                Why only two genders?
              </button>

              {/* Waist */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="col-span-2">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Waist*
                  </label>
                  <input
                    type="number"
                    name="waist"
                    value={formData.waist}
                    onChange={handleChange}
                    placeholder="Enter waist"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white/50 backdrop-blur transition-all"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Unit
                  </label>
                  <select
                    name="waistUnit"
                    value={formData.waistUnit}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-200 rounded-xl px-3 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white/50 backdrop-blur transition-all"
                  >
                    <option value="in">in</option>
                    <option value="cm">cm</option>
                  </select>
                </div>
              </div>

              {/* Height */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="col-span-2">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Height*
                  </label>
                  <input
                    type="number"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    placeholder="Enter height"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white/50 backdrop-blur transition-all"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Unit
                  </label>
                  <select
                    name="heightUnit"
                    value={formData.heightUnit}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-200 rounded-xl px-3 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white/50 backdrop-blur transition-all"
                  >
                    <option value="cm">cm</option>
                    <option value="in">in</option>
                  </select>
                </div>
              </div>

              {/* Neck */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="col-span-2">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Neck Circumference*
                  </label>
                  <input
                    type="number"
                    name="neck"
                    value={formData.neck}
                    onChange={handleChange}
                    placeholder="Enter neck"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white/50 backdrop-blur transition-all"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Unit
                  </label>
                  <select
                    name="neckUnit"
                    value={formData.neckUnit}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-200 rounded-xl px-3 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white/50 backdrop-blur transition-all"
                  >
                    <option value="in">in</option>
                    <option value="cm">cm</option>
                  </select>
                </div>
              </div>

              {/* Hip for females */}
              {formData.gender === "female" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="grid grid-cols-3 gap-3 mb-6"
                >
                  <div className="col-span-2">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Hip Circumference*
                    </label>
                    <input
                      type="number"
                      name="hip"
                      value={formData.hip}
                      onChange={handleChange}
                      placeholder="Enter hip"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white/50 backdrop-blur transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Unit
                    </label>
                    <select
                      name="hipUnit"
                      value={formData.hipUnit}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-200 rounded-xl px-3 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white/50 backdrop-blur transition-all"
                    >
                      <option value="in">in</option>
                      <option value="cm">cm</option>
                    </select>
                  </div>
                </motion.div>
              )}

              <motion.button
                onClick={calculateBodyFat}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Calculate Now 📊
              </motion.button>
            </div>

            {/* Right Section - Result */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 md:p-10 flex flex-col justify-center relative overflow-hidden">
              {/* Floating vegetables */}
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
                  📏
                </motion.div>
              </div>

              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">
                  Your Body Fat Percentage
                </h2>
                <motion.div
                  className="bg-white/90 backdrop-blur-xl border-2 border-green-200 rounded-2xl py-10 text-center mb-6 shadow-xl"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-6xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    {bodyFat ?? "-"}
                  </div>
                  {bodyFat && (
                    <div className="text-3xl font-bold text-gray-600 mt-2">
                      %
                    </div>
                  )}
                </motion.div>

                <p className="text-gray-700 mb-8 text-center leading-relaxed">
                  Body fat percentage is a key indicator of good health and
                  fitness level.
                </p>

                <div className="bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-lg text-center border border-green-100">
                  <p className="font-semibold text-gray-900 mb-2 text-lg">
                    Ready to transform your health?
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    Join our community for personalized nutrition guidance
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
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl shadow-2xl p-8 max-w-lg relative border-2 border-green-100"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>

              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Info className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-2xl font-bold mb-4 text-center text-gray-900">
                Why only two genders?
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-center">
                This calculator uses the U.S. Navy method which has sex-specific
                constants based on biological differences in body composition.
                The formula was developed using binary sex categories for
                physiological measurements.
              </p>
              <motion.button
                onClick={() => setShowModal(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all"
              >
                Got it, thanks!
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
