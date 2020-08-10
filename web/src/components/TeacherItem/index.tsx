import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/44984801?s=460&u=93d692bc3440e7773b20c01c31d9a0e09c21a9e4&v=4" alt="Matheus Ferreira" />
        <div>
          <strong>Matheus Ferreira</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Assasino desde pequeno, sempre ensinei as melhores técnicas para passar aquele seu inimigo para o outro lado.
            <br /><br />
            Mais de 100050 de humanos passados!
          </p>

      <footer>
        <p>
          Preço/Hora
              <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  )
}

export default TeacherItem;