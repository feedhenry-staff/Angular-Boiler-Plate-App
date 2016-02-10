'use strict';

angular.module('rhmobile.records', [])
	.factory('records', function(fhservices, $log , $q){
		var service = {};

		var records = [
				{
					id: 1,
					title: 'Record 1',
				 	description: 'Record description'
				},
				{
					id: 2,
					title: 'Record 2',
				 	description: 'Record 2 description'
				},
				{
					id: 3,
					title: 'Record 3',
				 	description: 'Record 3 description'
				},
				{
					id: 4,
					title: 'Record 4',
				 	description: 'Record 4 description'
				},
				{
					id: 5,
					title: 'Record 5',
				 	description: 'Record 5 description'
				},
				{
					id: 6,
					title: 'Record 6',
				 	description: 'Record 6 description'
				},
				{
					id: 7,
					title: 'Record 7',
				 	description: 'Record 7 description'
				},
				{
					id: 8,
					title: 'Record 8',
				 	description: 'Record 8 description'
				},
				{
					id: 9,
					title: 'Record 9',
				 	description: 'Record 9 description'
				}
				,
				{
					id: 10,
					title: 'Record 10',
				 	description: 'Record 10 description'
				}
			]
		service.getRecords = function(username, password){

			return $q(function(resolve, reject){
				resolve(records);
			});
		}

		service.getRecordById = function(id){
			console.log('Looking for record '+ id);
			return $q(function(resolve, reject){
				resolve(_.find(records, function(record){
					console.log(record);
					return record.id == id;
				}));
			})
		}

		return service;
	})