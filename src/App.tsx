import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { LoaderCircle } from 'lucide-react';

import Sidebar from '@/components/organisms/Sidebar';
import MobileNav, { MobileBottomNav } from '@/components/organisms/MobileNav';
import useScrollToTop from '@/hooks/useScrollToTop';

const Home = lazy(() => import('@/pages/Home'));
const Experience = lazy(() => import('@/pages/Experience'));
const Projects = lazy(() => import('@/pages/Projects'));
const Resume = lazy(() => import('@/pages/Resume'));

const LoadingSpinner: React.FC = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-bg/80 backdrop-blur-sm">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    >
      <LoaderCircle className="h-12 w-12 text-accent-primary" />
    </motion.div>
  </div>
);

function PageLayout() {
  const location = useLocation();
  useScrollToTop();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6"
      >
        <Suspense fallback={<LoadingSpinner />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </Suspense>
      </motion.main>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="grid min-h-screen w-full md:grid-cols-[280px_1fr]">
        <Sidebar />
        <div className="flex flex-col">
          <MobileNav />
          <PageLayout />
          <div className="h-16 md:hidden" /> {/* Spacer for bottom nav */}
        </div>
        <MobileBottomNav />
      </div>
    </Router>
  );
}

export default App;
