import React from 'react';
import './ProgressBar.css';

export default ({ title, percentage }) => (
  <div className="PageIndicator">
    <p>{title}</p>
    <div className="bar-container">
      <div className="bar" style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
)