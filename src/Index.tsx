import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './components/LanguageSwitcher';

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white font-['Inter']">
      {/* Top Menu */}
      <nav className="fixed top-0 left-0 right-1 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-4">
          <div className="py-4 flex justify-between items-center">
            <ul className="flex space-x-4">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gray-900">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-gray-900">
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <Link to="/social" className="text-gray-600 hover:text-gray-900">
                  {t('nav.social')}
                </Link>
              </li>
            </ul>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-screen px-4 py-16 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-[#FEC6A1] to-[#FEF7CD] bg-clip-text text-transparent animate-fade-in sm:text-6xl mb-8">
            {t('main.title')}
          </h1>
          <p className="text-xl text-gray-600 animate-fade-in [animation-delay:200ms]">
            {t('main.subtitle')}
          </p>
          <p className="mt-4 text-lg text-gray-500 animate-fade-in [animation-delay:400ms]">
            {t('main.description')}
          </p>
        </div>

        {/* Footer */}
        <footer className="fixed bottom-0 left-0 right-0 p-4 text-center text-sm text-gray-500 bg-white/80 backdrop-blur-sm border-t border-gray-100">
          <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;

