var menubar = require('menubar')

var mb = menubar({
  height: 240,
  width: 200
})

mb.on('ready', function ready () {
  console.log('app is ready')
})
