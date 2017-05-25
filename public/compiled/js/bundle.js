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

    $('#product-carousel').carousel();

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
        image1: "./img/hammocks/product/sunrisehammockandbag.jpg",
        image2: "./img/hammocks/product/sunrisebag.jpg",
        image3: "./img/hammocks/product/treeropeandsleeve.jpg",
        image4: "./img/gallery/treeSetUpSq.jpg",
        image5: "./img/gallery/sunrise/AFCoupleSunriseSq.jpg",
        image6: "./img/gallery/sunrise/sunriseDirtBike.jpg",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes all come with pretied knots!',
        price: 34.99
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
        image6: "./img/gallery/wave/waveDirtBike.jpg",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes all come with pretied knots!',
        price: 34.99
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
        image6: "./img/gallery/woodland/woodlandUtahValley.jpg",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes all come with pretied knots!',
        price: 34.99
    }, {
        id: 4,
        name: 'The Summit',
        color: 'charcoal/red',
        image: "./img/hammocks/product/summithammock.jpg",
        image1: "./img/hammocks/product/summithammockandbag.jpg",
        image2: "./img/hammocks/product/summitbag.jpg",
        image3: "./img/hammocks/product/treeropeandsleeve.jpg",
        image4: "./img/gallery/treeSetUpSq.jpg",
        image5: "./img/gallery/summit/summitAFCanyon2.jpg",
        image6: "./img/gallery/summit/summitAFCanyon.jpg",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes all come with pretied knots!',
        price: 34.99
    }, {
        id: 5,
        name: 'The Breeze',
        color: 'lime green/ light blue/ white',
        image: "./img/hammocks/product/oasishammock.jpg",
        image1: "./img/hammocks/product/oasishammockandbag.jpg",
        image2: "./img/hammocks/product/oasisbag.jpg",
        image3: "./img/hammocks/product/treeropeandsleeve.jpg",
        image4: "./img/gallery/treeSetUpSq.jpg",
        image5: "./img/gallery/breeze/AFBreezeSq.jpg",
        image6: "./img/gallery/breeze/breezeAFCanyon.jpg",
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbnRyb2xsZXJzL2NvbnRhY3RDdHJsLmpzIiwiY29udHJvbGxlcnMvaGFtbW9ja0N0cmwuanMiLCJjb250cm9sbGVycy9oYW1tb2NrRGV0YWlsc0N0cmwuanMiLCJjb250cm9sbGVycy9ob21lQ3RybC5qcyIsImNvbnRyb2xsZXJzL291dHBvc3RDdHJsLmpzIiwiY29udHJvbGxlcnMvc3RvcnlDdHJsLmpzIiwiZGlyZWN0aXZlcy9mb290ZXIuanMiLCJkaXJlY3RpdmVzL25hdmJhci5qcyIsImRpcmVjdGl2ZXMvc2xpZGVhYmxlLmpzIiwic2VydmljZXMvaGFtbW9ja1NydmMuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImNvbmZpZyIsIiRzdGF0ZVByb3ZpZGVyIiwiJHVybFJvdXRlclByb3ZpZGVyIiwic3RhdGUiLCJ1cmwiLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXIiLCJvdGhlcndpc2UiLCIkc2NvcGUiLCJoYW1tb2NrU3J2YyIsIiRzdGF0ZVBhcmFtcyIsIiQiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwiaGFtbW9ja3MiLCJnZXRIYW1tb2NrcyIsImNvbnNvbGUiLCJsb2ciLCJoYW1tb2NrIiwiZ2V0SGFtbW9ja0RldGFpbHMiLCJjbGljayIsIm9mZnNldCIsInRvcCIsImNhcm91c2VsIiwiYmVzdFNlbGxlcnMiLCJnZXRCZXN0U2VsbGVycyIsImRpcmVjdGl2ZSIsInJlc3RyaWN0IiwiY29tcGlsZSIsImVsZW1lbnQiLCJhdHRyIiwiY29udGVudHMiLCJodG1sIiwicG9zdExpbmsiLCJzY29wZSIsImF0dHJzIiwiZHVyYXRpb24iLCJlYXNpbmciLCJjc3MiLCJsaW5rIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2xpZGVUb2dnbGUiLCJleHBhbmRlZCIsImJpbmQiLCJjb250ZW50Iiwic3R5bGUiLCJib3JkZXIiLCJ5IiwiY2xpZW50SGVpZ2h0IiwiaGVpZ2h0Iiwic2VydmljZSIsImlkIiwibmFtZSIsImNvbG9yIiwiaW1hZ2UiLCJpbWFnZTEiLCJpbWFnZTIiLCJzdGF0dXMiLCJkZXNjIiwicHJpY2UiLCJpbWFnZTMiLCJpbWFnZTQiLCJpbWFnZTUiLCJpbWFnZTYiLCJzdGF0ZVBhcmFtcyIsImhhbW1vY2tEZXRhaWxzIiwiaSIsImxlbmd0aCIsInBhcnNlSW50Il0sIm1hcHBpbmdzIjoiOztBQUFBQSxRQUFRQyxNQUFSLENBQWUsWUFBZixFQUE2QixDQUFDLFdBQUQsQ0FBN0IsRUFDR0MsTUFESCxDQUNVLFVBQVNDLGNBQVQsRUFBeUJDLGtCQUF6QixFQUE0Qzs7QUFFbERELG1CQUNHRSxLQURILENBQ1MsTUFEVCxFQUNnQjtBQUNWQyxhQUFJLEdBRE07QUFFVkMscUJBQWEsbUJBRkg7QUFHVkMsb0JBQVk7QUFIRixLQURoQixFQU1HSCxLQU5ILENBTVMsT0FOVCxFQU1pQjtBQUNYQyxhQUFJLFFBRE87QUFFWEMscUJBQWEsb0JBRkY7QUFHWEMsb0JBQVk7QUFIRCxLQU5qQixFQVdHSCxLQVhILENBV1MsVUFYVCxFQVdvQjtBQUNkQyxhQUFJLFdBRFU7QUFFZEMscUJBQWEsdUJBRkM7QUFHZEMsb0JBQVk7QUFIRSxLQVhwQixFQWdCR0gsS0FoQkgsQ0FnQlMsZ0JBaEJULEVBZ0IwQjtBQUNwQkMsYUFBSSxxQkFEZ0I7QUFFcEJDLHFCQUFhLDhCQUZPO0FBR3BCQyxvQkFBWTtBQUhRLEtBaEIxQixFQXFCR0gsS0FyQkgsQ0FxQlMsc0JBckJULEVBcUJnQztBQUMxQkMsYUFBSSxtQkFEc0I7QUFFMUJDLHFCQUFhO0FBRmEsS0FyQmhDLEVBeUJHRixLQXpCSCxDQXlCUyxzQkF6QlQsRUF5QmdDO0FBQzFCQyxhQUFJLGVBRHNCO0FBRTFCQyxxQkFBYTtBQUZhLEtBekJoQyxFQTZCR0YsS0E3QkgsQ0E2QlMsd0JBN0JULEVBNkJrQztBQUM1QkMsYUFBSSxpQkFEd0I7QUFFNUJDLHFCQUFhO0FBRmUsS0E3QmxDLEVBaUNHRixLQWpDSCxDQWlDUyxTQWpDVCxFQWlDbUI7QUFDYkMsYUFBSSxV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TSxZQUZSO0FBR0VDLGVBQU8sK0JBSFQ7QUFJRUMsZUFBTyx5Q0FKVDtBQUtFQyxnQkFBUSwrQ0FMVjtBQU1FQyxnQkFBUSxxQ0FOVjtBQU9FSSxnQkFBUSw4Q0FQVjtBQVFFQyxnQkFBUSwrQkFSVjtBQVNFQyxnQkFBUSxxQ0FUVjtBQVVFQyxnQkFBUSx5Q0FWVjtBQVdFTixnQkFBUSxpQkFYVjtBQVlFQyxjQUFNLHdMQVpSO0FBYUVDLGVBQU87QUFiVCxLQXhEWSxDQUFoQjs7QUF3RUUsU0FBS3BDLGNBQUwsR0FBc0IsWUFBTTtBQUMxQixZQUFJRCxjQUFjLE1BQUtBLFdBQXZCO0FBQ0EsZUFBT0EsV0FBUDtBQUNELEtBSEQ7O0FBS0EsU0FBS1QsV0FBTCxHQUFtQixZQUFNO0FBQ3ZCLFlBQUlELFdBQVcsTUFBS0EsUUFBcEI7QUFDQSxlQUFPQSxRQUFQO0FBQ0QsS0FIRDs7QUFLQSxTQUFLSyxpQkFBTCxHQUF5QixVQUFDK0MsV0FBRCxFQUFpQjtBQUN4QyxZQUFJQyxpQkFBaUIsTUFBS3JELFFBQTFCO0FBQ0EsYUFBSSxJQUFJc0QsSUFBSSxDQUFaLEVBQWVBLElBQUlELGVBQWVFLE1BQWxDLEVBQTBDRCxHQUExQyxFQUE4QztBQUM1Q3BELG9CQUFRQyxHQUFSLENBQVlrRCxjQUFaLEVBQTRCRCxXQUE1QjtBQUNBLGdCQUFHQyxlQUFlQyxDQUFmLEVBQWtCZixFQUFsQixLQUF5QmlCLFNBQVNKLFlBQVliLEVBQXJCLENBQTVCLEVBQXFEO0FBQ25ELHVCQUFPYyxlQUFlQyxDQUFmLENBQVA7QUFDRDtBQUNGO0FBQ0YsS0FSRDtBQWFILENBbElELEdBa0lFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJywgWyd1aS5yb3V0ZXInXSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKXtcblxuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ2hvbWUnLHtcbiAgICAgICAgICB1cmw6Jy8nLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiBcIi4vdmlld3MvaG9tZS5odG1sXCIsXG4gICAgICAgICAgY29udHJvbGxlcjogJ2hvbWVDdHJsJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnc3RvcnknLHtcbiAgICAgICAgICB1cmw6Jy9zdG9yeScsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL3N0b3J5Lmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdzdG9yeUN0cmwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdoYW1tb2Nrcycse1xuICAgICAgICAgIHVybDonL2hhbW1vY2tzJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvaGFtbW9ja3MuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ2hhbW1vY2tDdHJsJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnaGFtbW9ja0RldGFpbHMnLHtcbiAgICAgICAgICB1cmw6Jy9oYW1tb2NrRGV0YWlscy86aWQnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9oYW1tb2NrLWRldGFpbHMuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ2hhbW1vY2tEZXRhaWxzQ3RybCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2hhbW1vY2tEZXRhaWxzLnNwZWNzJyx7XG4gICAgICAgICAgdXJsOicvaGFtbW9ja1NwZWNzLzppZCcsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2hhbW1vY2tTcGVjcy5odG1sJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnaGFtbW9ja0RldGFpbHMuc2V0dXAnLHtcbiAgICAgICAgICB1cmw6Jy9oYW1tb2NrU2V0dXAnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9oYW1tb2NrU2V0dXAuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2hhbW1vY2tEZXRhaWxzLnJldHVybnMnLHtcbiAgICAgICAgICB1cmw6Jy9oYW1tb2NrUmV0dXJucycsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2hhbW1vY2tSZXR1cm5zLmh0bWwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdvdXRwb3N0Jyx7XG4gICAgICAgICAgdXJsOicvb3V0cG9zdCcsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL291dHBvc3QuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ291dHBvc3RDdHJsJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnb3V0cG9zdC5mYXEnLHtcbiAgICAgICAgICB1cmw6Jy9mYXEnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9mYXEuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ291dHBvc3QucmVmdW5kcycse1xuICAgICAgICAgIHVybDonL3JlZnVuZHMnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9yZWZ1bmRzLmh0bWwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdvdXRwb3N0LnZpZGVvcycse1xuICAgICAgICAgIHVybDonL3ZpZGVvcycsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL3ZpZGVvcy5odG1sJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnY29taW5nc29vbicse1xuICAgICAgICAgIHVybDonL2NvbWluZ3Nvb24nLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9jb21pbmdzb29uLmh0bWwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdjb250YWN0Jyx7XG4gICAgICAgICAgdXJsOicvY29udGFjdCcsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2NvbnRhY3QuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ2NvbnRhY3RDdHJsJ1xuICAgICAgfSk7XG5cbiAgICAkdXJsUm91dGVyUHJvdmlkZXJcbiAgICAgICAgLm90aGVyd2lzZSgnLycpO1xufSlcbi8vaWYgeW91IHdhbnQgZXZlcnkgdmlldyB0byBsb2FkIGF0IHRvcCB1c2UgdGhlIGNvZGUgYmVsb3cgLi4uIHRoaXMgcHJvamVjdCBoYXMgbmVzdGVkIHZpZXdzIHNvIEkgZG9uJ3QhXG5cbi8vIC5ydW4oZnVuY3Rpb24gKCRyb290U2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCAkYW5jaG9yU2Nyb2xsKSB7XG4vL1xuLy8gICAgICRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsIGZ1bmN0aW9uICgpIHtcbi8vICAgICAgICAgJGFuY2hvclNjcm9sbCgpO1xuLy8gICAgIH0pO1xuLy9cbi8vIH0pO1xuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5jb250cm9sbGVyKCdjb250YWN0Q3RybCcsICgkc2NvcGUsIGhhbW1vY2tTcnZjLCAkc3RhdGVQYXJhbXMpID0+IHtcblxuICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIDIwMCk7XG5cbn0pLy9lbmQgb2YgaG9tZSBjb250cm9sbGVyXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpLmNvbnRyb2xsZXIoJ2hhbW1vY2tDdHJsJywgKCRzY29wZSwgaGFtbW9ja1NydmMsICRzdGF0ZVBhcmFtcykgPT4ge1xuXG4gICRzY29wZS5oYW1tb2NrcyA9IGhhbW1vY2tTcnZjLmdldEhhbW1vY2tzKCk7XG4gIGNvbnNvbGUubG9nKCRzY29wZS5oYW1tb2Nrcyk7XG5cbiAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCAyMDApO1xuXG59KS8vZW5kIG9mIGhvbWUgY29udHJvbGxlclxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKVxuLmNvbnRyb2xsZXIoJ2hhbW1vY2tEZXRhaWxzQ3RybCcsICgkc2NvcGUsIGhhbW1vY2tTcnZjLCAkc3RhdGVQYXJhbXMpID0+IHtcblxuICAkc2NvcGUuaGFtbW9jayA9IGhhbW1vY2tTcnZjLmdldEhhbW1vY2tEZXRhaWxzKCRzdGF0ZVBhcmFtcyk7XG4gIGNvbnNvbGUubG9nKCRzY29wZS5oYW1tb2NrKTtcblxuICAkKFwiI3Njcm9sbC1zcGVjc1wiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICBzY3JvbGxUb3A6ICQoXCIjc3BlY3NcIikub2Zmc2V0KCkudG9wXG4gICAgICB9LCAxMDAwKTtcbiAgfSk7XG4gICQoXCIjc2Nyb2xsLXNldHVwXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgIHNjcm9sbFRvcDogJChcIiNzcGVjc1wiKS5vZmZzZXQoKS50b3BcbiAgICAgIH0sIDEwMDApO1xuICB9KTtcbiAgJChcIiNzY3JvbGwtcmV0dXJuc1wiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICBzY3JvbGxUb3A6ICQoXCIjc3BlY3NcIikub2Zmc2V0KCkudG9wXG4gICAgICB9LCAxMDAwKTtcbiAgfSk7XG5cbiAgJCgnI3Byb2R1Y3QtY2Fyb3VzZWwnKS5jYXJvdXNlbCgpO1xuXG5cbiAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCAyMDApO1xuXG59KVxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKVxuLmNvbnRyb2xsZXIoJ2hvbWVDdHJsJywgKCRzY29wZSwgaGFtbW9ja1NydmMsICRzdGF0ZVBhcmFtcykgPT4ge1xuXG4gICRzY29wZS5iZXN0U2VsbGVycyA9IGhhbW1vY2tTcnZjLmdldEJlc3RTZWxsZXJzKCk7XG4gIGNvbnNvbGUubG9nKCRzY29wZS5iZXN0U2VsbGVycyk7XG5cbiAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCAyMDApO1xuXG59KS8vZW5kIG9mIGhvbWUgY29udHJvbGxlclxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5jb250cm9sbGVyKCdvdXRwb3N0Q3RybCcsICgkc2NvcGUsICRzdGF0ZVBhcmFtcykgPT4ge1xuXG4gICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgMjAwKTtcblxufSkvL2VuZCBvZiBjb250cm9sbGVyXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpLmNvbnRyb2xsZXIoJ3N0b3J5Q3RybCcsICgkc2NvcGUsIGhhbW1vY2tTcnZjLCAkc3RhdGVQYXJhbXMpID0+IHtcblxuICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIDIwMCk7XG5cbn0pLy9lbmQgb2YgaG9tZSBjb250cm9sbGVyXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpLmRpcmVjdGl2ZSgnY3VzdG9tRm9vdGVyJywgKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9mb290ZXIuaHRtbCdcbiAgfTtcbn0pIC8vZW5kIG9mIG5hdmJhciBkaXJlY3RpdmVcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJykuZGlyZWN0aXZlKCduYXZiYXInLCAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL25hdmJhci5odG1sJ1xuICB9O1xufSkgLy9lbmQgb2YgbmF2YmFyIGRpcmVjdGl2ZVxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKVxuLmRpcmVjdGl2ZSgnc2xpZGVhYmxlJywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OidDJyxcbiAgICAgICAgY29tcGlsZTogZnVuY3Rpb24gKGVsZW1lbnQsIGF0dHIpIHtcbiAgICAgICAgICAgIC8vIHdyYXAgdGFnXG4gICAgICAgICAgICB2YXIgY29udGVudHMgPSBlbGVtZW50Lmh0bWwoKTtcbiAgICAgICAgICAgIGVsZW1lbnQuaHRtbCgnPGRpdiBjbGFzcz1cInNsaWRlYWJsZV9jb250ZW50XCIgc3R5bGU9XCJtYXJnaW46MCAhaW1wb3J0YW50OyBwYWRkaW5nOjAgIWltcG9ydGFudFwiID4nICsgY29udGVudHMgKyAnPC9kaXY+Jyk7XG5cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiBwb3N0TGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICAgICAgICAgICAvLyBkZWZhdWx0IHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICBhdHRycy5kdXJhdGlvbiA9ICghYXR0cnMuZHVyYXRpb24pID8gJzFzJyA6IGF0dHJzLmR1cmF0aW9uO1xuICAgICAgICAgICAgICAgIGF0dHJzLmVhc2luZyA9ICghYXR0cnMuZWFzaW5nKSA/ICdlYXNlLWluLW91dCcgOiBhdHRycy5lYXNpbmc7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAnb3ZlcmZsb3cnOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgJ2hlaWdodCc6ICcwcHgnLFxuICAgICAgICAgICAgICAgICAgICAndHJhbnNpdGlvblByb3BlcnR5JzogJ2hlaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uRHVyYXRpb24nOiBhdHRycy5kdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25UaW1pbmdGdW5jdGlvbic6IGF0dHJzLmVhc2luZ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG59KVxuLmRpcmVjdGl2ZSgnc2xpZGVUb2dnbGUnLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGF0dHJzLnNsaWRlVG9nZ2xlKTtcbiAgICAgICAgICAgIGF0dHJzLmV4cGFuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICBlbGVtZW50LmJpbmQoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSB0YXJnZXQucXVlcnlTZWxlY3RvcignLnNsaWRlYWJsZV9jb250ZW50Jyk7XG4gICAgICAgICAgICAgICAgaWYoIWF0dHJzLmV4cGFuZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCByZ2JhKDAsMCwwLDApJztcbiAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSBjb250ZW50LmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5ib3JkZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0geSArICdweCc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9ICcwcHgnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhdHRycy5leHBhbmRlZCA9ICFhdHRycy5leHBhbmRlZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpLnNlcnZpY2UoJ2hhbW1vY2tTcnZjJywgZnVuY3Rpb24oKXtcblxuXG4gIHRoaXMuYmVzdFNlbGxlcnMgPSBbe1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogJ1RoZSBTdW5yaXNlJyxcbiAgICAgICAgY29sb3I6ICdPcmFuZ2UvR3JleScsXG4gICAgICAgIGltYWdlOiBcIi4vaW1nL2hhbW1vY2tzL3Byb2R1Y3Qvc3VucmlzZWhhbW1vY2suanBnXCIsXG4gICAgICAgIGltYWdlMTogXCIuL2ltZy9oYW1tb2Nrcy9wcm9kdWN0L3N1bnJpc2VoYW1tb2NrYW5kYmFnLmpwZ1wiLFxuICAgICAgICBpbWFnZTI6IFwiXCIsXG4gICAgICAgIHN0YXR1czogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGRlc2M6ICdUaGUgYmVzdCBoYW1tb2NrIG91dCB0aGVyZSEgR3JlYXQgZm9yIDEsIHBlcmZlY3QgZm9yIDIuIEVhc2lseSB0cmFuc3BvcnRhYmxlIGFuZCBzdHVmZnMgcmlnaHQgaW50byB0aGUgYXR0YWNoZWQgc2Fjay4gU2V0IHVwIGluIHNlY29uZHMgYmVjYXVzZSBvdXIgcm9wZXMgYWxsIGNvbWUgd2l0aCBwcmV0aWVkIGtub3RzIScsXG4gICAgICAgIHByaWNlOiAzNC45OVxuICAgIH0sIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIG5hbWU6ICdUaGUgV2F2ZScsXG4gICAgICAgIGNvbG9yOiAnTGlnaHQgQmx1ZS9CbHVlJyxcbiAgICAgICAgaW1hZ2U6IFwiLi9pbWcvaGFtbW9ja3MvcHJvZHVjdC93YXZlaGFtbW9jay5qcGdcIixcbiAgICAgICAgaW1hZ2UxOiBcIi4vaW1nL2hhbW1vY2tzL3Byb2R1Y3Qvd2F2ZWhhbW1vY2thbmRiYWcuanBnXCIsXG4gICAgICAgIGltYWdlMjogXCJcIixcbiAgICAgICAgc3RhdHVzOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgZGVzYzogJ1RoZSBiZXN0IGhhbW1vY2sgb3V0IHRoZXJlISBHcmVhdCBmb3IgMSwgcGVyZmVjdCBmb3IgMi4gRWFzaWx5IHRyYW5zcG9ydGFibGUgYW5kIHN0dWZmcyByaWdodCBpbnRvIHRoZSBhdHRhY2hlZCBzYWNrLiBTZXQgdXAgaW4gc2Vjb25kcyBiZWNhdXNlIG91ciByb3BlcyBhbGwgY29tZSB3aXRoIHByZXRpZWQga25vdHMhJyxcbiAgICAgICAgcHJpY2U6IDM0Ljk5XG4gICAgfSx7XG4gICAgICAgIGlkOiA1LFxuICAgICAgICBuYW1lOiAnVGhlIEJyZWV6ZScsXG4gICAgICAgIGNvbG9yOiAnTGltZSBHcmVlbi8gTGlnaHQgQmx1ZS8gV2hpdGUnLFxuICAgICAgICBpbWFnZTogXCIuL2ltZy9oYW1tb2Nrcy9wcm9kdWN0L29hc2lzaGFtbW9jay5qcGdcIixcbiAgICAgICAgaW1hZ2UxOiBcIi4vaW1nL2hhbW1vY2tzL3Byb2R1Y3Qvb2FzaXNoYW1tb2NrYW5kYmFnLmpwZ1wiLFxuICAgICAgICBpbWFnZTI6IFwiXCIsXG4gICAgICAgIHN0YXR1czogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGRlc2M6ICdUaGUgYmVzdCBoYW1tb2NrIG91dCB0aGVyZSEgR3JlYXQgZm9yIDEsIHBlcmZlY3QgZm9yIDIuIEVhc2lseSB0cmFuc3BvcnRhYmxlIGFuZCBzdHVmZnMgcmlnaHQgaW50byB0aGUgYXR0YWNoZWQgc2Fjay4gU2V0IHVwIGluIHNlY29uZHMgYmVjYXVzZSBvdXIgcm9wZXMgYWxsIGNvbWUgd2l0aCBwcmV0aWVkIGtub3RzIScsXG4gICAgICAgIHByaWNlOiAzNC45OVxuICAgIH1dXG5cbiAgdGhpcy5oYW1tb2NrcyA9IFt7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiAnVGhlIFN1bnJpc2UnLFxuICAgICAgICBjb2xvcjogJ29yYW5nZS9ncmF5JyxcbiAgICAgICAgaW1hZ2U6IFwiLi9pbWcvaGFtbW9ja3MvcHJvZHVjdC9zdW5yaXNlaGFtbW9jay5qcGdcIixcbiAgICAgICAgaW1hZ2UxOiBcIi4vaW1nL2hhbW1vY2tzL3Byb2R1Y3Qvc3VucmlzZWhhbW1vY2thbmRiYWcuanBnXCIsXG4gICAgICAgIGltYWdlMjogXCIuL2ltZy9oYW1tb2Nrcy9wcm9kdWN0L3N1bnJpc2ViYWcuanBnXCIsXG4gICAgICAgIGltYWdlMzogXCIuL2ltZy9oYW1tb2Nrcy9wcm9kdWN0L3RyZWVyb3BlYW5kc2xlZXZlLmpwZ1wiLFxuICAgICAgICBpbWFnZTQ6IFwiLi9pbWcvZ2FsbGVyeS90cmVlU2V0VXBTcS5qcGdcIixcbiAgICAgICAgaW1hZ2U1OiBcIi4vaW1nL2dhbGxlcnkvc3VucmlzZS9BRkNvdXBsZVN1bnJpc2VTcS5qcGdcIixcbiAgICAgICAgaW1hZ2U2OiBcIi4vaW1nL2dhbGxlcnkvc3VucmlzZS9zdW5yaXNlRGlydEJpa2UuanBnXCIsXG4gICAgICAgIHN0YXR1czogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGRlc2M6ICdUaGUgYmVzdCBoYW1tb2NrIG91dCB0aGVyZSEgR3JlYXQgZm9yIDEsIHBlcmZlY3QgZm9yIDIuIEVhc2lseSB0cmFuc3BvcnRhYmxlIGFuZCBzdHVmZnMgcmlnaHQgaW50byB0aGUgYXR0YWNoZWQgc2Fjay4gU2V0IHVwIGluIHNlY29uZHMgYmVjYXVzZSBvdXIgcm9wZXMgYWxsIGNvbWUgd2l0aCBwcmV0aWVkIGtub3RzIScsXG4gICAgICAgIHByaWNlOiAzNC45OVxuICAgIH0sIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIG5hbWU6ICdUaGUgV2F2ZScsXG4gICAgICAgIGNvbG9yOiAnYmx1ZS9saWdodCBibHVlJyxcbiAgICAgICAgaW1hZ2U6IFwiLi9pbWcvaGFtbW9ja3MvcHJvZHVjdC93YXZlaGFtbW9jay5qcGdcIixcbiAgICAgICAgaW1hZ2UxOiBcIi4vaW1nL2hhbW1vY2tzL3Byb2R1Y3Qvd2F2ZWhhbW1vY2thbmRiYWcuanBnXCIsXG4gICAgICAgIGltYWdlMjogXCIuL2ltZy9oYW1tb2Nrcy9wcm9kdWN0L3dhdmViYWcuanBnXCIsXG4gICAgICAgIGltYWdlMzogXCIuL2ltZy9oYW1tb2Nrcy9wcm9kdWN0L3RyZWVyb3BlYW5kc2xlZXZlLmpwZ1wiLFxuICAgICAgICBpbWFnZTQ6IFwiLi9pbWcvZ2FsbGVyeS90cmVlU2V0VXBTcS5qcGdcIixcbiAgICAgICAgaW1hZ2U1OiBcIi4vaW1nL2dhbGxlcnkvd2F2ZS93YXZlQUZDYW55b24yLmpwZ1wiLFxuICAgICAgICBpbWFnZTY6IFwiLi9pbWcvZ2FsbGVyeS93YXZlL3dhdmVEaXJ0QmlrZS5qcGdcIixcbiAgICAgICAgc3RhdHVzOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgZGVzYzogJ1RoZSBiZXN0IGhhbW1vY2sgb3V0IHRoZXJlISBHcmVhdCBmb3IgMSwgcGVyZmVjdCBmb3IgMi4gRWFzaWx5IHRyYW5zcG9ydGFibGUgYW5kIHN0dWZmcyByaWdodCBpbnRvIHRoZSBhdHRhY2hlZCBzYWNrLiBTZXQgdXAgaW4gc2Vjb25kcyBiZWNhdXNlIG91ciByb3BlcyBhbGwgY29tZSB3aXRoIHByZXRpZWQga25vdHMhJyxcbiAgICAgICAgcHJpY2U6IDM0Ljk5XG4gICAgfSx7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBuYW1lOiAnVGhlIFdvb2RsYW5kJyxcbiAgICAgICAgY29sb3I6ICdncmVlbi9ncmF5JyxcbiAgICAgICAgaW1hZ2U6IFwiLi9pbWcvaGFtbW9ja3MvcHJvZHVjdC93b29kbGFuZGhhbW1vY2suanBnXCIsXG4gICAgICAgIGltYWdlMTogXCIuL2ltZy9oYW1tb2Nrcy9wcm9kdWN0L3dvb2RsYW5kaGFtbW9ja2FuZGJhZy5qcGdcIixcbiAgICAgICAgaW1hZ2UyOiBcIi4vaW1nL2hhbW1vY2tzL3Byb2R1Y3Qvd29vZGxhbmRiYWcuanBnXCIsXG4gICAgICAgIGltYWdlMzogXCIuL2ltZy9oYW1tb2Nrcy9wcm9kdWN0L3RyZWVyb3BlYW5kc2xlZXZlLmpwZ1wiLFxuICAgICAgICBpbWFnZTQ6IFwiLi9pbWcvZ2FsbGVyeS90cmVlU2V0VXBTcS5qcGdcIixcbiAgICAgICAgaW1hZ2U1OiBcIi4vaW1nL2dhbGxlcnkvd29vZGxhbmQvV29vZGxhbmRTcVRodW1ibmFpbC5qcGdcIixcbiAgICAgICAgaW1hZ2U2OiBcIi4vaW1nL2dhbGxlcnkvd29vZGxhbmQvd29vZGxhbmRVdGFoVmFsbGV5LmpwZ1wiLFxuICAgICAgICBzdGF0dXM6ICdDb21pbmcgTWF5IDIwMTcnLFxuICAgICAgICBkZXNjOiAnVGhlIGJlc3QgaGFtbW9jayBvdXQgdGhlcmUhIEdyZWF0IGZvciAxLCBwZXJmZWN0IGZvciAyLiBFYXNpbHkgdHJhbnNwb3J0YWJsZSBhbmQgc3R1ZmZzIHJpZ2h0IGludG8gdGhlIGF0dGFjaGVkIHNhY2suIFNldCB1cCBpbiBzZWNvbmRzIGJlY2F1c2Ugb3VyIHJvcGVzIGFsbCBjb21lIHdpdGggcHJldGllZCBrbm90cyEnLFxuICAgICAgICBwcmljZTogMzQuOTlcbiAgICB9LHtcbiAgICAgICAgaWQ6IDQsXG4gICAgICAgIG5hbWU6ICdUaGUgU3VtbWl0JyxcbiAgICAgICAgY29sb3I6ICdjaGFyY29hbC9yZWQnLFxuICAgICAgICBpbWFnZTogXCIuL2ltZy9oYW1tb2Nrcy9wcm9kdWN0L3N1bW1pdGhhbW1vY2suanBnXCIsXG4gICAgICAgIGltYWdlMTogXCIuL2ltZy9oYW1tb2Nrcy9wcm9kdWN0L3N1bW1pdGhhbW1vY2thbmRiYWcuanBnXCIsXG4gICAgICAgIGltYWdlMjogXCIuL2ltZy9oYW1tb2Nrcy9wcm9kdWN0L3N1bW1pdGJhZy5qcGdcIixcbiAgICAgICAgaW1hZ2UzOiBcIi4vaW1nL2hhbW1vY2tzL3Byb2R1Y3QvdHJlZXJvcGVhbmRzbGVldmUuanBnXCIsXG4gICAgICAgIGltYWdlNDogXCIuL2ltZy9nYWxsZXJ5L3RyZWVTZXRVcFNxLmpwZ1wiLFxuICAgICAgICBpbWFnZTU6IFwiLi9pbWcvZ2FsbGVyeS9zdW1taXQvc3VtbWl0QUZDYW55b24yLmpwZ1wiLFxuICAgICAgICBpbWFnZTY6IFwiLi9pbWcvZ2FsbGVyeS9zdW1taXQvc3VtbWl0QUZDYW55b24uanBnXCIsXG4gICAgICAgIHN0YXR1czogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGRlc2M6ICdUaGUgYmVzdCBoYW1tb2NrIG91dCB0aGVyZSEgR3JlYXQgZm9yIDEsIHBlcmZlY3QgZm9yIDIuIEVhc2lseSB0cmFuc3BvcnRhYmxlIGFuZCBzdHVmZnMgcmlnaHQgaW50byB0aGUgYXR0YWNoZWQgc2Fjay4gU2V0IHVwIGluIHNlY29uZHMgYmVjYXVzZSBvdXIgcm9wZXMgYWxsIGNvbWUgd2l0aCBwcmV0aWVkIGtub3RzIScsXG4gICAgICAgIHByaWNlOiAzNC45OVxuICAgIH0se1xuICAgICAgICBpZDogNSxcbiAgICAgICAgbmFtZTogJ1RoZSBCcmVlemUnLFxuICAgICAgICBjb2xvcjogJ2xpbWUgZ3JlZW4vIGxpZ2h0IGJsdWUvIHdoaXRlJyxcbiAgICAgICAgaW1hZ2U6IFwiLi9pbWcvaGFtbW9ja3MvcHJvZHVjdC9vYXNpc2hhbW1vY2suanBnXCIsXG4gICAgICAgIGltYWdlMTogXCIuL2ltZy9oYW1tb2Nrcy9wcm9kdWN0L29hc2lzaGFtbW9ja2FuZGJhZy5qcGdcIixcbiAgICAgICAgaW1hZ2UyOiBcIi4vaW1nL2hhbW1vY2tzL3Byb2R1Y3Qvb2FzaXNiYWcuanBnXCIsXG4gICAgICAgIGltYWdlMzogXCIuL2ltZy9oYW1tb2Nrcy9wcm9kdWN0L3RyZWVyb3BlYW5kc2xlZXZlLmpwZ1wiLFxuICAgICAgICBpbWFnZTQ6IFwiLi9pbWcvZ2FsbGVyeS90cmVlU2V0VXBTcS5qcGdcIixcbiAgICAgICAgaW1hZ2U1OiBcIi4vaW1nL2dhbGxlcnkvYnJlZXplL0FGQnJlZXplU3EuanBnXCIsXG4gICAgICAgIGltYWdlNjogXCIuL2ltZy9nYWxsZXJ5L2JyZWV6ZS9icmVlemVBRkNhbnlvbi5qcGdcIixcbiAgICAgICAgc3RhdHVzOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgZGVzYzogJ1RoZSBiZXN0IGhhbW1vY2sgb3V0IHRoZXJlISBHcmVhdCBmb3IgMSwgcGVyZmVjdCBmb3IgMi4gRWFzaWx5IHRyYW5zcG9ydGFibGUgYW5kIHN0dWZmcyByaWdodCBpbnRvIHRoZSBhdHRhY2hlZCBzYWNrLiBTZXQgdXAgaW4gc2Vjb25kcyBiZWNhdXNlIG91ciByb3BlcyBhbGwgY29tZSB3aXRoIHByZXRpZWQga25vdHMhJyxcbiAgICAgICAgcHJpY2U6IDM0Ljk5XG4gICAgfV1cblxuICAgIHRoaXMuZ2V0QmVzdFNlbGxlcnMgPSAoKSA9PiB7XG4gICAgICBsZXQgYmVzdFNlbGxlcnMgPSB0aGlzLmJlc3RTZWxsZXJzO1xuICAgICAgcmV0dXJuIGJlc3RTZWxsZXJzO1xuICAgIH1cblxuICAgIHRoaXMuZ2V0SGFtbW9ja3MgPSAoKSA9PiB7XG4gICAgICBsZXQgaGFtbW9ja3MgPSB0aGlzLmhhbW1vY2tzO1xuICAgICAgcmV0dXJuIGhhbW1vY2tzO1xuICAgIH1cblxuICAgIHRoaXMuZ2V0SGFtbW9ja0RldGFpbHMgPSAoc3RhdGVQYXJhbXMpID0+IHtcbiAgICAgIGxldCBoYW1tb2NrRGV0YWlscyA9IHRoaXMuaGFtbW9ja3M7XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgaGFtbW9ja0RldGFpbHMubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zb2xlLmxvZyhoYW1tb2NrRGV0YWlscywgc3RhdGVQYXJhbXMpO1xuICAgICAgICBpZihoYW1tb2NrRGV0YWlsc1tpXS5pZCA9PT0gcGFyc2VJbnQoc3RhdGVQYXJhbXMuaWQpKXtcbiAgICAgICAgICByZXR1cm4gaGFtbW9ja0RldGFpbHNbaV1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuXG5cblxufSkvL2VuZCBvZiBzZXJ2aWNlXG4iXX0=
