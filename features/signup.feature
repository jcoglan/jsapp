Feature: Signing up
  In order to show everyone what a badass I am
  As a developer
  I want to make my users sit through some JavaScript validation
  
  Background:
    Given I visit the sign-up form
  
  Scenario: Entering invalid data
    When I enter invalid sign-up data
    Then I should see an error
  
  Scenario: Entering valid data
    When I enter valid sign-up data
    Then I should see the dashboard

