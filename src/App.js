import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';

export default () => {
  return (
    <div>
      <Header />
      <Body />
      <footer>
        <span>Feito com amor e dedicação pelo Daniel com a ajuda da B7Web!!!</span><br />
        Direitos de imagem para netflix<br />
        Dados pegos do site Themoviedb.org
      </footer>

    </div>
  )

}