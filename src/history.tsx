import { useState } from 'react';
import './index.css';

interface HistoryProps {
  onNavigate?: (page: 'home' | 'camera' | 'summary' | 'history') => void;
  activeTab?: 'home' | 'camera' | 'summary';
}

interface DailyRecord {
  dayName: string;
  dateStr: string;
  totalScan: number;
  healthyPercent: number;
  earlyBlightPercent: number;
  unknownPercent: number;
  needleAngle: number;
}

const dummyHistoryData: DailyRecord[] = [
  {
    dayName: 'SELASA',
    dateStr: '23/10/28',
    totalScan: 48,
    healthyPercent: 60,
    earlyBlightPercent: 30,
    unknownPercent: 10,
    needleAngle: 72,
  },
  {
    dayName: 'SENIN',
    dateStr: '23/10/27',
    totalScan: 56,
    healthyPercent: 55,
    earlyBlightPercent: 35,
    unknownPercent: 10,
    needleAngle: 50,
  },
  {
    dayName: 'MINGGU',
    dateStr: '23/10/26',
    totalScan: 32,
    healthyPercent: 75,
    earlyBlightPercent: 20,
    unknownPercent: 5,
    needleAngle: 80,
  },
  {
    dayName: 'SABTU',
    dateStr: '23/10/25',
    totalScan: 41,
    healthyPercent: 68,
    earlyBlightPercent: 22,
    unknownPercent: 10,
    needleAngle: 75,
  },
];

export default function History({ onNavigate, activeTab = 'summary' }: HistoryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentRecord = dummyHistoryData[currentIndex];

  const handlePrevDay = () => {
    setCurrentIndex((prev) => (prev < dummyHistoryData.length - 1 ? prev + 1 : 0));
  };

  const handleNextDay = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : dummyHistoryData.length - 1));
  };

  // Donut Chart calculations (radius = 72, circumference = 2 * pi * 72 = 452.39)
  const radius = 72;
  const circumference = 2 * Math.PI * radius;
  const healthyStroke = (currentRecord.healthyPercent / 100) * circumference;
  const earlyBlightStroke = (currentRecord.earlyBlightPercent / 100) * circumference;
  const unknownStroke = (currentRecord.unknownPercent / 100) * circumference;

  const handleTabClick = (tab: 'home' | 'camera' | 'summary') => {
    if (onNavigate) {
      onNavigate(tab);
    }
  };

  const handleBackToSummary = () => {
    if (onNavigate) {
      onNavigate('summary');
    }
  };

  return (
    <div className="w-full min-h-[100dvh] flex justify-center items-center bg-[#ede6d9] p-0 sm:p-4">
      <main className="w-full sm:max-w-[430px] h-[100dvh] sm:h-[min(100dvh-2rem,880px)] bg-gradient-to-b from-[#f9deb7] via-[#fdf5ea] to-[#fffdfa] flex flex-col sm:rounded-[36px] sm:shadow-2xl relative overflow-hidden">
        
        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col">
          <div className="px-4.5 pt-6 pb-6 flex flex-col gap-3.5 flex-1">
          
          {/* Header Bar with Back Arrow and HISTORY Title */}
          <div className="relative flex items-center justify-center py-2">
            <button
              type="button"
              onClick={handleBackToSummary}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center text-[#22252a] hover:bg-black/5 active:scale-90 rounded-full transition-all cursor-pointer"
              aria-label="Kembali ke Summary"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>

            <h1 className="font-['Poppins'] font-black text-[22px] tracking-wide text-[#22252a]">
              HISTORY
            </h1>
          </div>

          {/* Orange Button: Pilih Hari */}
          <button
            type="button"
            className="w-full bg-[#eb8e2d] hover:brightness-105 active:scale-[0.99] text-white font-semibold text-[13.5px] py-2.5 px-4 rounded-[12px] flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
          >
            <svg
              className="w-4.5 h-4.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
              <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" strokeWidth="2.8" />
            </svg>
            <span>Pilih Hari</span>
          </button>

          {/* Date Selector Row with Arrows */}
          <div className="flex items-center justify-between px-2 py-1 select-none">
            <button
              type="button"
              onClick={handlePrevDay}
              className="w-8 h-8 flex items-center justify-center text-[#555a64] hover:text-[#22252a] active:scale-90 transition-all cursor-pointer"
              aria-label="Hari sebelumnya"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="text-center">
              <h2 className="font-['Poppins'] font-black text-[20px] text-[#22252a] tracking-tight leading-tight">
                {currentRecord.dayName}
              </h2>
              <span className="text-[12px] font-semibold text-[#666d79]">
                {currentRecord.dateStr}
              </span>
            </div>

            <button
              type="button"
              onClick={handleNextDay}
              className="w-8 h-8 flex items-center justify-center text-[#555a64] hover:text-[#22252a] active:scale-90 transition-all cursor-pointer"
              aria-label="Hari berikutnya"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Card 1: Total Deteksi */}
          <div className="w-full bg-[#363a40] rounded-[22px] p-5 text-white shadow-[0_10px_24px_rgba(0,0,0,0.18)]">
            <h3 className="text-[13.5px] font-bold text-white tracking-tight">
              Total Deteksi
            </h3>
            
            <div className="flex items-center justify-between mt-2.5">
              {/* Glowing Leaf + Magnifier Illustration */}
              <div className="relative w-24 h-24 flex items-center justify-center">
                {/* Glow aura */}
                <div className="absolute w-18 h-18 bg-[#95cb4d]/35 rounded-full blur-xl animate-pulse" />
                <div className="absolute w-12 h-12 bg-[#eb8e2d]/30 rounded-full blur-lg translate-x-3 translate-y-3" />

                {/* SVG Leaf and Magnifying Glass */}
                <svg className="w-20 h-20 relative z-10" viewBox="0 0 100 100" fill="none">
                  {/* Leaf */}
                  <path
                    d="M32 78 C25 60 22 35 62 20 C68 45 62 68 32 78 Z"
                    fill="#6e963b"
                    stroke="#8dbd48"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />
                  {/* Leaf center vein */}
                  <path
                    d="M36 74 Q48 50 62 20"
                    stroke="#436322"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  {/* Leaf side veins */}
                  <path d="M43 62 Q52 56 56 48" stroke="#436322" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M39 52 Q44 42 50 38" stroke="#436322" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M48 45 Q40 40 34 46" stroke="#436322" strokeWidth="1.6" strokeLinecap="round" />

                  {/* Magnifying Glass */}
                  <g transform="translate(42, 46)">
                    {/* Glass rim */}
                    <circle
                      cx="20"
                      cy="20"
                      r="14"
                      stroke="#eb8e2d"
                      strokeWidth="3.8"
                      fill="#eb8e2d"
                      fillOpacity="0.25"
                    />
                    {/* Glass reflection */}
                    <path
                      d="M14 14 A10 10 0 0 1 24 10"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      opacity="0.75"
                    />
                    {/* Handle */}
                    <line
                      x1="30"
                      y1="30"
                      x2="40"
                      y2="40"
                      stroke="#eb8e2d"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                    />
                  </g>
                </svg>
              </div>

              {/* Total Number & Caption */}
              <div className="text-right flex flex-col items-end">
                <span className="text-[52px] font-black leading-none tracking-tight text-white font-['Poppins']">
                  {currentRecord.totalScan}
                </span>
                <span className="text-[11.5px] font-medium text-white/75 mt-1.5">
                  Total daun yang dipindai
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Distribusi Hasil Klasifikasi */}
          <div className="w-full bg-white rounded-[24px] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.06)] border border-black/5 flex flex-col">
            <h3 className="text-[14px] font-bold text-[#2d3138] mb-3">
              Distribusi Hasil Klasifikasi
            </h3>

            {/* Legend */}
            <div className="flex items-center justify-center gap-4 text-[11px] font-medium text-[#4b5563] mb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#788e40]" />
                <span>Healthy</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#782c2c]" />
                <span>Early Blight</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6a9ab0]" />
                <span>Unknown</span>
              </div>
            </div>

            {/* Donut Chart with Surrounding Labels */}
            <div className="relative w-full max-w-[290px] mx-auto aspect-square flex items-center justify-center">
              
              {/* SVG Donut */}
              <svg className="w-full h-full" viewBox="0 0 240 240">
                <g transform="rotate(-90 120 120)">
                  {/* Segment 1: Healthy - Olive Green */}
                  <circle
                    cx="120"
                    cy="120"
                    r={radius}
                    fill="none"
                    stroke="#788e40"
                    strokeWidth="32"
                    strokeDasharray={`${healthyStroke} ${circumference}`}
                    strokeDashoffset="0"
                    className="transition-all duration-700 ease-out"
                  />

                  {/* Segment 2: Early Blight - Dark Maroon/Brown */}
                  <circle
                    cx="120"
                    cy="120"
                    r={radius}
                    fill="none"
                    stroke="#782c2c"
                    strokeWidth="32"
                    strokeDasharray={`${earlyBlightStroke} ${circumference}`}
                    strokeDashoffset={`-${healthyStroke}`}
                    className="transition-all duration-700 ease-out"
                  />

                  {/* Segment 3: Unknown - Slate Blue */}
                  <circle
                    cx="120"
                    cy="120"
                    r={radius}
                    fill="none"
                    stroke="#6a9ab0"
                    strokeWidth="32"
                    strokeDasharray={`${unknownStroke} ${circumference}`}
                    strokeDashoffset={`-${healthyStroke + earlyBlightStroke}`}
                    className="transition-all duration-700 ease-out"
                  />
                </g>

                {/* Donut Center Label */}
                <text
                  x="120"
                  y="118"
                  textAnchor="middle"
                  className="font-['Poppins'] font-black text-[32px] fill-[#22252a]"
                >
                  {currentRecord.totalScan}
                </text>
                <text
                  x="120"
                  y="136"
                  textAnchor="middle"
                  className="font-bold text-[10px] fill-[#6b7280] tracking-wider uppercase"
                >
                  TOTAL SCAN
                </text>
              </svg>

              {/* Floating Labels outside Donut */}
              {/* Label Unknown (Top-Left) */}
              <div className="absolute top-2.5 left-15 text-center pointer-events-none">
                <span className="block text-[10.5px] font-semibold text-[#4b5563] leading-tight">
                  Unknown
                </span>
                <span className="block text-[10px] font-medium text-[#4b5563]">
                  {currentRecord.unknownPercent}%
                </span>
              </div>

              {/* Label Early Blight (Left) */}
              <div className="absolute top-[48%] -translate-y-1/2 left-0.5 text-center pointer-events-none">
                <span className="block text-[10.5px] font-semibold text-[#4b5563] leading-tight">
                  Early Blight
                </span>
                <span className="block text-[10px] font-medium text-[#4b5563]">
                  {currentRecord.earlyBlightPercent}%
                </span>
              </div>

              {/* Label Healthy (Right/Bottom-Right) */}
              <div className="absolute top-[52%] -translate-y-1/2 right-1 text-center pointer-events-none">
                <span className="block text-[10.5px] font-semibold text-[#4b5563] leading-tight">
                  Healthy
                </span>
                <span className="block text-[10px] font-medium text-[#4b5563]">
                  {currentRecord.healthyPercent}%
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Distribusi keparahan */}
          <div className="w-full bg-white rounded-[24px] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.06)] border border-black/5 flex flex-col mb-4">
            <h3 className="text-[14px] font-bold text-[#2d3138] mb-3">
              Distribusi keparahan
            </h3>

            {/* Gauge / Speedometer Chart */}
            <div className="relative w-full max-w-[310px] mx-auto flex flex-col items-center">
              <svg className="w-full h-auto overflow-visible" viewBox="0 0 320 185">
                <defs>
                  {/* Gauge Color Gradient */}
                  <linearGradient id="historyGaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="22%" stopColor="#f97316" />
                    <stop offset="48%" stopColor="#f59e0b" />
                    <stop offset="74%" stopColor="#84cc16" />
                    <stop offset="100%" stopColor="#22c55e" />
                  </linearGradient>

                  {/* Drop shadow for needle */}
                  <filter id="historyNeedleShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="3" stdDeviation="3" floodOpacity="0.25" />
                  </filter>
                </defs>

                {/* Main Gauge Arc Track */}
                <path
                  d="M 52 145 A 108 108 0 0 1 268 145"
                  fill="none"
                  stroke="url(#historyGaugeGradient)"
                  strokeWidth="15"
                  strokeLinecap="round"
                />

                {/* Inner Ticks */}
                {Array.from({ length: 17 }).map((_, i) => {
                  const angle = Math.PI - (i * Math.PI) / 16;
                  const rInner = 86;
                  const rOuter = 93;
                  const x1 = 160 + rInner * Math.cos(angle);
                  const y1 = 145 - rInner * Math.sin(angle);
                  const x2 = 160 + rOuter * Math.cos(angle);
                  const y2 = 145 - rOuter * Math.sin(angle);
                  return (
                    <line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#d1d5db"
                      strokeWidth={i % 4 === 0 ? '2' : '1.2'}
                      strokeLinecap="round"
                    />
                  );
                })}

                {/* Glowing Circular Nodes on Arc */}
                <g transform="translate(52, 145)">
                  <circle r="9" fill="#ef4444" opacity="0.3" />
                  <circle r="6.5" fill="#ef4444" stroke="#ffffff" strokeWidth="2.5" />
                </g>
                <g transform="translate(73, 82)">
                  <circle r="9" fill="#f97316" opacity="0.3" />
                  <circle r="6.5" fill="#f97316" stroke="#ffffff" strokeWidth="2.5" />
                </g>
                <g transform="translate(127, 42)">
                  <circle r="9" fill="#f59e0b" opacity="0.3" />
                  <circle r="6.5" fill="#f59e0b" stroke="#ffffff" strokeWidth="2.5" />
                </g>
                <g transform="translate(193, 42)">
                  <circle r="9" fill="#84cc16" opacity="0.3" />
                  <circle r="6.5" fill="#84cc16" stroke="#ffffff" strokeWidth="2.5" />
                </g>
                <g transform="translate(247, 82)">
                  <circle r="9" fill="#22c55e" opacity="0.3" />
                  <circle r="6.5" fill="#22c55e" stroke="#ffffff" strokeWidth="2.5" />
                </g>
                <g transform="translate(268, 145)">
                  <circle r="9" fill="#16a34a" opacity="0.3" />
                  <circle r="6.5" fill="#16a34a" stroke="#ffffff" strokeWidth="2.5" />
                </g>

                {/* Speedometer Needle */}
                <g
                  transform={`rotate(${currentRecord.needleAngle} 160 145)`}
                  filter="url(#historyNeedleShadow)"
                  className="transition-transform duration-700 ease-out"
                >
                  <polygon
                    points="155,145 160,54 165,145"
                    fill="#26292e"
                  />
                  <circle cx="160" cy="54" r="2" fill="#26292e" />
                </g>

                {/* Center Pivot Hub */}
                <circle cx="160" cy="145" r="16" fill="rgba(0,0,0,0.06)" />
                <circle cx="160" cy="145" r="12" fill="#26292e" stroke="#ffffff" strokeWidth="2.5" />
                <circle cx="160" cy="145" r="4.5" fill="#525866" />
              </svg>

              {/* Bottom Labels: PARAH & NORMAL */}
              <div className="w-full flex justify-between items-center px-4 -mt-2">
                <span className="font-['Poppins'] font-black text-[17px] text-[#22252a] tracking-tight">
                  PARAH
                </span>
                <span className="font-['Poppins'] font-black text-[17px] text-[#22252a] tracking-tight">
                  NORMAL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Ambient bottom warm glow right above fixed nav */}
        <div className="h-6 bg-gradient-to-t from-[#f5dfc2]/70 via-[#fdf5ea]/20 to-transparent -mb-1 pointer-events-none flex-shrink-0 z-20" />

        {/* Fixed Bottom Navigation Bar */}
        <nav
          className="bg-[#34363a] rounded-t-[28px] pt-4 px-6 pb-5 max-sm:pb-[calc(16px+env(safe-area-inset-bottom,0px))] flex justify-around items-center shadow-[0_-4px_18px_rgba(0,0,0,0.18)] flex-shrink-0 w-full z-30"
          aria-label="Navigasi Utama"
        >
          <button
            type="button"
            className={`bg-transparent border-none cursor-pointer font-['Poppins'] text-[15px] sm:text-[15.5px] tracking-[-0.2px] py-1.5 px-3.5 rounded-[20px] transition-all hover:text-white active:scale-95 ${
              activeTab === 'home' ? 'text-[#eb8e2d] font-bold' : 'text-[#e2e2e2] font-semibold'
            }`}
            onClick={() => handleTabClick('home')}
          >
            Home
          </button>
          <button
            type="button"
            className={`bg-transparent border-none cursor-pointer font-['Poppins'] text-[15px] sm:text-[15.5px] tracking-[-0.2px] py-1.5 px-3.5 rounded-[20px] transition-all hover:text-white active:scale-95 ${
              activeTab === 'camera' ? 'text-[#eb8e2d] font-bold' : 'text-[#e2e2e2] font-semibold'
            }`}
            onClick={() => handleTabClick('camera')}
          >
            Camera
          </button>
          <button
            type="button"
            className={`bg-transparent border-none cursor-pointer font-['Poppins'] text-[15px] sm:text-[15.5px] tracking-[-0.2px] py-1.5 px-3.5 rounded-[20px] transition-all hover:text-white active:scale-95 ${
              activeTab === 'summary' ? 'text-[#eb8e2d] font-bold' : 'text-[#e2e2e2] font-semibold'
            }`}
            onClick={() => handleTabClick('summary')}
          >
            Summary
          </button>
        </nav>
      </main>
    </div>
  );
}

export { History };
