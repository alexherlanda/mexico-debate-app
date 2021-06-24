import React from 'react';
import PropTypes from 'prop-types';
import MaterialItem from '../MaterialItem';

const MaterialsList = (props) => {
  const { title, list } = props;

  return (
    <>
      <h2>{title}</h2>
      <div>
        {list.map((item, i) => (
          <MaterialItem
            key={`${title}-${i}`}
            title={item.title}
            description={item.description}
            url={item.url}
            {...item}
          />
        ))}
      </div>
    </>
  );
};

MaterialsList.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
};

MaterialsList.defaultProps = {
  title: 'Cursos',
  list: [{}, {}],
};

export default MaterialsList;
