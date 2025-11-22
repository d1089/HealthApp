import React from "react";
import { Award, Utensils, Clock } from "lucide-react";

const About = () => {
  return (
    <div className="w-full pt-16">
      {/* Hero Section */}
      <div
        className="h-[400px] sm:h-[500px] bg-fixed bg-center bg-cover flex items-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-shadow-lg">
            Our Story
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl text-shadow-md">
            Dedicated to helping you achieve optimal health through nutrition
            since 2015.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6">
                At Nutripal, we believe that nutrition is not just about
                counting calories—it's about creating a sustainable, healthy
                relationship with food that empowers you to be your best self.
              </p>
              <p className="text-base sm:text-lg text-gray-600">
                Our team of certified nutritionists and dietitians are committed
                to providing personalized guidance and support to help you
                achieve your health goals through balanced nutrition.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Expert Guidance
                  </h3>
                  <p className="text-gray-600">
                    Our certified nutritionists bring years of experience and
                    expertise.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Utensils className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Personalized Approach
                  </h3>
                  <p className="text-gray-600">
                    Customized meal plans tailored to your specific health
                    goals.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Sustainable Habits
                  </h3>
                  <p className="text-gray-600">
                    Programs that fit into your busy lifestyle for long-term
                    success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section with Parallax */}
      <div
        className="h-[250px] sm:h-[300px] bg-fixed bg-center bg-cover flex items-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Join Our Community
          </h2>
          <p className="text-lg sm:text-xl">
            Be part of a supportive community that celebrates every step toward
            better health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
