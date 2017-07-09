require('angular');
require('angular-aria');
require('angular-animate');
require('angular-material');
require('angular-messages');
require('angular-ui-router');

require('angular-material/angular-material.min.css');
require('./app.styles.sass');

var run = require('./app.run');
var routes = require('./app.config');

var Data = require('./Data/Data.module');
var main = require('./main/main.module');
var home = require('./home/home.module');

angular.module('app', ['ui.router', 'ngMaterial', 'ngMessages', 'ngAnimate', Data, main, home])
.config(routes)
.run(run);
