import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center justify-center gap-2 rounded-md px-3 h-10 w-10 sm:w-auto text-sm font-medium text-dark-text-secondary hover:bg-dark-card hover:text-dark-text-primary transition-colors"
      aria-label={`Switch to ${i18n.language === 'es' ? 'English' : 'Español'}`}
    >
      <Languages className="h-5 w-5" />
      <span className="uppercase hidden sm:inline">{i18n.language === 'es' ? 'en' : 'es'}</span>
    </button>
  );
};

export default LanguageSwitcher;
