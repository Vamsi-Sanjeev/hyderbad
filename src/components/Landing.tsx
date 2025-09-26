import React, { useState } from 'react';
import { Navbar } from './layout/Navbar';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { FeaturesSection } from './sections/FeaturesSection';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { BenefitsSection } from './sections/BenefitsSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './sections/Footer';
import { AuthModal } from './auth/AuthModal';

export const Landing: React.FC = () => {
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; mode: 'login' | 'signup' }>({
    isOpen: false,
    mode: 'login'
  });

  const openAuth = (mode: 'login' | 'signup') => {
    setAuthModal({ isOpen: true, mode });
  };

  const closeAuth = () => {
    setAuthModal({ isOpen: false, mode: 'login' });
  };

  const toggleAuthMode = () => {
    setAuthModal(prev => ({
      ...prev,
      mode: prev.mode === 'login' ? 'signup' : 'login'
    }));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar onOpenAuth={openAuth} />
      <HeroSection onOpenAuth={openAuth} />
      <AboutSection />
      <FeaturesSection />
      <HowItWorksSection />
      <BenefitsSection />
      <ContactSection />
      <Footer />
      
      <AuthModal
        isOpen={authModal.isOpen}
        onClose={closeAuth}
        mode={authModal.mode}
        onToggleMode={toggleAuthMode}
      />
    </div>
  );
};