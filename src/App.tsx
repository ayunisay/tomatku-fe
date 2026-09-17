import { useState } from 'react';
import Home from './index';

type NavTab = 'home' | 'camera' | 'summary';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');

  const handleNavigate = (tab: NavTab) => {
    setActiveTab(tab);
  };

  return (
    <div className="app-root">
      {activeTab === 'home' && (
        <Home onNavigate={handleNavigate} activeTab={activeTab} />
      )}

      {activeTab === 'camera' && (
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

      {activeTab === 'summary' && (
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
