'use strict';

/* Controllers */

angular.module('myApp.controllers', ['ui.bootstrap'])
  .controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', ['$scope', '$route', '$location', 'ProgressService', function($scope, $route, $location, ProgressService) {
	$scope.progressId =  $route.current.params.id;
  	$scope.progresstable = ProgressService.get($scope.progressId);
	$scope.r = $location;//$route.current;
  }])
  .controller('MyCtrl3', ['$scope', function($scope) {
     $scope.alerts = [
         { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
         { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
     ];

     $scope.addAlert = function() {
         $scope.alerts.push({msg: "Another alert!"});
     };

     $scope.closeAlert = function(index) {
         $scope.alerts.splice(index, 1);
     };

  }]);
