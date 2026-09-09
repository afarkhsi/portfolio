import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const links = [
    { to: '/', label: 'ACCUEIL' },
    { to: '/mesprojets', label: 'PROJETS' },
    { to: '/contacts', label: 'CONTACT' },
  ];

  return (
    <header className={`header ${scrolled ? 'header_scrolled' : ''}`}>
      <div className="header_inner">
        <div className="header_title">A.Farkhsi</div>

        <nav className={`header_nav ${isOpen ? 'is-open' : ''}`}>
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              className={({ isActive }) =>
                'header_nav_link' + (isActive ? ' active' : '')
              }
              to={to}
              onClick={closeMenu}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          className={`header_burger ${isOpen ? 'is-open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
          aria-expanded={isOpen}
        >
          <svg viewBox="0 0 24 24" width="28" height="28">
            <line
              className="burger_line burger_line_top"
              x1="3"
              y1="6"
              x2="21"
              y2="6"
            />
            <line
              className="burger_line burger_line_middle"
              x1="3"
              y1="12"
              x2="21"
              y2="12"
            />
            <line
              className="burger_line burger_line_bottom"
              x1="3"
              y1="18"
              x2="21"
              y2="18"
            />
          </svg>
        </button>
      </div>

      {isOpen && <div className="header_overlay" onClick={closeMenu}></div>}
    </header>
  );
};

export default NavBar;
