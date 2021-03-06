import React, { useState, useEffect } from 'react';
import './NoticeList.css';
import { request } from 'services/request';
import Loader from 'components/Loader';
import { READ_NOTICES } from 'services/notices';
const { format, isValid, parseISO } = require('date-fns');

function Notice() {
  const [source, setSource] = useState({ isLoading: false, data: [] });

  useEffect(() => {
    const notices = async () => {
      setSource({ isLoading: true });
      try {
        const results = await request(READ_NOTICES);

        setTimeout(() => {
          setSource({ isLoading: false, data: results.data?.notifications });
        }, 600);
      } catch (error) {
        console.warn('Ocurrió un error al leer las notificaciones');
      }
    };
    notices();
  }, []);

  const generateList = () => {
    return source.data.map((item) => {
      return (
        <li className="notice-list__item " key={item?._id}>
          <div className="item__notification">{item.message}</div>
          <div className="item__metadata">
            {item?.createdAt && format(parseISO(item.createdAt), 'dd/MM/yyyy HH:mm:ss')}{' '}
          </div>
        </li>
      );
    });
  };

  return (
    <div className="notice-list">
      {source.isLoading && <Loader />}
      {!source.isLoading && source.data?.length > 0 && (
        <>
          <ul className="notice-list__container ">{generateList()}</ul>
        </>
      )}
    </div>
  );
}

export default Notice;
