import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import AlanParraProfile from '../assets/AlanParraProfile.jpg';
import resumePdf from '../assets/Alan Gilberto Parra Robledo.pdf';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto flex h-full flex-col items-center justify-center text-center">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <img
          src={AlanParraProfile}
          alt="Alan Parra Profile"
          className="h-40 w-40 rounded-full object-cover shadow-lg border-4 border-dark-border"
        />
      </motion.div>
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-xl font-medium text-dark-text-secondary"
      >
        {t('home.greeting')}
      </motion.h2>
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-2 text-4xl font-bold tracking-tight text-dark-text-primary sm:text-5xl"
      >
        {t('home.title')}
      </motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-6 max-w-2xl text-lg text-dark-text-secondary"
      >
        {t('home.bio')}
      </motion.p>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-8 flex flex-col sm:flex-row gap-4"
      >
        <Link
          to="/resume"
          className="flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover"
        >
          <FileText className="h-5 w-5" />
          {t('home.view_resume')}
        </Link>
        <a
          href={resumePdf}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-md border border-dark-border bg-dark-card px-6 py-3 text-base font-semibold text-dark-text-primary shadow-sm transition-colors hover:bg-dark-border"
        >
          <Download className="h-5 w-5" />
          {t('home.download_cv')}
        </a>
      </motion.div>
    </div>
  );
};

export default Home;
