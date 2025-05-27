import React, { useState, useRef } from 'react';

const GodotGame = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const iframeRef = useRef(null);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setError('Failed to load the game. Please try refreshing the page.');
    setIsLoading(false);
  };

  const restartGame = () => {
    if (iframeRef.current) {
      // Reload the iframe to restart the game
      iframeRef.current.src = iframeRef.current.src;
    }
  };

  const startGame = () => {
    setGameStarted(true);
    setIsLoading(true);
  };

  return (
    <div style={{ 
      width: '100%', 
      maxWidth: '1200px', 
      margin: '0 auto',
      position: 'relative',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '12px'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        marginBottom: '15px'
      }}>
        {!gameStarted ? (
          <button
            onClick={startGame}
            style={{
              padding: '12px 24px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '18px',
              transition: 'background-color 0.3s',
              fontWeight: 'bold'
            }}
          >
            Start Game
          </button>
        ) : (
          <button
            onClick={restartGame}
            style={{
              padding: '8px 16px',
              backgroundColor: '#2196F3',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
              transition: 'background-color 0.3s'
            }}
          >
            Restart
          </button>
        )}
      </div>

      {isLoading && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}>
          Loading game...
        </div>
      )}
      
      {error && (
        <div style={{
          color: 'red',
          textAlign: 'center',
          padding: '20px',
          backgroundColor: 'rgba(255, 0, 0, 0.1)',
          borderRadius: '8px',
          margin: '10px 0'
        }}>
          {error}
        </div>
      )}

      <div style={{
        position: 'relative',
        width: '100%',
        paddingTop: '56.25%', // 16:9 aspect ratio
        backgroundColor: '#000',
        borderRadius: '8px',
        overflow: 'hidden'
      }}>
        {gameStarted && (
          <iframe
            ref={iframeRef}
            src="/game/index.html"
            title="My Godot Game"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
              display: isLoading ? 'none' : 'block'
            }}
            onLoad={handleLoad}
            onError={handleError}
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
};

export default GodotGame;
