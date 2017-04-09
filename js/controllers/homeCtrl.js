angular.module('makeTracks')
.controller('homeCtrl', ($scope, hammockSrvc, $stateParams) => {

  $scope.bestSellers = hammockSrvc.getBestSellers();
  console.log($scope.bestSellers);

})//end of home controller
