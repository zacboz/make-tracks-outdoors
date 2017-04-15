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
        templateUrl: './views/contact.html'
    }).state('join', {
        url: '/join',
        templateUrl: './views/join.html',
        controller: 'joinCtrl'
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

angular.module('makeTracks').controller('outpostCtrl', function ($scope, outpostSrvc, $stateParams) {

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
'use strict';

angular.module('makeTracks').service('outpostSrvc', function () {}); //end of service;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbnRyb2xsZXJzL2hhbW1vY2tDdHJsLmpzIiwiY29udHJvbGxlcnMvaGFtbW9ja0RldGFpbHNDdHJsLmpzIiwiY29udHJvbGxlcnMvaG9tZUN0cmwuanMiLCJjb250cm9sbGVycy9vdXRwb3N0Q3RybC5qcyIsImNvbnRyb2xsZXJzL3N0b3J5Q3RybC5qcyIsImRpcmVjdGl2ZXMvZm9vdGVyLmpzIiwiZGlyZWN0aXZlcy9uYXZiYXIuanMiLCJkaXJlY3RpdmVzL3NsaWRlYWJsZS5qcyIsInNlcnZpY2VzL2hhbW1vY2tTcnZjLmpzIiwic2VydmljZXMvb3V0cG9zdFNydmMuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImNvbmZpZyIsIiRzdGF0ZVByb3ZpZGVyIiwiJHVybFJvdXRlclByb3ZpZGVyIiwic3RhdGUiLCJ1cmwiLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXIiLCJvdGhlcndpc2UiLCIkc2NvcGUiLCJoYW1tb2NrU3J2YyIsIiRzdGF0ZVBhcmFtcyIsImhhbW1vY2tzIiwiZ2V0SGFtbW9ja3MiLCJjb25zb2xlIiwibG9nIiwiJCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJoYW1tb2NrIiwiZ2V0SGFtbW9ja0RldGFpbHMiLCJjbGljayIsIm9mZnNldCIsInRvcCIsImJlc3RTZWxsZXJzIiwiZ2V0QmVzdFNlbGxlcnMiLCJvdXRwb3N0U3J2YyIsImRpcmVjdGl2ZSIsInJlc3RyaWN0IiwiY29tcGlsZSIsImVsZW1lbnQiLCJhdHRyIiwiY29udGVudHMiLCJodG1sIiwicG9zdExpbmsiLCJzY29wZSIsImF0dHJzIiwiZHVyYXRpb24iLCJlYXNpbmciLCJjc3MiLCJsaW5rIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2xpZGVUb2dnbGUiLCJleHBhbmRlZCIsImJpbmQiLCJjb250ZW50Iiwic3R5bGUiLCJib3JkZXIiLCJ5IiwiY2xpZW50SGVpZ2h0IiwiaGVpZ2h0Iiwic2VydmljZSIsImlkIiwibmFtZSIsImNvbG9yIiwiaW1hZ2UiLCJzdGF0dXMiLCJkZXNjIiwicHJpY2UiLCJzdGF0ZVBhcmFtcyIsImhhbW1vY2tEZXRhaWxzIiwiaSIsImxlbmd0aCIsInBhcnNlSW50Il0sIm1hcHBpbmdzIjoiOztBQUFBQSxRQUFRQyxNQUFSLENBQWUsWUFBZixFQUE2QixDQUFDLFdBQUQsQ0FBN0IsRUFDR0MsTUFESCxDQUNVLFVBQVNDLGNBQVQsRUFBeUJDLGtCQUF6QixFQUE0Qzs7QUFFbERELG1CQUNHRSxLQURILENBQ1MsTUFEVCxFQUNnQjtBQUNWQyxhQUFJLEdBRE07QUFFVkMscUJBQWEsbUJBRkg7QUFHVkMsb0JBQVk7QUFIRixLQURoQixFQU1HSCxLQU5ILENBTVMsT0FOVCxFQU1pQjtBQUNYQyxhQUFJLFFBRE87QUFFWEMscUJBQWEsb0JBRkY7QUFHWEMsb0JBQVk7QUFIRCxLQU5qQixFQVdHSCxLQVhILENBV1MsVUFYVCxFQVdvQjtBQUNkQyxhQUFJLFdBRFU7QUFFZEMscUJBQWEsdUJBRkM7QUFHZEMsb0JBQVk7QUFIRSxLQVhwQixFQWdCR0gsS0FoQkgsQ0FnQlMsZ0JBaEJULEVBZ0IwQjtBQUNwQkMsYUFBSSxxQkFEZ0I7QUFFcEJDLHFCQUFhLDhCQUZPO0FBR3BCQyxvQkFBWTtBQUhRLEtBaEIxQixFQXFCR0gsS0FyQkgsQ0FxQlMsc0JBckJULEVBcUJnQztBQUMxQkMsYUFBSSxtQkFEc0I7QUFFMUJDLHFCQUFhO0FBRmEsS0FyQmhDLEVBeUJHRixLQXpCSCxDQXlCUyxzQkF6QlQsRUF5QmdDO0FBQzFCQyxhQUFJLGVBRHNCO0FBRTFCQyxxQkFBYTtBQUZhLEtBekJoQyxFQTZCR0YsS0E3QkgsQ0E2QlMsd0JBN0JULEVBNkJrQztBQUM1QkMsYUFBSSxpQkFEd0I7QUFFNUJDLHFCQUFhO0FBRmUsS0E3QmxDLEVBaUNHRixLQWpDSCxDQWlDUyxTQWpDVCxFQWlDbUI7QUFDYkMsYUFBSSxVQURTO0FBRWJDLHFCQUFhLHNCQUZBO0FBR2JDLG9CQUFZO0FBSEMsS0FqQ25CLEVBc0NHSCxL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OlsiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnLCBbJ3VpLnJvdXRlciddKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpe1xuXG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgnaG9tZScse1xuICAgICAgICAgIHVybDonLycsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6IFwiLi92aWV3cy9ob21lLmh0bWxcIixcbiAgICAgICAgICBjb250cm9sbGVyOiAnaG9tZUN0cmwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdzdG9yeScse1xuICAgICAgICAgIHVybDonL3N0b3J5JyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3Mvc3RvcnkuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ3N0b3J5Q3RybCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2hhbW1vY2tzJyx7XG4gICAgICAgICAgdXJsOicvaGFtbW9ja3MnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9oYW1tb2Nrcy5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnaGFtbW9ja0N0cmwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdoYW1tb2NrRGV0YWlscycse1xuICAgICAgICAgIHVybDonL2hhbW1vY2tEZXRhaWxzLzppZCcsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2hhbW1vY2stZGV0YWlscy5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnaGFtbW9ja0RldGFpbHNDdHJsJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnaGFtbW9ja0RldGFpbHMuc3BlY3MnLHtcbiAgICAgICAgICB1cmw6Jy9oYW1tb2NrU3BlY3MvOmlkJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvaGFtbW9ja1NwZWNzLmh0bWwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdoYW1tb2NrRGV0YWlscy5zZXR1cCcse1xuICAgICAgICAgIHVybDonL2hhbW1vY2tTZXR1cCcsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2hhbW1vY2tTZXR1cC5odG1sJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnaGFtbW9ja0RldGFpbHMucmV0dXJucycse1xuICAgICAgICAgIHVybDonL2hhbW1vY2tSZXR1cm5zJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvaGFtbW9ja1JldHVybnMuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ291dHBvc3QnLHtcbiAgICAgICAgICB1cmw6Jy9vdXRwb3N0JyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3Mvb3V0cG9zdC5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnb3V0cG9zdEN0cmwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdvdXRwb3N0LmZhcScse1xuICAgICAgICAgIHVybDonL2ZhcScsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2ZhcS5odG1sJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnb3V0cG9zdC5yZWZ1bmRzJyx7XG4gICAgICAgICAgdXJsOicvcmVmdW5kcycsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL3JlZnVuZHMuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ291dHBvc3QudmlkZW9zJyx7XG4gICAgICAgICAgdXJsOicvdmlkZW9zJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvdmlkZW9zLmh0bWwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdjb21pbmdzb29uJyx7XG4gICAgICAgICAgdXJsOicvY29taW5nc29vbicsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2NvbWluZ3Nvb24uaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2NvbnRhY3QnLHtcbiAgICAgICAgICB1cmw6Jy9jb250YWN0JyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvY29udGFjdC5odG1sJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnam9pbicse1xuICAgICAgICAgIHVybDonL2pvaW4nLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9qb2luLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdqb2luQ3RybCdcbiAgICAgIH0pO1xuXG4gICAgJHVybFJvdXRlclByb3ZpZGVyXG4gICAgICAgIC5vdGhlcndpc2UoJy8nKTtcbn0pXG4vL2lmIHlvdSB3YW50IGV2ZXJ5IHZpZXcgdG8gbG9hZCBhdCB0b3AgdXNlIHRoZSBjb2RlIGJlbG93IC4uLiB0aGlzIHByb2plY3QgaGFzIG5lc3RlZCB2aWV3cyBzbyBJIGRvbid0IVxuXG4vLyAucnVuKGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgJGFuY2hvclNjcm9sbCkge1xuLy9cbi8vICAgICAkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3RhcnQnLCBmdW5jdGlvbiAoKSB7XG4vLyAgICAgICAgICRhbmNob3JTY3JvbGwoKTtcbi8vICAgICB9KTtcbi8vXG4vLyB9KTtcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJykuY29udHJvbGxlcignaGFtbW9ja0N0cmwnLCAoJHNjb3BlLCBoYW1tb2NrU3J2YywgJHN0YXRlUGFyYW1zKSA9PiB7XG5cbiAgJHNjb3BlLmhhbW1vY2tzID0gaGFtbW9ja1NydmMuZ2V0SGFtbW9ja3MoKTtcbiAgY29uc29sZS5sb2coJHNjb3BlLmhhbW1vY2tzKTtcblxuICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIDIwMCk7XG5cbn0pLy9lbmQgb2YgaG9tZSBjb250cm9sbGVyXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpXG4uY29udHJvbGxlcignaGFtbW9ja0RldGFpbHNDdHJsJywgKCRzY29wZSwgaGFtbW9ja1NydmMsICRzdGF0ZVBhcmFtcykgPT4ge1xuXG4gICRzY29wZS5oYW1tb2NrID0gaGFtbW9ja1NydmMuZ2V0SGFtbW9ja0RldGFpbHMoJHN0YXRlUGFyYW1zKTtcbiAgY29uc29sZS5sb2coJHNjb3BlLmhhbW1vY2spO1xuXG4gICQoXCIjc2Nyb2xsLXNwZWNzXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgIHNjcm9sbFRvcDogJChcIiNzcGVjc1wiKS5vZmZzZXQoKS50b3BcbiAgICAgIH0sIDEwMDApO1xuICB9KTtcbiAgJChcIiNzY3JvbGwtc2V0dXBcIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgc2Nyb2xsVG9wOiAkKFwiI3NwZWNzXCIpLm9mZnNldCgpLnRvcFxuICAgICAgfSwgMTAwMCk7XG4gIH0pO1xuICAkKFwiI3Njcm9sbC1yZXR1cm5zXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgIHNjcm9sbFRvcDogJChcIiNzcGVjc1wiKS5vZmZzZXQoKS50b3BcbiAgICAgIH0sIDEwMDApO1xuICB9KTtcblxuICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIDIwMCk7XG5cbn0pXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpXG4uY29udHJvbGxlcignaG9tZUN0cmwnLCAoJHNjb3BlLCBoYW1tb2NrU3J2YywgJHN0YXRlUGFyYW1zKSA9PiB7XG5cbiAgJHNjb3BlLmJlc3RTZWxsZXJzID0gaGFtbW9ja1NydmMuZ2V0QmVzdFNlbGxlcnMoKTtcbiAgY29uc29sZS5sb2coJHNjb3BlLmJlc3RTZWxsZXJzKTtcblxuICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIDIwMCk7XG5cblxufSkvL2VuZCBvZiBob21lIGNvbnRyb2xsZXJcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJykuY29udHJvbGxlcignb3V0cG9zdEN0cmwnLCAoJHNjb3BlLCBvdXRwb3N0U3J2YywgJHN0YXRlUGFyYW1zKSA9PiB7XG5cbiAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCAyMDApO1xuXG59KS8vZW5kIG9mIGNvbnRyb2xsZXJcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJykuY29udHJvbGxlcignc3RvcnlDdHJsJywgKCRzY29wZSwgaGFtbW9ja1NydmMsICRzdGF0ZVBhcmFtcykgPT4ge1xuXG4gICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgMjAwKTtcblxufSkvL2VuZCBvZiBob21lIGNvbnRyb2xsZXJcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJykuZGlyZWN0aXZlKCdjdXN0b21Gb290ZXInLCAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2Zvb3Rlci5odG1sJ1xuICB9O1xufSkgLy9lbmQgb2YgbmF2YmFyIGRpcmVjdGl2ZVxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5kaXJlY3RpdmUoJ25hdmJhcicsICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvbmF2YmFyLmh0bWwnXG4gIH07XG5cbn0pIC8vZW5kIG9mIG5hdmJhciBkaXJlY3RpdmVcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJylcbi5kaXJlY3RpdmUoJ3NsaWRlYWJsZScsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByZXN0cmljdDonQycsXG4gICAgICAgIGNvbXBpbGU6IGZ1bmN0aW9uIChlbGVtZW50LCBhdHRyKSB7XG4gICAgICAgICAgICAvLyB3cmFwIHRhZ1xuICAgICAgICAgICAgdmFyIGNvbnRlbnRzID0gZWxlbWVudC5odG1sKCk7XG4gICAgICAgICAgICBlbGVtZW50Lmh0bWwoJzxkaXYgY2xhc3M9XCJzbGlkZWFibGVfY29udGVudFwiIHN0eWxlPVwibWFyZ2luOjAgIWltcG9ydGFudDsgcGFkZGluZzowICFpbXBvcnRhbnRcIiA+JyArIGNvbnRlbnRzICsgJzwvZGl2PicpO1xuXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gcG9zdExpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAgICAgICAgICAgLy8gZGVmYXVsdCBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgYXR0cnMuZHVyYXRpb24gPSAoIWF0dHJzLmR1cmF0aW9uKSA/ICcxcycgOiBhdHRycy5kdXJhdGlvbjtcbiAgICAgICAgICAgICAgICBhdHRycy5lYXNpbmcgPSAoIWF0dHJzLmVhc2luZykgPyAnZWFzZS1pbi1vdXQnIDogYXR0cnMuZWFzaW5nO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ292ZXJmbG93JzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgICdoZWlnaHQnOiAnMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25Qcm9wZXJ0eSc6ICdoZWlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAndHJhbnNpdGlvbkR1cmF0aW9uJzogYXR0cnMuZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24nOiBhdHRycy5lYXNpbmdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9O1xufSlcbi5kaXJlY3RpdmUoJ3NsaWRlVG9nZ2xlJywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhdHRycy5zbGlkZVRvZ2dsZSk7XG4gICAgICAgICAgICBhdHRycy5leHBhbmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgZWxlbWVudC5iaW5kKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBjb250ZW50ID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZWFibGVfY29udGVudCcpO1xuICAgICAgICAgICAgICAgIGlmKCFhdHRycy5leHBhbmRlZCkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgcmdiYSgwLDAsMCwwKSc7XG4gICAgICAgICAgICAgICAgICAgIHZhciB5ID0gY29udGVudC5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUuYm9yZGVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IHkgKyAncHgnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSAnMHB4JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXR0cnMuZXhwYW5kZWQgPSAhYXR0cnMuZXhwYW5kZWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5zZXJ2aWNlKCdoYW1tb2NrU3J2YycsIGZ1bmN0aW9uKCl7XG5cblxuICB0aGlzLmJlc3RTZWxsZXJzID0gW3tcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIG5hbWU6ICdUaGUgU3VucmlzZScsXG4gICAgICAgIGNvbG9yOiAnT3JhbmdlL0dyZXknLFxuICAgICAgICBpbWFnZTogXCIuL2ltZy9oYW1tb2Nrcy9zdW5yaXNlLmpwZ1wiLFxuICAgICAgICBzdGF0dXM6ICdDb21pbmcgTWF5IDIwMTcnLFxuICAgICAgICBkZXNjOiAnVGhlIGJlc3QgaGFtbW9jayBvdXQgdGhlcmUhIEdyZWF0IGZvciAxLCBwZXJmZWN0IGZvciAyLiBFYXNpbHkgdHJhbnNwb3J0YWJsZSBhbmQgc3R1ZmZzIHJpZ2h0IGludG8gdGhlIGF0dGFjaGVkIHNhY2suIFNldCB1cCBpbiBzZWNvbmRzIGJlY2F1c2Ugb3VyIHJvcGVzIGFsbCBjb21lIHdpdGggcHJldGllZCBrbm90cyEnLFxuICAgICAgICBwcmljZTogMzQuOTlcbiAgICB9LCB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBuYW1lOiAnVGhlIEdleXNlcicsXG4gICAgICAgIGNvbG9yOiAnTGlnaHQgQmx1ZS9CbHVlJyxcbiAgICAgICAgaW1hZ2U6IFwiLi9pbWcvaGFtbW9ja3MvYmx1ZWhhbW1vY2suanBnXCIsXG4gICAgICAgIHN0YXR1czogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGRlc2M6ICdUaGUgYmVzdCBoYW1tb2NrIG91dCB0aGVyZSEgR3JlYXQgZm9yIDEsIHBlcmZlY3QgZm9yIDIuIEVhc2lseSB0cmFuc3BvcnRhYmxlIGFuZCBzdHVmZnMgcmlnaHQgaW50byB0aGUgYXR0YWNoZWQgc2Fjay4gU2V0IHVwIGluIHNlY29uZHMgYmVjYXVzZSBvdXIgcm9wZXMgYWxsIGNvbWUgd2l0aCBwcmV0aWVkIGtub3RzIScsXG4gICAgICAgIHByaWNlOiAzNC45OVxuICAgIH0se1xuICAgICAgICBpZDogNSxcbiAgICAgICAgbmFtZTogJ1RoZSBNZWFkb3cnLFxuICAgICAgICBjb2xvcjogJ0xpbWUgR3JlZW4vIExpZ2h0IEJsdWUvIFdoaXRlJyxcbiAgICAgICAgaW1hZ2U6IFwiLi9pbWcvaGFtbW9ja3MvbWVhZG93aGFtbW9jay5qcGdcIixcbiAgICAgICAgc3RhdHVzOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgZGVzYzogJ1RoZSBiZXN0IGhhbW1vY2sgb3V0IHRoZXJlISBHcmVhdCBmb3IgMSwgcGVyZmVjdCBmb3IgMi4gRWFzaWx5IHRyYW5zcG9ydGFibGUgYW5kIHN0dWZmcyByaWdodCBpbnRvIHRoZSBhdHRhY2hlZCBzYWNrLiBTZXQgdXAgaW4gc2Vjb25kcyBiZWNhdXNlIG91ciByb3BlcyBhbGwgY29tZSB3aXRoIHByZXRpZWQga25vdHMhJyxcbiAgICAgICAgcHJpY2U6IDM0Ljk5XG4gICAgfV1cblxuICB0aGlzLmhhbW1vY2tzID0gW3tcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIG5hbWU6ICdUaGUgU3VucmlzZScsXG4gICAgICAgIGNvbG9yOiAnb3JhbmdlL2dyYXknLFxuICAgICAgICBpbWFnZTogXCIuL2ltZy9oYW1tb2Nrcy9zdW5yaXNlLmpwZ1wiLFxuICAgICAgICBzdGF0dXM6ICdDb21pbmcgTWF5IDIwMTcnLFxuICAgICAgICBkZXNjOiAnVGhlIGJlc3QgaGFtbW9jayBvdXQgdGhlcmUhIEdyZWF0IGZvciAxLCBwZXJmZWN0IGZvciAyLiBFYXNpbHkgdHJhbnNwb3J0YWJsZSBhbmQgc3R1ZmZzIHJpZ2h0IGludG8gdGhlIGF0dGFjaGVkIHNhY2suIFNldCB1cCBpbiBzZWNvbmRzIGJlY2F1c2Ugb3VyIHJvcGVzIGFsbCBjb21lIHdpdGggcHJldGllZCBrbm90cyEnLFxuICAgICAgICBwcmljZTogMzQuOTlcbiAgICB9LCB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBuYW1lOiAnVGhlIEdleXNlcicsXG4gICAgICAgIGNvbG9yOiAnYmx1ZS9saWdodCBibHVlJyxcbiAgICAgICAgaW1hZ2U6IFwiLi9pbWcvaGFtbW9ja3MvYmx1ZWhhbW1vY2suanBnXCIsXG4gICAgICAgIHN0YXR1czogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGRlc2M6ICdUaGUgYmVzdCBoYW1tb2NrIG91dCB0aGVyZSEgR3JlYXQgZm9yIDEsIHBlcmZlY3QgZm9yIDIuIEVhc2lseSB0cmFuc3BvcnRhYmxlIGFuZCBzdHVmZnMgcmlnaHQgaW50byB0aGUgYXR0YWNoZWQgc2Fjay4gU2V0IHVwIGluIHNlY29uZHMgYmVjYXVzZSBvdXIgcm9wZXMgYWxsIGNvbWUgd2l0aCBwcmV0aWVkIGtub3RzIScsXG4gICAgICAgIHByaWNlOiAzNC45OVxuICAgIH0se1xuICAgICAgICBpZDogMyxcbiAgICAgICAgbmFtZTogJ1RoZSBXb29kbGFuZCcsXG4gICAgICAgIGNvbG9yOiAnZ3JlZW4vZ3JheScsXG4gICAgICAgIGltYWdlOiBcIi4vaW1nL2hhbW1vY2tzL2dyZWVuaGFtbW9jay5qcGdcIixcbiAgICAgICAgc3RhdHVzOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgZGVzYzogJ1RoZSBiZXN0IGhhbW1vY2sgb3V0IHRoZXJlISBHcmVhdCBmb3IgMSwgcGVyZmVjdCBmb3IgMi4gRWFzaWx5IHRyYW5zcG9ydGFibGUgYW5kIHN0dWZmcyByaWdodCBpbnRvIHRoZSBhdHRhY2hlZCBzYWNrLiBTZXQgdXAgaW4gc2Vjb25kcyBiZWNhdXNlIG91ciByb3BlcyBhbGwgY29tZSB3aXRoIHByZXRpZWQga25vdHMhJyxcbiAgICAgICAgcHJpY2U6IDM0Ljk5XG4gICAgfSx7XG4gICAgICAgIGlkOiA0LFxuICAgICAgICBuYW1lOiAnVGhlIFN1bW1pdCcsXG4gICAgICAgIGNvbG9yOiAnY2hhcmNvYWwvbWFyb29uJyxcbiAgICAgICAgaW1hZ2U6IFwiLi9pbWcvaGFtbW9ja3Mvc3VtbWl0LmpwZ1wiLFxuICAgICAgICBzdGF0dXM6ICdDb21pbmcgTWF5IDIwMTcnLFxuICAgICAgICBkZXNjOiAnVGhlIGJlc3QgaGFtbW9jayBvdXQgdGhlcmUhIEdyZWF0IGZvciAxLCBwZXJmZWN0IGZvciAyLiBFYXNpbHkgdHJhbnNwb3J0YWJsZSBhbmQgc3R1ZmZzIHJpZ2h0IGludG8gdGhlIGF0dGFjaGVkIHNhY2suIFNldCB1cCBpbiBzZWNvbmRzIGJlY2F1c2Ugb3VyIHJvcGVzIGFsbCBjb21lIHdpdGggcHJldGllZCBrbm90cyEnLFxuICAgICAgICBwcmljZTogMzQuOTlcbiAgICB9LHtcbiAgICAgICAgaWQ6IDUsXG4gICAgICAgIG5hbWU6ICdUaGUgTWVhZG93JyxcbiAgICAgICAgY29sb3I6ICdsaW1lIGdyZWVuLyBsaWdodCBibHVlLyB3aGl0ZScsXG4gICAgICAgIGltYWdlOiBcIi4vaW1nL2hhbW1vY2tzL21lYWRvd2hhbW1vY2suanBnXCIsXG4gICAgICAgIHN0YXR1czogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGRlc2M6ICdUaGUgYmVzdCBoYW1tb2NrIG91dCB0aGVyZSEgR3JlYXQgZm9yIDEsIHBlcmZlY3QgZm9yIDIuIEVhc2lseSB0cmFuc3BvcnRhYmxlIGFuZCBzdHVmZnMgcmlnaHQgaW50byB0aGUgYXR0YWNoZWQgc2Fjay4gU2V0IHVwIGluIHNlY29uZHMgYmVjYXVzZSBvdXIgcm9wZXMgYWxsIGNvbWUgd2l0aCBwcmV0aWVkIGtub3RzIScsXG4gICAgICAgIHByaWNlOiAzNC45OVxuICAgIH1dXG5cbiAgICB0aGlzLmdldEJlc3RTZWxsZXJzID0gKCkgPT4ge1xuICAgICAgbGV0IGJlc3RTZWxsZXJzID0gdGhpcy5iZXN0U2VsbGVycztcbiAgICAgIHJldHVybiBiZXN0U2VsbGVycztcbiAgICB9XG5cbiAgICB0aGlzLmdldEhhbW1vY2tzID0gKCkgPT4ge1xuICAgICAgbGV0IGhhbW1vY2tzID0gdGhpcy5oYW1tb2NrcztcbiAgICAgIHJldHVybiBoYW1tb2NrcztcbiAgICB9XG5cbiAgICB0aGlzLmdldEhhbW1vY2tEZXRhaWxzID0gKHN0YXRlUGFyYW1zKSA9PiB7XG4gICAgICBsZXQgaGFtbW9ja0RldGFpbHMgPSB0aGlzLmhhbW1vY2tzO1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGhhbW1vY2tEZXRhaWxzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc29sZS5sb2coaGFtbW9ja0RldGFpbHMsIHN0YXRlUGFyYW1zKTtcbiAgICAgICAgaWYoaGFtbW9ja0RldGFpbHNbaV0uaWQgPT09IHBhcnNlSW50KHN0YXRlUGFyYW1zLmlkKSl7XG4gICAgICAgICAgcmV0dXJuIGhhbW1vY2tEZXRhaWxzW2ldXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cblxuXG5cbn0pLy9lbmQgb2Ygc2VydmljZVxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5zZXJ2aWNlKCdvdXRwb3N0U3J2YycsIGZ1bmN0aW9uKCl7XG5cblxufSkvL2VuZCBvZiBzZXJ2aWNlO1xuIl19
