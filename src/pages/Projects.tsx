import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Seo from '@/components/atoms/Seo';
import { fadeUp, stagger, viewport } from '@/motion';
// @ts-ignore
import GithubIcon from '/githubB.png';

const projectsData = [
  { id: 'mazamitla', imageUrl: 'https://mazamitlasierratours.com/public/IMG/MzLogos/CompleteLogo-Green.png', url: 'https://mazamitlasierratours.com' },
  { id: 'voguex', imageUrl: 'https://voguex.com/VoguexColor.svg', url: 'https://voguex.com/' },
  { id: 'asturiano', imageUrl: 'https://cdn.shopify.com/s/files/1/0719/1183/3756/files/LOGO_ASTURIANO_2023-2_1.png?v=1770309561', url: 'https://tiendaselasturiano.com/' },
  { id: 'macclipboard', imageUrl: GithubIcon, url: 'https://github.com/Alan250812GPR/MacClipboardMonitorByAP' },
  { id: 'portfolio', imageUrl: GithubIcon, url: 'https://github.com/Alan250812GPR/ap-portafolio' },
  { id: 'helpdesk', imageUrl: GithubIcon, url: 'https://github.com/Alan250812GPR/HelpDesk' },
  { id: 'pinochueco', imageUrl: 'https://pinochueco.com/assets/img/logo.png', url: 'https://pinochueco.com/' },
  { id: 'simplestock', imageUrl: GithubIcon, url: 'https://github.com/Alan250812GPR/SimpleStock' },
];

const ProjectImage: React.FC<{ src: string; title: string }> = ({ src, title }) => {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="flex h-32 w-32 items-center justify-center rounded-full border-2 border-dark-border bg-dark-bg">
        <span className="select-none text-5xl font-extrabold text-dark-text-secondary">
          {title.charAt(0).toUpperCase()}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt=""
      className="max-h-full max-w-full object-contain motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-105"
      onError={() => setImageError(true)}
    />
  );
};

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto min-w-0">
      <Seo title={t('seo.projects.title')} description={t('seo.projects.description')} path="/projects" />
      <h1 className="text-3xl font-bold tracking-tight text-dark-text-primary sm:text-4xl">{t('projects.title')}</h1>
      <p className="mt-4 max-w-3xl text-lg text-dark-text-secondary">{t('projects.description')}</p>
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {projectsData.map(({ id, imageUrl, url }) => {
          const title = t(`projects.items.${id}.title`);
          return (
            <motion.a
              key={id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group relative flex flex-col overflow-hidden rounded-lg bg-dark-card shadow-lg"
            >
              <div className="flex h-40 items-center justify-center overflow-hidden bg-white/5 p-4">
                <ProjectImage src={imageUrl} title={title} />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="break-words text-lg font-bold text-dark-text-primary">{title}</h3>
                <p className="mt-2 flex-1 text-sm text-dark-text-secondary">{t(`projects.items.${id}.desc`)}</p>
                <span className="mt-4 inline-flex items-center gap-2 self-start text-sm font-semibold text-accent-primary transition-colors group-hover:text-accent-hover">
                  {t('projects.button')}
                  <ArrowUpRight className="h-4 w-4 motion-safe:transition-transform motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:translate-x-1" />
                </span>
              </div>
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Projects;
