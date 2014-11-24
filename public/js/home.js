'use strict';

var $ = this.$;

$(function () {
  var $demo = $('#demo'),
    $img = $('#qrImage');
  $demo.submit(function (event) {
    var values = {};
    $.each($demo.serializeArray(), function (i, field) {
      values[field.name] = field.value;
    });
    $img.attr('src', '/qr?' + $.param(values));
    event.preventDefault();
  });
  $demo.submit();
});
