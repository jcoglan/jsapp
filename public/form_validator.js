function FormValidator(form) {
  var username = form.find('#username'),
      email    = form.find('#email'),
      error    = form.find('.error');
  
  form.bind('submit', function() {
    if (username.val() === 'Wizard') {
      error.html('Your argument is invalid');
      return false;
    }
    else if (username.val() !== 'Harry') {
      error.html('Your name is invalid');
      return false;
    }
    else if (!/@/.test(email.val())) {
      error.html('Your email is invalid');
      return false;
    }
  });
};

