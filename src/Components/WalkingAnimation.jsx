import React, { useEffect, useState, useRef } from 'react';
import Frame00 from '../Pictures/00.png';
import Frame10 from '../Pictures/10.png';
import Frame20 from '../Pictures/20.png';
import Frame30 from '../Pictures/30.png';

const WalkingAnimation = () => {
  const [position, setPosition] = useState(-100);
  const [currentFrame, setCurrentFrame] = useState(0);
  const frames = [Frame00, Frame10, Frame20, Frame30];
  const animationRef = useRef(null);

  useEffect(() => {
    const animate = () => {
      setPosition(prev => {
        if (prev >= window.innerWidth) {
          return window.innerWidth;
        }
        return prev + 5;
      });

      setCurrentFrame(prev => (prev + 1) % frames.length);
    };

    animationRef.current = setInterval(animate, 50);

    return () => {
      if (animationRef.current) {
        clearInterval(animationRef.current);
      }
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '50px',
        left: `${position}px`,
        zIndex: 9998,
      }}
    >
      <img
        src={frames[currentFrame]}
        alt="Walking character"
        style={{
          width: '100px',
          height: 'auto',
        }}
      />
    </div>
  );
};

export default WalkingAnimation; 