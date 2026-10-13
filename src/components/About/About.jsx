import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiJava,
  SiMysql,
  SiSpringboot,
  SiFlutter,
} from 'react-icons/si';
import { BiLogoJava, BiLogoAngular, BiLogoPython } from 'react-icons/bi';
import ModernButton from '../ModernButton/ModernButton';
import './style.css';
import Logo from './../../assets/logo/logo-transparent.png';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about">
      <img src={Logo} className="bg-logo" alt="logo" />
      <h1 className="about_title">ABDOURRAHMAN FARKHSI</h1>
      <div className="about_description">
        <h2 className="about_description_title">{t('about.jobTitle')}</h2>
        <div className="about_description_container">
          &lt; &gt;
          <div className="about_description_container_languages">
            <span>
              <SiJavascript className="language-logo" color="#F7DF1E" />
              <p>JavaScript</p>
            </span>
            <span>
              <SiTypescript className="language-logo" color="#3178C6" />
              <p>TypeScript</p>
            </span>
            <span>
              <SiReact className="language-logo" color="#61DAFB" />
              <p>React</p>
            </span>
            <span>
              <BiLogoPython className="language-logo" color="#3776AB" />
              <p>Python</p>
            </span>
            <span>
              <BiLogoJava className="language-logo" color="#339933" />
              <p>Java</p>
            </span>
            <span>
              <SiSpringboot className="language-logo" color="#6DB33F" />
              <p>Spring Boot</p>
            </span>
            <span>
              <BiLogoAngular className="language-logo" color="#DD0031" />
              <p>Angular</p>
            </span>
            <span>
              <SiFlutter className="language-logo" color="#00C5D5" />
              <p>Flutter</p>
            </span>
            <span>
              <SiMysql className="language-logo" color="#4479A1" />
              <p>SQL</p>
            </span>
          </div>
          &lt;/&gt;
        </div>
        <p className="about_description_details">{t('about.description')}</p>
      </div>
      <ModernButton to="/mesprojets" label={t('about.projectsButton')} />
    </section>
  );
};

export default About;
