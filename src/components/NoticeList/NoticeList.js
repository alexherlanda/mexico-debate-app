import React, { useState, useEffect } from 'react';
import './Notice.css';
import { request } from 'services/request';
import Loader from 'components/Loader';
import { READ_NOTICES } from 'services/notices';

function Notice() {
  const [source, setSource] = useState({ isLoading: false, data: [] });

  useEffect(() => {
    const notices = async () => {
      setSource({ isLoading: true });
      try {
        const results = await request(READ_NOTICES);
        console.log('results :>> ', results);
        setTimeout(() => {
          setSource({ isLoading: false, data: results.data?.notifications });
        }, 600);
      } catch (error) {
        console.warn('Ocurrió un erro al leer las notificaciones');
      }
    };
    notices();
  }, []);

  const generateList = () => {
    return source.data.map((item) => (
      <li className="notice-item" key={item?._id}>
        {item.message}
      </li>
    ));
  };

  return (
    <div className="notice-list">
      {source.isLoading && <Loader />}
      {!source.isLoading && source.data?.length > 0 && (
        <>
          <h3>Avisos</h3>
          <ul>{generateList()}</ul>
        </>
      )}
    </div>
  );
}

export default Notice;
