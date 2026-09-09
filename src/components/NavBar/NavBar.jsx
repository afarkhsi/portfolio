import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import Logo from './../../assets/logo/logo-transparent.png';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    {
      to: '/',
      label: 'ACCUEIL',
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9.5 12 3l9 6.5" />
          <path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" />
        </svg>
      ),
    },
    {
      to: '/mesprojets',
      label: 'PROJETS',
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <path d="M3 12h18" />
        </svg>
      ),
    },
    {
      to: '/contacts',
      label: 'CONTACT',
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <header className={`header ${scrolled ? 'header_scrolled' : ''}`}>
        <div className="header_inner">
          <div className="header_title">A.Farkhsi</div>

          <div className="header_logo">
            <img src={Logo} className="header_logo_img" alt="Logo A.Farkhsi" />
          </div>

          <nav className="header_nav">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                className={({ isActive }) =>
                  'header_nav_link' + (isActive ? ' active' : '')
                }
                to={to}
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <nav className="bottom_nav">
        {links.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              'bottom_nav_link' + (isActive ? ' active' : '')
            }
          >
            <span className="bottom_nav_icon">{icon}</span>
            <span className="bottom_nav_label">{label}</span>
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default NavBar;
