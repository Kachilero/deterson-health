/**
 * Header to be displayed on all pages
 */
import React from 'react';

export const Header = () => (
  <header className="App-header">
    <img src="../images/gradient.png" className="App-header--gradient" alt='' />
    <div className="content-container">
      <img src="../images/logo.svg" className="App-logo" alt="logo" />
    </div>
  </header>
);

export default Header;
