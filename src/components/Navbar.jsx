import React from 'react';

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>MiLandingPage</h2>
      <ul style={styles.ul}>
        <li style={styles.li}><a href="#inicio" style={styles.link}>Inicio</a></li>
        <li style={styles.li}><a href="#caracteristicas" style={styles.link}>Características</a></li>
        <li style={styles.li}><a href="#contacto" style={styles.link}>Contacto</a></li>
      </ul>
    </nav>
  );
}   


const styles = {
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding:  '15px 40px',
      backgroundColor: '#ffffff', 
    borderBottom: '1px solid #f0f0f0',
    color: '#333'
  },
  ul: {
    display: 'flex',
    listStyle: 'none',
    gap: '20px'
  },
  link: {
    color: '#333', 
    textDecoration: 'none',
    fontWeight: '500'
  }
};

   
export default Navbar;

