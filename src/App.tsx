import React, { useState } from 'react';
import { Menu, X, Camera, Sun, Moon, Youtube, Mail, Phone, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Gallery } from './components/Gallery';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { AboutMe } from './components/AboutMe';

function App() {
  const { t, i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'pt' ? 'en' : 'pt');
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="dark:bg-gray-900 transition-colors duration-200">
        {/* Navigation */}
        <nav className="bg-white dark:bg-gray-800 fixed w-full z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Camera className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">85ED</span>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="#gallery" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">{t('gallery')}</a>
                <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">{t('services')}</a>
                <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">{t('about')}</a>
                <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">{t('contact')}</a>
                <button
                  onClick={toggleLanguage}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                >
                  <Globe className="h-5 w-5" />
                </button>
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                >
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center space-x-2">
                <button
                  onClick={toggleLanguage}
                  className="p-2 rounded-md text-gray-700 dark:text-gray-300"
                >
                  <Globe className="h-6 w-6" />
                </button>
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-md text-gray-700 dark:text-gray-300"
                >
                  {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
                </button>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-md text-gray-700 dark:text-gray-300"
                >
                  {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-800">
                <a href="#gallery" className="block px-3 py-2 text-gray-700 dark:text-gray-300">{t('gallery')}</a>
                <a href="#services" className="block px-3 py-2 text-gray-700 dark:text-gray-300">{t('services')}</a>
                <a href="#about" className="block px-3 py-2 text-gray-700 dark:text-gray-300">{t('about')}</a>
                <a href="#contact" className="block px-3 py-2 text-gray-700 dark:text-gray-300">{t('contact')}</a>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <div className="pt-16">
          <div className="relative">
            <div className="absolute inset-0">
              <div className="relative h-[500px]">
                <img
                  className="w-full h-full object-cover"
                  src="https://raw.githubusercontent.com/85ED/Portifolio/main/19.png"
                  alt="Hero background"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
              </div>
            </div>
            <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {t('capturingSpecialMoments')}
              </h1>
              <p className="mt-6 text-xl text-gray-300 max-w-3xl">
                {t('specializedIn')}
              </p>
              <div className="mt-10">
                <a
                  href="#contact"
                  className="inline-block bg-indigo-600 px-8 py-3 text-lg font-medium text-white rounded-md hover:bg-indigo-700"
                >
                  {t('bookSession')}
                </a>
              </div>
            </div>
          </div>
        </div>

        <main>
          <Gallery />
          <Services />
          <AboutMe />
          <Contact />
        </main>

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center space-x-6">
              <a href="mailto:edsonfelixnet@gmail.com" className="text-gray-400 hover:text-gray-500">
                <Mail className="h-6 w-6" />
              </a>
              <a href="tel:+5511965643020" className="text-gray-400 hover:text-gray-500">
                <Phone className="h-6 w-6" />
              </a>
              <a href="https://www.youtube.com/@DrFelixMarques" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-8 text-center text-gray-400">
              <p>&copy; {currentYear} 85ED. Todos os direitos reservados.</p>
              <p className="mt-2">CNPJ: 55.457.764/0001-00</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;