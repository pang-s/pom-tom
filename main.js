var menubar = require('menubar')

var mb = menubar({
  height: 300,
  width: 300
})

mb.on('ready', function ready () {
  console.log('app is ready')
})
