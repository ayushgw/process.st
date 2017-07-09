require('angular');

require('./home.styles.sass');
var HomeController = require('./home.controller');

var home = angular.module('home', [])
.controller('HomeController', HomeController)
.name
;

module.exports = home;
