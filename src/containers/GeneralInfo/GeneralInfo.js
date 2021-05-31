import React from 'react';
import { Section, MediaCard } from '../../components';
import steps from '../../data/steps';

const GeneralInfo = () => {
  return (
    <div>
      <Section
        title="Sumante al dialogo"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit "
      >
        Componente de ganadores anteriores
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
