import React from 'react';
import { Section, StepsSlider } from '../../components';
import LastWinners from 'containers/LastWinners';

const GeneralInfo = () => {
  return (
    <div>
      <Section title="Sumante al dialogo" description=" ">
        <LastWinners />
      </Section>

      <Section
        title="Camino al torneo"
        subtitle="México Debate 2021"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit "
      >
        <StepsSlider />
      </Section>
    </div>
  );
};

export default GeneralInfo;
