import React from 'react';
import './WinnersGrid.css';
import Slider from 'components/Slider';
import WinnerCard from 'components/WinnerCard';
import danielDiaz from '../data/Daniel_Díaz-07.jpeg';
import danielMimilla from '../data/Daniel_Mimila-07.jpeg';
import gemma from '../data/Gemma_Guerrero-07.jpeg';
import monica from '../data/Monica_Garcia-07.jpeg';
import regina from '../data/Regina_Delgado-07.jpeg';
import ruben from '../data/Rubén_Sánchez-07.jpeg';
import sofia from '../data/Sofía_Morales-07.jpeg';
import valentina from '../data/Valentina_Cassasus-07.jpeg';
import marcelo from '../data/Marcelo_Gamboa-07.jpeg';

function WinnersGrid({ souldCombineDataSets }) {
  const majorWinners = [
    {
      id: 1,
      name: 'Gemma Guerrero',
      category: 'Categoría Mayor 2020',
      bg: gemma,
      created: '2017-11-04T18:50:21.651Z',
    },
    {
      id: 2,
      name: 'Daniel Mimila',
      category: 'Categoría Mayor 2020',
      bg: danielMimilla,
      created: '2017-11-04T19:09:56.428Z',
    },
    {
      id: 3,
      name: 'Rubén Sánchez',
      category: 'Categoría Mayor 2019',
      bg: ruben,
    },
    {
      id: 4,
      name: 'Mónica García',
      category: 'Categoría Mayor 2019',
      bg: monica,
      created: '2017-11-04T19:26:56.301Z',
    },
  ];

  const minorWinners = [
    {
      id: 11,
      name: 'Valentina Casasus',
      category: 'Categoría Menor 2020',
      bg: valentina,
      created: '2017-11-04T18:50:21.651Z',
    },
    {
      id: 12,
      name: 'Sofía Morales',
      category: 'Categoría Menor 2020',
      bg: sofia,
      created: '2017-11-04T19:09:56.428Z',
    },
    {
      id: 13,
      name: 'Regina Delgado',
      category: 'Categoría Menor 2020',
      bg: regina,
    },
    {
      id: 14,
      name: 'Marcelo Gamboa',
      category: 'Categoría Menor 2020',
      bg: marcelo,
      created: marcelo,
    },
    {
      id: 15,
      name: 'Daniel Mendez ',
      category: 'Categoría Menor 2020',
      bg: danielDiaz,
      created: valentina,
    },
  ];
  return (
    <div className="winners-grid">
      <Slider
        items={majorWinners}
        config={{
          autoPlay: true,
          containerClass: 'slider-winner-container',
          itemClass: 'winners-item',
          infinite: true,
          responsive: {
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 4,
              slidesToSlide: 1, // optional, default to 1.
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
            },
          },
        }}
      >
        <WinnerCard />
      </Slider>
      <div style={{ marginTop: '1rem' }} />
      <Slider
        items={souldCombineDataSets ? [...minorWinners, ...majorWinners] : minorWinners}
        config={{
          autoPlay: true,
          containerClass: 'slider-winner-container',
          itemClass: 'winners-item',
          infinite: true,
          responsive: {
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 4,
              slidesToSlide: 1, // optional, default to 1.
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
            },
          },
        }}
      >
        <WinnerCard />
      </Slider>
    </div>
  );
}

export default WinnersGrid;
