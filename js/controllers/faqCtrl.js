angular.module('makeTracks').controller('faqCtrl', ($scope, outpostSrvc, $stateParams) => {

  $scope.faqs = outpostSrvc.getFaqs();
  console.log($scope.faqs);

  // $('.question').on('click',function(){
  //   $(this).next('.open').slideToggle();
  // });

})//end of controller
