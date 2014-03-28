// Stack of timers
var timers = [];

module.exports.tic = function () {
  timers.push(process.hrtime());
};

module.exports.toc = function () {
  if (! timers.length) return;

  var time = process.hrtime(timers.pop()),
      seconds = time[0],
      nanos   = time[1],
      ms      = nanos / 1000000;

  var result = '';

  if (seconds) result += seconds + ' seconds ';
  if (ms)      result += ms + ' ms ';

  console.log(result);
};