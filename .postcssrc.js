// ESM : 브라우저에서 동작
// CommonJS : node.js 에서 동작

// import autoprefixer from 'autoprefixer
// const autoprefixer = require('autoprefixer')

// export {
//   plugins: [
//     autoprefixer
//   ]
// }
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}