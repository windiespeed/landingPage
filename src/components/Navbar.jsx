import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || localStorage.getItem('theme') === null;
  });

  useEffect(() => {
    document.body.classList.remove('light-theme', 'dark-theme');
    const theme = darkMode ? 'dark' : 'light';
    document.body.classList.add(`${theme}-theme`);
    localStorage.setItem('theme', theme);
  }, [darkMode]);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark navbar-transparent' : 'navbar-light navbar-transparent'
          }`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src="/assets/logo.svg" alt="Logo" height="80" className="me-2" />
            <span>Windie Victoria LLC</span>
          </Link>
        </div>
      </nav>

      <button
        className="btn btn-theme theme-toggle-button"
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle theme"
      >
        <i className={`bi ${darkMode ? 'bi-sun' : 'bi-moon'}`}></i>
      </button>
    </>
  );
}
