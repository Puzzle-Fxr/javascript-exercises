const convertToCelsius = function(degree) {
  const result = Math.round(((degree - 32) * 5/9) * 10) / 10;
  return result;
};

const convertToFahrenheit = function(degree) {
  const result = Math.round((degree * 9/5 + 32) * 10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
