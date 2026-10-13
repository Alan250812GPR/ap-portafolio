import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { CALENDAR_LINK } from '@/config/site';

const CallToAction: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8 rounded-lg bg-dark-card p-8 text-center shadow-lg"
    >
      <h2 className="text-2xl font-bold tracking-tight text-dark-text-primary sm:text-3xl">
        {t('cta.title')}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-dark-text-secondary">
        {t('cta.subtitle')}
      </p>
      <a
        href={CALENDAR_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover"
      >
        <Calendar className="h-5 w-5" />
        {t('cta.button')}
      </a>
    </motion.section>
  );
};

export default CallToAction;
