import { NavLink } from 'react-router-dom';
import './style.css';

const NavBar = () => {
  return (
    <section className="header">
      <div className="header_title">A.Farkhsi</div>
      <nav className="header_nav">
        <NavLink
          className={({ isActive }) =>
            'header_nav_link' + (isActive ? ' active' : '')
          }
          to="/"
        >
          ACCUEIL
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            'header_nav_link' + (isActive ? ' active' : '')
          }
          to="/mesprojets"
        >
          PROJETS
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            'header_nav_link' + (isActive ? ' active' : '')
          }
          to="/contacts"
        >
          CONTACT
        </NavLink>
      </nav>
    </section>
  );
};

export default NavBar;
