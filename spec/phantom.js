var page = new WebPage()

page.onConsoleMessage = function(message) {
  try {
    var event = JSON.parse(message).jstest
    if (!event) return
    
    if (event.status === 'failed')
      return console.log('FAILED: ' + event.test)
    
    if (event.total) {
      console.log(JSON.stringify(event))
      var status = (!event.fail && !event.error) ? 0 : 1
      phantom.exit(status)
    }
    
  } catch (e) {}
}

page.open('spec/browser.html')

