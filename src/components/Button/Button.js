import React from 'react';
import './Button.css';

export default ({ label, onClick, style }) => (
  <button
    onClick={onClick}
    className="Button"
    style={style}
  >
    {label || 'Button'}
  </button>
)