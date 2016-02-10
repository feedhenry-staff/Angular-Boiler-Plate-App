'use strict';

angular.module('rhmobile')
.controller('RecordDetailController',function($scope, $log, $state,$stateParams, records){
	$log.info('records detail controller')

	$scope.$emit('showBackButton', true);

	var promise = records.getRecordById($stateParams.id);
	promise.then(function(record){
		console.log(record)
		$scope.record= record;
	}, function(err){
		$log.error(err);
		
	});

	
});