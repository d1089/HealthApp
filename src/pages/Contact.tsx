import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="w-full pt-16">
      {/* Hero Section */}
      <div 
        className="h-[300px] sm:h-[400px] bg-center bg-cover flex items-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-shadow-lg">Get in Touch</h1>
          <p className="text-lg sm:text-xl max-w-2xl text-shadow-md">We're here to answer any questions you may have about nutrition and our services.</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Location</h3>
                    <p className="text-gray-600">123 Nutrition Street<br />Healthy City, HC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <p className="text-gray-600">info@nutrilife.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-emerald-500 text-white py-3 px-6 rounded-md hover:bg-emerald-600 transition-colors font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;