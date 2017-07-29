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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbnRyb2xsZXJzL2NvbnRhY3RDdHJsLmpzIiwiY29udHJvbGxlcnMvaGFtbW9ja0N0cmwuanMiLCJjb250cm9sbGVycy9oYW1tb2NrRGV0YWlsc0N0cmwuanMiLCJjb250cm9sbGVycy9ob21lQ3RybC5qcyIsImNvbnRyb2xsZXJzL291dHBvc3RDdHJsLmpzIiwiY29udHJvbGxlcnMvc3RvcnlDdHJsLmpzIiwic2VydmljZXMvaGFtbW9ja1NydmMuanMiLCJkaXJlY3RpdmVzL2Zvb3Rlci5qcyIsImRpcmVjdGl2ZXMvbmF2YmFyLmpzIiwiZGlyZWN0aXZlcy9zbGlkZWFibGUuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImNvbmZpZyIsIiRzdGF0ZVByb3ZpZGVyIiwiJHVybFJvdXRlclByb3ZpZGVyIiwic3RhdGUiLCJ1cmwiLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXIiLCJvdGhlcndpc2UiLCIkc2NvcGUiLCJoYW1tb2NrU3J2YyIsIiRzdGF0ZVBhcmFtcyIsIiQiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwiaGFtbW9ja3MiLCJnZXRIYW1tb2NrcyIsImhhbW1vY2siLCJnZXRIYW1tb2NrRGV0YWlscyIsImNsaWNrIiwib2Zmc2V0IiwidG9wIiwiY2Fyb3VzZWwiLCJiZXN0U2VsbGVycyIsImdldEJlc3RTZWxsZXJzIiwic2VydmljZSIsImlkIiwibmFtZSIsImltYWdlIiwicHJpY2UiLCJjb2xvciIsImltYWdlMSIsImltYWdlMiIsImltYWdlMyIsImltYWdlNCIsImltYWdlNSIsImltYWdlNiIsImltYWdlNyIsInN0YXR1cyIsImRlc2MiLCJsaW5rIiwic3RhdGVQYXJhbXMiLCJoYW1tb2NrRGV0YWlscyIsImkiLCJsZW5ndGgiLCJwYXJzZUludCIsImRpcmVjdGl2ZSIsInJlc3RyaWN0IiwiY29tcGlsZSIsImVsZW1lbnQiLCJhdHRyIiwiY29udGVudHMiLCJodG1sIiwicG9zdExpbmsiLCJzY29wZSIsImF0dHJzIiwiZHVyYXRpb24iLCJlYXNpbmciLCJjc3MiLCJ0YXJnZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzbGlkZVRvZ2dsZSIsImV4cGFuZGVkIiwiYmluZCIsImNvbnRlbnQiLCJzdHlsZSIsImJvcmRlciIsInkiLCJjbGllbnRIZWlnaHQiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFFBQVFDLE1BQVIsQ0FBZSxZQUFmLEVBQTZCLENBQUMsV0FBRCxDQUE3QixFQUNHQyxNQURILENBQ1UsVUFBU0MsY0FBVCxFQUF5QkMsa0JBQXpCLEVBQTRDOztBQUVsREQsbUJBQ0dFLEtBREgsQ0FDUyxNQURULEVBQ2dCO0FBQ1ZDLGFBQUksR0FETTtBQUVWQyxxQkFBYSxtQkFGSDtBQUdWQyxvQkFBWTtBQUhGLEtBRGhCLEVBTUdILEtBTkgsQ0FNUyxPQU5ULEVBTWlCO0FBQ1hDLGFBQUksUUFETztBQUVYQyxxQkFBYSxvQkFGRjtBQUdYQyxvQkFBWTtBQUhELEtBTmpCLEVBV0dILEtBWEgsQ0FXUyxVQVhULEVBV29CO0FBQ2RDLGFBQUksV0FEVTtBQUVkQyxxQkFBYSx1QkFGQztBQUdkQyxvQkFBWTtBQUhFLEtBWHBCLEVBZ0JHSCxLQWhCSCxDQWdCUyxnQkFoQlQsRUFnQjBCO0FBQ3BCQyxhQUFJLHFCQURnQjtBQUVwQkMscUJBQWEsOEJBRk87QUFHcEJDLG9CQUFZO0FBSFEsS0FoQjFCLEVBcUJHSCxLQXJCSCxDQXFCUyxzQkFyQlQsRUFxQmdDO0FBQzFCQyxhQUFJLG1CQURzQjtBQUUxQkMscUJBQWE7QUFGYSxLQXJCaEMsRUF5QkdGLEtBekJILENBeUJTLHNCQXpCVCxFQXlCZ0M7QUFDMUJDLGFBQUksZUFEc0I7QUFFMUJDLHFCQUFhO0FBRmEsS0F6QmhDLEVBNkJHRixLQTdCSCxDQTZCUyx3QkE3QlQsRUE2QmtDO0FBQzVCQyxhQUFJLGlCQUR3QjtBQUU1QkMscUJBQWE7QUFGZSxLQTdCbEMsRUFpQ0dGLEtBakNILENBaUNTLFNBakNULEVBaUNtQjtBQUNiQyxhQUFJLFVBRFM7QUFF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QUFpQixLQUFqQjtBQUNBZCxvQkFBUWUsSUFBUixDQUFhLE9BQWIsRUFBc0IsWUFBVztBQUM3QixvQkFBSUMsVUFBVU4sT0FBT0UsYUFBUCxDQUFxQixvQkFBckIsQ0FBZDtBQUNBLG9CQUFHLENBQUNOLE1BQU1RLFFBQVYsRUFBb0I7QUFDaEJFLDRCQUFRQyxLQUFSLENBQWNDLE1BQWQsR0FBdUIseUJBQXZCO0FBQ0Esd0JBQUlDLElBQUlILFFBQVFJLFlBQWhCO0FBQ0FKLDRCQUFRQyxLQUFSLENBQWNDLE1BQWQsR0FBdUIsQ0FBdkI7QUFDQVIsMkJBQU9PLEtBQVAsQ0FBYUksTUFBYixHQUFzQkYsSUFBSSxJQUExQjtBQUNILGlCQUxELE1BS087QUFDSFQsMkJBQU9PLEtBQVAsQ0FBYUksTUFBYixHQUFzQixLQUF0QjtBQUNIO0FBQ0RmLHNCQUFNUSxRQUFOLEdBQWlCLENBQUNSLE1BQU1RLFFBQXhCO0FBQ0gsYUFYRDtBQVlIO0FBakJFLEtBQVA7QUFtQkgsQ0E1Q0QiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnLCBbJ3VpLnJvdXRlciddKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpe1xuXG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgnaG9tZScse1xuICAgICAgICAgIHVybDonLycsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6IFwiLi92aWV3cy9ob21lLmh0bWxcIixcbiAgICAgICAgICBjb250cm9sbGVyOiAnaG9tZUN0cmwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdzdG9yeScse1xuICAgICAgICAgIHVybDonL3N0b3J5JyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3Mvc3RvcnkuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ3N0b3J5Q3RybCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2hhbW1vY2tzJyx7XG4gICAgICAgICAgdXJsOicvaGFtbW9ja3MnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9oYW1tb2Nrcy5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnaGFtbW9ja0N0cmwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdoYW1tb2NrRGV0YWlscycse1xuICAgICAgICAgIHVybDonL2hhbW1vY2tEZXRhaWxzLzppZCcsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2hhbW1vY2stZGV0YWlscy5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnaGFtbW9ja0RldGFpbHNDdHJsJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnaGFtbW9ja0RldGFpbHMuc3BlY3MnLHtcbiAgICAgICAgICB1cmw6Jy9oYW1tb2NrU3BlY3MvOmlkJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvaGFtbW9ja1NwZWNzLmh0bWwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdoYW1tb2NrRGV0YWlscy5zZXR1cCcse1xuICAgICAgICAgIHVybDonL2hhbW1vY2tTZXR1cCcsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2hhbW1vY2tTZXR1cC5odG1sJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnaGFtbW9ja0RldGFpbHMucmV0dXJucycse1xuICAgICAgICAgIHVybDonL2hhbW1vY2tSZXR1cm5zJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvaGFtbW9ja1JldHVybnMuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ291dHBvc3QnLHtcbiAgICAgICAgICB1cmw6Jy9vdXRwb3N0JyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3Mvb3V0cG9zdC5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnb3V0cG9zdEN0cmwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdvdXRwb3N0LmZhcScse1xuICAgICAgICAgIHVybDonL2ZhcScsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2ZhcS5odG1sJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnb3V0cG9zdC5yZWZ1bmRzJyx7XG4gICAgICAgICAgdXJsOicvcmVmdW5kcycsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL3JlZnVuZHMuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ291dHBvc3QudmlkZW9zJyx7XG4gICAgICAgICAgdXJsOicvdmlkZW9zJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvdmlkZW9zLmh0bWwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdjb21pbmdzb29uJyx7XG4gICAgICAgICAgdXJsOicvY29taW5nc29vbicsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2NvbWluZ3Nvb24uaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2NvbnRhY3QnLHtcbiAgICAgICAgICB1cmw6Jy9jb250YWN0JyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvY29udGFjdC5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnY29udGFjdEN0cmwnXG4gICAgICB9KTtcblxuICAgICR1cmxSb3V0ZXJQcm92aWRlclxuICAgICAgICAub3RoZXJ3aXNlKCcvJyk7XG59KVxuLy9pZiB5b3Ugd2FudCBldmVyeSB2aWV3IHRvIGxvYWQgYXQgdG9wIHVzZSB0aGUgY29kZSBiZWxvdyAuLi4gdGhpcyBwcm9qZWN0IGhhcyBuZXN0ZWQgdmlld3Mgc28gSSBkb24ndCFcblxuLy8gLnJ1bihmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsICRhbmNob3JTY3JvbGwpIHtcbi8vXG4vLyAgICAgJHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN0YXJ0JywgZnVuY3Rpb24gKCkge1xuLy8gICAgICAgICAkYW5jaG9yU2Nyb2xsKCk7XG4vLyAgICAgfSk7XG4vL1xuLy8gfSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpLmNvbnRyb2xsZXIoJ2NvbnRhY3RDdHJsJywgKCRzY29wZSwgaGFtbW9ja1NydmMsICRzdGF0ZVBhcmFtcykgPT4ge1xuXG4gICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgMjAwKTtcblxufSkvL2VuZCBvZiBob21lIGNvbnRyb2xsZXJcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJykuY29udHJvbGxlcignaGFtbW9ja0N0cmwnLCAoJHNjb3BlLCBoYW1tb2NrU3J2YywgJHN0YXRlUGFyYW1zKSA9PiB7XG5cbiAgJHNjb3BlLmhhbW1vY2tzID0gaGFtbW9ja1NydmMuZ2V0SGFtbW9ja3MoKTtcbiAgLy8gY29uc29sZS5sb2coJHNjb3BlLmhhbW1vY2tzKTtcblxuICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIDIwMCk7XG5cbn0pLy9lbmQgb2YgaG9tZSBjb250cm9sbGVyXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpXG4uY29udHJvbGxlcignaGFtbW9ja0RldGFpbHNDdHJsJywgKCRzY29wZSwgaGFtbW9ja1NydmMsICRzdGF0ZVBhcmFtcykgPT4ge1xuXG4gICRzY29wZS5oYW1tb2NrID0gaGFtbW9ja1NydmMuZ2V0SGFtbW9ja0RldGFpbHMoJHN0YXRlUGFyYW1zKTtcbiAgLy8gY29uc29sZS5sb2coJHNjb3BlLmhhbW1vY2spO1xuXG4gICQoXCIjc2Nyb2xsLXNwZWNzXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgIHNjcm9sbFRvcDogJChcIiNzcGVjc1wiKS5vZmZzZXQoKS50b3BcbiAgICAgIH0sIDEwMDApO1xuICB9KTtcbiAgJChcIiNzY3JvbGwtc2V0dXBcIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgc2Nyb2xsVG9wOiAkKFwiI3NwZWNzXCIpLm9mZnNldCgpLnRvcFxuICAgICAgfSwgMTAwMCk7XG4gIH0pO1xuICAkKFwiI3Njcm9sbC1yZXR1cm5zXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgIHNjcm9sbFRvcDogJChcIiNzcGVjc1wiKS5vZmZzZXQoKS50b3BcbiAgICAgIH0sIDEwMDApO1xuICB9KTtcblxuICAkKCcjcHJvZHVjdC1jYXJvdXNlbCcpLmNhcm91c2VsKCk7XG5cblxuICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIDIwMCk7XG5cbn0pXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpXG4uY29udHJvbGxlcignaG9tZUN0cmwnLCAoJHNjb3BlLCBoYW1tb2NrU3J2YywgJHN0YXRlUGFyYW1zKSA9PiB7XG5cbiAgJHNjb3BlLmJlc3RTZWxsZXJzID0gaGFtbW9ja1NydmMuZ2V0QmVzdFNlbGxlcnMoKTtcbiAgLy8gY29uc29sZS5sb2coJHNjb3BlLmJlc3RTZWxsZXJzKTtcblxuICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIDIwMCk7XG5cbn0pLy9lbmQgb2YgaG9tZSBjb250cm9sbGVyXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpLmNvbnRyb2xsZXIoJ291dHBvc3RDdHJsJywgKCRzY29wZSwgJHN0YXRlUGFyYW1zKSA9PiB7XG5cbiAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCAyMDApO1xuXG59KS8vZW5kIG9mIGNvbnRyb2xsZXJcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJykuY29udHJvbGxlcignc3RvcnlDdHJsJywgKCRzY29wZSwgaGFtbW9ja1NydmMsICRzdGF0ZVBhcmFtcykgPT4ge1xuXG4gICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgMjAwKTtcblxufSkvL2VuZCBvZiBob21lIGNvbnRyb2xsZXJcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJykuc2VydmljZSgnaGFtbW9ja1NydmMnLCBmdW5jdGlvbigpe1xuXG5cbiAgdGhpcy5iZXN0U2VsbGVycyA9IFt7XG4gICAgICAgIGlkOiA1LFxuICAgICAgICBuYW1lOiAnVGhlIEJyZWV6ZScsXG4gICAgICAgIGltYWdlOiBcIi4vaW1nL2hhbW1vY2tzL3Byb2R1Y3Qvb2FzaXNoYW1tb2NrLmpwZ1wiLFxuICAgICAgICBwcmljZTogMzQuOTlcbiAgICB9LCB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBuYW1lOiAnVGhlIFdvb2RsYW5kJyxcbiAgICAgICAgaW1hZ2U6IFwiLi9pbWcvaGFtbW9ja3MvcHJvZHVjdC93b29kbGFuZGhhbW1vY2suanBnXCIsXG4gICAgICAgIHByaWNlOiAzNC45OVxuICAgIH0se1xuICAgICAgICBpZDogNCxcbiAgICAgICAgbmFtZTogJ1RoZSBTdW1taXQnLFxuICAgICAgICBpbWFnZTogXCIuL2ltZy9oYW1tb2Nrcy9wcm9kdWN0L3N1bW1pdGhhbW1vY2suanBnXCIsXG4gICAgICAgIHByaWNlOiAzNC45OVxuICAgIH1dXG5cbiAgdGhpcy5oYW1tb2NrcyA9IFt7XG4gICAgaWQ6IDUsXG4gICAgbmFtZTogJ1RoZSBCcmVlemUnLFxuICAgIGNvbG9yOiAnbGltZSBncmVlbi8gbGlnaHQgYmx1ZS8gd2hpdGUnLFxuICAgIGltYWdlOiBcIi4vaW1nL2hhbW1vY2tzL3Byb2R1Y3Qvb2FzaXNoYW1tb2NrLmpwZ1wiLFxuICAgIGltYWdlMTogXCIuL2ltZy9oYW1tb2Nrcy9wcm9kdWN0L29hc2lzaGFtbW9ja2FuZGJhZy5qcGdcIixcbiAgICBpbWFnZTI6IFwiLi9pbWcvaGFtbW9ja3MvcHJvZHVjdC9vYXNpc2JhZy5qcGdcIixcbiAgICBpbWFnZTM6IFwiLi9pbWcvaGFtbW9ja3MvcHJvZHVjdC90cmVlcm9wZWFuZHNsZWV2ZS5qcGdcIixcbiAgICBpbWFnZTQ6IFwiLi9pbWcvZ2FsbGVyeS90cmVlU2V0VXBTcS5qcGdcIixcbiAgICBpbWFnZTU6IFwiLi9pbWcvZ2FsbGVyeS9icmVlemUvQUZCcmVlemVTcS5qcGdcIixcbiAgICBpbWFnZTY6IFwiLi9pbWcvZ2FsbGVyeS9icmVlemUvYnJlZXplQUZDRmFtaWx5LkpQR1wiLFxuICAgIGltYWdlNzogXCIuL2ltZy9nYWxsZXJ5L2JyZWV6ZS9icmVlemVKdWx5MTcuSlBHXCIsXG4gICAgc3RhdHVzOiAnTGl2ZSBKdW5lIDFzdCBvbiBBbWF6b24nLFxuICAgIGRlc2M6ICdUaGUgYmVzdCBoYW1tb2NrIG91dCB0aGVyZSEgR3JlYXQgZm9yIDEsIHBlcmZlY3QgZm9yIDIuIEVhc2lseSB0cmFuc3BvcnRhYmxlIGFuZCBzdHVmZnMgcmlnaHQgaW50byB0aGUgYXR0YWNoZWQgc2Fjay4gU2V0IHVwIGluIHNlY29uZHMgYmVjYXVzZSBvdXIgcm9wZXMgYWxsIGNvbWUgd2l0aCBwcmV0aWVkIGtub3RzIScsXG4gICAgcHJpY2U6IDM0Ljk5LFxuICAgIGxpbms6ICdodHRwczovL3d3dy5hbWF6b24uY29tL2RwL0IwNlkxWTJYRzM/dGg9MSdcbiAgfSwge1xuICAgIGlkOiA0LFxuICAgIG5hbWU6ICdUaGUgU3VtbWl0JyxcbiAgICBjb2xvcjogJ2NoYXJjb2FsL3JlZCcsXG4gICAgaW1hZ2U6IFwiLi9pbWcvaGFtbW9ja3MvcHJvZHVjdC9zdW1taXRoYW1tb2NrLmpwZ1wiLFxuICAgIGltYWdlMTogXCIuL2ltZy9oYW1tb2Nrcy9wcm9kdWN0L3N1bW1pdGhhbW1vY2thbmRiYWcuanBnXCIsXG4gICAgaW1hZ2UyOiBcIi4vaW1nL2hhbW1vY2tzL3Byb2R1Y3QvQmFnLmpwZ1wiLFxuICAgIGltYWdlMzogXCIuL2ltZy9oYW1tb2Nrcy9wcm9kdWN0L3RyZWVyb3BlYW5kc2xlZXZlLmpwZ1wiLFxuICAgIGltYWdlNDogXCIuL2ltZy9nYWxsZXJ5L3RyZWVTZXRVcFNxLmpwZ1wiLFxuICAgIGltYWdlNTogXCIuL2ltZy9nYWxsZXJ5L3N1bW1pdC9zdW1taXRBRkNhbnlvbjIuanBnXCIsXG4gICAgaW1hZ2U2OiBcIi4vaW1nL2dhbGxlcnkvc3VtbWl0L3N1bW1pdEFGQ2FueW9uLmpwZ1wiLFxuICAgIGltYWdlNzogXCIuL2ltZy9nYWxsZXJ5L3N1bW1pdC9zZWRvbmFfc3VtbWl0LkpQR1wiLFxuICAgIHN0YXR1czogJ0xpdmUgSnVuZSAxc3Qgb24gQW1hem9uJyxcbiAgICBkZXNjOiAnVGhlIGJlc3QgaGFtbW9jayBvdXQgdGhlcmUhIEdyZWF0IGZvciAxLCBwZXJmZWN0IGZvciAyLiBFYXNpbHkgdHJhbnNwb3J0YWJsZSBhbmQgc3R1ZmZzIHJpZ2h0IGludG8gdGhlIGF0dGFjaGVkIHNhY2suIFNldCB1cCBpbiBzZWNvbmRzIGJlY2F1c2Ugb3VyIHJvcGVzIGFsbCBjb21lIHdpdGggcHJldGllZCBrbm90cyEnLFxuICAgIHByaWNlOiAzNC45OSxcbiAgICBsaW5rOiAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9kcC9CMDZZMVQzMUJRP3RoPTEnXG4gIH0se1xuICAgIGlkOiAzLFxuICAgIG5hbWU6ICdUaGUgV29vZGxhbmQnLFxuICAgIGNvbG9yOiAnZ3JlZW4vZ3JheScsXG4gICAgaW1hZ2U6IFwiLi9pbWcvaGFtbW9ja3MvcHJvZHVjdC93b29kbGFuZGhhbW1vY2suanBnXCIsXG4gICAgaW1hZ2UxOiBcIi4vaW1nL2hhbW1vY2tzL3Byb2R1Y3Qvd29vZGxhbmRoYW1tb2NrYW5kYmFnLmpwZ1wiLFxuICAgIGltYWdlMjogXCIuL2ltZy9oYW1tb2Nrcy9wcm9kdWN0L3dvb2RsYW5kYmFnLmpwZ1wiLFxuICAgIGltYWdlMzogXCIuL2ltZy9oYW1tb2Nrcy9wcm9kdWN0L3RyZWVyb3BlYW5kc2xlZXZlLmpwZ1wiLFxuICAgIGltYWdlNDogXCIuL2ltZy9nYWxsZXJ5L3RyZWVTZXRVcFNxLmpwZ1wiLFxuICAgIGltYWdlNTogXCIuL2ltZy9nYWxsZXJ5L3dvb2RsYW5kL1dvb2RsYW5kU3FUaHVtYm5haWwuanBnXCIsXG4gICAgaW1hZ2U2OiBcIi4vaW1nL2dhbGxlcnkvd29vZGxhbmQvc2Vkb25hX3dvb2RsYW5kLkpQR1wiLFxuICAgIGltYWdlNzogXCIuL2ltZy9nYWxsZXJ5L3N1bW1pdC9zZWRvbmFfc3VtbWl0LkpQR1wiLFxuICAgIHN0YXR1czogJ0xpdmUgSnVuZSAxc3Qgb24gQW1hem9uJyxcbiAgICBkZXNjOiAnVGhlIGJlc3QgaGFtbW9jayBvdXQgdGhlcmUhIEdyZWF0IGZvciAxLCBwZXJmZWN0IGZvciAyLiBFYXNpbHkgdHJhbnNwb3J0YWJsZSBhbmQgc3R1ZmZzIHJpZ2h0IGludG8gdGhlIGF0dGFjaGVkIHNhY2suIFNldCB1cCBpbiBzZWNvbmRzIGJlY2F1c2Ugb3VyIHJvcGVzIGFsbCBjb21lIHdpdGggcHJldGllZCBrbm90cyEnLFxuICAgIHByaWNlOiAzNC45OSxcbiAgICBsaW5rOiAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9kcC9CMDZZMURSTk0zP3RoPTEnXG4gIH0se1xuICAgIGlkOiAxLFxuICAgIG5hbWU6ICdUaGUgU3VucmlzZScsXG4gICAgY29sb3I6ICdvcmFuZ2UvZ3JheScsXG4gICAgaW1hZ2U6IFwiLi9pbWcvaGFtbW9ja3MvcHJvZHVjdC9zdW5yaXNlaGFtbW9jay5qcGdcIixcbiAgICBpbWFnZTE6IFwiLi9pbWcvaGFtbW9ja3MvcHJvZHVjdC9zdW5yaXNlaGFtbW9ja2FuZGJhZy5qcGdcIixcbiAgICBpbWFnZTI6IFwiLi9pbWcvaGFtbW9ja3MvcHJvZHVjdC9zdW5yaXNlYmFnLmpwZ1wiLFxuICAgIGltYWdlMzogXCIuL2ltZy9oYW1tb2Nrcy9wcm9kdWN0L3RyZWVyb3BlYW5kc2xlZXZlLmpwZ1wiLFxuICAgIGltYWdlNDogXCIuL2ltZy9nYWxsZXJ5L3RyZWVTZXRVcFNxLmpwZ1wiLFxuICAgIGltYWdlNTogXCIuL2ltZy9nYWxsZXJ5L3N1bnJpc2UvQUZDb3VwbGVTdW5yaXNlU3EuanBnXCIsXG4gICAgaW1hZ2U2OiBcIi4vaW1nL2dhbGxlcnkvc3VucmlzZS9zdW5yaXNlRGlydEJpa2UuanBnXCIsXG4gICAgaW1hZ2U3OiBcIi4vaW1nL2dhbGxlcnkvc3VucmlzZS9zdW5yaXNlQUZDSnVseTE3LkpQR1wiLFxuICAgIHN0YXR1czogJ0xpdmUgSnVuZSAxc3Qgb24gQW1hem9uJyxcbiAgICBkZXNjOiAnVGhlIGJlc3QgaGFtbW9jayBvdXQgdGhlcmUhIEdyZWF0IGZvciAxLCBwZXJmZWN0IGZvciAyLiBFYXNpbHkgdHJhbnNwb3J0YWJsZSBhbmQgc3R1ZmZzIHJpZ2h0IGludG8gdGhlIGF0dGFjaGVkIHNhY2suIFNldCB1cCBpbiBzZWNvbmRzIGJlY2F1c2Ugb3VyIHJvcGVzIGFsbCBjb21lIHdpdGggcHJldGllZCBrbm90cyEnLFxuICAgIHByaWNlOiAzNC45OSxcbiAgICBsaW5rOiAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9kcC9CMDZZMU4yNjkxP3RoPTEnXG4gIH0se1xuICAgIGlkOiAyLFxuICAgIG5hbWU6ICdUaGUgV2F2ZScsXG4gICAgY29sb3I6ICdibHVlL2xpZ2h0IGJsdWUnLFxuICAgIGltYWdlOiBcIi4vaW1nL2hhbW1vY2tzL3Byb2R1Y3Qvd2F2ZWhhbW1vY2suanBnXCIsXG4gICAgaW1hZ2UxOiBcIi4vaW1nL2hhbW1vY2tzL3Byb2R1Y3Qvd2F2ZWhhbW1vY2thbmRiYWcuanBnXCIsXG4gICAgaW1hZ2UyOiBcIi4vaW1nL2hhbW1vY2tzL3Byb2R1Y3Qvd2F2ZWJhZy5qcGdcIixcbiAgICBpbWFnZTM6IFwiLi9pbWcvaGFtbW9ja3MvcHJvZHVjdC90cmVlcm9wZWFuZHNsZWV2ZS5qcGdcIixcbiAgICBpbWFnZTQ6IFwiLi9pbWcvZ2FsbGVyeS90cmVlU2V0VXBTcS5qcGdcIixcbiAgICBpbWFnZTU6IFwiLi9pbWcvZ2FsbGVyeS93YXZlL3dhdmVBRkNhbnlvbjIuanBnXCIsXG4gICAgaW1hZ2U2OiBcIi4vaW1nL2dhbGxlcnkvd2F2ZS93YXZlY291cGxlQUYxNy5KUEdcIixcbiAgICBpbWFnZTc6IFwiLi9pbWcvZ2FsbGVyeS93YXZlL3dhdmVzZWRvbmEuSlBHXCIsXG4gICAgc3RhdHVzOiAnTGl2ZSBKdW5lIDFzdCBvbiBBbWF6b24nLFxuICAgIGRlc2M6ICdUaGUgYmVzdCBoYW1tb2NrIG91dCB0aGVyZSEgR3JlYXQgZm9yIDEsIHBlcmZlY3QgZm9yIDIuIEVhc2lseSB0cmFuc3BvcnRhYmxlIGFuZCBzdHVmZnMgcmlnaHQgaW50byB0aGUgYXR0YWNoZWQgc2Fjay4gU2V0IHVwIGluIHNlY29uZHMgYmVjYXVzZSBvdXIgcm9wZXMgYWxsIGNvbWUgd2l0aCBwcmV0aWVkIGtub3RzIScsXG4gICAgcHJpY2U6IDM0Ljk5LFxuICAgIGxpbms6ICdodHRwczovL3d3dy5hbWF6b24uY29tL2RwL0IwNlkxRFJLUDU/dGg9MSdcbiAgfV1cblxuICAgIHRoaXMuZ2V0QmVzdFNlbGxlcnMgPSAoKSA9PiB7XG4gICAgICBsZXQgYmVzdFNlbGxlcnMgPSB0aGlzLmJlc3RTZWxsZXJzO1xuICAgICAgcmV0dXJuIGJlc3RTZWxsZXJzO1xuICAgIH1cblxuICAgIHRoaXMuZ2V0SGFtbW9ja3MgPSAoKSA9PiB7XG4gICAgICBsZXQgaGFtbW9ja3MgPSB0aGlzLmhhbW1vY2tzO1xuICAgICAgcmV0dXJuIGhhbW1vY2tzO1xuICAgIH1cblxuICAgIHRoaXMuZ2V0SGFtbW9ja0RldGFpbHMgPSAoc3RhdGVQYXJhbXMpID0+IHtcbiAgICAgIGxldCBoYW1tb2NrRGV0YWlscyA9IHRoaXMuaGFtbW9ja3M7XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgaGFtbW9ja0RldGFpbHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhoYW1tb2NrRGV0YWlscywgc3RhdGVQYXJhbXMpO1xuICAgICAgICBpZihoYW1tb2NrRGV0YWlsc1tpXS5pZCA9PT0gcGFyc2VJbnQoc3RhdGVQYXJhbXMuaWQpKXtcbiAgICAgICAgICByZXR1cm4gaGFtbW9ja0RldGFpbHNbaV1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuXG5cblxufSkvL2VuZCBvZiBzZXJ2aWNlXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpLmRpcmVjdGl2ZSgnY3VzdG9tRm9vdGVyJywgKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9mb290ZXIuaHRtbCdcbiAgfTtcbn0pIC8vZW5kIG9mIG5hdmJhciBkaXJlY3RpdmVcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJykuZGlyZWN0aXZlKCduYXZiYXInLCAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL25hdmJhci5odG1sJ1xuICB9O1xufSkgLy9lbmQgb2YgbmF2YmFyIGRpcmVjdGl2ZVxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKVxuLmRpcmVjdGl2ZSgnc2xpZGVhYmxlJywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OidDJyxcbiAgICAgICAgY29tcGlsZTogZnVuY3Rpb24gKGVsZW1lbnQsIGF0dHIpIHtcbiAgICAgICAgICAgIC8vIHdyYXAgdGFnXG4gICAgICAgICAgICB2YXIgY29udGVudHMgPSBlbGVtZW50Lmh0bWwoKTtcbiAgICAgICAgICAgIGVsZW1lbnQuaHRtbCgnPGRpdiBjbGFzcz1cInNsaWRlYWJsZV9jb250ZW50XCIgc3R5bGU9XCJtYXJnaW46MCAhaW1wb3J0YW50OyBwYWRkaW5nOjAgIWltcG9ydGFudFwiID4nICsgY29udGVudHMgKyAnPC9kaXY+Jyk7XG5cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiBwb3N0TGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICAgICAgICAgICAvLyBkZWZhdWx0IHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICBhdHRycy5kdXJhdGlvbiA9ICghYXR0cnMuZHVyYXRpb24pID8gJzFzJyA6IGF0dHJzLmR1cmF0aW9uO1xuICAgICAgICAgICAgICAgIGF0dHJzLmVhc2luZyA9ICghYXR0cnMuZWFzaW5nKSA/ICdlYXNlLWluLW91dCcgOiBhdHRycy5lYXNpbmc7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAnb3ZlcmZsb3cnOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgJ2hlaWdodCc6ICcwcHgnLFxuICAgICAgICAgICAgICAgICAgICAndHJhbnNpdGlvblByb3BlcnR5JzogJ2hlaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uRHVyYXRpb24nOiBhdHRycy5kdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25UaW1pbmdGdW5jdGlvbic6IGF0dHJzLmVhc2luZ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG59KVxuLmRpcmVjdGl2ZSgnc2xpZGVUb2dnbGUnLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGF0dHJzLnNsaWRlVG9nZ2xlKTtcbiAgICAgICAgICAgIGF0dHJzLmV4cGFuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICBlbGVtZW50LmJpbmQoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSB0YXJnZXQucXVlcnlTZWxlY3RvcignLnNsaWRlYWJsZV9jb250ZW50Jyk7XG4gICAgICAgICAgICAgICAgaWYoIWF0dHJzLmV4cGFuZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCByZ2JhKDAsMCwwLDApJztcbiAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSBjb250ZW50LmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5ib3JkZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0geSArICdweCc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9ICcwcHgnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhdHRycy5leHBhbmRlZCA9ICFhdHRycy5leHBhbmRlZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=
