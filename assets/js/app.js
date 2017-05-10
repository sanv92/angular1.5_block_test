'use strict';

var services = angular.module('app.services', ['ngResource', 'ngRoute']);
var app = angular.module('app', ['app.services']);

app.config(['$routeProvider', function ($routeProvider) {

   $routeProvider.when('/home', {
        templateUrl: 'assets/view/home-page.html',
        controller: HomeController
    });
	
    $routeProvider.when('/about', {
        templateUrl: 'assets/view/about-page.html',
		controller: AboutController
    });
	
    $routeProvider.when('/portfolio', {
        templateUrl: 'assets/view/portfolio-page.html',
		controller: PortfolioController
    });
	
    $routeProvider.when('/blog', {
        templateUrl: 'assets/view/blog-page.html',
        controller: BlogController
    });

    $routeProvider.when('/', {
        redirectTo: '/home'
    });

    $routeProvider.otherwise({
        redirectTo: '/'
    });

}]);


angular.module('docsTransclusionExample', [])


