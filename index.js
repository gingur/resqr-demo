'use strict';

var connect = require('connect'),
  serveStatic = require('serve-static'),
  http = require('resqr')(require('http'));

var app = connect()
  .use(require('compression')())
  .use(serveStatic('public', {
    index: ['index.html', 'index.htm']
  }))
  .use(require('./lib/parseUrl'))
  .use('/qr', require('./lib/generateQr'))
  .use(require('./lib/errorHandler'));

http.createServer(app).listen(3000);
