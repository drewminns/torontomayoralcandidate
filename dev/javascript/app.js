'use strict';

var candidateApp = angular.module('candidateApp', ['masonry']);

candidateApp.controller('candidateCtrl', function($scope, $http) {
	$http.get('scripts/positions.json').success(function(data) {
		$scope.candidates = data;
	});
	$scope.showViews = true;
});