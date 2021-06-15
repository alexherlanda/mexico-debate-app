import React, { useState } from 'react';
import { MaterialsList, CategorySelector } from '../../components';
import './EducationalMaterials.css';

const EducationalMaterials = () => {
  const [selectedCategory, setSelectedCategory] = useState('minor');

  const handleCategoryOnClick = (category) => {
    setSelectedCategory(category);
  };

  const renderMaterials = (cat) => {
    switch (cat) {
      case 'minor':
        return (
          <>
            <MaterialsList
              title="Impresos"
              list={[
                { title: 'Reglamento del Torneo Categoría Menor' },
                { title: 'Política de Equidad' },
                { title: 'Guía de oradores' },
              ]}
            />
            <MaterialsList
              title="Videos"
              list={[
                { title: 'Formato de Debate World Schools' },
                { title: 'Interpretación de mociones' },
                { title: 'Gran  Final Categoría Menor 2020' },
              ]}
            />
          </>
        );

      case 'major':
        return (
          <>
            <MaterialsList
              title="Materiales"
              list={[
                { title: 'Reglamento del Torneo Categoría Mayor' },
                { title: 'Política de Equidad' },
                { title: 'Guía de oradores' },
              ]}
            />
            <MaterialsList
              title="Videos"
              list={[
                { title: 'Formato Parlamentario Británico ' },
                { title: 'Interpretación de mociones' },
                { title: 'Taller extensiones ' },
                { title: 'Técnicas Avanzadas en formato BP' },
                { title: 'Gran Final Categoría Mayor 2020' },
              ]}
            />
            <MaterialsList title="Jueces" list={[{ title: 'Taller para jueces ' }]} />
          </>
        );

      default:
        break;
    }
  };

  return (
    <div className="educational-materials">
      <div className="educational-materials__category">
        <CategorySelector
          selectedCategory={selectedCategory}
          onCategoryClick={handleCategoryOnClick}
        />
      </div>
      {renderMaterials(selectedCategory)}
    </div>
  );
};

export default EducationalMaterials;
