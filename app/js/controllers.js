'use strict';

/* Controllers */

angular.module('myApp.controllers', ['ui.bootstrap', 'ngDialog'])
  .controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', ['$scope', '$route', '$location', '$modal', 'ngDialog', 'ProgressService', function($scope, $route, $location, $modal, ngDialog, ProgressService) {
    
	$scope.progressId =  $route.current.params.id;
  	$scope.progresstable = ProgressService.get($scope.progressId);
	$scope.r = $location.search();//$route.current;
	$scope.openDialog = function() {
	    ngDialog.open({
		    template: 'partials/dialog.html',
		    className: 'ngdialog-theme-default'
		});
	};
	$scope.update = function(criteria, i, j){
	    $scope.c = "Running editor... ";
    	var modalInstance = $modal.open({
      		templateUrl: 'partials/editProgressCriteria.html',
      		controller: ModalInstanceCtrl,
      		resolve: {
        		criteria: function () {
					return getRow(i).criterion[j]
        		},
				participant: function(){
				console.log("participant", getRow(i))
					return getRow(i);
				},
				header: function(){
				    return getHeader(j);
				}
      		}
    	});
        modalInstance.result.then(function (criteria) {
	        $scope.c = criteria;
        }, function () {
            $scope.c = 'Modal dismissed at: ' + new Date();
        });
	};
	var getRow = function(i){
		return $scope.progresstable.forms[i];
	};
	var getHeader = function(j){
		return $scope.progresstable.headers[j];
	}
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
  
  var ModalInstanceCtrl = function($scope, $modalInstance, criteria, participant, header){
      $scope.criteria = criteria;
	  $scope.participant = participant;
	  $scope.header = header;

	  console.log("++++ participant", participant);

      $scope.ok = function () {
          $modalInstance.close($scope.criteria);
  	  };

      $scope.cancel = function () {
          $modalInstance.dismiss('cancel');
      };
  };
