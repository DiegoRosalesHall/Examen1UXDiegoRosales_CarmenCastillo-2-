import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar-nav flex-row gap-4 ">
        <li className="nav-item">
          <a className={`nav-link ${styles.link}`} href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${styles.link}`} href="#">Series</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${styles.link}`} href="#">Películas</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${styles.link}`} href="#">HBO</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${styles.link}`} href="#">Originales</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${styles.link}`} href="#">Niños y Familia</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;