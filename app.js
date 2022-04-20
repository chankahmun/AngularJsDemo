var myApp = angular.module('helloworld', ['ui.router']);

myApp.config(function($stateProvider,$urlRouterProvider) {

  $stateProvider.state({
    name: 'hello',
    url: '/hello',
    templateUrl: 'src/templates/login.html',
    controller: "loginCtrl"
  });

  $stateProvider.state({
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  });

  
})
.controller("appCtrl", function($scope, $state){
    $scope.submit = function(){
        $state.go("hello"); 
    }
})
