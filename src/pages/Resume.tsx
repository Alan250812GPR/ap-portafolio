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
    <div className="container mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-dark-text-primary sm:text-4xl">{t('resume.title')}</h1>
          <p className="mt-4 text-lg text-dark-text-secondary">{t('resume.description')}</p>
        </div>
        <a
          href={resumePdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-accent-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover"
        >
          <Download className="h-4 w-4" />
          {t('resume.download')}
        </a>
      </motion.div>

      <div className="mt-12 space-y-12">
        {/* Profile */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <SectionTitle icon={Sparkles}>{t('resume.summary.title')}</SectionTitle>
          <p className="mt-4 text-base leading-relaxed text-dark-text-secondary">{t('resume.summary.text')}</p>
        </motion.section>

        {/* Experience */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <SectionTitle icon={Briefcase}>{t('resume.experience.title')}</SectionTitle>
          <div className="mt-6 space-y-6 border-l border-dark-border pl-6">
            {experience.map((item, index) => (
              <div key={index} className="relative">
                <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-accent-primary ring-4 ring-dark-bg" />
                <div className="flex flex-col gap-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-semibold text-dark-text-primary">{item.role}</h3>
                    <span className="flex items-center gap-1 text-sm text-dark-text-secondary">
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
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <SectionTitle icon={FileText}>{t('resume.projects.title')}</SectionTitle>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {projects.map((project, index) => (
              <div key={index} className="rounded-lg bg-dark-card p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-dark-text-primary">{project.name}</h3>
                  <span className="text-sm text-dark-text-secondary">{project.period}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-dark-text-secondary">{project.description}</p>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm font-semibold text-accent-primary hover:text-accent-hover"
                  >
                    {project.url.replace(/^https?:\/\//, '')}
                  </a>
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Achievements */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          <SectionTitle icon={TrendingUp}>{t('resume.achievements.title')}</SectionTitle>
          <div className="mt-6 space-y-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex gap-4 rounded-lg bg-dark-card p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-primary/10 text-sm font-bold text-accent-primary">
                  {achievement.company.charAt(0)}
                </span>
                <div>
                  <h3 className="font-semibold text-dark-text-primary">{achievement.company}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-dark-text-secondary">{achievement.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Tools */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
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
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
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
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <SectionTitle icon={Award}>{t('resume.certifications.title')}</SectionTitle>
          <div className="mt-6 space-y-3">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center justify-between rounded-lg bg-dark-card p-4">
                <div>
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
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
          >
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

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
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
