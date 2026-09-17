import { useEffect, useState } from 'react';
import type { KeyboardEvent } from 'react';
import './index.css';
import tomatkuIcon from './assets/tomatku-icon.png';

interface LandingProps {
  onStart?: () => void;
  autoRedirect?: boolean;
  redirectDelay?: number;
}

export default function Landing({
  onStart,
  autoRedirect = false,
  redirectDelay = 2500,
}: LandingProps) {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!autoRedirect || !onStart) return;
    const timer = setTimeout(() => {
      onStart();
    }, redirectDelay);
    return () => clearTimeout(timer);
  }, [autoRedirect, onStart, redirectDelay]);

  const handleClick = () => {
    if (onStart) {
      onStart();
    }
  };

  return (
    <div className="landing-wrapper">
      <main
        className="landing-container"
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        role="button"
        tabIndex={0}
        aria-label="Masuk ke TomatKU"
        onKeyDown={(e: KeyboardEvent<HTMLElement>) => {
          if (e.key === 'Enter' || e.key === ' ') handleClick();
        }}
      >
        {/* Brand Logo & Name */}
        <div className={`landing-brand ${isHovered ? 'brand-pulse' : ''}`}>
          <div className="landing-logo-group">
            <img
              src={tomatkuIcon}
              alt="Logo TomatKU"
              className="landing-icon-img"
            />
            <h1 className="landing-title">
              <span>Tomat</span>
              <span className="brand-suffix">KU</span>
            </h1>
          </div>
        </div>

        {/* Subtle tap/click prompt at the bottom */}
        <div className="landing-prompt">
          <span className="prompt-indicator"></span>
          <p className="prompt-text">Ketuk di mana saja untuk mulai</p>
        </div>
      </main>
    </div>
  );
}

export { Landing };
