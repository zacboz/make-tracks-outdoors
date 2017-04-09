angular.module('makeTracks')
.controller('hammockDetailsCtrl', ($scope, hammockSrvc, $stateParams) => {

  $scope.hammock = hammockSrvc.getHammockDetails($stateParams);


})
