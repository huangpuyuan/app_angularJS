'use strict';

angular.module('app').directive('appHead', [function(){
    return {
    	restrict:'A',
    	repalce:true,
    	templateUrl: 'view/template/head.html'

    }
}]);
