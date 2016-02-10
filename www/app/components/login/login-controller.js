'use strict';

angular.module('rhmobile')
.controller('LoginController',function($scope, $log, auth, $state, $rootScope){
	$rootScope.showToolbar = false;
	$scope.doLogin = function(){
		$log.info($scope.username);
		var promise = auth.doLogin($scope.username, $scope.password);
		promise.then(function(response){
			$log.info('Login success')
			$log.info(response)
			localStorage.setItem('userId', $scope.username);
			$state.go('records.list');
		}, function(err){
			$log.info("error logging in " + err);

		})
	}


});