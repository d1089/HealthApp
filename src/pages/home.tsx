import React, { useState } from "react";
import { ArrowRight, Leaf, Apple, Users, Send } from "lucide-react";
import ReviewCarousel from "../components/ReviewCarousel";

const Home = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically make an API call to your backend
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section with Parallax */}
      <div
        className="h-screen bg-fixed bg-center bg-cover flex  items-center pl-[24rem]"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-grey/30">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight text-shadow-lg">
            Nourish Your Body
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl text-shadow-md">
            Begin your journey to better health through balanced nutrition and
            mindful eating.
          </p>
          <button className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 px-8 py-3 rounded-full font-semibold flex items-center justify-center sm:justify-start gap-2 transition-colors">
            Get Started <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 sm:py-20 bg-[#f9f5f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive nutrition solutions tailored to your
              lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
              <p className="text-gray-600">
                Professional nutritionists to guide you through your health
                journey.
              </p>
            </div>

            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Apple className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Plans</h3>
              <p className="text-gray-600">
                Custom meal plans that fit your taste preferences and health
                goals.
              </p>
            </div>

            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="text-gray-600">
                Join a community of like-minded health enthusiasts.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <ReviewCarousel />

      {/* Newsletter Section */}
      <div className="bg-emerald-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Subscribe to our newsletter for weekly nutrition tips, healthy
              recipes, and exclusive meal plans.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4"
            >
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                Subscribe <Send className="w-5 h-5" />
              </button>
            </form>

            {status === "success" && (
              <p className="mt-4 text-emerald-600 text-center">
                Thank you for subscribing! Check your email for confirmation.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-red-600 text-center">
                Oops! Something went wrong. Please try again.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Parallax Quote Section */}
      <div
        className="h-[300px] sm:h-[400px] bg-fixed bg-center bg-cover flex items-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 " />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="text-2xl sm:text-3xl md:text-4xl font-medium italic leading-relaxed">
            "Let food be thy medicine and medicine be thy food."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
