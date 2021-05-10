module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  "moduleFileExtensions": [
    "js",
    "json",
    // tell Jest to handle `*.vue` files
    "vue"
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest'
  }
}
