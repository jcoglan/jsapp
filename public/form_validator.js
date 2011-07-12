FormValidator = function(form) {
  this._form = form[0];
  var self = this;
  
  var handler = function(e) {
    var success = self.handleSubmit(),
        event   = e || window.event;
    
    if (success) return;
    
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
  };
  
  if (this._form.addEventListener)
    this._form.addEventListener('submit', handler, false);
  else
    this._form.attachEvent('onsubmit', handler);
};

FormValidator.prototype.handleSubmit = function() {
  var params = $(this._form).serializeArray(),
      data   = {};
  
  for (var i = 0, n = params.length; i < n; i++)
    data[params[i].name] = params[i].value;
  
  var errors = FormValidator.validate(data);
  if (errors.length === 0) return true;
  
  $(this._form).find('.error').html(errors[0]);
  return false;
};

FormValidator.validate = function(params) {
  var errors = [];
  
  if (params.username === 'Wizard')
    errors.push('Your argument is invalid');
  
  else if (params.username !== 'Harry')
    errors.push('Your name is invalid');
  
  else if (!/@/.test(params.email))
    errors.push('Your email is invalid');
  
  return errors;
};

