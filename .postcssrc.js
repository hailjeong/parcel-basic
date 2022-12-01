// ESM
// CommonJS => node.js에서 제공하는 방식

// import autoprefixer from 'autoprefixer'

// export {
// plugins: [
// autoprefixer
// ]
// }
module.exports = {
  plugins: [require("autoprefixer")],
};
