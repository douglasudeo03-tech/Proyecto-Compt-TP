import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      {/* Renderizamos el Navbar y el Hero */}
      <Navbar />
      <Hero />

      {/* Sección de Tarjetas Reutilizables */}
      <main style={styles.mainContenedor}>
        <h2 style={styles.tituloSeccion}>Nuestras Características</h2>
        
        <div style={styles.cardsContenedor}>
          {/* Reutilizamos el componente Card pasándole diferentes Props */}
          <Card 
            titulo="Componentes" 
            descripcion="Bloques de código reutilizables que construyen la interfaz." 
          />
          <Card 
            titulo="Props" 
            descripcion="Permiten pasar datos de un componente padre a uno hijo." 
          />
          <Card 
            titulo="Estado (State)" 
            descripcion="Guarda la información dinámica que cambia con las interacciones." 
          />
        </div>
      </main>

      {/* Renderizamos el Footer */}
      <Footer />
    </div>
  );
}

const styles = {
  mainContenedor: {
    padding: '40px 20px',
    maxWidth: '1000px',
    margin: '0 auto'
  },
  tituloSeccion: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#333'
  },
  cardsContenedor: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px'
  }
};

export default App;