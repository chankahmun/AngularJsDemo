

angular.module("App").controller('daskBCtrl', daskBoardFunction)

function daskBoardFunction($http, $sessionStorage, $scope) {
    
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

        getGainer($http, $sessionStorage, $scope);
        getLoser($http, $sessionStorage, $scope);
        getTradedLst($http, $sessionStorage, $scope);
        
    }

   

    var promise = $http.get("../../api.json");
    promise.then(onCallNewsApi);
 
}

function getTradedLst($http, $sessionStorage, $scope){
    $http.get($sessionStorage.financialApiUrl + "/api/v3/available-traded/list?apikey=" + $sessionStorage.financialApiKey)
    .then(function (response) {
       
        $scope.tradelist = response['data'];
        
    });
}

function getLoser($http, $sessionStorage, $scope) {
    $http.get($sessionStorage.financialApiUrl + "/api/v3/losers?apikey=" + $sessionStorage.financialApiKey)
        .then(function (response) {

            $scope.toplosers = response['data'];

        });
}

function getGainer($http, $sessionStorage, $scope) {
    $http.get($sessionStorage.financialApiUrl + "/api/v3/gainers?apikey=" + $sessionStorage.financialApiKey)
        .then(function (response) {

            $scope.topgainers = response['data'];

        });
}





