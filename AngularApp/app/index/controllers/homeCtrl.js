app.controller('homeCtrl', ['$scope', '$location', '$routeParams', 'homeService', function ($scope, $location, $routeParams, homeService) {
    $scope.bookList = [];

    $scope.navigateTo = function (id) {
        $location.url('bookDetail/{0}'.format(id));
    };

    var init = function () {
        if ($routeParams.searchTerm) {
            $scope.searchItem($routeParams.searchTerm);
        };
    };

    $scope.searchItem = function (searchTerm) {
        homeService.getSearchResult(searchTerm).then(function (data) {
            $scope.bookList = data.items;
            $location.url('home?searchTerm={0}'.format(searchTerm))
            $scope.searchTerm = $routeParams.searchTerm;
        });
    };

    init();
}]);