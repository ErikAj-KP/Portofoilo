import React from 'react';
import GodotGame from '../Components/GodotGame';

const GamePage = () => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f0f0f0',
      padding: '20px',
      paddingTop: '100px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{
          textAlign: 'center',
          marginBottom: '30px',
          color: '#333',
          fontSize: '2.5em'
        }}>
          Deer Girl Runner
        </h1>
        <p style={{
          textAlign: 'center',
          marginBottom: '40px',
          color: '#666',
          fontSize: '1.1em'
        }}>
          Click the Start Game button to begin your adventure!
        </p>
        <GodotGame />
      </div>
    </div>
  );
};

export default GamePage; 