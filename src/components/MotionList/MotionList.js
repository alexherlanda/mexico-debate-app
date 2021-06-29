import React, { useEffect, useState } from 'react';
import axios from '../../services/axios';
import CategorySelector from '../CategorySelector';
import './Motion.css';
import { request } from 'services/request';
import Loader from 'components/Loader';
import { READ_MOTIONS } from 'services/motions';

function MotionList() {
  const [category, setCategory] = useState('major');
  const [source, setSource] = useState({ isLoading: false, data: [] });

  useEffect(() => {
    const mapCategoryObject = {
      minor: 'menor',
      major: 'mayor',
    };

    const fetchMotions = async () => {
      setSource({ isLoading: true });
      try {
        const results = await request({
          ...READ_MOTIONS,
          path: `motions?category=${mapCategoryObject[category]}`,
        });

        setTimeout(() => {
          setSource({ isLoading: false, data: results.data?.motions });
        }, 600);
      } catch (error) {
        console.warn('Ocurrió un erro al leer las notificaciones');
      }
    };
    fetchMotions();
  }, [category]);

  const handleOnCategoryClick = (selected) => {
    setCategory(selected);
  };

  const generateList = () => {
    return source.data.map((item) => (
      <div className="motion-item" key={item?._id}>
        <p>{item.title}</p>
      </div>
    ));
  };

  return (
    <div className="motion-list">
      <div className="schedule__category">
        <CategorySelector selectedCategory={category} onCategoryClick={handleOnCategoryClick} />
      </div>
      <div className="motion-container-list">
        {source.isLoading && <Loader />}
        {!source.isLoading && source.data?.length > 0 && <>{generateList()}</>}
      </div>
    </div>
  );
}

export default MotionList;
