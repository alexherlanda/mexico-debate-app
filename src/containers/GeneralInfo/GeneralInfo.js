import React from 'react';
import { Section, MediaCard } from '../../components';
import steps from '../../data/steps';
import LastWinners from 'containers/LastWinners';

const GeneralInfo = () => {
  return (
    <div>
      <Section title="Sumante al dialogo" description=" ">
        <LastWinners />{' '}
      </Section>

      <Section
        title="Camino al torneo"
        subtitle="México Debate 2021"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit "
      >
        {steps.map(({ step, description, redirectTo }) => (
          <MediaCard
            key={step}
            description={description}
            title={'Paso ' + step}
            redirectTo={redirectTo}
          />
        ))}
      </Section>
    </div>
  );
};

export default GeneralInfo;
