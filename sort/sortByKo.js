const sortByKo = (array, valueInObj, order = 'asc') => {
  if (order === 'desc') {
    if (valueInObj) {
      return array.sort((a, b) => (a[valueInObj] > b[valueInObj]
        ? -1
        : a[valueInObj] < b[valueInObj]
          ? 1
          : 0));
    }
    return array.sort((a, b) => (a > b
      ? -1
      : a < b
        ? 1
        : 0));
  }

  if (valueInObj) {
    return array.sort((a, b) => (a[valueInObj] > b[valueInObj]
      ? 1
      : a[valueInObj] < b[valueInObj]
        ? -1
        : 0));
  }
  return array.sort((a, b) => (a > b
    ? 1
    : a < b
      ? -1
      : 0));
};

module.exports = sortByKo;
