// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <img src="/logo2.png" alt="Logo Alpha Sold" className="logo" />
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/sobre" className="nav-link">Sobre Nós</Link>
      </nav>
      <input 
        type="text" 
        className="search-bar" 
        placeholder="Pesquisar..." 
      />
    </header>
  );
}

export default Header;
