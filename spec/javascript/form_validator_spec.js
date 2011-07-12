JS.ENV.FormValidatorSpec = JS.Test.describe("FormValidator", function() { with(this) {
  cover(FormValidator)
  
  describe("with valid data", function() { with(this) {
    before(function() { with(this) {
      this.errors = FormValidator.validate({username: "Harry", email: "wizard@hogwarts.com"})
    }})
    
    it("displays no errors", function() { with(this) {
      assertEqual( [], errors )
    }})
  }})
  
  describe("with an invalid name", function() { with(this) {
    before(function() { with(this) {
      this.errors = FormValidator.validate({username: "Hagrid"})
    }})
    
    it("displays an error message", function() { with(this) {
      assertEqual( ["Your name is invalid"], errors )
    }})
  }})
  
  describe("with an invalid email", function() { with(this) {
    before(function() { with(this) {
      this.errors = FormValidator.validate({username: "Harry", email: "wizard [at] hogwarts.com"})
    }})
    
    it("displays an error message", function() { with(this) {
      assertEqual( ["Your email is invalid"], errors )
    }})
  }})
  
  describe("with an invalid argument", function() { with(this) {
    before(function() { with(this) {
      this.errors = FormValidator.validate({username: "Wizard"})
    }})
    
    it("displays an error message", function() { with(this) {
      assertEqual( ["Your argument is invalid"], errors )
    }})
  }})
  
  if (typeof document === 'undefined') return
  
  JS.ENV.FORM_HTML = '\
            <form method="post" action="/accounts/create">\
              <label for="username">Username</label>\
              <input type="text" id="username" name="username">\
              \
              <label for="email">Email</label>\
              <input type="text" id="email" name="email">\
              \
              <div class="error"></div>\
              <input type="submit" value="Sign up">\
            </form>'
  
  before(function() {
    $("#fixture").html(FORM_HTML)
    new FormValidator($("form"))
    
    this.submit = $("form input[type=submit]")
    this.error  = $("form .error")
  })
  
  describe("with an invalid name", function() { with(this) {
    before(function() { with(this) {
      $("#username").val("Hagrid")
      submit.click()
    }})
    
    it("displays an error message", function() { with(this) {
      assertEqual( "Your name is invalid", error.html() )
    }})
  }})
}})

