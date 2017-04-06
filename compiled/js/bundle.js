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
        templateUrl: './views/outpost.html'
    }).state('outpost.faq', {
        url: '/faq',
        templateUrl: './views/faq.html',
        controller: 'faqCtrl'
    }).state('outpost.refunds', {
        url: '/refunds',
        templateUrl: './views/refunds.html'
    }).state('outpost.videos', {
        url: '/videos',
        templateUrl: './views/videos.html'
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
    answer: 'Our goal is to make our hammocks as hassle free as possible. All of our hammocks come with end-straps for extra strength and durability so our customers never have to worry about their knots coming undone. We also provide tree sleeves with pre-tied knots to protect from fray and provide even extra durability. Our customer never have to tie their own knots! Each hammock also comes with a set of aluminum wire-gate carabiners that work with our suspension system. All you need to do now is choose your of hammock.'
  }, {
    question: 'How do I wash my Make Tracks hammock?',
    answer: 'You can machine wash or hand wash your hammock. (NOTE: Do not put the hammock in the dryer! Air dry only!)',
    tip1: 'Machine Wash: First, remove the the carabiners then wash on cool in a front load washer on the delicate cycle seting using a mild detergent. Do not untie any knots!',
    tip2: 'Hand Wash: We recommend using a cloth with soap or mild detergent.'
  }, {
    question: 'How do I care for my Make Tracks hammock?',
    answer: 'Safety: In set up, insure that your straps are securely wrapped and the carabiners are closed. Ease into your hammock slowly to make sure it hangs securely.',
    tip1: 'UV Damage: UV damage can make the hammock fade in color and weaken the fabric which leads to tearing. We recommend when the hammock is not inuse to store it in its sack somewhere dry and cool.'
  }, {
    question: 'Does the hammock come with straps?',
    answer: 'Our hammock package comes with everything you need for a great hammock experience. We use end-straps instead of knoted rope to attach to our carabiners for their reliability and strength. The package also comes with tree-sleeves, which has pre-knoted rope and encased by a nylon material so protect the rope from fraying.'
  }, {
    question: 'Will I need straps to use the hammock?',
    answer: 'No, you not need any extra straps then what the hammock package comes with.'
  }, {
    question: 'What are the dimensions of your hammocks?',
    answer: 'Double Track hammock: 10 x 6.5 feet.'
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbnRyb2xsZXJzL2ZhcUN0cmwuanMiLCJjb250cm9sbGVycy9oYW1tb2NrQ3RybC5qcyIsImNvbnRyb2xsZXJzL2hvbWVDdHJsLmpzIiwiZGlyZWN0aXZlcy9mb290ZXIuanMiLCJkaXJlY3RpdmVzL25hdmJhci5qcyIsInNlcnZpY2VzL2hhbW1vY2tTcnZjLmpzIiwic2VydmljZXMvb3V0cG9zdFNydmMuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImNvbmZpZyIsIiRzdGF0ZVByb3ZpZGVyIiwiJHVybFJvdXRlclByb3ZpZGVyIiwic3RhdGUiLCJ1cmwiLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXIiLCJvdGhlcndpc2UiLCIkc2NvcGUiLCJvdXRwb3N0U3J2YyIsIiRzdGF0ZVBhcmFtcyIsImZhcXMiLCJnZXRGYXFzIiwiY29uc29sZSIsImxvZyIsImhhbW1vY2tTcnZjIiwiaGFtbW9ja3MiLCJnZXRIYW1tb2NrcyIsImJlc3RTZWxsZXJzIiwiZ2V0QmVzdFNlbGxlcnMiLCJkaXJlY3RpdmUiLCJzZXJ2aWNlIiwibmFtZSIsImNvbG9yIiwiaW1hZ2UiLCJkZXNjIiwiaWQiLCJwcmljZSIsImZhcSIsInF1ZXN0aW9uIiwiYW5zd2VyIiwidGlwMSIsInRpcDIiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFFBQVFDLE1BQVIsQ0FBZSxZQUFmLEVBQTZCLENBQUMsV0FBRCxDQUE3QixFQUNHQyxNQURILENBQ1UsVUFBU0MsY0FBVCxFQUF5QkMsa0JBQXpCLEVBQTRDOztBQUVsREQsbUJBQ0dFLEtBREgsQ0FDUyxNQURULEVBQ2dCO0FBQ1ZDLGFBQUksR0FETTtBQUVWQyxxQkFBYSxtQkFGSDtBQUdWQyxvQkFBWTtBQUhGLEtBRGhCLEVBTUdILEtBTkgsQ0FNUyxPQU5ULEVBTWlCO0FBQ1hDLGFBQUksUUFETztBQUVYQyxxQkFBYTtBQUZGLEtBTmpCLEVBVUdGLEtBVkgsQ0FVUyxVQVZULEVBVW9CO0FBQ2RDLGFBQUksV0FEVTtB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QVUsdUNBRFQ7QUFFREMsWUFBUSw0R0FGUDtBQUdEQyxVQUFNLHNLQUhMO0FBSURDLFVBQU07QUFKTCxHQUhRLEVBUVQ7QUFDQUgsY0FBVSwyQ0FEVjtBQUVBQyxZQUFRLDhKQUZSO0FBR0FDLFVBQU07QUFITixHQVJTLEVBWVI7QUFDREYsY0FBVSxvQ0FEVDtBQUVEQyxZQUFRO0FBRlAsR0FaUSxFQWVSO0FBQ0RELGNBQVUsd0NBRFQ7QUFFREMsWUFBUTtBQUZQLEdBZlEsRUFrQlI7QUFDREQsY0FBVSwyQ0FEVDtBQUVEQyxZQUFRO0FBRlAsR0FsQlEsRUFxQlI7QUFDREQsY0FBVSx5Q0FEVDtBQUVEQyxZQUFRO0FBRlAsR0FyQlEsRUF3QlI7QUFDREQsY0FBVSwwRUFEVDtBQUVEQyxZQUFRO0FBRlAsR0F4QlEsRUEyQlI7QUFDREQsY0FBVSw0Q0FEVDtBQUVEQyxZQUFRO0FBRlAsR0EzQlEsRUE4QlI7QUFDREQsY0FBVSxrREFEVDtBQUVEQyxZQUFRO0FBRlAsR0E5QlEsRUFpQ1I7QUFDREQsY0FBVSwrQkFEVDtBQUVEQyxZQUFRO0FBRlAsR0FqQ1EsQ0FBWDs7QUFzQ0EsT0FBS2xCLE9BQUwsR0FBZSxZQUFNO0FBQ25CLFFBQUlELE9BQU8sTUFBS2lCLEdBQWhCO0FBQ0EsV0FBT2pCLElBQVA7QUFDRCxHQUhEO0FBS0QsQ0E3Q0QsR0E2Q0UiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnLCBbJ3VpLnJvdXRlciddKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpe1xuXG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgnaG9tZScse1xuICAgICAgICAgIHVybDonLycsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6IFwiLi92aWV3cy9ob21lLmh0bWxcIixcbiAgICAgICAgICBjb250cm9sbGVyOiAnaG9tZUN0cmwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdzdG9yeScse1xuICAgICAgICAgIHVybDonL3N0b3J5JyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3Mvc3RvcnkuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2hhbW1vY2tzJyx7XG4gICAgICAgICAgdXJsOicvaGFtbW9ja3MnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9oYW1tb2Nrcy5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnaGFtbW9ja0N0cmwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdvdXRwb3N0Jyx7XG4gICAgICAgICAgdXJsOicvb3V0cG9zdCcsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL291dHBvc3QuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ291dHBvc3QuZmFxJyx7XG4gICAgICAgICAgdXJsOicvZmFxJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvZmFxLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdmYXFDdHJsJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnb3V0cG9zdC5yZWZ1bmRzJyx7XG4gICAgICAgICAgdXJsOicvcmVmdW5kcycsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL3JlZnVuZHMuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ291dHBvc3QudmlkZW9zJyx7XG4gICAgICAgICAgdXJsOicvdmlkZW9zJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvdmlkZW9zLmh0bWwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdjb250YWN0Jyx7XG4gICAgICAgICAgdXJsOicvY29udGFjdCcsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2NvbnRhY3QuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2pvaW4nLHtcbiAgICAgICAgICB1cmw6Jy9qb2luJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3Mvam9pbi5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnam9pbkN0cmwnXG4gICAgICB9KTtcblxuICAkdXJsUm91dGVyUHJvdmlkZXJcbiAgICAgIC5vdGhlcndpc2UoJy8nKTtcblxuXG59KTtcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJykuY29udHJvbGxlcignZmFxQ3RybCcsICgkc2NvcGUsIG91dHBvc3RTcnZjLCAkc3RhdGVQYXJhbXMpID0+IHtcblxuICAkc2NvcGUuZmFxcyA9IG91dHBvc3RTcnZjLmdldEZhcXMoKTtcbiAgY29uc29sZS5sb2coJHNjb3BlLmZhcXMpO1xuXG59KVxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5jb250cm9sbGVyKCdoYW1tb2NrQ3RybCcsICgkc2NvcGUsIGhhbW1vY2tTcnZjLCAkc3RhdGVQYXJhbXMpID0+IHtcblxuICAkc2NvcGUuaGFtbW9ja3MgPSBoYW1tb2NrU3J2Yy5nZXRIYW1tb2NrcygpO1xuICBjb25zb2xlLmxvZygkc2NvcGUuaGFtbW9ja3MpO1xuXG59KS8vZW5kIG9mIGhvbWUgY29udHJvbGxlclxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5jb250cm9sbGVyKCdob21lQ3RybCcsICgkc2NvcGUsIGhhbW1vY2tTcnZjLCAkc3RhdGVQYXJhbXMpID0+IHtcblxuICAkc2NvcGUuYmVzdFNlbGxlcnMgPSBoYW1tb2NrU3J2Yy5nZXRCZXN0U2VsbGVycygpO1xuICBjb25zb2xlLmxvZygkc2NvcGUuYmVzdFNlbGxlcnMpO1xuXG59KS8vZW5kIG9mIGhvbWUgY29udHJvbGxlclxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5kaXJlY3RpdmUoJ2N1c3RvbUZvb3RlcicsICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvZm9vdGVyLmh0bWwnXG4gIH07XG59KSAvL2VuZCBvZiBuYXZiYXIgZGlyZWN0aXZlXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpLmRpcmVjdGl2ZSgnbmF2YmFyJywgKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9uYXZiYXIuaHRtbCdcbiAgfTtcbn0pIC8vZW5kIG9mIG5hdmJhciBkaXJlY3RpdmVcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJykuc2VydmljZSgnaGFtbW9ja1NydmMnLCBmdW5jdGlvbigpe1xuXG5cbiAgdGhpcy5iZXN0U2VsbGVycyA9IFt7XG4gICAgICAgIG5hbWU6ICdUaGUgU3VucmlzZScsXG4gICAgICAgIGNvbG9yOiAnT3JhbmdlL0dyZXknLFxuICAgICAgICBpbWFnZTogXCIuLi9pbWcvaGFtbW9ja3Mvc3VucmlzZS5qcGdcIixcbiAgICAgICAgZGVzYzogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGlkOiAxLFxuICAgICAgICBwcmljZTogMzUuOTdcbiAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdUaGUgR2V5c2VyJyxcbiAgICAgICAgY29sb3I6ICdCbHVlLyBMaWdodCBCbHVlJyxcbiAgICAgICAgaW1hZ2U6IFwiLi4vaW1nL2hhbW1vY2tzL2JsdWVoYW1tb2NrLmpwZ1wiLFxuICAgICAgICBkZXNjOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIHByaWNlOiAzNS45N1xuICAgIH0se1xuICAgICAgICBuYW1lOiAnVGhlIE1lYWRvdycsXG4gICAgICAgIGNvbG9yOiAnTGltZSBHcmVlbi8gTGlnaHQgQmx1ZS8gV2hpdGUnLFxuICAgICAgICBpbWFnZTogXCIuLi9pbWcvaGFtbW9ja3MvbWVhZG93aGFtbW9jay5qcGdcIixcbiAgICAgICAgZGVzYzogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGlkOiA1LFxuICAgICAgICBwcmljZTogMzUuOTdcbiAgICB9XVxuXG4gIHRoaXMuaGFtbW9ja3MgPSBbe1xuICAgICAgICBuYW1lOiAnVGhlIFN1bnJpc2UnLFxuICAgICAgICBjb2xvcjogJ09yYW5nZS9HcmV5JyxcbiAgICAgICAgaW1hZ2U6IFwiLi4vaW1nL2hhbW1vY2tzL3N1bnJpc2UuanBnXCIsXG4gICAgICAgIGRlc2M6ICdDb21pbmcgTWF5IDIwMTcnLFxuICAgICAgICBpZDogMSxcbiAgICAgICAgcHJpY2U6IDM1Ljk3XG4gICAgfSwge1xuICAgICAgICBuYW1lOiAnVGhlIEdleXNlcicsXG4gICAgICAgIGNvbG9yOiAnQmx1ZS8gTGlnaHQgQmx1ZScsXG4gICAgICAgIGltYWdlOiBcIi4uL2ltZy9oYW1tb2Nrcy9ibHVlaGFtbW9jay5qcGdcIixcbiAgICAgICAgZGVzYzogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGlkOiAyLFxuICAgICAgICBwcmljZTogMzUuOTdcbiAgICB9LHtcbiAgICAgICAgbmFtZTogJ1RoZSBXb29kbGFuZCcsXG4gICAgICAgIGNvbG9yOiAnRm9ycmVzdCBHcmVlbi9HcmV5JyxcbiAgICAgICAgaW1hZ2U6IFwiLi4vaW1nL2hhbW1vY2tzL2dyZWVuaGFtbW9jay5qcGdcIixcbiAgICAgICAgZGVzYzogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGlkOiAzLFxuICAgICAgICBwcmljZTogMzUuOTdcbiAgICB9LHtcbiAgICAgICAgbmFtZTogJ1RoZSBTdW1taXQnLFxuICAgICAgICBjb2xvcjogJ0NoYXJjb2FsL01hcm9vbicsXG4gICAgICAgIGltYWdlOiBcIi4uL2ltZy9oYW1tb2Nrcy9zdW1taXQuanBnXCIsXG4gICAgICAgIGRlc2M6ICdDb21pbmcgTWF5IDIwMTcnLFxuICAgICAgICBpZDogNCxcbiAgICAgICAgcHJpY2U6IDM1Ljk3XG4gICAgfSx7XG4gICAgICAgIG5hbWU6ICdUaGUgTWVhZG93JyxcbiAgICAgICAgY29sb3I6ICdMaW1lIEdyZWVuLyBMaWdodCBCbHVlLyBXaGl0ZScsXG4gICAgICAgIGltYWdlOiBcIi4uL2ltZy9oYW1tb2Nrcy9tZWFkb3doYW1tb2NrLmpwZ1wiLFxuICAgICAgICBkZXNjOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgaWQ6IDUsXG4gICAgICAgIHByaWNlOiAzNS45N1xuICAgIH1dXG5cbiAgICB0aGlzLmdldEJlc3RTZWxsZXJzID0gKCkgPT4ge1xuICAgICAgbGV0IGJlc3RTZWxsZXJzID0gdGhpcy5iZXN0U2VsbGVycztcbiAgICAgIHJldHVybiBiZXN0U2VsbGVycztcbiAgICB9XG5cbiAgICB0aGlzLmdldEhhbW1vY2tzID0gKCkgPT4ge1xuICAgICAgbGV0IGhhbW1vY2tzID0gdGhpcy5oYW1tb2NrcztcbiAgICAgIHJldHVybiBoYW1tb2NrcztcbiAgICB9XG5cblxuXG5cbn0pLy9lbmQgb2Ygc2VydmljZVxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5zZXJ2aWNlKCdvdXRwb3N0U3J2YycsIGZ1bmN0aW9uKCl7XG5cbiAgdGhpcy5mYXEgPSBbe1xuICAgIHF1ZXN0aW9uOiAnV2FudGluZyB0byBidXkgYSBoYW1tb2NrPyBIZXJlIGlzIGhvdyB0byBnZXQgc3RhcnRlZD8nLFxuICAgIGFuc3dlcjogJ091ciBnb2FsIGlzIHRvIG1ha2Ugb3VyIGhhbW1vY2tzIGFzIGhhc3NsZSBmcmVlIGFzIHBvc3NpYmxlLiBBbGwgb2Ygb3VyIGhhbW1vY2tzIGNvbWUgd2l0aCBlbmQtc3RyYXBzIGZvciBleHRyYSBzdHJlbmd0aCBhbmQgZHVyYWJpbGl0eSBzbyBvdXIgY3VzdG9tZXJzIG5ldmVyIGhhdmUgdG8gd29ycnkgYWJvdXQgdGhlaXIga25vdHMgY29taW5nIHVuZG9uZS4gV2UgYWxzbyBwcm92aWRlIHRyZWUgc2xlZXZlcyB3aXRoIHByZS10aWVkIGtub3RzIHRvIHByb3RlY3QgZnJvbSBmcmF5IGFuZCBwcm92aWRlIGV2ZW4gZXh0cmEgZHVyYWJpbGl0eS4gT3VyIGN1c3RvbWVyIG5ldmVyIGhhdmUgdG8gdGllIHRoZWlyIG93biBrbm90cyEgRWFjaCBoYW1tb2NrIGFsc28gY29tZXMgd2l0aCBhIHNldCBvZiBhbHVtaW51bSB3aXJlLWdhdGUgY2FyYWJpbmVycyB0aGF0IHdvcmsgd2l0aCBvdXIgc3VzcGVuc2lvbiBzeXN0ZW0uIEFsbCB5b3UgbmVlZCB0byBkbyBub3cgaXMgY2hvb3NlIHlvdXIgb2YgaGFtbW9jay4nXG4gIH0sIHtcbiAgICBxdWVzdGlvbjogJ0hvdyBkbyBJIHdhc2ggbXkgTWFrZSBUcmFja3MgaGFtbW9jaz8nLFxuICAgIGFuc3dlcjogJ1lvdSBjYW4gbWFjaGluZSB3YXNoIG9yIGhhbmQgd2FzaCB5b3VyIGhhbW1vY2suIChOT1RFOiBEbyBub3QgcHV0IHRoZSBoYW1tb2NrIGluIHRoZSBkcnllciEgQWlyIGRyeSBvbmx5ISknLFxuICAgIHRpcDE6ICdNYWNoaW5lIFdhc2g6IEZpcnN0LCByZW1vdmUgdGhlIHRoZSBjYXJhYmluZXJzIHRoZW4gd2FzaCBvbiBjb29sIGluIGEgZnJvbnQgbG9hZCB3YXNoZXIgb24gdGhlIGRlbGljYXRlIGN5Y2xlIHNldGluZyB1c2luZyBhIG1pbGQgZGV0ZXJnZW50LiBEbyBub3QgdW50aWUgYW55IGtub3RzIScsXG4gICAgdGlwMjogJ0hhbmQgV2FzaDogV2UgcmVjb21tZW5kIHVzaW5nIGEgY2xvdGggd2l0aCBzb2FwIG9yIG1pbGQgZGV0ZXJnZW50LidcbiAgfSx7XG4gICAgcXVlc3Rpb246ICdIb3cgZG8gSSBjYXJlIGZvciBteSBNYWtlIFRyYWNrcyBoYW1tb2NrPycsXG4gICAgYW5zd2VyOiAnU2FmZXR5OiBJbiBzZXQgdXAsIGluc3VyZSB0aGF0IHlvdXIgc3RyYXBzIGFyZSBzZWN1cmVseSB3cmFwcGVkIGFuZCB0aGUgY2FyYWJpbmVycyBhcmUgY2xvc2VkLiBFYXNlIGludG8geW91ciBoYW1tb2NrIHNsb3dseSB0byBtYWtlIHN1cmUgaXQgaGFuZ3Mgc2VjdXJlbHkuJyxcbiAgICB0aXAxOiAnVVYgRGFtYWdlOiBVViBkYW1hZ2UgY2FuIG1ha2UgdGhlIGhhbW1vY2sgZmFkZSBpbiBjb2xvciBhbmQgd2Vha2VuIHRoZSBmYWJyaWMgd2hpY2ggbGVhZHMgdG8gdGVhcmluZy4gV2UgcmVjb21tZW5kIHdoZW4gdGhlIGhhbW1vY2sgaXMgbm90IGludXNlIHRvIHN0b3JlIGl0IGluIGl0cyBzYWNrIHNvbWV3aGVyZSBkcnkgYW5kIGNvb2wuJ1xuICB9LCB7XG4gICAgcXVlc3Rpb246ICdEb2VzIHRoZSBoYW1tb2NrIGNvbWUgd2l0aCBzdHJhcHM/JyxcbiAgICBhbnN3ZXI6ICdPdXIgaGFtbW9jayBwYWNrYWdlIGNvbWVzIHdpdGggZXZlcnl0aGluZyB5b3UgbmVlZCBmb3IgYSBncmVhdCBoYW1tb2NrIGV4cGVyaWVuY2UuIFdlIHVzZSBlbmQtc3RyYXBzIGluc3RlYWQgb2Yga25vdGVkIHJvcGUgdG8gYXR0YWNoIHRvIG91ciBjYXJhYmluZXJzIGZvciB0aGVpciByZWxpYWJpbGl0eSBhbmQgc3RyZW5ndGguIFRoZSBwYWNrYWdlIGFsc28gY29tZXMgd2l0aCB0cmVlLXNsZWV2ZXMsIHdoaWNoIGhhcyBwcmUta25vdGVkIHJvcGUgYW5kIGVuY2FzZWQgYnkgYSBueWxvbiBtYXRlcmlhbCBzbyBwcm90ZWN0IHRoZSByb3BlIGZyb20gZnJheWluZy4nXG4gIH0sIHtcbiAgICBxdWVzdGlvbjogJ1dpbGwgSSBuZWVkIHN0cmFwcyB0byB1c2UgdGhlIGhhbW1vY2s/JyxcbiAgICBhbnN3ZXI6ICdObywgeW91IG5vdCBuZWVkIGFueSBleHRyYSBzdHJhcHMgdGhlbiB3aGF0IHRoZSBoYW1tb2NrIHBhY2thZ2UgY29tZXMgd2l0aC4nXG4gIH0sIHtcbiAgICBxdWVzdGlvbjogJ1doYXQgYXJlIHRoZSBkaW1lbnNpb25zIG9mIHlvdXIgaGFtbW9ja3M/JyxcbiAgICBhbnN3ZXI6ICdEb3VibGUgVHJhY2sgaGFtbW9jazogMTAgeCA2LjUgZmVldC4nXG4gIH0sIHtcbiAgICBxdWVzdGlvbjogJ0hvdyBoaWdoIGRvIEkgbmVlZCB0byBoYW5nIHRoZSBoYW1tb2NrPycsXG4gICAgYW5zd2VyOiAnV2UgcmVjb21tZW5kIGFyb3VuZCAyIGZlZXQgb3IgaGlnaGVyLidcbiAgfSwge1xuICAgIHF1ZXN0aW9uOiAnRm9yIHNldCB1cCwgd2hhdCBpcyB0aGUgYmVzdCBsZW5ndGggdG8gaGF2ZSBiZXR3ZWVuIGVuZHMgb2YgdGhlIGhhbW1vY2s/JyxcbiAgICBhbnN3ZXI6ICdUaGUgYmVzdCBzZXQgdXAgaXMgYXJvdW5kIDEyIGZlZXQgZnJvbSBlbmQgdG8gZW5kLidcbiAgfSwge1xuICAgIHF1ZXN0aW9uOiAnV2hhdCBhcmUgdGhlIE1ha2UgVHJhY2tzIGhhbW1vY2tzIG1hZGUgb2Y/JyxcbiAgICBhbnN3ZXI6ICdBbGwgb3VyIGhhbW1vY2tzIGFyZSBtYWRlIG9mIHBvcm91cywgYnJlYXRoYWJsZSBueWxvbiB0YWZmZXRhLiBUaGlzIHBvcm91cyBxdWFsaXR5IGxlbmRzIGl0c2VsZiB0byBhIGNvb2wsIGNvbWZvcnRhYmxlIGV4cGVyaWVuY2UuJ1xuICB9LCB7XG4gICAgcXVlc3Rpb246ICdXaWxsIG15IGRvZ3Mgb3IgY2F0cyBuYWlscyBwdW5jdHVyZSB0aGUgaGFtbW9jaz8nLFxuICAgIGFuc3dlcjogJ0l0IGlzIHZlcnkgbGlrZWx5LCB3ZSByZWNvbW1lbmQgY2F1dGlvbi4nXG4gIH0sIHtcbiAgICBxdWVzdGlvbjogJ0FyZSB5b3VyIGhhbW1vY2tzIHdhdGVycHJvb2Y/JyxcbiAgICBhbnN3ZXI6ICdNYWtlIFRyYWNrcyBoYW1tb2NrcyBhcmUgbm90IHdhdGVycHJvb2YsIGJ1dCBhcmUgd2F0ZXIgcmVzaXN0YW50ISdcbiAgfV1cblxuICB0aGlzLmdldEZhcXMgPSAoKSA9PiB7XG4gICAgbGV0IGZhcXMgPSB0aGlzLmZhcTtcbiAgICByZXR1cm4gZmFxcztcbiAgfVxuXG59KS8vZW5kIG9mIHNlcnZpY2U7XG4iXX0=
