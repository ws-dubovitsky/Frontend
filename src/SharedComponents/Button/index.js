import React from 'react';

const MyButton = ({ children, onClick }) => (
  <button
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);

export default MyButton;
