import React from 'react';

function ProgressBar({ box, percentage, circleSize }) {
  const circumference = 2 * Math.PI * circleSize;
  const strokeDashoffset = circumference * (1 - percentage / 100);

  return (
    <div className='circleBox'>
      <svg width={box} height={box} viewBox={`0 0 ${box} ${box}`}>
      <defs>
        <linearGradient id="progressGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#290979" />  
            <stop offset="100%" stopColor="#0d85d7" />
        </linearGradient>
      </defs>

        <circle
          cx={box / 2}
          cy={box / 2}
          r={circleSize}
          fill='rgba(0,0,0,0)'
          stroke='rgba(0,0,0,0)'
          strokeWidth="10"
          className="skill-circle-background"
        />
        <circle
          cx={box / 2}
          cy={box / 2}
          r={circleSize}
          strokeWidth="17"
          fill='rgba(0,0,0,0)'
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="url(#progressGradient)" 
          className="skill-circle-progress"
        />
      </svg>
      <span className="percentageNum text-light fs-3 fw-bold">{percentage}%</span>
    </div>
  );
}

export default ProgressBar;