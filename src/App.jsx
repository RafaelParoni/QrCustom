import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { FaInstagram, FaGithub } from 'react-icons/fa';
import QRCodeGenerator from './components/QRCodeGenerator';
import './index.css';

const translations = {
  pt: {
    heroTitle: "Bem-vindo ao QR Custom",
    heroSub: "Crie e gerencie seus QR Codes de forma rápida e personalizada.",
    getStarted: "Começar Agora"
  },
  en: {
    heroTitle: "Welcome to QR Custom",
    heroSub: "Create and manage your QR Codes quickly and customized.",
    getStarted: "Get Started"
  },
  es: {
    heroTitle: "Bienvenido a QR Custom",
    heroSub: "Crea y gestiona tus Códigos QR de forma rápida y personalizada.",
    getStarted: "Empezar Ahora"
  }
};

function App() {
  const [theme, setTheme] = useState('dark');
  const [lang, setLang] = useState('pt');

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }

    // Check if language was saved (optional, but good practice)
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  // Update theme on document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleLangChange = (e) => {
    const newLang = e.target.value;
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  const t = translations[lang];

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="navbar-left" style={{ display: 'flex', gap: '1rem' }}>
          <a href={import.meta.env.VITE_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="Instagram">
            <FaInstagram size={24} />
          </a>
          <a href={import.meta.env.VITE_GITHUB_URL} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="Github">
            <FaGithub size={24} />
          </a>
        </div>

        <div className="navbar-center">
          <span className="navbar-brand text-white-forced">QR Custom</span>
          <span className="navbar-subtitle gradient-text">Paroni System</span>
        </div>

        <div className="navbar-right">
          <select
            className="lang-select"
            value={lang}
            onChange={handleLangChange}
            aria-label="Selecionar Idioma"
          >
            <option value="pt">PT</option>
            <option value="en">EN</option>
            <option value="es">ES</option>
          </select>

          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label="Alternar Tema"
          >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
      </nav>

      <main className="main-content">
        <QRCodeGenerator lang={lang} />
      </main>
    </div>
  );
}

export default App;
