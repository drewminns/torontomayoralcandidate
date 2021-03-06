'use strict';

var candidateApp = angular.module('candidateApp', ['ngAnimate', 'fx.animations', 'chieffancypants.loadingBar']);

candidateApp.factory('candidateFactory', function( $http) {
	return {
		getCandidatesAsync: function(callback) {
			$http.get('scripts/positions.json').success(callback);
		}
	}
});

candidateApp.directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
      };
    },
    template: "<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-dialog-content' ng-transclude></div><div class='ng-modal-close' ng-click='hideModal()'>Cool? Let's do it.</div></div></div>"
  };
});

candidateApp.controller('candidateCtrl', function ($scope, candidateFactory) {
	candidateFactory.getCandidatesAsync(function (candidates){
		$scope.candidates = candidates.results;
		$scope.modalShown = true;
		  $scope.toggleModal = function() {
		    $scope.modalShown = !$scope.modalShown;
		  };
	});
});
