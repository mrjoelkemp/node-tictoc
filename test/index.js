var time = require('../');

time.tic();

for (var i = 0; i < 100000; i++) {
}

time.toc();

time.tic();
setTimeout(function () {
  time.toc();
}, 500);