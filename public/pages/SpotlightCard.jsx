import React, { useState, useRef } from 'react';
import '../css/SpotlightCard.css';

const SpotlightCard = ({
  children,
  spotlightColor = 'rgba(255, 255, 255, 0.15)',
  className = '',
}) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: '50%', y: '50%' });

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setMousePos({ x: `${x}%`, y: `${y}%` });
  };

  return (
    <div
      ref={cardRef}
      className={`card-spotlight ${className}`}
      onMouseMove={handleMouseMove}
      style={{
        '--mouse-x': mousePos.x,
        '--mouse-y': mousePos.y,
        '--spotlight-color': spotlightColor,
      }}
      tabIndex={0}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
