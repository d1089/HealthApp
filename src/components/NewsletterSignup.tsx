import React, { useState } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

type StatusType = "idle" | "success" | "error" | "invalid";

interface Benefit {
  emoji: string;
  text: string;
}

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<StatusType>("idle");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Replace with your Google Apps Script URL
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzYxqY11RWKz7pthLtGN6ERPFW9rctm2lcfLlX6ulR-jQr10yn7PEna0FswtZLioYF-ig/exec";
  // "https://script.google.com/macros/s/AKfycbyDk78KQqmphANex7WMzZRuA1t6jlqaiBoq8Ah7Ah1PFZEWVgPqXxMtzl_Z2IfRRXzE/exec";

  // Extract name from email (part before @)
  const extractNameFromEmail = (email: string): string => {
    const namePart = email.split("@")[0];
    // Replace dots, underscores, hyphens with spaces and capitalize
    const formattedName = namePart
      .replace(/[._-]/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
    return formattedName;
  };

  const handleSubmit = async (): Promise<void> => {
    if (!email) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("invalid");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");

    // Extract name from email
    const extractedName = extractNameFromEmail(email);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: extractedName,
          email: email,
          timestamp: new Date().toISOString(),
        }),
      });

      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Error subscribing:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const benefits: Benefit[] = [
    { emoji: "🍎", text: "Weekly Nutrition Tips" },
    { emoji: "🥘", text: "Healthy Recipes" },
    { emoji: "💪", text: "Wellness Advice" },
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-12 md:p-16 border border-white/50 relative overflow-hidden"
        >
          {/* Animated vegetables background */}
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

          <motion.div
            className="text-center mb-10 relative z-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
              Get Weekly Health Tips
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Subscribe for nutrition tips, healthy recipes, and exclusive
              diabetes reversal insights
            </p>
          </motion.div>

          <motion.div
            className="max-w-2xl mx-auto relative z-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter your email"
                disabled={isSubmitting}
                aria-label="Email address"
                className="flex-1 px-6 py-4 rounded-2xl border-2 border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-lg bg-white/50 backdrop-blur transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <motion.button
                onClick={handleSubmit}
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                aria-label="Subscribe to newsletter"
                className={`bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    Subscribing...
                  </>
                ) : (
                  <>
                    Subscribe <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </div>

            {/* Success Message */}
            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-emerald-600 text-center text-lg font-semibold bg-emerald-50 py-3 px-6 rounded-xl border-2 border-emerald-200"
                role="alert"
              >
                ✅ Thank you for subscribing! Check your email for confirmation.
              </motion.p>
            )}

            {/* Error Message */}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-red-600 text-center text-lg font-semibold bg-red-50 py-3 px-6 rounded-xl border-2 border-red-200"
                role="alert"
              >
                ❌ Oops! Something went wrong. Please try again.
              </motion.p>
            )}

            {/* Invalid Email Message */}
            {status === "invalid" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-orange-600 text-center text-lg font-semibold bg-orange-50 py-3 px-6 rounded-xl border-2 border-orange-200"
                role="alert"
              >
                ⚠️ Please enter a valid email address.
              </motion.p>
            )}
          </motion.div>

          {/* Privacy note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-sm text-gray-500 text-center mt-6 relative z-10"
          >
            🔒 We respect your privacy. Unsubscribe anytime. No spam, ever!
          </motion.p>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100 transition-all cursor-default"
              >
                <div className="text-4xl mb-2">{benefit.emoji}</div>
                <p className="text-gray-700 font-semibold">{benefit.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
