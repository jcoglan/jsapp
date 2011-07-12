JSCLASS_PATH = 'vendor/js.class/build/src'

if (typeof require === 'function') {
  require('../' + JSCLASS_PATH + '/loader.js')
  require('./runner.js')
} else {
  load(JSCLASS_PATH + '/loader.js')
  load('spec/runner.js')
}

