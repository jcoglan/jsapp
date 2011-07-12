Given /^I visit the sign\-up form$/ do
  visit '/signup'
end

When /^I enter invalid sign\-up data$/ do
  fill_in 'Username', :with => 'Hagrid'
  fill_in 'Email', :with => 'wizard [at] hogwarts.com'
  click_button 'Sign up'
end

When /^I enter valid sign\-up data$/ do
  fill_in 'Username', :with => 'Harry'
  fill_in 'Email', :with => 'wizard@hogwarts.com'
  click_button 'Sign up'
end

Then /^I should see an error$/ do
  page.should have_css('.error')
end

Then /^I should see the dashboard$/ do
  page.should have_content('You are a wizard, Harry!')
end

