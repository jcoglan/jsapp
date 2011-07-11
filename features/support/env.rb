require 'bundler/setup'
require File.expand_path('../../../app', __FILE__)

require 'rspec'
require 'capybara/dsl'
World Capybara::DSL

Capybara.current_driver = :selenium
Capybara.app = Sinatra::Application

