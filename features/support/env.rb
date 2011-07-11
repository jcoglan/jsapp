require 'bundler/setup'
require File.expand_path('../../../app', __FILE__)

require 'rspec'
require 'capybara/dsl'
World Capybara::DSL

Capybara.current_driver = :rack_test
Capybara.app = Sinatra::Application

