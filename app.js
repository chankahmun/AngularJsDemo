var myApp = angular.module('App', ['ui.router', 'ngStorage']);

myApp.config(function($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider.state({
    name: 'login',
    url: '/login',
    templateUrl: 'src/templates/login.html',
    controller: "loginCtrl"
  });

  $stateProvider
  .state('daskb',{
    url: '/',
    templateUrl: 'src/templates/daskboard.html',
    controller: "daskBCtrl"
  })
  .state('daskb.mainpage',{
    url:'/main',
    templateUrl:'src/templates/mainpage.html',
    controller: 'mainCtrl'
  });


  
})

