import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
    <aside className="hidden border-r border-dark-border bg-dark-bg md:block">
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
                  `flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-dark-text-primary ${
                    isActive
                      ? 'bg-dark-card text-dark-text-primary'
                      : 'text-dark-text-secondary'
                  }`
                }
              >
                <Icon className="h-5 w-5" />
                {t(label)}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="mt-auto flex flex-col gap-4 p-4 border-t border-dark-border">
          <div className="flex justify-between items-center">
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
