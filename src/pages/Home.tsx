import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Download, FileText } from 'lucide-react';
import Seo from '@/components/atoms/Seo';
import { fadeUp, stagger } from '@/motion';
import { useResumePdf } from '@/hooks/useResumePdf';
import AlanParraProfile from '../assets/AlanParraProfile.jpg';

const chips = ['home.chips.years', 'home.chips.stack', 'home.chips.cert'] as const;

const Home: React.FC = () => {
  const { t } = useTranslation();
  const resumePdf = useResumePdf();
  const [photoReady, setPhotoReady] = React.useState(false);

  return (
    <div className="container mx-auto flex min-w-0 flex-col items-center pt-6 text-center md:pt-16">
      <Seo title={t('seo.home.title')} description={t('seo.home.description')} path="/" />
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="flex w-full min-w-0 flex-col items-center"
      >
        <motion.div variants={fadeUp} className="relative mb-6 h-40 w-40">
          {!photoReady && (
            <div
              aria-hidden
              className="skeleton absolute inset-0 rounded-full ring-4 ring-accent-primary ring-offset-4 ring-offset-dark-bg"
            />
          )}
          <img
            src={AlanParraProfile}
            alt="Alan Parra"
            width={160}
            height={160}
            fetchPriority="high"
            onLoad={() => setPhotoReady(true)}
            className={`h-40 w-40 rounded-full object-cover shadow-lg ring-4 ring-accent-primary ring-offset-4 ring-offset-dark-bg ${photoReady ? 'opacity-100' : 'opacity-0'}`}
          />
        </motion.div>
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
          <a href={resumePdf.href} download={resumePdf.filename} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <Download className="h-5 w-5" />
            {t('home.download_cv')}
          </a>
        </motion.div>
        <motion.div variants={fadeUp}>
          <Link
            to="/projects"
            className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-primary transition-colors duration-150 hover:text-accent-hover"
          >
            {t('home.view_projects')}
            <ArrowRight className="h-4 w-4 motion-safe:transition-transform motion-safe:duration-150 motion-safe:group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
