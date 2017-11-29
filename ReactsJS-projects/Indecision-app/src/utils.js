import default from "hash.js";

console.log('utils.js is running');

const square = (x) => x * x;

const add = (a, b) => a + b;

export { square, add };

// exports - default export - named exports

export const square = (x) => x * x;

export const  add = (a, b) => a + b;

const subtract = (a, b) => a - b;

// export default

