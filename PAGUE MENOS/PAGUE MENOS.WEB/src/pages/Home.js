// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import './Home.css';
import coturnoImg from '../assets/images/Coturno.png';
import cintoImg from '../assets/images/Cinto.jpg';
import cachecolImg from '../assets/images/Cachecol.png';
import banner from '../assets/images/Banner.png'; 
import bandeira from '../assets/images/bandeira.png'; // Imagem para o produto 2 em promoção
// Importações das imagens


function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
     const data = [
      { id: 1, nome: 'tapete', imagem: coturnoImg, preco: 150.99 },
      { id: 2, nome: 'sofá', imagem: cintoImg, preco: 499.99 },
      { id: 3, nome: 'Guarda roupas', imagem: cachecolImg, preco: 1599.99 },
      ];
      
      setProdutos(data);
    };
    fetchProdutos();
  }, []);

  return (
    <div className="home">
      <h1>Bem-vindo ao Pague Bem</h1>
      <p><strong>Artigos para sua casa com o melhor preço</strong></p>
      
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner}  
            alt="Produto em Promoção LOUCURAAAA 1"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bandeira} 
            alt="Produto 2"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="product-list">
        {produtos.map((produto) => (
          <ProductCard
            key={produto.id}
            id={produto.id}
            nome={produto.nome}
            imagem={produto.imagem}
            preco={produto.preco}
          />
        ))}
      </div>
    </div>
  );
}

// Exportação padrão correta
export default Home;
