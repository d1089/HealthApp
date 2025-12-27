import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-emerald-600 via-green-600 to-green-700 py-16 text-white overflow-hidden">
      {/* Floating vegetables in footer */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 text-6xl"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          🥗
        </motion.div>
        <motion.div
          className="absolute bottom-10 right-10 text-6xl"
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        >
          🥑
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-1/3 text-5xl"
          animate={{ x: [0, 15, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          🥕
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 right-1/4 text-5xl"
          animate={{ y: [0, -15, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        >
          🍎
        </motion.div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Contact Us Section */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-3xl">📞</span> Contact Us
            </h4>
            <div className="space-y-3">
              {/* <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 group cursor-pointer"
              >
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 group-hover:text-green-200 transition-colors" />
                <span className="text-white/90 group-hover:text-white transition-colors">
                  123 Nutrition Street
                  <br />
                  Healthy City, HC 12345
                </span>
              </motion.div> */}
              {/* <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 group cursor-pointer"
              >
                <Phone className="w-5 h-5 flex-shrink-0 group-hover:text-green-200 transition-colors" />
                <span className="text-white/90 group-hover:text-white transition-colors">
                  (555) 123-4567
                </span>
              </motion.div> */}
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 group cursor-pointer"
              >
                <Mail className="w-5 h-5 flex-shrink-0 group-hover:text-green-200 transition-colors" />
                <a
                  href="mailto:nutriipal@gmail.com"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  nutriipal@gmail.com
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Follow Us Section */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-start md:items-center"
          >
            <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-3xl">🌟</span> Follow Us
            </h4>
            <div className="flex gap-4">
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all shadow-lg"
              >
                <Facebook className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/nutriipal24/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all shadow-lg"
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.youtube.com/@nutriipal"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all shadow-lg"
              >
                <Youtube className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>

          {/* Legal Section */}
          {/* <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-3xl">⚖️</span> Legal
            </h4>
            <ul className="space-y-3">
              <motion.li whileHover={{ x: 5 }}>
                <a
                  href="#"
                  className="text-white/90 hover:text-white transition-colors inline-block"
                >
                  Privacy Policy
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a
                  href="#"
                  className="text-white/90 hover:text-white transition-colors inline-block"
                >
                  Terms and Conditions
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a
                  href="#"
                  className="text-white/90 hover:text-white transition-colors inline-block"
                >
                  Refund Policy
                </a>
              </motion.li>
            </ul>
          </motion.div> */}
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-white/20 pt-8 mt-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/80 text-center sm:text-left">
              © 2025 NutriiPal. All rights reserved.
            </p>
            <p className="text-white/80 text-center sm:text-right flex items-center gap-2">
              Made with <span className="text-red-400 text-xl">❤️</span> for
              your health
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
