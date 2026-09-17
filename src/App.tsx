import { useState } from 'react';
import Landing from './landing';
import Home from './index';

type PageState = 'landing' | 'home' | 'camera' | 'summary';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageState>('landing');

  const handleNavigate = (tab: 'home' | 'camera' | 'summary') => {
    setCurrentPage(tab);
  };

  return (
    <div className="app-root">
      {/* Quick dev switch banner to jump between Landing & Home */}
      <div
        style={{
          position: 'fixed',
          top: 10,
          right: 10,
          zIndex: 9999,
          display: 'flex',
          gap: '6px',
          background: 'rgba(0,0,0,0.65)',
          padding: '4px 8px',
          borderRadius: '20px',
          backdropFilter: 'blur(8px)',
        }}
      >
        <button
          type="button"
          onClick={() => setCurrentPage('landing')}
          style={{
            background: currentPage === 'landing' ? '#eb8e2d' : 'transparent',
            color: '#fff',
            border: 'none',
            fontSize: '11px',
            padding: '4px 10px',
            borderRadius: '12px',
            cursor: 'pointer',
            fontWeight: currentPage === 'landing' ? 700 : 500,
          }}
        >
          Landing
        </button>
        <button
          type="button"
          onClick={() => setCurrentPage('home')}
          style={{
            background: currentPage === 'home' ? '#eb8e2d' : 'transparent',
            color: '#fff',
            border: 'none',
            fontSize: '11px',
            padding: '4px 10px',
            borderRadius: '12px',
            cursor: 'pointer',
            fontWeight: currentPage === 'home' ? 700 : 500,
          }}
        >
          Home
        </button>
      </div>

      {/* Landing Page */}
      {currentPage === 'landing' && (
        <Landing onStart={() => setCurrentPage('home')} />
      )}

      {/* Home Page */}
      {currentPage === 'home' && (
        <Home onNavigate={handleNavigate} activeTab="home" />
      )}

      {/* Camera Tab Placeholder */}
      {currentPage === 'camera' && (
        <div className="tomatku-wrapper">
          <main className="tomatku-container" style={{ padding: '38px 20px 0 20px', textAlign: 'center' }}>
            <h1 className="tomatku-title" style={{ fontSize: '24px', marginBottom: '20px' }}>
              <span>DETEKSI KAMERA</span>
            </h1>
            <div style={{
              background: '#ffffff',
              borderRadius: '24px',
              padding: '28px 20px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
              margin: 'auto 14px'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>📷</div>
              <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '8px', color: '#2d3748' }}>
                Fitur Kamera
              </h2>
              <p style={{ color: '#718096', fontSize: '13.5px', lineHeight: 1.5 }}>
                Arahkan kamera ke daun tanaman tomat untuk mendeteksi penyakit secara otomatis.
              </p>
            </div>
            <nav className="bottom-nav" style={{ marginTop: 'auto' }}>
              <button
                type="button"
                className="nav-item"
                onClick={() => handleNavigate('home')}
              >
                Home
              </button>
              <button
                type="button"
                className="nav-item active"
                onClick={() => handleNavigate('camera')}
              >
                Camera
              </button>
              <button
                type="button"
                className="nav-item"
                onClick={() => handleNavigate('summary')}
              >
                Summary
              </button>
            </nav>
          </main>
        </div>
      )}

      {/* Summary Tab Placeholder */}
      {currentPage === 'summary' && (
        <div className="tomatku-wrapper">
          <main className="tomatku-container" style={{ padding: '38px 20px 0 20px', textAlign: 'center' }}>
            <h1 className="tomatku-title" style={{ fontSize: '24px', marginBottom: '20px' }}>
              <span>RINGKASAN</span>
            </h1>
            <div style={{
              background: '#ffffff',
              borderRadius: '24px',
              padding: '28px 20px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
              margin: 'auto 14px'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>📊</div>
              <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '8px', color: '#2d3748' }}>
                Riwayat & Analisis
              </h2>
              <p style={{ color: '#718096', fontSize: '13.5px', lineHeight: 1.5 }}>
                Lihat ringkasan kesehatan tanaman dan riwayat diagnosis daun tomatmu di sini.
              </p>
            </div>
            <nav className="bottom-nav" style={{ marginTop: 'auto' }}>
              <button
                type="button"
                className="nav-item"
                onClick={() => handleNavigate('home')}
              >
                Home
              </button>
              <button
                type="button"
                className="nav-item"
                onClick={() => handleNavigate('camera')}
              >
                Camera
              </button>
              <button
                type="button"
                className="nav-item active"
                onClick={() => handleNavigate('summary')}
              >
                Summary
              </button>
            </nav>
          </main>
        </div>
      )}
    </div>
  );
}
