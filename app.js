var myApp = angular.module('App', ['ui.router', 'ngStorage']);

myApp.config(function($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.otherwise('/daskb');
  $stateProvider.state({
    name: 'login',
    url: '/login',
    templateUrl: 'src/templates/login.html',
    controller: "loginCtrl"
  });

  $stateProvider.state({
    name: 'daskb',
    url: '/daskb',
    templateUrl: 'src/templates/daskboard.html',
    controller: "daskBCtrl"
  });
  
  
})

