import React, { useId } from 'react';

export default function ThreadDivider() {
  const clipId = useId();
  const filterId = useId();

  return (
    <div className="thread-divider">
      <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
        <defs>
          <clipPath id={clipId}>
            <rect x="65" y="0" width="0" height="60" className="reveal-rect" />
          </clipPath>
          <filter id={filterId} x="-10%" y="-30%" width="120%" height="160%">
            <feGaussianBlur stdDeviation="0.6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Vector Air Jet Loom Nozzle (Static on the left) */}
        <g className="nozzle-group" transform="translate(10, 15)">
          {/* Nozzle Body */}
          <path d="M 0,10 L 30,10 L 45,13 L 45,17 L 30,20 L 0,20 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <rect x="8" y="7" width="8" height="16" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
          {/* Nozzle Tip */}
          <path d="M 45,14 L 55,14.5 L 55,15.5 L 45,16 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          {/* Concentric Air Jets */}
          <path className="air-pulse air-1" d="M 60,8 A 8,8 0 0,1 60,22" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          <path className="air-pulse air-2" d="M 64,5 A 11,11 0 0,1 64,25" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          <path className="air-pulse air-3" d="M 68,2 A 14,14 0 0,1 68,28" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        </g>

        {/* Moving Thread Divider Group */}
        <g clipPath={`url(#${clipId})`}>
          <g className="thread-waves-moving">
            {/* Layer 1: Soft fiber haze shadow */}
            <path
              className="thread-path-shadow"
              d="M-35,30 C-10,20 15,40 65,30 C90,20 140,40 165,30 C190,20 240,40 265,30 C290,20 340,40 365,30 C390,20 440,40 465,30 C490,20 540,40 565,30 C590,20 640,40 665,30 C690,20 740,40 765,30 C790,20 840,40 865,30 C890,20 940,40 965,30 C990,20 1040,40 1065,30 C1090,20 1140,40 1165,30 C1190,20 1240,40 1265,30 C1290,20 1340,40 1365,30"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.2"
              opacity="0.15"
              filter={`url(#${filterId})`}
            />

            {/* Layer 2: Main thread core */}
            <path
              className="thread-path-core"
              d="M-35,30 C-10,20 15,40 65,30 C90,20 140,40 165,30 C190,20 240,40 265,30 C290,20 340,40 365,30 C390,20 440,40 465,30 C490,20 540,40 565,30 C590,20 640,40 665,30 C690,20 740,40 765,30 C790,20 840,40 865,30 C890,20 940,40 965,30 C990,20 1040,40 1065,30 C1090,20 1140,40 1165,30 C1190,20 1240,40 1265,30 C1290,20 1340,40 1365,30"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              opacity="0.6"
            />

            {/* Layer 3: Spun fiber texture (Dashed overlay) */}
            <path
              className="thread-path-texture"
              d="M-35,30 C-10,20 15,40 65,30 C90,20 140,40 165,30 C190,20 240,40 265,30 C290,20 340,40 365,30 C390,20 440,40 465,30 C490,20 540,40 565,30 C590,20 640,40 665,30 C690,20 740,40 765,30 C790,20 840,40 865,30 C890,20 940,40 965,30 C990,20 1040,40 1065,30 C1090,20 1140,40 1165,30 C1190,20 1240,40 1265,30 C1290,20 1340,40 1365,30"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeDasharray="6 3"
              opacity="0.85"
            />

            {/* Layer 4: Reflective fine fibers */}
            <path
              className="thread-path-highlight"
              d="M-35,29.7 C-10,19.7 15,39.7 65,29.7 C90,19.7 140,39.7 165,29.7 C190,19.7 240,39.7 265,29.7 C290,19.7 340,39.7 365,29.7 C390,19.7 440,39.7 465,29.7 C490,19.7 540,39.7 565,29.7 C590,19.7 640,39.7 665,29.7 C690,19.7 740,39.7 765,29.7 C790,19.7 840,39.7 865,29.7 C890,19.7 940,39.7 965,29.7 C990,19.7 1040,39.7 1065,29.7 C1090,19.7 1140,39.7 1165,29.7 C1190,19.7 1240,39.7 1265,29.7 C1290,19.7 1340,39.7 1365,29.7"
              fill="none"
              stroke="#ffffff"
              strokeWidth="0.7"
              strokeDasharray="3 7"
              opacity="0.35"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
