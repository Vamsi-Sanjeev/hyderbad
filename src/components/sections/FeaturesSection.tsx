import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  BoltIcon, 
  HeartIcon, 
  ChartBarIcon,
  ClockIcon,
  GlobeAltIcon,
  LockClosedIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline';
import { Modal } from '../ui/Modal';
import { Card } from '../ui/Card';

const features = [
  {
    id: 1,
    icon: ShieldCheckIcon,
    title: "AI-Powered Verification",
    description: "Advanced AI algorithms verify requests within minutes, detecting fraud and ensuring authenticity.",
    details: "Our proprietary AI system analyzes documents, cross-references data, and provides risk scores to ensure only genuine requests are approved. This reduces fraud by 95% and increases donor confidence.",
    color: "text-blue-600"
  },
  {
    id: 2,
    icon: BoltIcon,
    title: "Instant Fund Transfer",
    description: "Get verified requests funded within hours through our streamlined donation process.",
    details: "Once verified, funds are released immediately through UPI, bank transfers, or digital wallets. Our payment infrastructure ensures 99.9% uptime and secure transactions.",
    color: "text-green-600"
  },
  {
    id: 3,
    icon: HeartIcon,
    title: "Transparent Impact Tracking",
    description: "Track your donations and see the real-world impact of your contributions.",
    details: "Follow your donations from start to finish with photo updates, impact reports, and direct communication with beneficiaries. See exactly how your money made a difference.",
    color: "text-red-600"
  },
  {
    id: 4,
    icon: ChartBarIcon,
    title: "Smart Analytics Dashboard",
    description: "Comprehensive analytics for donors, recipients, and organizations to track performance.",
    details: "Advanced dashboards with real-time metrics, trend analysis, and predictive insights help optimize funding decisions and maximize impact.",
    color: "text-purple-600"
  }
];

const additionalFeatures = [
  { icon: ClockIcon, title: "24/7 Support", description: "Round-the-clock assistance" },
  { icon: GlobeAltIcon, title: "Multi-language", description: "Support in 4+ Indian languages" },
  { icon: LockClosedIcon, title: "Bank-grade Security", description: "Enterprise-level encryption" },
  { icon: DevicePhoneMobileIcon, title: "Mobile Optimized", description: "Works seamlessly on all devices" },
];

export const FeaturesSection: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<typeof features[0] | null>(null);

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Powerful Features for Maximum Impact
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our platform combines cutting-edge technology with human compassion to create 
            the most trusted emergency funding ecosystem.
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card hover className="h-full cursor-pointer" onClick={() => setSelectedFeature(feature)}>
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${feature.color.replace('text-', 'bg-')}/10`}>
                    <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {feature.description}
                    </p>
                    <button className={`text-sm font-medium ${feature.color} hover:underline`}>
                      Learn more →
                    </button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Additional Features
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Feature Detail Modal */}
        <Modal
          isOpen={!!selectedFeature}
          onClose={() => setSelectedFeature(null)}
          title={selectedFeature?.title || ''}
        >
          {selectedFeature && (
            <div className="space-y-4">
              <div className={`inline-flex items-center justify-center w-16 h-16 ${selectedFeature.color.replace('text-', 'bg-')}/10 rounded-lg mb-4`}>
                <selectedFeature.icon className={`h-8 w-8 ${selectedFeature.color}`} />
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {selectedFeature.details}
              </p>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};