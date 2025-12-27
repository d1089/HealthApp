import React from "react";
import { Award, Utensils, Clock } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const AboutUsPage = () => {
  return (
    <div className="w-full pt-16">
      {/* HERO SECTION */}
      <section
        className="relative h-[420px] sm:h-[520px] bg-center bg-cover bg-scroll md:bg-fixed flex items-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-7xl mx-auto px-6 text-white"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-5">
            About NutriiPal
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl leading-relaxed">
            Most diabetes care feels like a list of “don’ts.” At NutriiPal, we
            believe real health comes from balance, understanding, and a plan
            that fits your life.
          </p>
        </motion.div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Nutrition isn’t about restriction — it’s about building a
                sustainable relationship with food that supports long-term
                health and confidence.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our certified nutritionists and dietitians provide personalized,
                practical guidance designed to fit real lives.
              </p>
            </motion.div>

            {/* FEATURE LIST */}
            <div className="space-y-6">
              {[
                {
                  icon: <Award />,
                  title: "Expert Guidance",
                  desc: "Certified professionals with real-world clinical experience.",
                },
                {
                  icon: <Utensils />,
                  title: "Personalized Nutrition",
                  desc: "Meal plans aligned to your lifestyle and health goals.",
                },
                {
                  icon: <Clock />,
                  title: "Sustainable Habits",
                  desc: "Programs designed for consistency, not burnout.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <Feature {...item} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY / CTA SECTION */}
      <section
        className="relative h-[260px] sm:h-[320px] bg-center bg-cover bg-scroll md:bg-fixed flex items-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto px-6 text-center text-white"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Join Our Community
          </h2>
          <p className="text-lg sm:text-xl mb-6">
            A supportive space that celebrates every step toward better health.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 transition font-semibold"
          >
            Get Started
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

type FeatureProps = {
  icon: React.ReactElement;
  title: string;
  desc: string;
};

const Feature = ({ icon, title, desc }: FeatureProps) => (
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
      {React.cloneElement(icon, {
        className: "w-6 h-6 text-emerald-600",
      })}
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  </div>
);

export default AboutUsPage;
