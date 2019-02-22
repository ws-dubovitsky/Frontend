import React from 'react';

const Header = props => (
  <h1
    style={{
      display: 'flex',
      padding: '1.5rem',
      borderBottom: '1px solid #E8E8E8',
    }}
  >
    {props.children}
  </h1>
);

export default Header;
