# JS App

It's an app. With JavaScript.

    git clone git://github.com/jcoglan/jsapp.git
    bundle install
    cd jsapp
    git submodule update --init --recursive
    cd vendor/js.class
    jake
    cd ../..
    
    cucumber features #make sure to start up terminus first
      vendor/terminus/bin/terminus
      open 127.0.0.1:7004
    node spec/console.js
    open spec/browser.html
    phantomjs spec/phantom.js #note make sure you have phantomjs 1.2 installed


### Software used

* [Sinatra](http://www.sinatrarb.com)
* [Cucumber](http://cukes.info)
* [Capybara](https://github.com/jnicklas/capybara)
* [Rack::Test](https://github.com/brynary/rack-test)
* [Selenium](http://seleniumhq.org)
* [Terminus](http://github.com/jcoglan/terminus)
* [jQuery](http://jquery.com)
* [JS.Class](http://jsclass.jcoglan.com)
* [JS.Test](http://jsclass.jcoglan.com/testing.html)
* [PhantomJS](http://www.phantomjs.org)
