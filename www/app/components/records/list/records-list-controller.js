'use strict';

angular.module('rhmobile')
.controller('RecordsListController',function($scope, $log, records, $state, $rootScope){
	$log.info('records list controller');
	$rootScope.showBackButton = false;
	$scope.$emit('showBackButton', false);
	$scope.showRecord = function(id){
		console.log('clicked '+ id);
		$state.go('records.detail',{ id: id});
	}
	
	$scope.getRecords = function(){
		var promise = records.getRecords();
		promise.then(function(records){
			$scope.records = records;
		}, function(err){
			$log.error(err);
			
		});
	}
	$scope.getRecords();

});