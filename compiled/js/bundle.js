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
    }).state('hammockDetails', {
        url: '/hammockDetails/:id',
        templateUrl: './views/hammock-details.html',
        controller: 'hammockDetailsCtrl'
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

  // $('.question').on('click',function(){
  //   $(this).next('.open').slideToggle();
  // });
}); //end of controller
'use strict';

angular.module('makeTracks').controller('hammockCtrl', function ($scope, hammockSrvc, $stateParams) {

  $scope.hammocks = hammockSrvc.getHammocks();
  console.log($scope.hammocks);
}); //end of home controller
'use strict';

angular.module('makeTracks').controller('hammockDetailsCtrl', function ($scope, hammockSrvc, $stateParams) {

  $scope.hammock = hammockSrvc.getHammockDetails($stateParams);
  console.log($scope.hammock);
});
'use strict';

angular.module('makeTracks').controller('homeCtrl', function ($scope, hammockSrvc, $stateParams) {

  $scope.bestSellers = hammockSrvc.getBestSellers();
  console.log($scope.bestSellers);
}); //end of home controller
'use strict';

angular.module('makeTracks').service('hammockSrvc', function () {
    var _this = this;

    this.bestSellers = [{
        id: 1,
        name: 'The Sunrise',
        color: 'Orange/Grey',
        image: "../img/hammocks/sunrise.jpg",
        desc: 'Coming May 2017',
        price: 35.97
    }, {
        id: 2,
        name: 'The Geyser',
        color: 'Blue/ Light Blue',
        image: "../img/hammocks/bluehammock.jpg",
        desc: 'Coming May 2017',
        price: 35.97
    }, {
        id: 3,
        name: 'The Meadow',
        color: 'Lime Green/ Light Blue/ White',
        image: "../img/hammocks/meadowhammock.jpg",
        desc: 'Coming May 2017',
        price: 35.97
    }];

    this.hammocks = [{
        id: 1,
        name: 'The Sunrise',
        color: 'Orange/Grey',
        image: "../img/hammocks/sunrise.jpg",
        desc: 'Coming May 2017',
        price: 35.97
    }, {
        id: 2,
        name: 'The Geyser',
        color: 'Blue/ Light Blue',
        image: "../img/hammocks/bluehammock.jpg",
        desc: 'Coming May 2017',
        price: 35.97
    }, {
        id: 3,
        name: 'The Woodland',
        color: 'Forrest Green/Grey',
        image: "../img/hammocks/greenhammock.jpg",
        desc: 'Coming May 2017',
        price: 35.97
    }, {
        id: 4,
        name: 'The Summit',
        color: 'Charcoal/Maroon',
        image: "../img/hammocks/summit.jpg",
        desc: 'Coming May 2017',
        price: 35.97
    }, {
        id: 5,
        name: 'The Meadow',
        color: 'Lime Green/ Light Blue/ White',
        image: "../img/hammocks/meadowhammock.jpg",
        desc: 'Coming May 2017',
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

    this.getHammockDetails = function (stateParams) {
        var hammockDetails = _this.hammocks;
        for (var i = 0; i < hammockDetails.length; i++) {
            console.log(hammockDetails, stateParams);
            if (hammockDetails[i].id === parseInt(stateParams.id)) {
                return hammockDetails[i];
            }
        }
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
    tip1: 'UV Damage: UV damage can make the hammock fade in color and weaken the fabric which leads to tearing. We recommend when the hammock is not in use; pack it in its sack and store somewhere dry and cool.'
  }, {
    question: 'Does the hammock come with straps?',
    answer: 'Our hammock package comes with everything you need for a great hammock experience. We use end-straps instead of knoted rope to attach to our carabiners for their reliability and strength. The package also comes with tree-sleeves, which has pre-knoted rope and encased by a nylon material so protect the rope from fraying.'
  }, {
    question: 'Will I need straps to use the hammock?',
    answer: 'No, you not need any extra straps then what the hammock package comes with.'
  }, {
    question: 'What is the maximum weight capacity of our hammocks?',
    answer: '800 lbs!'
  }, {
    question: 'What are the dimensions of your hammocks?',
    answer: 'Double Track hammock: 10 x 6.5 feet.'
  }, {
    question: 'How high do I need to hang the hammock?',
    answer: 'How high do I need to hang the hammock?'
  }, {
    question: 'For set up, what is the best length to have between ends of the hammock?',
    answer: 'The best set up is around 12 feet from end to end.'
  }, {
    question: 'What are the Make Tracks hammocks made of?',
    answer: 'All our hammocks are made of porous, breathable nylon taffeta. This porous quality lends itself to a cool and comfortable experience.'
  }, {
    question: 'Will my dogs or cats nails puncture the hammock?',
    answer: 'It is definitely possible, be cautious!'
  }, {
    question: 'Are your hammocks waterproof?',
    answer: 'Make Tracks hammocks are water resistant not waterproof.'
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
'use strict';

angular.module('makeTracks').directive('slideable', function () {
    return {
        restrict: 'C',
        compile: function compile(element, attr) {
            // wrap tag
            var contents = element.html();
            element.html('<div class="slideable_content" style="margin:0 !important; padding:0 !important" >' + contents + '</div>');

            return function postLink(scope, element, attrs) {
                // default properties
                attrs.duration = !attrs.duration ? '1s' : attrs.duration;
                attrs.easing = !attrs.easing ? 'ease-in-out' : attrs.easing;
                element.css({
                    'overflow': 'hidden',
                    'height': '0px',
                    'transitionProperty': 'height',
                    'transitionDuration': attrs.duration,
                    'transitionTimingFunction': attrs.easing
                });
            };
        }
    };
}).directive('slideToggle', function () {
    return {
        restrict: 'A',
        link: function link(scope, element, attrs) {
            var target = document.querySelector(attrs.slideToggle);
            attrs.expanded = false;
            element.bind('click', function () {
                var content = target.querySelector('.slideable_content');
                if (!attrs.expanded) {
                    content.style.border = '1px solid rgba(0,0,0,0)';
                    var y = content.clientHeight;
                    content.style.border = 0;
                    target.style.height = y + 'px';
                } else {
                    target.style.height = '0px';
                }
                attrs.expanded = !attrs.expanded;
            });
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbnRyb2xsZXJzL2ZhcUN0cmwuanMiLCJjb250cm9sbGVycy9oYW1tb2NrQ3RybC5qcyIsImNvbnRyb2xsZXJzL2hhbW1vY2tEZXRhaWxzQ3RybC5qcyIsImNvbnRyb2xsZXJzL2hvbWVDdHJsLmpzIiwic2VydmljZXMvaGFtbW9ja1NydmMuanMiLCJzZXJ2aWNlcy9vdXRwb3N0U3J2Yy5qcyIsImRpcmVjdGl2ZXMvZm9vdGVyLmpzIiwiZGlyZWN0aXZlcy9uYXZiYXIuanMiLCJkaXJlY3RpdmVzL3NsaWRlYWJsZS5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCJzdGF0ZSIsInVybCIsInRlbXBsYXRlVXJsIiwiY29udHJvbGxlciIsIm90aGVyd2lzZSIsIiRzY29wZSIsIm91dHBvc3RTcnZjIiwiJHN0YXRlUGFyYW1zIiwiZmFxcyIsImdldEZhcXMiLCJjb25zb2xlIiwibG9nIiwiaGFtbW9ja1NydmMiLCJoYW1tb2NrcyIsImdldEhhbW1vY2tzIiwiaGFtbW9jayIsImdldEhhbW1vY2tEZXRhaWxzIiwiYmVzdFNlbGxlcnMiLCJnZXRCZXN0U2VsbGVycyIsInNlcnZpY2UiLCJpZCIsIm5hbWUiLCJjb2xvciIsImltYWdlIiwiZGVzYyIsInByaWNlIiwic3RhdGVQYXJhbXMiLCJoYW1tb2NrRGV0YWlscyIsImkiLCJsZW5ndGgiLCJwYXJzZUludCIsImZhcSIsInF1ZXN0aW9uIiwiYW5zd2VyIiwidGlwMSIsInRpcDIiLCJkaXJlY3RpdmUiLCJyZXN0cmljdCIsImNvbXBpbGUiLCJlbGVtZW50IiwiYXR0ciIsImNvbnRlbnRzIiwiaHRtbCIsInBvc3RMaW5rIiwic2NvcGUiLCJhdHRycyIsImR1cmF0aW9uIiwiZWFzaW5nIiwiY3NzIiwibGluayIsInRhcmdldCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNsaWRlVG9nZ2xlIiwiZXhwYW5kZWQiLCJiaW5kIiwiY29udGVudCIsInN0eWxlIiwiYm9yZGVyIiwieSIsImNsaWVudEhlaWdodCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsUUFBUUMsTUFBUixDQUFlLFlBQWYsRUFBNkIsQ0FBQyxXQUFELENBQTdCLEVBQ0dDLE1BREgsQ0FDVSxVQUFTQyxjQUFULEVBQXlCQyxrQkFBekIsRUFBNEM7O0FBRWxERCxtQkFDR0UsS0FESCxDQUNTLE1BRFQsRUFDZ0I7QUFDVkMsYUFBSSxHQURNO0FBRVZDLHFCQUFhLG1CQUZIO0FBR1ZDLG9CQUFZO0FBSEYsS0FEaEIsRUFNR0gsS0FOSCxDQU1TLE9BTlQsRUFNaUI7QUFDWEMsYUFBSSxRQURPO0FBRVhDLHFCQUFhO0FBRkYsS0FOakIsRUFVR0YsS0FWSCxDQVVTLFVBVlQsRUFVb0I7QUFDZEMsYUFBSSxXQURVO0FBRWRDLHFCQUFhLHVCQUZDO0FBR2RDLG9CQUFZO0FBSEUsS0FWcEIsRUFlR0gsS0FmSCxDQWVTLGdCQWZULEVBZTBCO0FBQ3BCQyxhQUFJLHFCQURnQjtBQUVwQkMscUJBQWEsOEJBRk87QUFHcEJDLG9CQUFZO0FBSFEsS0FmMUIsRUFvQkdILEtBcEJILENBb0JTLFNBcEJULEVBb0JtQjtBQUNiQyxhQUFJLFVBRFM7QUFFYkMscUJBQWE7QUFGQSxLQXBCbkIsRUF3QkdGLEtBeEJILENBd0JTLGFBeEJULEVBd0J1QjtBQUNqQkMsYUFBSSxNQURhO0FBRWpCQyxxQkFBYSxrQkFGSTtBQUdqQkMsb0JBQVk7QUFISyxLQXhCdkIsRUE2QkdILEtBN0JILENBNkJTLGlCQTdCVCxFQTZCMkI7QUFDckJDLGFBQUksVUFEaUI7QUFFckJDLHFCQUFhO0FBRlEsS0E3QjNCLEVBaUNHRixLQWpDSCxDQWlDUyxnQkFqQ1QsRUFpQzBCO0FBQ3BCQyxhQUFJLFNBRGdCO0FBRXBCQyxxQkFBYTtBQUZPLEtBakMxQixFQXFDR0YsS0FyQ0gsQ0FxQ1MsU0FyQ1QsRUFxQ21CO0FBQ2JDLGFBQUksVUFEUztBQUViQyxxQkFBYTtBQUZBLEtB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TyxLQUFQLENBQWFJLE1BQWIsR0FBc0JGLElBQUksSUFBMUI7QUFDSCxpQkFMRCxNQUtPO0FBQ0hULDJCQUFPTyxLQUFQLENBQWFJLE1BQWIsR0FBc0IsS0FBdEI7QUFDSDtBQUNEaEIsc0JBQU1TLFFBQU4sR0FBaUIsQ0FBQ1QsTUFBTVMsUUFBeEI7QUFDSCxhQVhEO0FBWUg7QUFqQkUsS0FBUDtBQW1CSCxDQTVDRCIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycsIFsndWkucm91dGVyJ10pXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcil7XG5cbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdob21lJyx7XG4gICAgICAgICAgdXJsOicvJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogXCIuL3ZpZXdzL2hvbWUuaHRtbFwiLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdob21lQ3RybCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ3N0b3J5Jyx7XG4gICAgICAgICAgdXJsOicvc3RvcnknLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9zdG9yeS5odG1sJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnaGFtbW9ja3MnLHtcbiAgICAgICAgICB1cmw6Jy9oYW1tb2NrcycsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2hhbW1vY2tzLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdoYW1tb2NrQ3RybCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2hhbW1vY2tEZXRhaWxzJyx7XG4gICAgICAgICAgdXJsOicvaGFtbW9ja0RldGFpbHMvOmlkJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvaGFtbW9jay1kZXRhaWxzLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdoYW1tb2NrRGV0YWlsc0N0cmwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdvdXRwb3N0Jyx7XG4gICAgICAgICAgdXJsOicvb3V0cG9zdCcsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL291dHBvc3QuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ291dHBvc3QuZmFxJyx7XG4gICAgICAgICAgdXJsOicvZmFxJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvZmFxLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdmYXFDdHJsJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnb3V0cG9zdC5yZWZ1bmRzJyx7XG4gICAgICAgICAgdXJsOicvcmVmdW5kcycsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL3JlZnVuZHMuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ291dHBvc3QudmlkZW9zJyx7XG4gICAgICAgICAgdXJsOicvdmlkZW9zJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvdmlkZW9zLmh0bWwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdjb250YWN0Jyx7XG4gICAgICAgICAgdXJsOicvY29udGFjdCcsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2NvbnRhY3QuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2pvaW4nLHtcbiAgICAgICAgICB1cmw6Jy9qb2luJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3Mvam9pbi5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnam9pbkN0cmwnXG4gICAgICB9KTtcblxuICAkdXJsUm91dGVyUHJvdmlkZXJcbiAgICAgIC5vdGhlcndpc2UoJy8nKTtcblxuXG59KTtcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJykuY29udHJvbGxlcignZmFxQ3RybCcsICgkc2NvcGUsIG91dHBvc3RTcnZjLCAkc3RhdGVQYXJhbXMpID0+IHtcblxuICAkc2NvcGUuZmFxcyA9IG91dHBvc3RTcnZjLmdldEZhcXMoKTtcbiAgY29uc29sZS5sb2coJHNjb3BlLmZhcXMpO1xuXG4gIC8vICQoJy5xdWVzdGlvbicpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgLy8gICAkKHRoaXMpLm5leHQoJy5vcGVuJykuc2xpZGVUb2dnbGUoKTtcbiAgLy8gfSk7XG5cbn0pLy9lbmQgb2YgY29udHJvbGxlclxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5jb250cm9sbGVyKCdoYW1tb2NrQ3RybCcsICgkc2NvcGUsIGhhbW1vY2tTcnZjLCAkc3RhdGVQYXJhbXMpID0+IHtcblxuICAkc2NvcGUuaGFtbW9ja3MgPSBoYW1tb2NrU3J2Yy5nZXRIYW1tb2NrcygpO1xuICBjb25zb2xlLmxvZygkc2NvcGUuaGFtbW9ja3MpO1xuXG59KS8vZW5kIG9mIGhvbWUgY29udHJvbGxlclxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKVxuLmNvbnRyb2xsZXIoJ2hhbW1vY2tEZXRhaWxzQ3RybCcsICgkc2NvcGUsIGhhbW1vY2tTcnZjLCAkc3RhdGVQYXJhbXMpID0+IHtcblxuICAkc2NvcGUuaGFtbW9jayA9IGhhbW1vY2tTcnZjLmdldEhhbW1vY2tEZXRhaWxzKCRzdGF0ZVBhcmFtcyk7XG4gIGNvbnNvbGUubG9nKCRzY29wZS5oYW1tb2NrKTtcblxuXG59KVxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKVxuLmNvbnRyb2xsZXIoJ2hvbWVDdHJsJywgKCRzY29wZSwgaGFtbW9ja1NydmMsICRzdGF0ZVBhcmFtcykgPT4ge1xuXG4gICRzY29wZS5iZXN0U2VsbGVycyA9IGhhbW1vY2tTcnZjLmdldEJlc3RTZWxsZXJzKCk7XG4gIGNvbnNvbGUubG9nKCRzY29wZS5iZXN0U2VsbGVycyk7XG5cbn0pLy9lbmQgb2YgaG9tZSBjb250cm9sbGVyXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpLnNlcnZpY2UoJ2hhbW1vY2tTcnZjJywgZnVuY3Rpb24oKXtcblxuXG4gIHRoaXMuYmVzdFNlbGxlcnMgPSBbe1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogJ1RoZSBTdW5yaXNlJyxcbiAgICAgICAgY29sb3I6ICdPcmFuZ2UvR3JleScsXG4gICAgICAgIGltYWdlOiBcIi4uL2ltZy9oYW1tb2Nrcy9zdW5yaXNlLmpwZ1wiLFxuICAgICAgICBkZXNjOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgcHJpY2U6IDM1Ljk3XG4gICAgfSwge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogJ1RoZSBHZXlzZXInLFxuICAgICAgICBjb2xvcjogJ0JsdWUvIExpZ2h0IEJsdWUnLFxuICAgICAgICBpbWFnZTogXCIuLi9pbWcvaGFtbW9ja3MvYmx1ZWhhbW1vY2suanBnXCIsXG4gICAgICAgIGRlc2M6ICdDb21pbmcgTWF5IDIwMTcnLFxuICAgICAgICBwcmljZTogMzUuOTdcbiAgICB9LHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIG5hbWU6ICdUaGUgTWVhZG93JyxcbiAgICAgICAgY29sb3I6ICdMaW1lIEdyZWVuLyBMaWdodCBCbHVlLyBXaGl0ZScsXG4gICAgICAgIGltYWdlOiBcIi4uL2ltZy9oYW1tb2Nrcy9tZWFkb3doYW1tb2NrLmpwZ1wiLFxuICAgICAgICBkZXNjOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgcHJpY2U6IDM1Ljk3XG4gICAgfV1cblxuICB0aGlzLmhhbW1vY2tzID0gW3tcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIG5hbWU6ICdUaGUgU3VucmlzZScsXG4gICAgICAgIGNvbG9yOiAnT3JhbmdlL0dyZXknLFxuICAgICAgICBpbWFnZTogXCIuLi9pbWcvaGFtbW9ja3Mvc3VucmlzZS5qcGdcIixcbiAgICAgICAgZGVzYzogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIHByaWNlOiAzNS45N1xuICAgIH0sIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIG5hbWU6ICdUaGUgR2V5c2VyJyxcbiAgICAgICAgY29sb3I6ICdCbHVlLyBMaWdodCBCbHVlJyxcbiAgICAgICAgaW1hZ2U6IFwiLi4vaW1nL2hhbW1vY2tzL2JsdWVoYW1tb2NrLmpwZ1wiLFxuICAgICAgICBkZXNjOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgcHJpY2U6IDM1Ljk3XG4gICAgfSx7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBuYW1lOiAnVGhlIFdvb2RsYW5kJyxcbiAgICAgICAgY29sb3I6ICdGb3JyZXN0IEdyZWVuL0dyZXknLFxuICAgICAgICBpbWFnZTogXCIuLi9pbWcvaGFtbW9ja3MvZ3JlZW5oYW1tb2NrLmpwZ1wiLFxuICAgICAgICBkZXNjOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgcHJpY2U6IDM1Ljk3XG4gICAgfSx7XG4gICAgICAgIGlkOiA0LFxuICAgICAgICBuYW1lOiAnVGhlIFN1bW1pdCcsXG4gICAgICAgIGNvbG9yOiAnQ2hhcmNvYWwvTWFyb29uJyxcbiAgICAgICAgaW1hZ2U6IFwiLi4vaW1nL2hhbW1vY2tzL3N1bW1pdC5qcGdcIixcbiAgICAgICAgZGVzYzogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIHByaWNlOiAzNS45N1xuICAgIH0se1xuICAgICAgICBpZDogNSxcbiAgICAgICAgbmFtZTogJ1RoZSBNZWFkb3cnLFxuICAgICAgICBjb2xvcjogJ0xpbWUgR3JlZW4vIExpZ2h0IEJsdWUvIFdoaXRlJyxcbiAgICAgICAgaW1hZ2U6IFwiLi4vaW1nL2hhbW1vY2tzL21lYWRvd2hhbW1vY2suanBnXCIsXG4gICAgICAgIGRlc2M6ICdDb21pbmcgTWF5IDIwMTcnLFxuICAgICAgICBwcmljZTogMzUuOTdcbiAgICB9XVxuXG4gICAgdGhpcy5nZXRCZXN0U2VsbGVycyA9ICgpID0+IHtcbiAgICAgIGxldCBiZXN0U2VsbGVycyA9IHRoaXMuYmVzdFNlbGxlcnM7XG4gICAgICByZXR1cm4gYmVzdFNlbGxlcnM7XG4gICAgfVxuXG4gICAgdGhpcy5nZXRIYW1tb2NrcyA9ICgpID0+IHtcbiAgICAgIGxldCBoYW1tb2NrcyA9IHRoaXMuaGFtbW9ja3M7XG4gICAgICByZXR1cm4gaGFtbW9ja3M7XG4gICAgfVxuXG4gICAgdGhpcy5nZXRIYW1tb2NrRGV0YWlscyA9IChzdGF0ZVBhcmFtcykgPT4ge1xuICAgICAgbGV0IGhhbW1vY2tEZXRhaWxzID0gdGhpcy5oYW1tb2NrcztcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBoYW1tb2NrRGV0YWlscy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnNvbGUubG9nKGhhbW1vY2tEZXRhaWxzLCBzdGF0ZVBhcmFtcyk7XG4gICAgICAgIGlmKGhhbW1vY2tEZXRhaWxzW2ldLmlkID09PSBwYXJzZUludChzdGF0ZVBhcmFtcy5pZCkpe1xuICAgICAgICAgIHJldHVybiBoYW1tb2NrRGV0YWlsc1tpXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG5cblxuXG59KS8vZW5kIG9mIHNlcnZpY2VcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJykuc2VydmljZSgnb3V0cG9zdFNydmMnLCBmdW5jdGlvbigpe1xuXG4gIHRoaXMuZmFxID0gW3tcbiAgICBxdWVzdGlvbjogJ1dhbnRpbmcgdG8gYnV5IGEgaGFtbW9jaz8gSGVyZSBpcyBob3cgdG8gZ2V0IHN0YXJ0ZWQ/JyxcbiAgICBhbnN3ZXI6ICdPdXIgZ29hbCBpcyB0byBtYWtlIG91ciBoYW1tb2NrcyBhcyBoYXNzbGUgZnJlZSBhcyBwb3NzaWJsZS4gQWxsIG9mIG91ciBoYW1tb2NrcyBjb21lIHdpdGggZW5kLXN0cmFwcyBmb3IgZXh0cmEgc3RyZW5ndGggYW5kIGR1cmFiaWxpdHkgc28gb3VyIGN1c3RvbWVycyBuZXZlciBoYXZlIHRvIHdvcnJ5IGFib3V0IHRoZWlyIGtub3RzIGNvbWluZyB1bmRvbmUuIFdlIGFsc28gcHJvdmlkZSB0cmVlIHNsZWV2ZXMgd2l0aCBwcmUtdGllZCBrbm90cyB0byBwcm90ZWN0IGZyb20gZnJheSBhbmQgcHJvdmlkZSBldmVuIGV4dHJhIGR1cmFiaWxpdHkuIE91ciBjdXN0b21lciBuZXZlciBoYXZlIHRvIHRpZSB0aGVpciBvd24ga25vdHMhIEVhY2ggaGFtbW9jayBhbHNvIGNvbWVzIHdpdGggYSBzZXQgb2YgYWx1bWludW0gd2lyZS1nYXRlIGNhcmFiaW5lcnMgdGhhdCB3b3JrIHdpdGggb3VyIHN1c3BlbnNpb24gc3lzdGVtLiBBbGwgeW91IG5lZWQgdG8gZG8gbm93IGlzIGNob29zZSB5b3VyIG9mIGhhbW1vY2suJ1xuICB9LCB7XG4gICAgcXVlc3Rpb246ICdIb3cgZG8gSSB3YXNoIG15IE1ha2UgVHJhY2tzIGhhbW1vY2s/JyxcbiAgICBhbnN3ZXI6ICdZb3UgY2FuIG1hY2hpbmUgd2FzaCBvciBoYW5kIHdhc2ggeW91ciBoYW1tb2NrLiAoTk9URTogRG8gbm90IHB1dCB0aGUgaGFtbW9jayBpbiB0aGUgZHJ5ZXIhIEFpciBkcnkgb25seSEpJyxcbiAgICB0aXAxOiAnTWFjaGluZSBXYXNoOiBGaXJzdCwgcmVtb3ZlIHRoZSB0aGUgY2FyYWJpbmVycyB0aGVuIHdhc2ggb24gY29vbCBpbiBhIGZyb250IGxvYWQgd2FzaGVyIG9uIHRoZSBkZWxpY2F0ZSBjeWNsZSBzZXRpbmcgdXNpbmcgYSBtaWxkIGRldGVyZ2VudC4gRG8gbm90IHVudGllIGFueSBrbm90cyEnLFxuICAgIHRpcDI6ICdIYW5kIFdhc2g6IFdlIHJlY29tbWVuZCB1c2luZyBhIGNsb3RoIHdpdGggc29hcCBvciBtaWxkIGRldGVyZ2VudC4nXG4gIH0se1xuICAgIHF1ZXN0aW9uOiAnSG93IGRvIEkgY2FyZSBmb3IgbXkgTWFrZSBUcmFja3MgaGFtbW9jaz8nLFxuICAgIGFuc3dlcjogJ1NhZmV0eTogSW4gc2V0IHVwLCBpbnN1cmUgdGhhdCB5b3VyIHN0cmFwcyBhcmUgc2VjdXJlbHkgd3JhcHBlZCBhbmQgdGhlIGNhcmFiaW5lcnMgYXJlIGNsb3NlZC4gRWFzZSBpbnRvIHlvdXIgaGFtbW9jayBzbG93bHkgdG8gbWFrZSBzdXJlIGl0IGhhbmdzIHNlY3VyZWx5LicsXG4gICAgdGlwMTogJ1VWIERhbWFnZTogVVYgZGFtYWdlIGNhbiBtYWtlIHRoZSBoYW1tb2NrIGZhZGUgaW4gY29sb3IgYW5kIHdlYWtlbiB0aGUgZmFicmljIHdoaWNoIGxlYWRzIHRvIHRlYXJpbmcuIFdlIHJlY29tbWVuZCB3aGVuIHRoZSBoYW1tb2NrIGlzIG5vdCBpbiB1c2U7IHBhY2sgaXQgaW4gaXRzIHNhY2sgYW5kIHN0b3JlIHNvbWV3aGVyZSBkcnkgYW5kIGNvb2wuJ1xuICB9LCB7XG4gICAgcXVlc3Rpb246ICdEb2VzIHRoZSBoYW1tb2NrIGNvbWUgd2l0aCBzdHJhcHM/JyxcbiAgICBhbnN3ZXI6ICdPdXIgaGFtbW9jayBwYWNrYWdlIGNvbWVzIHdpdGggZXZlcnl0aGluZyB5b3UgbmVlZCBmb3IgYSBncmVhdCBoYW1tb2NrIGV4cGVyaWVuY2UuIFdlIHVzZSBlbmQtc3RyYXBzIGluc3RlYWQgb2Yga25vdGVkIHJvcGUgdG8gYXR0YWNoIHRvIG91ciBjYXJhYmluZXJzIGZvciB0aGVpciByZWxpYWJpbGl0eSBhbmQgc3RyZW5ndGguIFRoZSBwYWNrYWdlIGFsc28gY29tZXMgd2l0aCB0cmVlLXNsZWV2ZXMsIHdoaWNoIGhhcyBwcmUta25vdGVkIHJvcGUgYW5kIGVuY2FzZWQgYnkgYSBueWxvbiBtYXRlcmlhbCBzbyBwcm90ZWN0IHRoZSByb3BlIGZyb20gZnJheWluZy4nXG4gIH0sIHtcbiAgICBxdWVzdGlvbjogJ1dpbGwgSSBuZWVkIHN0cmFwcyB0byB1c2UgdGhlIGhhbW1vY2s/JyxcbiAgICBhbnN3ZXI6ICdObywgeW91IG5vdCBuZWVkIGFueSBleHRyYSBzdHJhcHMgdGhlbiB3aGF0IHRoZSBoYW1tb2NrIHBhY2thZ2UgY29tZXMgd2l0aC4nXG4gIH0sIHtcbiAgICBxdWVzdGlvbjogJ1doYXQgaXMgdGhlIG1heGltdW0gd2VpZ2h0IGNhcGFjaXR5IG9mIG91ciBoYW1tb2Nrcz8nLFxuICAgIGFuc3dlcjogJzgwMCBsYnMhJ1xuICB9LCB7XG4gICAgcXVlc3Rpb246ICdXaGF0IGFyZSB0aGUgZGltZW5zaW9ucyBvZiB5b3VyIGhhbW1vY2tzPycsXG4gICAgYW5zd2VyOiAnRG91YmxlIFRyYWNrIGhhbW1vY2s6IDEwIHggNi41IGZlZXQuJ1xuICB9LCB7XG4gICAgcXVlc3Rpb246ICdIb3cgaGlnaCBkbyBJIG5lZWQgdG8gaGFuZyB0aGUgaGFtbW9jaz8nLFxuICAgIGFuc3dlcjogJ0hvdyBoaWdoIGRvIEkgbmVlZCB0byBoYW5nIHRoZSBoYW1tb2NrPydcbiAgfSwge1xuICAgIHF1ZXN0aW9uOiAnRm9yIHNldCB1cCwgd2hhdCBpcyB0aGUgYmVzdCBsZW5ndGggdG8gaGF2ZSBiZXR3ZWVuIGVuZHMgb2YgdGhlIGhhbW1vY2s/JyxcbiAgICBhbnN3ZXI6ICdUaGUgYmVzdCBzZXQgdXAgaXMgYXJvdW5kIDEyIGZlZXQgZnJvbSBlbmQgdG8gZW5kLidcbiAgfSwge1xuICAgIHF1ZXN0aW9uOiAnV2hhdCBhcmUgdGhlIE1ha2UgVHJhY2tzIGhhbW1vY2tzIG1hZGUgb2Y/JyxcbiAgICBhbnN3ZXI6ICdBbGwgb3VyIGhhbW1vY2tzIGFyZSBtYWRlIG9mIHBvcm91cywgYnJlYXRoYWJsZSBueWxvbiB0YWZmZXRhLiBUaGlzIHBvcm91cyBxdWFsaXR5IGxlbmRzIGl0c2VsZiB0byBhIGNvb2wgYW5kIGNvbWZvcnRhYmxlIGV4cGVyaWVuY2UuJ1xuICB9LCB7XG4gICAgcXVlc3Rpb246ICdXaWxsIG15IGRvZ3Mgb3IgY2F0cyBuYWlscyBwdW5jdHVyZSB0aGUgaGFtbW9jaz8nLFxuICAgIGFuc3dlcjogJ0l0IGlzIGRlZmluaXRlbHkgcG9zc2libGUsIGJlIGNhdXRpb3VzISdcbiAgfSwge1xuICAgIHF1ZXN0aW9uOiAnQXJlIHlvdXIgaGFtbW9ja3Mgd2F0ZXJwcm9vZj8nLFxuICAgIGFuc3dlcjogJ01ha2UgVHJhY2tzIGhhbW1vY2tzIGFyZSB3YXRlciByZXNpc3RhbnQgbm90IHdhdGVycHJvb2YuJ1xuICB9XVxuXG4gIHRoaXMuZ2V0RmFxcyA9ICgpID0+IHtcbiAgICBsZXQgZmFxcyA9IHRoaXMuZmFxO1xuICAgIHJldHVybiBmYXFzO1xuICB9XG5cbn0pLy9lbmQgb2Ygc2VydmljZTtcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJykuZGlyZWN0aXZlKCdjdXN0b21Gb290ZXInLCAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2Zvb3Rlci5odG1sJ1xuICB9O1xufSkgLy9lbmQgb2YgbmF2YmFyIGRpcmVjdGl2ZVxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5kaXJlY3RpdmUoJ25hdmJhcicsICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvbmF2YmFyLmh0bWwnXG4gIH07XG59KSAvL2VuZCBvZiBuYXZiYXIgZGlyZWN0aXZlXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpXG4uZGlyZWN0aXZlKCdzbGlkZWFibGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6J0MnLFxuICAgICAgICBjb21waWxlOiBmdW5jdGlvbiAoZWxlbWVudCwgYXR0cikge1xuICAgICAgICAgICAgLy8gd3JhcCB0YWdcbiAgICAgICAgICAgIHZhciBjb250ZW50cyA9IGVsZW1lbnQuaHRtbCgpO1xuICAgICAgICAgICAgZWxlbWVudC5odG1sKCc8ZGl2IGNsYXNzPVwic2xpZGVhYmxlX2NvbnRlbnRcIiBzdHlsZT1cIm1hcmdpbjowICFpbXBvcnRhbnQ7IHBhZGRpbmc6MCAhaW1wb3J0YW50XCIgPicgKyBjb250ZW50cyArICc8L2Rpdj4nKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHBvc3RMaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICAgICAgICAgIC8vIGRlZmF1bHQgcHJvcGVydGllc1xuICAgICAgICAgICAgICAgIGF0dHJzLmR1cmF0aW9uID0gKCFhdHRycy5kdXJhdGlvbikgPyAnMXMnIDogYXR0cnMuZHVyYXRpb247XG4gICAgICAgICAgICAgICAgYXR0cnMuZWFzaW5nID0gKCFhdHRycy5lYXNpbmcpID8gJ2Vhc2UtaW4tb3V0JyA6IGF0dHJzLmVhc2luZztcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICdvdmVyZmxvdyc6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICAnaGVpZ2h0JzogJzBweCcsXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uUHJvcGVydHknOiAnaGVpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25EdXJhdGlvbic6IGF0dHJzLmR1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAndHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uJzogYXR0cnMuZWFzaW5nXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfTtcbn0pXG4uZGlyZWN0aXZlKCdzbGlkZVRvZ2dsZScsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYXR0cnMuc2xpZGVUb2dnbGUpO1xuICAgICAgICAgICAgYXR0cnMuZXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGVsZW1lbnQuYmluZCgnY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29udGVudCA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVhYmxlX2NvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICBpZighYXR0cnMuZXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkIHJnYmEoMCwwLDAsMCknO1xuICAgICAgICAgICAgICAgICAgICB2YXIgeSA9IGNvbnRlbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLmJvcmRlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSB5ICsgJ3B4JztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF0dHJzLmV4cGFuZGVkID0gIWF0dHJzLmV4cGFuZGVkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==
