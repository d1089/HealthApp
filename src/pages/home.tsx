import React, { useState } from "react";
import {
  ArrowRight,
  Leaf,
  Apple,
  Users,
  Send,
  TrendingUp,
  Heart,
  Award,
  CheckCircle,
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    {
      text: "At NutriiPal, we don't just treat a diagnosis; we nourish a human being.",
      author: "Our Philosophy",
    },
    {
      text: "Health is a state of body. Wellness is a state of being.",
      author: "NutriiPal Wisdom",
    },
    {
      text: "Let food be thy medicine and medicine be thy food.",
      author: "Hippocrates",
    },
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [quotes.length]);

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

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-block px-6 py-3 bg-red-100 border-2 border-red-300 rounded-full mb-6"
              >
                <p className="text-red-700 font-bold text-sm sm:text-base">
                  ⚠️ 136 Million Indians in Prediabetic Stage - Act Now!
                </p>
              </motion.div>

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
                Start Your Diabetes Reversal Journey{" "}
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Crisis Statistics Section */}
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
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-6">
                The Diabetes Crisis in India
              </h2>
              <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                We don't just manage the numbers; we help you{" "}
                <span className="font-bold text-green-600">
                  exit the statistics
                </span>
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  number: "101M+",
                  label: "Indians Living with Diabetes",
                  sublabel: "44% increase in just 4 years",
                  color: "from-red-500 to-red-600",
                  emoji: "🚨",
                },
                {
                  number: "136M",
                  label: "Indians in Prediabetic Stage",
                  sublabel: "15.3% of population at risk",
                  color: "from-orange-500 to-orange-600",
                  emoji: "⚠️",
                },
                {
                  number: "1 in 4",
                  label: "Global Diabetes Cases from India",
                  sublabel: "25% of worldwide cases",
                  color: "from-yellow-500 to-yellow-600",
                  emoji: "🌍",
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border-2 border-red-100 hover:border-red-300 transition-all"
                >
                  <div className="text-5xl mb-4 text-center">{stat.emoji}</div>
                  <div
                    className={`text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 text-center`}
                  >
                    {stat.number}
                  </div>
                  <div className="text-lg font-bold text-gray-900 mb-2 text-center">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-600 text-center">
                    {stat.sublabel}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Key Facts */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 md:p-12 border-2 border-red-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Alarming Trends You Need to Know
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "18% of young adults (18-40 years) are already diabetic",
                  "43% of diabetics in India are unaware they have it",
                  "Only 1/3 of Type 2 diabetics have BMI above 25 (Lean Diabetes)",
                  "Highest rates in Goa (26.4%), Kerala (25.5%), and coastal states",
                ].map((fact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 bg-white/80 p-4 rounded-xl"
                  >
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">!</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{fact}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Motivators Section */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
                Why Choose NutriiPal?
              </h2>
              <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get the life you deserve back
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "👨‍👩‍👧‍👦",
                  title: "For Family Providers",
                  desc: "Stay healthy to see your children graduate, marry, and thrive. Your family needs you strong and present.",
                },
                {
                  icon: "🍛",
                  title: "For Food Lovers",
                  desc: "Learn how to enjoy your favorite Indian meals without the sugar spike. No more deprivation.",
                },
                {
                  icon: "🔄",
                  title: "Break the Cycle",
                  desc: "Don't let your children inherit the lifestyle that leads to diabetes. Change starts now.",
                },
              ].map((motivator, index) => (
                <motion.div
                  key={motivator.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-green-100 hover:border-green-300 transition-all"
                >
                  <div className="text-6xl mb-6 text-center">
                    {motivator.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    {motivator.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    {motivator.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Free Tools/Entry Points Section */}
        {/* <section className="py-20 sm:py-28 bg-gradient-to-br from-emerald-50 to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
                Start Your Journey Today
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Take these simple steps to understand your health better
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "30-Second Risk Test",
                  desc: "Is your 'Thin-Fat' profile putting you at risk?",
                  cta: "Take Quiz",
                  emoji: "📋",
                },
                {
                  title: "Desi Carb Calculator",
                  desc: "Discover hidden carbs in Poha, Rice, and Paratha",
                  cta: "Calculate Now",
                  emoji: "🍚",
                },
                {
                  title: "Free Masterclass",
                  desc: "The 3 Mistakes Indians Make with Blood Sugar",
                  cta: "Watch Now",
                  emoji: "🎓",
                },
              ].map((tool, index) => (
                <motion.div
                  key={tool.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border-2 border-green-200 hover:border-green-400 transition-all group"
                >
                  <div className="text-5xl mb-4 text-center">{tool.emoji}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                    {tool.title}
                  </h3>
                  <p className="text-gray-700 mb-6 text-center leading-relaxed">
                    {tool.desc}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white py-3 rounded-xl font-semibold shadow-lg"
                  >
                    {tool.cta} →
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Success Stories with Medicine-Free Testimonials */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
                Real People, Real Results
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Medicine-free success stories from our community
              </p>
            </motion.div>

            {/* Inline Review Carousel */}
            <ReviewCarousel />

            {/* Results Stats */}
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
                  <div className="text-3xl mb-2">{stat.emoji}</div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-semibold">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Quote Carousel */}
        <section className="py-20 sm:py-28 bg-gradient-to-br from-emerald-500 via-green-500 to-green-600">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              key={currentQuote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white relative"
            >
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <motion.div
                  className="absolute top-0 left-10 text-7xl"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  🍎
                </motion.div>
                <motion.div
                  className="absolute bottom-0 right-10 text-7xl"
                  animate={{ rotate: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  🥬
                </motion.div>
              </div>

              <p className="text-3xl sm:text-4xl md:text-5xl font-semibold italic leading-relaxed mb-6 relative z-10">
                "{quotes[currentQuote].text}"
              </p>
              <p className="text-xl sm:text-2xl opacity-90 relative z-10">
                — {quotes[currentQuote].author}
              </p>

              {/* Dots indicator */}
              <div className="flex justify-center gap-2 mt-8">
                {quotes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentQuote(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentQuote ? "bg-white w-8" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
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
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
                What Makes Us Different
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Comprehensive nutrition solutions tailored to your lifestyle
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
                  icon: <Award className="w-10 h-10 text-white" />,
                  title: "Science-Backed Approach",
                  desc: "Clinical data and physiological truths, not fad diets or miracle pills.",
                },
                {
                  icon: <Apple className="w-10 h-10 text-white" />,
                  title: "Personalized Plans",
                  desc: "Custom meal plans that fit your taste preferences and health goals.",
                },
                {
                  icon: <Heart className="w-10 h-10 text-white" />,
                  title: "Holistic Care",
                  desc: "Integrating sleep, stress, and nutrition—not just glucose readings.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={fadeUp}
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl p-8 text-center border border-green-100 hover:shadow-2xl transition-all cursor-pointer group"
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

        {/* Newsletter Section */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-12 md:p-16 border border-white/50 relative overflow-hidden"
            >
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
                  Get Weekly Health Tips
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  Subscribe for nutrition tips, healthy recipes, and exclusive
                  diabetes reversal insights
                </p>
              </div>

              <div className="max-w-2xl mx-auto relative z-10">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 rounded-2xl border-2 border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-lg bg-white/50 backdrop-blur transition-all"
                  />
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
                Join thousands who have achieved medicine-free life through our
                diabetes reversal program
              </p>
              <motion.button
                onClick={() => openExternal(URLS.GET_STARTED)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl flex items-center gap-3 mx-auto"
              >
                Start Your Diabetes Reversal Journey 🚀
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
