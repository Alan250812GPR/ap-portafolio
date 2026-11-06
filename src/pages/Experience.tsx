import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Seo from '@/components/atoms/Seo';
import { fadeUp, stagger, viewport } from '@/motion';

type Tech = { name: string; icon: string };

const groups: { id: string; items: Tech[] }[] = [
  {
    id: 'backend',
    items: [
      { name: '.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
      { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
      { name: 'NestJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' },
      { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
      { name: 'Symfony', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg' },
      { name: "JetBrains IDE'S", icon: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/jetbrains/default.svg' },
    ],
  },
  {
    id: 'frontend',
    items: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
      { name: 'Analog', icon: 'https://ui-avatars.com/api/?name=Analog&background=DD0031&color=fff&font-size=0.35' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    ],
  },
  {
    id: 'desktop',
    items: [
      { name: '.NET MAUI', icon: 'https://ui-avatars.com/api/?name=MAUI&background=512BD4&color=fff&font-size=0.35' },
      { name: 'Avalonia UI', icon: 'https://ui-avatars.com/api/?name=Avalonia&background=8F00FF&color=fff&font-size=0.3' },
    ],
  },
  {
    id: 'ecommerce',
    items: [
      { name: 'Magento', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg' },
      { name: 'Shopify', icon: 'https://cdn.simpleicons.org/shopify/95BF47' },
    ],
  },
  {
    id: 'data',
    items: [
      { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
      { name: 'MariaDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    ],
  },
  {
    id: 'infra',
    items: [
      { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'RabbitMQ', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg' },
      { name: 'Ocelot', icon: 'https://cdn.simpleicons.org/dotnet/512BD4' },
      { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
    ],
  },
  {
    id: 'devops',
    items: [
      { name: 'Datadog', icon: 'https://cdn.simpleicons.org/datadog/632CA6' },
      { name: 'PostHog', icon: 'https://cdn.simpleicons.org/posthog/F54E00' },
      { name: 'TeamCity JetBrains', icon: 'https://cdn.simpleicons.org/teamcity/000000' },
      { name: 'Azure DevOps', icon: 'https://cdn.simpleicons.org/azuredevops/0078D7' },
      { name: 'GitHub Actions', icon: 'https://cdn.simpleicons.org/githubactions/2088FF' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    ],
  },
  {
    id: 'ai',
    items: [
      { name: 'n8n', icon: 'https://cdn.simpleicons.org/n8n/EA4335' },
      { name: 'Hugging Face', icon: 'https://cdn.simpleicons.org/huggingface/FFD21E' },
      { name: 'Semantic Kernel', icon: 'https://cdn.simpleicons.org/microsoft/00A4EF' },
      { name: 'Gemini', icon: 'https://cdn.simpleicons.org/googlegemini/8E75B2' },
      { name: 'Claude', icon: 'https://cdn.simpleicons.org/anthropic/191919' },
      { name: 'DeepSeek', icon: 'https://ui-avatars.com/api/?name=Deep+Seek&background=4D6BFE&color=fff&font-size=0.4' },
      { name: 'Kimi', icon: 'https://ui-avatars.com/api/?name=Kimi&background=0D0D0D&color=fff&font-size=0.4' },
      { name: 'OpenCode', icon: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/opencode/default.svg' },
      { name: 'Cursor', icon: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/cursor/default.svg' },
    ],
  },
];

const Experience: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto min-w-0">
      <Seo title={t('seo.experience.title')} description={t('seo.experience.description')} path="/experience" />
      <h1 className="text-3xl font-bold tracking-tight text-dark-text-primary sm:text-4xl">{t('experience.title')}</h1>
      <p className="mt-4 max-w-3xl text-lg text-dark-text-secondary">{t('experience.description')}</p>

      <div className="mt-12 space-y-12">
        {groups.map((group) => (
          <motion.section
            key={group.id}
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <motion.h2 variants={fadeUp} className="text-xl font-semibold text-dark-text-primary">
              {t(`experience.groups.${group.id}`)}
            </motion.h2>
            <motion.div
              variants={stagger}
              className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
            >
              {group.items.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="flex flex-col items-center justify-center gap-3 rounded-lg border border-transparent bg-dark-card p-6 transition-colors hover:border-dark-border"
                >
                  <img src={tech.icon} alt="" className="h-12 w-12 rounded-md object-contain" />
                  <span className="break-words text-center text-sm font-medium text-dark-text-primary">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default Experience;
