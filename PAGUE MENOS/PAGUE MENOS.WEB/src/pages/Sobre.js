// src/pages/Sobre.js
import React from 'react';

// Importe as imagens que você quer usar
import marcaImg from '../assets/images/Marca.png'; // Substitua pelo caminho correto
import coturnoImg from '../assets/images/Coturno.png';
import cintoImg from '../assets/images/Cinto.jpg';
import cachecolImg from '../assets/images/Cachecol.png';

function Sobre() {
  return (
    <main className="sobre-container">
      {/* Primeira Seção: Sobre a Marca */}
      <section className="sobre-marca">
        <div className="texto">
          <h2>Sobre a Nossa loja</h2>
          <p></p>
            O Pague bem e o melhor lugar para compra artigos para sua casa e baratos em geral...
        </div>
        <div className="imagem">
          {/* Usando a imagem importada */}
          <img src={marcaImg} alt="Imagem sobre a marca" />
        </div>
      </section>

      {/* Segunda Seção: Sobre os Produtos */}
      <section className="sobre-produtos">
        <div className="texto">
          <h2>Nossos Produtos</h2>
          <p>
            No no Pague Bem , nossos produtos passam por rigorosos processos de qualidade para
            garantir que cada item ofereça o melhor para você e sua familia
          </p>
        </div>
        <div className="imagens-compilado">
          {/* Usando as imagens importadas para os produtos */}
          <img src={coturnoImg} alt="Produto 1" />
          <img src={cintoImg} alt="Produto 2" />
          <img src={cachecolImg} alt="Produto 3" />
        </div>
      </section>

      {/* Terceira Seção: Informação Complementar */}
      <section className="sobre-equipe">
        <h2>Nosso Time</h2>
        <p>
         O Pague Bem é composto por uma equipe de lindas e simpaticas atendentes e preços bons!
        </p>
      </section>
    </main>
  );
}

export default Sobre;
