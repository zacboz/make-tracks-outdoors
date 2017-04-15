angular.module('makeTracks')
.controller('homeCtrl', ($scope, hammockSrvc, $stateParams) => {

  $scope.bestSellers = hammockSrvc.getBestSellers();
  console.log($scope.bestSellers);

  $("html, body").animate({ scrollTop: 0 }, 200);


})//end of home controller
