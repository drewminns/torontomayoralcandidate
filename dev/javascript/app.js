'use strict';

var candidateApp = angular.module('candidateApp', ['ngAnimate', 'fx.animations', 'chieffancypants.loadingBar']);

candidateApp.factory('candidateFactory', function($http) {
	return {
		getCandidatesAsync: function(callback) {
			$http.get('scripts/positions.json').success(callback);
		}
	}
});

candidateApp.controller('candidateCtrl', function($scope, candidateFactory) {
	candidateFactory.getCandidatesAsync(function(candidates){
		$scope.candidates = candidates.results;
	});
});
