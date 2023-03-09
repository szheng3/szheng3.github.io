export const getUrlParam = (uri, obj = {}) => {
  const param = Object.keys(obj)
    .map(key => {
      return key + '=' + obj[key];
    })
    .join('&');

  return uri + (param ? '?' + param : '');
};
