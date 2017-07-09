require('angular');

require('./main.styles.sass');
var MainController = require('./main.controller');

var main = angular.module('main', [])
.controller('MainController', MainController)
.name
;

module.exports = main;
