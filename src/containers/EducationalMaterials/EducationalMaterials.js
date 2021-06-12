import React from 'react';
import { MaterialsList } from '../../components';
import './EducationalMaterials.css';

const EducationalMaterials = () => (
  <div className="educational-materials">
    <MaterialsList title="Cursos" />
    <MaterialsList title="Videos" />
  </div>
);

export default EducationalMaterials;
