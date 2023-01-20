export const debounce = (cb, delay = 500) => {
  let timeout;
  return (...arg) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...arg);
    }, delay);
  };
};
