'use strict';

angular.module('rhmobile')
.controller('LoginController',function($scope, $log, auth, $state, $rootScope, $mdDialog, constants){
	$rootScope.showToolbar = false;
	$scope.versionNumber = constants.APP_VERSION;
	$scope.env = constants.ENV;

	$scope.doLogin = function(){
		$scope.submitted = true;
		$log.info($scope.username);
		if ($scope.username && $scope.password){
			var promise = auth.doLogin($scope.username, $scope.password);
			promise.then(function(response){
				$log.info('Login success')
				$log.info(response)
				localStorage.setItem('userId', $scope.username);
				$state.go('records.list');
			}, function(err){
				$log.info("error logging in " + err);
				$scope.showAlert(err);

			});
		}
		

	}

	$scope.showAlert = function(err) {
	    // Appending dialog to document.body to cover sidenav in docs app
	    // Modal dialogs should fully cover application
	    // to prevent interaction outside of dialog
	    $mdDialog.show(
	      $mdDialog.alert()
	        .parent(angular.element(document.querySelector('#popupContainer')))
	        .clickOutsideToClose(true)
	        .title('Authentication error')
	        .textContent(err)
	        .ariaLabel('Login')
	        .ok('Ok')
	    );
	  };


});