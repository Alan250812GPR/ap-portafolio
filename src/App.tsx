import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';

import Sidebar from '@/components/organisms/Sidebar';
import MobileNav, { MobileBottomNav } from '@/components/organisms/MobileNav';
import CallToAction from '@/components/molecules/CallToAction';
import SceneBackground from '@/components/atoms/SceneBackground';
import { ExperienceSkeleton, HomeSkeleton, ProjectsSkeleton, ResumeSkeleton } from '@/components/atoms/Skeleton';
import useScrollToTop from '@/hooks/useScrollToTop';

const Home = lazy(() => import('@/pages/Home'));
const Experience = lazy(() => import('@/pages/Experience'));
const Projects = lazy(() => import('@/pages/Projects'));
const Resume = lazy(() => import('@/pages/Resume'));

function PageSkeleton() {
  const { pathname } = useLocation();
  if (pathname === '/experience') return <ExperienceSkeleton />;
  if (pathname === '/projects') return <ProjectsSkeleton />;
  if (pathname === '/resume') return <ResumeSkeleton />;
  return <HomeSkeleton />;
}

const SKELETON_MS = 1500;

let routePause: { pathname: string; done: boolean; promise: Promise<void> } | null = null;

function RoutePause({ pathname }: { pathname: string }) {
  if (routePause?.pathname !== pathname) {
    const entry = { pathname, done: false, promise: Promise.resolve() };
    entry.promise = new Promise<void>((resolve) => {
      window.setTimeout(() => {
        entry.done = true;
        resolve();
      }, SKELETON_MS);
    });
    routePause = entry;
  }

  if (!routePause.done) throw routePause.promise;
  return null;
}

function PageLayout() {
  const location = useLocation();
  useScrollToTop();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
        className="flex min-w-0 flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6"
      >
        <Suspense fallback={<PageSkeleton />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
          <RoutePause pathname={location.pathname} />
        </Suspense>
        <CallToAction />
      </motion.main>
    </AnimatePresence>
  );
}

function HomeScene() {
  const { pathname } = useLocation();
  if (pathname !== '/') return null;
  return <SceneBackground />;
}

function App() {
  return (
    <MotionConfig reducedMotion="user">
    <Router>
      <div className="grid min-h-screen w-full md:grid-cols-[280px_minmax(0,1fr)]">
        <Sidebar />
        <div className="relative z-0 flex min-w-0 flex-col">
          <HomeScene />
          <div className="relative z-10 flex min-w-0 flex-col">
            <MobileNav />
            <PageLayout />
            <div className="h-16 md:hidden" /> {/* Spacer for bottom nav */}
          </div>
        </div>
        <MobileBottomNav />
      </div>
    </Router>
    </MotionConfig>
  );
}

export default App;
