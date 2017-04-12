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

angular.module('makeTracks').service('outpostSrvc', function () {}); //end of service;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImRpcmVjdGl2ZXMvZm9vdGVyLmpzIiwiZGlyZWN0aXZlcy9uYXZiYXIuanMiLCJkaXJlY3RpdmVzL3NsaWRlYWJsZS5qcyIsImNvbnRyb2xsZXJzL2hhbW1vY2tDdHJsLmpzIiwiY29udHJvbGxlcnMvaGFtbW9ja0RldGFpbHNDdHJsLmpzIiwiY29udHJvbGxlcnMvaG9tZUN0cmwuanMiLCJjb250cm9sbGVycy9vdXRwb3N0Q3RybC5qcyIsImNvbnRyb2xsZXJzL3N0b3J5Q3RybC5qcyIsInNlcnZpY2VzL2hhbW1vY2tTcnZjLmpzIiwic2VydmljZXMvb3V0cG9zdFNydmMuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImNvbmZpZyIsIiRzdGF0ZVByb3ZpZGVyIiwiJHVybFJvdXRlclByb3ZpZGVyIiwic3RhdGUiLCJ1cmwiLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXIiLCJvdGhlcndpc2UiLCJkaXJlY3RpdmUiLCJyZXN0cmljdCIsImNvbXBpbGUiLCJlbGVtZW50IiwiYXR0ciIsImNvbnRlbnRzIiwiaHRtbCIsInBvc3RMaW5rIiwic2NvcGUiLCJhdHRycyIsImR1cmF0aW9uIiwiZWFzaW5nIiwiY3NzIiwibGluayIsInRhcmdldCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNsaWRlVG9nZ2xlIiwiZXhwYW5kZWQiLCJiaW5kIiwiY29udGVudCIsInN0eWxlIiwiYm9yZGVyIiwieSIsImNsaWVudEhlaWdodCIsImhlaWdodCIsIiRzY29wZSIsImhhbW1vY2tTcnZjIiwiJHN0YXRlUGFyYW1zIiwiaGFtbW9ja3MiLCJnZXRIYW1tb2NrcyIsImNvbnNvbGUiLCJsb2ciLCIkIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsImhhbW1vY2siLCJnZXRIYW1tb2NrRGV0YWlscyIsImNsaWNrIiwib2Zmc2V0IiwidG9wIiwiYmVzdFNlbGxlcnMiLCJnZXRCZXN0U2VsbGVycyIsIm91dHBvc3RTcnZjIiwic2VydmljZSIsImlkIiwibmFtZSIsImNvbG9yIiwiaW1hZ2UiLCJzdGF0dXMiLCJkZXNjIiwicHJpY2UiLCJzdGF0ZVBhcmFtcyIsImhhbW1vY2tEZXRhaWxzIiwiaSIsImxlbmd0aCIsInBhcnNlSW50Il0sIm1hcHBpbmdzIjoiOztBQUFBQSxRQUFRQyxNQUFSLENBQWUsWUFBZixFQUE2QixDQUFDLFdBQUQsQ0FBN0IsRUFDR0MsTUFESCxDQUNVLFVBQVNDLGNBQVQsRUFBeUJDLGtCQUF6QixFQUE0Qzs7QUFFbERELG1CQUNHRSxLQURILENBQ1MsTUFEVCxFQUNnQjtBQUNWQyxhQUFJLEdBRE07QUFFVkMscUJBQWEsbUJBRkg7QUFHVkMsb0JBQVk7QUFIRixLQURoQixFQU1HSCxLQU5ILENBTVMsT0FOVCxFQU1pQjtBQUNYQyxhQUFJLFFBRE87QUFFWEMscUJBQWEsb0JBRkY7QUFHWEMsb0JBQVk7QUFIRCxLQU5qQixFQVdHSCxLQVhILENBV1MsVUFYVCxFQVdvQjtBQUNkQyxhQUFJLFdBRFU7QUFFZEMscUJBQWEsdUJBRkM7QUFHZEMsb0JBQVk7QUFIRSxLQVhwQixFQWdCR0gsS0FoQkgsQ0FnQlMsZ0JBaEJULEVBZ0IwQjtBQUNwQkMsYUFBSSxxQkFEZ0I7QUFFcEJDLHFCQUFhLDhCQUZPO0FBR3BCQyxvQkFBWTtBQUhRLEtBaEIxQixFQXFCR0gsS0FyQkgsQ0FxQlMsc0JBckJULEVBcUJnQztBQUMxQkMsYUFBSSxtQkFEc0I7QUFFMUJDLHFCQUFhO0FBRmEsS0FyQmhDLEVBeUJHRixLQXpCSCxDQXlCUyxzQkF6QlQsRUF5QmdDO0FBQzFCQyxhQUFJLGVBRHNCO0FBRTFCQyxxQkFBYTtBQUZhLEtBekJoQyxFQTZCR0YsS0E3QkgsQ0E2QlMsd0JBN0JULEVBNkJrQztBQUM1QkMsYUFBSSxpQkFEd0I7QUFFNUJDLHFCQUFhO0FBRmUsS0E3QmxDLEVBaUNHRixLQWpDSCxDQWlDUyxTQWpDVCxFQWlDbUI7QUFDYkMsYUFBSSxVQURTO0FBRWJDLHFCQUFhLHNCQUZBO0FBR2JDLG9CQUFZO0FBSEMsS0FqQ25CLEVBc0NHSCxL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bmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycsIFsndWkucm91dGVyJ10pXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcil7XG5cbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdob21lJyx7XG4gICAgICAgICAgdXJsOicvJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogXCIuL3ZpZXdzL2hvbWUuaHRtbFwiLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdob21lQ3RybCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ3N0b3J5Jyx7XG4gICAgICAgICAgdXJsOicvc3RvcnknLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9zdG9yeS5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnc3RvcnlDdHJsJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnaGFtbW9ja3MnLHtcbiAgICAgICAgICB1cmw6Jy9oYW1tb2NrcycsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2hhbW1vY2tzLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdoYW1tb2NrQ3RybCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2hhbW1vY2tEZXRhaWxzJyx7XG4gICAgICAgICAgdXJsOicvaGFtbW9ja0RldGFpbHMvOmlkJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvaGFtbW9jay1kZXRhaWxzLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdoYW1tb2NrRGV0YWlsc0N0cmwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdoYW1tb2NrRGV0YWlscy5zcGVjcycse1xuICAgICAgICAgIHVybDonL2hhbW1vY2tTcGVjcy86aWQnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9oYW1tb2NrU3BlY3MuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2hhbW1vY2tEZXRhaWxzLnNldHVwJyx7XG4gICAgICAgICAgdXJsOicvaGFtbW9ja1NldHVwJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvaGFtbW9ja1NldHVwLmh0bWwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdoYW1tb2NrRGV0YWlscy5yZXR1cm5zJyx7XG4gICAgICAgICAgdXJsOicvaGFtbW9ja1JldHVybnMnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9oYW1tb2NrUmV0dXJucy5odG1sJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnb3V0cG9zdCcse1xuICAgICAgICAgIHVybDonL291dHBvc3QnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9vdXRwb3N0Lmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdvdXRwb3N0Q3RybCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ291dHBvc3QuZmFxJyx7XG4gICAgICAgICAgdXJsOicvZmFxJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvZmFxLmh0bWwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdvdXRwb3N0LnJlZnVuZHMnLHtcbiAgICAgICAgICB1cmw6Jy9yZWZ1bmRzJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvcmVmdW5kcy5odG1sJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnb3V0cG9zdC52aWRlb3MnLHtcbiAgICAgICAgICB1cmw6Jy92aWRlb3MnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy92aWRlb3MuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2NvbWluZ3Nvb24nLHtcbiAgICAgICAgICB1cmw6Jy9jb21pbmdzb29uJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvY29taW5nc29vbi5odG1sJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnY29udGFjdCcse1xuICAgICAgICAgIHVybDonL2NvbnRhY3QnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9jb250YWN0Lmh0bWwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdqb2luJyx7XG4gICAgICAgICAgdXJsOicvam9pbicsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2pvaW4uaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ2pvaW5DdHJsJ1xuICAgICAgfSk7XG5cbiAgICAkdXJsUm91dGVyUHJvdmlkZXJcbiAgICAgICAgLm90aGVyd2lzZSgnLycpO1xufSlcbi8vaWYgeW91IHdhbnQgZXZlcnkgdmlldyB0byBsb2FkIGF0IHRvcCB1c2UgdGhlIGNvZGUgYmVsb3cgLi4uIHRoaXMgcHJvamVjdCBoYXMgbmVzdGVkIHZpZXdzIHNvIEkgZG9uJ3QhXG5cbi8vIC5ydW4oZnVuY3Rpb24gKCRyb290U2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCAkYW5jaG9yU2Nyb2xsKSB7XG4vL1xuLy8gICAgICRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsIGZ1bmN0aW9uICgpIHtcbi8vICAgICAgICAgJGFuY2hvclNjcm9sbCgpO1xuLy8gICAgIH0pO1xuLy9cbi8vIH0pO1xuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5kaXJlY3RpdmUoJ2N1c3RvbUZvb3RlcicsICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvZm9vdGVyLmh0bWwnXG4gIH07XG59KSAvL2VuZCBvZiBuYXZiYXIgZGlyZWN0aXZlXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpLmRpcmVjdGl2ZSgnbmF2YmFyJywgKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9uYXZiYXIuaHRtbCdcbiAgfTtcbn0pIC8vZW5kIG9mIG5hdmJhciBkaXJlY3RpdmVcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJylcbi5kaXJlY3RpdmUoJ3NsaWRlYWJsZScsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByZXN0cmljdDonQycsXG4gICAgICAgIGNvbXBpbGU6IGZ1bmN0aW9uIChlbGVtZW50LCBhdHRyKSB7XG4gICAgICAgICAgICAvLyB3cmFwIHRhZ1xuICAgICAgICAgICAgdmFyIGNvbnRlbnRzID0gZWxlbWVudC5odG1sKCk7XG4gICAgICAgICAgICBlbGVtZW50Lmh0bWwoJzxkaXYgY2xhc3M9XCJzbGlkZWFibGVfY29udGVudFwiIHN0eWxlPVwibWFyZ2luOjAgIWltcG9ydGFudDsgcGFkZGluZzowICFpbXBvcnRhbnRcIiA+JyArIGNvbnRlbnRzICsgJzwvZGl2PicpO1xuXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gcG9zdExpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAgICAgICAgICAgLy8gZGVmYXVsdCBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgYXR0cnMuZHVyYXRpb24gPSAoIWF0dHJzLmR1cmF0aW9uKSA/ICcxcycgOiBhdHRycy5kdXJhdGlvbjtcbiAgICAgICAgICAgICAgICBhdHRycy5lYXNpbmcgPSAoIWF0dHJzLmVhc2luZykgPyAnZWFzZS1pbi1vdXQnIDogYXR0cnMuZWFzaW5nO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ292ZXJmbG93JzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgICdoZWlnaHQnOiAnMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25Qcm9wZXJ0eSc6ICdoZWlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAndHJhbnNpdGlvbkR1cmF0aW9uJzogYXR0cnMuZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24nOiBhdHRycy5lYXNpbmdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9O1xufSlcbi5kaXJlY3RpdmUoJ3NsaWRlVG9nZ2xlJywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhdHRycy5zbGlkZVRvZ2dsZSk7XG4gICAgICAgICAgICBhdHRycy5leHBhbmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgZWxlbWVudC5iaW5kKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBjb250ZW50ID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZWFibGVfY29udGVudCcpO1xuICAgICAgICAgICAgICAgIGlmKCFhdHRycy5leHBhbmRlZCkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgcmdiYSgwLDAsMCwwKSc7XG4gICAgICAgICAgICAgICAgICAgIHZhciB5ID0gY29udGVudC5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUuYm9yZGVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IHkgKyAncHgnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSAnMHB4JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXR0cnMuZXhwYW5kZWQgPSAhYXR0cnMuZXhwYW5kZWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5jb250cm9sbGVyKCdoYW1tb2NrQ3RybCcsICgkc2NvcGUsIGhhbW1vY2tTcnZjLCAkc3RhdGVQYXJhbXMpID0+IHtcblxuICAkc2NvcGUuaGFtbW9ja3MgPSBoYW1tb2NrU3J2Yy5nZXRIYW1tb2NrcygpO1xuICBjb25zb2xlLmxvZygkc2NvcGUuaGFtbW9ja3MpO1xuXG4gICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgMjAwKTtcblxufSkvL2VuZCBvZiBob21lIGNvbnRyb2xsZXJcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJylcbi5jb250cm9sbGVyKCdoYW1tb2NrRGV0YWlsc0N0cmwnLCAoJHNjb3BlLCBoYW1tb2NrU3J2YywgJHN0YXRlUGFyYW1zKSA9PiB7XG5cbiAgJHNjb3BlLmhhbW1vY2sgPSBoYW1tb2NrU3J2Yy5nZXRIYW1tb2NrRGV0YWlscygkc3RhdGVQYXJhbXMpO1xuICBjb25zb2xlLmxvZygkc2NvcGUuaGFtbW9jayk7XG5cbiAgJChcIiNzY3JvbGwtc3BlY3NcIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgc2Nyb2xsVG9wOiAkKFwiI3NwZWNzXCIpLm9mZnNldCgpLnRvcFxuICAgICAgfSwgMTAwMCk7XG4gIH0pO1xuICAkKFwiI3Njcm9sbC1zZXR1cFwiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICBzY3JvbGxUb3A6ICQoXCIjc3BlY3NcIikub2Zmc2V0KCkudG9wXG4gICAgICB9LCAxMDAwKTtcbiAgfSk7XG4gICQoXCIjc2Nyb2xsLXJldHVybnNcIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgc2Nyb2xsVG9wOiAkKFwiI3NwZWNzXCIpLm9mZnNldCgpLnRvcFxuICAgICAgfSwgMTAwMCk7XG4gIH0pO1xuXG4gICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgMjAwKTtcblxufSlcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJylcbi5jb250cm9sbGVyKCdob21lQ3RybCcsICgkc2NvcGUsIGhhbW1vY2tTcnZjLCAkc3RhdGVQYXJhbXMpID0+IHtcblxuICAkc2NvcGUuYmVzdFNlbGxlcnMgPSBoYW1tb2NrU3J2Yy5nZXRCZXN0U2VsbGVycygpO1xuICBjb25zb2xlLmxvZygkc2NvcGUuYmVzdFNlbGxlcnMpO1xuXG4gICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgMjAwKTtcblxuXG59KS8vZW5kIG9mIGhvbWUgY29udHJvbGxlclxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5jb250cm9sbGVyKCdvdXRwb3N0Q3RybCcsICgkc2NvcGUsIG91dHBvc3RTcnZjLCAkc3RhdGVQYXJhbXMpID0+IHtcblxuICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIDIwMCk7XG5cbn0pLy9lbmQgb2YgY29udHJvbGxlclxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5jb250cm9sbGVyKCdzdG9yeUN0cmwnLCAoJHNjb3BlLCBoYW1tb2NrU3J2YywgJHN0YXRlUGFyYW1zKSA9PiB7XG5cbiAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCAyMDApO1xuXG59KS8vZW5kIG9mIGhvbWUgY29udHJvbGxlclxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5zZXJ2aWNlKCdoYW1tb2NrU3J2YycsIGZ1bmN0aW9uKCl7XG5cblxuICB0aGlzLmJlc3RTZWxsZXJzID0gW3tcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIG5hbWU6ICdUaGUgU3VucmlzZScsXG4gICAgICAgIGNvbG9yOiAnT3JhbmdlL0dyZXknLFxuICAgICAgICBpbWFnZTogXCIuLi9pbWcvaGFtbW9ja3Mvc3VucmlzZS5qcGdcIixcbiAgICAgICAgc3RhdHVzOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgZGVzYzogJ1RoZSBiZXN0IGhhbW1vY2sgb3V0IHRoZXJlISBHcmVhdCBmb3IgMSwgcGVyZmVjdCBmb3IgMi4gRWFzaWx5IHRyYW5zcG9ydGFibGUgYW5kIHN0dWZmcyByaWdodCBpbnRvIHRoZSBhdHRhY2hlZCBzYWNrLiBTZXQgdXAgaW4gc2Vjb25kcyBiZWNhdXNlIG91ciByb3BlcyBhbGwgY29tZSB3aXRoIHByZXRpZWQga25vdHMhJyxcbiAgICAgICAgcHJpY2U6IDM0Ljk5XG4gICAgfSwge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogJ1RoZSBHZXlzZXInLFxuICAgICAgICBjb2xvcjogJ0xpZ2h0IEJsdWUvQmx1ZScsXG4gICAgICAgIGltYWdlOiBcIi4uL2ltZy9oYW1tb2Nrcy9ibHVlaGFtbW9jay5qcGdcIixcbiAgICAgICAgc3RhdHVzOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgZGVzYzogJ1RoZSBiZXN0IGhhbW1vY2sgb3V0IHRoZXJlISBHcmVhdCBmb3IgMSwgcGVyZmVjdCBmb3IgMi4gRWFzaWx5IHRyYW5zcG9ydGFibGUgYW5kIHN0dWZmcyByaWdodCBpbnRvIHRoZSBhdHRhY2hlZCBzYWNrLiBTZXQgdXAgaW4gc2Vjb25kcyBiZWNhdXNlIG91ciByb3BlcyBhbGwgY29tZSB3aXRoIHByZXRpZWQga25vdHMhJyxcbiAgICAgICAgcHJpY2U6IDM0Ljk5XG4gICAgfSx7XG4gICAgICAgIGlkOiA1LFxuICAgICAgICBuYW1lOiAnVGhlIE1lYWRvdycsXG4gICAgICAgIGNvbG9yOiAnTGltZSBHcmVlbi8gTGlnaHQgQmx1ZS8gV2hpdGUnLFxuICAgICAgICBpbWFnZTogXCIuLi9pbWcvaGFtbW9ja3MvbWVhZG93aGFtbW9jay5qcGdcIixcbiAgICAgICAgc3RhdHVzOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgZGVzYzogJ1RoZSBiZXN0IGhhbW1vY2sgb3V0IHRoZXJlISBHcmVhdCBmb3IgMSwgcGVyZmVjdCBmb3IgMi4gRWFzaWx5IHRyYW5zcG9ydGFibGUgYW5kIHN0dWZmcyByaWdodCBpbnRvIHRoZSBhdHRhY2hlZCBzYWNrLiBTZXQgdXAgaW4gc2Vjb25kcyBiZWNhdXNlIG91ciByb3BlcyBhbGwgY29tZSB3aXRoIHByZXRpZWQga25vdHMhJyxcbiAgICAgICAgcHJpY2U6IDM0Ljk5XG4gICAgfV1cblxuICB0aGlzLmhhbW1vY2tzID0gW3tcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIG5hbWU6ICdUaGUgU3VucmlzZScsXG4gICAgICAgIGNvbG9yOiAnb3JhbmdlL2dyYXknLFxuICAgICAgICBpbWFnZTogXCIuLi9pbWcvaGFtbW9ja3Mvc3VucmlzZS5qcGdcIixcbiAgICAgICAgc3RhdHVzOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgZGVzYzogJ1RoZSBiZXN0IGhhbW1vY2sgb3V0IHRoZXJlISBHcmVhdCBmb3IgMSwgcGVyZmVjdCBmb3IgMi4gRWFzaWx5IHRyYW5zcG9ydGFibGUgYW5kIHN0dWZmcyByaWdodCBpbnRvIHRoZSBhdHRhY2hlZCBzYWNrLiBTZXQgdXAgaW4gc2Vjb25kcyBiZWNhdXNlIG91ciByb3BlcyBhbGwgY29tZSB3aXRoIHByZXRpZWQga25vdHMhJyxcbiAgICAgICAgcHJpY2U6IDM0Ljk5XG4gICAgfSwge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogJ1RoZSBHZXlzZXInLFxuICAgICAgICBjb2xvcjogJ2JsdWUvbGlnaHQgYmx1ZScsXG4gICAgICAgIGltYWdlOiBcIi4uL2ltZy9oYW1tb2Nrcy9ibHVlaGFtbW9jay5qcGdcIixcbiAgICAgICAgc3RhdHVzOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgZGVzYzogJ1RoZSBiZXN0IGhhbW1vY2sgb3V0IHRoZXJlISBHcmVhdCBmb3IgMSwgcGVyZmVjdCBmb3IgMi4gRWFzaWx5IHRyYW5zcG9ydGFibGUgYW5kIHN0dWZmcyByaWdodCBpbnRvIHRoZSBhdHRhY2hlZCBzYWNrLiBTZXQgdXAgaW4gc2Vjb25kcyBiZWNhdXNlIG91ciByb3BlcyBhbGwgY29tZSB3aXRoIHByZXRpZWQga25vdHMhJyxcbiAgICAgICAgcHJpY2U6IDM0Ljk5XG4gICAgfSx7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBuYW1lOiAnVGhlIFdvb2RsYW5kJyxcbiAgICAgICAgY29sb3I6ICdncmVlbi9ncmF5JyxcbiAgICAgICAgaW1hZ2U6IFwiLi4vaW1nL2hhbW1vY2tzL2dyZWVuaGFtbW9jay5qcGdcIixcbiAgICAgICAgc3RhdHVzOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgZGVzYzogJ1RoZSBiZXN0IGhhbW1vY2sgb3V0IHRoZXJlISBHcmVhdCBmb3IgMSwgcGVyZmVjdCBmb3IgMi4gRWFzaWx5IHRyYW5zcG9ydGFibGUgYW5kIHN0dWZmcyByaWdodCBpbnRvIHRoZSBhdHRhY2hlZCBzYWNrLiBTZXQgdXAgaW4gc2Vjb25kcyBiZWNhdXNlIG91ciByb3BlcyBhbGwgY29tZSB3aXRoIHByZXRpZWQga25vdHMhJyxcbiAgICAgICAgcHJpY2U6IDM0Ljk5XG4gICAgfSx7XG4gICAgICAgIGlkOiA0LFxuICAgICAgICBuYW1lOiAnVGhlIFN1bW1pdCcsXG4gICAgICAgIGNvbG9yOiAnY2hhcmNvYWwvbWFyb29uJyxcbiAgICAgICAgaW1hZ2U6IFwiLi4vaW1nL2hhbW1vY2tzL3N1bW1pdC5qcGdcIixcbiAgICAgICAgc3RhdHVzOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgZGVzYzogJ1RoZSBiZXN0IGhhbW1vY2sgb3V0IHRoZXJlISBHcmVhdCBmb3IgMSwgcGVyZmVjdCBmb3IgMi4gRWFzaWx5IHRyYW5zcG9ydGFibGUgYW5kIHN0dWZmcyByaWdodCBpbnRvIHRoZSBhdHRhY2hlZCBzYWNrLiBTZXQgdXAgaW4gc2Vjb25kcyBiZWNhdXNlIG91ciByb3BlcyBhbGwgY29tZSB3aXRoIHByZXRpZWQga25vdHMhJyxcbiAgICAgICAgcHJpY2U6IDM0Ljk5XG4gICAgfSx7XG4gICAgICAgIGlkOiA1LFxuICAgICAgICBuYW1lOiAnVGhlIE1lYWRvdycsXG4gICAgICAgIGNvbG9yOiAnbGltZSBncmVlbi8gbGlnaHQgYmx1ZS8gd2hpdGUnLFxuICAgICAgICBpbWFnZTogXCIuLi9pbWcvaGFtbW9ja3MvbWVhZG93aGFtbW9jay5qcGdcIixcbiAgICAgICAgc3RhdHVzOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgZGVzYzogJ1RoZSBiZXN0IGhhbW1vY2sgb3V0IHRoZXJlISBHcmVhdCBmb3IgMSwgcGVyZmVjdCBmb3IgMi4gRWFzaWx5IHRyYW5zcG9ydGFibGUgYW5kIHN0dWZmcyByaWdodCBpbnRvIHRoZSBhdHRhY2hlZCBzYWNrLiBTZXQgdXAgaW4gc2Vjb25kcyBiZWNhdXNlIG91ciByb3BlcyBhbGwgY29tZSB3aXRoIHByZXRpZWQga25vdHMhJyxcbiAgICAgICAgcHJpY2U6IDM0Ljk5XG4gICAgfV1cblxuICAgIHRoaXMuZ2V0QmVzdFNlbGxlcnMgPSAoKSA9PiB7XG4gICAgICBsZXQgYmVzdFNlbGxlcnMgPSB0aGlzLmJlc3RTZWxsZXJzO1xuICAgICAgcmV0dXJuIGJlc3RTZWxsZXJzO1xuICAgIH1cblxuICAgIHRoaXMuZ2V0SGFtbW9ja3MgPSAoKSA9PiB7XG4gICAgICBsZXQgaGFtbW9ja3MgPSB0aGlzLmhhbW1vY2tzO1xuICAgICAgcmV0dXJuIGhhbW1vY2tzO1xuICAgIH1cblxuICAgIHRoaXMuZ2V0SGFtbW9ja0RldGFpbHMgPSAoc3RhdGVQYXJhbXMpID0+IHtcbiAgICAgIGxldCBoYW1tb2NrRGV0YWlscyA9IHRoaXMuaGFtbW9ja3M7XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgaGFtbW9ja0RldGFpbHMubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zb2xlLmxvZyhoYW1tb2NrRGV0YWlscywgc3RhdGVQYXJhbXMpO1xuICAgICAgICBpZihoYW1tb2NrRGV0YWlsc1tpXS5pZCA9PT0gcGFyc2VJbnQoc3RhdGVQYXJhbXMuaWQpKXtcbiAgICAgICAgICByZXR1cm4gaGFtbW9ja0RldGFpbHNbaV1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuXG5cblxufSkvL2VuZCBvZiBzZXJ2aWNlXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpLnNlcnZpY2UoJ291dHBvc3RTcnZjJywgZnVuY3Rpb24oKXtcblxuXG59KS8vZW5kIG9mIHNlcnZpY2U7XG4iXX0=
