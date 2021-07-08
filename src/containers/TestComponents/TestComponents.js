import React, { useState } from 'react';
import Card from 'components/SliderCard';
import Slider from 'components/Slider';
import WinnerCard from 'components/WinnerCard';
import Banner from 'components/Banner';
import NoticeList from 'components/NoticeList';
import MotitionList from 'components/MotionList';
import { FormInput } from '../../components';
import './styles.css';

function TestComponents() {
  const [notification, setNotification] = useState('');

  const handleNotificationChange = (value) => {
    setNotification(value);
  };

  const handlePostNotification = (e) => {
    e.preventDefault();
    console.log('not', notification);
  };

  return (
    <form onSubmit={handlePostNotification}>
      <FormInput onChange={handleNotificationChange} label="AVISO" value={notification} />
      <button type="submit">Publicar</button>
    </form>
  );
}

export default TestComponents;
