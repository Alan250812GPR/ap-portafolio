import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const isSpanish = i18n.language.startsWith('es');

  const toggleLanguage = () => {
    i18n.changeLanguage(isSpanish ? 'en' : 'es');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex h-10 w-10 items-center justify-center gap-2 rounded-md px-3 text-sm font-medium text-dark-text-secondary transition-colors hover:bg-dark-card hover:text-dark-text-primary sm:w-auto"
      aria-label={isSpanish ? 'Switch to English' : 'Cambiar a español'}
    >
      <Languages className="h-5 w-5" />
      <span className="hidden uppercase sm:inline">{isSpanish ? 'en' : 'es'}</span>
    </button>
  );
};

export default LanguageSwitcher;
