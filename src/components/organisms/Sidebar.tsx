import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Home, Briefcase, Code, FileText } from 'lucide-react';
import DevAPLogo from '/DevAP.svg';

import LanguageSwitcher from '@/components/atoms/LanguageSwitcher';
import SocialLinks from '@/components/molecules/SocialLinks';

const navItems = [
  { to: '/', label: 'nav.home', icon: Home },
  { to: '/experience', label: 'nav.experience', icon: Briefcase },
  { to: '/projects', label: 'nav.projects', icon: Code },
  { to: '/resume', label: 'nav.resume', icon: FileText },
];

const Sidebar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <aside className="sticky top-0 hidden h-screen border-r border-dark-border bg-dark-bg md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-16 items-center border-b border-dark-border px-6">
          <NavLink to="/" className="flex items-center gap-2 font-semibold">
            <img src={DevAPLogo} alt="DevAP Logo" className="h-8 w-8" />
            <span className="text-lg text-dark-text-primary">Alan Parra</span>
          </NavLink>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            {navItems.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `relative flex items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:text-dark-text-primary ${
                    isActive ? 'text-accent-primary' : 'text-dark-text-secondary'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="sidebar-pill"
                        className="absolute inset-0 rounded-lg bg-accent-primary/15"
                        transition={{ type: 'spring', bounce: 0.18, duration: 0.4 }}
                      />
                    )}
                    <Icon className="relative z-10 h-5 w-5" />
                    <span className="relative z-10">{t(label)}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="mt-auto flex flex-col gap-4 border-t border-dark-border p-4">
          <div className="flex items-center justify-between">
            <SocialLinks />
            <LanguageSwitcher />
          </div>
          <div className="text-xs text-dark-text-secondary">
            &copy; {new Date().getFullYear()} {t('footer.rights')}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
