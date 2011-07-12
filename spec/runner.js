var CWD = (typeof CWD === 'undefined') ? '.' : CWD

JS.Packages(function() { with(this) {
  file(CWD + '/public/form_validator.js')
      .provides('FormValidator')
  
  autoload(/^(.*)Spec$/, {from: CWD + '/spec/javascript', require: '$1'})
}})

JS.require('JS.Test', function() {
  JS.require('FormValidatorSpec', JS.Test.method('autorun'))
})

