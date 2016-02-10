'use strict';

angular.module('rhmobile')
.controller('RecordsController',function($scope, $log, $mdDialog,$mdMedia, $state, $location){

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
    .then(function(answer) {
      $log.info('submit');  
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $log.info('cancel');
      $scope.status = 'You cancelled the dialog.';
    });
  };
});

function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.cancel();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.submit = function(answer) {
    $mdDialog.hide();
  };
}