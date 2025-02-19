import React from 'react';
import { useTranslation } from 'react-i18next';

export function Gallery() {
  const { t } = useTranslation();
  
  const photos = [
    {
      url: "https://raw.githubusercontent.com/85ED/Portifolio/main/1.jpg",
      title: "Smash The Cake"
    },
    {
      url: "https://raw.githubusercontent.com/85ED/Portifolio/main/2.jpg",
      title: t('portraits')
    },
    {
      url: "https://raw.githubusercontent.com/85ED/Portifolio/main/3.jpg",
      title: t('events')
    },
    {
      url: "https://raw.githubusercontent.com/85ED/Portifolio/main/5.jpg",
      title: "Esportes"
    },
    {
      url: "https://raw.githubusercontent.com/85ED/Portifolio/main/14.jpeg",
      title: t('corporate')
    },
    {
      url: "https://raw.githubusercontent.com/85ED/Portifolio/main/13.jpeg",
      title: t('outdoor')
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            {t('workGallery')}
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            {t('bestMoments')}
          </p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <div key={index} className="relative group">
              <div className="relative w-full h-64 overflow-hidden rounded-lg">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold">{photo.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}