import React, { useState } from 'react'; 

function Hero() {
    const [mensaje, setMensaje] = useState('¡Bienvenido a mi Landing Page!');
    const cambiarTexto =() => {
        if (mensaje === '¡Bienvenido a mi Landing Page!') {
            setMensaje('¡Gracias por explorar mi sitio web creado con React!'); 
        } else {
            setMensaje('¡Bienvenido a mi Landing Page!'); 
        }
    };

    return (
        <section style={styles.hero}> 
        <h1>{mensaje}</h1> 
        <p>Aprende como React utiliza componentes reutilizables y eventos dinamicos.</p> 

        {/*3. Evento onClick de javaScript interactuando con React*/ }
        <button onClick={cambiarTexto} style={styles.boton}>
        Cambiar Mensaje
      </button>
    </section>
  );
}

const styles = {
  hero: {
    padding: '60px 20px',
    textAlign: 'center',
    backgroundColor: '#ffffff', 
    color: '#333'
  },
  boton: {
    padding: '8px 16px',
    fontSize: '14px',
    cursor: 'pointer',
    backgroundColor: '#e1d5ff', 
    color: '#6200ea', 
    border: 'none',
    borderRadius: '4px',
    marginTop: '15px',
    fontWeight: 'bold'
  }
};

export default Hero;


    
