'use strict';
/* jshint unused: false */
module.exports = function (err, req, res, next) {
  res.end('<h1>Error</h1><pre>' + err.message + '</pre>');
};
