import React from 'react';
import { Link } from 'react-router-dom';
import './RedirectButton.css';

const RedirectButton = ({ to, children }) => {
  return (
    <Link to={to} className="redirect-button">
      {children}
    </Link>
  );
};

export default RedirectButton;
