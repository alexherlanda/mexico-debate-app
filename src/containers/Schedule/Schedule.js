import React, { useEffect, useState } from 'react';
import { format, zonedTimeToUtc, utcToZonedTime } from 'date-fns-tz';
import { ActivitiesList, DaySelector, TimeZoneSelector, CategorySelector } from '../../components';
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

  return (
    <div className="schedule">
      <DaySelector
        onDayClicked={handleSelectedDay}
        selectedDay={selectedDayIndex}
        dataSource={selectedCategory === 'minor' ? scheduleMinor : scheduleMajor}
      />
      <div>
        <CategorySelector
          selectedCategory={selectedCategory}
          onCategoryClick={handleOnClickCategory}
        />
        <TimeZoneSelector />
      </div>
      <ActivitiesList dataSource={activitiesList} />{' '}
    </div>
  );
};

export default Schedule;
