import React from 'react';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import { HeartHandshake as HeartHandshakeIcon } from 'lucide-react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

export const ContactSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Message sent! We\'ll get back to you soon.');
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have questions or need support? We're here to help you 24/7. 
            Reach out to our dedicated team for immediate assistance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Multiple ways to reach us for support, partnerships, or general inquiries.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <EnvelopeIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Email Support</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                    Get help within 2 hours
                  </p>
                  <a 
                    href="mailto:support@quickfund.com" 
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    support@quickfund.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <PhoneIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Emergency Helpline</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                    24/7 emergency support
                  </p>
                  <a 
                    href="tel:+918800123456" 
                    className="text-green-600 dark:text-green-400 hover:underline"
                  >
                    +91 88001 23456
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <ChatBubbleLeftRightIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Live Chat</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                    Instant support available
                  </p>
                  <button className="text-purple-600 dark:text-purple-400 hover:underline">
                    Start Chat →
                  </button>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                  <MapPinIcon className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Office Address</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    123 Tech Park, Cyber City<br />
                    Hyderabad, Telangana 500081<br />
                    India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Send us a Message
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="First Name"
                  placeholder="Enter your first name"
                  required
                />
                <Input
                  label="Last Name"
                  placeholder="Enter your last name"
                  required
                />
              </div>

              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                required
              />

              <Input
                label="Phone Number"
                type="tel"
                placeholder="Enter your phone number"
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <select className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white">
                  <option value="">Select a subject</option>
                  <option value="support">General Support</option>
                  <option value="emergency">Emergency Help</option>
                  <option value="donation">Donation Inquiry</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                  placeholder="Tell us how we can help you..."
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>

              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                We typically respond within 2 hours during business hours.
              </p>
            </form>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                question: "How quickly can I get verified?",
                answer: "Our AI system typically verifies requests within 5 minutes."
              },
              {
                question: "Is there any platform fee?",
                answer: "No, 100% of donations go directly to verified recipients."
              },
              {
                question: "How secure is my data?",
                answer: "We use bank-grade encryption and security protocols."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {faq.question}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};