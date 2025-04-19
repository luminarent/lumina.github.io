import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white font-['Inter'] pt-20">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">{t('about.title')}</h1>
        <div className="space-y-4 text-gray-600">
          <p>{t('about.mission')}</p>
          <p>{t('about.vision')}</p>
          <p>{t('about.values')}</p>
        </div>
      </div>
    </div>
  );
};

export default About; 