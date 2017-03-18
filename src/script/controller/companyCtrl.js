"use strict";
angular.module('app').controller('companyCtrl',['$http','$state','$scope',function($http,$state,$scope){
	$http.get('data/company.json?id='+$state.params.id).then(function(resp){
		$scope.company = resp.data;
		$scope.$broadcast('abc',{id:1});
	});

	$scope.$on('cba',function(event,data){
		console.log(event,data);
	})

}]);