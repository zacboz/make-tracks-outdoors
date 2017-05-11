'use strict';

angular.module('makeTracks', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url: '/',
        templateUrl: "./views/home.html",
        controller: 'homeCtrl'
    }).state('story', {
        url: '/story',
        templateUrl: './views/story.html',
        controller: 'storyCtrl'
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
        templateUrl: './views/outpost.html',
        controller: 'outpostCtrl'
    }).state('outpost.faq', {
        url: '/faq',
        templateUrl: './views/faq.html'
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
        templateUrl: './views/contact.html',
        controller: 'contactCtrl'
    });

    $urlRouterProvider.otherwise('/');
});
//if you want every view to load at top use the code below ... this project has nested views so I don't!

// .run(function ($rootScope, $state, $stateParams, $anchorScroll) {
//
//     $rootScope.$on('$stateChangeStart', function () {
//         $anchorScroll();
//     });
//
// });
'use strict';

angular.module('makeTracks').controller('contactCtrl', function ($scope, hammockSrvc, $stateParams) {

  $("html, body").animate({ scrollTop: 0 }, 200);
}); //end of home controller
'use strict';

angular.module('makeTracks').controller('hammockCtrl', function ($scope, hammockSrvc, $stateParams) {

  $scope.hammocks = hammockSrvc.getHammocks();
  console.log($scope.hammocks);

  $("html, body").animate({ scrollTop: 0 }, 200);
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

    $("html, body").animate({ scrollTop: 0 }, 200);
});
'use strict';

angular.module('makeTracks').controller('homeCtrl', function ($scope, hammockSrvc, $stateParams) {

  $scope.bestSellers = hammockSrvc.getBestSellers();
  console.log($scope.bestSellers);

  $("html, body").animate({ scrollTop: 0 }, 200);
}); //end of home controller
'use strict';

angular.module('makeTracks').controller('outpostCtrl', function ($scope, $stateParams) {

  $("html, body").animate({ scrollTop: 0 }, 200);
}); //end of controller
'use strict';

angular.module('makeTracks').controller('storyCtrl', function ($scope, hammockSrvc, $stateParams) {

  $("html, body").animate({ scrollTop: 0 }, 200);
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
        image: "./img/hammocks/sunrise.jpg",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes all come with pretied knots!',
        price: 34.99
    }, {
        id: 2,
        name: 'The Geyser',
        color: 'Light Blue/Blue',
        image: "./img/hammocks/bluehammock.jpg",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes all come with pretied knots!',
        price: 34.99
    }, {
        id: 5,
        name: 'The Meadow',
        color: 'Lime Green/ Light Blue/ White',
        image: "./img/hammocks/meadowhammock.jpg",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes all come with pretied knots!',
        price: 34.99
    }];

    this.hammocks = [{
        id: 1,
        name: 'The Sunrise',
        color: 'orange/gray',
        image: "./img/hammocks/sunrise.jpg",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes all come with pretied knots!',
        price: 34.99
    }, {
        id: 2,
        name: 'The Geyser',
        color: 'blue/light blue',
        image: "./img/hammocks/bluehammock.jpg",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes all come with pretied knots!',
        price: 34.99
    }, {
        id: 3,
        name: 'The Woodland',
        color: 'green/gray',
        image: "./img/hammocks/greenhammock.jpg",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes all come with pretied knots!',
        price: 34.99
    }, {
        id: 4,
        name: 'The Summit',
        color: 'charcoal/maroon',
        image: "./img/hammocks/summit.jpg",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes all come with pretied knots!',
        price: 34.99
    }, {
        id: 5,
        name: 'The Meadow',
        color: 'lime green/ light blue/ white',
        image: "./img/hammocks/meadowhammock.jpg",
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbnRyb2xsZXJzL2NvbnRhY3RDdHJsLmpzIiwiY29udHJvbGxlcnMvaGFtbW9ja0N0cmwuanMiLCJjb250cm9sbGVycy9oYW1tb2NrRGV0YWlsc0N0cmwuanMiLCJjb250cm9sbGVycy9ob21lQ3RybC5qcyIsImNvbnRyb2xsZXJzL291dHBvc3RDdHJsLmpzIiwiY29udHJvbGxlcnMvc3RvcnlDdHJsLmpzIiwiZGlyZWN0aXZlcy9mb290ZXIuanMiLCJkaXJlY3RpdmVzL25hdmJhci5qcyIsImRpcmVjdGl2ZXMvc2xpZGVhYmxlLmpzIiwic2VydmljZXMvaGFtbW9ja1NydmMuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImNvbmZpZyIsIiRzdGF0ZVByb3ZpZGVyIiwiJHVybFJvdXRlclByb3ZpZGVyIiwic3RhdGUiLCJ1cmwiLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXIiLCJvdGhlcndpc2UiLCIkc2NvcGUiLCJoYW1tb2NrU3J2YyIsIiRzdGF0ZVBhcmFtcyIsIiQiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwiaGFtbW9ja3MiLCJnZXRIYW1tb2NrcyIsImNvbnNvbGUiLCJsb2ciLCJoYW1tb2NrIiwiZ2V0SGFtbW9ja0RldGFpbHMiLCJjbGljayIsIm9mZnNldCIsInRvcCIsImJlc3RTZWxsZXJzIiwiZ2V0QmVzdFNlbGxlcnMiLCJkaXJlY3RpdmUiLCJyZXN0cmljdCIsImNvbXBpbGUiLCJlbGVtZW50IiwiYXR0ciIsImNvbnRlbnRzIiwiaHRtbCIsInBvc3RMaW5rIiwic2NvcGUiLCJhdHRycyIsImR1cmF0aW9uIiwiZWFzaW5nIiwiY3NzIiwibGluayIsInRhcmdldCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNsaWRlVG9nZ2xlIiwiZXhwYW5kZWQiLCJiaW5kIiwiY29udGVudCIsInN0eWxlIiwiYm9yZGVyIiwieSIsImNsaWVudEhlaWdodCIsImhlaWdodCIsInNlcnZpY2UiLCJpZCIsIm5hbWUiLCJjb2xvciIsImltYWdlIiwic3RhdHVzIiwiZGVzYyIsInByaWNlIiwic3RhdGVQYXJhbXMiLCJoYW1tb2NrRGV0YWlscyIsImkiLCJsZW5ndGgiLCJwYXJzZUludCJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsUUFBUUMsTUFBUixDQUFlLFlBQWYsRUFBNkIsQ0FBQyxXQUFELENBQTdCLEVBQ0dDLE1BREgsQ0FDVSxVQUFTQyxjQUFULEVBQXlCQyxrQkFBekIsRUFBNEM7O0FBRWxERCxtQkFDR0UsS0FESCxDQUNTLE1BRFQsRUFDZ0I7QUFDVkMsYUFBSSxHQURNO0FBRVZDLHFCQUFhLG1CQUZIO0FBR1ZDLG9CQUFZO0FBSEYsS0FEaEIsRUFNR0gsS0FOSCxDQU1TLE9BTlQsRUFNaUI7QUFDWEMsYUFBSSxRQURPO0FBRVhDLHFCQUFhLG9CQUZGO0FBR1hDLG9CQUFZO0FBSEQsS0FOakIsRUFXR0gsS0FYSCxDQVdTLFVBWFQsRUFXb0I7QUFDZEMsYUFBSSxXQURVO0FBRWRDLHFCQUFhLHVCQUZDO0FBR2RDLG9CQUFZO0FBSEUsS0FYcEIsRUFnQkdILEtBaEJILENBZ0JTLGdCQWhCVCxFQWdCMEI7QUFDcEJDLGFBQUkscUJBRGdCO0FBRXBCQyxxQkFBYSw4QkFGTztBQUdwQkMsb0JBQVk7QUFIUSxLQWhCMUIsRUFxQkdILEtBckJILENBcUJTLHNCQXJCVCxFQXFCZ0M7QUFDMUJDLGFBQUksbUJBRHNCO0FBRTFCQyxxQkFBYTtBQUZhLEtBckJoQyxFQXlCR0YsS0F6QkgsQ0F5QlMsc0JBekJULEVBeUJnQztBQUMxQkMsYUFBSSxlQURzQjtBQUUxQkMscUJBQWE7QUFGYSxLQXpCaEMsRUE2QkdGLEtBN0JILENBNkJTLHdCQTdCVCxFQTZCa0M7QUFDNUJDLGFBQUksaUJBRHdCO0FBRTVCQyxxQkFBYTtBQUZlLEtBN0JsQyxFQWlDR0YsS0FqQ0gsQ0FpQ1MsU0FqQ1QsRUFpQ21CO0FBQ2JDLGFBQUksVUFEUztBQUViQyxxQkFBYSxzQkFGQTtBQUdiQyxvQkFBWTtBQUhDLEtBakNuQixFQXNDR0gsS0F0Q0gsQ0FzQ1Ms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IjpbImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJywgWyd1aS5yb3V0ZXInXSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKXtcblxuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ2hvbWUnLHtcbiAgICAgICAgICB1cmw6Jy8nLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiBcIi4vdmlld3MvaG9tZS5odG1sXCIsXG4gICAgICAgICAgY29udHJvbGxlcjogJ2hvbWVDdHJsJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnc3RvcnknLHtcbiAgICAgICAgICB1cmw6Jy9zdG9yeScsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL3N0b3J5Lmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdzdG9yeUN0cmwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdoYW1tb2Nrcycse1xuICAgICAgICAgIHVybDonL2hhbW1vY2tzJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvaGFtbW9ja3MuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ2hhbW1vY2tDdHJsJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnaGFtbW9ja0RldGFpbHMnLHtcbiAgICAgICAgICB1cmw6Jy9oYW1tb2NrRGV0YWlscy86aWQnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9oYW1tb2NrLWRldGFpbHMuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ2hhbW1vY2tEZXRhaWxzQ3RybCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2hhbW1vY2tEZXRhaWxzLnNwZWNzJyx7XG4gICAgICAgICAgdXJsOicvaGFtbW9ja1NwZWNzLzppZCcsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2hhbW1vY2tTcGVjcy5odG1sJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnaGFtbW9ja0RldGFpbHMuc2V0dXAnLHtcbiAgICAgICAgICB1cmw6Jy9oYW1tb2NrU2V0dXAnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9oYW1tb2NrU2V0dXAuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2hhbW1vY2tEZXRhaWxzLnJldHVybnMnLHtcbiAgICAgICAgICB1cmw6Jy9oYW1tb2NrUmV0dXJucycsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2hhbW1vY2tSZXR1cm5zLmh0bWwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdvdXRwb3N0Jyx7XG4gICAgICAgICAgdXJsOicvb3V0cG9zdCcsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL291dHBvc3QuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ291dHBvc3RDdHJsJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnb3V0cG9zdC5mYXEnLHtcbiAgICAgICAgICB1cmw6Jy9mYXEnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9mYXEuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ291dHBvc3QucmVmdW5kcycse1xuICAgICAgICAgIHVybDonL3JlZnVuZHMnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9yZWZ1bmRzLmh0bWwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdvdXRwb3N0LnZpZGVvcycse1xuICAgICAgICAgIHVybDonL3ZpZGVvcycsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL3ZpZGVvcy5odG1sJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnY29taW5nc29vbicse1xuICAgICAgICAgIHVybDonL2NvbWluZ3Nvb24nLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9jb21pbmdzb29uLmh0bWwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdjb250YWN0Jyx7XG4gICAgICAgICAgdXJsOicvY29udGFjdCcsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2NvbnRhY3QuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ2NvbnRhY3RDdHJsJ1xuICAgICAgfSk7XG5cbiAgICAkdXJsUm91dGVyUHJvdmlkZXJcbiAgICAgICAgLm90aGVyd2lzZSgnLycpO1xufSlcbi8vaWYgeW91IHdhbnQgZXZlcnkgdmlldyB0byBsb2FkIGF0IHRvcCB1c2UgdGhlIGNvZGUgYmVsb3cgLi4uIHRoaXMgcHJvamVjdCBoYXMgbmVzdGVkIHZpZXdzIHNvIEkgZG9uJ3QhXG5cbi8vIC5ydW4oZnVuY3Rpb24gKCRyb290U2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCAkYW5jaG9yU2Nyb2xsKSB7XG4vL1xuLy8gICAgICRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsIGZ1bmN0aW9uICgpIHtcbi8vICAgICAgICAgJGFuY2hvclNjcm9sbCgpO1xuLy8gICAgIH0pO1xuLy9cbi8vIH0pO1xuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5jb250cm9sbGVyKCdjb250YWN0Q3RybCcsICgkc2NvcGUsIGhhbW1vY2tTcnZjLCAkc3RhdGVQYXJhbXMpID0+IHtcblxuICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIDIwMCk7XG5cbn0pLy9lbmQgb2YgaG9tZSBjb250cm9sbGVyXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpLmNvbnRyb2xsZXIoJ2hhbW1vY2tDdHJsJywgKCRzY29wZSwgaGFtbW9ja1NydmMsICRzdGF0ZVBhcmFtcykgPT4ge1xuXG4gICRzY29wZS5oYW1tb2NrcyA9IGhhbW1vY2tTcnZjLmdldEhhbW1vY2tzKCk7XG4gIGNvbnNvbGUubG9nKCRzY29wZS5oYW1tb2Nrcyk7XG5cbiAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCAyMDApO1xuXG59KS8vZW5kIG9mIGhvbWUgY29udHJvbGxlclxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKVxuLmNvbnRyb2xsZXIoJ2hhbW1vY2tEZXRhaWxzQ3RybCcsICgkc2NvcGUsIGhhbW1vY2tTcnZjLCAkc3RhdGVQYXJhbXMpID0+IHtcblxuICAkc2NvcGUuaGFtbW9jayA9IGhhbW1vY2tTcnZjLmdldEhhbW1vY2tEZXRhaWxzKCRzdGF0ZVBhcmFtcyk7XG4gIGNvbnNvbGUubG9nKCRzY29wZS5oYW1tb2NrKTtcblxuICAkKFwiI3Njcm9sbC1zcGVjc1wiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICBzY3JvbGxUb3A6ICQoXCIjc3BlY3NcIikub2Zmc2V0KCkudG9wXG4gICAgICB9LCAxMDAwKTtcbiAgfSk7XG4gICQoXCIjc2Nyb2xsLXNldHVwXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgIHNjcm9sbFRvcDogJChcIiNzcGVjc1wiKS5vZmZzZXQoKS50b3BcbiAgICAgIH0sIDEwMDApO1xuICB9KTtcbiAgJChcIiNzY3JvbGwtcmV0dXJuc1wiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICBzY3JvbGxUb3A6ICQoXCIjc3BlY3NcIikub2Zmc2V0KCkudG9wXG4gICAgICB9LCAxMDAwKTtcbiAgfSk7XG5cbiAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCAyMDApO1xuXG59KVxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKVxuLmNvbnRyb2xsZXIoJ2hvbWVDdHJsJywgKCRzY29wZSwgaGFtbW9ja1NydmMsICRzdGF0ZVBhcmFtcykgPT4ge1xuXG4gICRzY29wZS5iZXN0U2VsbGVycyA9IGhhbW1vY2tTcnZjLmdldEJlc3RTZWxsZXJzKCk7XG4gIGNvbnNvbGUubG9nKCRzY29wZS5iZXN0U2VsbGVycyk7XG5cbiAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCAyMDApO1xuXG59KS8vZW5kIG9mIGhvbWUgY29udHJvbGxlclxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5jb250cm9sbGVyKCdvdXRwb3N0Q3RybCcsICgkc2NvcGUsICRzdGF0ZVBhcmFtcykgPT4ge1xuXG4gICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgMjAwKTtcblxufSkvL2VuZCBvZiBjb250cm9sbGVyXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpLmNvbnRyb2xsZXIoJ3N0b3J5Q3RybCcsICgkc2NvcGUsIGhhbW1vY2tTcnZjLCAkc3RhdGVQYXJhbXMpID0+IHtcblxuICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIDIwMCk7XG5cbn0pLy9lbmQgb2YgaG9tZSBjb250cm9sbGVyXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpLmRpcmVjdGl2ZSgnY3VzdG9tRm9vdGVyJywgKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9mb290ZXIuaHRtbCdcbiAgfTtcbn0pIC8vZW5kIG9mIG5hdmJhciBkaXJlY3RpdmVcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJykuZGlyZWN0aXZlKCduYXZiYXInLCAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL25hdmJhci5odG1sJ1xuICB9O1xufSkgLy9lbmQgb2YgbmF2YmFyIGRpcmVjdGl2ZVxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKVxuLmRpcmVjdGl2ZSgnc2xpZGVhYmxlJywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OidDJyxcbiAgICAgICAgY29tcGlsZTogZnVuY3Rpb24gKGVsZW1lbnQsIGF0dHIpIHtcbiAgICAgICAgICAgIC8vIHdyYXAgdGFnXG4gICAgICAgICAgICB2YXIgY29udGVudHMgPSBlbGVtZW50Lmh0bWwoKTtcbiAgICAgICAgICAgIGVsZW1lbnQuaHRtbCgnPGRpdiBjbGFzcz1cInNsaWRlYWJsZV9jb250ZW50XCIgc3R5bGU9XCJtYXJnaW46MCAhaW1wb3J0YW50OyBwYWRkaW5nOjAgIWltcG9ydGFudFwiID4nICsgY29udGVudHMgKyAnPC9kaXY+Jyk7XG5cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiBwb3N0TGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICAgICAgICAgICAvLyBkZWZhdWx0IHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICBhdHRycy5kdXJhdGlvbiA9ICghYXR0cnMuZHVyYXRpb24pID8gJzFzJyA6IGF0dHJzLmR1cmF0aW9uO1xuICAgICAgICAgICAgICAgIGF0dHJzLmVhc2luZyA9ICghYXR0cnMuZWFzaW5nKSA/ICdlYXNlLWluLW91dCcgOiBhdHRycy5lYXNpbmc7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAnb3ZlcmZsb3cnOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgJ2hlaWdodCc6ICcwcHgnLFxuICAgICAgICAgICAgICAgICAgICAndHJhbnNpdGlvblByb3BlcnR5JzogJ2hlaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uRHVyYXRpb24nOiBhdHRycy5kdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25UaW1pbmdGdW5jdGlvbic6IGF0dHJzLmVhc2luZ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG59KVxuLmRpcmVjdGl2ZSgnc2xpZGVUb2dnbGUnLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGF0dHJzLnNsaWRlVG9nZ2xlKTtcbiAgICAgICAgICAgIGF0dHJzLmV4cGFuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICBlbGVtZW50LmJpbmQoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSB0YXJnZXQucXVlcnlTZWxlY3RvcignLnNsaWRlYWJsZV9jb250ZW50Jyk7XG4gICAgICAgICAgICAgICAgaWYoIWF0dHJzLmV4cGFuZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCByZ2JhKDAsMCwwLDApJztcbiAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSBjb250ZW50LmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5ib3JkZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0geSArICdweCc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9ICcwcHgnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhdHRycy5leHBhbmRlZCA9ICFhdHRycy5leHBhbmRlZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpLnNlcnZpY2UoJ2hhbW1vY2tTcnZjJywgZnVuY3Rpb24oKXtcblxuXG4gIHRoaXMuYmVzdFNlbGxlcnMgPSBbe1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogJ1RoZSBTdW5yaXNlJyxcbiAgICAgICAgY29sb3I6ICdPcmFuZ2UvR3JleScsXG4gICAgICAgIGltYWdlOiBcIi4vaW1nL2hhbW1vY2tzL3N1bnJpc2UuanBnXCIsXG4gICAgICAgIHN0YXR1czogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGRlc2M6ICdUaGUgYmVzdCBoYW1tb2NrIG91dCB0aGVyZSEgR3JlYXQgZm9yIDEsIHBlcmZlY3QgZm9yIDIuIEVhc2lseSB0cmFuc3BvcnRhYmxlIGFuZCBzdHVmZnMgcmlnaHQgaW50byB0aGUgYXR0YWNoZWQgc2Fjay4gU2V0IHVwIGluIHNlY29uZHMgYmVjYXVzZSBvdXIgcm9wZXMgYWxsIGNvbWUgd2l0aCBwcmV0aWVkIGtub3RzIScsXG4gICAgICAgIHByaWNlOiAzNC45OVxuICAgIH0sIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIG5hbWU6ICdUaGUgR2V5c2VyJyxcbiAgICAgICAgY29sb3I6ICdMaWdodCBCbHVlL0JsdWUnLFxuICAgICAgICBpbWFnZTogXCIuL2ltZy9oYW1tb2Nrcy9ibHVlaGFtbW9jay5qcGdcIixcbiAgICAgICAgc3RhdHVzOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgZGVzYzogJ1RoZSBiZXN0IGhhbW1vY2sgb3V0IHRoZXJlISBHcmVhdCBmb3IgMSwgcGVyZmVjdCBmb3IgMi4gRWFzaWx5IHRyYW5zcG9ydGFibGUgYW5kIHN0dWZmcyByaWdodCBpbnRvIHRoZSBhdHRhY2hlZCBzYWNrLiBTZXQgdXAgaW4gc2Vjb25kcyBiZWNhdXNlIG91ciByb3BlcyBhbGwgY29tZSB3aXRoIHByZXRpZWQga25vdHMhJyxcbiAgICAgICAgcHJpY2U6IDM0Ljk5XG4gICAgfSx7XG4gICAgICAgIGlkOiA1LFxuICAgICAgICBuYW1lOiAnVGhlIE1lYWRvdycsXG4gICAgICAgIGNvbG9yOiAnTGltZSBHcmVlbi8gTGlnaHQgQmx1ZS8gV2hpdGUnLFxuICAgICAgICBpbWFnZTogXCIuL2ltZy9oYW1tb2Nrcy9tZWFkb3doYW1tb2NrLmpwZ1wiLFxuICAgICAgICBzdGF0dXM6ICdDb21pbmcgTWF5IDIwMTcnLFxuICAgICAgICBkZXNjOiAnVGhlIGJlc3QgaGFtbW9jayBvdXQgdGhlcmUhIEdyZWF0IGZvciAxLCBwZXJmZWN0IGZvciAyLiBFYXNpbHkgdHJhbnNwb3J0YWJsZSBhbmQgc3R1ZmZzIHJpZ2h0IGludG8gdGhlIGF0dGFjaGVkIHNhY2suIFNldCB1cCBpbiBzZWNvbmRzIGJlY2F1c2Ugb3VyIHJvcGVzIGFsbCBjb21lIHdpdGggcHJldGllZCBrbm90cyEnLFxuICAgICAgICBwcmljZTogMzQuOTlcbiAgICB9XVxuXG4gIHRoaXMuaGFtbW9ja3MgPSBbe1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogJ1RoZSBTdW5yaXNlJyxcbiAgICAgICAgY29sb3I6ICdvcmFuZ2UvZ3JheScsXG4gICAgICAgIGltYWdlOiBcIi4vaW1nL2hhbW1vY2tzL3N1bnJpc2UuanBnXCIsXG4gICAgICAgIHN0YXR1czogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGRlc2M6ICdUaGUgYmVzdCBoYW1tb2NrIG91dCB0aGVyZSEgR3JlYXQgZm9yIDEsIHBlcmZlY3QgZm9yIDIuIEVhc2lseSB0cmFuc3BvcnRhYmxlIGFuZCBzdHVmZnMgcmlnaHQgaW50byB0aGUgYXR0YWNoZWQgc2Fjay4gU2V0IHVwIGluIHNlY29uZHMgYmVjYXVzZSBvdXIgcm9wZXMgYWxsIGNvbWUgd2l0aCBwcmV0aWVkIGtub3RzIScsXG4gICAgICAgIHByaWNlOiAzNC45OVxuICAgIH0sIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIG5hbWU6ICdUaGUgR2V5c2VyJyxcbiAgICAgICAgY29sb3I6ICdibHVlL2xpZ2h0IGJsdWUnLFxuICAgICAgICBpbWFnZTogXCIuL2ltZy9oYW1tb2Nrcy9ibHVlaGFtbW9jay5qcGdcIixcbiAgICAgICAgc3RhdHVzOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgZGVzYzogJ1RoZSBiZXN0IGhhbW1vY2sgb3V0IHRoZXJlISBHcmVhdCBmb3IgMSwgcGVyZmVjdCBmb3IgMi4gRWFzaWx5IHRyYW5zcG9ydGFibGUgYW5kIHN0dWZmcyByaWdodCBpbnRvIHRoZSBhdHRhY2hlZCBzYWNrLiBTZXQgdXAgaW4gc2Vjb25kcyBiZWNhdXNlIG91ciByb3BlcyBhbGwgY29tZSB3aXRoIHByZXRpZWQga25vdHMhJyxcbiAgICAgICAgcHJpY2U6IDM0Ljk5XG4gICAgfSx7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBuYW1lOiAnVGhlIFdvb2RsYW5kJyxcbiAgICAgICAgY29sb3I6ICdncmVlbi9ncmF5JyxcbiAgICAgICAgaW1hZ2U6IFwiLi9pbWcvaGFtbW9ja3MvZ3JlZW5oYW1tb2NrLmpwZ1wiLFxuICAgICAgICBzdGF0dXM6ICdDb21pbmcgTWF5IDIwMTcnLFxuICAgICAgICBkZXNjOiAnVGhlIGJlc3QgaGFtbW9jayBvdXQgdGhlcmUhIEdyZWF0IGZvciAxLCBwZXJmZWN0IGZvciAyLiBFYXNpbHkgdHJhbnNwb3J0YWJsZSBhbmQgc3R1ZmZzIHJpZ2h0IGludG8gdGhlIGF0dGFjaGVkIHNhY2suIFNldCB1cCBpbiBzZWNvbmRzIGJlY2F1c2Ugb3VyIHJvcGVzIGFsbCBjb21lIHdpdGggcHJldGllZCBrbm90cyEnLFxuICAgICAgICBwcmljZTogMzQuOTlcbiAgICB9LHtcbiAgICAgICAgaWQ6IDQsXG4gICAgICAgIG5hbWU6ICdUaGUgU3VtbWl0JyxcbiAgICAgICAgY29sb3I6ICdjaGFyY29hbC9tYXJvb24nLFxuICAgICAgICBpbWFnZTogXCIuL2ltZy9oYW1tb2Nrcy9zdW1taXQuanBnXCIsXG4gICAgICAgIHN0YXR1czogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGRlc2M6ICdUaGUgYmVzdCBoYW1tb2NrIG91dCB0aGVyZSEgR3JlYXQgZm9yIDEsIHBlcmZlY3QgZm9yIDIuIEVhc2lseSB0cmFuc3BvcnRhYmxlIGFuZCBzdHVmZnMgcmlnaHQgaW50byB0aGUgYXR0YWNoZWQgc2Fjay4gU2V0IHVwIGluIHNlY29uZHMgYmVjYXVzZSBvdXIgcm9wZXMgYWxsIGNvbWUgd2l0aCBwcmV0aWVkIGtub3RzIScsXG4gICAgICAgIHByaWNlOiAzNC45OVxuICAgIH0se1xuICAgICAgICBpZDogNSxcbiAgICAgICAgbmFtZTogJ1RoZSBNZWFkb3cnLFxuICAgICAgICBjb2xvcjogJ2xpbWUgZ3JlZW4vIGxpZ2h0IGJsdWUvIHdoaXRlJyxcbiAgICAgICAgaW1hZ2U6IFwiLi9pbWcvaGFtbW9ja3MvbWVhZG93aGFtbW9jay5qcGdcIixcbiAgICAgICAgc3RhdHVzOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgZGVzYzogJ1RoZSBiZXN0IGhhbW1vY2sgb3V0IHRoZXJlISBHcmVhdCBmb3IgMSwgcGVyZmVjdCBmb3IgMi4gRWFzaWx5IHRyYW5zcG9ydGFibGUgYW5kIHN0dWZmcyByaWdodCBpbnRvIHRoZSBhdHRhY2hlZCBzYWNrLiBTZXQgdXAgaW4gc2Vjb25kcyBiZWNhdXNlIG91ciByb3BlcyBhbGwgY29tZSB3aXRoIHByZXRpZWQga25vdHMhJyxcbiAgICAgICAgcHJpY2U6IDM0Ljk5XG4gICAgfV1cblxuICAgIHRoaXMuZ2V0QmVzdFNlbGxlcnMgPSAoKSA9PiB7XG4gICAgICBsZXQgYmVzdFNlbGxlcnMgPSB0aGlzLmJlc3RTZWxsZXJzO1xuICAgICAgcmV0dXJuIGJlc3RTZWxsZXJzO1xuICAgIH1cblxuICAgIHRoaXMuZ2V0SGFtbW9ja3MgPSAoKSA9PiB7XG4gICAgICBsZXQgaGFtbW9ja3MgPSB0aGlzLmhhbW1vY2tzO1xuICAgICAgcmV0dXJuIGhhbW1vY2tzO1xuICAgIH1cblxuICAgIHRoaXMuZ2V0SGFtbW9ja0RldGFpbHMgPSAoc3RhdGVQYXJhbXMpID0+IHtcbiAgICAgIGxldCBoYW1tb2NrRGV0YWlscyA9IHRoaXMuaGFtbW9ja3M7XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgaGFtbW9ja0RldGFpbHMubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zb2xlLmxvZyhoYW1tb2NrRGV0YWlscywgc3RhdGVQYXJhbXMpO1xuICAgICAgICBpZihoYW1tb2NrRGV0YWlsc1tpXS5pZCA9PT0gcGFyc2VJbnQoc3RhdGVQYXJhbXMuaWQpKXtcbiAgICAgICAgICByZXR1cm4gaGFtbW9ja0RldGFpbHNbaV1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuXG5cblxufSkvL2VuZCBvZiBzZXJ2aWNlXG4iXX0=
