'use strict';

angular.module('rhmobile.fhservices',[])
	.factory('fhservices', function($log, $q){
		var service = {};

		service.auth = function(username, password){
			return $q(function(resolve, reject){
				$log.info('Performing $fh.auth call');
				$fh.auth({
				  "policyId": "appUser", // name of Auth policy to use - see Auth Policies Administration for details on how to configure an Auth Policy
				  "clientToken": "wlna5ek3vfpyavgwjagvdn2d", // Your App ID
				  "params": { // the parameters associated with the requested Auth Policy - see below for full details.
				    "userId": username, // LDAP or Platform username
				    "password": password // LDAP or Platform password
				  }
				}, function (res) {
				  // Authentication successful - store sessionToken in variable
				  var sessionToken = res.sessionToken; // The platform session identifier
				  var authResponse = res.authResponse; // The authetication information returned from the authetication service.
				  resolve(res);
				}, function (msg, err) {
				  var errorMsg = err.message;
				  reject(errorMsg);
	
				});


			});


		}

		service.cloud = function(callRequest, options){
			return $q(function(resolve, reject){
				var method = options && options.method? options.method :'GET'
				var data = options && options.data? options.data : ""; 
				$fh.cloud({
				  "path": callRequest, //only the path part of the url, the host will be added automatically
				  "method": method,   //all other HTTP methods are supported as well. e.g. HEAD, DELETE, OPTIONS
				  "contentType": "application/json",
				  "data": data, //data to send to the server
				  "timeout": 25000 // timeout value specified in milliseconds. Default: 60000 (60s)
				}, function(res) {
				  // Cloud call was successful. Resolve the response
				  if (res.success ){
				  	
				  	resolve(res);
				  	
				  } else {
				  	reject('Invalid response from cloud call');
				  }
				  
				}, function(msg,err) {
				  // An error occured during the cloud call. Alert some debugging information
				  reject(msg);
				});

			})


		}

		return service;

	});