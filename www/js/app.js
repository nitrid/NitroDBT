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
    .when("/transfer",
    {
        templateUrl : "../view/transfer.html"
    })
    .when("/transfer_report",
    {
        templateUrl : "../view/transfer_report.html"
    })
});