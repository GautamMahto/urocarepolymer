
//---------------------------------------------------------------------------------------------------

import React from 'react';

const Navbar = ({ isDarkMode, setIsDarkMode, activeSection }) => {
  const sections = ['home', 'about', 'products', 'contact', 'inquiry'];

  return (
    <nav className={`navbar ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="container navbar-content">
        {/* Left Section: Logo */}
        <div className="navbar-left">
          <h1 className="logo">UroCare Polymer</h1>
        </div>

        {/* Center Section: Navigation Links */}
        <div className="navbar-center">
          <ul className="nav-links">
            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={activeSection === section ? 'active' : ''}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section: Theme Toggle */}
        <div className="navbar-right">
          <button onClick={() => setIsDarkMode(!isDarkMode)} className="theme-toggle">
            <img
              src={
                isDarkMode
                  ? 'https://img.icons8.com/ios-filled/20/ffffff/sun--v1.png'
                  : 'https://img.icons8.com/ios-filled/20/000000/moon-symbol.png'
              }
              alt={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
