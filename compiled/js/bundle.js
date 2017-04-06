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
        // abstract: true,
        // parent: 'outpost',
        url: '/refunds',
        templateUrl: './views/refunds.html'
    }).state('outpost.videos', {
        // parent: 'outpost',
        url: '/videos',
        templateUrl: './views/outpost.videos.html'
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbnRyb2xsZXJzL2ZhcUN0cmwuanMiLCJjb250cm9sbGVycy9oYW1tb2NrQ3RybC5qcyIsImNvbnRyb2xsZXJzL2hvbWVDdHJsLmpzIiwic2VydmljZXMvaGFtbW9ja1NydmMuanMiLCJzZXJ2aWNlcy9vdXRwb3N0U3J2Yy5qcyIsImRpcmVjdGl2ZXMvZm9vdGVyLmpzIiwiZGlyZWN0aXZlcy9uYXZiYXIuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImNvbmZpZyIsIiRzdGF0ZVByb3ZpZGVyIiwiJHVybFJvdXRlclByb3ZpZGVyIiwic3RhdGUiLCJ1cmwiLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXIiLCJvdGhlcndpc2UiLCIkc2NvcGUiLCJvdXRwb3N0U3J2YyIsIiRzdGF0ZVBhcmFtcyIsImZhcXMiLCJnZXRGYXFzIiwiY29uc29sZSIsImxvZyIsImhhbW1vY2tTcnZjIiwiaGFtbW9ja3MiLCJnZXRIYW1tb2NrcyIsImJlc3RTZWxsZXJzIiwiZ2V0QmVzdFNlbGxlcnMiLCJzZXJ2aWNlIiwibmFtZSIsImNvbG9yIiwiaW1hZ2UiLCJkZXNjIiwiaWQiLCJwcmljZSIsImZhcSIsInF1ZXN0aW9uIiwiYW5zd2VyIiwidGlwMSIsInRpcDIiLCJkaXJlY3RpdmUiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFFBQVFDLE1BQVIsQ0FBZSxZQUFmLEVBQTZCLENBQUMsV0FBRCxDQUE3QixFQUNHQyxNQURILENBQ1UsVUFBU0MsY0FBVCxFQUF5QkMsa0JBQXpCLEVBQTRDOztBQUVsREQsbUJBQ0dFLEtBREgsQ0FDUyxNQURULEVBQ2dCO0FBQ1ZDLGFBQUksR0FETTtBQUVWQyxxQkFBYSxtQkFGSDtBQUdWQyxvQkFBWTtBQUhGLEtBRGhCLEVBTUdILEtBTkgsQ0FNUyxPQU5ULEVBTWlCO0FBQ1hDLGFBQUksUUFETztBQUVYQyxxQkFBYTtBQUZGLEtBTmpCLEVBVUdGLEtBVkgsQ0FVUyxVQVZULEVBVW9CO0FBQ2RDLGFBQUksV0FEVTtB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QlI7QUFDREQsY0FBVSwyQ0FEVDtBQUVEQyxZQUFRO0FBRlAsR0FsQlEsRUFxQlI7QUFDREQsY0FBVSx5Q0FEVDtBQUVEQyxZQUFRO0FBRlAsR0FyQlEsRUF3QlI7QUFDREQsY0FBVSwwRUFEVDtBQUVEQyxZQUFRO0FBRlAsR0F4QlEsRUEyQlI7QUFDREQsY0FBVSw0Q0FEVDtBQUVEQyxZQUFRO0FBRlAsR0EzQlEsRUE4QlI7QUFDREQsY0FBVSxrREFEVDtBQUVEQyxZQUFRO0FBRlAsR0E5QlEsRUFpQ1I7QUFDREQsY0FBVSwrQkFEVDtBQUVEQyxZQUFRO0FBRlAsR0FqQ1EsQ0FBWDs7QUFzQ0EsT0FBS2pCLE9BQUwsR0FBZSxZQUFNO0FBQ25CLFFBQUlELE9BQU8sTUFBS2dCLEdBQWhCO0FBQ0EsV0FBT2hCLElBQVA7QUFDRCxHQUhEO0FBS0QsQ0E3Q0QsR0E2Q0U7OztBQzdDRmIsUUFBUUMsTUFBUixDQUFlLFlBQWYsRUFBNkJpQyxTQUE3QixDQUF1QyxjQUF2QyxFQUF1RCxZQUFNO0FBQzNELFNBQU87QUFDTDNCLGlCQUFhO0FBRFIsR0FBUDtBQUdELENBSkQsR0FJRzs7O0FDSkhQLFFBQVFDLE1BQVIsQ0FBZSxZQUFmLEVBQTZCaUMsU0FBN0IsQ0FBdUMsUUFBdkMsRUFBaUQsWUFBTTtBQUNyRCxTQUFPO0FBQ0wzQixpQkFBYTtBQURSLEdBQVA7QUFHRCxDQUpELEdBSUciLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnLCBbJ3VpLnJvdXRlciddKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpe1xuXG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgnaG9tZScse1xuICAgICAgICAgIHVybDonLycsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6IFwiLi92aWV3cy9ob21lLmh0bWxcIixcbiAgICAgICAgICBjb250cm9sbGVyOiAnaG9tZUN0cmwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdzdG9yeScse1xuICAgICAgICAgIHVybDonL3N0b3J5JyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3Mvc3RvcnkuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2hhbW1vY2tzJyx7XG4gICAgICAgICAgdXJsOicvaGFtbW9ja3MnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9oYW1tb2Nrcy5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnaGFtbW9ja0N0cmwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdvdXRwb3N0Jyx7XG4gICAgICAgICAgdXJsOicvb3V0cG9zdCcsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL291dHBvc3QuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ291dHBvc3QuZmFxJyx7XG4gICAgICAgICAgdXJsOicvZmFxJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvZmFxLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdmYXFDdHJsJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnb3V0cG9zdC5yZWZ1bmRzJyx7XG4gICAgICAgICAgLy8gYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgLy8gcGFyZW50OiAnb3V0cG9zdCcsXG4gICAgICAgICAgdXJsOicvcmVmdW5kcycsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL3JlZnVuZHMuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ291dHBvc3QudmlkZW9zJyx7XG4gICAgICAgICAgLy8gcGFyZW50OiAnb3V0cG9zdCcsXG4gICAgICAgICAgdXJsOicvdmlkZW9zJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3Mvb3V0cG9zdC52aWRlb3MuaHRtbCcsXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdjb250YWN0Jyx7XG4gICAgICAgICAgdXJsOicvY29udGFjdCcsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2NvbnRhY3QuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2pvaW4nLHtcbiAgICAgICAgICB1cmw6Jy9qb2luJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3Mvam9pbi5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnam9pbkN0cmwnXG4gICAgICB9KTtcblxuICAkdXJsUm91dGVyUHJvdmlkZXJcbiAgICAgIC5vdGhlcndpc2UoJy8nKTtcblxuXG59KTtcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJykuY29udHJvbGxlcignZmFxQ3RybCcsICgkc2NvcGUsIG91dHBvc3RTcnZjLCAkc3RhdGVQYXJhbXMpID0+IHtcblxuICAkc2NvcGUuZmFxcyA9IG91dHBvc3RTcnZjLmdldEZhcXMoKTtcbiAgY29uc29sZS5sb2coJHNjb3BlLmZhcXMpO1xuXG59KVxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5jb250cm9sbGVyKCdoYW1tb2NrQ3RybCcsICgkc2NvcGUsIGhhbW1vY2tTcnZjLCAkc3RhdGVQYXJhbXMpID0+IHtcblxuICAkc2NvcGUuaGFtbW9ja3MgPSBoYW1tb2NrU3J2Yy5nZXRIYW1tb2NrcygpO1xuICBjb25zb2xlLmxvZygkc2NvcGUuaGFtbW9ja3MpO1xuXG59KS8vZW5kIG9mIGhvbWUgY29udHJvbGxlclxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5jb250cm9sbGVyKCdob21lQ3RybCcsICgkc2NvcGUsIGhhbW1vY2tTcnZjLCAkc3RhdGVQYXJhbXMpID0+IHtcblxuICAkc2NvcGUuYmVzdFNlbGxlcnMgPSBoYW1tb2NrU3J2Yy5nZXRCZXN0U2VsbGVycygpO1xuICBjb25zb2xlLmxvZygkc2NvcGUuYmVzdFNlbGxlcnMpO1xuXG59KS8vZW5kIG9mIGhvbWUgY29udHJvbGxlclxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5zZXJ2aWNlKCdoYW1tb2NrU3J2YycsIGZ1bmN0aW9uKCl7XG5cblxuICB0aGlzLmJlc3RTZWxsZXJzID0gW3tcbiAgICAgICAgbmFtZTogJ1RoZSBTdW5yaXNlJyxcbiAgICAgICAgY29sb3I6ICdPcmFuZ2UvR3JleScsXG4gICAgICAgIGltYWdlOiBcIi4uL2ltZy9oYW1tb2Nrcy9zdW5yaXNlLmpwZ1wiLFxuICAgICAgICBkZXNjOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIHByaWNlOiAzNS45N1xuICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ1RoZSBHZXlzZXInLFxuICAgICAgICBjb2xvcjogJ0JsdWUvIExpZ2h0IEJsdWUnLFxuICAgICAgICBpbWFnZTogXCIuLi9pbWcvaGFtbW9ja3MvYmx1ZWhhbW1vY2suanBnXCIsXG4gICAgICAgIGRlc2M6ICdDb21pbmcgTWF5IDIwMTcnLFxuICAgICAgICBpZDogMixcbiAgICAgICAgcHJpY2U6IDM1Ljk3XG4gICAgfSx7XG4gICAgICAgIG5hbWU6ICdUaGUgTWVhZG93JyxcbiAgICAgICAgY29sb3I6ICdMaW1lIEdyZWVuLyBMaWdodCBCbHVlLyBXaGl0ZScsXG4gICAgICAgIGltYWdlOiBcIi4uL2ltZy9oYW1tb2Nrcy9tZWFkb3doYW1tb2NrLmpwZ1wiLFxuICAgICAgICBkZXNjOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgaWQ6IDUsXG4gICAgICAgIHByaWNlOiAzNS45N1xuICAgIH1dXG5cbiAgdGhpcy5oYW1tb2NrcyA9IFt7XG4gICAgICAgIG5hbWU6ICdUaGUgU3VucmlzZScsXG4gICAgICAgIGNvbG9yOiAnT3JhbmdlL0dyZXknLFxuICAgICAgICBpbWFnZTogXCIuLi9pbWcvaGFtbW9ja3Mvc3VucmlzZS5qcGdcIixcbiAgICAgICAgZGVzYzogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGlkOiAxLFxuICAgICAgICBwcmljZTogMzUuOTdcbiAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdUaGUgR2V5c2VyJyxcbiAgICAgICAgY29sb3I6ICdCbHVlLyBMaWdodCBCbHVlJyxcbiAgICAgICAgaW1hZ2U6IFwiLi4vaW1nL2hhbW1vY2tzL2JsdWVoYW1tb2NrLmpwZ1wiLFxuICAgICAgICBkZXNjOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIHByaWNlOiAzNS45N1xuICAgIH0se1xuICAgICAgICBuYW1lOiAnVGhlIFdvb2RsYW5kJyxcbiAgICAgICAgY29sb3I6ICdGb3JyZXN0IEdyZWVuL0dyZXknLFxuICAgICAgICBpbWFnZTogXCIuLi9pbWcvaGFtbW9ja3MvZ3JlZW5oYW1tb2NrLmpwZ1wiLFxuICAgICAgICBkZXNjOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIHByaWNlOiAzNS45N1xuICAgIH0se1xuICAgICAgICBuYW1lOiAnVGhlIFN1bW1pdCcsXG4gICAgICAgIGNvbG9yOiAnQ2hhcmNvYWwvTWFyb29uJyxcbiAgICAgICAgaW1hZ2U6IFwiLi4vaW1nL2hhbW1vY2tzL3N1bW1pdC5qcGdcIixcbiAgICAgICAgZGVzYzogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGlkOiA0LFxuICAgICAgICBwcmljZTogMzUuOTdcbiAgICB9LHtcbiAgICAgICAgbmFtZTogJ1RoZSBNZWFkb3cnLFxuICAgICAgICBjb2xvcjogJ0xpbWUgR3JlZW4vIExpZ2h0IEJsdWUvIFdoaXRlJyxcbiAgICAgICAgaW1hZ2U6IFwiLi4vaW1nL2hhbW1vY2tzL21lYWRvd2hhbW1vY2suanBnXCIsXG4gICAgICAgIGRlc2M6ICdDb21pbmcgTWF5IDIwMTcnLFxuICAgICAgICBpZDogNSxcbiAgICAgICAgcHJpY2U6IDM1Ljk3XG4gICAgfV1cblxuICAgIHRoaXMuZ2V0QmVzdFNlbGxlcnMgPSAoKSA9PiB7XG4gICAgICBsZXQgYmVzdFNlbGxlcnMgPSB0aGlzLmJlc3RTZWxsZXJzO1xuICAgICAgcmV0dXJuIGJlc3RTZWxsZXJzO1xuICAgIH1cblxuICAgIHRoaXMuZ2V0SGFtbW9ja3MgPSAoKSA9PiB7XG4gICAgICBsZXQgaGFtbW9ja3MgPSB0aGlzLmhhbW1vY2tzO1xuICAgICAgcmV0dXJuIGhhbW1vY2tzO1xuICAgIH1cblxuXG5cblxufSkvL2VuZCBvZiBzZXJ2aWNlXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpLnNlcnZpY2UoJ291dHBvc3RTcnZjJywgZnVuY3Rpb24oKXtcblxuICB0aGlzLmZhcSA9IFt7XG4gICAgcXVlc3Rpb246ICdXYW50aW5nIHRvIGJ1eSBhIGhhbW1vY2s/IEhlcmUgaXMgaG93IHRvIGdldCBzdGFydGVkPycsXG4gICAgYW5zd2VyOiAnT3VyIGdvYWwgaXMgdG8gbWFrZSBvdXIgaGFtbW9ja3MgYXMgaGFzc2xlIGZyZWUgYXMgcG9zc2libGUuIEFsbCBvZiBvdXIgaGFtbW9ja3MgY29tZSB3aXRoIGVuZC1zdHJhcHMgZm9yIGV4dHJhIHN0cmVuZ3RoIGFuZCBkdXJhYmlsaXR5IHNvIG91ciBjdXN0b21lcnMgbmV2ZXIgaGF2ZSB0byB3b3JyeSBhYm91dCB0aGVpciBrbm90cyBjb21pbmcgdW5kb25lLiBXZSBhbHNvIHByb3ZpZGUgdHJlZSBzbGVldmVzIHdpdGggcHJlLXRpZWQga25vdHMgdG8gcHJvdGVjdCBmcm9tIGZyYXkgYW5kIHByb3ZpZGUgZXZlbiBleHRyYSBkdXJhYmlsaXR5LiBPdXIgY3VzdG9tZXIgbmV2ZXIgaGF2ZSB0byB0aWUgdGhlaXIgb3duIGtub3RzISBFYWNoIGhhbW1vY2sgYWxzbyBjb21lcyB3aXRoIGEgc2V0IG9mIGFsdW1pbnVtIHdpcmUtZ2F0ZSBjYXJhYmluZXJzIHRoYXQgd29yayB3aXRoIG91ciBzdXNwZW5zaW9uIHN5c3RlbS4gQWxsIHlvdSBuZWVkIHRvIGRvIG5vdyBpcyBjaG9vc2UgeW91ciBvZiBoYW1tb2NrLidcbiAgfSwge1xuICAgIHF1ZXN0aW9uOiAnSG93IGRvIEkgd2FzaCBteSBNYWtlIFRyYWNrcyBoYW1tb2NrPycsXG4gICAgYW5zd2VyOiAnWW91IGNhbiBtYWNoaW5lIHdhc2ggb3IgaGFuZCB3YXNoIHlvdXIgaGFtbW9jay4gKE5PVEU6IERvIG5vdCBwdXQgdGhlIGhhbW1vY2sgaW4gdGhlIGRyeWVyISBBaXIgZHJ5IG9ubHkhKScsXG4gICAgdGlwMTogJ01hY2hpbmUgV2FzaDogRmlyc3QsIHJlbW92ZSB0aGUgdGhlIGNhcmFiaW5lcnMgdGhlbiB3YXNoIG9uIGNvb2wgaW4gYSBmcm9udCBsb2FkIHdhc2hlciBvbiB0aGUgZGVsaWNhdGUgY3ljbGUgc2V0aW5nIHVzaW5nIGEgbWlsZCBkZXRlcmdlbnQuIERvIG5vdCB1bnRpZSBhbnkga25vdHMhJyxcbiAgICB0aXAyOiAnSGFuZCBXYXNoOiBXZSByZWNvbW1lbmQgdXNpbmcgYSBjbG90aCB3aXRoIHNvYXAgb3IgbWlsZCBkZXRlcmdlbnQuJ1xuICB9LHtcbiAgICBxdWVzdGlvbjogJ0hvdyBkbyBJIGNhcmUgZm9yIG15IE1ha2UgVHJhY2tzIGhhbW1vY2s/JyxcbiAgICBhbnN3ZXI6ICdTYWZldHk6IEluIHNldCB1cCwgaW5zdXJlIHRoYXQgeW91ciBzdHJhcHMgYXJlIHNlY3VyZWx5IHdyYXBwZWQgYW5kIHRoZSBjYXJhYmluZXJzIGFyZSBjbG9zZWQuIEVhc2UgaW50byB5b3VyIGhhbW1vY2sgc2xvd2x5IHRvIG1ha2Ugc3VyZSBpdCBoYW5ncyBzZWN1cmVseS4nLFxuICAgIHRpcDE6ICdVViBEYW1hZ2U6IFVWIGRhbWFnZSBjYW4gbWFrZSB0aGUgaGFtbW9jayBmYWRlIGluIGNvbG9yIGFuZCB3ZWFrZW4gdGhlIGZhYnJpYyB3aGljaCBsZWFkcyB0byB0ZWFyaW5nLiBXZSByZWNvbW1lbmQgd2hlbiB0aGUgaGFtbW9jayBpcyBub3QgaW51c2UgdG8gc3RvcmUgaXQgaW4gaXRzIHNhY2sgc29tZXdoZXJlIGRyeSBhbmQgY29vbC4nXG4gIH0sIHtcbiAgICBxdWVzdGlvbjogJ0RvZXMgdGhlIGhhbW1vY2sgY29tZSB3aXRoIHN0cmFwcz8nLFxuICAgIGFuc3dlcjogJ091ciBoYW1tb2NrIHBhY2thZ2UgY29tZXMgd2l0aCBldmVyeXRoaW5nIHlvdSBuZWVkIGZvciBhIGdyZWF0IGhhbW1vY2sgZXhwZXJpZW5jZS4gV2UgdXNlIGVuZC1zdHJhcHMgaW5zdGVhZCBvZiBrbm90ZWQgcm9wZSB0byBhdHRhY2ggdG8gb3VyIGNhcmFiaW5lcnMgZm9yIHRoZWlyIHJlbGlhYmlsaXR5IGFuZCBzdHJlbmd0aC4gVGhlIHBhY2thZ2UgYWxzbyBjb21lcyB3aXRoIHRyZWUtc2xlZXZlcywgd2hpY2ggaGFzIHByZS1rbm90ZWQgcm9wZSBhbmQgZW5jYXNlZCBieSBhIG55bG9uIG1hdGVyaWFsIHNvIHByb3RlY3QgdGhlIHJvcGUgZnJvbSBmcmF5aW5nLidcbiAgfSwge1xuICAgIHF1ZXN0aW9uOiAnV2lsbCBJIG5lZWQgc3RyYXBzIHRvIHVzZSB0aGUgaGFtbW9jaz8nLFxuICAgIGFuc3dlcjogJ05vLCB5b3Ugbm90IG5lZWQgYW55IGV4dHJhIHN0cmFwcyB0aGVuIHdoYXQgdGhlIGhhbW1vY2sgcGFja2FnZSBjb21lcyB3aXRoLidcbiAgfSwge1xuICAgIHF1ZXN0aW9uOiAnV2hhdCBhcmUgdGhlIGRpbWVuc2lvbnMgb2YgeW91ciBoYW1tb2Nrcz8nLFxuICAgIGFuc3dlcjogJ0RvdWJsZSBUcmFjayBoYW1tb2NrOiAxMCB4IDYuNSBmZWV0LidcbiAgfSwge1xuICAgIHF1ZXN0aW9uOiAnSG93IGhpZ2ggZG8gSSBuZWVkIHRvIGhhbmcgdGhlIGhhbW1vY2s/JyxcbiAgICBhbnN3ZXI6ICdXZSByZWNvbW1lbmQgYXJvdW5kIDIgZmVldCBvciBoaWdoZXIuJ1xuICB9LCB7XG4gICAgcXVlc3Rpb246ICdGb3Igc2V0IHVwLCB3aGF0IGlzIHRoZSBiZXN0IGxlbmd0aCB0byBoYXZlIGJldHdlZW4gZW5kcyBvZiB0aGUgaGFtbW9jaz8nLFxuICAgIGFuc3dlcjogJ1RoZSBiZXN0IHNldCB1cCBpcyBhcm91bmQgMTIgZmVldCBmcm9tIGVuZCB0byBlbmQuJ1xuICB9LCB7XG4gICAgcXVlc3Rpb246ICdXaGF0IGFyZSB0aGUgTWFrZSBUcmFja3MgaGFtbW9ja3MgbWFkZSBvZj8nLFxuICAgIGFuc3dlcjogJ0FsbCBvdXIgaGFtbW9ja3MgYXJlIG1hZGUgb2YgcG9yb3VzLCBicmVhdGhhYmxlIG55bG9uIHRhZmZldGEuIFRoaXMgcG9yb3VzIHF1YWxpdHkgbGVuZHMgaXRzZWxmIHRvIGEgY29vbCwgY29tZm9ydGFibGUgZXhwZXJpZW5jZS4nXG4gIH0sIHtcbiAgICBxdWVzdGlvbjogJ1dpbGwgbXkgZG9ncyBvciBjYXRzIG5haWxzIHB1bmN0dXJlIHRoZSBoYW1tb2NrPycsXG4gICAgYW5zd2VyOiAnSXQgaXMgdmVyeSBsaWtlbHksIHdlIHJlY29tbWVuZCBjYXV0aW9uLidcbiAgfSwge1xuICAgIHF1ZXN0aW9uOiAnQXJlIHlvdXIgaGFtbW9ja3Mgd2F0ZXJwcm9vZj8nLFxuICAgIGFuc3dlcjogJ01ha2UgVHJhY2tzIGhhbW1vY2tzIGFyZSBub3Qgd2F0ZXJwcm9vZiwgYnV0IGFyZSB3YXRlciByZXNpc3RhbnQhJ1xuICB9XVxuXG4gIHRoaXMuZ2V0RmFxcyA9ICgpID0+IHtcbiAgICBsZXQgZmFxcyA9IHRoaXMuZmFxO1xuICAgIHJldHVybiBmYXFzO1xuICB9XG5cbn0pLy9lbmQgb2Ygc2VydmljZTtcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJykuZGlyZWN0aXZlKCdjdXN0b21Gb290ZXInLCAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2Zvb3Rlci5odG1sJ1xuICB9O1xufSkgLy9lbmQgb2YgbmF2YmFyIGRpcmVjdGl2ZVxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5kaXJlY3RpdmUoJ25hdmJhcicsICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvbmF2YmFyLmh0bWwnXG4gIH07XG59KSAvL2VuZCBvZiBuYXZiYXIgZGlyZWN0aXZlXG4iXX0=
