import { useTranslation } from 'react-i18next';
import resumeEs from '@/assets/Alan_Parra_CV_2026.pdf';
import resumeEn from '@/assets/Alan_Parra_CV_2026_UK.pdf';

export function useResumePdf() {
  const { i18n } = useTranslation();
  const isSpanish = i18n.language.startsWith('es');

  return {
    href: isSpanish ? resumeEs : resumeEn,
    filename: isSpanish ? 'Alan_Parra_CV_2026.pdf' : 'Alan_Parra_CV_2026_UK.pdf',
  };
}
