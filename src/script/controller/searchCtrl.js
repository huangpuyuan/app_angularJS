"use strict";
angular.module('app').controller('searchCtrl', ['dist','$scope', '$http', function(dist,$scope, $http) {
    $scope.name = '';
    $scope.search = function() {
    	$http.get('data/positionList.json?name=' + $scope.name).then(function(resp) {
        	$scope.positionList = resp.data;
    	});
    };

    $scope.search();
    
    $scope.sheet = {};
    $scope.tabList= [{
    	id:'city',
    	name:'城市'
    },
    {
    	id:'salary',
    	name:'薪水'
    },{
    	id:'scale',
    	name:'公司规模'
    }];
    
    $scope.tClick = function(id,name){
    	$scope.sheet.list=dict[id];
    	$scope.sheet.visible = true;
    };


}]);
