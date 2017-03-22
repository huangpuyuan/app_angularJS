"use strict";

angular.module('app').controller('registerCtrl', ['$interval', '$http', '$scope','$state', function($interval, $http, $scope,$state) {
    $scope.submit = function() {
        $http.post('data/regist.json',$scope.user).then(function(resp){
        	//console.log(resp.data);
        	$state.go('login');
        });
    };
    var count = 60;
    $scope.send = function() {
        $http.get('data/code.json').then(function(resp) {
            if (resp.data.state === 1) {
                count = 60;
                $scope.time = '60s';
                var interval = $interval(function() {
                    if (count <= 0) {
                        $interval.cancel(interval);
                        $scope.time = '';
                        return;
                    } else {
                        count--;
                        $scope.time = count + 's';
                    }
                }, 1000)
            }
        });
    };

}]);
