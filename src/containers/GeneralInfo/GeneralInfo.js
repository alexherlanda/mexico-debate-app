import React from 'react';
import { Section, StepsSlider } from '../../components';
import LastWinners from 'containers/LastWinners';
import icono from './icono.svg';

const GeneralInfo = () => {
  return (
    <div>
      <Section>
        <img
          width="100px"
          src={icono}
          alt="Sumate al dialogo"
          style={{ margin: '0 auto', textAlign: 'center' }}
        />
      </Section>

      <Section className="dialog" title="Sumate al dialogo">
        <p>
          Unimos esfuerzos en el fomento del debate competitivo como actividad que invita a los
          participantes a desarrollar sus habilidades dentro de la discusión racional y respetuosa
          de las ideas.
        </p>
      </Section>
      <Section title="Debatir en serio" description=" ">
        <LastWinners />
      </Section>

      <Section
        title="Camino al torneo"
        subtitle="México Debate 2021"
        description="Sigue los pasos para poder formar parte de México Debate 2021"
      >
        <StepsSlider />
      </Section>
    </div>
  );
};

export default GeneralInfo;
