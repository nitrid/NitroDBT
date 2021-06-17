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
    .when("/special_transfer",
    {
        templateUrl : "../view/special_transfer.html"
    })
    .when("/standart_transfer",
    {
        templateUrl : "../view/standart_transfer.html"
    })
    .when("/transfer_report",
    {
        templateUrl : "../view/transfer_report.html"
    })
});