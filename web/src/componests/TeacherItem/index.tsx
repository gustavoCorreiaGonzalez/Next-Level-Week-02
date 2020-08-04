import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/14322937?s=460&u=d4e60a7be3fe6afcb4a688e5327174425842c8f6&v=4" alt="Gustavo Gonzalez"/>
        <div>
          <strong>Gustavo Gonzalez</strong>
          <span>Python</span>
        </div>
      </header>

      <p>
        Conhecido como PyGuy.
        <br/><br/>
        Desenvolve qualquer coisa com python utilizando a melhor metodologia de desenvolvimento do mercado o GoHorse.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;