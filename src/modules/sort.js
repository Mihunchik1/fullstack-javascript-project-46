export default (arr) => {
  const resultSort  = arr.sort(function(a, b) {
    if (a.substring(4, 5) > b.substring(4, 5)) {
      return 1;
    }
    if (a.substring(4, 5) < b.substring(4, 5)) {
      return -1;
    }
    if (a.substring(4, 5) === b.substring(4, 5)) {
      return 0;
    }
  })
  return resultSort;
}