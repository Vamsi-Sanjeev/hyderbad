import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon, LanguageIcon } from '@heroicons/react/24/outline';
import { HeartHandshake as HeartHandshakeIcon } from 'lucide-react';
import { Button } from '../ui/Button';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';

interface NavbarProps {
  onOpenAuth: (mode: 'login' | 'signup') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuth }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const { user, logout } = useAuth();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'te', name: 'తెలుగు' },
    { code: 'ta', name: 'தமிழ்' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <HeartHandshakeIcon className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              QuickFund
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
            >
              {t('nav.features')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
            >
              {t('nav.contact')}
            </button>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangDropdown(!langDropdown)}
                className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                <LanguageIcon className="h-5 w-5" />
              </button>
              {langDropdown && (
                <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as any);
                        setLangDropdown(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                        language === lang.code ? 'bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400' : ''
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
            </button>

            {/* Auth Buttons */}
            {user ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {user.name}
                </span>
                <Button variant="outline" size="sm" onClick={logout}>
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Button variant="ghost" size="sm" onClick={() => onOpenAuth('login')}>
                  {t('nav.login')}
                </Button>
                <Button size="sm" onClick={() => onOpenAuth('signup')}>
                  {t('nav.signup')}
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 dark:border-gray-700 py-4 space-y-4"
          >
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
            >
              {t('nav.features')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
            >
              {t('nav.contact')}
            </button>
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                {theme === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
              </button>
              {user ? (
                <Button variant="outline" size="sm" onClick={logout}>
                  Logout
                </Button>
              ) : (
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm" onClick={() => onOpenAuth('login')}>
                    {t('nav.login')}
                  </Button>
                  <Button size="sm" onClick={() => onOpenAuth('signup')}>
                    {t('nav.signup')}
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};