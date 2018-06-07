app.factory('bookDetailService', ['$http', '$q', function ($http, $q) {
    return {
        getBook: function (id) {
            var deferred = $q.defer();

            $http.get('https://www.googleapis.com/books/v1/volumes/{0}'.format(id))
                .success(function (data) {
                    deferred.resolve(data);
                });

            return deferred.promise;
        }
    }
}]);