{
  baseUrl: './',
  paths: {
    'vue': 'node_modules/vue/dist/vue',
    'jquery': 'node_modules/jquery/dist/jquery',
    'text': 'node_modules/text/text',
    css: 'node_modules/require-css/css',
    // Temporary fix to ensure that the CSS plugins internal modules are
    // loaded correctly.
    'css-builder': 'node_modules/require-css/css-builder',
    normalize: 'node_modules/require-css/normalize',
    'components': 'components'
  },
  name: 'main',
  out: 'main.build.js',
  optimize: 'uglify2',
  generateSourceMaps: true,
  preserveLicenseComments: false
}
