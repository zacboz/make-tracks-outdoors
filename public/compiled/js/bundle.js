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
        image: "./img/hammocks/product/sunrisehammock.jpg",
        image1: "./img/hammocks/product/sunrisehammockandbag.jpg",
        image2: "",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes all come with pretied knots!',
        price: 34.99
    }, {
        id: 2,
        name: 'The Wave',
        color: 'Light Blue/Blue',
        image: "./img/hammocks/product/wavehammock.jpg",
        image1: "./img/hammocks/product/wavehammockandbag.jpg",
        image2: "",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes all come with pretied knots!',
        price: 34.99
    }, {
        id: 5,
        name: 'The Breeze',
        color: 'Lime Green/ Light Blue/ White',
        image: "./img/hammocks/product/oasishammock.jpg",
        image1: "./img/hammocks/product/oasishammockandbag.jpg",
        image2: "",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes all come with pretied knots!',
        price: 34.99
    }];

    this.hammocks = [{
        id: 1,
        name: 'The Sunrise',
        color: 'orange/gray',
        image: "./img/hammocks/product/sunrisehammock.jpg",
        image1: "./img/hammocks/product/summithammockandbag.jpg",
        image2: "",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes all come with pretied knots!',
        price: 34.99
    }, {
        id: 2,
        name: 'The Wave',
        color: 'blue/light blue',
        image: "./img/hammocks/product/wavehammock.jpg",
        image1: "./img/hammocks/product/wavehammockandbag.jpg",
        image2: "",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes all come with pretied knots!',
        price: 34.99
    }, {
        id: 3,
        name: 'The Woodland',
        color: 'green/gray',
        image: "./img/hammocks/product/woodlandhammock.jpg",
        image1: "./img/hammocks/product/woodlandhammockandbag.jpg",
        image2: "",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes all come with pretied knots!',
        price: 34.99
    }, {
        id: 4,
        name: 'The Summit',
        color: 'charcoal/maroon',
        image: "./img/hammocks/product/summithammock.jpg",
        image1: "./img/hammocks/product/summithammockandbag.jpg",
        image2: "",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes all come with pretied knots!',
        price: 34.99
    }, {
        id: 5,
        name: 'The Breeze',
        color: 'lime green/ light blue/ white',
        image: "./img/hammocks/product/oasishammock.jpg",
        image1: "./img/hammocks/product/oasishammockandbag.jpg",
        image2: "",
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImRpcmVjdGl2ZXMvZm9vdGVyLmpzIiwiZGlyZWN0aXZlcy9uYXZiYXIuanMiLCJkaXJlY3RpdmVzL3NsaWRlYWJsZS5qcyIsInNlcnZpY2VzL2hhbW1vY2tTcnZjLmpzIiwiY29udHJvbGxlcnMvY29udGFjdEN0cmwuanMiLCJjb250cm9sbGVycy9oYW1tb2NrQ3RybC5qcyIsImNvbnRyb2xsZXJzL2hhbW1vY2tEZXRhaWxzQ3RybC5qcyIsImNvbnRyb2xsZXJzL2hvbWVDdHJsLmpzIiwiY29udHJvbGxlcnMvb3V0cG9zdEN0cmwuanMiLCJjb250cm9sbGVycy9zdG9yeUN0cmwuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImNvbmZpZyIsIiRzdGF0ZVByb3ZpZGVyIiwiJHVybFJvdXRlclByb3ZpZGVyIiwic3RhdGUiLCJ1cmwiLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXIiLCJvdGhlcndpc2UiLCJkaXJlY3RpdmUiLCJyZXN0cmljdCIsImNvbXBpbGUiLCJlbGVtZW50IiwiYXR0ciIsImNvbnRlbnRzIiwiaHRtbCIsInBvc3RMaW5rIiwic2NvcGUiLCJhdHRycyIsImR1cmF0aW9uIiwiZWFzaW5nIiwiY3NzIiwibGluayIsInRhcmdldCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNsaWRlVG9nZ2xlIiwiZXhwYW5kZWQiLCJiaW5kIiwiY29udGVudCIsInN0eWxlIiwiYm9yZGVyIiwieSIsImNsaWVudEhlaWdodCIsImhlaWdodCIsInNlcnZpY2UiLCJiZXN0U2VsbGVycyIsImlkIiwibmFtZSIsImNvbG9yIiwiaW1hZ2UiLCJpbWFnZTEiLCJpbWFnZTIiLCJzdGF0dXMiLCJkZXNjIiwicHJpY2UiLCJoYW1tb2NrcyIsImdldEJlc3RTZWxsZXJzIiwiZ2V0SGFtbW9ja3MiLCJnZXRIYW1tb2NrRGV0YWlscyIsInN0YXRlUGFyYW1zIiwiaGFtbW9ja0RldGFpbHMiLCJpIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInBhcnNlSW50IiwiJHNjb3BlIiwiaGFtbW9ja1NydmMiLCIkc3RhdGVQYXJhbXMiLCIkIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsImhhbW1vY2siLCJjbGljayIsIm9mZnNldCIsInRvcCJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsUUFBUUMsTUFBUixDQUFlLFlBQWYsRUFBNkIsQ0FBQyxXQUFELENBQTdCLEVBQ0dDLE1BREgsQ0FDVSxVQUFTQyxjQUFULEVBQXlCQyxrQkFBekIsRUFBNEM7O0FBRWxERCxtQkFDR0UsS0FESCxDQUNTLE1BRFQsRUFDZ0I7QUFDVkMsYUFBSSxHQURNO0FBRVZDLHFCQUFhLG1CQUZIO0FBR1ZDLG9CQUFZO0FBSEYsS0FEaEIsRUFNR0gsS0FOSCxDQU1TLE9BTlQsRUFNaUI7QUFDWEMsYUFBSSxRQURPO0FBRVhDLHFCQUFhLG9CQUZGO0FBR1hDLG9CQUFZO0FBSEQsS0FOakIsRUFXR0gsS0FYSCxDQVdTLFVBWFQsRUFXb0I7QUFDZEMsYUFBSSxXQURVO0FBRWRDLHFCQUFhLHVCQUZDO0FBR2RDLG9CQUFZO0FBSEUsS0FYcEIsRUFnQkdILEtBaEJILENBZ0JTLGdCQWhCVCxFQWdCMEI7QUFDcEJDLGFBQUkscUJBRGdCO0FBRXBCQyxxQkFBYSw4QkFGTztBQUdwQkMsb0JBQVk7QUFIUSxLQWhCMUIsRUFxQkdILEtBckJILENBcUJTLHNCQXJCVCxFQXFCZ0M7QUFDMUJDLGFBQUksbUJBRHNCO0FBRTFCQyxxQkFBYTtBQUZhLEtBckJoQyxFQXlCR0YsS0F6QkgsQ0F5QlMsc0JBekJULEVBeUJnQztBQUMxQkMsYUFBSSxlQURzQjtBQUUxQkMscUJBQWE7QUFGYSxLQXpCaEMsRUE2QkdGLEtBN0JILENBNkJTLHdCQTdCVCxFQTZCa0M7QUFDNUJDLGFBQUksaUJBRHdCO0FBRTVCQyxxQkFBYTtBQUZlLEtBN0JsQyxFQWlDR0YsS0FqQ0gsQ0FpQ1MsU0FqQ1QsRUFpQ21CO0FBQ2JDLGFBQUksVUFEUztBQUViQyxxQkFBYSxzQkFGQTtBQUdiQyxvQkFBWTtBQUhDLEtBakNuQixF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QUFFLFlBQUYsRUFBZ0JDLE9BQWhCLENBQXdCLEVBQUVDLFdBQVcsQ0FBYixFQUF4QixFQUEwQyxHQUExQztBQUVELENBSkQsR0FJRTs7O0FDSkYvRCxRQUFRQyxNQUFSLENBQWUsWUFBZixFQUE2Qk8sVUFBN0IsQ0FBd0MsV0FBeEMsRUFBcUQsVUFBQ2tELE1BQUQsRUFBU0MsV0FBVCxFQUFzQkMsWUFBdEIsRUFBdUM7O0FBRTFGQyxJQUFFLFlBQUYsRUFBZ0JDLE9BQWhCLENBQXdCLEVBQUVDLFdBQVcsQ0FBYixFQUF4QixFQUEwQyxHQUExQztBQUVELENBSkQsR0FJRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycsIFsndWkucm91dGVyJ10pXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcil7XG5cbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdob21lJyx7XG4gICAgICAgICAgdXJsOicvJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogXCIuL3ZpZXdzL2hvbWUuaHRtbFwiLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdob21lQ3RybCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ3N0b3J5Jyx7XG4gICAgICAgICAgdXJsOicvc3RvcnknLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9zdG9yeS5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnc3RvcnlDdHJsJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnaGFtbW9ja3MnLHtcbiAgICAgICAgICB1cmw6Jy9oYW1tb2NrcycsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2hhbW1vY2tzLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdoYW1tb2NrQ3RybCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2hhbW1vY2tEZXRhaWxzJyx7XG4gICAgICAgICAgdXJsOicvaGFtbW9ja0RldGFpbHMvOmlkJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvaGFtbW9jay1kZXRhaWxzLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdoYW1tb2NrRGV0YWlsc0N0cmwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdoYW1tb2NrRGV0YWlscy5zcGVjcycse1xuICAgICAgICAgIHVybDonL2hhbW1vY2tTcGVjcy86aWQnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9oYW1tb2NrU3BlY3MuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2hhbW1vY2tEZXRhaWxzLnNldHVwJyx7XG4gICAgICAgICAgdXJsOicvaGFtbW9ja1NldHVwJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvaGFtbW9ja1NldHVwLmh0bWwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdoYW1tb2NrRGV0YWlscy5yZXR1cm5zJyx7XG4gICAgICAgICAgdXJsOicvaGFtbW9ja1JldHVybnMnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9oYW1tb2NrUmV0dXJucy5odG1sJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnb3V0cG9zdCcse1xuICAgICAgICAgIHVybDonL291dHBvc3QnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9vdXRwb3N0Lmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdvdXRwb3N0Q3RybCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ291dHBvc3QuZmFxJyx7XG4gICAgICAgICAgdXJsOicvZmFxJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvZmFxLmh0bWwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdvdXRwb3N0LnJlZnVuZHMnLHtcbiAgICAgICAgICB1cmw6Jy9yZWZ1bmRzJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvcmVmdW5kcy5odG1sJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnb3V0cG9zdC52aWRlb3MnLHtcbiAgICAgICAgICB1cmw6Jy92aWRlb3MnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy92aWRlb3MuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2NvbWluZ3Nvb24nLHtcbiAgICAgICAgICB1cmw6Jy9jb21pbmdzb29uJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvY29taW5nc29vbi5odG1sJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnY29udGFjdCcse1xuICAgICAgICAgIHVybDonL2NvbnRhY3QnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9jb250YWN0Lmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdjb250YWN0Q3RybCdcbiAgICAgIH0pO1xuXG4gICAgJHVybFJvdXRlclByb3ZpZGVyXG4gICAgICAgIC5vdGhlcndpc2UoJy8nKTtcbn0pXG4vL2lmIHlvdSB3YW50IGV2ZXJ5IHZpZXcgdG8gbG9hZCBhdCB0b3AgdXNlIHRoZSBjb2RlIGJlbG93IC4uLiB0aGlzIHByb2plY3QgaGFzIG5lc3RlZCB2aWV3cyBzbyBJIGRvbid0IVxuXG4vLyAucnVuKGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgJGFuY2hvclNjcm9sbCkge1xuLy9cbi8vICAgICAkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3RhcnQnLCBmdW5jdGlvbiAoKSB7XG4vLyAgICAgICAgICRhbmNob3JTY3JvbGwoKTtcbi8vICAgICB9KTtcbi8vXG4vLyB9KTtcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJykuZGlyZWN0aXZlKCdjdXN0b21Gb290ZXInLCAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2Zvb3Rlci5odG1sJ1xuICB9O1xufSkgLy9lbmQgb2YgbmF2YmFyIGRpcmVjdGl2ZVxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5kaXJlY3RpdmUoJ25hdmJhcicsICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvbmF2YmFyLmh0bWwnXG4gIH07XG59KSAvL2VuZCBvZiBuYXZiYXIgZGlyZWN0aXZlXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpXG4uZGlyZWN0aXZlKCdzbGlkZWFibGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6J0MnLFxuICAgICAgICBjb21waWxlOiBmdW5jdGlvbiAoZWxlbWVudCwgYXR0cikge1xuICAgICAgICAgICAgLy8gd3JhcCB0YWdcbiAgICAgICAgICAgIHZhciBjb250ZW50cyA9IGVsZW1lbnQuaHRtbCgpO1xuICAgICAgICAgICAgZWxlbWVudC5odG1sKCc8ZGl2IGNsYXNzPVwic2xpZGVhYmxlX2NvbnRlbnRcIiBzdHlsZT1cIm1hcmdpbjowICFpbXBvcnRhbnQ7IHBhZGRpbmc6MCAhaW1wb3J0YW50XCIgPicgKyBjb250ZW50cyArICc8L2Rpdj4nKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHBvc3RMaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICAgICAgICAgIC8vIGRlZmF1bHQgcHJvcGVydGllc1xuICAgICAgICAgICAgICAgIGF0dHJzLmR1cmF0aW9uID0gKCFhdHRycy5kdXJhdGlvbikgPyAnMXMnIDogYXR0cnMuZHVyYXRpb247XG4gICAgICAgICAgICAgICAgYXR0cnMuZWFzaW5nID0gKCFhdHRycy5lYXNpbmcpID8gJ2Vhc2UtaW4tb3V0JyA6IGF0dHJzLmVhc2luZztcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICdvdmVyZmxvdyc6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICAnaGVpZ2h0JzogJzBweCcsXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uUHJvcGVydHknOiAnaGVpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25EdXJhdGlvbic6IGF0dHJzLmR1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAndHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uJzogYXR0cnMuZWFzaW5nXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfTtcbn0pXG4uZGlyZWN0aXZlKCdzbGlkZVRvZ2dsZScsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYXR0cnMuc2xpZGVUb2dnbGUpO1xuICAgICAgICAgICAgYXR0cnMuZXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGVsZW1lbnQuYmluZCgnY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29udGVudCA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVhYmxlX2NvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICBpZighYXR0cnMuZXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkIHJnYmEoMCwwLDAsMCknO1xuICAgICAgICAgICAgICAgICAgICB2YXIgeSA9IGNvbnRlbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLmJvcmRlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSB5ICsgJ3B4JztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF0dHJzLmV4cGFuZGVkID0gIWF0dHJzLmV4cGFuZGVkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJykuc2VydmljZSgnaGFtbW9ja1NydmMnLCBmdW5jdGlvbigpe1xuXG5cbiAgdGhpcy5iZXN0U2VsbGVycyA9IFt7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiAnVGhlIFN1bnJpc2UnLFxuICAgICAgICBjb2xvcjogJ09yYW5nZS9HcmV5JyxcbiAgICAgICAgaW1hZ2U6IFwiLi9pbWcvaGFtbW9ja3MvcHJvZHVjdC9zdW5yaXNlaGFtbW9jay5qcGdcIixcbiAgICAgICAgaW1hZ2UxOiBcIi4vaW1nL2hhbW1vY2tzL3Byb2R1Y3Qvc3VucmlzZWhhbW1vY2thbmRiYWcuanBnXCIsXG4gICAgICAgIGltYWdlMjogXCJcIixcbiAgICAgICAgc3RhdHVzOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgZGVzYzogJ1RoZSBiZXN0IGhhbW1vY2sgb3V0IHRoZXJlISBHcmVhdCBmb3IgMSwgcGVyZmVjdCBmb3IgMi4gRWFzaWx5IHRyYW5zcG9ydGFibGUgYW5kIHN0dWZmcyByaWdodCBpbnRvIHRoZSBhdHRhY2hlZCBzYWNrLiBTZXQgdXAgaW4gc2Vjb25kcyBiZWNhdXNlIG91ciByb3BlcyBhbGwgY29tZSB3aXRoIHByZXRpZWQga25vdHMhJyxcbiAgICAgICAgcHJpY2U6IDM0Ljk5XG4gICAgfSwge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogJ1RoZSBXYXZlJyxcbiAgICAgICAgY29sb3I6ICdMaWdodCBCbHVlL0JsdWUnLFxuICAgICAgICBpbWFnZTogXCIuL2ltZy9oYW1tb2Nrcy9wcm9kdWN0L3dhdmVoYW1tb2NrLmpwZ1wiLFxuICAgICAgICBpbWFnZTE6IFwiLi9pbWcvaGFtbW9ja3MvcHJvZHVjdC93YXZlaGFtbW9ja2FuZGJhZy5qcGdcIixcbiAgICAgICAgaW1hZ2UyOiBcIlwiLFxuICAgICAgICBzdGF0dXM6ICdDb21pbmcgTWF5IDIwMTcnLFxuICAgICAgICBkZXNjOiAnVGhlIGJlc3QgaGFtbW9jayBvdXQgdGhlcmUhIEdyZWF0IGZvciAxLCBwZXJmZWN0IGZvciAyLiBFYXNpbHkgdHJhbnNwb3J0YWJsZSBhbmQgc3R1ZmZzIHJpZ2h0IGludG8gdGhlIGF0dGFjaGVkIHNhY2suIFNldCB1cCBpbiBzZWNvbmRzIGJlY2F1c2Ugb3VyIHJvcGVzIGFsbCBjb21lIHdpdGggcHJldGllZCBrbm90cyEnLFxuICAgICAgICBwcmljZTogMzQuOTlcbiAgICB9LHtcbiAgICAgICAgaWQ6IDUsXG4gICAgICAgIG5hbWU6ICdUaGUgQnJlZXplJyxcbiAgICAgICAgY29sb3I6ICdMaW1lIEdyZWVuLyBMaWdodCBCbHVlLyBXaGl0ZScsXG4gICAgICAgIGltYWdlOiBcIi4vaW1nL2hhbW1vY2tzL3Byb2R1Y3Qvb2FzaXNoYW1tb2NrLmpwZ1wiLFxuICAgICAgICBpbWFnZTE6IFwiLi9pbWcvaGFtbW9ja3MvcHJvZHVjdC9vYXNpc2hhbW1vY2thbmRiYWcuanBnXCIsXG4gICAgICAgIGltYWdlMjogXCJcIixcbiAgICAgICAgc3RhdHVzOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgZGVzYzogJ1RoZSBiZXN0IGhhbW1vY2sgb3V0IHRoZXJlISBHcmVhdCBmb3IgMSwgcGVyZmVjdCBmb3IgMi4gRWFzaWx5IHRyYW5zcG9ydGFibGUgYW5kIHN0dWZmcyByaWdodCBpbnRvIHRoZSBhdHRhY2hlZCBzYWNrLiBTZXQgdXAgaW4gc2Vjb25kcyBiZWNhdXNlIG91ciByb3BlcyBhbGwgY29tZSB3aXRoIHByZXRpZWQga25vdHMhJyxcbiAgICAgICAgcHJpY2U6IDM0Ljk5XG4gICAgfV1cblxuICB0aGlzLmhhbW1vY2tzID0gW3tcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIG5hbWU6ICdUaGUgU3VucmlzZScsXG4gICAgICAgIGNvbG9yOiAnb3JhbmdlL2dyYXknLFxuICAgICAgICBpbWFnZTogXCIuL2ltZy9oYW1tb2Nrcy9wcm9kdWN0L3N1bnJpc2VoYW1tb2NrLmpwZ1wiLFxuICAgICAgICBpbWFnZTE6IFwiLi9pbWcvaGFtbW9ja3MvcHJvZHVjdC9zdW1taXRoYW1tb2NrYW5kYmFnLmpwZ1wiLFxuICAgICAgICBpbWFnZTI6IFwiXCIsXG4gICAgICAgIHN0YXR1czogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGRlc2M6ICdUaGUgYmVzdCBoYW1tb2NrIG91dCB0aGVyZSEgR3JlYXQgZm9yIDEsIHBlcmZlY3QgZm9yIDIuIEVhc2lseSB0cmFuc3BvcnRhYmxlIGFuZCBzdHVmZnMgcmlnaHQgaW50byB0aGUgYXR0YWNoZWQgc2Fjay4gU2V0IHVwIGluIHNlY29uZHMgYmVjYXVzZSBvdXIgcm9wZXMgYWxsIGNvbWUgd2l0aCBwcmV0aWVkIGtub3RzIScsXG4gICAgICAgIHByaWNlOiAzNC45OVxuICAgIH0sIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIG5hbWU6ICdUaGUgV2F2ZScsXG4gICAgICAgIGNvbG9yOiAnYmx1ZS9saWdodCBibHVlJyxcbiAgICAgICAgaW1hZ2U6IFwiLi9pbWcvaGFtbW9ja3MvcHJvZHVjdC93YXZlaGFtbW9jay5qcGdcIixcbiAgICAgICAgaW1hZ2UxOiBcIi4vaW1nL2hhbW1vY2tzL3Byb2R1Y3Qvd2F2ZWhhbW1vY2thbmRiYWcuanBnXCIsXG4gICAgICAgIGltYWdlMjogXCJcIixcbiAgICAgICAgc3RhdHVzOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgZGVzYzogJ1RoZSBiZXN0IGhhbW1vY2sgb3V0IHRoZXJlISBHcmVhdCBmb3IgMSwgcGVyZmVjdCBmb3IgMi4gRWFzaWx5IHRyYW5zcG9ydGFibGUgYW5kIHN0dWZmcyByaWdodCBpbnRvIHRoZSBhdHRhY2hlZCBzYWNrLiBTZXQgdXAgaW4gc2Vjb25kcyBiZWNhdXNlIG91ciByb3BlcyBhbGwgY29tZSB3aXRoIHByZXRpZWQga25vdHMhJyxcbiAgICAgICAgcHJpY2U6IDM0Ljk5XG4gICAgfSx7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBuYW1lOiAnVGhlIFdvb2RsYW5kJyxcbiAgICAgICAgY29sb3I6ICdncmVlbi9ncmF5JyxcbiAgICAgICAgaW1hZ2U6IFwiLi9pbWcvaGFtbW9ja3MvcHJvZHVjdC93b29kbGFuZGhhbW1vY2suanBnXCIsXG4gICAgICAgIGltYWdlMTogXCIuL2ltZy9oYW1tb2Nrcy9wcm9kdWN0L3dvb2RsYW5kaGFtbW9ja2FuZGJhZy5qcGdcIixcbiAgICAgICAgaW1hZ2UyOiBcIlwiLFxuICAgICAgICBzdGF0dXM6ICdDb21pbmcgTWF5IDIwMTcnLFxuICAgICAgICBkZXNjOiAnVGhlIGJlc3QgaGFtbW9jayBvdXQgdGhlcmUhIEdyZWF0IGZvciAxLCBwZXJmZWN0IGZvciAyLiBFYXNpbHkgdHJhbnNwb3J0YWJsZSBhbmQgc3R1ZmZzIHJpZ2h0IGludG8gdGhlIGF0dGFjaGVkIHNhY2suIFNldCB1cCBpbiBzZWNvbmRzIGJlY2F1c2Ugb3VyIHJvcGVzIGFsbCBjb21lIHdpdGggcHJldGllZCBrbm90cyEnLFxuICAgICAgICBwcmljZTogMzQuOTlcbiAgICB9LHtcbiAgICAgICAgaWQ6IDQsXG4gICAgICAgIG5hbWU6ICdUaGUgU3VtbWl0JyxcbiAgICAgICAgY29sb3I6ICdjaGFyY29hbC9tYXJvb24nLFxuICAgICAgICBpbWFnZTogXCIuL2ltZy9oYW1tb2Nrcy9wcm9kdWN0L3N1bW1pdGhhbW1vY2suanBnXCIsXG4gICAgICAgIGltYWdlMTogXCIuL2ltZy9oYW1tb2Nrcy9wcm9kdWN0L3N1bW1pdGhhbW1vY2thbmRiYWcuanBnXCIsXG4gICAgICAgIGltYWdlMjogXCJcIixcbiAgICAgICAgc3RhdHVzOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgZGVzYzogJ1RoZSBiZXN0IGhhbW1vY2sgb3V0IHRoZXJlISBHcmVhdCBmb3IgMSwgcGVyZmVjdCBmb3IgMi4gRWFzaWx5IHRyYW5zcG9ydGFibGUgYW5kIHN0dWZmcyByaWdodCBpbnRvIHRoZSBhdHRhY2hlZCBzYWNrLiBTZXQgdXAgaW4gc2Vjb25kcyBiZWNhdXNlIG91ciByb3BlcyBhbGwgY29tZSB3aXRoIHByZXRpZWQga25vdHMhJyxcbiAgICAgICAgcHJpY2U6IDM0Ljk5XG4gICAgfSx7XG4gICAgICAgIGlkOiA1LFxuICAgICAgICBuYW1lOiAnVGhlIEJyZWV6ZScsXG4gICAgICAgIGNvbG9yOiAnbGltZSBncmVlbi8gbGlnaHQgYmx1ZS8gd2hpdGUnLFxuICAgICAgICBpbWFnZTogXCIuL2ltZy9oYW1tb2Nrcy9wcm9kdWN0L29hc2lzaGFtbW9jay5qcGdcIixcbiAgICAgICAgaW1hZ2UxOiBcIi4vaW1nL2hhbW1vY2tzL3Byb2R1Y3Qvb2FzaXNoYW1tb2NrYW5kYmFnLmpwZ1wiLFxuICAgICAgICBpbWFnZTI6IFwiXCIsXG4gICAgICAgIHN0YXR1czogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGRlc2M6ICdUaGUgYmVzdCBoYW1tb2NrIG91dCB0aGVyZSEgR3JlYXQgZm9yIDEsIHBlcmZlY3QgZm9yIDIuIEVhc2lseSB0cmFuc3BvcnRhYmxlIGFuZCBzdHVmZnMgcmlnaHQgaW50byB0aGUgYXR0YWNoZWQgc2Fjay4gU2V0IHVwIGluIHNlY29uZHMgYmVjYXVzZSBvdXIgcm9wZXMgYWxsIGNvbWUgd2l0aCBwcmV0aWVkIGtub3RzIScsXG4gICAgICAgIHByaWNlOiAzNC45OVxuICAgIH1dXG5cbiAgICB0aGlzLmdldEJlc3RTZWxsZXJzID0gKCkgPT4ge1xuICAgICAgbGV0IGJlc3RTZWxsZXJzID0gdGhpcy5iZXN0U2VsbGVycztcbiAgICAgIHJldHVybiBiZXN0U2VsbGVycztcbiAgICB9XG5cbiAgICB0aGlzLmdldEhhbW1vY2tzID0gKCkgPT4ge1xuICAgICAgbGV0IGhhbW1vY2tzID0gdGhpcy5oYW1tb2NrcztcbiAgICAgIHJldHVybiBoYW1tb2NrcztcbiAgICB9XG5cbiAgICB0aGlzLmdldEhhbW1vY2tEZXRhaWxzID0gKHN0YXRlUGFyYW1zKSA9PiB7XG4gICAgICBsZXQgaGFtbW9ja0RldGFpbHMgPSB0aGlzLmhhbW1vY2tzO1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGhhbW1vY2tEZXRhaWxzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc29sZS5sb2coaGFtbW9ja0RldGFpbHMsIHN0YXRlUGFyYW1zKTtcbiAgICAgICAgaWYoaGFtbW9ja0RldGFpbHNbaV0uaWQgPT09IHBhcnNlSW50KHN0YXRlUGFyYW1zLmlkKSl7XG4gICAgICAgICAgcmV0dXJuIGhhbW1vY2tEZXRhaWxzW2ldXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cblxuXG5cbn0pLy9lbmQgb2Ygc2VydmljZVxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5jb250cm9sbGVyKCdjb250YWN0Q3RybCcsICgkc2NvcGUsIGhhbW1vY2tTcnZjLCAkc3RhdGVQYXJhbXMpID0+IHtcblxuICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIDIwMCk7XG5cbn0pLy9lbmQgb2YgaG9tZSBjb250cm9sbGVyXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpLmNvbnRyb2xsZXIoJ2hhbW1vY2tDdHJsJywgKCRzY29wZSwgaGFtbW9ja1NydmMsICRzdGF0ZVBhcmFtcykgPT4ge1xuXG4gICRzY29wZS5oYW1tb2NrcyA9IGhhbW1vY2tTcnZjLmdldEhhbW1vY2tzKCk7XG4gIGNvbnNvbGUubG9nKCRzY29wZS5oYW1tb2Nrcyk7XG5cbiAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCAyMDApO1xuXG59KS8vZW5kIG9mIGhvbWUgY29udHJvbGxlclxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKVxuLmNvbnRyb2xsZXIoJ2hhbW1vY2tEZXRhaWxzQ3RybCcsICgkc2NvcGUsIGhhbW1vY2tTcnZjLCAkc3RhdGVQYXJhbXMpID0+IHtcblxuICAkc2NvcGUuaGFtbW9jayA9IGhhbW1vY2tTcnZjLmdldEhhbW1vY2tEZXRhaWxzKCRzdGF0ZVBhcmFtcyk7XG4gIGNvbnNvbGUubG9nKCRzY29wZS5oYW1tb2NrKTtcblxuICAkKFwiI3Njcm9sbC1zcGVjc1wiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICBzY3JvbGxUb3A6ICQoXCIjc3BlY3NcIikub2Zmc2V0KCkudG9wXG4gICAgICB9LCAxMDAwKTtcbiAgfSk7XG4gICQoXCIjc2Nyb2xsLXNldHVwXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgIHNjcm9sbFRvcDogJChcIiNzcGVjc1wiKS5vZmZzZXQoKS50b3BcbiAgICAgIH0sIDEwMDApO1xuICB9KTtcbiAgJChcIiNzY3JvbGwtcmV0dXJuc1wiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICBzY3JvbGxUb3A6ICQoXCIjc3BlY3NcIikub2Zmc2V0KCkudG9wXG4gICAgICB9LCAxMDAwKTtcbiAgfSk7XG5cbiAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCAyMDApO1xuXG59KVxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKVxuLmNvbnRyb2xsZXIoJ2hvbWVDdHJsJywgKCRzY29wZSwgaGFtbW9ja1NydmMsICRzdGF0ZVBhcmFtcykgPT4ge1xuXG4gICRzY29wZS5iZXN0U2VsbGVycyA9IGhhbW1vY2tTcnZjLmdldEJlc3RTZWxsZXJzKCk7XG4gIGNvbnNvbGUubG9nKCRzY29wZS5iZXN0U2VsbGVycyk7XG5cbiAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCAyMDApO1xuXG59KS8vZW5kIG9mIGhvbWUgY29udHJvbGxlclxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5jb250cm9sbGVyKCdvdXRwb3N0Q3RybCcsICgkc2NvcGUsICRzdGF0ZVBhcmFtcykgPT4ge1xuXG4gICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgMjAwKTtcblxufSkvL2VuZCBvZiBjb250cm9sbGVyXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpLmNvbnRyb2xsZXIoJ3N0b3J5Q3RybCcsICgkc2NvcGUsIGhhbW1vY2tTcnZjLCAkc3RhdGVQYXJhbXMpID0+IHtcblxuICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIDIwMCk7XG5cbn0pLy9lbmQgb2YgaG9tZSBjb250cm9sbGVyXG4iXX0=
