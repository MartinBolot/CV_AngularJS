var services = angular.module("servicesModule",[]);

services.factory("resumeFactory",function($http){

    var query = $http.get("http://localhost:8000/data/data.json");
    query.then(
        function(response){
            return response;
        },
        function(error){
            console.log("error loading data from json file");
        }
    );
    return query;
});
