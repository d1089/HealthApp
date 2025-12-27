import React, { useState } from "react";
import { ArrowRight, Leaf, Apple, Users, Send } from "lucide-react";
import { motion } from "framer-motion";
import ReviewCarousel from "../components/ReviewCarousel";
import { openExternal } from "../utils/openExternal";
import { URLS } from "../constants/urls";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Home = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = () => {
    if (email) {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <div className="w-full bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden">
      {/* Fresh Vegetables Background Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-5">
        <div className="absolute top-10 left-10 text-8xl">🥬</div>
        <div className="absolute top-40 right-20 text-7xl">🥕</div>
        <div className="absolute bottom-32 left-32 text-9xl">🥗</div>
        <div className="absolute top-1/3 right-1/4 text-6xl">🥑</div>
        <div className="absolute bottom-20 right-40 text-7xl">🍅</div>
        <div className="absolute top-2/3 left-20 text-8xl">🥒</div>
        <div className="absolute top-20 left-1/3 text-6xl">🌽</div>
        <div className="absolute bottom-1/4 right-1/3 text-7xl">🥦</div>
        <div className="absolute top-1/2 right-10 text-6xl">🫑</div>
        <div className="absolute bottom-40 left-1/2 text-7xl">🍋</div>
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
        <motion.div
          className="absolute top-1/3 left-1/3 w-80 h-80 bg-emerald-300 rounded-full mix-blend-multiply"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 50, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center"
            >
              {/* Decorative glow */}
              <motion.div
                className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-green-200 rounded-full opacity-30 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent mb-6 leading-tight relative"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Diabetes Reversal Starts Here
              </motion.h1>
              <motion.p
                className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Transform your health with{" "}
                <span className="font-bold text-green-600">
                  science-backed nutrition
                </span>{" "}
                that stabilizes blood sugar and restores balance naturally.
              </motion.p>

              <motion.button
                onClick={() => openExternal(URLS.GET_STARTED)}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl flex items-center gap-3 mx-auto"
              >
                Get Started <ArrowRight className="w-6 h-6" />
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
                Why Choose Us
              </h2>
              <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                We provide comprehensive nutrition solutions tailored to your
                lifestyle.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: <Leaf className="w-10 h-10 text-white" />,
                  title: "Expert Guidance",
                  desc: "Professional nutritionists to guide you through your health journey.",
                },
                {
                  icon: <Apple className="w-10 h-10 text-white" />,
                  title: "Personalized Plans",
                  desc: "Custom meal plans that fit your taste preferences and health goals.",
                },
                {
                  icon: <Users className="w-10 h-10 text-white" />,
                  title: "Community Support",
                  desc: "Join a community of like-minded health enthusiasts.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={fadeUp}
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 text-center border border-white/50 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl"
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Review Carousel */}
        <section className="py-20 sm:py-28 bg-white/70 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
                What Our Users Say
              </h2>
              <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Hear from our community about their transformative journeys.
              </p>
            </motion.div>

            {/* Placeholder for review carousel */}
            <ReviewCarousel />
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-12 md:p-16 border border-white/50 relative overflow-hidden"
            >
              {/* Floating vegetables in newsletter */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <motion.div
                  className="absolute top-10 left-10 text-6xl"
                  animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  🥗
                </motion.div>
                <motion.div
                  className="absolute bottom-10 right-10 text-6xl"
                  animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  🥑
                </motion.div>
              </div>

              <div className="text-center mb-10 relative z-10">
                <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
                  Stay Updated
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  Subscribe to our newsletter for weekly nutrition tips, healthy
                  recipes, and exclusive meal plans.
                </p>
              </div>

              <div className="max-w-2xl mx-auto relative z-10">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-lg bg-white/50 backdrop-blur transition-all"
                    />
                  </div>
                  <motion.button
                    onClick={handleSubmit}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
                  >
                    Subscribe <Send className="w-5 h-5" />
                  </motion.button>
                </div>

                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 text-emerald-600 text-center text-lg font-semibold bg-emerald-50 py-3 px-6 rounded-xl"
                  >
                    Thank you for subscribing! Check your email for
                    confirmation.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 text-red-600 text-center text-lg font-semibold bg-red-50 py-3 px-6 rounded-xl"
                  >
                    Oops! Something went wrong. Please try again.
                  </motion.p>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-emerald-500 via-green-500 to-green-600 rounded-3xl shadow-2xl p-12 md:p-20 text-center text-white relative overflow-hidden"
            >
              {/* Floating vegetables in quote */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <motion.div
                  className="absolute top-10 left-10 text-7xl"
                  animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  🍎
                </motion.div>
                <motion.div
                  className="absolute bottom-10 right-10 text-7xl"
                  animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  🥬
                </motion.div>
                <motion.div
                  className="absolute top-1/2 left-1/4 text-6xl"
                  animate={{ x: [0, 15, 0], rotate: [0, 15, 0] }}
                  transition={{ duration: 7, repeat: Infinity }}
                >
                  🥕
                </motion.div>
              </div>

              <p className="text-3xl sm:text-4xl md:text-5xl font-semibold italic leading-relaxed relative z-10 max-w-4xl mx-auto">
                "Let food be thy medicine and medicine be thy food."
              </p>
              <p className="text-xl sm:text-2xl mt-6 opacity-90 relative z-10">
                — Hippocrates
              </p>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 sm:py-28 pb-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
                Ready to Transform Your Health?
              </h2>
              <p className="text-xl sm:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join thousands who have already started their journey to better
                nutrition and wellness.
              </p>
              <motion.button
                onClick={() => openExternal(URLS.GET_STARTED)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl flex items-center gap-3 mx-auto"
              >
                Start Your Journey 🚀
              </motion.button>
              {/* <motion.a
                href="https://forms.gle/UPmXFYBaQPcVeL788"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl flex items-center gap-3 mx-auto"
              >
                Start Your Journey 🚀
              </motion.a> */}
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
