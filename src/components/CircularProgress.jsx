import React from 'react';
import './CircularProgress.css';

const CircularProgress = ({ percentage }) => {
    // SVG Math
    const radius = 70;
    const stroke = 10;
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;

    // This calculates how much of the ring to "hide"
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div className="progress-container">
            <svg height={radius * 2} width={radius * 2}>
                <circle
                    stroke="#2f2f35"
                    fill="transparent"
                    strokeWidth={stroke}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
                {/* Progress Circle (The colored fill) */}
                <circle
                    stroke="#6a58e6"
                    fill="transparent"
                    strokeDasharray={circumference + ' ' + circumference}
                    style={{ strokeDashoffset }}
                    strokeWidth={stroke}
                    strokeLinecap="round"
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                    className="progress-bar-circle"
                />
            </svg>
            <div className="progress-text">
                <span className="percent-number">{percentage}%</span>
                <span className="done-label">done</span>
            </div>
        </div>
    );
};

export default CircularProgress;