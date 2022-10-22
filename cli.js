//#!/usr/bin/env node

function kills(x, ca) {
  try {
    return ca();
  } catch (error) {
    return x;
  }
}

e = '';
const yargs = require('yargs' + e);

const argv = yargs
  .command('lyr', '', {})
  .option('time', {
    alias: 't',
  })
  .help()
  .alias('help', 'h').argv;

this.build = (x) => {
  console.log('i got ' + x);

  switch (x) {
    case 'server':
      require('./es/server.js');
      break;
    case 'client':
      require('./es/build.js');
      break;
    default:
      require('./es/server.js');
      break;
  }
};
this.dev = (x, rest) => {
  require('./es/watch.js');
};
let argsArray = (() => {
  let arr = [];
  for (let i = 0; i < process.argv.length; i++) {
    arr.push(process.argv[i]);
  }
  return arr;
})();
for (var key in argv) {
  if (this[key] && typeof this[key] === 'function') {
    this[key](argv[key], argv);
  }
}
