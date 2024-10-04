/* eslint-disable consistent-return */
export default (arr) => {
  // eslint-disable-next-line array-callback-return
  const resultSort = arr.sort((a, b) => {
    if (a.substring(4, 5) > b.substring(4, 5)) {
      return 1;
    }
    if (a.substring(4, 5) < b.substring(4, 5)) {
      return -1;
    }
    if (a.substring(4, 5) === b.substring(4, 5)) {
      return 0;
    }
  });
  return resultSort;
};
