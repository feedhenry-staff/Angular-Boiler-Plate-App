'use strict';

angular.module('rhmobile.auth', [])
	.factory('auth', function(fhservices, $log){
		var service = {};
		service.doLogin = function(username, password){
			return fhservices.auth(username, password);
		}
		return service;
	})