app.controller('cartCtrl', ['$scope', '$localStorage', function ($scope, $localStorage) {
    $scope.orderedBookList = [];
    $scope.orderPlaced = false;

    var init = function () {
        if (angular.isDefined($localStorage.cartItems) && $localStorage.cartItems.length > 0) {
            $scope.orderedBookList = $localStorage.cartItems;
        };
    };

    $scope.orderBooks = function () {
        if ($scope.orderedBookList.length > 0) {
            $localStorage.cartItems = [];
            $scope.orderPlaced = true;
        };
    };

    $scope.removeBook = function (bookId) {
        $scope.orderedBookList = $scope.orderedBookList.filter(function (book) { return book.id !== bookId; });
        $localStorage.cartItems = $scope.orderedBookList;
    };

    init();
}]);