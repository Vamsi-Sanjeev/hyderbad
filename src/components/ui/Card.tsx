import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, hover = false }) => {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, y: -4 } : undefined}
      className={clsx(
        'bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6',
        className
      )}
    >
      {children}
    </motion.div>
  );
};