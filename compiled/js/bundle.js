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
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes come with pretied knots!',
        price: 35.97
    }, {
        id: 2,
        name: 'The Geyser',
        color: 'Light Blue/Blue',
        image: "../img/hammocks/bluehammock.jpg",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes come with pretied knots!',
        price: 35.97
    }, {
        id: 5,
        name: 'The Meadow',
        color: 'Lime Green/ Light Blue/ White',
        image: "../img/hammocks/meadowhammock.jpg",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes come with pretied knots!',
        price: 35.97
    }];

    this.hammocks = [{
        id: 1,
        name: 'The Sunrise',
        color: 'orange/gray',
        image: "../img/hammocks/sunrise.jpg",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes come with pretied knots!',
        price: 35.97
    }, {
        id: 2,
        name: 'The Geyser',
        color: 'blue/light blue',
        image: "../img/hammocks/bluehammock.jpg",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes come with pretied knots!',
        price: 35.97
    }, {
        id: 3,
        name: 'The Woodland',
        color: 'green/gray',
        image: "../img/hammocks/greenhammock.jpg",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes come with pretied knots!',
        price: 35.97
    }, {
        id: 4,
        name: 'The Summit',
        color: 'charcoal/maroon',
        image: "../img/hammocks/summit.jpg",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes come with pretied knots!',
        price: 35.97
    }, {
        id: 5,
        name: 'The Meadow',
        color: 'lime green/ light blue/ white',
        image: "../img/hammocks/meadowhammock.jpg",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes come with pretied knots!',
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbnRyb2xsZXJzL2ZhcUN0cmwuanMiLCJjb250cm9sbGVycy9oYW1tb2NrQ3RybC5qcyIsImNvbnRyb2xsZXJzL2hhbW1vY2tEZXRhaWxzQ3RybC5qcyIsImNvbnRyb2xsZXJzL2hvbWVDdHJsLmpzIiwiZGlyZWN0aXZlcy9mb290ZXIuanMiLCJkaXJlY3RpdmVzL25hdmJhci5qcyIsImRpcmVjdGl2ZXMvc2xpZGVhYmxlLmpzIiwic2VydmljZXMvaGFtbW9ja1NydmMuanMiLCJzZXJ2aWNlcy9vdXRwb3N0U3J2Yy5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCJzdGF0ZSIsInVybCIsInRlbXBsYXRlVXJsIiwiY29udHJvbGxlciIsIm90aGVyd2lzZSIsIiRzY29wZSIsIm91dHBvc3RTcnZjIiwiJHN0YXRlUGFyYW1zIiwiZmFxcyIsImdldEZhcXMiLCJjb25zb2xlIiwibG9nIiwiaGFtbW9ja1NydmMiLCJoYW1tb2NrcyIsImdldEhhbW1vY2tzIiwiaGFtbW9jayIsImdldEhhbW1vY2tEZXRhaWxzIiwiYmVzdFNlbGxlcnMiLCJnZXRCZXN0U2VsbGVycyIsImRpcmVjdGl2ZSIsInJlc3RyaWN0IiwiY29tcGlsZSIsImVsZW1lbnQiLCJhdHRyIiwiY29udGVudHMiLCJodG1sIiwicG9zdExpbmsiLCJzY29wZSIsImF0dHJzIiwiZHVyYXRpb24iLCJlYXNpbmciLCJjc3MiLCJsaW5rIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2xpZGVUb2dnbGUiLCJleHBhbmRlZCIsImJpbmQiLCJjb250ZW50Iiwic3R5bGUiLCJib3JkZXIiLCJ5IiwiY2xpZW50SGVpZ2h0IiwiaGVpZ2h0Iiwic2VydmljZSIsImlkIiwibmFtZSIsImNvbG9yIiwiaW1hZ2UiLCJzdGF0dXMiLCJkZXNjIiwicHJpY2UiLCJzdGF0ZVBhcmFtcyIsImhhbW1vY2tEZXRhaWxzIiwiaSIsImxlbmd0aCIsInBhcnNlSW50IiwiZmFxIiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJ0aXAxIiwidGlwMiJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsUUFBUUMsTUFBUixDQUFlLFlBQWYsRUFBNkIsQ0FBQyxXQUFELENBQTdCLEVBQ0dDLE1BREgsQ0FDVSxVQUFTQyxjQUFULEVBQXlCQyxrQkFBekIsRUFBNEM7O0FBRWxERCxtQkFDR0UsS0FESCxDQUNTLE1BRFQsRUFDZ0I7QUFDVkMsYUFBSSxHQURNO0FBRVZDLHFCQUFhLG1CQUZIO0FBR1ZDLG9CQUFZO0FBSEYsS0FEaEIsRUFNR0gsS0FOSCxDQU1TLE9BTlQsRUFNaUI7QUFDWEMsYUFBSSxRQURPO0FBRVhDLHFCQUFhO0FBRkYsS0FOakIsRUFVR0YsS0FWSCxDQVVTLFVBVlQsRUFVb0I7QUFDZEMsYUFBSSxXQURVO0FBRWRDLHFCQUFhLHVCQUZDO0FBR2RDLG9CQUFZO0FBSEUsS0FWcEIsRUFlR0gsS0FmSCxDQWVTLGdCQWZULEVBZTBCO0FBQ3BCQyxhQUFJLHFCQURnQjtBQUVwQkMscUJBQWEsOEJBRk87QUFHcEJDLG9CQUFZO0FBSFEsS0FmMUIsRUFvQkdILEtBcEJILENBb0JTLHNCQXBCVCxFQW9CZ0M7QUFDMUJDLGFBQUksbUJBRHNCO0FBRTFCQyxxQkFBYTtBQUZhLEtBcEJoQyxFQXdCR0YsS0F4QkgsQ0F3QlMsc0JBeEJULEVBd0JnQztBQUMxQkMsYUFBSSxlQURzQjtBQUUxQkMscUJBQWE7QUFGYSxLQXhCaEMsRUE0QkdGLEtBNUJILENBNEJTLHdCQTVCVCxFQTRCa0M7QUFDNUJDLGFBQUksaUJBRHdCO0FBRTVCQyxxQkFBYTtBQUZlLEtBNUJsQyxFQWdDR0YsS0FoQ0gsQ0FnQ1MsU0FoQ1QsRUFnQ21CO0FBQ2JDLGFBQUksVUFEUztBQUViQyxxQkFBYTtBQUZBLEtBaENuQixFQW9DR0YsS0FwQ0gsQ0FvQ1MsYUFwQ1QsRUFvQ3VCO0FBQ2pCQyxhQUFJLE1BRGE7QUFFakJDLHFCQUFhLGtCQUZJO0FBR2pC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QUhRLEVBUVQ7QUFDQUgsY0FBVSwyQ0FEVjtBQUVBQyxZQUFRLDhKQUZSO0FBR0FDLFVBQU07QUFITixHQVJTLEVBWVI7QUFDREYsY0FBVSxvQ0FEVDtBQUVEQyxZQUFRO0FBRlAsR0FaUSxFQWVSO0FBQ0RELGNBQVUsd0NBRFQ7QUFFREMsWUFBUTtBQUZQLEdBZlEsRUFrQlI7QUFDREQsY0FBVSxzREFEVDtBQUVEQyxZQUFRO0FBRlAsR0FsQlEsRUFxQlI7QUFDREQsY0FBVSwyQ0FEVDtBQUVEQyxZQUFRO0FBRlAsR0FyQlEsRUF3QlI7QUFDREQsY0FBVSx5Q0FEVDtBQUVEQyxZQUFRO0FBRlAsR0F4QlEsRUEyQlI7QUFDREQsY0FBVSwwRUFEVDtBQUVEQyxZQUFRO0FBRlAsR0EzQlEsRUE4QlI7QUFDREQsY0FBVSw0Q0FEVDtBQUVEQyxZQUFRO0FBRlAsR0E5QlEsRUFpQ1I7QUFDREQsY0FBVSxrREFEVDtBQUVEQyxZQUFRO0FBRlAsR0FqQ1EsRUFvQ1I7QUFDREQsY0FBVSwrQkFEVDtBQUVEQyxZQUFRO0FBRlAsR0FwQ1EsQ0FBWDs7QUF5Q0EsT0FBS25ELE9BQUwsR0FBZSxZQUFNO0FBQ25CLFFBQUlELE9BQU8sTUFBS2tELEdBQWhCO0FBQ0EsV0FBT2xELElBQVA7QUFDRCxHQUhEO0FBS0QsQ0FoREQsR0FnREUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnLCBbJ3VpLnJvdXRlciddKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpe1xuXG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgnaG9tZScse1xuICAgICAgICAgIHVybDonLycsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6IFwiLi92aWV3cy9ob21lLmh0bWxcIixcbiAgICAgICAgICBjb250cm9sbGVyOiAnaG9tZUN0cmwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdzdG9yeScse1xuICAgICAgICAgIHVybDonL3N0b3J5JyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3Mvc3RvcnkuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2hhbW1vY2tzJyx7XG4gICAgICAgICAgdXJsOicvaGFtbW9ja3MnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9oYW1tb2Nrcy5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnaGFtbW9ja0N0cmwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdoYW1tb2NrRGV0YWlscycse1xuICAgICAgICAgIHVybDonL2hhbW1vY2tEZXRhaWxzLzppZCcsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2hhbW1vY2stZGV0YWlscy5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnaGFtbW9ja0RldGFpbHNDdHJsJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnaGFtbW9ja0RldGFpbHMuc3BlY3MnLHtcbiAgICAgICAgICB1cmw6Jy9oYW1tb2NrU3BlY3MvOmlkJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvaGFtbW9ja1NwZWNzLmh0bWwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdoYW1tb2NrRGV0YWlscy5zZXR1cCcse1xuICAgICAgICAgIHVybDonL2hhbW1vY2tTZXR1cCcsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2hhbW1vY2tTZXR1cC5odG1sJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnaGFtbW9ja0RldGFpbHMucmV0dXJucycse1xuICAgICAgICAgIHVybDonL2hhbW1vY2tSZXR1cm5zJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvaGFtbW9ja1JldHVybnMuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ291dHBvc3QnLHtcbiAgICAgICAgICB1cmw6Jy9vdXRwb3N0JyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3Mvb3V0cG9zdC5odG1sJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnb3V0cG9zdC5mYXEnLHtcbiAgICAgICAgICB1cmw6Jy9mYXEnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9mYXEuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ2ZhcUN0cmwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdvdXRwb3N0LnJlZnVuZHMnLHtcbiAgICAgICAgICB1cmw6Jy9yZWZ1bmRzJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvcmVmdW5kcy5odG1sJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnb3V0cG9zdC52aWRlb3MnLHtcbiAgICAgICAgICB1cmw6Jy92aWRlb3MnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy92aWRlb3MuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2NvbnRhY3QnLHtcbiAgICAgICAgICB1cmw6Jy9jb250YWN0JyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvY29udGFjdC5odG1sJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnam9pbicse1xuICAgICAgICAgIHVybDonL2pvaW4nLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9qb2luLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdqb2luQ3RybCdcbiAgICAgIH0pO1xuXG4gICR1cmxSb3V0ZXJQcm92aWRlclxuICAgICAgLm90aGVyd2lzZSgnLycpO1xuXG5cbn0pO1xuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5jb250cm9sbGVyKCdmYXFDdHJsJywgKCRzY29wZSwgb3V0cG9zdFNydmMsICRzdGF0ZVBhcmFtcykgPT4ge1xuXG4gICRzY29wZS5mYXFzID0gb3V0cG9zdFNydmMuZ2V0RmFxcygpO1xuICBjb25zb2xlLmxvZygkc2NvcGUuZmFxcyk7XG5cbiAgLy8gJCgnLnF1ZXN0aW9uJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAvLyAgICQodGhpcykubmV4dCgnLm9wZW4nKS5zbGlkZVRvZ2dsZSgpO1xuICAvLyB9KTtcblxufSkvL2VuZCBvZiBjb250cm9sbGVyXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpLmNvbnRyb2xsZXIoJ2hhbW1vY2tDdHJsJywgKCRzY29wZSwgaGFtbW9ja1NydmMsICRzdGF0ZVBhcmFtcykgPT4ge1xuXG4gICRzY29wZS5oYW1tb2NrcyA9IGhhbW1vY2tTcnZjLmdldEhhbW1vY2tzKCk7XG4gIGNvbnNvbGUubG9nKCRzY29wZS5oYW1tb2Nrcyk7XG5cbn0pLy9lbmQgb2YgaG9tZSBjb250cm9sbGVyXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpXG4uY29udHJvbGxlcignaGFtbW9ja0RldGFpbHNDdHJsJywgKCRzY29wZSwgaGFtbW9ja1NydmMsICRzdGF0ZVBhcmFtcykgPT4ge1xuXG4gICRzY29wZS5oYW1tb2NrID0gaGFtbW9ja1NydmMuZ2V0SGFtbW9ja0RldGFpbHMoJHN0YXRlUGFyYW1zKTtcbiAgY29uc29sZS5sb2coJHNjb3BlLmhhbW1vY2spO1xuXG5cbn0pXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpXG4uY29udHJvbGxlcignaG9tZUN0cmwnLCAoJHNjb3BlLCBoYW1tb2NrU3J2YywgJHN0YXRlUGFyYW1zKSA9PiB7XG5cbiAgJHNjb3BlLmJlc3RTZWxsZXJzID0gaGFtbW9ja1NydmMuZ2V0QmVzdFNlbGxlcnMoKTtcbiAgY29uc29sZS5sb2coJHNjb3BlLmJlc3RTZWxsZXJzKTtcblxufSkvL2VuZCBvZiBob21lIGNvbnRyb2xsZXJcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJykuZGlyZWN0aXZlKCdjdXN0b21Gb290ZXInLCAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2Zvb3Rlci5odG1sJ1xuICB9O1xufSkgLy9lbmQgb2YgbmF2YmFyIGRpcmVjdGl2ZVxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5kaXJlY3RpdmUoJ25hdmJhcicsICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvbmF2YmFyLmh0bWwnXG4gIH07XG59KSAvL2VuZCBvZiBuYXZiYXIgZGlyZWN0aXZlXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpXG4uZGlyZWN0aXZlKCdzbGlkZWFibGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6J0MnLFxuICAgICAgICBjb21waWxlOiBmdW5jdGlvbiAoZWxlbWVudCwgYXR0cikge1xuICAgICAgICAgICAgLy8gd3JhcCB0YWdcbiAgICAgICAgICAgIHZhciBjb250ZW50cyA9IGVsZW1lbnQuaHRtbCgpO1xuICAgICAgICAgICAgZWxlbWVudC5odG1sKCc8ZGl2IGNsYXNzPVwic2xpZGVhYmxlX2NvbnRlbnRcIiBzdHlsZT1cIm1hcmdpbjowICFpbXBvcnRhbnQ7IHBhZGRpbmc6MCAhaW1wb3J0YW50XCIgPicgKyBjb250ZW50cyArICc8L2Rpdj4nKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHBvc3RMaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICAgICAgICAgIC8vIGRlZmF1bHQgcHJvcGVydGllc1xuICAgICAgICAgICAgICAgIGF0dHJzLmR1cmF0aW9uID0gKCFhdHRycy5kdXJhdGlvbikgPyAnMXMnIDogYXR0cnMuZHVyYXRpb247XG4gICAgICAgICAgICAgICAgYXR0cnMuZWFzaW5nID0gKCFhdHRycy5lYXNpbmcpID8gJ2Vhc2UtaW4tb3V0JyA6IGF0dHJzLmVhc2luZztcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICdvdmVyZmxvdyc6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICAnaGVpZ2h0JzogJzBweCcsXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uUHJvcGVydHknOiAnaGVpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25EdXJhdGlvbic6IGF0dHJzLmR1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAndHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uJzogYXR0cnMuZWFzaW5nXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfTtcbn0pXG4uZGlyZWN0aXZlKCdzbGlkZVRvZ2dsZScsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYXR0cnMuc2xpZGVUb2dnbGUpO1xuICAgICAgICAgICAgYXR0cnMuZXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGVsZW1lbnQuYmluZCgnY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29udGVudCA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVhYmxlX2NvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICBpZighYXR0cnMuZXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkIHJnYmEoMCwwLDAsMCknO1xuICAgICAgICAgICAgICAgICAgICB2YXIgeSA9IGNvbnRlbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLmJvcmRlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSB5ICsgJ3B4JztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF0dHJzLmV4cGFuZGVkID0gIWF0dHJzLmV4cGFuZGVkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJykuc2VydmljZSgnaGFtbW9ja1NydmMnLCBmdW5jdGlvbigpe1xuXG5cbiAgdGhpcy5iZXN0U2VsbGVycyA9IFt7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiAnVGhlIFN1bnJpc2UnLFxuICAgICAgICBjb2xvcjogJ09yYW5nZS9HcmV5JyxcbiAgICAgICAgaW1hZ2U6IFwiLi4vaW1nL2hhbW1vY2tzL3N1bnJpc2UuanBnXCIsXG4gICAgICAgIHN0YXR1czogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGRlc2M6ICdUaGUgYmVzdCBoYW1tb2NrIG91dCB0aGVyZSEgR3JlYXQgZm9yIDEsIHBlcmZlY3QgZm9yIDIuIEVhc2lseSB0cmFuc3BvcnRhYmxlIGFuZCBzdHVmZnMgcmlnaHQgaW50byB0aGUgYXR0YWNoZWQgc2Fjay4gU2V0IHVwIGluIHNlY29uZHMgYmVjYXVzZSBvdXIgcm9wZXMgY29tZSB3aXRoIHByZXRpZWQga25vdHMhJyxcbiAgICAgICAgcHJpY2U6IDM1Ljk3XG4gICAgfSwge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogJ1RoZSBHZXlzZXInLFxuICAgICAgICBjb2xvcjogJ0xpZ2h0IEJsdWUvQmx1ZScsXG4gICAgICAgIGltYWdlOiBcIi4uL2ltZy9oYW1tb2Nrcy9ibHVlaGFtbW9jay5qcGdcIixcbiAgICAgICAgc3RhdHVzOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgZGVzYzogJ1RoZSBiZXN0IGhhbW1vY2sgb3V0IHRoZXJlISBHcmVhdCBmb3IgMSwgcGVyZmVjdCBmb3IgMi4gRWFzaWx5IHRyYW5zcG9ydGFibGUgYW5kIHN0dWZmcyByaWdodCBpbnRvIHRoZSBhdHRhY2hlZCBzYWNrLiBTZXQgdXAgaW4gc2Vjb25kcyBiZWNhdXNlIG91ciByb3BlcyBjb21lIHdpdGggcHJldGllZCBrbm90cyEnLFxuICAgICAgICBwcmljZTogMzUuOTdcbiAgICB9LHtcbiAgICAgICAgaWQ6IDUsXG4gICAgICAgIG5hbWU6ICdUaGUgTWVhZG93JyxcbiAgICAgICAgY29sb3I6ICdMaW1lIEdyZWVuLyBMaWdodCBCbHVlLyBXaGl0ZScsXG4gICAgICAgIGltYWdlOiBcIi4uL2ltZy9oYW1tb2Nrcy9tZWFkb3doYW1tb2NrLmpwZ1wiLFxuICAgICAgICBzdGF0dXM6ICdDb21pbmcgTWF5IDIwMTcnLFxuICAgICAgICBkZXNjOiAnVGhlIGJlc3QgaGFtbW9jayBvdXQgdGhlcmUhIEdyZWF0IGZvciAxLCBwZXJmZWN0IGZvciAyLiBFYXNpbHkgdHJhbnNwb3J0YWJsZSBhbmQgc3R1ZmZzIHJpZ2h0IGludG8gdGhlIGF0dGFjaGVkIHNhY2suIFNldCB1cCBpbiBzZWNvbmRzIGJlY2F1c2Ugb3VyIHJvcGVzIGNvbWUgd2l0aCBwcmV0aWVkIGtub3RzIScsXG4gICAgICAgIHByaWNlOiAzNS45N1xuICAgIH1dXG5cbiAgdGhpcy5oYW1tb2NrcyA9IFt7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiAnVGhlIFN1bnJpc2UnLFxuICAgICAgICBjb2xvcjogJ29yYW5nZS9ncmF5JyxcbiAgICAgICAgaW1hZ2U6IFwiLi4vaW1nL2hhbW1vY2tzL3N1bnJpc2UuanBnXCIsXG4gICAgICAgIHN0YXR1czogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGRlc2M6ICdUaGUgYmVzdCBoYW1tb2NrIG91dCB0aGVyZSEgR3JlYXQgZm9yIDEsIHBlcmZlY3QgZm9yIDIuIEVhc2lseSB0cmFuc3BvcnRhYmxlIGFuZCBzdHVmZnMgcmlnaHQgaW50byB0aGUgYXR0YWNoZWQgc2Fjay4gU2V0IHVwIGluIHNlY29uZHMgYmVjYXVzZSBvdXIgcm9wZXMgY29tZSB3aXRoIHByZXRpZWQga25vdHMhJyxcbiAgICAgICAgcHJpY2U6IDM1Ljk3XG4gICAgfSwge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogJ1RoZSBHZXlzZXInLFxuICAgICAgICBjb2xvcjogJ2JsdWUvbGlnaHQgYmx1ZScsXG4gICAgICAgIGltYWdlOiBcIi4uL2ltZy9oYW1tb2Nrcy9ibHVlaGFtbW9jay5qcGdcIixcbiAgICAgICAgc3RhdHVzOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgZGVzYzogJ1RoZSBiZXN0IGhhbW1vY2sgb3V0IHRoZXJlISBHcmVhdCBmb3IgMSwgcGVyZmVjdCBmb3IgMi4gRWFzaWx5IHRyYW5zcG9ydGFibGUgYW5kIHN0dWZmcyByaWdodCBpbnRvIHRoZSBhdHRhY2hlZCBzYWNrLiBTZXQgdXAgaW4gc2Vjb25kcyBiZWNhdXNlIG91ciByb3BlcyBjb21lIHdpdGggcHJldGllZCBrbm90cyEnLFxuICAgICAgICBwcmljZTogMzUuOTdcbiAgICB9LHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIG5hbWU6ICdUaGUgV29vZGxhbmQnLFxuICAgICAgICBjb2xvcjogJ2dyZWVuL2dyYXknLFxuICAgICAgICBpbWFnZTogXCIuLi9pbWcvaGFtbW9ja3MvZ3JlZW5oYW1tb2NrLmpwZ1wiLFxuICAgICAgICBzdGF0dXM6ICdDb21pbmcgTWF5IDIwMTcnLFxuICAgICAgICBkZXNjOiAnVGhlIGJlc3QgaGFtbW9jayBvdXQgdGhlcmUhIEdyZWF0IGZvciAxLCBwZXJmZWN0IGZvciAyLiBFYXNpbHkgdHJhbnNwb3J0YWJsZSBhbmQgc3R1ZmZzIHJpZ2h0IGludG8gdGhlIGF0dGFjaGVkIHNhY2suIFNldCB1cCBpbiBzZWNvbmRzIGJlY2F1c2Ugb3VyIHJvcGVzIGNvbWUgd2l0aCBwcmV0aWVkIGtub3RzIScsXG4gICAgICAgIHByaWNlOiAzNS45N1xuICAgIH0se1xuICAgICAgICBpZDogNCxcbiAgICAgICAgbmFtZTogJ1RoZSBTdW1taXQnLFxuICAgICAgICBjb2xvcjogJ2NoYXJjb2FsL21hcm9vbicsXG4gICAgICAgIGltYWdlOiBcIi4uL2ltZy9oYW1tb2Nrcy9zdW1taXQuanBnXCIsXG4gICAgICAgIHN0YXR1czogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGRlc2M6ICdUaGUgYmVzdCBoYW1tb2NrIG91dCB0aGVyZSEgR3JlYXQgZm9yIDEsIHBlcmZlY3QgZm9yIDIuIEVhc2lseSB0cmFuc3BvcnRhYmxlIGFuZCBzdHVmZnMgcmlnaHQgaW50byB0aGUgYXR0YWNoZWQgc2Fjay4gU2V0IHVwIGluIHNlY29uZHMgYmVjYXVzZSBvdXIgcm9wZXMgY29tZSB3aXRoIHByZXRpZWQga25vdHMhJyxcbiAgICAgICAgcHJpY2U6IDM1Ljk3XG4gICAgfSx7XG4gICAgICAgIGlkOiA1LFxuICAgICAgICBuYW1lOiAnVGhlIE1lYWRvdycsXG4gICAgICAgIGNvbG9yOiAnbGltZSBncmVlbi8gbGlnaHQgYmx1ZS8gd2hpdGUnLFxuICAgICAgICBpbWFnZTogXCIuLi9pbWcvaGFtbW9ja3MvbWVhZG93aGFtbW9jay5qcGdcIixcbiAgICAgICAgc3RhdHVzOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgZGVzYzogJ1RoZSBiZXN0IGhhbW1vY2sgb3V0IHRoZXJlISBHcmVhdCBmb3IgMSwgcGVyZmVjdCBmb3IgMi4gRWFzaWx5IHRyYW5zcG9ydGFibGUgYW5kIHN0dWZmcyByaWdodCBpbnRvIHRoZSBhdHRhY2hlZCBzYWNrLiBTZXQgdXAgaW4gc2Vjb25kcyBiZWNhdXNlIG91ciByb3BlcyBjb21lIHdpdGggcHJldGllZCBrbm90cyEnLFxuICAgICAgICBwcmljZTogMzUuOTdcbiAgICB9XVxuXG4gICAgdGhpcy5nZXRCZXN0U2VsbGVycyA9ICgpID0+IHtcbiAgICAgIGxldCBiZXN0U2VsbGVycyA9IHRoaXMuYmVzdFNlbGxlcnM7XG4gICAgICByZXR1cm4gYmVzdFNlbGxlcnM7XG4gICAgfVxuXG4gICAgdGhpcy5nZXRIYW1tb2NrcyA9ICgpID0+IHtcbiAgICAgIGxldCBoYW1tb2NrcyA9IHRoaXMuaGFtbW9ja3M7XG4gICAgICByZXR1cm4gaGFtbW9ja3M7XG4gICAgfVxuXG4gICAgdGhpcy5nZXRIYW1tb2NrRGV0YWlscyA9IChzdGF0ZVBhcmFtcykgPT4ge1xuICAgICAgbGV0IGhhbW1vY2tEZXRhaWxzID0gdGhpcy5oYW1tb2NrcztcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBoYW1tb2NrRGV0YWlscy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnNvbGUubG9nKGhhbW1vY2tEZXRhaWxzLCBzdGF0ZVBhcmFtcyk7XG4gICAgICAgIGlmKGhhbW1vY2tEZXRhaWxzW2ldLmlkID09PSBwYXJzZUludChzdGF0ZVBhcmFtcy5pZCkpe1xuICAgICAgICAgIHJldHVybiBoYW1tb2NrRGV0YWlsc1tpXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG5cblxuXG59KS8vZW5kIG9mIHNlcnZpY2VcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJykuc2VydmljZSgnb3V0cG9zdFNydmMnLCBmdW5jdGlvbigpe1xuXG4gIHRoaXMuZmFxID0gW3tcbiAgICBxdWVzdGlvbjogJ1dhbnRpbmcgdG8gYnV5IGEgaGFtbW9jaz8gSGVyZSBpcyBob3cgdG8gZ2V0IHN0YXJ0ZWQ/JyxcbiAgICBhbnN3ZXI6ICdPdXIgZ29hbCBpcyB0byBtYWtlIG91ciBoYW1tb2NrcyBhcyBoYXNzbGUgZnJlZSBhcyBwb3NzaWJsZS4gQWxsIG9mIG91ciBoYW1tb2NrcyBjb21lIHdpdGggZW5kLXN0cmFwcyBmb3IgZXh0cmEgc3RyZW5ndGggYW5kIGR1cmFiaWxpdHkgc28gb3VyIGN1c3RvbWVycyBuZXZlciBoYXZlIHRvIHdvcnJ5IGFib3V0IHRoZWlyIGtub3RzIGNvbWluZyB1bmRvbmUuIFdlIGFsc28gcHJvdmlkZSB0cmVlIHNsZWV2ZXMgd2l0aCBwcmUtdGllZCBrbm90cyB0byBwcm90ZWN0IGZyb20gZnJheSBhbmQgcHJvdmlkZSBldmVuIGV4dHJhIGR1cmFiaWxpdHkuIE91ciBjdXN0b21lciBuZXZlciBoYXZlIHRvIHRpZSB0aGVpciBvd24ga25vdHMhIEVhY2ggaGFtbW9jayBhbHNvIGNvbWVzIHdpdGggYSBzZXQgb2YgYWx1bWludW0gd2lyZS1nYXRlIGNhcmFiaW5lcnMgdGhhdCB3b3JrIHdpdGggb3VyIHN1c3BlbnNpb24gc3lzdGVtLiBBbGwgeW91IG5lZWQgdG8gZG8gbm93IGlzIGNob29zZSB5b3VyIG9mIGhhbW1vY2suJ1xuICB9LCB7XG4gICAgcXVlc3Rpb246ICdIb3cgZG8gSSB3YXNoIG15IE1ha2UgVHJhY2tzIGhhbW1vY2s/JyxcbiAgICBhbnN3ZXI6ICdZb3UgY2FuIG1hY2hpbmUgd2FzaCBvciBoYW5kIHdhc2ggeW91ciBoYW1tb2NrLiAoTk9URTogRG8gbm90IHB1dCB0aGUgaGFtbW9jayBpbiB0aGUgZHJ5ZXIhIEFpciBkcnkgb25seSEpJyxcbiAgICB0aXAxOiAnTWFjaGluZSBXYXNoOiBGaXJzdCwgcmVtb3ZlIHRoZSB0aGUgY2FyYWJpbmVycyB0aGVuIHdhc2ggb24gY29vbCBpbiBhIGZyb250IGxvYWQgd2FzaGVyIG9uIHRoZSBkZWxpY2F0ZSBjeWNsZSBzZXRpbmcgdXNpbmcgYSBtaWxkIGRldGVyZ2VudC4gRG8gbm90IHVudGllIGFueSBrbm90cyEnLFxuICAgIHRpcDI6ICdIYW5kIFdhc2g6IFdlIHJlY29tbWVuZCB1c2luZyBhIGNsb3RoIHdpdGggc29hcCBvciBtaWxkIGRldGVyZ2VudC4nXG4gIH0se1xuICAgIHF1ZXN0aW9uOiAnSG93IGRvIEkgY2FyZSBmb3IgbXkgTWFrZSBUcmFja3MgaGFtbW9jaz8nLFxuICAgIGFuc3dlcjogJ1NhZmV0eTogSW4gc2V0IHVwLCBpbnN1cmUgdGhhdCB5b3VyIHN0cmFwcyBhcmUgc2VjdXJlbHkgd3JhcHBlZCBhbmQgdGhlIGNhcmFiaW5lcnMgYXJlIGNsb3NlZC4gRWFzZSBpbnRvIHlvdXIgaGFtbW9jayBzbG93bHkgdG8gbWFrZSBzdXJlIGl0IGhhbmdzIHNlY3VyZWx5LicsXG4gICAgdGlwMTogJ1VWIERhbWFnZTogVVYgZGFtYWdlIGNhbiBtYWtlIHRoZSBoYW1tb2NrIGZhZGUgaW4gY29sb3IgYW5kIHdlYWtlbiB0aGUgZmFicmljIHdoaWNoIGxlYWRzIHRvIHRlYXJpbmcuIFdlIHJlY29tbWVuZCB3aGVuIHRoZSBoYW1tb2NrIGlzIG5vdCBpbiB1c2U7IHBhY2sgaXQgaW4gaXRzIHNhY2sgYW5kIHN0b3JlIHNvbWV3aGVyZSBkcnkgYW5kIGNvb2wuJ1xuICB9LCB7XG4gICAgcXVlc3Rpb246ICdEb2VzIHRoZSBoYW1tb2NrIGNvbWUgd2l0aCBzdHJhcHM/JyxcbiAgICBhbnN3ZXI6ICdPdXIgaGFtbW9jayBwYWNrYWdlIGNvbWVzIHdpdGggZXZlcnl0aGluZyB5b3UgbmVlZCBmb3IgYSBncmVhdCBoYW1tb2NrIGV4cGVyaWVuY2UuIFdlIHVzZSBlbmQtc3RyYXBzIGluc3RlYWQgb2Yga25vdGVkIHJvcGUgdG8gYXR0YWNoIHRvIG91ciBjYXJhYmluZXJzIGZvciB0aGVpciByZWxpYWJpbGl0eSBhbmQgc3RyZW5ndGguIFRoZSBwYWNrYWdlIGFsc28gY29tZXMgd2l0aCB0cmVlLXNsZWV2ZXMsIHdoaWNoIGhhcyBwcmUta25vdGVkIHJvcGUgYW5kIGVuY2FzZWQgYnkgYSBueWxvbiBtYXRlcmlhbCBzbyBwcm90ZWN0IHRoZSByb3BlIGZyb20gZnJheWluZy4nXG4gIH0sIHtcbiAgICBxdWVzdGlvbjogJ1dpbGwgSSBuZWVkIHN0cmFwcyB0byB1c2UgdGhlIGhhbW1vY2s/JyxcbiAgICBhbnN3ZXI6ICdObywgeW91IG5vdCBuZWVkIGFueSBleHRyYSBzdHJhcHMgdGhlbiB3aGF0IHRoZSBoYW1tb2NrIHBhY2thZ2UgY29tZXMgd2l0aC4nXG4gIH0sIHtcbiAgICBxdWVzdGlvbjogJ1doYXQgaXMgdGhlIG1heGltdW0gd2VpZ2h0IGNhcGFjaXR5IG9mIG91ciBoYW1tb2Nrcz8nLFxuICAgIGFuc3dlcjogJzgwMCBsYnMhJ1xuICB9LCB7XG4gICAgcXVlc3Rpb246ICdXaGF0IGFyZSB0aGUgZGltZW5zaW9ucyBvZiB5b3VyIGhhbW1vY2tzPycsXG4gICAgYW5zd2VyOiAnRG91YmxlIFRyYWNrIGhhbW1vY2s6IDEwIHggNi41IGZlZXQuJ1xuICB9LCB7XG4gICAgcXVlc3Rpb246ICdIb3cgaGlnaCBkbyBJIG5lZWQgdG8gaGFuZyB0aGUgaGFtbW9jaz8nLFxuICAgIGFuc3dlcjogJ0hvdyBoaWdoIGRvIEkgbmVlZCB0byBoYW5nIHRoZSBoYW1tb2NrPydcbiAgfSwge1xuICAgIHF1ZXN0aW9uOiAnRm9yIHNldCB1cCwgd2hhdCBpcyB0aGUgYmVzdCBsZW5ndGggdG8gaGF2ZSBiZXR3ZWVuIGVuZHMgb2YgdGhlIGhhbW1vY2s/JyxcbiAgICBhbnN3ZXI6ICdUaGUgYmVzdCBzZXQgdXAgaXMgYXJvdW5kIDEyIGZlZXQgZnJvbSBlbmQgdG8gZW5kLidcbiAgfSwge1xuICAgIHF1ZXN0aW9uOiAnV2hhdCBhcmUgdGhlIE1ha2UgVHJhY2tzIGhhbW1vY2tzIG1hZGUgb2Y/JyxcbiAgICBhbnN3ZXI6ICdBbGwgb3VyIGhhbW1vY2tzIGFyZSBtYWRlIG9mIHBvcm91cywgYnJlYXRoYWJsZSBueWxvbiB0YWZmZXRhLiBUaGlzIHBvcm91cyBxdWFsaXR5IGxlbmRzIGl0c2VsZiB0byBhIGNvb2wgYW5kIGNvbWZvcnRhYmxlIGV4cGVyaWVuY2UuJ1xuICB9LCB7XG4gICAgcXVlc3Rpb246ICdXaWxsIG15IGRvZ3Mgb3IgY2F0cyBuYWlscyBwdW5jdHVyZSB0aGUgaGFtbW9jaz8nLFxuICAgIGFuc3dlcjogJ0l0IGlzIGRlZmluaXRlbHkgcG9zc2libGUsIGJlIGNhdXRpb3VzISdcbiAgfSwge1xuICAgIHF1ZXN0aW9uOiAnQXJlIHlvdXIgaGFtbW9ja3Mgd2F0ZXJwcm9vZj8nLFxuICAgIGFuc3dlcjogJ01ha2UgVHJhY2tzIGhhbW1vY2tzIGFyZSB3YXRlciByZXNpc3RhbnQgbm90IHdhdGVycHJvb2YuJ1xuICB9XVxuXG4gIHRoaXMuZ2V0RmFxcyA9ICgpID0+IHtcbiAgICBsZXQgZmFxcyA9IHRoaXMuZmFxO1xuICAgIHJldHVybiBmYXFzO1xuICB9XG5cbn0pLy9lbmQgb2Ygc2VydmljZTtcbiJdfQ==
