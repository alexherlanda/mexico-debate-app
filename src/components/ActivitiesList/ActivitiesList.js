import React from 'react';
import Activity from './Activity';
import PropTypes from 'prop-types';

const ActivitiesList = ({ dataSource }) => {
  return dataSource?.length > 0
    ? dataSource.map((activity) => (
        <Activity
          description={activity.description}
          end={activity.end}
          key={activity.id}
          start={activity.start}
          title={activity.title}
        />
      ))
    : null;
};

ActivitiesList.propTypes = {
  dataSource: PropTypes.array,
};

ActivitiesList.defaultProps = {
  dataSource: [],
};

export default ActivitiesList;
