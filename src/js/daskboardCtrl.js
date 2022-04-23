

angular.module("App").controller('daskBCtrl', daskBoardFunction)

function daskBoardFunction($http, $sessionStorage, $scope, $state) {
    
    $scope.limitDisplay = 5;
    $scope.decimalPlaces = 2;
    $scope.priceStyle = function (price) {

        var style;

        if (price > 0) {
            style = { "color": "green" }
        } else {
            style = { "color": "red" }
        }

        return style
    }

    var onCallNewsApi = function (data, status, headers, config){

        $sessionStorage.financialApiUrl = data.data.data.api;
        $sessionStorage.financialApiKey = data.data.data.key;
        $sessionStorage.newsApiUrl = data.data.news.api;
        $sessionStorage.newsApiKey = data.data.news.key;


        getGainer($http, $sessionStorage, $scope);
        getLoser($http, $sessionStorage, $scope);
        getTradedLst($http, $sessionStorage, $scope);
        $state.go('daskb.mainpage');
    }

   

    var promise = $http.get("../../api.json");
    promise.then(onCallNewsApi);
 
}

function getTradedLst($http, $sessionStorage, $scope){

    setTimeout(()=>{
        $http.get($sessionStorage.financialApiUrl + "/api/v3/available-traded/list?apikey=" + $sessionStorage.financialApiKey)
        .then(function (response) {
           
            $scope.tradelist = response['data'];
            
        });
    }, 2000)
    
}

function getLoser($http, $sessionStorage, $scope) {
    setTimeout(() => {
        $http.get($sessionStorage.financialApiUrl + "/api/v3/losers?apikey=" + $sessionStorage.financialApiKey)
        .then(function (response) {

            $scope.toplosers = response['data'];

        });
    }, 4000);
    
}

function getGainer($http, $sessionStorage, $scope) {
    setTimeout(()=>{
        $http.get($sessionStorage.financialApiUrl + "/api/v3/gainers?apikey=" + $sessionStorage.financialApiKey)
        .then(function (response) {

            $scope.topgainers = response['data'];

        });
    }, 6000)
   
}





