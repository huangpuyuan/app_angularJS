"use strict";
angular.module('app').controller('positionCtrl', ['$q', '$http', '$state', '$scope', function($q, $http, $state, $scope) {
    $scope.isLogin = false;

    function getPosition() {
        var def = $q.defer();
        $http.get('data/position.json?id=' + $state.params.id).then(function(resp) {
            $scope.position = resp.data;
            def.resolve(resp);
        }, function(err) {
            def.reject(err);
        });
        return def.promise;
    };

    function getCompany(id) {
        $http.get('data/company.json?id=' + id).then(function(resp) {
        	console.log(resp);
            $scope.company = resp.data;
        });
    };
    getPosition().then(function(obj) {
    	console.log(obj);
        getCompany(obj.data.companyId);
    });
}]);
