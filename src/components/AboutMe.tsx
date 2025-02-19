import React from 'react';
import { useTranslation } from 'react-i18next';

export function AboutMe() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            {t('about')}
          </h2>
        </div>
        <div className="mt-12 flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 flex-shrink-0">
            <img
              src="https://raw.githubusercontent.com/85ED/Portifolio/main/17.jpg"
              alt="Edson Felix"
              className="w-full h-full object-cover rounded-full shadow-lg"
            />
          </div>
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <div className="text-gray-500 dark:text-gray-400 whitespace-pre-line">
              {t('aboutMeText')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}