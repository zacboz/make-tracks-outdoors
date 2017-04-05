'use strict';

angular.module('makeTracks', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url: '/',
        templateUrl: "./views/home.html",
        controller: 'homeCtrl'
    }).state('story', {
        url: '/story',
        templateUrl: './views/story.html'
    }).state('hammocks', {
        url: '/hammocks',
        templateUrl: './views/hammocks.html',
        controller: 'hammockCtrl'
    }).state('outpost', {
        url: '/outpost',
        templateUrl: './views/outpost.html',
        controller: 'outpostCtrl'
    }).state('contact', {
        url: '/contact',
        templateUrl: './views/contact.html'
    }).state('join', {
        url: '/join',
        templateUrl: './views/join.html',
        controller: 'joinCtrl'
    });

    $urlRouterProvider.otherwise('/');
});
'use strict';

angular.module('makeTracks').controller('faqCtrl', function ($scope, outpostSrvc, $stateParams) {

  $scope.faqs = outpostSrvc.getFaqs();
  console.log($scope.faqs);
});
'use strict';

angular.module('makeTracks').controller('hammockCtrl', function ($scope, hammockSrvc, $stateParams) {

  $scope.hammocks = hammockSrvc.getHammocks();
  console.log($scope.hammocks);
}); //end of home controller
'use strict';

angular.module('makeTracks').controller('homeCtrl', function ($scope, hammockSrvc, $stateParams) {

  $scope.bestSellers = hammockSrvc.getBestSellers();
  console.log($scope.bestSellers);
}); //end of home controller
'use strict';

angular.module('makeTracks').directive('customFooter', function () {
  return {
    templateUrl: './views/footer.html'
  };
}); //end of navbar directive
'use strict';

angular.module('makeTracks').directive('navbar', function () {
  return {
    templateUrl: './views/navbar.html'
  };
}); //end of navbar directive
'use strict';

angular.module('makeTracks').service('hammockSrvc', function () {
    var _this = this;

    this.bestSellers = [{
        name: 'The Sunrise',
        color: 'Orange/Grey',
        image: "../img/hammocks/sunrise.jpg",
        desc: 'Coming May 2017',
        id: 1,
        price: 35.97
    }, {
        name: 'The Geyser',
        color: 'Blue/ Light Blue',
        image: "../img/hammocks/bluehammock.jpg",
        desc: 'Coming May 2017',
        id: 2,
        price: 35.97
    }, {
        name: 'The Meadow',
        color: 'Lime Green/ Light Blue/ White',
        image: "../img/hammocks/meadowhammock.jpg",
        desc: 'Coming May 2017',
        id: 5,
        price: 35.97
    }];

    this.hammocks = [{
        name: 'The Sunrise',
        color: 'Orange/Grey',
        image: "../img/hammocks/sunrise.jpg",
        desc: 'Coming May 2017',
        id: 1,
        price: 35.97
    }, {
        name: 'The Geyser',
        color: 'Blue/ Light Blue',
        image: "../img/hammocks/bluehammock.jpg",
        desc: 'Coming May 2017',
        id: 2,
        price: 35.97
    }, {
        name: 'The Woodland',
        color: 'Forrest Green/Grey',
        image: "../img/hammocks/greenhammock.jpg",
        desc: 'Coming May 2017',
        id: 3,
        price: 35.97
    }, {
        name: 'The Summit',
        color: 'Charcoal/Maroon',
        image: "../img/hammocks/summit.jpg",
        desc: 'Coming May 2017',
        id: 4,
        price: 35.97
    }, {
        name: 'The Meadow',
        color: 'Lime Green/ Light Blue/ White',
        image: "../img/hammocks/meadowhammock.jpg",
        desc: 'Coming May 2017',
        id: 5,
        price: 35.97
    }];

    this.getBestSellers = function () {
        var bestSellers = _this.bestSellers;
        return bestSellers;
    };

    this.getHammocks = function () {
        var hammocks = _this.hammocks;
        return hammocks;
    };
}); //end of service
'use strict';

angular.module('makeTracks').service('outpostSrvc', function () {
  var _this = this;

  this.faq = [{
    question: 'Wanting to buy a hammock? Here is how to get started?',
    answer: 'All our hammocks come with a set carabiners and that work with our suspension system. All you need for basic set up is your choice of hammock and your choice of straps.'
  }, {
    question: 'How do I wash my Make Tracks hammock?',
    answer: 'You can machine wash or hand wash your hammock. (NOTE: Do not put the hammock in the dryer! Air dry only!)',
    tip1: 'Machine Wash: First, remove the the carabiners then wash on cool in a front load washer on the delicate cycle seting using a mild detergent. Do not untie any knots!',
    tip2: 'Hand Wash: We recommend using a cloth with soap or mild detergent.'
  }, {
    question: 'How do I care for my Make Tracks hammock?',
    answer: ''
  }, {
    question: 'Does the hammock come with straps?',
    answer: ''
  }, {
    question: 'Will I need straps to use the hammock?',
    answer: ''
  }, {
    question: 'What are the dimensions of your hammocks and straps?',
    answer: 'Double Track hammock: 8 x 4 x 4 inches. Straps: 6 x 5 x 2 inches.'
  }, {
    question: 'How high do I need to hang the hammock?',
    answer: 'We recommend around 2 feet or higher.'
  }, {
    question: 'For set up, what is the best length to have between ends of the hammock?',
    answer: 'The best set up is around 12 feet from end to end.'
  }, {
    question: 'What are the Make Tracks hammocks made of?',
    answer: 'All our hammocks are made of porous, breathable nylon taffeta. This porous quality lends itself to a cool, comfortable experience.'
  }, {
    question: 'Will my dogs or cats nails puncture the hammock?',
    answer: 'It is very likely, we recommend caution.'
  }, {
    question: 'Are your hammocks waterproof?',
    answer: 'Make Tracks hammocks are not waterproof, but are water resistant!'
  }];

  this.getFaqs = function () {
    var faqs = _this.faq;
    return faqs;
  };
}); //end of service;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbnRyb2xsZXJzL2ZhcUN0cmwuanMiLCJjb250cm9sbGVycy9oYW1tb2NrQ3RybC5qcyIsImNvbnRyb2xsZXJzL2hvbWVDdHJsLmpzIiwiZGlyZWN0aXZlcy9mb290ZXIuanMiLCJkaXJlY3RpdmVzL25hdmJhci5qcyIsInNlcnZpY2VzL2hhbW1vY2tTcnZjLmpzIiwic2VydmljZXMvb3V0cG9zdFNydmMuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImNvbmZpZyIsIiRzdGF0ZVByb3ZpZGVyIiwiJHVybFJvdXRlclByb3ZpZGVyIiwic3RhdGUiLCJ1cmwiLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXIiLCJvdGhlcndpc2UiLCIkc2NvcGUiLCJvdXRwb3N0U3J2YyIsIiRzdGF0ZVBhcmFtcyIsImZhcXMiLCJnZXRGYXFzIiwiY29uc29sZSIsImxvZyIsImhhbW1vY2tTcnZjIiwiaGFtbW9ja3MiLCJnZXRIYW1tb2NrcyIsImJlc3RTZWxsZXJzIiwiZ2V0QmVzdFNlbGxlcnMiLCJkaXJlY3RpdmUiLCJzZXJ2aWNlIiwibmFtZSIsImNvbG9yIiwiaW1hZ2UiLCJkZXNjIiwiaWQiLCJwcmljZSIsImZhcSIsInF1ZXN0aW9uIiwiYW5zd2VyIiwidGlwMSIsInRpcDIiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFFBQVFDLE1BQVIsQ0FBZSxZQUFmLEVBQTZCLENBQUMsV0FBRCxDQUE3QixFQUNHQyxNQURILENBQ1UsVUFBU0MsY0FBVCxFQUF5QkMsa0JBQXpCLEVBQTRDOztBQUVsREQsbUJBQ0dFLEtBREgsQ0FDUyxNQURULEVBQ2dCO0FBQ1ZDLGFBQUksR0FETTtBQUVWQyxxQkFBYSxtQkFGSDtBQUdWQyxvQkFBWTtBQUhGLEtBRGhCLEVBTUdILEtBTkgsQ0FNUyxPQU5ULEVBTWlCO0FBQ1hDLGFBQUksUUFETztBQUVYQyxxQkFBYTtBQUZGLEtBTmpCLEVBVUdGLEtBVkgsQ0FVUyxVQVZULEVBVW9CO0FBQ2RDLGFBQUksV0FEVTtB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QUFGUCxHQWpCUSxFQW9CUjtBQUNERCxjQUFVLHlDQURUO0FBRURDLFlBQVE7QUFGUCxHQXBCUSxFQXVCUjtBQUNERCxjQUFVLDBFQURUO0FBRURDLFlBQVE7QUFGUCxHQXZCUSxFQTBCUjtBQUNERCxjQUFVLDRDQURUO0FBRURDLFlBQVE7QUFGUCxHQTFCUSxFQTZCUjtBQUNERCxjQUFVLGtEQURUO0FBRURDLFlBQVE7QUFGUCxHQTdCUSxFQWdDUjtBQUNERCxjQUFVLCtCQURUO0FBRURDLFlBQVE7QUFGUCxHQWhDUSxDQUFYOztBQXFDQSxPQUFLbEIsT0FBTCxHQUFlLFlBQU07QUFDbkIsUUFBSUQsT0FBTyxNQUFLaUIsR0FBaEI7QUFDQSxXQUFPakIsSUFBUDtBQUNELEdBSEQ7QUFLRCxDQTVDRCxHQTRDRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycsIFsndWkucm91dGVyJ10pXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcil7XG5cbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdob21lJyx7XG4gICAgICAgICAgdXJsOicvJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogXCIuL3ZpZXdzL2hvbWUuaHRtbFwiLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdob21lQ3RybCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ3N0b3J5Jyx7XG4gICAgICAgICAgdXJsOicvc3RvcnknLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9zdG9yeS5odG1sJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnaGFtbW9ja3MnLHtcbiAgICAgICAgICB1cmw6Jy9oYW1tb2NrcycsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2hhbW1vY2tzLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdoYW1tb2NrQ3RybCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ291dHBvc3QnLHtcbiAgICAgICAgICB1cmw6Jy9vdXRwb3N0JyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3Mvb3V0cG9zdC5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnb3V0cG9zdEN0cmwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdjb250YWN0Jyx7XG4gICAgICAgICAgdXJsOicvY29udGFjdCcsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2NvbnRhY3QuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2pvaW4nLHtcbiAgICAgICAgICB1cmw6Jy9qb2luJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3Mvam9pbi5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnam9pbkN0cmwnXG4gICAgICB9KTtcblxuICAkdXJsUm91dGVyUHJvdmlkZXJcbiAgICAgIC5vdGhlcndpc2UoJy8nKTtcblxuXG59KTtcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJykuY29udHJvbGxlcignZmFxQ3RybCcsICgkc2NvcGUsIG91dHBvc3RTcnZjLCAkc3RhdGVQYXJhbXMpID0+IHtcblxuICAkc2NvcGUuZmFxcyA9IG91dHBvc3RTcnZjLmdldEZhcXMoKTtcbiAgY29uc29sZS5sb2coJHNjb3BlLmZhcXMpO1xuXG59KVxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5jb250cm9sbGVyKCdoYW1tb2NrQ3RybCcsICgkc2NvcGUsIGhhbW1vY2tTcnZjLCAkc3RhdGVQYXJhbXMpID0+IHtcblxuICAkc2NvcGUuaGFtbW9ja3MgPSBoYW1tb2NrU3J2Yy5nZXRIYW1tb2NrcygpO1xuICBjb25zb2xlLmxvZygkc2NvcGUuaGFtbW9ja3MpO1xuXG59KS8vZW5kIG9mIGhvbWUgY29udHJvbGxlclxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5jb250cm9sbGVyKCdob21lQ3RybCcsICgkc2NvcGUsIGhhbW1vY2tTcnZjLCAkc3RhdGVQYXJhbXMpID0+IHtcblxuICAkc2NvcGUuYmVzdFNlbGxlcnMgPSBoYW1tb2NrU3J2Yy5nZXRCZXN0U2VsbGVycygpO1xuICBjb25zb2xlLmxvZygkc2NvcGUuYmVzdFNlbGxlcnMpO1xuXG59KS8vZW5kIG9mIGhvbWUgY29udHJvbGxlclxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5kaXJlY3RpdmUoJ2N1c3RvbUZvb3RlcicsICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvZm9vdGVyLmh0bWwnXG4gIH07XG59KSAvL2VuZCBvZiBuYXZiYXIgZGlyZWN0aXZlXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpLmRpcmVjdGl2ZSgnbmF2YmFyJywgKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9uYXZiYXIuaHRtbCdcbiAgfTtcbn0pIC8vZW5kIG9mIG5hdmJhciBkaXJlY3RpdmVcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJykuc2VydmljZSgnaGFtbW9ja1NydmMnLCBmdW5jdGlvbigpe1xuXG5cbiAgdGhpcy5iZXN0U2VsbGVycyA9IFt7XG4gICAgICAgIG5hbWU6ICdUaGUgU3VucmlzZScsXG4gICAgICAgIGNvbG9yOiAnT3JhbmdlL0dyZXknLFxuICAgICAgICBpbWFnZTogXCIuLi9pbWcvaGFtbW9ja3Mvc3VucmlzZS5qcGdcIixcbiAgICAgICAgZGVzYzogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGlkOiAxLFxuICAgICAgICBwcmljZTogMzUuOTdcbiAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdUaGUgR2V5c2VyJyxcbiAgICAgICAgY29sb3I6ICdCbHVlLyBMaWdodCBCbHVlJyxcbiAgICAgICAgaW1hZ2U6IFwiLi4vaW1nL2hhbW1vY2tzL2JsdWVoYW1tb2NrLmpwZ1wiLFxuICAgICAgICBkZXNjOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIHByaWNlOiAzNS45N1xuICAgIH0se1xuICAgICAgICBuYW1lOiAnVGhlIE1lYWRvdycsXG4gICAgICAgIGNvbG9yOiAnTGltZSBHcmVlbi8gTGlnaHQgQmx1ZS8gV2hpdGUnLFxuICAgICAgICBpbWFnZTogXCIuLi9pbWcvaGFtbW9ja3MvbWVhZG93aGFtbW9jay5qcGdcIixcbiAgICAgICAgZGVzYzogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGlkOiA1LFxuICAgICAgICBwcmljZTogMzUuOTdcbiAgICB9XVxuXG4gIHRoaXMuaGFtbW9ja3MgPSBbe1xuICAgICAgICBuYW1lOiAnVGhlIFN1bnJpc2UnLFxuICAgICAgICBjb2xvcjogJ09yYW5nZS9HcmV5JyxcbiAgICAgICAgaW1hZ2U6IFwiLi4vaW1nL2hhbW1vY2tzL3N1bnJpc2UuanBnXCIsXG4gICAgICAgIGRlc2M6ICdDb21pbmcgTWF5IDIwMTcnLFxuICAgICAgICBpZDogMSxcbiAgICAgICAgcHJpY2U6IDM1Ljk3XG4gICAgfSwge1xuICAgICAgICBuYW1lOiAnVGhlIEdleXNlcicsXG4gICAgICAgIGNvbG9yOiAnQmx1ZS8gTGlnaHQgQmx1ZScsXG4gICAgICAgIGltYWdlOiBcIi4uL2ltZy9oYW1tb2Nrcy9ibHVlaGFtbW9jay5qcGdcIixcbiAgICAgICAgZGVzYzogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGlkOiAyLFxuICAgICAgICBwcmljZTogMzUuOTdcbiAgICB9LHtcbiAgICAgICAgbmFtZTogJ1RoZSBXb29kbGFuZCcsXG4gICAgICAgIGNvbG9yOiAnRm9ycmVzdCBHcmVlbi9HcmV5JyxcbiAgICAgICAgaW1hZ2U6IFwiLi4vaW1nL2hhbW1vY2tzL2dyZWVuaGFtbW9jay5qcGdcIixcbiAgICAgICAgZGVzYzogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGlkOiAzLFxuICAgICAgICBwcmljZTogMzUuOTdcbiAgICB9LHtcbiAgICAgICAgbmFtZTogJ1RoZSBTdW1taXQnLFxuICAgICAgICBjb2xvcjogJ0NoYXJjb2FsL01hcm9vbicsXG4gICAgICAgIGltYWdlOiBcIi4uL2ltZy9oYW1tb2Nrcy9zdW1taXQuanBnXCIsXG4gICAgICAgIGRlc2M6ICdDb21pbmcgTWF5IDIwMTcnLFxuICAgICAgICBpZDogNCxcbiAgICAgICAgcHJpY2U6IDM1Ljk3XG4gICAgfSx7XG4gICAgICAgIG5hbWU6ICdUaGUgTWVhZG93JyxcbiAgICAgICAgY29sb3I6ICdMaW1lIEdyZWVuLyBMaWdodCBCbHVlLyBXaGl0ZScsXG4gICAgICAgIGltYWdlOiBcIi4uL2ltZy9oYW1tb2Nrcy9tZWFkb3doYW1tb2NrLmpwZ1wiLFxuICAgICAgICBkZXNjOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgaWQ6IDUsXG4gICAgICAgIHByaWNlOiAzNS45N1xuICAgIH1dXG5cbiAgICB0aGlzLmdldEJlc3RTZWxsZXJzID0gKCkgPT4ge1xuICAgICAgbGV0IGJlc3RTZWxsZXJzID0gdGhpcy5iZXN0U2VsbGVycztcbiAgICAgIHJldHVybiBiZXN0U2VsbGVycztcbiAgICB9XG5cbiAgICB0aGlzLmdldEhhbW1vY2tzID0gKCkgPT4ge1xuICAgICAgbGV0IGhhbW1vY2tzID0gdGhpcy5oYW1tb2NrcztcbiAgICAgIHJldHVybiBoYW1tb2NrcztcbiAgICB9XG5cblxuXG5cbn0pLy9lbmQgb2Ygc2VydmljZVxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5zZXJ2aWNlKCdvdXRwb3N0U3J2YycsIGZ1bmN0aW9uKCl7XG5cbiAgdGhpcy5mYXEgPSBbe1xuICAgIHF1ZXN0aW9uOiAnV2FudGluZyB0byBidXkgYSBoYW1tb2NrPyBIZXJlIGlzIGhvdyB0byBnZXQgc3RhcnRlZD8nLFxuICAgIGFuc3dlcjogJ0FsbCBvdXIgaGFtbW9ja3MgY29tZSB3aXRoIGEgc2V0IGNhcmFiaW5lcnMgYW5kIHRoYXQgd29yayB3aXRoIG91ciBzdXNwZW5zaW9uIHN5c3RlbS4gQWxsIHlvdSBuZWVkIGZvciBiYXNpYyBzZXQgdXAgaXMgeW91ciBjaG9pY2Ugb2YgaGFtbW9jayBhbmQgeW91ciBjaG9pY2Ugb2Ygc3RyYXBzLidcbiAgfSwge1xuICAgIHF1ZXN0aW9uOiAnSG93IGRvIEkgd2FzaCBteSBNYWtlIFRyYWNrcyBoYW1tb2NrPycsXG4gICAgYW5zd2VyOiAnWW91IGNhbiBtYWNoaW5lIHdhc2ggb3IgaGFuZCB3YXNoIHlvdXIgaGFtbW9jay4gKE5PVEU6IERvIG5vdCBwdXQgdGhlIGhhbW1vY2sgaW4gdGhlIGRyeWVyISBBaXIgZHJ5IG9ubHkhKScsXG4gICAgdGlwMTogJ01hY2hpbmUgV2FzaDogRmlyc3QsIHJlbW92ZSB0aGUgdGhlIGNhcmFiaW5lcnMgdGhlbiB3YXNoIG9uIGNvb2wgaW4gYSBmcm9udCBsb2FkIHdhc2hlciBvbiB0aGUgZGVsaWNhdGUgY3ljbGUgc2V0aW5nIHVzaW5nIGEgbWlsZCBkZXRlcmdlbnQuIERvIG5vdCB1bnRpZSBhbnkga25vdHMhJyxcbiAgICB0aXAyOiAnSGFuZCBXYXNoOiBXZSByZWNvbW1lbmQgdXNpbmcgYSBjbG90aCB3aXRoIHNvYXAgb3IgbWlsZCBkZXRlcmdlbnQuJ1xuICB9LHtcbiAgICBxdWVzdGlvbjogJ0hvdyBkbyBJIGNhcmUgZm9yIG15IE1ha2UgVHJhY2tzIGhhbW1vY2s/JyxcbiAgICBhbnN3ZXI6ICcnXG4gIH0sIHtcbiAgICBxdWVzdGlvbjogJ0RvZXMgdGhlIGhhbW1vY2sgY29tZSB3aXRoIHN0cmFwcz8nLFxuICAgIGFuc3dlcjogJydcbiAgfSwge1xuICAgIHF1ZXN0aW9uOiAnV2lsbCBJIG5lZWQgc3RyYXBzIHRvIHVzZSB0aGUgaGFtbW9jaz8nLFxuICAgIGFuc3dlcjogJydcbiAgfSwge1xuICAgIHF1ZXN0aW9uOiAnV2hhdCBhcmUgdGhlIGRpbWVuc2lvbnMgb2YgeW91ciBoYW1tb2NrcyBhbmQgc3RyYXBzPycsXG4gICAgYW5zd2VyOiAnRG91YmxlIFRyYWNrIGhhbW1vY2s6IDggeCA0IHggNCBpbmNoZXMuIFN0cmFwczogNiB4IDUgeCAyIGluY2hlcy4nXG4gIH0sIHtcbiAgICBxdWVzdGlvbjogJ0hvdyBoaWdoIGRvIEkgbmVlZCB0byBoYW5nIHRoZSBoYW1tb2NrPycsXG4gICAgYW5zd2VyOiAnV2UgcmVjb21tZW5kIGFyb3VuZCAyIGZlZXQgb3IgaGlnaGVyLidcbiAgfSwge1xuICAgIHF1ZXN0aW9uOiAnRm9yIHNldCB1cCwgd2hhdCBpcyB0aGUgYmVzdCBsZW5ndGggdG8gaGF2ZSBiZXR3ZWVuIGVuZHMgb2YgdGhlIGhhbW1vY2s/JyxcbiAgICBhbnN3ZXI6ICdUaGUgYmVzdCBzZXQgdXAgaXMgYXJvdW5kIDEyIGZlZXQgZnJvbSBlbmQgdG8gZW5kLidcbiAgfSwge1xuICAgIHF1ZXN0aW9uOiAnV2hhdCBhcmUgdGhlIE1ha2UgVHJhY2tzIGhhbW1vY2tzIG1hZGUgb2Y/JyxcbiAgICBhbnN3ZXI6ICdBbGwgb3VyIGhhbW1vY2tzIGFyZSBtYWRlIG9mIHBvcm91cywgYnJlYXRoYWJsZSBueWxvbiB0YWZmZXRhLiBUaGlzIHBvcm91cyBxdWFsaXR5IGxlbmRzIGl0c2VsZiB0byBhIGNvb2wsIGNvbWZvcnRhYmxlIGV4cGVyaWVuY2UuJ1xuICB9LCB7XG4gICAgcXVlc3Rpb246ICdXaWxsIG15IGRvZ3Mgb3IgY2F0cyBuYWlscyBwdW5jdHVyZSB0aGUgaGFtbW9jaz8nLFxuICAgIGFuc3dlcjogJ0l0IGlzIHZlcnkgbGlrZWx5LCB3ZSByZWNvbW1lbmQgY2F1dGlvbi4nXG4gIH0sIHtcbiAgICBxdWVzdGlvbjogJ0FyZSB5b3VyIGhhbW1vY2tzIHdhdGVycHJvb2Y/JyxcbiAgICBhbnN3ZXI6ICdNYWtlIFRyYWNrcyBoYW1tb2NrcyBhcmUgbm90IHdhdGVycHJvb2YsIGJ1dCBhcmUgd2F0ZXIgcmVzaXN0YW50ISdcbiAgfV1cblxuICB0aGlzLmdldEZhcXMgPSAoKSA9PiB7XG4gICAgbGV0IGZhcXMgPSB0aGlzLmZhcTtcbiAgICByZXR1cm4gZmFxcztcbiAgfVxuXG59KS8vZW5kIG9mIHNlcnZpY2U7XG4iXX0=
