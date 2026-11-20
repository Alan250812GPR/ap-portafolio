import React from 'react';
import { useTranslation } from 'react-i18next';

const bone = 'skeleton';

const Status: React.FC<{ children: React.ReactNode; className: string }> = ({ children, className }) => {
  const { t } = useTranslation();

  return (
    <div role="status" aria-busy="true" className={className}>
      <span className="sr-only">{t('status.loading')}</span>
      {children}
    </div>
  );
};

export const HomeSkeleton: React.FC = () => (
  <Status className="container mx-auto flex min-w-0 flex-col items-center pt-6 md:pt-16">
    <div aria-hidden className="flex w-full min-w-0 flex-col items-center">
      <div className={`mb-6 h-40 w-40 rounded-full ring-4 ring-accent-primary ring-offset-4 ring-offset-dark-bg ${bone}`} />
      <div className={`h-5 w-40 rounded-md ${bone}`} />
      <div className={`mt-4 h-10 w-full max-w-xl rounded-md ${bone}`} />
      <div className={`mt-3 h-10 w-4/5 max-w-lg rounded-md ${bone}`} />
      <div className="mt-6 flex gap-2">
        <div className={`h-8 w-20 rounded-full ${bone}`} />
        <div className={`h-8 w-24 rounded-full ${bone}`} />
        <div className={`h-8 w-16 rounded-full ${bone}`} />
      </div>
      <div className="mt-6 flex w-full max-w-2xl flex-col items-center gap-3">
        <div className={`h-4 w-full rounded-md ${bone}`} />
        <div className={`h-4 w-11/12 rounded-md ${bone}`} />
        <div className={`h-4 w-4/5 rounded-md ${bone}`} />
      </div>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <div className={`h-12 w-48 rounded-md ${bone}`} />
        <div className={`h-12 w-52 rounded-md ${bone}`} />
      </div>
    </div>
  </Status>
);

export const ExperienceSkeleton: React.FC = () => (
  <Status className="container mx-auto min-w-0">
    <div aria-hidden>
      <div className={`h-10 w-72 max-w-full rounded-md ${bone}`} />
      <div className={`mt-4 h-5 w-full max-w-3xl rounded-md ${bone}`} />
      <div className={`mt-3 h-5 w-2/3 max-w-xl rounded-md ${bone}`} />
      <div className={`mt-12 h-6 w-32 rounded-md ${bone}`} />
      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {Array.from({ length: 8 }, (_, index) => (
          <div key={index} className={`h-32 rounded-lg ${bone}`} />
        ))}
      </div>
    </div>
  </Status>
);

export const ProjectsSkeleton: React.FC = () => (
  <Status className="container mx-auto min-w-0">
    <div aria-hidden>
      <div className={`h-10 w-64 max-w-full rounded-md ${bone}`} />
      <div className={`mt-4 h-5 w-full max-w-3xl rounded-md ${bone}`} />
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 4 }, (_, index) => (
          <div key={index} className="overflow-hidden rounded-lg bg-dark-card">
            <div className="skeleton h-40" />
            <div className="space-y-3 p-4">
              <div className="skeleton h-5 w-2/3 rounded-md" />
              <div className="skeleton h-4 w-full rounded-md" />
              <div className="skeleton h-4 w-16 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </Status>
);

export const ResumeSkeleton: React.FC = () => (
  <Status className="container mx-auto min-w-0 max-w-4xl">
    <div aria-hidden>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0 flex-1">
          <div className={`h-10 w-48 max-w-full rounded-md ${bone}`} />
          <div className={`mt-4 h-5 w-full rounded-md ${bone}`} />
          <div className={`mt-3 h-5 w-4/5 rounded-md ${bone}`} />
        </div>
        <div className={`h-12 w-40 shrink-0 rounded-md ${bone}`} />
      </div>
      <div className="mt-6 flex gap-2 overflow-hidden">
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index} className={`h-8 w-24 shrink-0 rounded-full ${bone}`} />
        ))}
      </div>
      <div className="mt-12 space-y-4">
        <div className={`h-8 w-40 rounded-md ${bone}`} />
        <div className={`h-4 w-full rounded-md ${bone}`} />
        <div className={`h-4 w-11/12 rounded-md ${bone}`} />
        <div className={`h-4 w-3/4 rounded-md ${bone}`} />
      </div>
    </div>
  </Status>
);
