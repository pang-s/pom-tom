var menubar = require('menubar')

var mb = menubar({
  height: 250,
  width: 270
})

mb.on('ready', function ready () {
  console.log('app is ready')
})
