import { Link } from 'react-router-dom';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiMysql,
  SiSpringboot,
  SiFlutter,
} from 'react-icons/si';
import { BiLogoJava, BiLogoAngular, BiLogoPython } from 'react-icons/bi';
import ModernButton from '../ModernButton/ModernButton';
import './style.css';
import Logo from './../../assets/logo/logo-transparent.png';

const About = () => {
  return (
    <section className="about">
      <img src={Logo} className="bg-logo" alt="logo" />
      <h1 className="about_title">ABDOURRAHMAN FARKHSI</h1>
      <div className="about_description">
        <h2 className="about_description_title">DEVELOPPEUR FULL-STACK</h2>
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
              <SiNodedotjs className="language-logo" color="#339933" />
              <p>Node.js</p>
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
              <BiLogoPython className="language-logo" color="#3776AB" />
              <p>Python</p>
            </span>
            <span>
              <SiMysql className="language-logo" color="#4479A1" />
              <p>SQL</p>
            </span>
          </div>
          &lt;/&gt;
        </div>
        <p className="about_description_details">
          Passionné par le développement et l'innovation, je mets mes
          compétences full-stack au service de la création d'applications web et
          mobiles performantes, fiables et pensées pour l'utilisateur.
        </p>
      </div>
      <ModernButton to="/mesprojets" label="Mes projets" />
    </section>
  );
};

export default About;
