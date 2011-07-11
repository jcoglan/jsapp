Given /^I visit the sign\-up form$/ do
  visit '/signup'
end

When /^I enter an invalid name$/ do
  fill_in 'Username', :with => 'Hagrid'
  click_button 'Sign up'
end

When /^I enter an invalid email address$/ do
  fill_in 'Username', :with => 'Harry'
  fill_in 'Email', :with => 'wizard [at] hogwarts.com'
  click_button 'Sign up'
end

When /^I use an invalid argument$/ do
  fill_in 'Username', :with => 'Wizard'
  click_button 'Sign up'
end

When /^I enter valid sign\-up data$/ do
  fill_in 'Username', :with => 'Harry'
  fill_in 'Email', :with => 'wizard@hogwarts.com'
  click_button 'Sign up'
end

Then /^I should see "([^"]*)"$/ do |text|
  page.should have_content(text)
end

