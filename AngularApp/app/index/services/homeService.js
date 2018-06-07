app.factory('homeService', ['$http', '$q', function ($http, $q) {
    return {
        getSearchResult: function (searchTerm) {
            var deferred = $q.defer();

            $http.get('https://www.googleapis.com/books/v1/volumes?q=intitle:{0}'.format(searchTerm))
                .success(function (data) {
                    deferred.resolve(data);
                });

            return deferred.promise;
        }
    }
}]);