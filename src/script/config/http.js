'use strict';

angular.module('app').config(['$provide', function($provide) {
    $provide.decorator('$http', ['$delegate', '$q', function($delegate, $q) {
        $delegate.post = function(url, data, config) {
            var def = $q.defer();
            $delegate.get(url).then(function(resp) {
                def.resolve(resp);
            }, function(err) {
                def.reject(err);
            });
            return {
                then: function(f1, f2) {
                    def.promise.then(f1, f2);
                }
            }
        }
        return $delegate;
    }]);
}]);
