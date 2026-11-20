import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const WELCOME_MS = 3500;
const STORAGE_KEY = 'ap-welcome-seen';
const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/*#@';

function scrambled(phrase: string, reveal: number) {
  return [...phrase]
    .map((char, index) => {
      if (char === ' ') return ' ';
      if (index < reveal) return char;
      return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
    })
    .join('');
}

const WelcomeScramble: React.FC = () => {
  const { t } = useTranslation();
  const phrase = t('welcome.scramble');
  const [visible, setVisible] = useState(() => sessionStorage.getItem(STORAGE_KEY) !== '1');
  const [text, setText] = useState(phrase);

  useEffect(() => {
    if (!visible) return;
    sessionStorage.setItem(STORAGE_KEY, '1');

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hide = window.setTimeout(() => setVisible(false), WELCOME_MS);
    if (reduce) {
      setText(phrase);
      return () => window.clearTimeout(hide);
    }

    const revealAt = [...phrase].length;
    const step = (WELCOME_MS * 0.7) / revealAt;
    let tick = 0;
    setText(scrambled(phrase, 0));
    const id = window.setInterval(() => {
      tick += 1;
      if (tick >= revealAt) {
        setText(phrase);
        window.clearInterval(id);
        return;
      }
      setText(scrambled(phrase, tick));
    }, step);

    return () => {
      window.clearTimeout(hide);
      window.clearInterval(id);
    };
  }, [phrase, visible]);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-label={phrase}
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark-bg px-6"
    >
      <p
        aria-hidden
        className="max-w-4xl text-center font-mono text-2xl font-medium tracking-[0.18em] text-accent-primary sm:text-4xl"
      >
        {text}
      </p>
    </div>
  );
};

export default WelcomeScramble;
