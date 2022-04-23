

angular.module("App").controller('daskBCtrl', daskBoardFunction)

function daskBoardFunction($http, $sessionStorage, $scope) {
    /*
    var onCallSetting = function (){
        $http.get("../../api.json").then(function(response){
            $sessionStorage.financialApiUrl = response.data.api;
            $sessionStorage.financialApiKey = response.data.key;
            
        }).then(function(){
            calling($sessionStorage, $http)
        })
    }
    */
    var onCallNewsApi = function (data, status, headers, config){

        $sessionStorage.financialApiUrl = data.data.data.api;
        $sessionStorage.financialApiKey = data.data.data.key;
        
        $http.get($sessionStorage.financialApiUrl + "/api/v3/available-traded/list?apikey=" + $sessionStorage.financialApiKey)
        .then(function (response) {
            console.log("url:", $sessionStorage.financialApiUrl + "/api/v3/available-traded/list?apikey=" + $sessionStorage.financialApiKey)
            $scope.tradelist = response['data'];
            console.log("pasdsaage loaaa")
        });
        
    }

    var promise = $http.get("../../api.json");
    promise.then(onCallNewsApi);

    
   
}





