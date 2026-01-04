import React, { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Replace this URL with your deployed Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwCNOP5NuPALoSl1tqRKGnPwIZonJa-aBSOu9vaLpn1MfJsQEztMe6l5u5Y2uf_oyepJw/exec";
  //"https://script.google.com/macros/s/AKfycbxoms2smDeBsGWLXSjMMyfh8tpgdxXGzMv5NtJawQun7oOM9zam-18RYW20vshWRyzv/exec";

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          timestamp: new Date().toISOString(),
        }),
      });

      // Note: With no-cors mode, we won't get response details
      // but the request will go through
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden min-h-screen">
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
      </div>

      {/* Animated gradient blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20 z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section
          className="relative h-96 sm:h-[500px] bg-center bg-cover flex items-center mb-20"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />

          <div className="relative max-w-7xl mx-auto px-6 text-white w-full">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Get in Touch
            </h1>
            <p className="text-xl sm:text-2xl max-w-2xl leading-relaxed">
              We're here to answer any questions you may have about{" "}
              <span className="font-bold">nutrition and our services.</span>
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 sm:py-20 pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-10">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 border border-white/50 hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        Email
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        nutriipal@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8 shadow-lg border border-green-200">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Office Hours
                    </h3>
                    <div className="space-y-2 text-gray-700">
                      <p className="flex justify-between">
                        <span className="font-semibold">Monday - Friday:</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </p>
                      <p className="flex justify-between">
                        <span className="font-semibold">
                          Saturday - Sunday:
                        </span>
                        <span>Closed</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 sm:p-10 border border-white/50 relative overflow-hidden">
                {/* Floating vegetables in form */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                  <div
                    className="absolute top-10 right-10 text-6xl animate-bounce"
                    style={{ animationDuration: "5s" }}
                  >
                    🥗
                  </div>
                  <div
                    className="absolute bottom-10 left-10 text-6xl animate-bounce"
                    style={{ animationDuration: "6s", animationDelay: "1s" }}
                  >
                    🥑
                  </div>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-8 relative z-10">
                  Send us a Message
                </h2>
                <div className="space-y-6 relative z-10">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-gray-700 mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-lg bg-white/50 backdrop-blur transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-gray-700 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-lg bg-white/50 backdrop-blur transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-bold text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-lg bg-white/50 backdrop-blur transition-all resize-none"
                      placeholder="Your message"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white py-4 px-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all ${
                      isSubmitting
                        ? "opacity-70 cursor-not-allowed"
                        : "hover:scale-105"
                    }`}
                  >
                    {isSubmitting ? "Sending..." : "Send Message 📧"}
                  </button>

                  {status === "success" && (
                    <div className="text-emerald-600 text-center text-lg font-semibold bg-emerald-50 py-3 px-6 rounded-xl border-2 border-emerald-200 animate-pulse">
                      ✅ Thank you! We'll get back to you soon.
                    </div>
                  )}
                  {status === "error" && (
                    <div className="text-red-600 text-center text-lg font-semibold bg-red-50 py-3 px-6 rounded-xl border-2 border-red-200">
                      ❌ Please fill in all fields correctly.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
