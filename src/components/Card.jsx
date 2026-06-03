import React from 'react';


function Card({ titulo, descripcion }) {
  return (
    <div style={styles.card}>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  );
}

const styles = {
  card: {
    border: 'none', 
    borderRadius: '8px',
    padding: '25px',
    width: '280px',
    backgroundColor: '#ffffff',
    textAlign: 'left' 
  }
};

export default Card;