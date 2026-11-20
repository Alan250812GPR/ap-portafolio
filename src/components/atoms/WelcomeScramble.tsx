import React, { useEffect, useState } from 'react';
import { animate, motion, useMotionTemplate, useMotionValue } from 'motion/react';
import { useTranslation } from 'react-i18next';

const WELCOME_MS = 3500;
const BUILD_MS = 2500;
const STORAGE_KEY = 'ap-welcome-seen';
const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/*#@';

const CODE = `const site = await agents.build({
  name: "Alan Parra",
  stack: ["React", "TypeScript"],
  scene: "asteroids",
  palette: ["#13284A", "#FFC61A"],
})

site.mount(document.body)`;

const AGENTS = [
  { name: 'Edinburgh', color: '#FFC61A', left: ['12%', '28%', '22%'], top: ['22%', '38%', '58%'] },
  { name: 'Glasgow', color: '#A8C8EA', left: ['74%', '62%', '70%'], top: ['18%', '46%', '34%'] },
  { name: 'Aberdeen', color: '#F4F7FB', left: ['18%', '40%', '30%'], top: ['72%', '56%', '64%'] },
  { name: 'Dundee', color: '#E6AC00', left: ['80%', '68%', '76%'], top: ['70%', '58%', '48%'] },
];

type Phase = 'scramble' | 'build' | 'drop' | 'reveal';

function scrambled(phrase: string, reveal: number) {
  return [...phrase]
    .map((char, index) => {
      if (char === ' ') return ' ';
      if (index < reveal) return char;
      return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
    })
    .join('');
}

function Cursor({ color, label }: { color: string; label: string }) {
  return (
    <span className="flex items-start gap-1" style={{ color }}>
      <svg viewBox="0 0 16 20" className="h-5 w-4 drop-shadow" aria-hidden>
        <path d="M1 1 L1 15.5 L5.2 12.2 L8.4 19 L11 17.8 L7.7 11 L13.5 11 Z" fill="currentColor" />
      </svg>
      <span className="rounded bg-dark-bg/80 px-1.5 py-0.5 text-[10px] font-medium tracking-wide">{label}</span>
    </span>
  );
}

const WelcomeScramble: React.FC = () => {
  const { t } = useTranslation();
  const phrase = t('welcome.scramble');
  const [visible, setVisible] = useState(() => sessionStorage.getItem(STORAGE_KEY) !== '1');
  const [phase, setPhase] = useState<Phase>('scramble');
  const [text, setText] = useState(phrase);
  const [typed, setTyped] = useState('');
  const hole = useMotionValue(0);
  const maskImage = useMotionTemplate`radial-gradient(circle at 50% 48%, transparent ${hole}%, #000 calc(${hole}% + 18px))`;

  useEffect(() => {
    if (!visible) return;
    sessionStorage.setItem(STORAGE_KEY, '1');

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setText(phrase);
      const hide = window.setTimeout(() => setVisible(false), WELCOME_MS);
      return () => window.clearTimeout(hide);
    }

    const revealAt = [...phrase].length;
    const step = (WELCOME_MS * 0.7) / revealAt;
    let tick = 0;
    setText(scrambled(phrase, 0));
    const scramble = window.setInterval(() => {
      tick += 1;
      if (tick >= revealAt) {
        setText(phrase);
        window.clearInterval(scramble);
        return;
      }
      setText(scrambled(phrase, tick));
    }, step);

    const build = window.setTimeout(() => setPhase('build'), WELCOME_MS);
    const drop = window.setTimeout(() => setPhase('drop'), WELCOME_MS + BUILD_MS);

    return () => {
      window.clearInterval(scramble);
      window.clearTimeout(build);
      window.clearTimeout(drop);
    };
  }, [phrase, visible]);

  useEffect(() => {
    if (phase !== 'build') return;
    const step = window.setInterval(() => {
      setTyped((current) => (current.length >= CODE.length ? current : CODE.slice(0, current.length + 2)));
    }, 14);
    return () => window.clearInterval(step);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'reveal') return;
    const controls = animate(hole, 160, {
      duration: 0.95,
      ease: [0.22, 1, 0.36, 1],
      onComplete: () => setVisible(false),
    });
    return () => controls.stop();
  }, [hole, phase]);

  if (!visible) return null;

  return (
    <motion.div
      role="status"
      aria-label={phrase}
      data-phase={phase}
      className="fixed inset-0 z-50 overflow-hidden bg-dark-bg"
      style={phase === 'reveal' ? { maskImage, WebkitMaskImage: maskImage } : undefined}
    >
      {phase === 'scramble' && (
        <p aria-hidden className="absolute inset-0 flex items-center justify-center px-6 text-center font-mono text-2xl font-medium tracking-[0.18em] text-accent-primary sm:text-4xl">
          {text}
        </p>
      )}

      {phase !== 'scramble' && (
        <div aria-hidden className="absolute inset-0">
          <div className="absolute left-1/2 top-1/2 w-[min(100%-2rem,34rem)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg border border-dark-border bg-[#0e1e38] shadow-2xl">
            <div className="flex items-center gap-1.5 border-b border-dark-border px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent-primary" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#A8C8EA]" />
              <span className="ml-2 font-mono text-[11px] text-dark-text-secondary">portfolio.tsx</span>
            </div>
            <pre className="min-h-52 whitespace-pre-wrap px-4 py-3 font-mono text-[13px] leading-6 text-[#F4F7FB]">
              {typed}
              <span className="ml-0.5 inline-block h-4 w-1.5 translate-y-0.5 bg-accent-primary align-middle motion-safe:animate-pulse" />
            </pre>
          </div>

          {AGENTS.map((agent) => (
            <motion.div
              key={agent.color}
              className="absolute"
              initial={{ left: agent.left[0], top: agent.top[0] }}
              animate={{ left: agent.left, top: agent.top }}
              transition={{ duration: 2.4, ease: 'easeInOut', times: [0, 0.45, 1] }}
            >
              <Cursor color={agent.color} label={agent.name} />
            </motion.div>
          ))}

          {(phase === 'drop' || phase === 'reveal') && (
            <motion.div
              className="absolute left-1/2 top-0 z-20"
              initial={{ y: -56, x: '-50%', scaleY: 1.4 }}
              animate={{ y: 'calc(50vh - 24px)', scaleY: 1 }}
              transition={{ duration: 0.62, ease: [0.45, 0, 1, 0.65] }}
              onAnimationComplete={() => setPhase('reveal')}
            >
              <svg width="26" height="36" viewBox="0 0 26 36" aria-hidden>
                <path d="M13 1C13 1 25 16 25 24a12 12 0 1 1-24 0C1 16 13 1 13 1Z" fill="#FFC61A" />
              </svg>
            </motion.div>
          )}

          {phase === 'reveal' &&
            [0, 1, 2].map((ring) => (
              <motion.span
                key={ring}
                className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-primary"
                initial={{ scale: 0.2, opacity: 0.85 }}
                animate={{ scale: 6 + ring * 2, opacity: 0 }}
                transition={{ duration: 0.8, delay: ring * 0.06, ease: 'easeOut' }}
              />
            ))}
        </div>
      )}
    </motion.div>
  );
};

export default WelcomeScramble;
