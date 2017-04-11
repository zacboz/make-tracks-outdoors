angular.module('makeTracks')
.controller('hammockDetailsCtrl', ($scope, hammockSrvc, $stateParams) => {

  $scope.hammock = hammockSrvc.getHammockDetails($stateParams);
  console.log($scope.hammock);

  $("#scroll-specs").click(function() {
      $('html, body').animate({
          scrollTop: $("#specs").offset().top
      }, 1000);
  });
  $("#scroll-setup").click(function() {
      $('html, body').animate({
          scrollTop: $("#specs").offset().top
      }, 1000);
  });
  $("#scroll-returns").click(function() {
      $('html, body').animate({
          scrollTop: $("#specs").offset().top
      }, 1000);
  });

})
