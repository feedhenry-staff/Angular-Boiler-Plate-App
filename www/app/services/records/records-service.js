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

		service.createRecord = function(record){
			$log.info('Creating record');
			$log.info(record);


			return $q(function(resolve, reject) {
				if (!record || !record.title || !record.description){
					return reject('Missing field, populate all fields');
				}
				var options = {
					method: 'POST',
					data: record
				}
				fhservices.cloud('records', options)
				.then(service.getRecords())
				.then(
					function(){
			  			resolve();
			  		},  
			  		function(err){
			  			reject(err);
			  		}
			  	);
			});
		}

		return service;
	})