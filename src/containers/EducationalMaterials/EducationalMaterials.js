import React, { useState } from 'react';
import { MaterialsList, CategorySelector } from '../../components';
import './EducationalMaterials.css';

import reglamento from './img/reglamento.svg';
import equidad from './img/equidad.svg';
import oradores from './img/oradores.svg';
import mociones from './img/mociones-07.png';
import taller_jueces from './img/taller_jueces.svg';
import jueces from './img/jueces.svg';
import final from './img/final-07.png';
import extensiones from './img/extensiones-07.png';
import estrategias from './img/estrategias-07.png';
import world_schools from './img/world_schools-07.png';
import parlamentario from './img/parlamentario-07.png';

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
              title="Documentos"
              list={[
                {
                  title: 'Reglamento del Torneo Categoría Menor',
                  url: 'https://portal.ine.mx/wp-content/uploads/2021/05/deceyec-mxdebate-reglamento-catmenor.pdf ',
                  description:
                    'Conoce las reglas sobre el formato y la dinámica de los debates en el Torneo.',
                  type: 'text',
                  src: reglamento,
                },
                {
                  title: 'Política de Equidad',
                  url: 'https://debatemexico.org/mexico-debate/equidad.pdf',
                  description:
                    'Garantiza que el intercambio de ideas se realice en un ambiente de respeto por todas las personas.',
                  type: 'text',
                  src: equidad,
                },
                {
                  title: 'Guía de oradores',
                  url: 'https://debatemexico.org/mexico-debate/guia_oradores_menor.pdf',
                  description:
                    'Una guía completa con las mejores técnicas e ideas para ganar debates. Elaborada por campeones.',
                  type: 'text',
                  src: oradores,
                },
              ]}
            />
            <MaterialsList
              title="Videos"
              list={[
                {
                  title: 'Formato de Debate World Schools',
                  description:
                    'Un taller impartido por el seleccionado nacional y tres veces mundialista Manuel Machorro.',
                  url: 'https://www.youtube.com/watch?v=-kQpzs0nIzU&list=PLFk0qboRAjYnTJWAjFtqa365RxWZoeABt&index=1&t=1449s ',
                  type: 'video',
                  src: world_schools,
                },
                {
                  title: 'Interpretación de mociones',
                  description:
                    'Lo más importante en un debate es entender con claridad lo que se está debatiendo. Impartido por Valeria Hernández.',
                  url: 'https://www.youtube.com/watch?v=O7EYRgFNmSc&list=PLFk0qboRAjYnTJWAjFtqa365RxWZoeABt&index=2',
                  type: 'video',
                  src: mociones,
                },
                {
                  title: 'Gran  Final Categoría Menor 2020',
                  description:
                    'Disfruta la final que nos dió a los campeones de la edición anterior del Torneo México Debate.',
                  url: 'https://www.youtube.com/watch?v=H7l1aBQGZCk&t=2631s&ab_channel=Asociaci%C3%B3nMexicanadeDebateAsociaci%C3%B3nMexicanadeDebate ',
                  type: 'video',
                  src: final,
                },
              ]}
            />
            <MaterialsList
              title="Jueces"
              list={[
                {
                  title: 'Guía de Jueces ',
                  description:
                    'Una guía completa para quienes quieren profesionalizarse como jueces.',
                  url: 'https://debatemexico.org/mexico-debate/guia_jueces.pdf',
                  type: 'text',
                  src: jueces,
                },
              ]}
            />
          </>
        );

      case 'major':
        return (
          <>
            <MaterialsList
              title="Documentos"
              list={[
                {
                  title: 'Reglamento del Torneo Categoría Mayor',
                  url: 'https://portal.ine.mx/wp-content/uploads/2021/05/deceyec-mxdebate-reglamento-catmayor.pdf ',
                  description:
                    'Conoce las reglas sobre el formato y la dinámica de los debates en el Torneo.',
                  type: 'text',
                  src: reglamento,
                },
                {
                  title: 'Política de Equidad',
                  url: 'https://debatemexico.org/mexico-debate/equidad.pdf ',
                  description:
                    'Garantiza que el intercambio de ideas se realice en un ambiente de respeto por todas las personas.',
                  type: 'text',
                  src: equidad,
                },
                {
                  title: 'Guía de oradores',
                  url: 'https://debatemexico.org/mexico-debate/guia_oradores_menor.pdf',
                  description:
                    'Una guía completa con las mejores técnicas e ideas para ganar debates. Elaborada por campeones.',
                  type: 'text',
                  src: oradores,
                },
              ]}
            />
            <MaterialsList
              title="Videos"
              list={[
                {
                  title: 'Formato Parlamentario Británico ',
                  description:
                    'El estándar internacional de debate competitivo, explicado por Daniel Hernández.',
                  url: 'https://www.youtube.com/watch?v=iKAuQjF3ixM&list=PLFk0qboRAjYk2ppW1sY9Jrm0g9qcBXCuz&index=1&t=6s ',
                  type: 'video',
                  src: parlamentario,
                },
                {
                  title: 'Interpretación de mociones',
                  description:
                    'Lo más importante en un debate es entender con claridad lo que se está debatiendo. Impartido por Valeria Hernández.',
                  url: 'https://www.youtube.com/watch?v=O7EYRgFNmSc&list=PLFk0qboRAjYk2ppW1sY9Jrm0g9qcBXCuz&index=2 ',
                  type: 'video',
                  src: mociones,
                },
                {
                  title: 'Taller extensiones ',
                  description:
                    'Con cuatro equipos compitiendo en un mismo debate, hay que saber diferenciarse. Impartido por los legendarios Rubén Sánchez y Juanita Hincapié',
                  url: 'https://www.youtube.com/watch?v=TRqiKver_U8&list=PLFk0qboRAjYk2ppW1sY9Jrm0g9qcBXCuz&index=3 ',
                  type: 'video',
                  src: extensiones,
                },
                {
                  title: 'Técnicas Avanzadas en formato BP',
                  description:
                    '¿Ya leíste la guía y viste todos los videos? Este video es para ti. Impartido por el subcampeón mundial Rubén Sánchez.',
                  url: 'https://www.youtube.com/watch?v=flicd__XGOM&list=PLFk0qboRAjYk2ppW1sY9Jrm0g9qcBXCuz&index=4 ',
                  type: 'video',
                  src: estrategias,
                },
                {
                  title: 'Gran Final Categoría Mayor 2020',
                  description:
                    'Disfruta la final que nos dió a los campeones de la edición anterior del Torneo México Debate.',
                  url: 'https://www.youtube.com/watch?v=j8nBZ_xrU0Q&t=4265s ',
                  type: 'video',
                  src: final,
                },
              ]}
            />
            <MaterialsList
              title="Jueces"
              list={[
                {
                  title: 'Guía de Jueces ',
                  description:
                    'Una guía completa para quienes quieren profesionalizarse como jueces.',
                  url: 'https://debatemexico.org/mexico-debate/guia_jueces.pdf',
                  type: 'text',
                  src: jueces,
                },
                {
                  title: 'Taller para jueces ',
                  description:
                    'Una guía para aprender a juzgar debate BP. Impartido por Valeria Hernández',
                  url: 'https://www.youtube.com/watch?v=zcMXJZasu8Q&list=PLFk0qboRAjYn_ykcZCvztAZsbvHqIU5Yx&index=8',
                  type: 'text',
                  src: taller_jueces,
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
