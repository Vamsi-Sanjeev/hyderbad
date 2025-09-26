import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    message: "QuickFund helped me get emergency medical funding for my father's surgery within 24 hours. The AI verification made the process so smooth.",
    amount: "₹2,50,000",
    rating: 5,
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Bangalore, Karnataka",
    message: "As a donor, I love how transparent the platform is. I can see exactly where my money is going and track the impact.",
    donated: "₹1,50,000",
    rating: 5,
    image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100"
  },
  {
    id: 3,
    name: "Anitha Reddy",
    location: "Hyderabad, Telangana",
    message: "The platform's AI verification gave me confidence that my donation was going to genuine cases. Excellent work!",
    donated: "₹75,000",
    rating: 5,
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=100"
  }
];

export const AboutSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            To bridge the gap between those in urgent need of financial assistance and compassionate individuals 
            willing to help, using AI-powered verification to ensure transparency and trust.
          </p>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
        >
          {[
            { value: "₹50L+", label: "Total Funds Raised", color: "text-blue-600" },
            { value: "10,000+", label: "People Helped", color: "text-green-600" },
            { value: "5,000+", label: "Active Donors", color: "text-purple-600" },
            { value: "98%", label: "Success Rate", color: "text-orange-600" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            What Our Community Says
          </h3>
          
          <div className="relative min-h-[300px] flex items-center">
            <button
              onClick={prevTestimonial}
              className="absolute left-0 z-10 p-2 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
            >
              <ChevronLeftIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </button>
            
            <div className="flex-1 px-12">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                  "{testimonials[currentTestimonial].message}"
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    {testimonials[currentTestimonial].location}
                  </p>
                  {testimonials[currentTestimonial].amount && (
                    <p className="text-green-600 font-medium">
                      Received: {testimonials[currentTestimonial].amount}
                    </p>
                  )}
                  {testimonials[currentTestimonial].donated && (
                    <p className="text-blue-600 font-medium">
                      Donated: {testimonials[currentTestimonial].donated}
                    </p>
                  )}
                </div>
              </motion.div>
            </div>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-0 z-10 p-2 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
            >
              <ChevronRightIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial
                    ? 'bg-blue-600'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};