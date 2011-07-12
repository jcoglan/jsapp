FormValidator = function(form) {
  form.bind('submit', function() {
    var params = form.serializeArray(),
        data   = {};
    
    for (var i = 0, n = params.length; i < n; i++)
      data[params[i].name] = params[i].value;
    
    var errors = FormValidator.validate(data);
    if (errors.length === 0) return true;
    
    form.find('.error').html(errors[0]);
    return false;
  });
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

