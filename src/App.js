import { Section } from "./components";
import "./App.css";

function App() {
  return (
    <div>
      <Section
        title="Sumante al dialogo"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ex erat, maximus sit amet viverra sed, pharetra at ex. Phasellus a augue eros. Mauris ac mauris lorem. Quisque at lectus purus. Aenean vel ipsum venenatis velit tristique ultrices. Donec pretium lacinia justo id venenatis. "
      >
        Componente de ganadores anteriores
      </Section>

      <Section
        title="Camino al torneo"
        subtitle="Mx Debate 2021"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ex erat, maximus sit amet viverra sed, pharetra at ex. Phasellus a augue eros. Mauris ac mauris lorem. Quisque at lectus purus. Aenean vel ipsum venenatis velit tristique ultrices. Donec pretium lacinia justo id venenatis. "
      >
        Componente de pasos
      </Section>
    </div>
  );
}

export default App;
