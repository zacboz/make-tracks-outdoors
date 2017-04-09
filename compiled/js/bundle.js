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
        url: '/hammockDetails',
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
});
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbnRyb2xsZXJzL2ZhcUN0cmwuanMiLCJjb250cm9sbGVycy9oYW1tb2NrQ3RybC5qcyIsImNvbnRyb2xsZXJzL2hhbW1vY2tEZXRhaWxzQ3RybC5qcyIsImNvbnRyb2xsZXJzL2hvbWVDdHJsLmpzIiwiZGlyZWN0aXZlcy9mb290ZXIuanMiLCJkaXJlY3RpdmVzL25hdmJhci5qcyIsImRpcmVjdGl2ZXMvc2xpZGVhYmxlLmpzIiwic2VydmljZXMvaGFtbW9ja1NydmMuanMiLCJzZXJ2aWNlcy9vdXRwb3N0U3J2Yy5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCJzdGF0ZSIsInVybCIsInRlbXBsYXRlVXJsIiwiY29udHJvbGxlciIsIm90aGVyd2lzZSIsIiRzY29wZSIsIm91dHBvc3RTcnZjIiwiJHN0YXRlUGFyYW1zIiwiZmFxcyIsImdldEZhcXMiLCJjb25zb2xlIiwibG9nIiwiaGFtbW9ja1NydmMiLCJoYW1tb2NrcyIsImdldEhhbW1vY2tzIiwiaGFtbW9jayIsImdldEhhbW1vY2tEZXRhaWxzIiwiYmVzdFNlbGxlcnMiLCJnZXRCZXN0U2VsbGVycyIsImRpcmVjdGl2ZSIsInJlc3RyaWN0IiwiY29tcGlsZSIsImVsZW1lbnQiLCJhdHRyIiwiY29udGVudHMiLCJodG1sIiwicG9zdExpbmsiLCJzY29wZSIsImF0dHJzIiwiZHVyYXRpb24iLCJlYXNpbmciLCJjc3MiLCJsaW5rIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2xpZGVUb2dnbGUiLCJleHBhbmRlZCIsImJpbmQiLCJjb250ZW50Iiwic3R5bGUiLCJib3JkZXIiLCJ5IiwiY2xpZW50SGVpZ2h0IiwiaGVpZ2h0Iiwic2VydmljZSIsImlkIiwibmFtZSIsImNvbG9yIiwiaW1hZ2UiLCJkZXNjIiwicHJpY2UiLCJzdGF0ZVBhcmFtcyIsImhhbW1vY2tEZXRhaWxzIiwiaSIsImxlbmd0aCIsInBhcnNlSW50IiwiZmFxIiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJ0aXAxIiwidGlwMiJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsUUFBUUMsTUFBUixDQUFlLFlBQWYsRUFBNkIsQ0FBQyxXQUFELENBQTdCLEVBQ0dDLE1BREgsQ0FDVSxVQUFTQyxjQUFULEVBQXlCQyxrQkFBekIsRUFBNEM7O0FBRWxERCxtQkFDR0UsS0FESCxDQUNTLE1BRFQsRUFDZ0I7QUFDVkMsYUFBSSxHQURNO0FBRVZDLHFCQUFhLG1CQUZIO0FBR1ZDLG9CQUFZO0FBSEYsS0FEaEIsRUFNR0gsS0FOSCxDQU1TLE9BTlQsRUFNaUI7QUFDWEMsYUFBSSxRQURPO0FBRVhDLHFCQUFhO0FBRkYsS0FOakIsRUFVR0YsS0FWSCxDQVVTLFVBVlQsRUFVb0I7QUFDZEMsYUFBSSxXQURVO0FBRWRDLHFCQUFhLHVCQUZDO0FBR2RDLG9CQUFZO0FBSEUsS0FWcEIsRUFlR0gsS0FmSCxDQWVTLGdCQWZULEVBZTBCO0FBQ3BCQyxhQUFJLGlCQURnQjtBQUVwQkMscUJBQWEsOEJBRk87QUFHcEJDLG9CQUFZO0FBSFEsS0FmMUIsRUFvQkdILEtBcEJILENBb0JTLFNBcEJULEVBb0JtQjtBQUNiQyxhQUFJLFVBRFM7QUFFYkMscUJBQWE7QUFGQSxLQXBCbkIsRUF3QkdGLEtBeEJILENBd0JTLGFBeEJULEVBd0J1QjtBQUNqQkMsYUFBSSxNQURhO0FBRWpCQyxxQkFBYSxrQkFGSTtBQUdqQkMsb0JBQVk7QUFISyxLQXhCdkIsRUE2QkdILEtBN0JILENBNkJTLGlCQTdCVCxFQTZCMkI7QUFDckJDLGFBQUksVUFEaUI7QUFFckJDLHFCQUFhO0FBRlEsS0E3QjNCLEVBaUNHRixLQWpDSCxDQWlDUyxnQkFqQ1QsRUFpQzBCO0FBQ3BCQyxhQUFJLFNBRGdCO0FBRXBCQyxxQkFBYTtBQUZPLEtBakMxQixFQXFDR0YsS0FyQ0gsQ0FxQ1MsU0FyQ1QsRUFxQ21CO0FBQ2JDLGFBQUksVUFEUztBQUViQyxxQkFBYTtBQUZBLEtB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b0NSO0FBQ0RELGNBQVUsK0JBRFQ7QUFFREMsWUFBUTtBQUZQLEdBcENRLENBQVg7O0FBeUNBLE9BQUtsRCxPQUFMLEdBQWUsWUFBTTtBQUNuQixRQUFJRCxPQUFPLE1BQUtpRCxHQUFoQjtBQUNBLFdBQU9qRCxJQUFQO0FBQ0QsR0FIRDtBQUtELENBaERELEdBZ0RFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJywgWyd1aS5yb3V0ZXInXSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKXtcblxuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ2hvbWUnLHtcbiAgICAgICAgICB1cmw6Jy8nLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiBcIi4vdmlld3MvaG9tZS5odG1sXCIsXG4gICAgICAgICAgY29udHJvbGxlcjogJ2hvbWVDdHJsJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnc3RvcnknLHtcbiAgICAgICAgICB1cmw6Jy9zdG9yeScsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL3N0b3J5Lmh0bWwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdoYW1tb2Nrcycse1xuICAgICAgICAgIHVybDonL2hhbW1vY2tzJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvaGFtbW9ja3MuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ2hhbW1vY2tDdHJsJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnaGFtbW9ja0RldGFpbHMnLHtcbiAgICAgICAgICB1cmw6Jy9oYW1tb2NrRGV0YWlscycsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2hhbW1vY2stZGV0YWlscy5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnaGFtbW9ja0RldGFpbHNDdHJsJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnb3V0cG9zdCcse1xuICAgICAgICAgIHVybDonL291dHBvc3QnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9vdXRwb3N0Lmh0bWwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdvdXRwb3N0LmZhcScse1xuICAgICAgICAgIHVybDonL2ZhcScsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2ZhcS5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnZmFxQ3RybCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ291dHBvc3QucmVmdW5kcycse1xuICAgICAgICAgIHVybDonL3JlZnVuZHMnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9yZWZ1bmRzLmh0bWwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdvdXRwb3N0LnZpZGVvcycse1xuICAgICAgICAgIHVybDonL3ZpZGVvcycsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL3ZpZGVvcy5odG1sJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnY29udGFjdCcse1xuICAgICAgICAgIHVybDonL2NvbnRhY3QnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9jb250YWN0Lmh0bWwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdqb2luJyx7XG4gICAgICAgICAgdXJsOicvam9pbicsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2pvaW4uaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ2pvaW5DdHJsJ1xuICAgICAgfSk7XG5cbiAgJHVybFJvdXRlclByb3ZpZGVyXG4gICAgICAub3RoZXJ3aXNlKCcvJyk7XG5cblxufSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpLmNvbnRyb2xsZXIoJ2ZhcUN0cmwnLCAoJHNjb3BlLCBvdXRwb3N0U3J2YywgJHN0YXRlUGFyYW1zKSA9PiB7XG5cbiAgJHNjb3BlLmZhcXMgPSBvdXRwb3N0U3J2Yy5nZXRGYXFzKCk7XG4gIGNvbnNvbGUubG9nKCRzY29wZS5mYXFzKTtcblxuICAvLyAkKCcucXVlc3Rpb24nKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XG4gIC8vICAgJCh0aGlzKS5uZXh0KCcub3BlbicpLnNsaWRlVG9nZ2xlKCk7XG4gIC8vIH0pO1xuXG59KS8vZW5kIG9mIGNvbnRyb2xsZXJcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJykuY29udHJvbGxlcignaGFtbW9ja0N0cmwnLCAoJHNjb3BlLCBoYW1tb2NrU3J2YywgJHN0YXRlUGFyYW1zKSA9PiB7XG5cbiAgJHNjb3BlLmhhbW1vY2tzID0gaGFtbW9ja1NydmMuZ2V0SGFtbW9ja3MoKTtcbiAgY29uc29sZS5sb2coJHNjb3BlLmhhbW1vY2tzKTtcblxufSkvL2VuZCBvZiBob21lIGNvbnRyb2xsZXJcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJylcbi5jb250cm9sbGVyKCdoYW1tb2NrRGV0YWlsc0N0cmwnLCAoJHNjb3BlLCBoYW1tb2NrU3J2YywgJHN0YXRlUGFyYW1zKSA9PiB7XG5cbiAgJHNjb3BlLmhhbW1vY2sgPSBoYW1tb2NrU3J2Yy5nZXRIYW1tb2NrRGV0YWlscygkc3RhdGVQYXJhbXMpO1xuXG5cbn0pXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpXG4uY29udHJvbGxlcignaG9tZUN0cmwnLCAoJHNjb3BlLCBoYW1tb2NrU3J2YywgJHN0YXRlUGFyYW1zKSA9PiB7XG5cbiAgJHNjb3BlLmJlc3RTZWxsZXJzID0gaGFtbW9ja1NydmMuZ2V0QmVzdFNlbGxlcnMoKTtcbiAgY29uc29sZS5sb2coJHNjb3BlLmJlc3RTZWxsZXJzKTtcblxufSkvL2VuZCBvZiBob21lIGNvbnRyb2xsZXJcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJykuZGlyZWN0aXZlKCdjdXN0b21Gb290ZXInLCAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2Zvb3Rlci5odG1sJ1xuICB9O1xufSkgLy9lbmQgb2YgbmF2YmFyIGRpcmVjdGl2ZVxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5kaXJlY3RpdmUoJ25hdmJhcicsICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvbmF2YmFyLmh0bWwnXG4gIH07XG59KSAvL2VuZCBvZiBuYXZiYXIgZGlyZWN0aXZlXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpXG4uZGlyZWN0aXZlKCdzbGlkZWFibGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6J0MnLFxuICAgICAgICBjb21waWxlOiBmdW5jdGlvbiAoZWxlbWVudCwgYXR0cikge1xuICAgICAgICAgICAgLy8gd3JhcCB0YWdcbiAgICAgICAgICAgIHZhciBjb250ZW50cyA9IGVsZW1lbnQuaHRtbCgpO1xuICAgICAgICAgICAgZWxlbWVudC5odG1sKCc8ZGl2IGNsYXNzPVwic2xpZGVhYmxlX2NvbnRlbnRcIiBzdHlsZT1cIm1hcmdpbjowICFpbXBvcnRhbnQ7IHBhZGRpbmc6MCAhaW1wb3J0YW50XCIgPicgKyBjb250ZW50cyArICc8L2Rpdj4nKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHBvc3RMaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICAgICAgICAgIC8vIGRlZmF1bHQgcHJvcGVydGllc1xuICAgICAgICAgICAgICAgIGF0dHJzLmR1cmF0aW9uID0gKCFhdHRycy5kdXJhdGlvbikgPyAnMXMnIDogYXR0cnMuZHVyYXRpb247XG4gICAgICAgICAgICAgICAgYXR0cnMuZWFzaW5nID0gKCFhdHRycy5lYXNpbmcpID8gJ2Vhc2UtaW4tb3V0JyA6IGF0dHJzLmVhc2luZztcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICdvdmVyZmxvdyc6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICAnaGVpZ2h0JzogJzBweCcsXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uUHJvcGVydHknOiAnaGVpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25EdXJhdGlvbic6IGF0dHJzLmR1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAndHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uJzogYXR0cnMuZWFzaW5nXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfTtcbn0pXG4uZGlyZWN0aXZlKCdzbGlkZVRvZ2dsZScsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYXR0cnMuc2xpZGVUb2dnbGUpO1xuICAgICAgICAgICAgYXR0cnMuZXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGVsZW1lbnQuYmluZCgnY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29udGVudCA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVhYmxlX2NvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICBpZighYXR0cnMuZXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkIHJnYmEoMCwwLDAsMCknO1xuICAgICAgICAgICAgICAgICAgICB2YXIgeSA9IGNvbnRlbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLmJvcmRlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSB5ICsgJ3B4JztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF0dHJzLmV4cGFuZGVkID0gIWF0dHJzLmV4cGFuZGVkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJykuc2VydmljZSgnaGFtbW9ja1NydmMnLCBmdW5jdGlvbigpe1xuXG5cbiAgdGhpcy5iZXN0U2VsbGVycyA9IFt7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiAnVGhlIFN1bnJpc2UnLFxuICAgICAgICBjb2xvcjogJ09yYW5nZS9HcmV5JyxcbiAgICAgICAgaW1hZ2U6IFwiLi4vaW1nL2hhbW1vY2tzL3N1bnJpc2UuanBnXCIsXG4gICAgICAgIGRlc2M6ICdDb21pbmcgTWF5IDIwMTcnLFxuICAgICAgICBwcmljZTogMzUuOTdcbiAgICB9LCB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBuYW1lOiAnVGhlIEdleXNlcicsXG4gICAgICAgIGNvbG9yOiAnQmx1ZS8gTGlnaHQgQmx1ZScsXG4gICAgICAgIGltYWdlOiBcIi4uL2ltZy9oYW1tb2Nrcy9ibHVlaGFtbW9jay5qcGdcIixcbiAgICAgICAgZGVzYzogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIHByaWNlOiAzNS45N1xuICAgIH0se1xuICAgICAgICBpZDogMyxcbiAgICAgICAgbmFtZTogJ1RoZSBNZWFkb3cnLFxuICAgICAgICBjb2xvcjogJ0xpbWUgR3JlZW4vIExpZ2h0IEJsdWUvIFdoaXRlJyxcbiAgICAgICAgaW1hZ2U6IFwiLi4vaW1nL2hhbW1vY2tzL21lYWRvd2hhbW1vY2suanBnXCIsXG4gICAgICAgIGRlc2M6ICdDb21pbmcgTWF5IDIwMTcnLFxuICAgICAgICBwcmljZTogMzUuOTdcbiAgICB9XVxuXG4gIHRoaXMuaGFtbW9ja3MgPSBbe1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogJ1RoZSBTdW5yaXNlJyxcbiAgICAgICAgY29sb3I6ICdPcmFuZ2UvR3JleScsXG4gICAgICAgIGltYWdlOiBcIi4uL2ltZy9oYW1tb2Nrcy9zdW5yaXNlLmpwZ1wiLFxuICAgICAgICBkZXNjOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgcHJpY2U6IDM1Ljk3XG4gICAgfSwge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogJ1RoZSBHZXlzZXInLFxuICAgICAgICBjb2xvcjogJ0JsdWUvIExpZ2h0IEJsdWUnLFxuICAgICAgICBpbWFnZTogXCIuLi9pbWcvaGFtbW9ja3MvYmx1ZWhhbW1vY2suanBnXCIsXG4gICAgICAgIGRlc2M6ICdDb21pbmcgTWF5IDIwMTcnLFxuICAgICAgICBwcmljZTogMzUuOTdcbiAgICB9LHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIG5hbWU6ICdUaGUgV29vZGxhbmQnLFxuICAgICAgICBjb2xvcjogJ0ZvcnJlc3QgR3JlZW4vR3JleScsXG4gICAgICAgIGltYWdlOiBcIi4uL2ltZy9oYW1tb2Nrcy9ncmVlbmhhbW1vY2suanBnXCIsXG4gICAgICAgIGRlc2M6ICdDb21pbmcgTWF5IDIwMTcnLFxuICAgICAgICBwcmljZTogMzUuOTdcbiAgICB9LHtcbiAgICAgICAgaWQ6IDQsXG4gICAgICAgIG5hbWU6ICdUaGUgU3VtbWl0JyxcbiAgICAgICAgY29sb3I6ICdDaGFyY29hbC9NYXJvb24nLFxuICAgICAgICBpbWFnZTogXCIuLi9pbWcvaGFtbW9ja3Mvc3VtbWl0LmpwZ1wiLFxuICAgICAgICBkZXNjOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgcHJpY2U6IDM1Ljk3XG4gICAgfSx7XG4gICAgICAgIGlkOiA1LFxuICAgICAgICBuYW1lOiAnVGhlIE1lYWRvdycsXG4gICAgICAgIGNvbG9yOiAnTGltZSBHcmVlbi8gTGlnaHQgQmx1ZS8gV2hpdGUnLFxuICAgICAgICBpbWFnZTogXCIuLi9pbWcvaGFtbW9ja3MvbWVhZG93aGFtbW9jay5qcGdcIixcbiAgICAgICAgZGVzYzogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIHByaWNlOiAzNS45N1xuICAgIH1dXG5cbiAgICB0aGlzLmdldEJlc3RTZWxsZXJzID0gKCkgPT4ge1xuICAgICAgbGV0IGJlc3RTZWxsZXJzID0gdGhpcy5iZXN0U2VsbGVycztcbiAgICAgIHJldHVybiBiZXN0U2VsbGVycztcbiAgICB9XG5cbiAgICB0aGlzLmdldEhhbW1vY2tzID0gKCkgPT4ge1xuICAgICAgbGV0IGhhbW1vY2tzID0gdGhpcy5oYW1tb2NrcztcbiAgICAgIHJldHVybiBoYW1tb2NrcztcbiAgICB9XG5cbiAgICB0aGlzLmdldEhhbW1vY2tEZXRhaWxzID0gKHN0YXRlUGFyYW1zKSA9PiB7XG4gICAgICBsZXQgaGFtbW9ja0RldGFpbHMgPSB0aGlzLmhhbW1vY2tzO1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGhhbW1vY2tEZXRhaWxzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc29sZS5sb2coaGFtbW9ja0RldGFpbHMsIHN0YXRlUGFyYW1zKTtcbiAgICAgICAgaWYoaGFtbW9ja0RldGFpbHNbaV0uaWQgPT09IHBhcnNlSW50KHN0YXRlUGFyYW1zLmlkKSl7XG4gICAgICAgICAgcmV0dXJuIGhhbW1vY2tEZXRhaWxzW2ldXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cblxuXG5cbn0pLy9lbmQgb2Ygc2VydmljZVxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5zZXJ2aWNlKCdvdXRwb3N0U3J2YycsIGZ1bmN0aW9uKCl7XG5cbiAgdGhpcy5mYXEgPSBbe1xuICAgIHF1ZXN0aW9uOiAnV2FudGluZyB0byBidXkgYSBoYW1tb2NrPyBIZXJlIGlzIGhvdyB0byBnZXQgc3RhcnRlZD8nLFxuICAgIGFuc3dlcjogJ091ciBnb2FsIGlzIHRvIG1ha2Ugb3VyIGhhbW1vY2tzIGFzIGhhc3NsZSBmcmVlIGFzIHBvc3NpYmxlLiBBbGwgb2Ygb3VyIGhhbW1vY2tzIGNvbWUgd2l0aCBlbmQtc3RyYXBzIGZvciBleHRyYSBzdHJlbmd0aCBhbmQgZHVyYWJpbGl0eSBzbyBvdXIgY3VzdG9tZXJzIG5ldmVyIGhhdmUgdG8gd29ycnkgYWJvdXQgdGhlaXIga25vdHMgY29taW5nIHVuZG9uZS4gV2UgYWxzbyBwcm92aWRlIHRyZWUgc2xlZXZlcyB3aXRoIHByZS10aWVkIGtub3RzIHRvIHByb3RlY3QgZnJvbSBmcmF5IGFuZCBwcm92aWRlIGV2ZW4gZXh0cmEgZHVyYWJpbGl0eS4gT3VyIGN1c3RvbWVyIG5ldmVyIGhhdmUgdG8gdGllIHRoZWlyIG93biBrbm90cyEgRWFjaCBoYW1tb2NrIGFsc28gY29tZXMgd2l0aCBhIHNldCBvZiBhbHVtaW51bSB3aXJlLWdhdGUgY2FyYWJpbmVycyB0aGF0IHdvcmsgd2l0aCBvdXIgc3VzcGVuc2lvbiBzeXN0ZW0uIEFsbCB5b3UgbmVlZCB0byBkbyBub3cgaXMgY2hvb3NlIHlvdXIgb2YgaGFtbW9jay4nXG4gIH0sIHtcbiAgICBxdWVzdGlvbjogJ0hvdyBkbyBJIHdhc2ggbXkgTWFrZSBUcmFja3MgaGFtbW9jaz8nLFxuICAgIGFuc3dlcjogJ1lvdSBjYW4gbWFjaGluZSB3YXNoIG9yIGhhbmQgd2FzaCB5b3VyIGhhbW1vY2suIChOT1RFOiBEbyBub3QgcHV0IHRoZSBoYW1tb2NrIGluIHRoZSBkcnllciEgQWlyIGRyeSBvbmx5ISknLFxuICAgIHRpcDE6ICdNYWNoaW5lIFdhc2g6IEZpcnN0LCByZW1vdmUgdGhlIHRoZSBjYXJhYmluZXJzIHRoZW4gd2FzaCBvbiBjb29sIGluIGEgZnJvbnQgbG9hZCB3YXNoZXIgb24gdGhlIGRlbGljYXRlIGN5Y2xlIHNldGluZyB1c2luZyBhIG1pbGQgZGV0ZXJnZW50LiBEbyBub3QgdW50aWUgYW55IGtub3RzIScsXG4gICAgdGlwMjogJ0hhbmQgV2FzaDogV2UgcmVjb21tZW5kIHVzaW5nIGEgY2xvdGggd2l0aCBzb2FwIG9yIG1pbGQgZGV0ZXJnZW50LidcbiAgfSx7XG4gICAgcXVlc3Rpb246ICdIb3cgZG8gSSBjYXJlIGZvciBteSBNYWtlIFRyYWNrcyBoYW1tb2NrPycsXG4gICAgYW5zd2VyOiAnU2FmZXR5OiBJbiBzZXQgdXAsIGluc3VyZSB0aGF0IHlvdXIgc3RyYXBzIGFyZSBzZWN1cmVseSB3cmFwcGVkIGFuZCB0aGUgY2FyYWJpbmVycyBhcmUgY2xvc2VkLiBFYXNlIGludG8geW91ciBoYW1tb2NrIHNsb3dseSB0byBtYWtlIHN1cmUgaXQgaGFuZ3Mgc2VjdXJlbHkuJyxcbiAgICB0aXAxOiAnVVYgRGFtYWdlOiBVViBkYW1hZ2UgY2FuIG1ha2UgdGhlIGhhbW1vY2sgZmFkZSBpbiBjb2xvciBhbmQgd2Vha2VuIHRoZSBmYWJyaWMgd2hpY2ggbGVhZHMgdG8gdGVhcmluZy4gV2UgcmVjb21tZW5kIHdoZW4gdGhlIGhhbW1vY2sgaXMgbm90IGluIHVzZTsgcGFjayBpdCBpbiBpdHMgc2FjayBhbmQgc3RvcmUgc29tZXdoZXJlIGRyeSBhbmQgY29vbC4nXG4gIH0sIHtcbiAgICBxdWVzdGlvbjogJ0RvZXMgdGhlIGhhbW1vY2sgY29tZSB3aXRoIHN0cmFwcz8nLFxuICAgIGFuc3dlcjogJ091ciBoYW1tb2NrIHBhY2thZ2UgY29tZXMgd2l0aCBldmVyeXRoaW5nIHlvdSBuZWVkIGZvciBhIGdyZWF0IGhhbW1vY2sgZXhwZXJpZW5jZS4gV2UgdXNlIGVuZC1zdHJhcHMgaW5zdGVhZCBvZiBrbm90ZWQgcm9wZSB0byBhdHRhY2ggdG8gb3VyIGNhcmFiaW5lcnMgZm9yIHRoZWlyIHJlbGlhYmlsaXR5IGFuZCBzdHJlbmd0aC4gVGhlIHBhY2thZ2UgYWxzbyBjb21lcyB3aXRoIHRyZWUtc2xlZXZlcywgd2hpY2ggaGFzIHByZS1rbm90ZWQgcm9wZSBhbmQgZW5jYXNlZCBieSBhIG55bG9uIG1hdGVyaWFsIHNvIHByb3RlY3QgdGhlIHJvcGUgZnJvbSBmcmF5aW5nLidcbiAgfSwge1xuICAgIHF1ZXN0aW9uOiAnV2lsbCBJIG5lZWQgc3RyYXBzIHRvIHVzZSB0aGUgaGFtbW9jaz8nLFxuICAgIGFuc3dlcjogJ05vLCB5b3Ugbm90IG5lZWQgYW55IGV4dHJhIHN0cmFwcyB0aGVuIHdoYXQgdGhlIGhhbW1vY2sgcGFja2FnZSBjb21lcyB3aXRoLidcbiAgfSwge1xuICAgIHF1ZXN0aW9uOiAnV2hhdCBpcyB0aGUgbWF4aW11bSB3ZWlnaHQgY2FwYWNpdHkgb2Ygb3VyIGhhbW1vY2tzPycsXG4gICAgYW5zd2VyOiAnODAwIGxicyEnXG4gIH0sIHtcbiAgICBxdWVzdGlvbjogJ1doYXQgYXJlIHRoZSBkaW1lbnNpb25zIG9mIHlvdXIgaGFtbW9ja3M/JyxcbiAgICBhbnN3ZXI6ICdEb3VibGUgVHJhY2sgaGFtbW9jazogMTAgeCA2LjUgZmVldC4nXG4gIH0sIHtcbiAgICBxdWVzdGlvbjogJ0hvdyBoaWdoIGRvIEkgbmVlZCB0byBoYW5nIHRoZSBoYW1tb2NrPycsXG4gICAgYW5zd2VyOiAnSG93IGhpZ2ggZG8gSSBuZWVkIHRvIGhhbmcgdGhlIGhhbW1vY2s/J1xuICB9LCB7XG4gICAgcXVlc3Rpb246ICdGb3Igc2V0IHVwLCB3aGF0IGlzIHRoZSBiZXN0IGxlbmd0aCB0byBoYXZlIGJldHdlZW4gZW5kcyBvZiB0aGUgaGFtbW9jaz8nLFxuICAgIGFuc3dlcjogJ1RoZSBiZXN0IHNldCB1cCBpcyBhcm91bmQgMTIgZmVldCBmcm9tIGVuZCB0byBlbmQuJ1xuICB9LCB7XG4gICAgcXVlc3Rpb246ICdXaGF0IGFyZSB0aGUgTWFrZSBUcmFja3MgaGFtbW9ja3MgbWFkZSBvZj8nLFxuICAgIGFuc3dlcjogJ0FsbCBvdXIgaGFtbW9ja3MgYXJlIG1hZGUgb2YgcG9yb3VzLCBicmVhdGhhYmxlIG55bG9uIHRhZmZldGEuIFRoaXMgcG9yb3VzIHF1YWxpdHkgbGVuZHMgaXRzZWxmIHRvIGEgY29vbCBhbmQgY29tZm9ydGFibGUgZXhwZXJpZW5jZS4nXG4gIH0sIHtcbiAgICBxdWVzdGlvbjogJ1dpbGwgbXkgZG9ncyBvciBjYXRzIG5haWxzIHB1bmN0dXJlIHRoZSBoYW1tb2NrPycsXG4gICAgYW5zd2VyOiAnSXQgaXMgZGVmaW5pdGVseSBwb3NzaWJsZSwgYmUgY2F1dGlvdXMhJ1xuICB9LCB7XG4gICAgcXVlc3Rpb246ICdBcmUgeW91ciBoYW1tb2NrcyB3YXRlcnByb29mPycsXG4gICAgYW5zd2VyOiAnTWFrZSBUcmFja3MgaGFtbW9ja3MgYXJlIHdhdGVyIHJlc2lzdGFudCBub3Qgd2F0ZXJwcm9vZi4nXG4gIH1dXG5cbiAgdGhpcy5nZXRGYXFzID0gKCkgPT4ge1xuICAgIGxldCBmYXFzID0gdGhpcy5mYXE7XG4gICAgcmV0dXJuIGZhcXM7XG4gIH1cblxufSkvL2VuZCBvZiBzZXJ2aWNlO1xuIl19
