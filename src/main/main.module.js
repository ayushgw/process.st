var angular = require('angular');

require('./main.styles.sass');
var MainController = require('./main.controller');

module.exports = angular.module('main', [])
.controller('MainController', MainController)
.name
