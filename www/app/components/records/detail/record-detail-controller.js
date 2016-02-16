'use strict';

angular.module('rhmobile')
.controller('RecordDetailController',function($scope, $log, $state,$stateParams, records){
	$scope.$emit('showBackButton', true);
	var promise = records.getRecordById($stateParams.id);
	promise.then(function(record){
		console.log(record)
		$scope.record= record.payload.fields;
	}, function(err){
		$log.error(err);
		
	});

	
});