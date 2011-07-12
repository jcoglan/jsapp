JS.ENV.FormValidatorSpec = JS.Test.describe("FormValidator", function() { with(this) {
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
}})

