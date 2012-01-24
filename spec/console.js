JSCLASS_PATH = 'node_modules/jsclass/src'

if (typeof require === 'function') {
  require('../' + JSCLASS_PATH + '/loader.js')
  require('./runner.js')
} else {
  load(JSCLASS_PATH + '/loader.js')
  load('spec/runner.js')
}

