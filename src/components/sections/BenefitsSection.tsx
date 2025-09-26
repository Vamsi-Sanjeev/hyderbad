import React from 'react';
import { motion } from 'framer-motion';
import { 
  ClockIcon, 
  ShieldCheckIcon, 
  GlobeAltIcon, 
  HeartIcon,
  BanknotesIcon,
  DevicePhoneMobileIcon,
  UserGroupIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import { Card } from '../ui/Card';

const benefits = [
  {
    icon: ClockIcon,
    title: "Lightning Fast",
    description: "Get verified and funded within hours, not days or weeks.",
    color: "text-blue-600",
    bgColor: "bg-blue-100 dark:bg-blue-900"
  },
  {
    icon: ShieldCheckIcon,
    title: "AI-Verified Security",
    description: "95% fraud reduction through advanced AI verification systems.",
    color: "text-green-600",
    bgColor: "bg-green-100 dark:bg-green-900"
  },
  {
    icon: GlobeAltIcon,
    title: "Multi-Language Support",
    description: "Available in English, Hindi, Telugu, and Tamil for wider accessibility.",
    color: "text-purple-600",
    bgColor: "bg-purple-100 dark:bg-purple-900"
  },
  {
    icon: HeartIcon,
    title: "Transparent Impact",
    description: "Track your donations and see real-time impact with detailed reports.",
    color: "text-red-600",
    bgColor: "bg-red-100 dark:bg-red-900"
  },
  {
    icon: BanknotesIcon,
    title: "Zero Platform Fees",
    description: "100% of your donation goes directly to those in need.",
    color: "text-yellow-600",
    bgColor: "bg-yellow-100 dark:bg-yellow-900"
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Mobile Optimized",
    description: "Seamlessly works on all devices with responsive design.",
    color: "text-indigo-600",
    bgColor: "bg-indigo-100 dark:bg-indigo-900"
  },
  {
    icon: UserGroupIcon,
    title: "Community Driven",
    description: "Join a community of 10,000+ verified donors and recipients.",
    color: "text-pink-600",
    bgColor: "bg-pink-100 dark:bg-pink-900"
  },
  {
    icon: ChartBarIcon,
    title: "Smart Analytics",
    description: "Data-driven insights help optimize funding and maximize impact.",
    color: "text-teal-600",
    bgColor: "bg-teal-100 dark:bg-teal-900"
  }
];

export const BenefitsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose QuickFund?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience the most advanced, secure, and user-friendly emergency funding platform 
            designed for the modern world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card hover className="h-full text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${benefit.bgColor} rounded-xl mb-4`}>
                  <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Benefits Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            Join the Revolution in Emergency Funding
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Be part of a platform that has helped over 10,000 people in crisis situations 
            with ₹50+ crores in verified emergency funding.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold mb-1">24/7</div>
              <div className="text-sm opacity-80">Customer Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">99.9%</div>
              <div className="text-sm opacity-80">Platform Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">Bank-Grade</div>
              <div className="text-sm opacity-80">Security Standards</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};