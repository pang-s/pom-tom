const { menubar } = require('menubar');

const mb = menubar({
  'browserWindow': {
    height: 240,
    width: 200
  }

});

mb.on('ready', () => {
  console.log('app is ready');
  // your app code here

});

