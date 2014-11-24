'use strict';
/* jshint unused: false */
module.exports = function (req, res, next) {
  var query = req.query || {},
    options = {
      type: 'png'
    };
  if (query.format) {
    var format = String(query.format).toLowerCase();
    if (['png', 'svg', 'pdf'].indexOf(format) >= 0) {
      options.type = format;
    }
  }
  if (query.level) {
    var level = String(query.level).toUpperCase();
    if (['M', 'H', 'Q', 'L'].indexOf(level) >= 0) {
      options.level = level;
    }
  }
  if (query.size) {
    var size = Number(query.size);
    if (isFinite(size)) {
      options.size = size;
    }
  }
  if (query.margin) {
    var margin = Number(query.margin);
    if (isFinite(margin)) {
      options.margin = margin;
    }
  }
  var type = query.type || 'qr';
  switch (type.toLowerCase()) {
    default :
      res.qr(query.text || '', options);
      break;
  }
};
