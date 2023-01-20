export const dateToString = date => {
  return date?.toLocaleString('en-US').split(', ')[0];
};
