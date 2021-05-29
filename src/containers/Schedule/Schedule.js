import React, { useEffect, useState } from 'react';
import { ActivitiesList } from '../../components';
import scheduleMinor from '../../data/scheduleMinorCategory';
import scheduleMajor from '../../data/scheduleMajorCategory';

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

  return <ActivitiesList dataSource={activitiesList} />;
};

export default Schedule;
