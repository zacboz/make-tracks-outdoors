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
    }).state('hammockDetails.specs', {
        url: '/hammockSpecs/:id',
        templateUrl: './views/hammockSpecs.html'
    }).state('hammockDetails.setup', {
        url: '/hammockSetup',
        templateUrl: './views/hammockSetup.html'
    }).state('hammockDetails.returns', {
        url: '/hammockReturns',
        templateUrl: './views/hammockReturns.html'
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
    }).state('comingsoon', {
        url: '/comingsoon',
        templateUrl: './views/comingsoon.html'
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

angular.module('makeTracks').service('hammockSrvc', function () {
    var _this = this;

    this.bestSellers = [{
        id: 1,
        name: 'The Sunrise',
        color: 'Orange/Grey',
        image: "../img/hammocks/sunrise.jpg",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes all come with pretied knots!',
        price: 34.99
    }, {
        id: 2,
        name: 'The Geyser',
        color: 'Light Blue/Blue',
        image: "../img/hammocks/bluehammock.jpg",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes all come with pretied knots!',
        price: 34.99
    }, {
        id: 5,
        name: 'The Meadow',
        color: 'Lime Green/ Light Blue/ White',
        image: "../img/hammocks/meadowhammock.jpg",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes all come with pretied knots!',
        price: 34.99
    }];

    this.hammocks = [{
        id: 1,
        name: 'The Sunrise',
        color: 'orange/gray',
        image: "../img/hammocks/sunrise.jpg",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes all come with pretied knots!',
        price: 34.99
    }, {
        id: 2,
        name: 'The Geyser',
        color: 'blue/light blue',
        image: "../img/hammocks/bluehammock.jpg",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes all come with pretied knots!',
        price: 34.99
    }, {
        id: 3,
        name: 'The Woodland',
        color: 'green/gray',
        image: "../img/hammocks/greenhammock.jpg",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes all come with pretied knots!',
        price: 34.99
    }, {
        id: 4,
        name: 'The Summit',
        color: 'charcoal/maroon',
        image: "../img/hammocks/summit.jpg",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes all come with pretied knots!',
        price: 34.99
    }, {
        id: 5,
        name: 'The Meadow',
        color: 'lime green/ light blue/ white',
        image: "../img/hammocks/meadowhammock.jpg",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes all come with pretied knots!',
        price: 34.99
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

    $("#scroll-specs").click(function () {
        $('html, body').animate({
            scrollTop: $("#specs").offset().top
        }, 1000);
    });
    $("#scroll-setup").click(function () {
        $('html, body').animate({
            scrollTop: $("#specs").offset().top
        }, 1000);
    });
    $("#scroll-returns").click(function () {
        $('html, body').animate({
            scrollTop: $("#specs").offset().top
        }, 1000);
    });
});
'use strict';

angular.module('makeTracks').controller('homeCtrl', function ($scope, hammockSrvc, $stateParams) {

  $scope.bestSellers = hammockSrvc.getBestSellers();
  console.log($scope.bestSellers);
}); //end of home controller
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsInNlcnZpY2VzL2hhbW1vY2tTcnZjLmpzIiwic2VydmljZXMvb3V0cG9zdFNydmMuanMiLCJkaXJlY3RpdmVzL2Zvb3Rlci5qcyIsImRpcmVjdGl2ZXMvbmF2YmFyLmpzIiwiZGlyZWN0aXZlcy9zbGlkZWFibGUuanMiLCJjb250cm9sbGVycy9mYXFDdHJsLmpzIiwiY29udHJvbGxlcnMvaGFtbW9ja0N0cmwuanMiLCJjb250cm9sbGVycy9oYW1tb2NrRGV0YWlsc0N0cmwuanMiLCJjb250cm9sbGVycy9ob21lQ3RybC5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCJzdGF0ZSIsInVybCIsInRlbXBsYXRlVXJsIiwiY29udHJvbGxlciIsIm90aGVyd2lzZSIsInNlcnZpY2UiLCJiZXN0U2VsbGVycyIsImlkIiwibmFtZSIsImNvbG9yIiwiaW1hZ2UiLCJzdGF0dXMiLCJkZXNjIiwicHJpY2UiLCJoYW1tb2NrcyIsImdldEJlc3RTZWxsZXJzIiwiZ2V0SGFtbW9ja3MiLCJnZXRIYW1tb2NrRGV0YWlscyIsInN0YXRlUGFyYW1zIiwiaGFtbW9ja0RldGFpbHMiLCJpIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInBhcnNlSW50IiwiZmFxIiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJ0aXAxIiwidGlwMiIsImdldEZhcXMiLCJmYXFzIiwiZGlyZWN0aXZlIiwicmVzdHJpY3QiLCJjb21waWxlIiwiZWxlbWVudCIsImF0dHIiLCJjb250ZW50cyIsImh0bWwiLCJwb3N0TGluayIsInNjb3BlIiwiYXR0cnMiLCJkdXJhdGlvbiIsImVhc2luZyIsImNzcyIsImxpbmsiLCJ0YXJnZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzbGlkZVRvZ2dsZSIsImV4cGFuZGVkIiwiYmluZCIsImNvbnRlbnQiLCJzdHlsZSIsImJvcmRlciIsInkiLCJjbGllbnRIZWlnaHQiLCJoZWlnaHQiLCIkc2NvcGUiLCJvdXRwb3N0U3J2YyIsIiRzdGF0ZVBhcmFtcyIsImhhbW1vY2tTcnZjIiwiaGFtbW9jayIsIiQiLCJjbGljayIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJvZmZzZXQiLCJ0b3AiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFFBQVFDLE1BQVIsQ0FBZSxZQUFmLEVBQTZCLENBQUMsV0FBRCxDQUE3QixFQUNHQyxNQURILENBQ1UsVUFBU0MsY0FBVCxFQUF5QkMsa0JBQXpCLEVBQTRDOztBQUVsREQsbUJBQ0dFLEtBREgsQ0FDUyxNQURULEVBQ2dCO0FBQ1ZDLGFBQUksR0FETTtBQUVWQyxxQkFBYSxtQkFGSDtBQUdWQyxvQkFBWTtBQUhGLEtBRGhCLEVBTUdILEtBTkgsQ0FNUyxPQU5ULEVBTWlCO0FBQ1hDLGFBQUksUUFETztBQUVYQyxxQkFBYTtBQUZGLEtBTmpCLEVBVUdGLEtBVkgsQ0FVUyxVQVZULEVBVW9CO0FBQ2RDLGFBQUksV0FEVTtBQUVkQyxxQkFBYSx1QkFGQztBQUdkQyxvQkFBWTtBQUhFLEtBVnBCLEVBZUdILEtBZkgsQ0FlUyxnQkFmVCxFQWUwQjtBQUNwQkMsYUFBSSxxQkFEZ0I7QUFFcEJDLHFCQUFhLDhCQUZPO0FBR3BCQyxvQkFBWTtBQUhRLEtBZjFCLEVBb0JHSCxLQXBCSCxDQW9CUyxzQkFwQlQsRUFvQmdDO0FBQzFCQyxhQUFJLG1CQURzQjtBQUUxQkMscUJBQWE7QUFGYSxLQXBCaEMsRUF3QkdGLEtBeEJILENBd0JTLHNCQXhCVCxFQXdCZ0M7QUFDMUJDLGFBQUksZUFEc0I7QUFFMUJDLHFCQUFhO0FBRmEsS0F4QmhDLEVBNEJHRixLQTVCSCxDQTRCUyx3QkE1QlQsRUE0QmtDO0FBQzVCQyxhQUFJLGlCQUR3QjtBQUU1QkMscUJBQWE7QUFGZSxLQTVCbEMsRUFnQ0dGLEtBaENILENBZ0NTLFNBaENULEVBZ0NtQjtBQUNiQyxhQUFJLFVBRFM7QUFFYkMscUJBQWE7QUFGQSxLQWhDbkIsRUFvQ0dGLEtBcENILENBb0NTLGFBcENU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LEVBQVlJLE1BQVosR0FBcUJDO0FBRFosU0FBeEIsRUFFRyxJQUZIO0FBR0gsS0FKRDtBQU1ELENBdEJEOzs7QUNBQXpFLFFBQVFDLE1BQVIsQ0FBZSxZQUFmLEVBQ0NPLFVBREQsQ0FDWSxVQURaLEVBQ3dCLFVBQUN1RCxNQUFELEVBQVNHLFdBQVQsRUFBc0JELFlBQXRCLEVBQXVDOztBQUU3REYsU0FBT3BELFdBQVAsR0FBcUJ1RCxZQUFZOUMsY0FBWixFQUFyQjtBQUNBTyxVQUFRQyxHQUFSLENBQVltQyxPQUFPcEQsV0FBbkI7QUFFRCxDQU5ELEdBTUUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnLCBbJ3VpLnJvdXRlciddKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpe1xuXG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgnaG9tZScse1xuICAgICAgICAgIHVybDonLycsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6IFwiLi92aWV3cy9ob21lLmh0bWxcIixcbiAgICAgICAgICBjb250cm9sbGVyOiAnaG9tZUN0cmwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdzdG9yeScse1xuICAgICAgICAgIHVybDonL3N0b3J5JyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3Mvc3RvcnkuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2hhbW1vY2tzJyx7XG4gICAgICAgICAgdXJsOicvaGFtbW9ja3MnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9oYW1tb2Nrcy5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnaGFtbW9ja0N0cmwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdoYW1tb2NrRGV0YWlscycse1xuICAgICAgICAgIHVybDonL2hhbW1vY2tEZXRhaWxzLzppZCcsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2hhbW1vY2stZGV0YWlscy5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnaGFtbW9ja0RldGFpbHNDdHJsJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnaGFtbW9ja0RldGFpbHMuc3BlY3MnLHtcbiAgICAgICAgICB1cmw6Jy9oYW1tb2NrU3BlY3MvOmlkJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvaGFtbW9ja1NwZWNzLmh0bWwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdoYW1tb2NrRGV0YWlscy5zZXR1cCcse1xuICAgICAgICAgIHVybDonL2hhbW1vY2tTZXR1cCcsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2hhbW1vY2tTZXR1cC5odG1sJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnaGFtbW9ja0RldGFpbHMucmV0dXJucycse1xuICAgICAgICAgIHVybDonL2hhbW1vY2tSZXR1cm5zJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvaGFtbW9ja1JldHVybnMuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ291dHBvc3QnLHtcbiAgICAgICAgICB1cmw6Jy9vdXRwb3N0JyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3Mvb3V0cG9zdC5odG1sJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnb3V0cG9zdC5mYXEnLHtcbiAgICAgICAgICB1cmw6Jy9mYXEnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9mYXEuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ2ZhcUN0cmwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdvdXRwb3N0LnJlZnVuZHMnLHtcbiAgICAgICAgICB1cmw6Jy9yZWZ1bmRzJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvcmVmdW5kcy5odG1sJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnb3V0cG9zdC52aWRlb3MnLHtcbiAgICAgICAgICB1cmw6Jy92aWRlb3MnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy92aWRlb3MuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2NvbWluZ3Nvb24nLHtcbiAgICAgICAgICB1cmw6Jy9jb21pbmdzb29uJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvY29taW5nc29vbi5odG1sJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnY29udGFjdCcse1xuICAgICAgICAgIHVybDonL2NvbnRhY3QnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9jb250YWN0Lmh0bWwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdqb2luJyx7XG4gICAgICAgICAgdXJsOicvam9pbicsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2pvaW4uaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ2pvaW5DdHJsJ1xuICAgICAgfSk7XG5cbiAgJHVybFJvdXRlclByb3ZpZGVyXG4gICAgICAub3RoZXJ3aXNlKCcvJyk7XG5cblxufSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpLnNlcnZpY2UoJ2hhbW1vY2tTcnZjJywgZnVuY3Rpb24oKXtcblxuXG4gIHRoaXMuYmVzdFNlbGxlcnMgPSBbe1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogJ1RoZSBTdW5yaXNlJyxcbiAgICAgICAgY29sb3I6ICdPcmFuZ2UvR3JleScsXG4gICAgICAgIGltYWdlOiBcIi4uL2ltZy9oYW1tb2Nrcy9zdW5yaXNlLmpwZ1wiLFxuICAgICAgICBzdGF0dXM6ICdDb21pbmcgTWF5IDIwMTcnLFxuICAgICAgICBkZXNjOiAnVGhlIGJlc3QgaGFtbW9jayBvdXQgdGhlcmUhIEdyZWF0IGZvciAxLCBwZXJmZWN0IGZvciAyLiBFYXNpbHkgdHJhbnNwb3J0YWJsZSBhbmQgc3R1ZmZzIHJpZ2h0IGludG8gdGhlIGF0dGFjaGVkIHNhY2suIFNldCB1cCBpbiBzZWNvbmRzIGJlY2F1c2Ugb3VyIHJvcGVzIGFsbCBjb21lIHdpdGggcHJldGllZCBrbm90cyEnLFxuICAgICAgICBwcmljZTogMzQuOTlcbiAgICB9LCB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBuYW1lOiAnVGhlIEdleXNlcicsXG4gICAgICAgIGNvbG9yOiAnTGlnaHQgQmx1ZS9CbHVlJyxcbiAgICAgICAgaW1hZ2U6IFwiLi4vaW1nL2hhbW1vY2tzL2JsdWVoYW1tb2NrLmpwZ1wiLFxuICAgICAgICBzdGF0dXM6ICdDb21pbmcgTWF5IDIwMTcnLFxuICAgICAgICBkZXNjOiAnVGhlIGJlc3QgaGFtbW9jayBvdXQgdGhlcmUhIEdyZWF0IGZvciAxLCBwZXJmZWN0IGZvciAyLiBFYXNpbHkgdHJhbnNwb3J0YWJsZSBhbmQgc3R1ZmZzIHJpZ2h0IGludG8gdGhlIGF0dGFjaGVkIHNhY2suIFNldCB1cCBpbiBzZWNvbmRzIGJlY2F1c2Ugb3VyIHJvcGVzIGFsbCBjb21lIHdpdGggcHJldGllZCBrbm90cyEnLFxuICAgICAgICBwcmljZTogMzQuOTlcbiAgICB9LHtcbiAgICAgICAgaWQ6IDUsXG4gICAgICAgIG5hbWU6ICdUaGUgTWVhZG93JyxcbiAgICAgICAgY29sb3I6ICdMaW1lIEdyZWVuLyBMaWdodCBCbHVlLyBXaGl0ZScsXG4gICAgICAgIGltYWdlOiBcIi4uL2ltZy9oYW1tb2Nrcy9tZWFkb3doYW1tb2NrLmpwZ1wiLFxuICAgICAgICBzdGF0dXM6ICdDb21pbmcgTWF5IDIwMTcnLFxuICAgICAgICBkZXNjOiAnVGhlIGJlc3QgaGFtbW9jayBvdXQgdGhlcmUhIEdyZWF0IGZvciAxLCBwZXJmZWN0IGZvciAyLiBFYXNpbHkgdHJhbnNwb3J0YWJsZSBhbmQgc3R1ZmZzIHJpZ2h0IGludG8gdGhlIGF0dGFjaGVkIHNhY2suIFNldCB1cCBpbiBzZWNvbmRzIGJlY2F1c2Ugb3VyIHJvcGVzIGFsbCBjb21lIHdpdGggcHJldGllZCBrbm90cyEnLFxuICAgICAgICBwcmljZTogMzQuOTlcbiAgICB9XVxuXG4gIHRoaXMuaGFtbW9ja3MgPSBbe1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogJ1RoZSBTdW5yaXNlJyxcbiAgICAgICAgY29sb3I6ICdvcmFuZ2UvZ3JheScsXG4gICAgICAgIGltYWdlOiBcIi4uL2ltZy9oYW1tb2Nrcy9zdW5yaXNlLmpwZ1wiLFxuICAgICAgICBzdGF0dXM6ICdDb21pbmcgTWF5IDIwMTcnLFxuICAgICAgICBkZXNjOiAnVGhlIGJlc3QgaGFtbW9jayBvdXQgdGhlcmUhIEdyZWF0IGZvciAxLCBwZXJmZWN0IGZvciAyLiBFYXNpbHkgdHJhbnNwb3J0YWJsZSBhbmQgc3R1ZmZzIHJpZ2h0IGludG8gdGhlIGF0dGFjaGVkIHNhY2suIFNldCB1cCBpbiBzZWNvbmRzIGJlY2F1c2Ugb3VyIHJvcGVzIGFsbCBjb21lIHdpdGggcHJldGllZCBrbm90cyEnLFxuICAgICAgICBwcmljZTogMzQuOTlcbiAgICB9LCB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBuYW1lOiAnVGhlIEdleXNlcicsXG4gICAgICAgIGNvbG9yOiAnYmx1ZS9saWdodCBibHVlJyxcbiAgICAgICAgaW1hZ2U6IFwiLi4vaW1nL2hhbW1vY2tzL2JsdWVoYW1tb2NrLmpwZ1wiLFxuICAgICAgICBzdGF0dXM6ICdDb21pbmcgTWF5IDIwMTcnLFxuICAgICAgICBkZXNjOiAnVGhlIGJlc3QgaGFtbW9jayBvdXQgdGhlcmUhIEdyZWF0IGZvciAxLCBwZXJmZWN0IGZvciAyLiBFYXNpbHkgdHJhbnNwb3J0YWJsZSBhbmQgc3R1ZmZzIHJpZ2h0IGludG8gdGhlIGF0dGFjaGVkIHNhY2suIFNldCB1cCBpbiBzZWNvbmRzIGJlY2F1c2Ugb3VyIHJvcGVzIGFsbCBjb21lIHdpdGggcHJldGllZCBrbm90cyEnLFxuICAgICAgICBwcmljZTogMzQuOTlcbiAgICB9LHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIG5hbWU6ICdUaGUgV29vZGxhbmQnLFxuICAgICAgICBjb2xvcjogJ2dyZWVuL2dyYXknLFxuICAgICAgICBpbWFnZTogXCIuLi9pbWcvaGFtbW9ja3MvZ3JlZW5oYW1tb2NrLmpwZ1wiLFxuICAgICAgICBzdGF0dXM6ICdDb21pbmcgTWF5IDIwMTcnLFxuICAgICAgICBkZXNjOiAnVGhlIGJlc3QgaGFtbW9jayBvdXQgdGhlcmUhIEdyZWF0IGZvciAxLCBwZXJmZWN0IGZvciAyLiBFYXNpbHkgdHJhbnNwb3J0YWJsZSBhbmQgc3R1ZmZzIHJpZ2h0IGludG8gdGhlIGF0dGFjaGVkIHNhY2suIFNldCB1cCBpbiBzZWNvbmRzIGJlY2F1c2Ugb3VyIHJvcGVzIGFsbCBjb21lIHdpdGggcHJldGllZCBrbm90cyEnLFxuICAgICAgICBwcmljZTogMzQuOTlcbiAgICB9LHtcbiAgICAgICAgaWQ6IDQsXG4gICAgICAgIG5hbWU6ICdUaGUgU3VtbWl0JyxcbiAgICAgICAgY29sb3I6ICdjaGFyY29hbC9tYXJvb24nLFxuICAgICAgICBpbWFnZTogXCIuLi9pbWcvaGFtbW9ja3Mvc3VtbWl0LmpwZ1wiLFxuICAgICAgICBzdGF0dXM6ICdDb21pbmcgTWF5IDIwMTcnLFxuICAgICAgICBkZXNjOiAnVGhlIGJlc3QgaGFtbW9jayBvdXQgdGhlcmUhIEdyZWF0IGZvciAxLCBwZXJmZWN0IGZvciAyLiBFYXNpbHkgdHJhbnNwb3J0YWJsZSBhbmQgc3R1ZmZzIHJpZ2h0IGludG8gdGhlIGF0dGFjaGVkIHNhY2suIFNldCB1cCBpbiBzZWNvbmRzIGJlY2F1c2Ugb3VyIHJvcGVzIGFsbCBjb21lIHdpdGggcHJldGllZCBrbm90cyEnLFxuICAgICAgICBwcmljZTogMzQuOTlcbiAgICB9LHtcbiAgICAgICAgaWQ6IDUsXG4gICAgICAgIG5hbWU6ICdUaGUgTWVhZG93JyxcbiAgICAgICAgY29sb3I6ICdsaW1lIGdyZWVuLyBsaWdodCBibHVlLyB3aGl0ZScsXG4gICAgICAgIGltYWdlOiBcIi4uL2ltZy9oYW1tb2Nrcy9tZWFkb3doYW1tb2NrLmpwZ1wiLFxuICAgICAgICBzdGF0dXM6ICdDb21pbmcgTWF5IDIwMTcnLFxuICAgICAgICBkZXNjOiAnVGhlIGJlc3QgaGFtbW9jayBvdXQgdGhlcmUhIEdyZWF0IGZvciAxLCBwZXJmZWN0IGZvciAyLiBFYXNpbHkgdHJhbnNwb3J0YWJsZSBhbmQgc3R1ZmZzIHJpZ2h0IGludG8gdGhlIGF0dGFjaGVkIHNhY2suIFNldCB1cCBpbiBzZWNvbmRzIGJlY2F1c2Ugb3VyIHJvcGVzIGFsbCBjb21lIHdpdGggcHJldGllZCBrbm90cyEnLFxuICAgICAgICBwcmljZTogMzQuOTlcbiAgICB9XVxuXG4gICAgdGhpcy5nZXRCZXN0U2VsbGVycyA9ICgpID0+IHtcbiAgICAgIGxldCBiZXN0U2VsbGVycyA9IHRoaXMuYmVzdFNlbGxlcnM7XG4gICAgICByZXR1cm4gYmVzdFNlbGxlcnM7XG4gICAgfVxuXG4gICAgdGhpcy5nZXRIYW1tb2NrcyA9ICgpID0+IHtcbiAgICAgIGxldCBoYW1tb2NrcyA9IHRoaXMuaGFtbW9ja3M7XG4gICAgICByZXR1cm4gaGFtbW9ja3M7XG4gICAgfVxuXG4gICAgdGhpcy5nZXRIYW1tb2NrRGV0YWlscyA9IChzdGF0ZVBhcmFtcykgPT4ge1xuICAgICAgbGV0IGhhbW1vY2tEZXRhaWxzID0gdGhpcy5oYW1tb2NrcztcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBoYW1tb2NrRGV0YWlscy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnNvbGUubG9nKGhhbW1vY2tEZXRhaWxzLCBzdGF0ZVBhcmFtcyk7XG4gICAgICAgIGlmKGhhbW1vY2tEZXRhaWxzW2ldLmlkID09PSBwYXJzZUludChzdGF0ZVBhcmFtcy5pZCkpe1xuICAgICAgICAgIHJldHVybiBoYW1tb2NrRGV0YWlsc1tpXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG5cblxuXG59KS8vZW5kIG9mIHNlcnZpY2VcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJykuc2VydmljZSgnb3V0cG9zdFNydmMnLCBmdW5jdGlvbigpe1xuXG4gIHRoaXMuZmFxID0gW3tcbiAgICBxdWVzdGlvbjogJ1dhbnRpbmcgdG8gYnV5IGEgaGFtbW9jaz8gSGVyZSBpcyBob3cgdG8gZ2V0IHN0YXJ0ZWQ/JyxcbiAgICBhbnN3ZXI6ICdPdXIgZ29hbCBpcyB0byBtYWtlIG91ciBoYW1tb2NrcyBhcyBoYXNzbGUgZnJlZSBhcyBwb3NzaWJsZS4gQWxsIG9mIG91ciBoYW1tb2NrcyBjb21lIHdpdGggZW5kLXN0cmFwcyBmb3IgZXh0cmEgc3RyZW5ndGggYW5kIGR1cmFiaWxpdHkgc28gb3VyIGN1c3RvbWVycyBuZXZlciBoYXZlIHRvIHdvcnJ5IGFib3V0IHRoZWlyIGtub3RzIGNvbWluZyB1bmRvbmUuIFdlIGFsc28gcHJvdmlkZSB0cmVlIHNsZWV2ZXMgd2l0aCBwcmUtdGllZCBrbm90cyB0byBwcm90ZWN0IGZyb20gZnJheSBhbmQgcHJvdmlkZSBldmVuIGV4dHJhIGR1cmFiaWxpdHkuIE91ciBjdXN0b21lciBuZXZlciBoYXZlIHRvIHRpZSB0aGVpciBvd24ga25vdHMhIEVhY2ggaGFtbW9jayBhbHNvIGNvbWVzIHdpdGggYSBzZXQgb2YgYWx1bWludW0gd2lyZS1nYXRlIGNhcmFiaW5lcnMgdGhhdCB3b3JrIHdpdGggb3VyIHN1c3BlbnNpb24gc3lzdGVtLiBBbGwgeW91IG5lZWQgdG8gZG8gbm93IGlzIGNob29zZSB5b3VyIG9mIGhhbW1vY2suJ1xuICB9LCB7XG4gICAgcXVlc3Rpb246ICdIb3cgZG8gSSB3YXNoIG15IE1ha2UgVHJhY2tzIGhhbW1vY2s/JyxcbiAgICBhbnN3ZXI6ICdZb3UgY2FuIG1hY2hpbmUgd2FzaCBvciBoYW5kIHdhc2ggeW91ciBoYW1tb2NrLiAoTk9URTogRG8gbm90IHB1dCB0aGUgaGFtbW9jayBpbiB0aGUgZHJ5ZXIhIEFpciBkcnkgb25seSEpJyxcbiAgICB0aXAxOiAnTWFjaGluZSBXYXNoOiBGaXJzdCwgcmVtb3ZlIHRoZSB0aGUgY2FyYWJpbmVycyB0aGVuIHdhc2ggb24gY29vbCBpbiBhIGZyb250IGxvYWQgd2FzaGVyIG9uIHRoZSBkZWxpY2F0ZSBjeWNsZSBzZXRpbmcgdXNpbmcgYSBtaWxkIGRldGVyZ2VudC4gRG8gbm90IHVudGllIGFueSBrbm90cyEnLFxuICAgIHRpcDI6ICdIYW5kIFdhc2g6IFdlIHJlY29tbWVuZCB1c2luZyBhIGNsb3RoIHdpdGggc29hcCBvciBtaWxkIGRldGVyZ2VudC4nXG4gIH0se1xuICAgIHF1ZXN0aW9uOiAnSG93IGRvIEkgY2FyZSBmb3IgbXkgTWFrZSBUcmFja3MgaGFtbW9jaz8nLFxuICAgIGFuc3dlcjogJ1NhZmV0eTogSW4gc2V0IHVwLCBpbnN1cmUgdGhhdCB5b3VyIHN0cmFwcyBhcmUgc2VjdXJlbHkgd3JhcHBlZCBhbmQgdGhlIGNhcmFiaW5lcnMgYXJlIGNsb3NlZC4gRWFzZSBpbnRvIHlvdXIgaGFtbW9jayBzbG93bHkgdG8gbWFrZSBzdXJlIGl0IGhhbmdzIHNlY3VyZWx5LicsXG4gICAgdGlwMTogJ1VWIERhbWFnZTogVVYgZGFtYWdlIGNhbiBtYWtlIHRoZSBoYW1tb2NrIGZhZGUgaW4gY29sb3IgYW5kIHdlYWtlbiB0aGUgZmFicmljIHdoaWNoIGxlYWRzIHRvIHRlYXJpbmcuIFdlIHJlY29tbWVuZCB3aGVuIHRoZSBoYW1tb2NrIGlzIG5vdCBpbiB1c2U7IHBhY2sgaXQgaW4gaXRzIHNhY2sgYW5kIHN0b3JlIHNvbWV3aGVyZSBkcnkgYW5kIGNvb2wuJ1xuICB9LCB7XG4gICAgcXVlc3Rpb246ICdEb2VzIHRoZSBoYW1tb2NrIGNvbWUgd2l0aCBzdHJhcHM/JyxcbiAgICBhbnN3ZXI6ICdPdXIgaGFtbW9jayBwYWNrYWdlIGNvbWVzIHdpdGggZXZlcnl0aGluZyB5b3UgbmVlZCBmb3IgYSBncmVhdCBoYW1tb2NrIGV4cGVyaWVuY2UuIFdlIHVzZSBlbmQtc3RyYXBzIGluc3RlYWQgb2Yga25vdGVkIHJvcGUgdG8gYXR0YWNoIHRvIG91ciBjYXJhYmluZXJzIGZvciB0aGVpciByZWxpYWJpbGl0eSBhbmQgc3RyZW5ndGguIFRoZSBwYWNrYWdlIGFsc28gY29tZXMgd2l0aCB0cmVlLXNsZWV2ZXMsIHdoaWNoIGhhcyBwcmUta25vdGVkIHJvcGUgYW5kIGVuY2FzZWQgYnkgYSBueWxvbiBtYXRlcmlhbCBzbyBwcm90ZWN0IHRoZSByb3BlIGZyb20gZnJheWluZy4nXG4gIH0sIHtcbiAgICBxdWVzdGlvbjogJ1dpbGwgSSBuZWVkIHN0cmFwcyB0byB1c2UgdGhlIGhhbW1vY2s/JyxcbiAgICBhbnN3ZXI6ICdObywgeW91IG5vdCBuZWVkIGFueSBleHRyYSBzdHJhcHMgdGhlbiB3aGF0IHRoZSBoYW1tb2NrIHBhY2thZ2UgY29tZXMgd2l0aC4nXG4gIH0sIHtcbiAgICBxdWVzdGlvbjogJ1doYXQgaXMgdGhlIG1heGltdW0gd2VpZ2h0IGNhcGFjaXR5IG9mIG91ciBoYW1tb2Nrcz8nLFxuICAgIGFuc3dlcjogJzgwMCBsYnMhJ1xuICB9LCB7XG4gICAgcXVlc3Rpb246ICdXaGF0IGFyZSB0aGUgZGltZW5zaW9ucyBvZiB5b3VyIGhhbW1vY2tzPycsXG4gICAgYW5zd2VyOiAnRG91YmxlIFRyYWNrIGhhbW1vY2s6IDEwIHggNi41IGZlZXQuJ1xuICB9LCB7XG4gICAgcXVlc3Rpb246ICdIb3cgaGlnaCBkbyBJIG5lZWQgdG8gaGFuZyB0aGUgaGFtbW9jaz8nLFxuICAgIGFuc3dlcjogJ0hvdyBoaWdoIGRvIEkgbmVlZCB0byBoYW5nIHRoZSBoYW1tb2NrPydcbiAgfSwge1xuICAgIHF1ZXN0aW9uOiAnRm9yIHNldCB1cCwgd2hhdCBpcyB0aGUgYmVzdCBsZW5ndGggdG8gaGF2ZSBiZXR3ZWVuIGVuZHMgb2YgdGhlIGhhbW1vY2s/JyxcbiAgICBhbnN3ZXI6ICdUaGUgYmVzdCBzZXQgdXAgaXMgYXJvdW5kIDEyIGZlZXQgZnJvbSBlbmQgdG8gZW5kLidcbiAgfSwge1xuICAgIHF1ZXN0aW9uOiAnV2hhdCBhcmUgdGhlIE1ha2UgVHJhY2tzIGhhbW1vY2tzIG1hZGUgb2Y/JyxcbiAgICBhbnN3ZXI6ICdBbGwgb3VyIGhhbW1vY2tzIGFyZSBtYWRlIG9mIHBvcm91cywgYnJlYXRoYWJsZSBueWxvbiB0YWZmZXRhLiBUaGlzIHBvcm91cyBxdWFsaXR5IGxlbmRzIGl0c2VsZiB0byBhIGNvb2wgYW5kIGNvbWZvcnRhYmxlIGV4cGVyaWVuY2UuJ1xuICB9LCB7XG4gICAgcXVlc3Rpb246ICdXaWxsIG15IGRvZ3Mgb3IgY2F0cyBuYWlscyBwdW5jdHVyZSB0aGUgaGFtbW9jaz8nLFxuICAgIGFuc3dlcjogJ0l0IGlzIGRlZmluaXRlbHkgcG9zc2libGUsIGJlIGNhdXRpb3VzISdcbiAgfSwge1xuICAgIHF1ZXN0aW9uOiAnQXJlIHlvdXIgaGFtbW9ja3Mgd2F0ZXJwcm9vZj8nLFxuICAgIGFuc3dlcjogJ01ha2UgVHJhY2tzIGhhbW1vY2tzIGFyZSB3YXRlciByZXNpc3RhbnQgbm90IHdhdGVycHJvb2YuJ1xuICB9XVxuXG4gIHRoaXMuZ2V0RmFxcyA9ICgpID0+IHtcbiAgICBsZXQgZmFxcyA9IHRoaXMuZmFxO1xuICAgIHJldHVybiBmYXFzO1xuICB9XG5cbn0pLy9lbmQgb2Ygc2VydmljZTtcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJykuZGlyZWN0aXZlKCdjdXN0b21Gb290ZXInLCAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2Zvb3Rlci5odG1sJ1xuICB9O1xufSkgLy9lbmQgb2YgbmF2YmFyIGRpcmVjdGl2ZVxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5kaXJlY3RpdmUoJ25hdmJhcicsICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvbmF2YmFyLmh0bWwnXG4gIH07XG59KSAvL2VuZCBvZiBuYXZiYXIgZGlyZWN0aXZlXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpXG4uZGlyZWN0aXZlKCdzbGlkZWFibGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6J0MnLFxuICAgICAgICBjb21waWxlOiBmdW5jdGlvbiAoZWxlbWVudCwgYXR0cikge1xuICAgICAgICAgICAgLy8gd3JhcCB0YWdcbiAgICAgICAgICAgIHZhciBjb250ZW50cyA9IGVsZW1lbnQuaHRtbCgpO1xuICAgICAgICAgICAgZWxlbWVudC5odG1sKCc8ZGl2IGNsYXNzPVwic2xpZGVhYmxlX2NvbnRlbnRcIiBzdHlsZT1cIm1hcmdpbjowICFpbXBvcnRhbnQ7IHBhZGRpbmc6MCAhaW1wb3J0YW50XCIgPicgKyBjb250ZW50cyArICc8L2Rpdj4nKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHBvc3RMaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICAgICAgICAgIC8vIGRlZmF1bHQgcHJvcGVydGllc1xuICAgICAgICAgICAgICAgIGF0dHJzLmR1cmF0aW9uID0gKCFhdHRycy5kdXJhdGlvbikgPyAnMXMnIDogYXR0cnMuZHVyYXRpb247XG4gICAgICAgICAgICAgICAgYXR0cnMuZWFzaW5nID0gKCFhdHRycy5lYXNpbmcpID8gJ2Vhc2UtaW4tb3V0JyA6IGF0dHJzLmVhc2luZztcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICdvdmVyZmxvdyc6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICAnaGVpZ2h0JzogJzBweCcsXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uUHJvcGVydHknOiAnaGVpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25EdXJhdGlvbic6IGF0dHJzLmR1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAndHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uJzogYXR0cnMuZWFzaW5nXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfTtcbn0pXG4uZGlyZWN0aXZlKCdzbGlkZVRvZ2dsZScsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYXR0cnMuc2xpZGVUb2dnbGUpO1xuICAgICAgICAgICAgYXR0cnMuZXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGVsZW1lbnQuYmluZCgnY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29udGVudCA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVhYmxlX2NvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICBpZighYXR0cnMuZXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkIHJnYmEoMCwwLDAsMCknO1xuICAgICAgICAgICAgICAgICAgICB2YXIgeSA9IGNvbnRlbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLmJvcmRlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSB5ICsgJ3B4JztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF0dHJzLmV4cGFuZGVkID0gIWF0dHJzLmV4cGFuZGVkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJykuY29udHJvbGxlcignZmFxQ3RybCcsICgkc2NvcGUsIG91dHBvc3RTcnZjLCAkc3RhdGVQYXJhbXMpID0+IHtcblxuICAkc2NvcGUuZmFxcyA9IG91dHBvc3RTcnZjLmdldEZhcXMoKTtcbiAgY29uc29sZS5sb2coJHNjb3BlLmZhcXMpO1xuXG4gIC8vICQoJy5xdWVzdGlvbicpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgLy8gICAkKHRoaXMpLm5leHQoJy5vcGVuJykuc2xpZGVUb2dnbGUoKTtcbiAgLy8gfSk7XG5cbn0pLy9lbmQgb2YgY29udHJvbGxlclxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5jb250cm9sbGVyKCdoYW1tb2NrQ3RybCcsICgkc2NvcGUsIGhhbW1vY2tTcnZjLCAkc3RhdGVQYXJhbXMpID0+IHtcblxuICAkc2NvcGUuaGFtbW9ja3MgPSBoYW1tb2NrU3J2Yy5nZXRIYW1tb2NrcygpO1xuICBjb25zb2xlLmxvZygkc2NvcGUuaGFtbW9ja3MpO1xuXG59KS8vZW5kIG9mIGhvbWUgY29udHJvbGxlclxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKVxuLmNvbnRyb2xsZXIoJ2hhbW1vY2tEZXRhaWxzQ3RybCcsICgkc2NvcGUsIGhhbW1vY2tTcnZjLCAkc3RhdGVQYXJhbXMpID0+IHtcblxuICAkc2NvcGUuaGFtbW9jayA9IGhhbW1vY2tTcnZjLmdldEhhbW1vY2tEZXRhaWxzKCRzdGF0ZVBhcmFtcyk7XG4gIGNvbnNvbGUubG9nKCRzY29wZS5oYW1tb2NrKTtcblxuICAkKFwiI3Njcm9sbC1zcGVjc1wiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICBzY3JvbGxUb3A6ICQoXCIjc3BlY3NcIikub2Zmc2V0KCkudG9wXG4gICAgICB9LCAxMDAwKTtcbiAgfSk7XG4gICQoXCIjc2Nyb2xsLXNldHVwXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgIHNjcm9sbFRvcDogJChcIiNzcGVjc1wiKS5vZmZzZXQoKS50b3BcbiAgICAgIH0sIDEwMDApO1xuICB9KTtcbiAgJChcIiNzY3JvbGwtcmV0dXJuc1wiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICBzY3JvbGxUb3A6ICQoXCIjc3BlY3NcIikub2Zmc2V0KCkudG9wXG4gICAgICB9LCAxMDAwKTtcbiAgfSk7XG5cbn0pXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpXG4uY29udHJvbGxlcignaG9tZUN0cmwnLCAoJHNjb3BlLCBoYW1tb2NrU3J2YywgJHN0YXRlUGFyYW1zKSA9PiB7XG5cbiAgJHNjb3BlLmJlc3RTZWxsZXJzID0gaGFtbW9ja1NydmMuZ2V0QmVzdFNlbGxlcnMoKTtcbiAgY29uc29sZS5sb2coJHNjb3BlLmJlc3RTZWxsZXJzKTtcblxufSkvL2VuZCBvZiBob21lIGNvbnRyb2xsZXJcbiJdfQ==
