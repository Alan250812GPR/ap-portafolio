import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { CALENDAR_LINK } from '@/config/site';
import { fadeUp, viewport } from '@/motion';

const CallToAction: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className="mt-8 rounded-lg border-t-4 border-accent-primary bg-dark-card p-8 text-center shadow-lg"
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
        className="btn-primary mt-8"
      >
        <Calendar className="h-5 w-5" />
        {t('cta.button')}
      </a>
    </motion.section>
  );
};

export default CallToAction;
