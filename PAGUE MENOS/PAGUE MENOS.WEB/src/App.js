// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import ProductDetails from './pages/ProductDetails';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/produto/:id" element={<ProductDetails />} />
          </Routes>
        </main>
        <Footer /> {/* Footer está posicionado corretamente aqui */}
      </div>
    </Router>
  );
}

export default App;
