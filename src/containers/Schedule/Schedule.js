import React, { useEffect, useState } from 'react';
import { ActivitiesList, DaySelector, CategorySelector } from '../../components';
import scheduleMinor from '../../data/scheduleMinorCategory';
import scheduleMajor from '../../data/scheduleMajorCategory';
import './Schedule.css';

const Schedule = () => {
  const [selectedCategory, setSelectedCategory] = useState('minor');
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [activitiesList, setActivitiesList] = useState([]);

  useEffect(() => {
    if (selectedCategory === 'minor') {
      setActivitiesList(scheduleMinor[selectedDayIndex].activities);
    } else if (selectedCategory === 'major') {
      setActivitiesList(scheduleMajor[selectedDayIndex].activities);
    }
  }, [selectedDayIndex, selectedCategory]);

  const handleSelectedDay = (providedIndex) => {
    setSelectedDayIndex(providedIndex);
  };

  const handleOnClickCategory = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  // const handleOnZoneClick = (timeZone) => {
  //   setSelectedTimeZone(timeZone);
  // };

  return (
    <div className="schedule">
      <DaySelector
        onDayClicked={handleSelectedDay}
        selectedDay={selectedDayIndex}
        dataSource={selectedCategory === 'minor' ? scheduleMinor : scheduleMajor}
      />
      <div className="schedule__category">
        <CategorySelector
          selectedCategory={selectedCategory}
          onCategoryClick={handleOnClickCategory}
        />

        {/* <TimeZoneSelector
          selectedTimeZone={selectedTimeZone}
          onZoneClick={handleOnZoneClick}
        /> */}
      </div>
      <ActivitiesList dataSource={activitiesList} />
      <div className="schedule__bottomBar">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={
            selectedCategory === 'minor'
              ? 'https://www.ine.mx/wp-content/uploads/2021/05/deceyec-mxdebateHorarios-categoria-menor_Final.pdf'
              : 'https://portal.ine.mx/wp-content/uploads/2021/05/deceyec-mxdebate-horarios-cat-mayor-final.pdf'
          }
          className="bottomBar__download"
        >
          {' '}
          Descargar Horario{' '}
        </a>
      </div>
    </div>
  );
};

export default Schedule;
