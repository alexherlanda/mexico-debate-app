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
                {
                  title: 'Formato de Debate World Schools',
                  url: 'https://www.youtube.com/watch?v=-kQpzs0nIzU&list=PLFk0qboRAjYnTJWAjFtqa365RxWZoeABt&index=1&t=1449s ',
                },
                {
                  title: 'Interpretación de mociones',
                  url: 'https://www.youtube.com/watch?v=O7EYRgFNmSc&list=PLFk0qboRAjYnTJWAjFtqa365RxWZoeABt&index=2',
                },
                {
                  title: 'Gran  Final Categoría Menor 2020',
                  url: 'https://www.youtube.com/watch?v=H7l1aBQGZCk&t=2631s&ab_channel=Asociaci%C3%B3nMexicanadeDebateAsociaci%C3%B3nMexicanadeDebate ',
                },
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
                {
                  title: 'Formato Parlamentario Británico ',
                  url: 'https://www.youtube.com/watch?v=iKAuQjF3ixM&list=PLFk0qboRAjYk2ppW1sY9Jrm0g9qcBXCuz&index=1&t=6s ',
                },
                {
                  title: 'Interpretación de mociones',
                  url: 'https://www.youtube.com/watch?v=O7EYRgFNmSc&list=PLFk0qboRAjYk2ppW1sY9Jrm0g9qcBXCuz&index=2 ',
                },
                {
                  title: 'Taller extensiones ',
                  url: 'https://www.youtube.com/watch?v=TRqiKver_U8&list=PLFk0qboRAjYk2ppW1sY9Jrm0g9qcBXCuz&index=3 ',
                },
                {
                  title: 'Técnicas Avanzadas en formato BP',
                  url: 'https://www.youtube.com/watch?v=flicd__XGOM&list=PLFk0qboRAjYk2ppW1sY9Jrm0g9qcBXCuz&index=4 ',
                },
                {
                  title: 'Gran Final Categoría Mayor 2020',
                  url: 'https://www.youtube.com/watch?v=j8nBZ_xrU0Q&t=4265s ',
                },
              ]}
            />
            <MaterialsList
              title="Jueces"
              list={[
                {
                  title: 'Taller para jueces ',
                  url: 'https://www.youtube.com/watch?v=zcMXJZasu8Q&list=PLFk0qboRAjYn_ykcZCvztAZsbvHqIU5Yx&index=8',
                },
              ]}
            />
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
