const sum = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

// CommonJS module.exports syntax to export the functions
// module.exports = {
//   sum: sum,
//   subtract: subtract,
//   multiply: multiply,
// };

export { sum, subtract, multiply };
