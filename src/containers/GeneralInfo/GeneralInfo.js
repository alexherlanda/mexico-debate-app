import React from 'react';
import { Section, StepsSlider } from '../../components';
import LastWinners from 'containers/LastWinners';
import { useMediaQuery } from 'react-responsive';

const GeneralInfo = () => {
  const isLittleScreen = useMediaQuery({ query: '(max-width: 1224px)' });
  // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
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
