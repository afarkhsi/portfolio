import { useState } from 'react';
import Linkedin from './../../assets/logo/linkedin.png';
import Github from './../../assets/logo/github.png';
import CvModal from './../CvModal/CvModal';
import './style.css';

const SocialMedias = () => {
  const [isCvOpen, setIsCvOpen] = useState(false);

  return (
    <>
      <div className="networks">
        <a
          className="networks_link"
          href="https://www.linkedin.com/in/abdourrahman-farkhsi-36a294139/"
          target="_blank"
        >
          <img
            className="networks_link_logo"
            src={Linkedin}
            alt="logo linkedin"
          />
        </a>
        <button
          className="networks_link networks_link_button"
          onClick={() => setIsCvOpen(true)}
          aria-label="Voir mon CV"
        >
          <span className="networks_link_button_text">CV</span>
        </button>
        <a
          className="networks_link"
          href="https://github.com/afarkhsi"
          target="_blank"
        >
          <img className="networks_link_logo" src={Github} alt="logo github" />
        </a>
      </div>

      {isCvOpen && <CvModal onClose={() => setIsCvOpen(false)} />}
    </>
  );
};

export default SocialMedias;
