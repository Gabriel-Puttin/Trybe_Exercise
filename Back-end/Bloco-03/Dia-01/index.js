const path = require('path');
const { usdToBrl, brl } = require('./brlValue');

console.log(path.dirname('/usr/share/gnome'));
console.log(path.resolve('usr', 'share', 'gnome'));
console.log(path.resolve('/', 'usr', 'share', 'gnome'));
console.log(usdToBrl(10));
console.log(brl);