const defaultOptions = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const request = (options) => {
  let hasBody = options.body ? { body: JSON.stringify(options?.body) } : {};

  return fetch(`${process.env.REACT_APP_API_GATEWAY}${options.path}`, {
    ...options,
    ...defaultOptions,
    ...hasBody,
  }).then((response) => response.json());
};
