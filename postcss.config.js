module.exports = {
  "parser": require('sugarss'),
  "plugins": [
    require('postcss-easy-import')({
      extensions: '.sss',
    }),
    require('precss'),
    require('postcss-mixins'),
    require('postcss-calc'),
    require('postcss-nested-props'),
    require('autoprefixer'),
  ],
}
