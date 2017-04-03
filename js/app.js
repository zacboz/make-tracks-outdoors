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
          controller: 'hammocksCtrl'
      })
      .state('outpost',{
          url:'/outpost',
          templateUrl: './views/outpost.html',
          controller: 'outpostCtrl'
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
