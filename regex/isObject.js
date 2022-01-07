const isObject = (value) => {
  if (!value) return false;
  else if (typeof value === 'object'
    && !Array.isArray(value)
    && JSON.stringify(value) !== '{}') return true;
  return false;
}

module.exports = isObject;
