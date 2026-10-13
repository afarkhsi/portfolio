import { useTranslation } from 'react-i18next';
import './style.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.resolvedLanguage || i18n.language;
  const isEnglish = currentLanguage.startsWith('en');

  const changeLanguage = (language) => {
    if (language === currentLanguage) return;

    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
  };

  return (
    <button
      type="button"
      className={`language-switcher ${isEnglish ? 'english' : 'french'}`}
      onClick={() => changeLanguage(isEnglish ? 'fr' : 'en')}
      aria-label={isEnglish ? 'Switch to French' : 'Switch to English'}
      title={isEnglish ? 'Switch to French' : 'Switch to English'}
    >
      {' '}
      <span className="language-option language-fr">
        {' '}
        <img
          src="https://flagcdn.com/w40/fr.png"
          alt="Français"
          className="language-flag"
        />{' '}
      </span>
      <span className="language-option language-en">
        <img
          src="https://flagcdn.com/w40/gb.png"
          alt="English"
          className="language-flag"
        />
      </span>
      <span className="language-slider" aria-hidden="true" />
    </button>
  );
};

export default LanguageSwitcher;
