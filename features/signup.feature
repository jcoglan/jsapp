Feature: Signing up
  In order to show everyone what a badass I am
  As a developer
  I want to make my users sit through some JavaScript validation
  
  Background:
    Given I visit the sign-up form
  
  Scenario: Entering the wrong name
    When I enter an invalid name
    Then I should see "Your name is invalid"
  
  Scenario: Entering the wrong email address
    When I enter an invalid email address
    Then I should see "Your email is invalid"
  
  Scenario: Having an invalid argument
    When I use an invalid argument
    Then I should see "Your argument is invalid"
  
  Scenario: Entering valid data
    When I enter valid sign-up data
    Then I should see "You are a wizard, Harry!"

