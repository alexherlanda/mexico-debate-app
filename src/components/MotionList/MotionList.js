import React, { useEffect, useState } from 'react';
import './Motion.css';
import { request } from 'services/request';
import Loader from 'components/Loader';
import { READ_MOTIONS } from 'services/motions';

function MotionList() {
  const [source, setSource] = useState({ isLoading: false, data: [] });

  useEffect(() => {
    const notices = async () => {
      setSource({ isLoading: true });
      try {
        const results = await request(READ_MOTIONS);
     
        setTimeout(() => {
          setSource({ isLoading: false, data: results.data?.motions });
        }, 600);
      } catch (error) {
        console.warn('Ocurrió un erro al leer las notificaciones');
      }
    };
    notices();
  }, []);

  const generateList = () => {
    return source.data.map((item) => (
      <div className="motion-item" key={item?._id}>
        {item.title}
      </div>
    ));
  };

  return (
    <div className="motion-list">
      {source.isLoading && <Loader />}
      {!source.isLoading && source.data?.length > 0 && (
        <>
          <h3>Mociones</h3>
          <h4>Subtitulo de la actividad</h4>
          {generateList()}
        </>
      )}
    </div>
  );
}

export default MotionList;
