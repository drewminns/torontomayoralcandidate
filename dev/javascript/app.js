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

	candidateFactory.getCandidatesAsync(function(candidates){
		$scope.candidates = candidates.results;
		$scope.views = [];

		$.each(candidates.results, function(index, element){
			var view = element;
			$.each(this.views, function(index, element){
				var policy = element.name;
				console.log(policy);
			});
		});

	});
});

// $scope.views.push(policy);
// 				console.log(policy);