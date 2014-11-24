'use strict';

var qs = require('qs'),
  url = require('url');

module.exports = function (req, res, next) {
  req.parsedUrl = url.parse(req.url);
  req.query = qs.parse(req.parsedUrl.query);
  next();
};
