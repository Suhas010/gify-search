
export const debounce = function (func, delay) {
  let timer;
  return function (...args) {
    const that = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(that, args);
    }, delay);
  };
};

export const memoize = (func) => {
  const cache = [];
  return function (...args) {
    const key = JSON.stringify({ ...args });
    // if cache exceed limit of 100 remove first key and insert new one
    if (Object.keys(cache).length > 100) delete cache[Object.keys(cache)[0]];
    if (cache[key] === undefined) {
      cache[key] = func(...args);
    }
    return cache[key];
  };
};

export const getFormatedNumber = (number) => new Intl.NumberFormat('en-IN').format(number);
export const getCurrencyFormater = (price) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(price);
export const getRatings = () => Math.random() * 5 + 1;
export const getVots = () => getFormatedNumber(parseInt(getRatings() * 50000, 10));
