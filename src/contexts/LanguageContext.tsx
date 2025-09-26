import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'hi' | 'te' | 'ta';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.features': 'Features',
    'nav.contact': 'Contact',
    'nav.login': 'Sign In',
    'nav.signup': 'Sign Up',
    'hero.title': 'Emergency Financial Support When You Need It Most',
    'hero.subtitle': 'Connect with compassionate donors and get verified emergency funding quickly and securely.',
    'hero.cta.help': 'Get Help Now',
    'hero.cta.donor': 'Become a Donor',
    'auth.login': 'Sign In',
    'auth.signup': 'Sign Up',
    'auth.email': 'Email',
    'auth.password': 'Password',
    'auth.role': 'I am a',
    'common.loading': 'Loading...',
  },
  hi: {
    'nav.home': 'होम',
    'nav.about': 'हमारे बारे में',
    'nav.features': 'विशेषताएं',
    'nav.contact': 'संपर्क',
    'nav.login': 'साइन इन',
    'nav.signup': 'साइन अप',
    'hero.title': 'आपातकालीन वित्तीय सहायता जब आपको इसकी सबसे ज्यादा जरूरत हो',
    'hero.subtitle': 'दयालु दानदाताओं से जुड़ें और सत्यापित आपातकालीन फंडिंग जल्दी और सुरक्षित रूप से प्राप्त करें।',
    'hero.cta.help': 'अभी मदद लें',
    'hero.cta.donor': 'दानदाता बनें',
    'auth.login': 'साइन इन',
    'auth.signup': 'साइन अप',
    'auth.email': 'ईमेल',
    'auth.password': 'पासवर्ड',
    'auth.role': 'मैं हूँ',
    'common.loading': 'लोड हो रहा है...',
  },
  te: {
    'nav.home': 'హోమ్',
    'nav.about': 'మా గురించి',
    'nav.features': 'ఫీచర్లు',
    'nav.contact': 'సంప్రదించండి',
    'nav.login': 'సైన్ ఇన్',
    'nav.signup': 'సైన్ అప్',
    'hero.title': 'మీకు అత్యవసర ఆర్థిక సహాయం అవసరమైనప్పుడు',
    'hero.subtitle': 'దయగల దాతలతో కనెక్ట్ అవ్వండి మరియు వేగంగా మరియు సురక్షితంగా ధృవీకరించబడిన అత్యవసర నిధులను పొందండి।',
    'hero.cta.help': 'ఇప్పుడే సహాయం పొందండి',
    'hero.cta.donor': 'దాతగా మారండి',
    'auth.login': 'సైన్ ఇన్',
    'auth.signup': 'సైన్ అప్',
    'auth.email': 'ఇమెయిల్',
    'auth.password': 'పాస్‌వర్డ్',
    'auth.role': 'నేను',
    'common.loading': 'లోడ్ అవుతోంది...',
  },
  ta: {
    'nav.home': 'முகப்பு',
    'nav.about': 'எங்களை பற்றி',
    'nav.features': 'அம்சங்கள்',
    'nav.contact': 'தொடர்பு',
    'nav.login': 'உள்நுழைய',
    'nav.signup': 'பதிவுசெய்ய',
    'hero.title': 'அவசர நிதி உதவி உங்களுக்கு மிகவும் தேவையான நேரத்தில்',
    'hero.subtitle': 'அனுதாபமுள்ள நன்கொடையாளர்களுடன் இணைந்து சரிபார்க்கப்பட்ட அவசர நிதியுதவியை விரைவாகவும் பாதுகாப்பாகவும் பெறுங்கள்।',
    'hero.cta.help': 'இப்போது உதவி பெறுங்கள்',
    'hero.cta.donor': 'நன்கொடையாளராக மாறுங்கள்',
    'auth.login': 'உள்நுழைய',
    'auth.signup': 'பதிவுசெய்ய',
    'auth.email': 'மின்னஞ்சல்',
    'auth.password': 'கடவுச்சொல்',
    'auth.role': 'நான்',
    'common.loading': 'ஏற்றுகிறது...',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};