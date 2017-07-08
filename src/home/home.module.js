var angular = require('angular');

require('./home.styles.sass');
var HomeController = require('./home.controller');

module.exports = angular.module('home', [])
.controller('HomeController', HomeController)
.name
