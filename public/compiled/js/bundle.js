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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImRpcmVjdGl2ZXMvZm9vdGVyLmpzIiwiZGlyZWN0aXZlcy9uYXZiYXIuanMiLCJkaXJlY3RpdmVzL3NsaWRlYWJsZS5qcyIsImNvbnRyb2xsZXJzL2NvbnRhY3RDdHJsLmpzIiwiY29udHJvbGxlcnMvaGFtbW9ja0N0cmwuanMiLCJjb250cm9sbGVycy9oYW1tb2NrRGV0YWlsc0N0cmwuanMiLCJjb250cm9sbGVycy9ob21lQ3RybC5qcyIsImNvbnRyb2xsZXJzL291dHBvc3RDdHJsLmpzIiwiY29udHJvbGxlcnMvc3RvcnlDdHJsLmpzIiwic2VydmljZXMvaGFtbW9ja1NydmMuanMiLCJzZXJ2aWNlcy9vdXRwb3N0U3J2Yy5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCJzdGF0ZSIsInVybCIsInRlbXBsYXRlVXJsIiwiY29udHJvbGxlciIsIm90aGVyd2lzZSIsImRpcmVjdGl2ZSIsInJlc3RyaWN0IiwiY29tcGlsZSIsImVsZW1lbnQiLCJhdHRyIiwiY29udGVudHMiLCJodG1sIiwicG9zdExpbmsiLCJzY29wZSIsImF0dHJzIiwiZHVyYXRpb24iLCJlYXNpbmciLCJjc3MiLCJsaW5rIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2xpZGVUb2dnbGUiLCJleHBhbmRlZCIsImJpbmQiLCJjb250ZW50Iiwic3R5bGUiLCJib3JkZXIiLCJ5IiwiY2xpZW50SGVpZ2h0IiwiaGVpZ2h0IiwiJHNjb3BlIiwiaGFtbW9ja1NydmMiLCIkc3RhdGVQYXJhbXMiLCIkIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsImhhbW1vY2tzIiwiZ2V0SGFtbW9ja3MiLCJjb25zb2xlIiwibG9nIiwiaGFtbW9jayIsImdldEhhbW1vY2tEZXRhaWxzIiwiY2xpY2siLCJvZmZzZXQiLCJ0b3AiLCJiZXN0U2VsbGVycyIsImdldEJlc3RTZWxsZXJzIiwib3V0cG9zdFNydmMiLCJzZXJ2aWNlIiwiaWQiLCJuYW1lIiwiY29sb3IiLCJpbWFnZSIsInN0YXR1cyIsImRlc2MiLCJwcmljZSIsInN0YXRlUGFyYW1zIiwiaGFtbW9ja0RldGFpbHMiLCJpIiwibGVuZ3RoIiwicGFyc2VJbnQiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFFBQVFDLE1BQVIsQ0FBZSxZQUFmLEVBQTZCLENBQUMsV0FBRCxDQUE3QixFQUNHQyxNQURILENBQ1UsVUFBU0MsY0FBVCxFQUF5QkMsa0JBQXpCLEVBQTRDOztBQUVsREQsbUJBQ0dFLEtBREgsQ0FDUyxNQURULEVBQ2dCO0FBQ1ZDLGFBQUksR0FETTtBQUVWQyxxQkFBYSxtQkFGSDtBQUdWQyxvQkFBWTtBQUhGLEtBRGhCLEVBTUdILEtBTkgsQ0FNUyxPQU5ULEVBTWlCO0FBQ1hDLGFBQUksUUFETztBQUVYQyxxQkFBYSxvQkFGRjtBQUdYQyxvQkFBWTtBQUhELEtBTmpCLEVBV0dILEtBWEgsQ0FXUyxVQVhULEVBV29CO0FBQ2RDLGFBQUksV0FEVTtBQUVkQyxxQkFBYSx1QkFGQztBQUdkQyxvQkFBWTtBQUhFLEtBWHBCLEVBZ0JHSCxLQWhCSCxDQWdCUyxnQkFoQlQsRUFnQjBCO0FBQ3BCQyxhQUFJLHFCQURnQjtBQUVwQkMscUJBQWEsOEJBRk87QUFHcEJDLG9CQUFZO0FBSFEsS0FoQjFCLEVBcUJHSCxLQXJCSCxDQXFCUyxzQkFyQlQsRUFxQmdDO0FBQzFCQyxhQUFJLG1CQURzQjtBQUUxQkMscUJBQWE7QUFGYSxLQXJCaEMsRUF5QkdGLEtBekJILENBeUJTLHNCQXpCVCxFQXlCZ0M7QUFDMUJDLGFBQUksZUFEc0I7QUFFMUJDLHFCQUFhO0FBRmEsS0F6QmhDLEVBNkJHRixLQTdCSCxDQTZCUyx3QkE3QlQsRUE2QmtDO0FBQzVCQyxhQUFJLGlCQUR3QjtBQUU1QkMscUJBQWE7QUFGZSxLQTdCbEMsRUFpQ0dGLEtBakNILENBaUNTLFNBakNULEVBaUNtQjtBQUNiQyxhQUFJLFVBRFM7QUFFYkMscUJBQWEsc0JBRkE7QUFHYkMsb0JBQVk7QUFIQyxLQWpDbkIsRUFzQ0dILEtBdENILENBc0NTLGFBdENULEVBc0N1QjtBQUNqQkMsYUFBSSxNQURhO0FBRWpCQyxxQkFBYTtBQUZJLEtBdEN2QixFQTBDR0YsS0ExQ0gsQ0EwQ1MsaUJBMUNULEVBMEMyQjtBQUNyQkMsYUFBSSxVQURpQjtBQUVyQkMscUJBQWE7QUFGUSxLQTFDM0IsRUE4Q0dGLEtBOUNILENBOENTLGdCQTlDVCxFQThDMEI7QUFDcEJDLGFBQUksU0FEZ0I7QUFFcEJDLHFCQUFhO0FBRk8sS0E5QzFCLEVBa0RHRixLQWxESCxDQWtEUyxZQWxEVCxFQWtEc0I7QUFDaEJDLGFBQUksYUFEWTtBQUVoQkMscUJBQWE7QUFGRyxLQWxEdEIsRUFzREdGLEtBdERILENBc0RTLFNBdERULEVBc0RtQjtBQUNiQyxhQUFJLFVBRFM7QUFFYkMscUJBQWEsc0JBRkE7QUFHYkMsb0JBQVk7QUFIQyxLQXREbkI7O0FBNkRBSix1QkFDS0ssU0FETCxDQUNlLEdBRGY7QUFFSCxDQWxFRDtBQW1FQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDM0VBVCxRQUFRQyxNQUFSLENBQWUsWUFBZixFQUE2QlMsU0FBN0IsQ0FBdUMsY0FBdkMsRUFBdUQsWUFBTTtBQUMzRCxTQUFPO0FBQ0xILGlCQUFhO0FBRFIsR0FBUDtBQUdELENBSkQsR0FJRzs7O0FDSkhQLFFBQVFDLE1BQVIsQ0FBZSxZQUFmLEVBQTZCUyxTQUE3QixDQUF1QyxRQUF2QyxFQUFpRCxZQUFNO0FBQ3JELFNBQU87QUFDTEgsaUJBQWE7QUFEUixHQUFQO0FBSUQsQ0FMRCxHQUtHOzs7QUNMSFAsUUFBUUMsTUFBUixDQUFlLFlBQWYsRUFDQ1MsU0FERCxDQUNXLFdBRFgsRUFDd0IsWUFBWTtBQUNoQyxXQUFPO0FBQ0hDLGtCQUFTLEdBRE47QUFFSEMsaUJBQVMsaUJBQVVDLE9BQVYsRUFBbUJDLElBQW5CLEVBQXlCO0FBQzlCO0FBQ0EsZ0JBQUlDLFdBQVdGLFFBQVFHLElBQVIsRUFBZjtBQUNBSCxvQkFBUUcsSUFBUixDQUFhLHVGQUF1RkQsUUFBdkYsR0FBa0csUUFBL0c7O0FBRUEsbUJBQU8sU0FBU0UsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUJMLE9BQXpCLEVBQWtDTSxLQUFsQyxFQUF5QztBQUM1QztBQUNBQSxzQkFBTUMsUUFBTixHQUFrQixDQUFDRCxNQUFNQyxRQUFSLEdBQW9CLElBQXBCLEdBQTJCRCxNQUFNQyxRQUFsRDtBQUNBRCxzQkFBTUUsTUFBTixHQUFnQixDQUFDRixNQUFNRSxNQUFSLEdBQWtCLGFBQWxCLEdBQWtDRixNQUFNRSxNQUF2RDtBQUNBUix3QkFBUVMsR0FBUixDQUFZO0FBQ1IsZ0NBQVksUUFESjtBQUVSLDhCQUFVLEtBRkY7QUFHUiwwQ0FBc0IsUUFIZDtBQUlSLDBDQUFzQkgsTUFBTUMsUUFKcEI7QUFLUixnREFBNEJELE1BQU1FO0FBTDFCLGlCQUFaO0FBT0gsYUFYRDtBQVlIO0FBbkJFLEtBQVA7QUFxQkgsQ0F2QkQsRUF3QkNYLFNBeEJELENBd0JXLGFBeEJYLEVBd0IwQixZQUFXO0FBQ2pDLFdBQU87QUFDSEMsa0JBQVUsR0FEUDtBQUVIWSxjQUFNLGNBQVNMLEtBQVQsRUFBZ0JMLE9BQWhCLEVBQXlCTSxLQUF6QixFQUFnQztBQUNsQyxnQkFBSUssU0FBU0MsU0FBU0MsYUFBVCxDQUF1QlAsTUFBTVEsV0FBN0IsQ0FBYjtBQUNBUixrQkFBTVMsUUFBTixHQUFpQixLQUFqQjtBQUNBZixvQkFBUWdCLElBQVIsQ0FBYSxPQUFiLEVBQXNCLFlBQVc7QUFDN0Isb0JBQUlDLFVBQVVOLE9BQU9FLGFBQVAsQ0FBcUIsb0JBQXJCLENBQWQ7QUFDQSxvQkFBRyxDQUFDUCxNQUFNUyxRQUFWLEVBQW9CO0FBQ2hCRSw0QkFBUUMsS0FBUixDQUFjQyxNQUFkLEdBQXVCLHlCQUF2QjtBQUNBLHdCQUFJQyxJQUFJSCxRQUFRSSxZQUFoQjtBQUNBSiw0QkFBUUMsS0FBUixDQUFjQyxNQUFkLEdBQXVCLENBQXZCO0FBQ0FSLDJCQUFPTyxLQUFQLENBQWFJLE1BQWIsR0FBc0JGLElBQUksSUFBMUI7QUFDSCxpQkFMRCxNQUtPO0FBQ0hULDJCQUFPTyxLQUFQLENBQWFJLE1BQWIsR0FBc0IsS0FBdEI7QUFDSDtBQUNEaEIsc0JBQU1TLFFBQU4sR0FBaUIsQ0FBQ1QsTUFBTVMsUUFBeEI7QUFDSCxhQVhEO0FBWUg7QUFqQkUsS0FBUDtBQW1CSCxDQTVDRDs7O0FDQUE1QixRQUFRQyxNQUFSLENBQWUsWUFBZixFQUE2Qk8sVUFBN0IsQ0FBd0MsYUFBeEMsRUFBdUQsVUFBQzRCLE1BQUQsRUFBU0MsV0FBVCxFQUFzQkMsWUFBdEIsRUFBdUM7O0FBRTVGQyxJQUFFLFlBQUYsRUFBZ0JDLE9BQWhCLENBQXdCLEVBQUVDLFdBQVcsQ0FBYixFQUF4QixFQUEwQyxHQUExQztBQUVELENBSkQsR0FJRTs7O0FDSkZ6QyxRQUFRQyxNQUFSLENBQWUsWUFBZixFQUE2Qk8sVUFBN0IsQ0FBd0MsYUFBeEMsRUFBdUQsVUFBQzRCLE1BQUQsRUFBU0MsV0FBVCxFQUFzQkMsWUFBdEIsRUFBdUM7O0FBRTVGRixTQUFPTSxRQUFQLEdBQWtCTCxZQUFZTSxXQUFaLEVBQWxCO0FBQ0FDLFVBQVFDLEdBQVIsQ0FBWVQsT0FBT00sUUFBbkI7O0FBRUFILElBQUUsWUFBRixFQUFnQkMsT0FBaEIsQ0FBd0IsRUFBRUMsV0FBVyxDQUFiLEVBQXhCLEVBQTBDLEdBQTFDO0FBRUQsQ0FQRCxHQU9FOzs7QUNQRnpDLFFBQVFDLE1BQVIsQ0FBZSxZQUFmLEVBQ0NPLFVBREQsQ0FDWSxvQkFEWixFQUNrQyxVQUFDNEIsTUFBRCxFQUFTQyxXQUFULEVBQXNCQyxZQUF0QixFQUF1Qzs7QUFFdkVGLFdBQU9VLE9BQVAsR0FBaUJULFlBQVlVLGlCQUFaLENBQThCVCxZQUE5QixDQUFqQjtBQUNBTSxZQUFRQyxHQUFSLENBQVlULE9BQU9VLE9BQW5COztBQUVBUCxNQUFFLGVBQUYsRUFBbUJTLEtBQW5CLENBQXlCLFlBQVc7QUFDaENULFVBQUUsWUFBRixFQUFnQkMsT0FBaEIsQ0FBd0I7QUFDcEJDLHVCQUFXRixFQUFFLFFBQUYsRUFBWVUsTUFBWixHQUFxQkM7QUFEWixTQUF4QixFQUVHLElBRkg7QUFHSCxLQUpEO0FBS0FYLE1BQUUsZUFBRixFQUFtQlMsS0FBbkIsQ0FBeUIsWUFBVztBQUNoQ1QsVUFBRSxZQUFGLEVBQWdCQyxPQUFoQixDQUF3QjtBQUNwQkMsdUJBQVdGLEVBQUUsUUFBRixFQUFZVSxNQUFaLEdBQXFCQztBQURaLFNBQXhCLEVBRUcsSUFGSDtBQUdILEtBSkQ7QUFLQVgsTUFBRSxpQkFBRixFQUFxQlMsS0FBckIsQ0FBMkIsWUFBVztBQUNsQ1QsVUFBRSxZQUFGLEVBQWdCQyxPQUFoQixDQUF3QjtBQUNwQkMsdUJBQVdGLEVBQUUsUUFBRixFQUFZVSxNQUFaLEdBQXFCQztBQURaLFNBQXhCLEVBRUcsSUFGSDtBQUdILEtBSkQ7O0FBTUFYLE1BQUUsWUFBRixFQUFnQkMsT0FBaEIsQ0FBd0IsRUFBRUMsV0FBVyxDQUFiLEVBQXhCLEVBQTBDLEdBQTFDO0FBRUQsQ0F4QkQ7OztBQ0FBekMsUUFBUUMsTUFBUixDQUFlLFlBQWYsRUFDQ08sVUFERCxDQUNZLFVBRFosRUFDd0IsVUFBQzRCLE1BQUQsRUFBU0MsV0FBVCxFQUFzQkMsWUFBdEIsRUFBdUM7O0FBRTdERixTQUFPZSxXQUFQLEdBQXFCZCxZQUFZZSxjQUFaLEVBQXJCO0FBQ0FSLFVBQVFDLEdBQVIsQ0FBWVQsT0FBT2UsV0FBbkI7O0FBRUFaLElBQUUsWUFBRixFQUFnQkMsT0FBaEIsQ0FBd0IsRUFBRUMsV0FBVyxDQUFiLEVBQXhCLEVBQTBDLEdBQTFDO0FBR0QsQ0FURCxHQVNFOzs7QUNURnpDLFFBQVFDLE1BQVIsQ0FBZSxZQUFmLEVBQTZCTyxVQUE3QixDQUF3QyxhQUF4QyxFQUF1RCxVQUFDNEIsTUFBRCxFQUFTaUIsV0FBVCxFQUFzQmYsWUFBdEIsRUFBdUM7O0FBRTVGQyxJQUFFLFlBQUYsRUFBZ0JDLE9BQWhCLENBQXdCLEVBQUVDLFdBQVcsQ0FBYixFQUF4QixFQUEwQyxHQUExQztBQUVELENBSkQsR0FJRTs7O0FDSkZ6QyxRQUFRQyxNQUFSLENBQWUsWUFBZixFQUE2Qk8sVUFBN0IsQ0FBd0MsV0FBeEMsRUFBcUQsVUFBQzRCLE1BQUQsRUFBU0MsV0FBVCxFQUFzQkMsWUFBdEIsRUFBdUM7O0FBRTFGQyxJQUFFLFlBQUYsRUFBZ0JDLE9BQWhCLENBQXdCLEVBQUVDLFdBQVcsQ0FBYixFQUF4QixFQUEwQyxHQUExQztBQUVELENBSkQsR0FJRTs7O0FDSkZ6QyxRQUFRQyxNQUFSLENBQWUsWUFBZixFQUE2QnFELE9BQTdCLENBQXFDLGFBQXJDLEVBQW9ELFlBQVU7QUFBQTs7QUFHNUQsU0FBS0gsV0FBTCxHQUFtQixDQUFDO0FBQ2RJLFlBQUksQ0FEVTtBQUVkQyxjQUFNLGFBRlE7QUFHZEMsZUFBTyxhQUhPO0FBSWRDLGVBQU8sNEJBSk87QUFLZEMsZ0JBQVEsaUJBTE07QUFNZEMsY0FBTSx3TEFOUTtBQU9kQyxlQUFPO0FBUE8sS0FBRCxFQVFkO0FBQ0NOLFlBQUksQ0FETDtBQUVDQyxjQUFNLFlBRlA7QUFHQ0MsZUFBTyxpQkFIUjtBQUlDQyxlQUFPLGdDQUpSO0FBS0NDLGdCQUFRLGlCQUxUO0FBTUNDLGNBQU0sd0xBTlA7QUFPQ0MsZUFBTztBQVBSLEtBUmMsRUFnQmY7QUFDRU4sWUFBSSxDQUROO0FBRUVDLGNBQU0sWUFGUjtBQUdFQyxlQUFPLCtCQUhUO0FBSUVDLGVBQU8sa0NBSlQ7QUFLRUMsZ0JBQVEsaUJBTFY7QUFNRUMsY0FBTSx3TEFOUjtBQU9FQyxlQUFPO0FBUFQsS0FoQmUsQ0FBbkI7O0FBMEJBLFNBQUtuQixRQUFMLEdBQWdCLENBQUM7QUFDWGEsWUFBSSxDQURPO0FBRVhDLGNBQU0sYUFGSztBQUdYQyxlQUFPLGFBSEk7QUFJWEMsZUFBTyw0QkFKSTtBQUtYQyxnQkFBUSxpQkFMRztBQU1YQyxjQUFNLHdMQU5LO0FBT1hDLGVBQU87QUFQSSxLQUFELEVBUVg7QUFDQ04sWUFBSSxDQURMO0FBRUNDLGNBQU0sWUFGUDtBQUdDQyxlQUFPLGlCQUhSO0FBSUNDLGVBQU8sZ0NBSlI7QUFLQ0MsZ0JBQVEsaUJBTFQ7QUFNQ0MsY0FBTSx3TEFOUDtBQU9DQyxlQUFPO0FBUFIsS0FSVyxFQWdCWjtBQUNFTixZQUFJLENBRE47QUFFRUMsY0FBTSxjQUZSO0FBR0VDLGVBQU8sWUFIVDtBQUlFQyxlQUFPLGlDQUpUO0FBS0VDLGdCQUFRLGlCQUxWO0FBTUVDLGNBQU0sd0xBTlI7QUFPRUMsZUFBTztBQVBULEtBaEJZLEVBd0JaO0FBQ0VOLFlBQUksQ0FETjtBQUVFQyxjQUFNLFlBRlI7QUFHRUMsZUFBTyxpQkFIVDtBQUlFQyxlQUFPLDJCQUpUO0FBS0VDLGdCQUFRLGlCQUxWO0FBTUVDLGNBQU0sd0xBTlI7QUFPRUMsZUFBTztBQVBULEtBeEJZLEVBZ0NaO0FBQ0VOLFlBQUksQ0FETjtBQUVFQyxjQUFNLFlBRlI7QUFHRUMsZUFBTywrQkFIVDtBQUlFQyxlQUFPLGtDQUpUO0FBS0VDLGdCQUFRLGlCQUxWO0FBTUVDLGNBQU0sd0xBTlI7QUFPRUMsZUFBTztBQVBULEtBaENZLENBQWhCOztBQTBDRSxTQUFLVCxjQUFMLEdBQXNCLFlBQU07QUFDMUIsWUFBSUQsY0FBYyxNQUFLQSxXQUF2QjtBQUNBLGVBQU9BLFdBQVA7QUFDRCxLQUhEOztBQUtBLFNBQUtSLFdBQUwsR0FBbUIsWUFBTTtBQUN2QixZQUFJRCxXQUFXLE1BQUtBLFFBQXBCO0FBQ0EsZUFBT0EsUUFBUDtBQUNELEtBSEQ7O0FBS0EsU0FBS0ssaUJBQUwsR0FBeUIsVUFBQ2UsV0FBRCxFQUFpQjtBQUN4QyxZQUFJQyxpQkFBaUIsTUFBS3JCLFFBQTFCO0FBQ0EsYUFBSSxJQUFJc0IsSUFBSSxDQUFaLEVBQWVBLElBQUlELGVBQWVFLE1BQWxDLEVBQTBDRCxHQUExQyxFQUE4QztBQUM1Q3BCLG9CQUFRQyxHQUFSLENBQVlrQixjQUFaLEVBQTRCRCxXQUE1QjtBQUNBLGdCQUFHQyxlQUFlQyxDQUFmLEVBQWtCVCxFQUFsQixLQUF5QlcsU0FBU0osWUFBWVAsRUFBckIsQ0FBNUIsRUFBcUQ7QUFDbkQsdUJBQU9RLGVBQWVDLENBQWYsQ0FBUDtBQUNEO0FBQ0Y7QUFDRixLQVJEO0FBYUgsQ0E5RkQsR0E4RkU7OztBQzlGRmhFLFFBQVFDLE1BQVIsQ0FBZSxZQUFmLEVBQTZCcUQsT0FBN0IsQ0FBcUMsYUFBckMsRUFBb0QsWUFBVSxDQUc3RCxDQUhELEdBR0UiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnLCBbJ3VpLnJvdXRlciddKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpe1xuXG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgnaG9tZScse1xuICAgICAgICAgIHVybDonLycsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6IFwiLi92aWV3cy9ob21lLmh0bWxcIixcbiAgICAgICAgICBjb250cm9sbGVyOiAnaG9tZUN0cmwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdzdG9yeScse1xuICAgICAgICAgIHVybDonL3N0b3J5JyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3Mvc3RvcnkuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ3N0b3J5Q3RybCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2hhbW1vY2tzJyx7XG4gICAgICAgICAgdXJsOicvaGFtbW9ja3MnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9oYW1tb2Nrcy5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnaGFtbW9ja0N0cmwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdoYW1tb2NrRGV0YWlscycse1xuICAgICAgICAgIHVybDonL2hhbW1vY2tEZXRhaWxzLzppZCcsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2hhbW1vY2stZGV0YWlscy5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnaGFtbW9ja0RldGFpbHNDdHJsJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnaGFtbW9ja0RldGFpbHMuc3BlY3MnLHtcbiAgICAgICAgICB1cmw6Jy9oYW1tb2NrU3BlY3MvOmlkJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvaGFtbW9ja1NwZWNzLmh0bWwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdoYW1tb2NrRGV0YWlscy5zZXR1cCcse1xuICAgICAgICAgIHVybDonL2hhbW1vY2tTZXR1cCcsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2hhbW1vY2tTZXR1cC5odG1sJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnaGFtbW9ja0RldGFpbHMucmV0dXJucycse1xuICAgICAgICAgIHVybDonL2hhbW1vY2tSZXR1cm5zJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvaGFtbW9ja1JldHVybnMuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ291dHBvc3QnLHtcbiAgICAgICAgICB1cmw6Jy9vdXRwb3N0JyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3Mvb3V0cG9zdC5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnb3V0cG9zdEN0cmwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdvdXRwb3N0LmZhcScse1xuICAgICAgICAgIHVybDonL2ZhcScsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2ZhcS5odG1sJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnb3V0cG9zdC5yZWZ1bmRzJyx7XG4gICAgICAgICAgdXJsOicvcmVmdW5kcycsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL3JlZnVuZHMuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ291dHBvc3QudmlkZW9zJyx7XG4gICAgICAgICAgdXJsOicvdmlkZW9zJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvdmlkZW9zLmh0bWwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdjb21pbmdzb29uJyx7XG4gICAgICAgICAgdXJsOicvY29taW5nc29vbicsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2NvbWluZ3Nvb24uaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2NvbnRhY3QnLHtcbiAgICAgICAgICB1cmw6Jy9jb250YWN0JyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvY29udGFjdC5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnY29udGFjdEN0cmwnXG4gICAgICB9KTtcblxuXG4gICAgJHVybFJvdXRlclByb3ZpZGVyXG4gICAgICAgIC5vdGhlcndpc2UoJy8nKTtcbn0pXG4vL2lmIHlvdSB3YW50IGV2ZXJ5IHZpZXcgdG8gbG9hZCBhdCB0b3AgdXNlIHRoZSBjb2RlIGJlbG93IC4uLiB0aGlzIHByb2plY3QgaGFzIG5lc3RlZCB2aWV3cyBzbyBJIGRvbid0IVxuXG4vLyAucnVuKGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgJGFuY2hvclNjcm9sbCkge1xuLy9cbi8vICAgICAkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3RhcnQnLCBmdW5jdGlvbiAoKSB7XG4vLyAgICAgICAgICRhbmNob3JTY3JvbGwoKTtcbi8vICAgICB9KTtcbi8vXG4vLyB9KTtcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJykuZGlyZWN0aXZlKCdjdXN0b21Gb290ZXInLCAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2Zvb3Rlci5odG1sJ1xuICB9O1xufSkgLy9lbmQgb2YgbmF2YmFyIGRpcmVjdGl2ZVxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5kaXJlY3RpdmUoJ25hdmJhcicsICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvbmF2YmFyLmh0bWwnXG4gIH07XG5cbn0pIC8vZW5kIG9mIG5hdmJhciBkaXJlY3RpdmVcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJylcbi5kaXJlY3RpdmUoJ3NsaWRlYWJsZScsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByZXN0cmljdDonQycsXG4gICAgICAgIGNvbXBpbGU6IGZ1bmN0aW9uIChlbGVtZW50LCBhdHRyKSB7XG4gICAgICAgICAgICAvLyB3cmFwIHRhZ1xuICAgICAgICAgICAgdmFyIGNvbnRlbnRzID0gZWxlbWVudC5odG1sKCk7XG4gICAgICAgICAgICBlbGVtZW50Lmh0bWwoJzxkaXYgY2xhc3M9XCJzbGlkZWFibGVfY29udGVudFwiIHN0eWxlPVwibWFyZ2luOjAgIWltcG9ydGFudDsgcGFkZGluZzowICFpbXBvcnRhbnRcIiA+JyArIGNvbnRlbnRzICsgJzwvZGl2PicpO1xuXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gcG9zdExpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAgICAgICAgICAgLy8gZGVmYXVsdCBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgYXR0cnMuZHVyYXRpb24gPSAoIWF0dHJzLmR1cmF0aW9uKSA/ICcxcycgOiBhdHRycy5kdXJhdGlvbjtcbiAgICAgICAgICAgICAgICBhdHRycy5lYXNpbmcgPSAoIWF0dHJzLmVhc2luZykgPyAnZWFzZS1pbi1vdXQnIDogYXR0cnMuZWFzaW5nO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ292ZXJmbG93JzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgICdoZWlnaHQnOiAnMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25Qcm9wZXJ0eSc6ICdoZWlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAndHJhbnNpdGlvbkR1cmF0aW9uJzogYXR0cnMuZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24nOiBhdHRycy5lYXNpbmdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9O1xufSlcbi5kaXJlY3RpdmUoJ3NsaWRlVG9nZ2xlJywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhdHRycy5zbGlkZVRvZ2dsZSk7XG4gICAgICAgICAgICBhdHRycy5leHBhbmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgZWxlbWVudC5iaW5kKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBjb250ZW50ID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZWFibGVfY29udGVudCcpO1xuICAgICAgICAgICAgICAgIGlmKCFhdHRycy5leHBhbmRlZCkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgcmdiYSgwLDAsMCwwKSc7XG4gICAgICAgICAgICAgICAgICAgIHZhciB5ID0gY29udGVudC5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUuYm9yZGVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IHkgKyAncHgnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSAnMHB4JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXR0cnMuZXhwYW5kZWQgPSAhYXR0cnMuZXhwYW5kZWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5jb250cm9sbGVyKCdjb250YWN0Q3RybCcsICgkc2NvcGUsIGhhbW1vY2tTcnZjLCAkc3RhdGVQYXJhbXMpID0+IHtcblxuICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIDIwMCk7XG5cbn0pLy9lbmQgb2YgaG9tZSBjb250cm9sbGVyXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpLmNvbnRyb2xsZXIoJ2hhbW1vY2tDdHJsJywgKCRzY29wZSwgaGFtbW9ja1NydmMsICRzdGF0ZVBhcmFtcykgPT4ge1xuXG4gICRzY29wZS5oYW1tb2NrcyA9IGhhbW1vY2tTcnZjLmdldEhhbW1vY2tzKCk7XG4gIGNvbnNvbGUubG9nKCRzY29wZS5oYW1tb2Nrcyk7XG5cbiAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCAyMDApO1xuXG59KS8vZW5kIG9mIGhvbWUgY29udHJvbGxlclxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKVxuLmNvbnRyb2xsZXIoJ2hhbW1vY2tEZXRhaWxzQ3RybCcsICgkc2NvcGUsIGhhbW1vY2tTcnZjLCAkc3RhdGVQYXJhbXMpID0+IHtcblxuICAkc2NvcGUuaGFtbW9jayA9IGhhbW1vY2tTcnZjLmdldEhhbW1vY2tEZXRhaWxzKCRzdGF0ZVBhcmFtcyk7XG4gIGNvbnNvbGUubG9nKCRzY29wZS5oYW1tb2NrKTtcblxuICAkKFwiI3Njcm9sbC1zcGVjc1wiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICBzY3JvbGxUb3A6ICQoXCIjc3BlY3NcIikub2Zmc2V0KCkudG9wXG4gICAgICB9LCAxMDAwKTtcbiAgfSk7XG4gICQoXCIjc2Nyb2xsLXNldHVwXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgIHNjcm9sbFRvcDogJChcIiNzcGVjc1wiKS5vZmZzZXQoKS50b3BcbiAgICAgIH0sIDEwMDApO1xuICB9KTtcbiAgJChcIiNzY3JvbGwtcmV0dXJuc1wiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICBzY3JvbGxUb3A6ICQoXCIjc3BlY3NcIikub2Zmc2V0KCkudG9wXG4gICAgICB9LCAxMDAwKTtcbiAgfSk7XG5cbiAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCAyMDApO1xuXG59KVxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKVxuLmNvbnRyb2xsZXIoJ2hvbWVDdHJsJywgKCRzY29wZSwgaGFtbW9ja1NydmMsICRzdGF0ZVBhcmFtcykgPT4ge1xuXG4gICRzY29wZS5iZXN0U2VsbGVycyA9IGhhbW1vY2tTcnZjLmdldEJlc3RTZWxsZXJzKCk7XG4gIGNvbnNvbGUubG9nKCRzY29wZS5iZXN0U2VsbGVycyk7XG5cbiAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCAyMDApO1xuXG5cbn0pLy9lbmQgb2YgaG9tZSBjb250cm9sbGVyXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpLmNvbnRyb2xsZXIoJ291dHBvc3RDdHJsJywgKCRzY29wZSwgb3V0cG9zdFNydmMsICRzdGF0ZVBhcmFtcykgPT4ge1xuXG4gICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgMjAwKTtcblxufSkvL2VuZCBvZiBjb250cm9sbGVyXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpLmNvbnRyb2xsZXIoJ3N0b3J5Q3RybCcsICgkc2NvcGUsIGhhbW1vY2tTcnZjLCAkc3RhdGVQYXJhbXMpID0+IHtcblxuICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIDIwMCk7XG5cbn0pLy9lbmQgb2YgaG9tZSBjb250cm9sbGVyXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpLnNlcnZpY2UoJ2hhbW1vY2tTcnZjJywgZnVuY3Rpb24oKXtcblxuXG4gIHRoaXMuYmVzdFNlbGxlcnMgPSBbe1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogJ1RoZSBTdW5yaXNlJyxcbiAgICAgICAgY29sb3I6ICdPcmFuZ2UvR3JleScsXG4gICAgICAgIGltYWdlOiBcIi4vaW1nL2hhbW1vY2tzL3N1bnJpc2UuanBnXCIsXG4gICAgICAgIHN0YXR1czogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGRlc2M6ICdUaGUgYmVzdCBoYW1tb2NrIG91dCB0aGVyZSEgR3JlYXQgZm9yIDEsIHBlcmZlY3QgZm9yIDIuIEVhc2lseSB0cmFuc3BvcnRhYmxlIGFuZCBzdHVmZnMgcmlnaHQgaW50byB0aGUgYXR0YWNoZWQgc2Fjay4gU2V0IHVwIGluIHNlY29uZHMgYmVjYXVzZSBvdXIgcm9wZXMgYWxsIGNvbWUgd2l0aCBwcmV0aWVkIGtub3RzIScsXG4gICAgICAgIHByaWNlOiAzNC45OVxuICAgIH0sIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIG5hbWU6ICdUaGUgR2V5c2VyJyxcbiAgICAgICAgY29sb3I6ICdMaWdodCBCbHVlL0JsdWUnLFxuICAgICAgICBpbWFnZTogXCIuL2ltZy9oYW1tb2Nrcy9ibHVlaGFtbW9jay5qcGdcIixcbiAgICAgICAgc3RhdHVzOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgZGVzYzogJ1RoZSBiZXN0IGhhbW1vY2sgb3V0IHRoZXJlISBHcmVhdCBmb3IgMSwgcGVyZmVjdCBmb3IgMi4gRWFzaWx5IHRyYW5zcG9ydGFibGUgYW5kIHN0dWZmcyByaWdodCBpbnRvIHRoZSBhdHRhY2hlZCBzYWNrLiBTZXQgdXAgaW4gc2Vjb25kcyBiZWNhdXNlIG91ciByb3BlcyBhbGwgY29tZSB3aXRoIHByZXRpZWQga25vdHMhJyxcbiAgICAgICAgcHJpY2U6IDM0Ljk5XG4gICAgfSx7XG4gICAgICAgIGlkOiA1LFxuICAgICAgICBuYW1lOiAnVGhlIE1lYWRvdycsXG4gICAgICAgIGNvbG9yOiAnTGltZSBHcmVlbi8gTGlnaHQgQmx1ZS8gV2hpdGUnLFxuICAgICAgICBpbWFnZTogXCIuL2ltZy9oYW1tb2Nrcy9tZWFkb3doYW1tb2NrLmpwZ1wiLFxuICAgICAgICBzdGF0dXM6ICdDb21pbmcgTWF5IDIwMTcnLFxuICAgICAgICBkZXNjOiAnVGhlIGJlc3QgaGFtbW9jayBvdXQgdGhlcmUhIEdyZWF0IGZvciAxLCBwZXJmZWN0IGZvciAyLiBFYXNpbHkgdHJhbnNwb3J0YWJsZSBhbmQgc3R1ZmZzIHJpZ2h0IGludG8gdGhlIGF0dGFjaGVkIHNhY2suIFNldCB1cCBpbiBzZWNvbmRzIGJlY2F1c2Ugb3VyIHJvcGVzIGFsbCBjb21lIHdpdGggcHJldGllZCBrbm90cyEnLFxuICAgICAgICBwcmljZTogMzQuOTlcbiAgICB9XVxuXG4gIHRoaXMuaGFtbW9ja3MgPSBbe1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogJ1RoZSBTdW5yaXNlJyxcbiAgICAgICAgY29sb3I6ICdvcmFuZ2UvZ3JheScsXG4gICAgICAgIGltYWdlOiBcIi4vaW1nL2hhbW1vY2tzL3N1bnJpc2UuanBnXCIsXG4gICAgICAgIHN0YXR1czogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGRlc2M6ICdUaGUgYmVzdCBoYW1tb2NrIG91dCB0aGVyZSEgR3JlYXQgZm9yIDEsIHBlcmZlY3QgZm9yIDIuIEVhc2lseSB0cmFuc3BvcnRhYmxlIGFuZCBzdHVmZnMgcmlnaHQgaW50byB0aGUgYXR0YWNoZWQgc2Fjay4gU2V0IHVwIGluIHNlY29uZHMgYmVjYXVzZSBvdXIgcm9wZXMgYWxsIGNvbWUgd2l0aCBwcmV0aWVkIGtub3RzIScsXG4gICAgICAgIHByaWNlOiAzNC45OVxuICAgIH0sIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIG5hbWU6ICdUaGUgR2V5c2VyJyxcbiAgICAgICAgY29sb3I6ICdibHVlL2xpZ2h0IGJsdWUnLFxuICAgICAgICBpbWFnZTogXCIuL2ltZy9oYW1tb2Nrcy9ibHVlaGFtbW9jay5qcGdcIixcbiAgICAgICAgc3RhdHVzOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgZGVzYzogJ1RoZSBiZXN0IGhhbW1vY2sgb3V0IHRoZXJlISBHcmVhdCBmb3IgMSwgcGVyZmVjdCBmb3IgMi4gRWFzaWx5IHRyYW5zcG9ydGFibGUgYW5kIHN0dWZmcyByaWdodCBpbnRvIHRoZSBhdHRhY2hlZCBzYWNrLiBTZXQgdXAgaW4gc2Vjb25kcyBiZWNhdXNlIG91ciByb3BlcyBhbGwgY29tZSB3aXRoIHByZXRpZWQga25vdHMhJyxcbiAgICAgICAgcHJpY2U6IDM0Ljk5XG4gICAgfSx7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBuYW1lOiAnVGhlIFdvb2RsYW5kJyxcbiAgICAgICAgY29sb3I6ICdncmVlbi9ncmF5JyxcbiAgICAgICAgaW1hZ2U6IFwiLi9pbWcvaGFtbW9ja3MvZ3JlZW5oYW1tb2NrLmpwZ1wiLFxuICAgICAgICBzdGF0dXM6ICdDb21pbmcgTWF5IDIwMTcnLFxuICAgICAgICBkZXNjOiAnVGhlIGJlc3QgaGFtbW9jayBvdXQgdGhlcmUhIEdyZWF0IGZvciAxLCBwZXJmZWN0IGZvciAyLiBFYXNpbHkgdHJhbnNwb3J0YWJsZSBhbmQgc3R1ZmZzIHJpZ2h0IGludG8gdGhlIGF0dGFjaGVkIHNhY2suIFNldCB1cCBpbiBzZWNvbmRzIGJlY2F1c2Ugb3VyIHJvcGVzIGFsbCBjb21lIHdpdGggcHJldGllZCBrbm90cyEnLFxuICAgICAgICBwcmljZTogMzQuOTlcbiAgICB9LHtcbiAgICAgICAgaWQ6IDQsXG4gICAgICAgIG5hbWU6ICdUaGUgU3VtbWl0JyxcbiAgICAgICAgY29sb3I6ICdjaGFyY29hbC9tYXJvb24nLFxuICAgICAgICBpbWFnZTogXCIuL2ltZy9oYW1tb2Nrcy9zdW1taXQuanBnXCIsXG4gICAgICAgIHN0YXR1czogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGRlc2M6ICdUaGUgYmVzdCBoYW1tb2NrIG91dCB0aGVyZSEgR3JlYXQgZm9yIDEsIHBlcmZlY3QgZm9yIDIuIEVhc2lseSB0cmFuc3BvcnRhYmxlIGFuZCBzdHVmZnMgcmlnaHQgaW50byB0aGUgYXR0YWNoZWQgc2Fjay4gU2V0IHVwIGluIHNlY29uZHMgYmVjYXVzZSBvdXIgcm9wZXMgYWxsIGNvbWUgd2l0aCBwcmV0aWVkIGtub3RzIScsXG4gICAgICAgIHByaWNlOiAzNC45OVxuICAgIH0se1xuICAgICAgICBpZDogNSxcbiAgICAgICAgbmFtZTogJ1RoZSBNZWFkb3cnLFxuICAgICAgICBjb2xvcjogJ2xpbWUgZ3JlZW4vIGxpZ2h0IGJsdWUvIHdoaXRlJyxcbiAgICAgICAgaW1hZ2U6IFwiLi9pbWcvaGFtbW9ja3MvbWVhZG93aGFtbW9jay5qcGdcIixcbiAgICAgICAgc3RhdHVzOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgZGVzYzogJ1RoZSBiZXN0IGhhbW1vY2sgb3V0IHRoZXJlISBHcmVhdCBmb3IgMSwgcGVyZmVjdCBmb3IgMi4gRWFzaWx5IHRyYW5zcG9ydGFibGUgYW5kIHN0dWZmcyByaWdodCBpbnRvIHRoZSBhdHRhY2hlZCBzYWNrLiBTZXQgdXAgaW4gc2Vjb25kcyBiZWNhdXNlIG91ciByb3BlcyBhbGwgY29tZSB3aXRoIHByZXRpZWQga25vdHMhJyxcbiAgICAgICAgcHJpY2U6IDM0Ljk5XG4gICAgfV1cblxuICAgIHRoaXMuZ2V0QmVzdFNlbGxlcnMgPSAoKSA9PiB7XG4gICAgICBsZXQgYmVzdFNlbGxlcnMgPSB0aGlzLmJlc3RTZWxsZXJzO1xuICAgICAgcmV0dXJuIGJlc3RTZWxsZXJzO1xuICAgIH1cblxuICAgIHRoaXMuZ2V0SGFtbW9ja3MgPSAoKSA9PiB7XG4gICAgICBsZXQgaGFtbW9ja3MgPSB0aGlzLmhhbW1vY2tzO1xuICAgICAgcmV0dXJuIGhhbW1vY2tzO1xuICAgIH1cblxuICAgIHRoaXMuZ2V0SGFtbW9ja0RldGFpbHMgPSAoc3RhdGVQYXJhbXMpID0+IHtcbiAgICAgIGxldCBoYW1tb2NrRGV0YWlscyA9IHRoaXMuaGFtbW9ja3M7XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgaGFtbW9ja0RldGFpbHMubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zb2xlLmxvZyhoYW1tb2NrRGV0YWlscywgc3RhdGVQYXJhbXMpO1xuICAgICAgICBpZihoYW1tb2NrRGV0YWlsc1tpXS5pZCA9PT0gcGFyc2VJbnQoc3RhdGVQYXJhbXMuaWQpKXtcbiAgICAgICAgICByZXR1cm4gaGFtbW9ja0RldGFpbHNbaV1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuXG5cblxufSkvL2VuZCBvZiBzZXJ2aWNlXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpLnNlcnZpY2UoJ291dHBvc3RTcnZjJywgZnVuY3Rpb24oKXtcblxuXG59KS8vZW5kIG9mIHNlcnZpY2U7XG4iXX0=
