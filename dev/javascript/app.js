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
			var view = element.views;
			$.each(this.views, function(index, element){
				var policy = element;
				$scope.views.push(policy);
				console.log(policy);
			});
		});

	});
});

candidateApp.filter('searchFilter',function($filter) {
	return function(items,searchfilter) {
		var isSearchFilterEmpty = true;
		angular.forEach(searchfilter, function(searchstring) {
			if(searchstring !=null && searchstring !=""){
				isSearchFilterEmpty= false;
			}
		});

		if(!isSearchFilterEmpty){
			var result = [];

			angular.forEach(items, function(item) {
				var isFound = false;
				angular.forEach(item, function(term,key) {
					if(term != null &&  !isFound){
						term = term.toLowerCase();
						angular.forEach(searchfilter, function(searchstring) {
							searchstring = searchstring.toLowerCase();
							if(searchstring !="" && term.indexOf(searchstring) !=-1 && !isFound){
								result.push(item);
								isFound = true;
							}
						});
					}
				});
			});
			return result;
			}else{
				return items;
			}
		}
	});