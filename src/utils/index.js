export const cleanLocalStorage = () => {
  Object.keys(window.localStorage).forEach(function (key) {
    window.localStorage.removeItem(key);
  });
};
