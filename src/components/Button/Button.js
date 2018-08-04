import React from 'react';
import './Button.css';

export default ({ children, label, onClick, style }) => (
  <button
    onClick={onClick}
    className="Button"
    style={style}
  >
    {children || label || 'Button'}
  </button>
);