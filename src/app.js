var angular = require('angular');
var ngAria = require('angular-aria');
var ngAnimate = require('angular-animate');
var ngMaterial = require('angular-material');
var ngMessages = require('angular-messages');
var uiRouter = require('angular-ui-router');

require('angular-material/angular-material.min.css');
require('./app.styles.sass');

var Routes = require('./app.config');
var RunFunction = require('./app.run');

var Data = require('./Data/Data.module');
var main = require('./main/main.module');
var home = require('./home/home.module');

angular.module('app', [uiRouter, ngMaterial, ngMessages, ngAnimate, Data, main, home])
.config(Routes)
.run(RunFunction);
