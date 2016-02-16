'use strict';

angular.module('rhmobile.constants', [])
	.factory('constants', function(){
		var service = {}
		/*  Login view  */

		service.APP_VERSION = "0.1.0";
		service.ENV = "dev";
		return service;

});