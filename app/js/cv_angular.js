var app = angular.module("CV_angular",[
        "ngRoute",
        "ngAnimate",
        "controllersModule",
        "servicesModule"
]);

app.config(["$routeProvider",function($routeProvider){
    $routeProvider
        .when("/index",{
            controller : "LayoutCtrl",
            templateUrl : "http://localhost:8000/templates/Structure.html",
            animation:"first"
        })
        .when("/motivation",{
            controller : "MotivationCtrl",
            templateUrl : "http://localhost:8000/templates/Motivation.html",
            animation:"second"
        })
        .otherwise({
            redirectTo : "/index"
        })
}]);
