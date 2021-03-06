angular.module('makeTracks', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('home',{
          url:'/',
          templateUrl: "./views/home.html",
          controller: 'homeCtrl'
      })
      .state('story',{
          url:'/story',
          templateUrl: './views/story.html',
          controller: 'storyCtrl'
      })
      .state('hammocks',{
          url:'/hammocks',
          templateUrl: './views/hammocks.html',
          controller: 'hammockCtrl'
      })
      .state('hammockDetails',{
          url:'/hammockDetails/:id',
          templateUrl: './views/hammock-details.html',
          controller: 'hammockDetailsCtrl'
      })
      .state('hammockDetails.specs',{
          url:'/hammockSpecs/:id',
          templateUrl: './views/hammockSpecs.html'
      })
      .state('hammockDetails.setup',{
          url:'/hammockSetup',
          templateUrl: './views/hammockSetup.html'
      })
      .state('hammockDetails.returns',{
          url:'/hammockReturns',
          templateUrl: './views/hammockReturns.html'
      })
      .state('outpost',{
          url:'/outpost',
          templateUrl: './views/outpost.html',
          controller: 'outpostCtrl'
      })
      .state('outpost.faq',{
          url:'/faq',
          templateUrl: './views/faq.html'
      })
      .state('outpost.refunds',{
          url:'/refunds',
          templateUrl: './views/refunds.html'
      })
      .state('outpost.videos',{
          url:'/videos',
          templateUrl: './views/videos.html'
      })
      .state('comingsoon',{
          url:'/comingsoon',
          templateUrl: './views/comingsoon.html'
      })
      .state('contact',{
          url:'/contact',
          templateUrl: './views/contact.html',
          controller: 'contactCtrl'
      });

    $urlRouterProvider
        .otherwise('/');
})
//if you want every view to load at top use the code below ... this project has nested views so I don't!

// .run(function ($rootScope, $state, $stateParams, $anchorScroll) {
//
//     $rootScope.$on('$stateChangeStart', function () {
//         $anchorScroll();
//     });
//
// });
