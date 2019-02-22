import React from 'react';
import { Button } from 'reactstrap';

const MyButton = ({ children, onClick }) => (
  <Button
    className="primary"
    onClick={onClick}
  >
    {children}
  </Button>
);

export default MyButton;
