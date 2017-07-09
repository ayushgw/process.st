function Routes($urlRouterProvider, $stateProvider, $locationProvider, $mdThemingProvider, $mdAriaProvider) {
   "ngInject";

   // enable html5Mode for pushstate ('#'-less URLs)
   $locationProvider.html5Mode(true);
   $locationProvider.hashPrefix('!');

   // Default Route
   $urlRouterProvider.otherwise('/');

   // Defining Routes
   $stateProvider
   .state('main', {
      url: '/',
      template: require('./main/main.template.html'),
      controller: 'MainController',
      controllerAs: 'main'
   })
   .state('home', {
      url: '/dashboard',
      template: require('./home/home.template.html'),
      controller: 'HomeController',
      controllerAs: 'home'
   })
   ;


   $mdAriaProvider.disableWarnings();
}

module.exports = Routes;
