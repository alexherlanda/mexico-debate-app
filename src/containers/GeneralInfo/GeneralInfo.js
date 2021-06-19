import React from 'react';
import { Section, StepsSlider } from '../../components';
import LastWinners from 'containers/LastWinners';
import { useMediaQuery } from 'react-responsive';
const GeneralInfo = () => {
  const isLittleScreen = useMediaQuery({ query: '(max-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

  return (
    <div>
      <Section title="Debatir en serio" description=" ">
        <LastWinners souldCombineDataSets={isLittleScreen} />
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
