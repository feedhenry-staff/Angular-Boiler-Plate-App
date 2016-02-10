'use strict';

angular.module('rhmobile.router', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider){

	$urlRouterProvider.otherwise('/');
	$stateProvider
	.state('login', {
		url:'/',
		controller:'LoginController',

		templateUrl: './app/components/login/login.html'
	})
	.state('records', {
		url:'/records',
		controller:'RecordsController',

		templateUrl: './app/components/records/records.html'

	})
	.state('records.list', {
		url:'/recordsList',
		controller:'RecordsListController',

		templateUrl: './app/components/records/list/recordsList.html'

	})
	.state('records.detail', {
		url:'/recordDetail',
		params:{id:null},
		controller:'RecordDetailController',

		templateUrl: './app/components/records/detail/recordDetail.html'

	})
	.state('records.create', {
		url:'/recordCreate',
		params:{id:null},
		controller:'RecordCreateController',

		templateUrl: './app/components/records/create/recordCreate.html'

	})

})