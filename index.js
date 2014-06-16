/**
 * Stack of timers
 * @type {Array}
 */
var timers = [];

/**
 * Creates a new timer
 */
module.exports.tic = function () {
  timers.push(process.hrtime());
};

/**
 * Prints the elapsed seconds and milliseconds for the most recent timer
 */
module.exports.toc = function () {
  var time = this.toct();

  var result = '';

  if (time.hours)   result += time.hours + ' hours ';
  if (time.minutes) result += time.minutes + ' minutes ';
  if (time.seconds) result += time.seconds + ' seconds ';
  if (time.ms)      result += time.ms + ' ms ';

  console.log(result);
};

/**
 * If you just want the elapsed time without printing
 * @return {Object} Contains the time conversions (seconds, nanos, ms) for the most recent timer
 */
module.exports.toct = function() {
  if (! timers.length) return null;

  var time = process.hrtime(timers.pop());

  return {
    seconds: time[0],
    nanos:   time[1],
    ms:      time[1] / 1000000,
    // TODO: These need to be modded to not include the seconds
    minutes: time[0] / 60,
    hours:   time[0] / 3600
  };
};
