angular.module('makeTracks').controller('hammockCtrl', ($scope, hammockSrvc, $stateParams) => {

  $scope.hammocks = hammockSrvc.getHammocks();
  console.log($scope.hammocks);

})//end of home controller
