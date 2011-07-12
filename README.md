# JS App

It's an app. With JavaScript.

    git clone git://github.com/jcoglan/jsapp.git
    cd jsapp
    git submodule update --init --recursive
    cd vendor/js.class
    jake
    cd ../..
    
    cucumber features
    node spec/console.js
    open spec/browser.html
    phantomjs spec/phantom.js
