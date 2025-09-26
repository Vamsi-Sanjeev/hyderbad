import React from 'react';
import { motion } from 'framer-motion';
import { 
  PlusCircleIcon, 
  ShieldCheckIcon, 
  HeartIcon, 
  BanknotesIcon 
} from '@heroicons/react/24/outline';

const steps = [
  {
    id: 1,
    icon: PlusCircleIcon,
    title: "Submit Request",
    description: "Create your emergency funding request with required documents and details.",
    color: "bg-blue-500",
    delay: 0
  },
  {
    id: 2,
    icon: ShieldCheckIcon,
    title: "AI Verification",
    description: "Our AI system verifies your request and documents within minutes.",
    color: "bg-green-500",
    delay: 0.2
  },
  {
    id: 3,
    icon: HeartIcon,
    title: "Community Support",
    description: "Compassionate donors review and contribute to verified requests.",
    color: "bg-red-500",
    delay: 0.4
  },
  {
    id: 4,
    icon: BanknotesIcon,
    title: "Instant Disbursement",
    description: "Funds are transferred directly to your account once the target is met.",
    color: "bg-purple-500",
    delay: 0.6
  }
];

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            How QuickFund Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our streamlined process ensures you get the help you need quickly and securely, 
            with full transparency for all stakeholders.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Timeline Line */}
          <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-green-500 via-red-500 to-purple-500"></div>
          
          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: step.delay }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step Number Circle */}
                <div className={`relative z-10 w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                
                {/* Step Number */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-full flex items-center justify-center text-sm font-bold text-gray-600 dark:text-gray-300">
                  {step.id}
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
                
                {/* Connecting Arrow (except for last step) */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: step.delay + 0.2 }}
                    viewport={{ once: true }}
                    className="absolute top-8 -right-4 w-8 h-0.5 bg-gray-300 dark:bg-gray-600 origin-left"
                  >
                    <div className="absolute -right-1 -top-1 w-3 h-3 bg-gray-300 dark:bg-gray-600 rotate-45"></div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4"
            >
              <div className={`flex-shrink-0 w-12 h-12 ${step.color} rounded-full flex items-center justify-center`}>
                <step.icon className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full text-xs font-bold text-gray-600 dark:text-gray-300">
                    {step.id}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                &lt; 5 mins
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Average Verification Time
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                2-6 hours
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Funding to Disbursement
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                98.5%
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Successful Fund Release
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};