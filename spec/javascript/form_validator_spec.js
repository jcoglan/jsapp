JS.ENV.FormValidatorSpec = JS.Test.describe("FormValidator", function() { with(this) {
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
  
  describe("with an invalid email", function() { with(this) {
    before(function() { with(this) {
      $("#username").val("Harry")
      $("#email").val("wizard [at] hogwarts.com")
      submit.click()
    }})
    
    it("displays an error message", function() { with(this) {
      assertEqual( "Your email is invalid", error.html() )
    }})
  }})
  
  describe("with an invalid argument", function() { with(this) {
    before(function() { with(this) {
      $("#username").val("Wizard")
      submit.click()
    }})
    
    it("displays an error message", function() { with(this) {
      assertEqual( "Your argument is invalid", error.html() )
    }})
  }})
}})

