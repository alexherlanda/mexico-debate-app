import React from 'react';
import './WinnersGrid.css';
import Slider from 'components/Slider';
import WinnerCard from 'components/WinnerCard';
function WinnersGrid() {
  return (
    <div className="winners-grid">
      <Slider
        items={[
          {
            id: 2,
            name: 'Rick Sanchez',
            from: 'Earth (C-137)',
            bg: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            created: '2017-11-04T18:50:21.651Z',
          },
          {
            id: 3,
            name: 'Summer Smith',
            from: 'Earth (Replacement Dimension)',

            bg: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
            created: '2017-11-04T19:09:56.428Z',
          },
          {
            id: 4,
            name: 'Beth Smith',
            from: 'Earth (Replacement Dimension)',

            bg: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
          },
          {
            id: 5,
            name: 'Jerry Smith',
            from: 'Earth (Replacement Dimension)',

            bg: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
            created: '2017-11-04T19:26:56.301Z',
          },
          {
            id: 6,
            name: 'Abadango Cluster Princess',
            from: 'Abadango',

            bg: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
            created: '2017-11-04T19:50:28.250Z',
          },
          {
            id: 7,
            name: 'Abradolf Lincler',
            from: 'Earth (Replacement Dimension)',

            bg: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg',
            created: '2017-11-04T19:59:20.523Z',
          },
          {
            id: 8,
            name: 'Adjudicator Rick',
            from: 'unknown',
            bg: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
            created: '2017-11-04T20:03:34.737Z',
          },
          {
            id: 9,
            name: 'Agency Director',
            from: 'Earth (Replacement Dimension)',
            bg: 'https://rickandmortyapi.com/api/character/avatar/9.jpeg',
            created: '2017-11-04T20:06:54.976Z',
          },
          {
            id: 10,
            name: 'Alan Rails',
            from: "Worldender's lair",
            bg: 'https://rickandmortyapi.com/api/character/avatar/10.jpeg',
            created: '2017-11-04T20:19:09.017Z',
          },
        ]}
        config={{
          autoPlay: true,
          containerClass: 'slider-winner-container',
          infinite: true,
          responsive: {
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 4,
              slidesToSlide: 1, // optional, default to 1.
            },
          },
        }}
      >
        <WinnerCard />
      </Slider>
      <div style={{ marginTop: '1rem' }}></div>
      <Slider
        items={[
          {
            id: 2,
            name: 'Rick Sanchez',
            from: 'Earth (C-137)',
            bg: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            created: '2017-11-04T18:50:21.651Z',
          },
          {
            id: 3,
            name: 'Summer Smith',
            from: 'Earth (Replacement Dimension)',

            bg: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
            created: '2017-11-04T19:09:56.428Z',
          },
          {
            id: 4,
            name: 'Beth Smith',
            from: 'Earth (Replacement Dimension)',

            bg: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
          },
          {
            id: 5,
            name: 'Jerry Smith',
            from: 'Earth (Replacement Dimension)',

            bg: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
            created: '2017-11-04T19:26:56.301Z',
          },
          {
            id: 6,
            name: 'Abadango Cluster Princess',
            from: 'Abadango',

            bg: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
            created: '2017-11-04T19:50:28.250Z',
          },
          {
            id: 7,
            name: 'Abradolf Lincler',
            from: 'Earth (Replacement Dimension)',

            bg: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg',
            created: '2017-11-04T19:59:20.523Z',
          },
          {
            id: 8,
            name: 'Adjudicator Rick',
            from: 'unknown',
            bg: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
            created: '2017-11-04T20:03:34.737Z',
          },
          {
            id: 9,
            name: 'Agency Director',
            from: 'Earth (Replacement Dimension)',
            bg: 'https://rickandmortyapi.com/api/character/avatar/9.jpeg',
            created: '2017-11-04T20:06:54.976Z',
          },
          {
            id: 10,
            name: 'Alan Rails',
            from: "Worldender's lair",
            bg: 'https://rickandmortyapi.com/api/character/avatar/10.jpeg',
            created: '2017-11-04T20:19:09.017Z',
          },
        ]}
        config={{
          autoPlay: true,
          containerClass: 'slider-winner-container',
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
