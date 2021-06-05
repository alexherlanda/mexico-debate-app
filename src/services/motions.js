const baseURL = 'motions/';

export const READ_MOTIONS = { method: 'GET', path: `${baseURL}?all=true` };

export const READ_MOTION = ({ noticeId }) => {
  return {
    method: 'GET',
    path: `${baseURL}${noticeId}`,
  };
};
export const ADD_MOTION = ({ data }) => {
  return { method: 'POST', path: baseURL, data };
};

export const ADD_BULK_MOTIONS = ({ data }) => {
  return { method: 'POST', path: `${baseURL}massive`, data };
};
