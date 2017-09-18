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
  // console.log($scope.hammocks);

  $("html, body").animate({ scrollTop: 0 }, 200);
}); //end of home controller
'use strict';

angular.module('makeTracks').controller('hammockDetailsCtrl', function ($scope, hammockSrvc, $stateParams) {

    $scope.hammock = hammockSrvc.getHammockDetails($stateParams);
    // console.log($scope.hammock);

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

    $('#product-carousel').carousel();

    $("html, body").animate({ scrollTop: 0 }, 200);
});
'use strict';

angular.module('makeTracks').controller('homeCtrl', function ($scope, hammockSrvc, $stateParams) {

  $scope.bestSellers = hammockSrvc.getBestSellers();
  // console.log($scope.bestSellers);

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
    id: 5,
    name: 'The Breeze',
    image: "./img/hammocks/product/oasishammock.jpg",
    price: 34.99
  }, {
    id: 3,
    name: 'The Woodland',
    image: "./img/hammocks/product/woodlandhammock.jpg",
    price: 34.99
  }, {
    id: 4,
    name: 'The Summit',
    image: "./img/hammocks/product/summithammock.jpg",
    price: 34.99
  }];

  this.hammocks = [{
    id: 5,
    name: 'The Breeze',
    color: 'lime green/ light blue/ white',
    image: "./img/hammocks/product/oasishammock.jpg",
    image1: "./img/hammocks/product/oasishammockandbag.jpg",
    image2: "./img/hammocks/product/oasisbag.jpg",
    image3: "./img/hammocks/product/treeropeandsleeve.jpg",
    image4: "./img/gallery/treeSetUpSq.jpg",
    image5: "./img/gallery/breeze/AFBreezeSq.jpg",
    image6: "./img/gallery/breeze/breezeAFCFamily.JPG",
    image7: "./img/gallery/breeze/breezeJuly17.JPG",
    status: 'Live June 1st on Amazon',
    desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes all come with pretied knots!',
    price: 34.99,
    link: 'https://www.amazon.com/dp/B06Y1Y2XG3?th=1'
  }, {
    id: 4,
    name: 'The Summit',
    color: 'charcoal/red',
    image: "./img/hammocks/product/summithammock.jpg",
    image1: "./img/hammocks/product/summithammockandbag.jpg",
    image2: "./img/hammocks/product/Bag.jpg",
    image3: "./img/hammocks/product/treeropeandsleeve.jpg",
    image4: "./img/gallery/treeSetUpSq.jpg",
    image5: "./img/gallery/summit/summitAFCanyon2.jpg",
    image6: "./img/gallery/summit/summitAFCanyon.jpg",
    image7: "./img/gallery/summit/sedona_summit.JPG",
    status: 'Live June 1st on Amazon',
    desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes all come with pretied knots!',
    price: 34.99,
    link: 'https://www.amazon.com/dp/B06Y1T31BQ?th=1'
  }, {
    id: 3,
    name: 'The Woodland',
    color: 'green/gray',
    image: "./img/hammocks/product/woodlandhammock.jpg",
    image1: "./img/hammocks/product/woodlandhammockandbag.jpg",
    image2: "./img/hammocks/product/woodlandbag.jpg",
    image3: "./img/hammocks/product/treeropeandsleeve.jpg",
    image4: "./img/gallery/treeSetUpSq.jpg",
    image5: "./img/gallery/woodland/WoodlandSqThumbnail.jpg",
    image6: "./img/gallery/woodland/sedona_woodland.JPG",
    image7: "./img/gallery/summit/sedona_summit.JPG",
    status: 'Live June 1st on Amazon',
    desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes all come with pretied knots!',
    price: 34.99,
    link: 'https://www.amazon.com/dp/B06Y1DRNM3?th=1'
  }, {
    id: 1,
    name: 'The Sunrise',
    color: 'orange/gray',
    image: "./img/hammocks/product/sunrisehammock.jpg",
    image1: "./img/hammocks/product/sunrisehammockandbag.jpg",
    image2: "./img/hammocks/product/sunrisebag.jpg",
    image3: "./img/hammocks/product/treeropeandsleeve.jpg",
    image4: "./img/gallery/treeSetUpSq.jpg",
    image5: "./img/gallery/sunrise/AFCoupleSunriseSq.jpg",
    image6: "./img/gallery/sunrise/sunriseDirtBike.jpg",
    image7: "./img/gallery/sunrise/sunriseAFCJuly17.JPG",
    status: 'Live June 1st on Amazon',
    desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes all come with pretied knots!',
    price: 34.99,
    link: 'https://www.amazon.com/dp/B06Y1N2691?th=1'
  }, {
    id: 2,
    name: 'The Wave',
    color: 'blue/light blue',
    image: "./img/hammocks/product/wavehammock.jpg",
    image1: "./img/hammocks/product/wavehammockandbag.jpg",
    image2: "./img/hammocks/product/wavebag.jpg",
    image3: "./img/hammocks/product/treeropeandsleeve.jpg",
    image4: "./img/gallery/treeSetUpSq.jpg",
    image5: "./img/gallery/wave/waveAFCanyon2.jpg",
    image6: "./img/gallery/wave/wavecoupleAF17.JPG",
    image7: "./img/gallery/wave/wavesedona.JPG",
    status: 'Live June 1st on Amazon',
    desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes all come with pretied knots!',
    price: 34.99,
    link: 'https://www.amazon.com/dp/B06Y1DRKP5?th=1'
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
      // console.log(hammockDetails, stateParams);
      if (hammockDetails[i].id === parseInt(stateParams.id)) {
        return hammockDetails[i];
      }
    }
  };
}); //end of service
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbnRyb2xsZXJzL2NvbnRhY3RDdHJsLmpzIiwiY29udHJvbGxlcnMvaGFtbW9ja0N0cmwuanMiLCJjb250cm9sbGVycy9oYW1tb2NrRGV0YWlsc0N0cmwuanMiLCJjb250cm9sbGVycy9ob21lQ3RybC5qcyIsImNvbnRyb2xsZXJzL291dHBvc3RDdHJsLmpzIiwiY29udHJvbGxlcnMvc3RvcnlDdHJsLmpzIiwiZGlyZWN0aXZlcy9mb290ZXIuanMiLCJkaXJlY3RpdmVzL25hdmJhci5qcyIsImRpcmVjdGl2ZXMvc2xpZGVhYmxlLmpzIiwic2VydmljZXMvaGFtbW9ja1NydmMuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImNvbmZpZyIsIiRzdGF0ZVByb3ZpZGVyIiwiJHVybFJvdXRlclByb3ZpZGVyIiwic3RhdGUiLCJ1cmwiLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXIiLCJvdGhlcndpc2UiLCIkc2NvcGUiLCJoYW1tb2NrU3J2YyIsIiRzdGF0ZVBhcmFtcyIsIiQiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwiaGFtbW9ja3MiLCJnZXRIYW1tb2NrcyIsImhhbW1vY2siLCJnZXRIYW1tb2NrRGV0YWlscyIsImNsaWNrIiwib2Zmc2V0IiwidG9wIiwiY2Fyb3VzZWwiLCJiZXN0U2VsbGVycyIsImdldEJlc3RTZWxsZXJzIiwiZGlyZWN0aXZlIiwicmVzdHJpY3QiLCJjb21waWxlIiwiZWxlbWVudCIsImF0dHIiLCJjb250ZW50cyIsImh0bWwiLCJwb3N0TGluayIsInNjb3BlIiwiYXR0cnMiLCJkdXJhdGlvbiIsImVhc2luZyIsImNzcyIsImxpbmsiLCJ0YXJnZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzbGlkZVRvZ2dsZSIsImV4cGFuZGVkIiwiYmluZCIsImNvbnRlbnQiLCJzdHlsZSIsImJvcmRlciIsInkiLCJjbGllbnRIZWlnaHQiLCJoZWlnaHQiLCJzZXJ2aWNlIiwiaWQiLCJuYW1lIiwiaW1hZ2UiLCJwcmljZSIsImNvbG9yIiwiaW1hZ2UxIiwiaW1hZ2UyIiwiaW1hZ2UzIiwiaW1hZ2U0IiwiaW1hZ2U1IiwiaW1hZ2U2IiwiaW1hZ2U3Iiwic3RhdHVzIiwiZGVzYyIsInN0YXRlUGFyYW1zIiwiaGFtbW9ja0RldGFpbHMiLCJpIiwibGVuZ3RoIiwicGFyc2VJbnQiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFFBQVFDLE1BQVIsQ0FBZSxZQUFmLEVBQTZCLENBQUMsV0FBRCxDQUE3QixFQUNHQyxNQURILENBQ1UsVUFBU0MsY0FBVCxFQUF5QkMsa0JBQXpCLEVBQTRDOztBQUVsREQsbUJBQ0dFLEtBREgsQ0FDUyxNQURULEVBQ2dCO0FBQ1ZDLGFBQUksR0FETTtBQUVWQyxxQkFBYSxtQkFGSDtBQUdWQyxvQkFBWTtBQUhGLEtBRGhCLEVBTUdILEtBTkgsQ0FNUyxPQU5ULEVBTWlCO0FBQ1hDLGFBQUksUUFETztBQUVYQyxxQkFBYSxvQkFGRjtBQUdYQyxvQkFBWTtBQUhELEtBTmpCLEVBV0dILEtBWEgsQ0FXUyxVQVhULEVBV29CO0FBQ2RDLGFBQUksV0FEVTtBQUVkQyxxQkFBYSx1QkFGQztBQUdkQyxvQkFBWTtBQUhFLEtBWHBCLEVBZ0JHSCxLQWhCSCxDQWdCUyxnQkFoQlQsRUFnQjBCO0FBQ3BCQyxhQUFJLHFCQURnQjtBQUVwQkMscUJBQWEsOEJBRk87QUFHcEJDLG9CQUFZO0FBSFEsS0FoQjFCLEVBcUJHSCxLQXJCSCxDQXFCUyxzQkFyQlQsRUFxQmdDO0FBQzFCQyxhQUFJLG1CQURzQjtBQUUxQkMscUJBQWE7QUFGYSxLQXJCaEMsRUF5QkdGLEtBekJILENBeUJTLHNCQXpCVCxFQXlCZ0M7QUFDMUJDLGFBQUksZUFEc0I7QUFFMUJDLHFCQUFhO0FBRmEsS0F6QmhDLEVBNkJHRixLQTdCSCxDQTZCUyx3QkE3QlQsRUE2QmtDO0FBQzVCQyxhQUFJLGlCQUR3QjtBQUU1QkMscUJBQWE7QUFGZSxLQTdCbEMsRUFpQ0dGLEtBakNILENBaUNTLFNBakNULEVBaUNtQjtBQUNiQyxhQUFJLFVBRFM7QUFF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Y0FBTCxHQUFzQixZQUFNO0FBQzFCLFFBQUlELGNBQWMsTUFBS0EsV0FBdkI7QUFDQSxXQUFPQSxXQUFQO0FBQ0QsR0FIRDs7QUFLQSxPQUFLUCxXQUFMLEdBQW1CLFlBQU07QUFDdkIsUUFBSUQsV0FBVyxNQUFLQSxRQUFwQjtBQUNBLFdBQU9BLFFBQVA7QUFDRCxHQUhEOztBQUtBLE9BQUtHLGlCQUFMLEdBQXlCLFVBQUNnRCxXQUFELEVBQWlCO0FBQ3hDLFFBQUlDLGlCQUFpQixNQUFLcEQsUUFBMUI7QUFDQSxTQUFJLElBQUlxRCxJQUFJLENBQVosRUFBZUEsSUFBSUQsZUFBZUUsTUFBbEMsRUFBMENELEdBQTFDLEVBQThDO0FBQzVDO0FBQ0EsVUFBR0QsZUFBZUMsQ0FBZixFQUFrQmhCLEVBQWxCLEtBQXlCa0IsU0FBU0osWUFBWWQsRUFBckIsQ0FBNUIsRUFBcUQ7QUFDbkQsZUFBT2UsZUFBZUMsQ0FBZixDQUFQO0FBQ0Q7QUFDRjtBQUNGLEdBUkQ7QUFhSCxDQTdIRCxHQTZIRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycsIFsndWkucm91dGVyJ10pXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcil7XG5cbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdob21lJyx7XG4gICAgICAgICAgdXJsOicvJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogXCIuL3ZpZXdzL2hvbWUuaHRtbFwiLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdob21lQ3RybCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ3N0b3J5Jyx7XG4gICAgICAgICAgdXJsOicvc3RvcnknLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9zdG9yeS5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnc3RvcnlDdHJsJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnaGFtbW9ja3MnLHtcbiAgICAgICAgICB1cmw6Jy9oYW1tb2NrcycsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2hhbW1vY2tzLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdoYW1tb2NrQ3RybCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2hhbW1vY2tEZXRhaWxzJyx7XG4gICAgICAgICAgdXJsOicvaGFtbW9ja0RldGFpbHMvOmlkJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvaGFtbW9jay1kZXRhaWxzLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdoYW1tb2NrRGV0YWlsc0N0cmwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdoYW1tb2NrRGV0YWlscy5zcGVjcycse1xuICAgICAgICAgIHVybDonL2hhbW1vY2tTcGVjcy86aWQnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9oYW1tb2NrU3BlY3MuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2hhbW1vY2tEZXRhaWxzLnNldHVwJyx7XG4gICAgICAgICAgdXJsOicvaGFtbW9ja1NldHVwJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvaGFtbW9ja1NldHVwLmh0bWwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdoYW1tb2NrRGV0YWlscy5yZXR1cm5zJyx7XG4gICAgICAgICAgdXJsOicvaGFtbW9ja1JldHVybnMnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9oYW1tb2NrUmV0dXJucy5odG1sJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnb3V0cG9zdCcse1xuICAgICAgICAgIHVybDonL291dHBvc3QnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9vdXRwb3N0Lmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdvdXRwb3N0Q3RybCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ291dHBvc3QuZmFxJyx7XG4gICAgICAgICAgdXJsOicvZmFxJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvZmFxLmh0bWwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdvdXRwb3N0LnJlZnVuZHMnLHtcbiAgICAgICAgICB1cmw6Jy9yZWZ1bmRzJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvcmVmdW5kcy5odG1sJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnb3V0cG9zdC52aWRlb3MnLHtcbiAgICAgICAgICB1cmw6Jy92aWRlb3MnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy92aWRlb3MuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2NvbWluZ3Nvb24nLHtcbiAgICAgICAgICB1cmw6Jy9jb21pbmdzb29uJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvY29taW5nc29vbi5odG1sJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnY29udGFjdCcse1xuICAgICAgICAgIHVybDonL2NvbnRhY3QnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9jb250YWN0Lmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdjb250YWN0Q3RybCdcbiAgICAgIH0pO1xuXG4gICAgJHVybFJvdXRlclByb3ZpZGVyXG4gICAgICAgIC5vdGhlcndpc2UoJy8nKTtcbn0pXG4vL2lmIHlvdSB3YW50IGV2ZXJ5IHZpZXcgdG8gbG9hZCBhdCB0b3AgdXNlIHRoZSBjb2RlIGJlbG93IC4uLiB0aGlzIHByb2plY3QgaGFzIG5lc3RlZCB2aWV3cyBzbyBJIGRvbid0IVxuXG4vLyAucnVuKGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgJGFuY2hvclNjcm9sbCkge1xuLy9cbi8vICAgICAkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3RhcnQnLCBmdW5jdGlvbiAoKSB7XG4vLyAgICAgICAgICRhbmNob3JTY3JvbGwoKTtcbi8vICAgICB9KTtcbi8vXG4vLyB9KTtcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJykuY29udHJvbGxlcignY29udGFjdEN0cmwnLCAoJHNjb3BlLCBoYW1tb2NrU3J2YywgJHN0YXRlUGFyYW1zKSA9PiB7XG5cbiAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCAyMDApO1xuXG59KS8vZW5kIG9mIGhvbWUgY29udHJvbGxlclxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5jb250cm9sbGVyKCdoYW1tb2NrQ3RybCcsICgkc2NvcGUsIGhhbW1vY2tTcnZjLCAkc3RhdGVQYXJhbXMpID0+IHtcblxuICAkc2NvcGUuaGFtbW9ja3MgPSBoYW1tb2NrU3J2Yy5nZXRIYW1tb2NrcygpO1xuICAvLyBjb25zb2xlLmxvZygkc2NvcGUuaGFtbW9ja3MpO1xuXG4gICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgMjAwKTtcblxufSkvL2VuZCBvZiBob21lIGNvbnRyb2xsZXJcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJylcbi5jb250cm9sbGVyKCdoYW1tb2NrRGV0YWlsc0N0cmwnLCAoJHNjb3BlLCBoYW1tb2NrU3J2YywgJHN0YXRlUGFyYW1zKSA9PiB7XG5cbiAgJHNjb3BlLmhhbW1vY2sgPSBoYW1tb2NrU3J2Yy5nZXRIYW1tb2NrRGV0YWlscygkc3RhdGVQYXJhbXMpO1xuICAvLyBjb25zb2xlLmxvZygkc2NvcGUuaGFtbW9jayk7XG5cbiAgJChcIiNzY3JvbGwtc3BlY3NcIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgc2Nyb2xsVG9wOiAkKFwiI3NwZWNzXCIpLm9mZnNldCgpLnRvcFxuICAgICAgfSwgMTAwMCk7XG4gIH0pO1xuICAkKFwiI3Njcm9sbC1zZXR1cFwiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICBzY3JvbGxUb3A6ICQoXCIjc3BlY3NcIikub2Zmc2V0KCkudG9wXG4gICAgICB9LCAxMDAwKTtcbiAgfSk7XG4gICQoXCIjc2Nyb2xsLXJldHVybnNcIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgc2Nyb2xsVG9wOiAkKFwiI3NwZWNzXCIpLm9mZnNldCgpLnRvcFxuICAgICAgfSwgMTAwMCk7XG4gIH0pO1xuXG4gICQoJyNwcm9kdWN0LWNhcm91c2VsJykuY2Fyb3VzZWwoKTtcblxuXG4gICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgMjAwKTtcblxufSlcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJylcbi5jb250cm9sbGVyKCdob21lQ3RybCcsICgkc2NvcGUsIGhhbW1vY2tTcnZjLCAkc3RhdGVQYXJhbXMpID0+IHtcblxuICAkc2NvcGUuYmVzdFNlbGxlcnMgPSBoYW1tb2NrU3J2Yy5nZXRCZXN0U2VsbGVycygpO1xuICAvLyBjb25zb2xlLmxvZygkc2NvcGUuYmVzdFNlbGxlcnMpO1xuXG4gICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgMjAwKTtcblxufSkvL2VuZCBvZiBob21lIGNvbnRyb2xsZXJcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJykuY29udHJvbGxlcignb3V0cG9zdEN0cmwnLCAoJHNjb3BlLCAkc3RhdGVQYXJhbXMpID0+IHtcblxuICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIDIwMCk7XG5cbn0pLy9lbmQgb2YgY29udHJvbGxlclxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5jb250cm9sbGVyKCdzdG9yeUN0cmwnLCAoJHNjb3BlLCBoYW1tb2NrU3J2YywgJHN0YXRlUGFyYW1zKSA9PiB7XG5cbiAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCAyMDApO1xuXG59KS8vZW5kIG9mIGhvbWUgY29udHJvbGxlclxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5kaXJlY3RpdmUoJ2N1c3RvbUZvb3RlcicsICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvZm9vdGVyLmh0bWwnXG4gIH07XG59KSAvL2VuZCBvZiBuYXZiYXIgZGlyZWN0aXZlXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpLmRpcmVjdGl2ZSgnbmF2YmFyJywgKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9uYXZiYXIuaHRtbCdcbiAgfTtcbn0pIC8vZW5kIG9mIG5hdmJhciBkaXJlY3RpdmVcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJylcbi5kaXJlY3RpdmUoJ3NsaWRlYWJsZScsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByZXN0cmljdDonQycsXG4gICAgICAgIGNvbXBpbGU6IGZ1bmN0aW9uIChlbGVtZW50LCBhdHRyKSB7XG4gICAgICAgICAgICAvLyB3cmFwIHRhZ1xuICAgICAgICAgICAgdmFyIGNvbnRlbnRzID0gZWxlbWVudC5odG1sKCk7XG4gICAgICAgICAgICBlbGVtZW50Lmh0bWwoJzxkaXYgY2xhc3M9XCJzbGlkZWFibGVfY29udGVudFwiIHN0eWxlPVwibWFyZ2luOjAgIWltcG9ydGFudDsgcGFkZGluZzowICFpbXBvcnRhbnRcIiA+JyArIGNvbnRlbnRzICsgJzwvZGl2PicpO1xuXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gcG9zdExpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAgICAgICAgICAgLy8gZGVmYXVsdCBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgYXR0cnMuZHVyYXRpb24gPSAoIWF0dHJzLmR1cmF0aW9uKSA/ICcxcycgOiBhdHRycy5kdXJhdGlvbjtcbiAgICAgICAgICAgICAgICBhdHRycy5lYXNpbmcgPSAoIWF0dHJzLmVhc2luZykgPyAnZWFzZS1pbi1vdXQnIDogYXR0cnMuZWFzaW5nO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ292ZXJmbG93JzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgICdoZWlnaHQnOiAnMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25Qcm9wZXJ0eSc6ICdoZWlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAndHJhbnNpdGlvbkR1cmF0aW9uJzogYXR0cnMuZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24nOiBhdHRycy5lYXNpbmdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9O1xufSlcbi5kaXJlY3RpdmUoJ3NsaWRlVG9nZ2xlJywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhdHRycy5zbGlkZVRvZ2dsZSk7XG4gICAgICAgICAgICBhdHRycy5leHBhbmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgZWxlbWVudC5iaW5kKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBjb250ZW50ID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZWFibGVfY29udGVudCcpO1xuICAgICAgICAgICAgICAgIGlmKCFhdHRycy5leHBhbmRlZCkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgcmdiYSgwLDAsMCwwKSc7XG4gICAgICAgICAgICAgICAgICAgIHZhciB5ID0gY29udGVudC5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUuYm9yZGVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IHkgKyAncHgnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSAnMHB4JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXR0cnMuZXhwYW5kZWQgPSAhYXR0cnMuZXhwYW5kZWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5zZXJ2aWNlKCdoYW1tb2NrU3J2YycsIGZ1bmN0aW9uKCl7XG5cblxuICB0aGlzLmJlc3RTZWxsZXJzID0gW3tcbiAgICAgICAgaWQ6IDUsXG4gICAgICAgIG5hbWU6ICdUaGUgQnJlZXplJyxcbiAgICAgICAgaW1hZ2U6IFwiLi9pbWcvaGFtbW9ja3MvcHJvZHVjdC9vYXNpc2hhbW1vY2suanBnXCIsXG4gICAgICAgIHByaWNlOiAzNC45OVxuICAgIH0sIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIG5hbWU6ICdUaGUgV29vZGxhbmQnLFxuICAgICAgICBpbWFnZTogXCIuL2ltZy9oYW1tb2Nrcy9wcm9kdWN0L3dvb2RsYW5kaGFtbW9jay5qcGdcIixcbiAgICAgICAgcHJpY2U6IDM0Ljk5XG4gICAgfSx7XG4gICAgICAgIGlkOiA0LFxuICAgICAgICBuYW1lOiAnVGhlIFN1bW1pdCcsXG4gICAgICAgIGltYWdlOiBcIi4vaW1nL2hhbW1vY2tzL3Byb2R1Y3Qvc3VtbWl0aGFtbW9jay5qcGdcIixcbiAgICAgICAgcHJpY2U6IDM0Ljk5XG4gICAgfV1cblxuICB0aGlzLmhhbW1vY2tzID0gW3tcbiAgICBpZDogNSxcbiAgICBuYW1lOiAnVGhlIEJyZWV6ZScsXG4gICAgY29sb3I6ICdsaW1lIGdyZWVuLyBsaWdodCBibHVlLyB3aGl0ZScsXG4gICAgaW1hZ2U6IFwiLi9pbWcvaGFtbW9ja3MvcHJvZHVjdC9vYXNpc2hhbW1vY2suanBnXCIsXG4gICAgaW1hZ2UxOiBcIi4vaW1nL2hhbW1vY2tzL3Byb2R1Y3Qvb2FzaXNoYW1tb2NrYW5kYmFnLmpwZ1wiLFxuICAgIGltYWdlMjogXCIuL2ltZy9oYW1tb2Nrcy9wcm9kdWN0L29hc2lzYmFnLmpwZ1wiLFxuICAgIGltYWdlMzogXCIuL2ltZy9oYW1tb2Nrcy9wcm9kdWN0L3RyZWVyb3BlYW5kc2xlZXZlLmpwZ1wiLFxuICAgIGltYWdlNDogXCIuL2ltZy9nYWxsZXJ5L3RyZWVTZXRVcFNxLmpwZ1wiLFxuICAgIGltYWdlNTogXCIuL2ltZy9nYWxsZXJ5L2JyZWV6ZS9BRkJyZWV6ZVNxLmpwZ1wiLFxuICAgIGltYWdlNjogXCIuL2ltZy9nYWxsZXJ5L2JyZWV6ZS9icmVlemVBRkNGYW1pbHkuSlBHXCIsXG4gICAgaW1hZ2U3OiBcIi4vaW1nL2dhbGxlcnkvYnJlZXplL2JyZWV6ZUp1bHkxNy5KUEdcIixcbiAgICBzdGF0dXM6ICdMaXZlIEp1bmUgMXN0IG9uIEFtYXpvbicsXG4gICAgZGVzYzogJ1RoZSBiZXN0IGhhbW1vY2sgb3V0IHRoZXJlISBHcmVhdCBmb3IgMSwgcGVyZmVjdCBmb3IgMi4gRWFzaWx5IHRyYW5zcG9ydGFibGUgYW5kIHN0dWZmcyByaWdodCBpbnRvIHRoZSBhdHRhY2hlZCBzYWNrLiBTZXQgdXAgaW4gc2Vjb25kcyBiZWNhdXNlIG91ciByb3BlcyBhbGwgY29tZSB3aXRoIHByZXRpZWQga25vdHMhJyxcbiAgICBwcmljZTogMzQuOTksXG4gICAgbGluazogJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vZHAvQjA2WTFZMlhHMz90aD0xJ1xuICB9LCB7XG4gICAgaWQ6IDQsXG4gICAgbmFtZTogJ1RoZSBTdW1taXQnLFxuICAgIGNvbG9yOiAnY2hhcmNvYWwvcmVkJyxcbiAgICBpbWFnZTogXCIuL2ltZy9oYW1tb2Nrcy9wcm9kdWN0L3N1bW1pdGhhbW1vY2suanBnXCIsXG4gICAgaW1hZ2UxOiBcIi4vaW1nL2hhbW1vY2tzL3Byb2R1Y3Qvc3VtbWl0aGFtbW9ja2FuZGJhZy5qcGdcIixcbiAgICBpbWFnZTI6IFwiLi9pbWcvaGFtbW9ja3MvcHJvZHVjdC9CYWcuanBnXCIsXG4gICAgaW1hZ2UzOiBcIi4vaW1nL2hhbW1vY2tzL3Byb2R1Y3QvdHJlZXJvcGVhbmRzbGVldmUuanBnXCIsXG4gICAgaW1hZ2U0OiBcIi4vaW1nL2dhbGxlcnkvdHJlZVNldFVwU3EuanBnXCIsXG4gICAgaW1hZ2U1OiBcIi4vaW1nL2dhbGxlcnkvc3VtbWl0L3N1bW1pdEFGQ2FueW9uMi5qcGdcIixcbiAgICBpbWFnZTY6IFwiLi9pbWcvZ2FsbGVyeS9zdW1taXQvc3VtbWl0QUZDYW55b24uanBnXCIsXG4gICAgaW1hZ2U3OiBcIi4vaW1nL2dhbGxlcnkvc3VtbWl0L3NlZG9uYV9zdW1taXQuSlBHXCIsXG4gICAgc3RhdHVzOiAnTGl2ZSBKdW5lIDFzdCBvbiBBbWF6b24nLFxuICAgIGRlc2M6ICdUaGUgYmVzdCBoYW1tb2NrIG91dCB0aGVyZSEgR3JlYXQgZm9yIDEsIHBlcmZlY3QgZm9yIDIuIEVhc2lseSB0cmFuc3BvcnRhYmxlIGFuZCBzdHVmZnMgcmlnaHQgaW50byB0aGUgYXR0YWNoZWQgc2Fjay4gU2V0IHVwIGluIHNlY29uZHMgYmVjYXVzZSBvdXIgcm9wZXMgYWxsIGNvbWUgd2l0aCBwcmV0aWVkIGtub3RzIScsXG4gICAgcHJpY2U6IDM0Ljk5LFxuICAgIGxpbms6ICdodHRwczovL3d3dy5hbWF6b24uY29tL2RwL0IwNlkxVDMxQlE/dGg9MSdcbiAgfSx7XG4gICAgaWQ6IDMsXG4gICAgbmFtZTogJ1RoZSBXb29kbGFuZCcsXG4gICAgY29sb3I6ICdncmVlbi9ncmF5JyxcbiAgICBpbWFnZTogXCIuL2ltZy9oYW1tb2Nrcy9wcm9kdWN0L3dvb2RsYW5kaGFtbW9jay5qcGdcIixcbiAgICBpbWFnZTE6IFwiLi9pbWcvaGFtbW9ja3MvcHJvZHVjdC93b29kbGFuZGhhbW1vY2thbmRiYWcuanBnXCIsXG4gICAgaW1hZ2UyOiBcIi4vaW1nL2hhbW1vY2tzL3Byb2R1Y3Qvd29vZGxhbmRiYWcuanBnXCIsXG4gICAgaW1hZ2UzOiBcIi4vaW1nL2hhbW1vY2tzL3Byb2R1Y3QvdHJlZXJvcGVhbmRzbGVldmUuanBnXCIsXG4gICAgaW1hZ2U0OiBcIi4vaW1nL2dhbGxlcnkvdHJlZVNldFVwU3EuanBnXCIsXG4gICAgaW1hZ2U1OiBcIi4vaW1nL2dhbGxlcnkvd29vZGxhbmQvV29vZGxhbmRTcVRodW1ibmFpbC5qcGdcIixcbiAgICBpbWFnZTY6IFwiLi9pbWcvZ2FsbGVyeS93b29kbGFuZC9zZWRvbmFfd29vZGxhbmQuSlBHXCIsXG4gICAgaW1hZ2U3OiBcIi4vaW1nL2dhbGxlcnkvc3VtbWl0L3NlZG9uYV9zdW1taXQuSlBHXCIsXG4gICAgc3RhdHVzOiAnTGl2ZSBKdW5lIDFzdCBvbiBBbWF6b24nLFxuICAgIGRlc2M6ICdUaGUgYmVzdCBoYW1tb2NrIG91dCB0aGVyZSEgR3JlYXQgZm9yIDEsIHBlcmZlY3QgZm9yIDIuIEVhc2lseSB0cmFuc3BvcnRhYmxlIGFuZCBzdHVmZnMgcmlnaHQgaW50byB0aGUgYXR0YWNoZWQgc2Fjay4gU2V0IHVwIGluIHNlY29uZHMgYmVjYXVzZSBvdXIgcm9wZXMgYWxsIGNvbWUgd2l0aCBwcmV0aWVkIGtub3RzIScsXG4gICAgcHJpY2U6IDM0Ljk5LFxuICAgIGxpbms6ICdodHRwczovL3d3dy5hbWF6b24uY29tL2RwL0IwNlkxRFJOTTM/dGg9MSdcbiAgfSx7XG4gICAgaWQ6IDEsXG4gICAgbmFtZTogJ1RoZSBTdW5yaXNlJyxcbiAgICBjb2xvcjogJ29yYW5nZS9ncmF5JyxcbiAgICBpbWFnZTogXCIuL2ltZy9oYW1tb2Nrcy9wcm9kdWN0L3N1bnJpc2VoYW1tb2NrLmpwZ1wiLFxuICAgIGltYWdlMTogXCIuL2ltZy9oYW1tb2Nrcy9wcm9kdWN0L3N1bnJpc2VoYW1tb2NrYW5kYmFnLmpwZ1wiLFxuICAgIGltYWdlMjogXCIuL2ltZy9oYW1tb2Nrcy9wcm9kdWN0L3N1bnJpc2ViYWcuanBnXCIsXG4gICAgaW1hZ2UzOiBcIi4vaW1nL2hhbW1vY2tzL3Byb2R1Y3QvdHJlZXJvcGVhbmRzbGVldmUuanBnXCIsXG4gICAgaW1hZ2U0OiBcIi4vaW1nL2dhbGxlcnkvdHJlZVNldFVwU3EuanBnXCIsXG4gICAgaW1hZ2U1OiBcIi4vaW1nL2dhbGxlcnkvc3VucmlzZS9BRkNvdXBsZVN1bnJpc2VTcS5qcGdcIixcbiAgICBpbWFnZTY6IFwiLi9pbWcvZ2FsbGVyeS9zdW5yaXNlL3N1bnJpc2VEaXJ0QmlrZS5qcGdcIixcbiAgICBpbWFnZTc6IFwiLi9pbWcvZ2FsbGVyeS9zdW5yaXNlL3N1bnJpc2VBRkNKdWx5MTcuSlBHXCIsXG4gICAgc3RhdHVzOiAnTGl2ZSBKdW5lIDFzdCBvbiBBbWF6b24nLFxuICAgIGRlc2M6ICdUaGUgYmVzdCBoYW1tb2NrIG91dCB0aGVyZSEgR3JlYXQgZm9yIDEsIHBlcmZlY3QgZm9yIDIuIEVhc2lseSB0cmFuc3BvcnRhYmxlIGFuZCBzdHVmZnMgcmlnaHQgaW50byB0aGUgYXR0YWNoZWQgc2Fjay4gU2V0IHVwIGluIHNlY29uZHMgYmVjYXVzZSBvdXIgcm9wZXMgYWxsIGNvbWUgd2l0aCBwcmV0aWVkIGtub3RzIScsXG4gICAgcHJpY2U6IDM0Ljk5LFxuICAgIGxpbms6ICdodHRwczovL3d3dy5hbWF6b24uY29tL2RwL0IwNlkxTjI2OTE/dGg9MSdcbiAgfSx7XG4gICAgaWQ6IDIsXG4gICAgbmFtZTogJ1RoZSBXYXZlJyxcbiAgICBjb2xvcjogJ2JsdWUvbGlnaHQgYmx1ZScsXG4gICAgaW1hZ2U6IFwiLi9pbWcvaGFtbW9ja3MvcHJvZHVjdC93YXZlaGFtbW9jay5qcGdcIixcbiAgICBpbWFnZTE6IFwiLi9pbWcvaGFtbW9ja3MvcHJvZHVjdC93YXZlaGFtbW9ja2FuZGJhZy5qcGdcIixcbiAgICBpbWFnZTI6IFwiLi9pbWcvaGFtbW9ja3MvcHJvZHVjdC93YXZlYmFnLmpwZ1wiLFxuICAgIGltYWdlMzogXCIuL2ltZy9oYW1tb2Nrcy9wcm9kdWN0L3RyZWVyb3BlYW5kc2xlZXZlLmpwZ1wiLFxuICAgIGltYWdlNDogXCIuL2ltZy9nYWxsZXJ5L3RyZWVTZXRVcFNxLmpwZ1wiLFxuICAgIGltYWdlNTogXCIuL2ltZy9nYWxsZXJ5L3dhdmUvd2F2ZUFGQ2FueW9uMi5qcGdcIixcbiAgICBpbWFnZTY6IFwiLi9pbWcvZ2FsbGVyeS93YXZlL3dhdmVjb3VwbGVBRjE3LkpQR1wiLFxuICAgIGltYWdlNzogXCIuL2ltZy9nYWxsZXJ5L3dhdmUvd2F2ZXNlZG9uYS5KUEdcIixcbiAgICBzdGF0dXM6ICdMaXZlIEp1bmUgMXN0IG9uIEFtYXpvbicsXG4gICAgZGVzYzogJ1RoZSBiZXN0IGhhbW1vY2sgb3V0IHRoZXJlISBHcmVhdCBmb3IgMSwgcGVyZmVjdCBmb3IgMi4gRWFzaWx5IHRyYW5zcG9ydGFibGUgYW5kIHN0dWZmcyByaWdodCBpbnRvIHRoZSBhdHRhY2hlZCBzYWNrLiBTZXQgdXAgaW4gc2Vjb25kcyBiZWNhdXNlIG91ciByb3BlcyBhbGwgY29tZSB3aXRoIHByZXRpZWQga25vdHMhJyxcbiAgICBwcmljZTogMzQuOTksXG4gICAgbGluazogJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vZHAvQjA2WTFEUktQNT90aD0xJ1xuICB9XVxuXG4gICAgdGhpcy5nZXRCZXN0U2VsbGVycyA9ICgpID0+IHtcbiAgICAgIGxldCBiZXN0U2VsbGVycyA9IHRoaXMuYmVzdFNlbGxlcnM7XG4gICAgICByZXR1cm4gYmVzdFNlbGxlcnM7XG4gICAgfVxuXG4gICAgdGhpcy5nZXRIYW1tb2NrcyA9ICgpID0+IHtcbiAgICAgIGxldCBoYW1tb2NrcyA9IHRoaXMuaGFtbW9ja3M7XG4gICAgICByZXR1cm4gaGFtbW9ja3M7XG4gICAgfVxuXG4gICAgdGhpcy5nZXRIYW1tb2NrRGV0YWlscyA9IChzdGF0ZVBhcmFtcykgPT4ge1xuICAgICAgbGV0IGhhbW1vY2tEZXRhaWxzID0gdGhpcy5oYW1tb2NrcztcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBoYW1tb2NrRGV0YWlscy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGhhbW1vY2tEZXRhaWxzLCBzdGF0ZVBhcmFtcyk7XG4gICAgICAgIGlmKGhhbW1vY2tEZXRhaWxzW2ldLmlkID09PSBwYXJzZUludChzdGF0ZVBhcmFtcy5pZCkpe1xuICAgICAgICAgIHJldHVybiBoYW1tb2NrRGV0YWlsc1tpXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG5cblxuXG59KS8vZW5kIG9mIHNlcnZpY2VcbiJdfQ==
