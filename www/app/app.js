angular.module('rhmobile',['ngMaterial','rhmobile.router','rhmobile.auth','rhmobile.fhservices','rhmobile.records'])
.run(function($log){
	$log.info('All ready!');
});