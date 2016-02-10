'use strict';

angular.module('rhmobile.router', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider){

	$urlRouterProvider.otherwise('/');
	$stateProvider
	.state('login', {
		url:'/',
		controller:'LoginController',
<<<<<<< HEAD
		templateUrl: './app/components/login/login.html'
=======
		templateUrl: '/app/components/login/login.html'
>>>>>>> 2f1b74501c0be1b27695e6f7af2ce37a99ad6eb6
	})
	.state('records', {
		url:'/records',
		controller:'RecordsController',
<<<<<<< HEAD
		templateUrl: './app/components/records/records.html'
=======
		templateUrl: '/app/components/records/records.html'
>>>>>>> 2f1b74501c0be1b27695e6f7af2ce37a99ad6eb6
	})
	.state('records.list', {
		url:'/recordsList',
		controller:'RecordsListController',
<<<<<<< HEAD
		templateUrl: './app/components/records/list/recordsList.html'
=======
		templateUrl: '/app/components/records/list/recordsList.html'
>>>>>>> 2f1b74501c0be1b27695e6f7af2ce37a99ad6eb6
	})
	.state('records.detail', {
		url:'/recordDetail',
		params:{id:null},
		controller:'RecordDetailController',
<<<<<<< HEAD
		templateUrl: './app/components/records/detail/recordDetail.html'
=======
		templateUrl: '/app/components/records/detail/recordDetail.html'
>>>>>>> 2f1b74501c0be1b27695e6f7af2ce37a99ad6eb6
	})
	.state('records.create', {
		url:'/recordCreate',
		params:{id:null},
		controller:'RecordCreateController',
<<<<<<< HEAD
		templateUrl: './app/components/records/create/recordCreate.html'
=======
		templateUrl: '/app/components/records/create/recordCreate.html'
>>>>>>> 2f1b74501c0be1b27695e6f7af2ce37a99ad6eb6
	})

})