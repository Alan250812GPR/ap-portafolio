import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home, Briefcase, Code, FileText } from 'lucide-react';
import DevAPLogo from '/DevAP.svg';

// Top mobile navigation bar
const MobileNav: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const pageTitles: { [key: string]: string } = {
    '/': 'nav.home',
    '/experience': 'nav.experience',
    '/projects': 'nav.projects',
    '/resume': 'nav.resume',
  };

  const currentPageTitle = t(pageTitles[location.pathname] || 'nav.home');

  return (
    <header className="flex h-16 items-center justify-between gap-4 border-b border-dark-border bg-dark-bg px-4 md:hidden sticky top-0 z-10">
      <NavLink to="/" className="flex items-center gap-2 font-semibold">
        <img src={DevAPLogo} alt="DevAP Logo" className="h-8 w-8" />
        <span className="text-lg text-dark-text-primary">{currentPageTitle}</span>
      </NavLink>
    </header>
  );
};

const navItems = [
  { to: '/', label: 'nav.home', icon: Home },
  { to: '/experience', label: 'nav.experience', icon: Briefcase },
  { to: '/projects', label: 'nav.projects', icon: Code },
  { to: '/resume', label: 'nav.resume', icon: FileText },
];

// Bottom mobile navigation bar
const MobileBottomNav: React.FC = () => {
  const { t } = useTranslation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-10 border-t border-dark-border bg-dark-bg/80 backdrop-blur-sm md:hidden">
      <div className="grid h-16 grid-cols-4 items-center gap-2 px-2">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-1 rounded-lg p-2 transition-colors ${
                isActive
                  ? 'text-accent-primary'
                  : 'text-dark-text-secondary hover:text-dark-text-primary'
              }`
            }
          >
            <Icon className="h-6 w-6" />
            <span className="text-xs font-medium">{t(label)}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export { MobileBottomNav };
export default MobileNav;
