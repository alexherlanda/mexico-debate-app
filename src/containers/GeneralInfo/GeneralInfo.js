import React from 'react';
import { Section, StepsSlider } from '../../components';
import LastWinners from 'containers/LastWinners';

const GeneralInfo = () => {

  return (
    <div>
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
