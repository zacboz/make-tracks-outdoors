angular.module('makeTracks').controller('homeCtrl', ($scope, mainSrvc, $stateParams) => {

  $scope.bestSellers = mainSrvc.getBestSellers();
  console.log($scope.bestSellers);

})//end of home controller
