require 'bundler/setup'
require File.expand_path('../../../app', __FILE__)

require 'rspec'
require 'capybara/dsl'
World Capybara::DSL

require File.expand_path('../../../vendor/terminus/lib/terminus', __FILE__)

# Run ./vendor/terminus/bin/terminus and connect a browser first
Capybara.current_driver = :terminus
Capybara.app = Sinatra::Application

Before { Terminus.browser = :docked }
After  { Terminus.return_to_dock    }
