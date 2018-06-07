var prefix = 'AngularApp/app';

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/', {
			redirectTo: '/home',
		})
		.when('/home' , {
			name: 'home',
			templateUrl: prefix + '/index/templates/home.html',
			controller: 'homeCtrl',
			caseInsensitiveMatch: true,
		})
		.when('/bookDetail/:id', {
			name: 'detail',
			templateUrl: prefix + '/bookDetail/templates/detail.html',
			controller: 'bookDetailCtrl',
			caseInsensitiveMatch: true
		})
		.when('/cart', {
			name: 'cart',
			templateUrl: prefix + '/cart/templates/cart.html',
			controller: 'cartCtrl',
			caseInsensitiveMatch: true
		})
		.otherwise({
			redirectTo: '/error/404',
		});
}]);
