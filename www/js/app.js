angular.module("app",
[
    'ngRoute',
    'app.controller',
    'app.srv',
])
.config(function($routeProvider)
{       
    $routeProvider 
    .when("/",
    {
        templateUrl : "../view/homepage.html"
    })
    .when("/producttransfer",
    {
        templateUrl : "../view/producttransfer.html"
    })
});