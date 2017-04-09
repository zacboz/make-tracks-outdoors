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
          templateUrl: './views/story.html'
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
      .state('outpost',{
          url:'/outpost',
          templateUrl: './views/outpost.html'
      })
      .state('outpost.faq',{
          url:'/faq',
          templateUrl: './views/faq.html',
          controller: 'faqCtrl'
      })
      .state('outpost.refunds',{
          url:'/refunds',
          templateUrl: './views/refunds.html'
      })
      .state('outpost.videos',{
          url:'/videos',
          templateUrl: './views/videos.html'
      })
      .state('contact',{
          url:'/contact',
          templateUrl: './views/contact.html'
      })
      .state('join',{
          url:'/join',
          templateUrl: './views/join.html',
          controller: 'joinCtrl'
      });

  $urlRouterProvider
      .otherwise('/');


});
