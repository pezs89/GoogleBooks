app.directive('bookCard', [function () {
    return {
        restrict: 'E',
        templateUrl: 'AngularApp/shared/components/card/bookCard.html',
        scope: {
            bookData: '=',
            removeEnabled: '=',
            removeBook: '&'
        },
        link: function (scope) { }
    }
}]);