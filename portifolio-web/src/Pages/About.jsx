import React from "react";
import Header from "../components/Header";
import MinhaFoto from '../styles/images/MinhaFoto.jpeg';
import '../styles/About.css';

const summary = 'Sou um estudante apaixonado em lógica e programação. Futuro Dev, sempre disposto à trabalhar em equipe. Inspirado pela vontade de me desafiar mais a cada dia e a vontade de fazer a diferença onde eu estou.';
const about = 'Desde pequeno apaixonado em jogos, o que me levou, ao 16 anos, a iniciar um projeto de fazer um jogo na engine Unity. Lá eu tive meu primeiro contato com programação, na época C#, mas como eu estava tentando aprender sozinho através de videos no youtube, eu reproduzia mais do que aprendia. Lembro bem de achar chato programar. Bom, o projeto não foi muito longe e o tempo passou. Agora formado, eu fiz o que todo estudante que se deu bem com exatas faz e entrei na Engenharia. Fiquei um ano na faculdade de engenharia e cada segundo lá parecia uma eternidade. Mas não foi de tudo ruim, já que re-encontrei a programação, eu agora com meus 18-19 anos simplesmente me apaixonei. Hoje já sou viciado em resolver problemas de lógica diariamente e estou me especializando em Web Development.';

function About() {
  return (
    <>
      <Header />
      <article className="about-page">
        <div className="main-content-container">
          <div className="profile-picture-container">
            <img className="profile-picture" src={ MinhaFoto } alt="Foto de perfil" />
          </div>
          <div className="main-profile-info">
            <h1>Nascimento</h1>
            <span>22/06/2002</span>
            <h1>Localizado em</h1>
            <span>Nova Lima, Minas Gerais</span>
          </div>
        </div>
        <div className="summary-container">
          <h1>Resumo</h1>
          <p>{ summary }</p>
        </div>
        <div className="about-container">
          <h1>Sobre mim</h1>
          <p>{ about }</p>
          <p>
            Se quiser me conhecer mais ou conversar comigo, me chama no <a
              href="https://www.linkedin.com/in/lucasbaq/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a> bora conversar!</p>
        </div>
      </article>
    </>
  );
}

export default About;
