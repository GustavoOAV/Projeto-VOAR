import { useState } from 'react';
import { Link } from 'react-scroll';
import styles from "./Navbar.module.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.navbar}>
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
          <li>
            <Link 
              to="Inicio" 
              smooth={true} 
              duration={500} 
              offset={-60}
              onClick={closeMenu}
            >
              Início
            </Link>
          </li>
          <li>
            <Link 
              to="Espetaculo" 
              smooth={true} 
              duration={500} 
              offset={-60}
              onClick={closeMenu}
            >
              Espetáculo
            </Link>
          </li>
          <li>
            <Link 
              to="Elenco" 
              smooth={true} 
              duration={500} 
              offset={-60}
              onClick={closeMenu}
            >
              Elenco
            </Link>
          </li>
          <li>
            <Link 
              to="Critica" 
              smooth={true} 
              duration={500} 
              offset={-60}
              onClick={closeMenu}
            >
              Crítica
            </Link>
          </li>
          <li>
            <Link 
              to="galeria" 
              smooth={true} 
              duration={500} 
              offset={-60}
              onClick={closeMenu}
            >
              Galeria
            </Link>
          </li>
          <li>
            <Link style={{ display: 'none' }}
              to="trailer" 
              smooth={true} 
              duration={500} 
              offset={-60}
              onClick={closeMenu}
            >
              Assista ao Trailer
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
