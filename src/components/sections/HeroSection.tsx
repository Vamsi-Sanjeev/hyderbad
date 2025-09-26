import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, ShieldCheckIcon, HeartIcon, BoltIcon } from '@heroicons/react/24/outline';
import { Button } from '../ui/Button';
import { useLanguage } from '../../contexts/LanguageContext';

interface HeroSectionProps {
  onOpenAuth: (mode: 'login' | 'signup') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAuth }) => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium"
            >
              <BoltIcon className="h-4 w-4" />
              <span>Fast, Secure, Verified</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              {t('hero.title')}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              {t('hero.subtitle')}
            </motion.p>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex items-center space-x-8 text-sm text-gray-500 dark:text-gray-400"
          >
            <div className="flex items-center space-x-2">
              <ShieldCheckIcon className="h-5 w-5 text-green-500" />
              <span>AI Verified</span>
            </div>
            <div className="flex items-center space-x-2">
              <HeartIcon className="h-5 w-5 text-red-500" />
              <span>10k+ Helped</span>
            </div>
            <div className="flex items-center space-x-2">
              <BoltIcon className="h-5 w-5 text-blue-500" />
              <span>24/7 Support</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Button
              size="lg"
              onClick={() => onOpenAuth('signup')}
              className="group"
            >
              {t('hero.cta.help')}
              <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => onOpenAuth('signup')}
            >
              {t('hero.cta.donor')}
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200 dark:border-gray-700"
          >
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">₹50L+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Funds Disbursed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">10,000+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Lives Impacted</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">5,000+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Active Donors</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10">
            <img
              src="https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="People helping each other"
              className="rounded-2xl shadow-2xl"
            />
            
            {/* Floating Cards */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4"
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Verified Instantly</span>
              </div>
            </motion.div>
            
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4"
            >
              <div className="text-2xl font-bold text-blue-600">₹25,000</div>
              <div className="text-sm text-gray-500">Average Help</div>
            </motion.div>
          </div>
          
          {/* Background Decorations */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-green-400/20 rounded-2xl transform rotate-6 scale-105"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-2xl transform -rotate-6 scale-105"></div>
        </motion.div>
      </div>
    </section>
  );
};