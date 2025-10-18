import React from 'react';
import { useTranslation } from 'react-i18next';
import { Github, Linkedin, MessageCircle } from 'lucide-react';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/alan-g-parra-robledo-617a4a138/',
    icon: Linkedin,
    label: 'socials.linkedin',
  },
  {
    href: 'https://github.com/Alan250812GPR',
    icon: Github,
    label: 'socials.github',
  },
  {
    href: 'https://wa.me/523310113945',
    icon: MessageCircle,
    label: 'socials.whatsapp',
  },
];

const SocialLinks: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-4">
      {socialLinks.map(({ href, icon: Icon, label }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t(label)}
          className="text-dark-text-secondary transition-colors hover:text-dark-text-primary"
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
