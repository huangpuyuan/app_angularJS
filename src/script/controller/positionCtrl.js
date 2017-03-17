"use strict";
angular.module('app').controller('positionCtrl',['$http','$state','$scope',function($http,$state,$scope){
	$http.get('/data/position?id='+$state.params.id).then(function(resp){
		console.log(resp);
	});
}]);