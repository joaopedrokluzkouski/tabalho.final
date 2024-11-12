// src/pages/ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import coturnoImg from '../assets/images/Coturno.png';
import cintoImg from '../assets/images/Cinto.jpg';
import cachecolImg from '../assets/images/Cachecol.png';

function ProductDetails() {
  // Usando useParams para pegar o ID do produto na URL
  const { id } = useParams();

  // Definindo os produtos com base no id
  const produtos = [
    { id: 1, nome: 'GUARDA ROUPAS', imagem: coturnoImg, descricao: 'GUARDAD ROUPAS', preco: 1599.99 },
    { id: 2, nome: 'SOFAS', imagem: cintoImg, descricao: 'SOFÁS COM CORES LINDAS', preco: 499.99 },
    { id: 3, nome: 'FOGÕES', imagem: cachecolImg, descricao: '5 BOCAS COM PREÇO DE PONTA', preco: 999.99 }
  ];

  // Pegando o produto pelo id
  const produto = produtos.find(p => p.id === parseInt(id));

  if (!produto) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div className="product-details">
      <h1>{produto.nome}</h1>
      <img src={produto.imagem} alt={produto.nome} />
      <p>{produto.descricao}</p>
      <p><strong>Preço: R$ {produto.preco.toFixed(2)}</strong></p>
    </div>
  );
}

export default ProductDetails;
