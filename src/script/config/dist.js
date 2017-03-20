'use strict';

angular.module('app').value('dist',{}).run(['$http',function($http){
	$http.get('data/city.json',function(resp){
		dict.city=resp.data;
	});
	$http.get('data/salary.json',function(resp){
		dict.salary=resp.data;
	});
	$http.get('data/scale.json',function(resp){
		dict.scale=resp.data;
	})			
}]);