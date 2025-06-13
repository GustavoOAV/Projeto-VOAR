import React, { useState } from 'react';
import styles from "./Navbar.module.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.navbar}>
      {/* Overlay quando menu está aberto */}
      {isMenuOpen && (
        <div className={styles.menuOverlay} onClick={toggleMenu}></div>
      )}
      
      <nav className={styles.nav}>
        <div 
          className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ''}`} 
          onClick={toggleMenu}
        >
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
        </div>
        
        <ul className={`${styles.navList} ${isMenuOpen ? styles.active : ''}`}>
          <li><a href="/">Inicio</a></li>
          <li><a href="/">Espetaculo</a></li>
          <li><a href="/">Elenco</a></li>
          <li><a href="/">Critica</a></li>
          <li><a href="/">Galeria</a></li>
          <li><a href="/">Assita ao Trailer</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

