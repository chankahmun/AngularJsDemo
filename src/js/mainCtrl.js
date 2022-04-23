angular.module("App").controller('mainCtrl', mainfunction)

function mainfunction($http, $sessionStorage, $scope){
    /*

    reason: just allowed cors:'local' due to subscription 
    $http.get($sessionStorage.newsApiUrl + "/v2/everything?domains=wsj.com&apiKey=" + $sessionStorage.newsApiKey)
    .then(function (response) {
        console.log("url:", $sessionStorage.newsApiUrl + "/v2/everything?domains=wsj.com&apiKey=" + $sessionStorage.newsApiKey)
        $scope.wsjNews = response["data"]["articles"];
    })
    */
    $http.get("../../news.json")
    .then(function (response) {
        
        $scope.wsjNews = response["data"]["articles"];
    })
}