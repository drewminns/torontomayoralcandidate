'use strict';

var candidateApp = angular.module('candidateApp', ['chieffancypants.loadingBar']);

candidateApp.factory('candidateFactory', function($http) {
	return {
		getCandidatesAsync: function(callback) {
			$http.get('scripts/positions.json').success(callback);
		}
	}
});

candidateApp.controller('candidateCtrl', function($scope, candidateFactory) {
	candidateFactory.getCandidatesAsync(function(results){
		$scope.candidates = results.results;
	});
});