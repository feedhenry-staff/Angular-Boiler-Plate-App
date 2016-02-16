'use strict';

angular.module('rhmobile')
.controller('RecordsController',function($scope, $log, $mdDialog,$mdMedia, $state, $location){
  var mainToolbar = document.getElementById('mainToolbar');
  console.log(mainToolbar.style.height)
 
  $log.info('RecordsController loaded');
  $scope.$on('showBackButton', function(event, value) { 
  	console.log('showBackButton'+ value); 
  	$scope.showBackButton = value;
  });
  $scope.goBack = function(){
    window.history.back();
  }
  $scope.logout = function(){
    $state.go('login');
  }
  $scope.createNewRecord = function(ev) {
    ev.stopPropagation();
    ev.preventDefault();
    $log.info('createRecord');
    var useFullScreen = true;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: '/app/components/records/dialog1.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: useFullScreen
    })
    .then(function() {
      $log.info('submit');  
      
    }, function() {
      $log.info('cancel');
    });
  };


});

function DialogController($scope, $mdDialog,$log, records) {
  $scope.record = {};

  $scope.hide = function() {
    $mdDialog.cancel();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.submit = function() {
    $scope.error = "";
    $scope.showOverlay = true;
    $log.info($scope.record.title);
    var promise = records.createRecord($scope.record);
    promise.then(function(res){
      $scope.showOverlay = false;
      $mdDialog.hide();
    }, function(err){
      $scope.error = "Error: " + err;
      $scope.showOverlay = false;
    });
    
  };
}