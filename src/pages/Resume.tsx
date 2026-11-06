import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Download,
  Briefcase,
  Award,
  GraduationCap,
  Languages as LanguagesIcon,
  Wrench,
  Sparkles,
  FileText,
  TrendingUp,
  Calendar,
} from 'lucide-react';
import Seo from '@/components/atoms/Seo';
import { fadeUp, viewport } from '@/motion';
import resumePdf from '../assets/Alan Gilberto Parra Robledo.pdf';

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location?: string;
  bullets: string[];
};
type ProjectItem = {
  name: string;
  period: string;
  url?: string;
  description: string;
};
type AchievementItem = { company: string; text: string };
type ToolGroup = { group: string; items: string };
type CertItem = { name: string; issuer: string; year: string };
type EducationItem = { degree: string; school: string; period: string };
type LanguageItem = { name: string; level: string };

const sections = [
  { id: 'perfil', label: 'resume.summary.title' },
  { id: 'experiencia', label: 'resume.experience.title' },
  { id: 'proyectos', label: 'resume.projects.title' },
  { id: 'logros', label: 'resume.achievements.title' },
  { id: 'herramientas', label: 'resume.tools.title' },
  { id: 'habilidades', label: 'resume.skills.title' },
  { id: 'certificaciones', label: 'resume.certifications.title' },
  { id: 'formacion', label: 'resume.education.title' },
  { id: 'idiomas', label: 'resume.languages.title' },
] as const;

const revealProps = {
  variants: fadeUp,
  initial: 'hidden' as const,
  whileInView: 'show' as const,
  viewport,
};

const sectionClass = 'scroll-mt-32 md:scroll-mt-20';

const SectionTitle: React.FC<{ icon: React.ElementType; children: React.ReactNode }> = ({
  icon: Icon,
  children,
}) => (
  <h2 className="flex items-center gap-3 text-2xl font-bold tracking-tight text-dark-text-primary">
    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-primary/10 text-accent-primary">
      <Icon className="h-5 w-5" />
    </span>
    {children}
  </h2>
);

const Resume: React.FC = () => {
  const { t } = useTranslation();

  const experience = t('resume.experience.items', { returnObjects: true }) as unknown as ExperienceItem[];
  const projects = t('resume.projects.items', { returnObjects: true }) as unknown as ProjectItem[];
  const achievements = t('resume.achievements.items', { returnObjects: true }) as unknown as AchievementItem[];
  const toolGroups = t('resume.tools.groups', { returnObjects: true }) as unknown as ToolGroup[];
  const technicalSkills = t('resume.skills.technical_items', { returnObjects: true }) as unknown as string[];
  const softSkills = t('resume.skills.soft_items', { returnObjects: true }) as unknown as string[];
  const certifications = t('resume.certifications.items', { returnObjects: true }) as unknown as CertItem[];
  const education = t('resume.education.items', { returnObjects: true }) as unknown as EducationItem[];
  const languages = t('resume.languages.items', { returnObjects: true }) as unknown as LanguageItem[];

  return (
    <div className="container mx-auto min-w-0 max-w-4xl">
      <Seo title={t('seo.resume.title')} description={t('seo.resume.description')} path="/resume" />
      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
        <div className="min-w-0">
          <h1 className="text-3xl font-bold tracking-tight text-dark-text-primary sm:text-4xl">{t('resume.title')}</h1>
          <p className="mt-4 text-lg text-dark-text-secondary">{t('resume.description')}</p>
        </div>
        <a
          href={resumePdf}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary shrink-0"
        >
          <Download className="h-4 w-4" />
          {t('resume.download')}
        </a>
      </div>

      <nav aria-label={t('resume.title')} className="sticky top-16 z-10 -mx-4 mt-6 flex w-full min-w-0 gap-2 overflow-x-auto bg-dark-bg/95 px-4 py-3 backdrop-blur-sm md:top-0 md:mx-0 md:rounded-lg md:px-0">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="shrink-0 rounded-full bg-dark-card px-3 py-1 text-sm font-medium text-dark-text-secondary ring-1 ring-dark-border transition-colors hover:text-accent-primary"
          >
            {t(section.label)}
          </a>
        ))}
      </nav>

      <div className="mt-12 space-y-12">
        {/* Profile */}
        <motion.section id="perfil" className={sectionClass} {...revealProps}>
          <SectionTitle icon={Sparkles}>{t('resume.summary.title')}</SectionTitle>
          <p className="mt-4 text-base leading-relaxed text-dark-text-secondary">{t('resume.summary.text')}</p>
        </motion.section>

        {/* Experience */}
        <motion.section id="experiencia" className={sectionClass} {...revealProps}>
          <SectionTitle icon={Briefcase}>{t('resume.experience.title')}</SectionTitle>
          <div className="mt-6 space-y-6 border-l border-dark-border pl-6">
            {experience.map((item, index) => (
              <div key={index} className="relative">
                <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-accent-primary ring-4 ring-dark-bg" />
                <div className="flex flex-col gap-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                    <h3 className="min-w-0 text-lg font-semibold text-dark-text-primary">{item.role}</h3>
                    <span className="flex shrink-0 items-center gap-1 text-sm text-dark-text-secondary">
                      <Calendar className="h-3.5 w-3.5" />
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-accent-primary">
                    {item.company}
                    {item.location ? ` · ${item.location}` : ''}
                  </p>
                  {item.bullets.length > 0 && (
                    <ul className="mt-3 space-y-2">
                      {item.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-2 text-sm leading-relaxed text-dark-text-secondary">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-dark-text-secondary" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section id="proyectos" className={sectionClass} {...revealProps}>
          <SectionTitle icon={FileText}>{t('resume.projects.title')}</SectionTitle>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {projects.map((project, index) => (
              <div key={index} className="rounded-lg bg-dark-card p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="min-w-0 text-lg font-semibold text-dark-text-primary">{project.name}</h3>
                  <span className="text-sm text-dark-text-secondary">{project.period}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-dark-text-secondary">{project.description}</p>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block max-w-full break-all text-sm font-semibold text-accent-primary hover:text-accent-hover"
                  >
                    {project.url.replace(/^https?:\/\//, '')}
                  </a>
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Achievements */}
        <motion.section id="logros" className={sectionClass} {...revealProps}>
          <SectionTitle icon={TrendingUp}>{t('resume.achievements.title')}</SectionTitle>
          <div className="mt-6 space-y-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex gap-4 rounded-lg bg-dark-card p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-primary/10 text-sm font-bold text-accent-primary">
                  {achievement.company.charAt(0)}
                </span>
                <div className="min-w-0">
                  <h3 className="font-semibold text-dark-text-primary">{achievement.company}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-dark-text-secondary">{achievement.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Tools */}
        <motion.section id="herramientas" className={sectionClass} {...revealProps}>
          <SectionTitle icon={Wrench}>{t('resume.tools.title')}</SectionTitle>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {toolGroups.map((tool, index) => (
              <div key={index} className="rounded-lg bg-dark-card p-5">
                <h3 className="font-semibold text-dark-text-primary">{tool.group}</h3>
                <p className="mt-2 text-sm leading-relaxed text-dark-text-secondary">{tool.items}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section id="habilidades" className={sectionClass} {...revealProps}>
          <SectionTitle icon={Award}>{t('resume.skills.title')}</SectionTitle>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="font-semibold text-dark-text-primary">{t('resume.skills.technical')}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {technicalSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-dark-card px-3 py-1 text-xs font-medium text-dark-text-secondary ring-1 ring-dark-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-dark-text-primary">{t('resume.skills.soft')}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-dark-card px-3 py-1 text-xs font-medium text-dark-text-secondary ring-1 ring-dark-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Certifications */}
        <motion.section id="certificaciones" className={sectionClass} {...revealProps}>
          <SectionTitle icon={Award}>{t('resume.certifications.title')}</SectionTitle>
          <div className="mt-6 space-y-3">
            {certifications.map((cert, index) => (
              <div key={index} className="flex flex-wrap items-center justify-between gap-3 rounded-lg bg-dark-card p-4">
                <div className="min-w-0">
                  <h3 className="font-semibold text-dark-text-primary">{cert.name}</h3>
                  {cert.issuer && <p className="text-sm text-dark-text-secondary">{cert.issuer}</p>}
                </div>
                <span className="shrink-0 rounded-full bg-accent-primary/10 px-3 py-1 text-xs font-semibold text-accent-primary">
                  {cert.year}
                </span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Education & Languages */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
          <motion.section id="formacion" className={sectionClass} {...revealProps}>
            <SectionTitle icon={GraduationCap}>{t('resume.education.title')}</SectionTitle>
            <div className="mt-6 space-y-3">
              {education.map((item, index) => (
                <div key={index} className="rounded-lg bg-dark-card p-5">
                  <h3 className="font-semibold text-dark-text-primary">{item.degree}</h3>
                  <p className="mt-1 text-sm text-dark-text-secondary">{item.school}</p>
                  <p className="mt-1 text-sm text-dark-text-secondary">{item.period}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section id="idiomas" className={sectionClass} {...revealProps}>
            <SectionTitle icon={LanguagesIcon}>{t('resume.languages.title')}</SectionTitle>
            <div className="mt-6 space-y-3">
              {languages.map((lang, index) => (
                <div key={index} className="flex items-center justify-between rounded-lg bg-dark-card p-5">
                  <h3 className="font-semibold text-dark-text-primary">{lang.name}</h3>
                  <span className="rounded-full bg-accent-primary/10 px-3 py-1 text-xs font-semibold text-accent-primary">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
