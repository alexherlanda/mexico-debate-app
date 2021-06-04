const baseURL = 'notifications/';
export const READ_NOTICES = { method: 'GET', path: `${baseURL}?all=true` };

export const READ_NOTICE = ({ noticeId }) => {
  return {
    method: 'GET',
    path: `${baseURL}${noticeId}`,
  };
};
export const ADD_NOTICE = ({ data }) => {
  return { method: 'POST', path: baseURL, data };
};

export const ADD_BULK_NOTICE = ({ data }) => {
  return { method: 'POST', path: `${baseURL}massive`, data };
};
