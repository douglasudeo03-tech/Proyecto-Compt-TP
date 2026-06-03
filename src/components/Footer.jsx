import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2026 - Diseñado por un Estudiante de Programación. Todos los derechos reservados.</p>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#ffffff',
    color: '#666',
    borderTop: '1px solid #eee',
    marginTop: '50px',
    fontSize: '14px'
  }
};

export default Footer;