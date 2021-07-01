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
          style={{ margin: '0 auto', textAlign: 'center', marginTop: '-2rem' }}
        />
      </Section>

      <Section className="dialog" title="Acerca de">
        <p>
          Fomentando la cultura del debate y pensamiento crítico a través de competencias nacionales
          abiertas y gratuitas para jóvenes de 12-29 años de edad
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
