'use strict';

angular.module('rhmobile.records', [])
	.factory('records', function(fhservices, $log , $q){
		var service = {};


		service.getRecords = function(username, password){
			return fhservices.cloud('records');
		}

		service.getRecordById = function(id){
			return fhservices.cloud('records/'+ id);
		}

		return service;
	})