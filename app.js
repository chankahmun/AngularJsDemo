var myApp = angular.module('App', ['ui.router', 'ngStorage']);

myApp.config(function($stateProvider,$urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/daskboad/main');
  // $stateProvider.state({
  //   name: 'login',
  //   url: '/login',
  //   templateUrl: 'src/templates/login.html',
  //   controller: "loginCtrl"
  // });

  $stateProvider
  .state('daskb',{
     abstract: true,
    url: '/daskboad',
    templateUrl: 'src/templates/daskboard.html',
    controller: "daskBCtrl"
  })
  .state('daskb.mainpage',{
    url:'/main',
    templateUrl:'src/templates/mainpage.html',
    controller: 'mainCtrl'
  })
  .state('daskb.watchlists',{
    url:'/watchlists',
    templateUrl:'src/templates/watchlists.html',
    controller: 'watchlistsCtrl'
  })
  .state('notfound',{
    url:'/notfound',
    templateUrl:'src/templates/watchlists.html',
    controller: 'watchlistsCtrl'
  });
  

  

//  $locationProvider.html5Mode(true);
$locationProvider.html5Mode({
  enabled: true,
  requireBase: true
});

  
})




