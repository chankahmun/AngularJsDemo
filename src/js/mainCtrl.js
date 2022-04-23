angular.module("App").controller('mainCtrl', mainfunction)

function mainfunction($http, $sessionStorage, $scope){
    $http.get($sessionStorage.newsApiUrl + "/v2/everything?domains=wsj.com&apiKey=" + $sessionStorage.newsApiKey)
    .then(function (response) {
        console.log("url:", $sessionStorage.newsApiUrl + "/v2/everything?domains=wsj.com&apiKey=" + $sessionStorage.newsApiKey)
        $scope.wsjNews = response["data"]["articles"];
    })

}