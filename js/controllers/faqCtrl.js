angular.module('makeTracks').controller('faqCtrl', ($scope, outpostSrvc, $stateParams) => {

  $scope.faqs = outpostSrvc.getFaqs();
  console.log($scope.faqs);

})
