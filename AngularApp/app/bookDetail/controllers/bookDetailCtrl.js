app.controller('bookDetailCtrl', ['$scope', 'bookDetailService', '$localStorage', '$routeParams', function ($scope, bookDetailService, $localStorage, $routeParams) {
    var id = $routeParams.id;
    $scope.book = {};

    bookDetailService.getBook(id).then(function (data) {
        $scope.book = data;
    });

    $scope.addToCart = function (book) {
        if (!angular.isDefined($localStorage.cartItems)) {
            $localStorage.cartItems = [];
        };

        var isAlreadyAdded = $localStorage.cartItems.filter(function (item) { return book.id === item.id }).length > 0;

        if (!isAlreadyAdded) {
            book.volumeInfo.count = 1;
            $localStorage.cartItems.push(book)
        } else {
            $localStorage.cartItems.map(function (item) {
                if (item.id === book.id) {
                    item.volumeInfo.count++;
                };
            });
        };
    };
}]);