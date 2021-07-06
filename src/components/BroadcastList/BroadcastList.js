import React, { useEffect } from 'react';
import 'components/MotionList/Motion.css';

import Loader from 'components/Loader';
import { broadcastsRequest } from 'redux/actions/';
import { connect } from 'react-redux';
function BroadcastList({ broadcastsRequest: getBroadcast, source }) {
  useEffect(() => {
    getBroadcast();
  }, [getBroadcast]);

  const generateList = () => {
    return source.data.map((item) => (
      <div className="motion-item" key={item?._id}>
        <p>{item.title}</p>
      </div>
    ));
  };

  return (
    <div className="motion-list">
      <div className="motion-container-list">
        {source.isLoading && <Loader />}
        {!source.isLoading && source.data?.length > 0 && <>{generateList()}</>}
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    source: state?.broadcasts ?? { isLoading: false },
  };
}

export default connect(mapStateToProps, { broadcastsRequest })(BroadcastList);
