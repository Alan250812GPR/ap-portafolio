import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download, FileText } from 'lucide-react';
import Seo from '@/components/atoms/Seo';
import { fadeUp, stagger } from '@/motion';
import AlanParraProfile from '../assets/AlanParraProfile.jpg';
import resumePdf from '../assets/Alan Gilberto Parra Robledo.pdf';

const chips = ['home.chips.years', 'home.chips.stack', 'home.chips.cert'] as const;

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto flex min-w-0 flex-col items-center pt-6 text-center md:pt-16">
      <Seo title={t('seo.home.title')} description={t('seo.home.description')} path="/" />
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="flex w-full min-w-0 flex-col items-center"
      >
        <motion.img
          variants={fadeUp}
          src={AlanParraProfile}
          alt="Alan Parra"
          className="mb-6 h-40 w-40 rounded-full object-cover shadow-lg ring-4 ring-accent-primary ring-offset-4 ring-offset-dark-bg"
        />
        <motion.h2 variants={fadeUp} className="text-xl font-medium text-dark-text-secondary">
          {t('home.greeting')}
        </motion.h2>
        <motion.h1
          variants={fadeUp}
          className="mt-2 max-w-3xl text-4xl font-bold tracking-tight text-dark-text-primary sm:text-5xl"
        >
          {t('home.title')}
        </motion.h1>
        <motion.ul variants={fadeUp} className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {chips.map((key) => (
            <li
              key={key}
              className="rounded-full bg-dark-card px-3 py-1 text-sm font-medium text-dark-text-secondary ring-1 ring-dark-border"
            >
              {t(key)}
            </li>
          ))}
        </motion.ul>
        <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg text-dark-text-secondary">
          {t('home.bio')}
        </motion.p>
        <motion.div variants={fadeUp} className="mt-8 flex flex-col flex-wrap items-center gap-4 sm:flex-row">
          <Link to="/resume" className="btn-primary">
            <FileText className="h-5 w-5" />
            {t('home.view_resume')}
          </Link>
          <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <Download className="h-5 w-5" />
            {t('home.download_cv')}
          </a>
        </motion.div>
        <motion.div variants={fadeUp}>
          <Link
            to="/projects"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-primary transition-colors hover:text-accent-hover"
          >
            {t('home.view_projects')}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
