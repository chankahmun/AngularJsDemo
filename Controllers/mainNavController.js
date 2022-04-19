
var app = angular
    .module("App", ['ui.router', 'ngStorage'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/login");
        $stateProvider
            .state('login', {
                url: "/login",
                templateUrl: 'Templates/login.html',
                controller: "loginController",

            })
            

      
    })
    
  
    
    
   