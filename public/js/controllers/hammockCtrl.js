angular.module('makeTracks').controller('hammockCtrl', ($scope, hammockSrvc, $stateParams) => {

  $scope.hammocks = hammockSrvc.getHammocks();
  // console.log($scope.hammocks);

  $("html, body").animate({ scrollTop: 0 }, 200);

})//end of home controller
