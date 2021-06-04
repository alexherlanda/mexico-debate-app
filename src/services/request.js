const defaultOptions = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const request = (options) => {
  return fetch(`${process.env.REACT_APP_API_GATEWAY}${options.path}`, {
    ...options,
    ...defaultOptions,
    params: JSON.stringify(options?.body),
  }).then((response) => response.json());
};
