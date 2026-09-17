import { useState, useEffect } from 'react';
import type { TouchEvent } from 'react';
import './index.css';
import daunSehatImg from './assets/daun-sehat.jpg';
import bercakDaunImg from './assets/bercak-daun.jpg';
import daunKuningImg from './assets/daun-kuning.jpg';

export interface LeafCondition {
  id: string;
  title: string;
  description: string;
  status: string;
  badgeBg: string;
  image: string;
}

const conditions: LeafCondition[] = [
  {
    id: 'sehat',
    title: 'Daun Sehat',
    description: 'Permukaan daun hijau merata, tekstur segar, tanpa bercak kuning kecokelatan. Pertanda tanaman ternutrisi baik.',
    status: 'Kondisi Prima',
    badgeBg: '#4E7728',
    image: daunSehatImg,
  },
  {
    id: 'bercak',
    title: 'Bercak Daun',
    description: 'Terdapat bercak cokelat kehitaman melingkar dengan tepi menguning. Gejala umum infeksi jamur bercak daun atau hawar.',
    status: 'Perlu Perawatan',
    badgeBg: '#C05621',
    image: bercakDaunImg,
  },
  {
    id: 'kuning',
    title: 'Daun Menguning',
    description: 'Helai daun memudar menjadi kuning dengan tepi kering. Indikasi klorosis, kekurangan unsur hara nitrogen, atau virus.',
    status: 'Defisiensi Nutrisi',
    badgeBg: '#D69E2E',
    image: daunKuningImg,
  },
];

interface HomeProps {
  onNavigate?: (tab: 'home' | 'camera' | 'summary') => void;
  activeTab?: 'home' | 'camera' | 'summary';
}

export default function Home({ onNavigate, activeTab = 'home' }: HomeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTab, setCurrentTab] = useState<'home' | 'camera' | 'summary'>(activeTab);
  const [animDirection, setAnimDirection] = useState<'left' | 'right' | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    setCurrentTab(activeTab);
  }, [activeTab]);

  const handlePrev = () => {
    setAnimDirection('left');
    setCurrentIndex((prev) => (prev === 0 ? conditions.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setAnimDirection('right');
    setCurrentIndex((prev) => (prev === conditions.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    setTouchStart(null);
  };

  const handleTabClick = (tab: 'home' | 'camera' | 'summary') => {
    setCurrentTab(tab);
    if (onNavigate) {
      onNavigate(tab);
    }
  };

  const currentCondition = conditions[currentIndex];

  return (
    <div className="tomatku-wrapper">
      <main className="tomatku-container">
        {/* Header Title */}
        <header className="tomatku-header">
          <h1 className="tomatku-title">
            <span>KENALI KONDISI</span>
            <span>DAUN TOMATMU</span>
          </h1>
        </header>

        {/* Main Card */}
        <section
          className="condition-card"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          aria-roledescription="carousel"
          aria-label="Kondisi Daun Tomat"
        >
          {/* Card Top Text & Navigation */}
          <div className="card-content-top">
            <div className="card-header-row">
              <button
                type="button"
                className="nav-arrow-btn left"
                onClick={handlePrev}
                aria-label="Kondisi Sebelumnya"
              >
                <svg
                  className="arrow-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="card-text-group">
                <h2 className={`condition-name ${animDirection ? 'animate-fade' : ''}`} key={currentCondition.id + '-title'}>
                  {currentCondition.title}
                </h2>
                <p className={`condition-desc ${animDirection ? 'animate-fade' : ''}`} key={currentCondition.id + '-desc'}>
                  {currentCondition.description}
                </p>
              </div>

              <button
                type="button"
                className="nav-arrow-btn right"
                onClick={handleNext}
                aria-label="Kondisi Berikutnya"
              >
                <svg
                  className="arrow-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Leaf Photo */}
          <div className="card-image-wrapper">
            <img
              src={currentCondition.image}
              alt={currentCondition.title}
              className={`leaf-photo ${animDirection ? 'animate-fade' : ''}`}
              key={currentCondition.id + '-img'}
              loading="eager"
            />
          </div>

          {/* Indicator dots */}
          <div className="carousel-indicators">
            {conditions.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                className={`indicator-dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => {
                  setAnimDirection(idx > currentIndex ? 'right' : 'left');
                  setCurrentIndex(idx);
                }}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Bottom Navigation Bar */}
        <nav className="bottom-nav" aria-label="Navigasi Utama">
          <button
            type="button"
            className={`nav-item ${currentTab === 'home' ? 'active' : ''}`}
            onClick={() => handleTabClick('home')}
          >
            Home
          </button>
          <button
            type="button"
            className={`nav-item ${currentTab === 'camera' ? 'active' : ''}`}
            onClick={() => handleTabClick('camera')}
          >
            Camera
          </button>
          <button
            type="button"
            className={`nav-item ${currentTab === 'summary' ? 'active' : ''}`}
            onClick={() => handleTabClick('summary')}
          >
            Summary
          </button>
        </nav>
      </main>
    </div>
  );
}

export { Home };
