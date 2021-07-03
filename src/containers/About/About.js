import React from 'react';
import InfoComponent from '../../components/InfoComponent';
import { Link } from 'react-router-dom';
import './About.css';
import cerebro from './img/cerebro.svg';
import dialogo from './img/dialogo.svg';
import gente from './img/gente.svg';

const About = () => {
  const list = [
    {
      title: 'Programa Nacional de Capacitación',
      firstText: () =>
        'Del 24 de mayo al 20 de junio se impartieron talleres abiertos al público general sobre la práctica del debate.',
      secondText: () => 'Participando 450 personas de toda la república mexicana.',
      firstIcon: dialogo,
      secondIcon: gente,
    },
    {
      title: 'Torneo México Debate Categoría Menor (12-17 años)',
      firstText: function firstText() {
        return (
          <span>
            Para consultar la convocatoria haz click{' '}
            <a href="https://www.ine.mx/mexico-debate-2021/"> aqui </a> Del 8-11 de junio se
            enfrentarán 120 equipos de toda la república mexicana en el formato escolar mundial.
            Para conocer más de las mociones da click <Link to="/live"> aquí. </Link>
          </span>
        );
      },

      secondText: () =>
        `Les será asignado un "Entrenador en línea" para ayudarles a comprender el formato, prepararles para el torneo y acompañarles durante el mismo.`,
      secondIcon: cerebro,
    },
    {
      title: 'Torneo México Debate Categoría Mayor (18-29 años)',
      firstText: function firstText() {
        return (
          <span>
            Para consultar la convocatoria haz click{' '}
            <a href="https://www.ine.mx/mexico-debate-2021/"> aqui </a> Del 8-11 de junio se
            enfrentarán 120 equipos de toda la república mexicana en el formato escolar mundial.
            Para conocer más de las mociones da click <Link to="/live"> aquí. </Link>
          </span>
        );
      },
      secondText: () =>
        `Les será asignado un "Entrenador en línea" para ayudarles a comprender el formato, prepararles para el torneo y acompañarles durante el mismo.`,
      secondIcon: cerebro,
    },
  ];

  return (
    <div className="about-container">
      <div>
        {list.map((item) => (
          <InfoComponent key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export default About;
