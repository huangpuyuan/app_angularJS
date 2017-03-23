"use strict";
angular.module('app').controller('positionCtrl', ['$log', '$q', '$http', '$state', '$scope', 'cache', function($log, $q, $http, $state, $scope, cache) {

    $scope.isLogin = !!cache.get('name');
    $scope.message = $scope.isLogin ? '投个简历' : '去登入';

    function getPosition() {
        var def = $q.defer();
        $http.get('data/position.json?id=' + $state.params.id).then(function(resp) {
            $scope.position = resp.data;
            if (resp.data.posted) {
                $scope.message = '已投递';
            }

            def.resolve(resp);
        }, function(err) {
            def.reject(err);
        });
        return def.promise;
    };

    function getCompany(id) {
        $http.get('data/company.json?id=' + id).then(function(resp) {
            //console.log(resp);
            $scope.company = resp.data;
        });
    };
    getPosition().then(function(obj) {
        //console.log(obj);
        getCompany(obj.data.companyId);
    });



    $scope.go = function() {

        if ($scope.message !== '已投递') {
            if ($scope.isLogin) {
                $http.post('data/handle.json', {
                    id: $scope.position.id
                }).then(function(resp) {
                    $log.info(resp.data);
                    $scope.message = '已投递';
                })
            } else {
                $state.go('login');
            }
        }
    }
}]);
