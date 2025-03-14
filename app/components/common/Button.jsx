import React from 'react';
const Button = ({ children }) => (
  <button style={{ padding: '10px', background: 'blue', color: 'white' }}>
    {children}
  </button>
);
export default Button;