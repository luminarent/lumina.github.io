import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 rounded-md text-sm ${
          i18n.language === 'en'
            ? 'bg-gray-100 text-gray-900'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        EN
      </button>
      <span className="text-gray-300">|</span>
      <button
        onClick={() => changeLanguage('pt')}
        className={`px-2 py-1 rounded-md text-sm ${
          i18n.language === 'pt'
            ? 'bg-gray-100 text-gray-900'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        PT
      </button>
    </div>
  );
};

export default LanguageSwitcher; 