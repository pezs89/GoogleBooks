var app = angular.module('app', ['ngRoute', 'ngStorage']);

app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
}]);

app.run(['$rootScope', '$location', '$localStorage', '$route', '$q', function ($rootScope, $location, $localStorage, $route, $q) {
	$rootScope.goToCart = function () {
		$location.url('/cart');
	};
}]);
