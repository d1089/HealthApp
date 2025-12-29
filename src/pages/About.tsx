import React from "react";
import { Award, Utensils, Clock, Heart } from "lucide-react";
import { motion } from "framer-motion";
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
      staggerChildren: 0.15,
    },
  },
};

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 pt-16 relative overflow-hidden">
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
        <div className="absolute bottom-40 left-1/2 text-7xl">🥬</div>
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
          className="absolute top-40 left-40 w-80 h-80 bg-emerald-300 rounded-full mix-blend-multiply"
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
        {/* HERO SECTION */}
        <section className="max-w-4xl mx-auto text-center px-6 py-20 mb-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Decorative elements */}
            <motion.div
              className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-green-200 rounded-3xl opacity-30 blur-xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.4, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent mb-8 leading-tight">
              About NutriiPal
            </h1>

            <div className="max-w-3xl mx-auto">
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed"
              >
                Most diabetes care feels like a list of{" "}
                <span className="font-bold text-red-500">"don'ts."</span>
              </motion.p>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-700 leading-relaxed"
              >
                At NutriiPal, we believe real health comes from{" "}
                <span className="font-bold text-green-600">
                  balance, understanding, and a plan that fits your life.
                </span>
              </motion.p>
            </div>
          </motion.div>
        </section>

        {/* MISSION SECTION */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-12 md:p-16 border border-white/50"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
                  Our Mission
                </h2>
                <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                  At NutriiPal, we walk beside you on a{" "}
                  <span className="font-semibold bg-green-100 px-2 py-1 rounded text-green-800">
                    science-led journey to wellness.
                  </span>{" "}
                  We are dedicated to making the dream of
                  <span className="font-semibold bg-green-100 px-2 py-1 rounded text-green-800">
                    holistic health accessible
                  </span>{" "}
                  to our users, replacing the burden of illness with the
                  <span className="font-semibold bg-green-100 px-2 py-1 rounded text-green-800">
                    simple, profound joy of feeling healthy again.
                  </span>
                </p>
                {/* <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Our certified nutritionists and dietitians provide
                  personalized, practical guidance designed to fit real lives.
                </p> */}
              </motion.div>

              {/* FEATURE LIST */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Core Values Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: <Award className="w-6 h-6" />,
                      title: "Science-Backed",
                      desc: "Clinical data, not fad diets",
                      color: "from-blue-100 to-blue-300 via-emerald-200",
                    },
                    {
                      icon: <Utensils className="w-6 h-6" />,
                      title: "Accessible Care",
                      desc: "Quality without luxury prices",
                      color: "from-blue-100 to-blue-300 via-emerald-200",
                    },
                    {
                      icon: <Clock className="w-6 h-6" />,
                      title: "Holistic Approach",
                      desc: "Sleep, stress, and nutrition",
                      color: "from-blue-100 to-blue-300 via-emerald-200",
                    },
                    {
                      icon: <Heart className="w-6 h-6" />,
                      title: "Kitchen Ally",
                      desc: "Your partner in wellness",
                      color: "from-blue-100 to-blue-300 via-emerald-200",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all cursor-pointer group"
                    >
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-3 text-white group-hover:scale-110 transition-transform`}
                      >
                        {item.icon}
                      </div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* FOUNDER SECTION */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/50"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Left - Founder Image */}
              <div className="relative h-[400px] md:h-auto bg-gradient-to-br from-green-100 to-emerald-100">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 flex items-center justify-center p-8"
                >
                  {/* Placeholder for founder image */}
                  {/* <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center shadow-2xl border-8 border-white/50">
                    <span className="text-8xl md:text-9xl">👩‍⚕️</span>
                  </div> */}
                  {/* Replace above div with actual image: */}
                  <img
                    src="/assets/founder.jpg"
                    alt="Palak M. Acharya"
                    className="w-full h-full object-cover rounded-full shadow-2xl border-8 border-white/50"
                  />
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <motion.div
                    className="absolute top-10 left-10 text-5xl"
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    🌟
                  </motion.div>
                  <motion.div
                    className="absolute bottom-10 right-10 text-5xl"
                    animate={{ rotate: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                  >
                    💚
                  </motion.div>
                </div>
              </div>

              {/* Right - Founder Info */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4">
                    <span className="text-sm font-bold text-green-700">
                      Meet Our Founder
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    Dt. Palak M. Acharya
                  </h2>

                  <p className="text-lg text-emerald-600 font-semibold mb-6">
                    Founder & Chief Nutritionist
                  </p>

                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      With over 3+ years of focused experience in diabetes
                      nutrition care, Dt. Palak specializes in helping
                      individuals manage Type 2 diabetes, prediabetes, and
                      insulin resistance through evidence-based dietary
                      interventions.
                    </p>

                    <p>
                      Her clinical approach emphasizes blood sugar
                      stabilization, sustainable lifestyle changes, and
                      long-term metabolic health.{" "}
                      <span className="font-semibold bg-green-100 px-2 py-1 rounded text-green-800">
                        “Diabetes management goes beyond numbers, it's about
                        empowering people with the right food choices every
                        day.”
                      </span>
                    </p>

                    <p>
                      Today, Dt. Palak leads diabetes-focused nutrition programs
                      that include personalized meal planning, glycemic control
                      strategies, weight management support, and continuous
                      nutrition education designed to help individuals reduce
                      complications and improve quality of life.
                    </p>
                  </div>

                  {/* Credentials/Achievements */}
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded-xl p-4 text-center border border-green-100">
                      <div className="text-3xl font-bold text-green-600">
                        3+
                      </div>
                      <div className="text-sm text-gray-600 font-semibold mt-1">
                        Years Experience
                      </div>
                    </div>
                    <div className="bg-emerald-50 rounded-xl p-4 text-center border border-emerald-100">
                      <div className="text-3xl font-bold text-emerald-600">
                        500+
                      </div>
                      <div className="text-sm text-gray-600 font-semibold mt-1">
                        Lives Changed
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* COMMUNITY / CTA SECTION */}
        <section className="max-w-4xl mx-auto px-6 pb-20 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-emerald-500 via-green-500 to-green-600 rounded-3xl shadow-2xl p-12 md:p-16 text-white relative overflow-hidden"
          >
            {/* Floating vegetables in CTA */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
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
              <motion.div
                className="absolute top-1/2 right-20 text-5xl"
                animate={{ x: [0, 15, 0], rotate: [0, 15, 0] }}
                transition={{ duration: 7, repeat: Infinity }}
              >
                🥕
              </motion.div>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
              Join Our Community
            </h2>
            <p className="text-lg md:text-2xl mb-8 opacity-95 max-w-2xl mx-auto leading-relaxed relative z-10">
              A supportive space that celebrates every step toward better
              health.
            </p>

            <motion.button
              onClick={() => openExternal(URLS.GET_STARTED)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-white text-green-600 hover:bg-gray-50 transition font-bold text-lg shadow-lg hover:shadow-xl relative z-10"
            >
              Get Started 🚀
            </motion.button>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

type FeatureProps = {
  icon: React.ReactElement;
  title: string;
  desc: string;
};

const Feature = ({ icon, title, desc }: FeatureProps) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="flex items-start gap-4 bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100 hover:shadow-lg transition-all duration-300 cursor-pointer group"
  >
    <motion.div
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.6 }}
      className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg transition-all duration-300"
    >
      {React.cloneElement(icon, {
        className: "w-7 h-7 text-white",
      })}
    </motion.div>
    <div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

export default AboutUsPage;
