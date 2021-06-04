import React, { useEffect } from 'react';
import './Notice.css';
import PropTypes from 'prop-types';
import { request } from 'services/request';
import { READ_NOTICES } from 'services/notices';

function Notice(props) {
  const { source, isLoading, itemKey } = props;

  useEffect(() => {
    request(READ_NOTICES);
  }, []);

  return (
    <div className="notice-list">
      {isLoading && <h2>Cargando...</h2>}
      {!isLoading &&
        source.length > 0 &&
        source.map((item) => {
          return (
            <li className="notice-item" key={item[itemKey]}>
              {item.notice}
            </li>
          );
        })}
    </div>
  );
}

Notice.propTypes = {
  source: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  itemKey: PropTypes.string,
};

Notice.defaultProps = {
  source: [
    { notice: 'ADDD', key: '1' },
    { notice: 'BBBB', key: '2' },
  ],
  isLoading: false,
  itemKey: 'key',
};

export default Notice;
