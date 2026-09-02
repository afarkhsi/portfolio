import Twitter from './../../assets/logo/twitter.png';
import Linkedin from './../../assets/logo/linkedin.png';
import Github from './../../assets/logo/github.png';
import './style.css';

const SocialMedias = () => {
  return (
    <div className="networks">
      {/* <a className="networks_link" href="/">
        <img className="networks_link_logo" src={Twitter} alt="logo twitter" />
      </a> */}
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
      <a
        className="networks_link"
        href="https://github.com/afarkhsi"
        target="_blank"
      >
        <img className="networks_link_logo" src={Github} alt="logo github" />
      </a>
    </div>
  );
};

export default SocialMedias;
