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
        color: 'orange/ gray',
        image: "../img/hammocks/sunrise.jpg",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes come with pretied knots!',
        price: 35.97
    }, {
        id: 2,
        name: 'The Geyser',
        color: 'Blue/ Light Blue',
        image: "../img/hammocks/bluehammock.jpg",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes come with pretied knots!',
        price: 35.97
    }, {
        id: 3,
        name: 'The Woodland',
        color: 'Forrest Green/Grey',
        image: "../img/hammocks/greenhammock.jpg",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes come with pretied knots!',
        price: 35.97
    }, {
        id: 4,
        name: 'The Summit',
        color: 'Charcoal/Maroon',
        image: "../img/hammocks/summit.jpg",
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbnRyb2xsZXJzL2ZhcUN0cmwuanMiLCJjb250cm9sbGVycy9oYW1tb2NrQ3RybC5qcyIsImNvbnRyb2xsZXJzL2hhbW1vY2tEZXRhaWxzQ3RybC5qcyIsImNvbnRyb2xsZXJzL2hvbWVDdHJsLmpzIiwic2VydmljZXMvaGFtbW9ja1NydmMuanMiLCJzZXJ2aWNlcy9vdXRwb3N0U3J2Yy5qcyIsImRpcmVjdGl2ZXMvZm9vdGVyLmpzIiwiZGlyZWN0aXZlcy9uYXZiYXIuanMiLCJkaXJlY3RpdmVzL3NsaWRlYWJsZS5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCJzdGF0ZSIsInVybCIsInRlbXBsYXRlVXJsIiwiY29udHJvbGxlciIsIm90aGVyd2lzZSIsIiRzY29wZSIsIm91dHBvc3RTcnZjIiwiJHN0YXRlUGFyYW1zIiwiZmFxcyIsImdldEZhcXMiLCJjb25zb2xlIiwibG9nIiwiaGFtbW9ja1NydmMiLCJoYW1tb2NrcyIsImdldEhhbW1vY2tzIiwiaGFtbW9jayIsImdldEhhbW1vY2tEZXRhaWxzIiwiYmVzdFNlbGxlcnMiLCJnZXRCZXN0U2VsbGVycyIsInNlcnZpY2UiLCJpZCIsIm5hbWUiLCJjb2xvciIsImltYWdlIiwic3RhdHVzIiwiZGVzYyIsInByaWNlIiwic3RhdGVQYXJhbXMiLCJoYW1tb2NrRGV0YWlscyIsImkiLCJsZW5ndGgiLCJwYXJzZUludCIsImZhcSIsInF1ZXN0aW9uIiwiYW5zd2VyIiwidGlwMSIsInRpcDIiLCJkaXJlY3RpdmUiLCJyZXN0cmljdCIsImNvbXBpbGUiLCJlbGVtZW50IiwiYXR0ciIsImNvbnRlbnRzIiwiaHRtbCIsInBvc3RMaW5rIiwic2NvcGUiLCJhdHRycyIsImR1cmF0aW9uIiwiZWFzaW5nIiwiY3NzIiwibGluayIsInRhcmdldCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNsaWRlVG9nZ2xlIiwiZXhwYW5kZWQiLCJiaW5kIiwiY29udGVudCIsInN0eWxlIiwiYm9yZGVyIiwieSIsImNsaWVudEhlaWdodCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsUUFBUUMsTUFBUixDQUFlLFlBQWYsRUFBNkIsQ0FBQyxXQUFELENBQTdCLEVBQ0dDLE1BREgsQ0FDVSxVQUFTQyxjQUFULEVBQXlCQyxrQkFBekIsRUFBNEM7O0FBRWxERCxtQkFDR0UsS0FESCxDQUNTLE1BRFQsRUFDZ0I7QUFDVkMsYUFBSSxHQURNO0FBRVZDLHFCQUFhLG1CQUZIO0FBR1ZDLG9CQUFZO0FBSEYsS0FEaEIsRUFNR0gsS0FOSCxDQU1TLE9BTlQsRUFNaUI7QUFDWEMsYUFBSSxRQURPO0FBRVhDLHFCQUFhO0FBRkYsS0FOakIsRUFVR0YsS0FWSCxDQVVTLFVBVlQsRUFVb0I7QUFDZEMsYUFBSSxXQURVO0FBRWRDLHFCQUFhLHVCQUZDO0FBR2RDLG9CQUFZO0FBSEUsS0FWcEIsRUFlR0gsS0FmSCxDQWVTLGdCQWZULEVBZTBCO0FBQ3BCQyxhQUFJLHFCQURnQjtBQUVwQkMscUJBQWEsOEJBRk87QUFHcEJDLG9CQUFZO0FBSFEsS0FmMUIsRUFvQkdILEtBcEJILENBb0JTLFNBcEJULEVBb0JtQjtBQUNiQyxhQUFJLFVBRFM7QUFFYkMscUJBQWE7QUFGQSxLQXBCbkIsRUF3QkdGLEtBeEJILENBd0JTLGFBeEJULEVBd0J1QjtBQUNqQkMsYUFBSSxNQURhO0FBRWpCQyxxQkFBYSxrQkFGSTtBQUdqQkMsb0JBQVk7QUFISyxLQXhCdkIsRUE2QkdILEtBN0JILENBNkJTLGlCQTdCVCxFQTZCMkI7QUFDckJDLGFBQUksVUFEaUI7QUFFckJDLHFCQUFhO0FBRlEsS0E3QjNCLEVBaUNHRixLQWpDSCxDQWlDUyxnQkFqQ1QsRUFpQzBCO0FBQ3BCQyxhQUFJLFNBRGdCO0FBRXBCQyxxQkFBYTtBQUZPLEtBakMxQixFQXFDR0YsS0FyQ0gsQ0FxQ1MsU0FyQ1QsRUFxQ21CO0FBQ2JDLGFBQUksVUFEUztBQUViQyxxQkFBYTtBQUZBLEtBckNuQixFQXlDR0YsS0F6Q0gsQ0F5Q1MsTUF6Q1QsRUF5Q2dCO0FBQ1ZDLGFBQUksT0FETTtBQUVWQyxxQkFBYSxtQkFGSDtBQUdWQyxvQkFBWTtBQUhGLEtBekNoQjs7QUErQ0ZKLHVCQUNLSyxTQURMLENBQ2UsR0FEZjtBQUlELENBdEREOzs7QUNBQVQsUUFBUUMsTUFBUixDQUFlLFlBQWYsRUFBNkJPLFVBQTdCLENBQXdDLFNBQXhDLEVBQW1ELFVBQUNFLE1BQUQsRUFBU0MsV0FBVCxFQUFzQkMsWUFBdEIsRUFBdUM7O0FBRXhGRixTQUFPRyxJQUFQLEdBQWNGLFlBQVlHLE9BQVosRUFBZDtBQUNBQyxVQUFRQyxHQUFSLENBQVlOLE9BQU9HLElBQW5COztBQUVBO0FBQ0E7QUFDQTtBQUVELENBVEQsR0FTRTs7O0FDVEZiLFFBQVFDLE1BQVIsQ0FBZSxZQUFmLEVBQTZCTyxVQUE3QixDQUF3QyxhQUF4QyxFQUF1RCxVQUFDRSxNQUFELEVBQVNPLFdBQVQsRUFBc0JMLFlBQXRCLEVBQXVDOztBQUU1RkYsU0FBT1EsUUFBUCxHQUFrQkQsWUFBWUUsV0FBWixFQUFsQjtBQUNBSixVQUFRQyxHQUFSLENBQVlOLE9BQU9RLFFBQW5CO0FBRUQsQ0FMRCxHQUtFOzs7QUNMRmxCLFFBQVFDLE1BQVIsQ0FBZSxZQUFmLEVBQ0NPLFVBREQsQ0FDWSxvQkFEWixFQUNrQyxVQUFDRSxNQUFELEVBQVNPLFdBQVQsRUFBc0JMLFlBQXRCLEVBQXVDOztBQUV2RUYsU0FBT1UsT0FBUCxHQUFpQkgsWUFBWUksaUJBQVosQ0FBOEJULFlBQTlCLENBQWpCO0FBQ0FHLFVBQVFDLEdBQVIsQ0FBWU4sT0FBT1UsT0FBbkI7QUFHRCxDQVBEOzs7QUNBQXBCLFFBQVFDLE1BQVIsQ0FBZSxZQUFmLEVBQ0NPLFVBREQsQ0FDWSxVQURaLEVBQ3dCLFVBQUNFLE1BQUQsRUFBU08sV0FBVCxFQUFzQkwsWUFBdEIsRUFBdUM7O0FBRTdERixTQUFPWSxXQUFQLEdBQXFCTCxZQUFZTSxjQUFaLEVBQXJCO0FBQ0FSLFVBQVFDLEdBQVIsQ0FBWU4sT0FBT1ksV0FBbkI7QUFFRCxDQU5ELEdBTUU7OztBQ05GdEIsUUFBUUMsTUFBUixDQUFlLFlBQWYsRUFBNkJ1QixPQUE3QixDQUFxQyxhQUFyQyxFQUFvRCxZQUFVO0FBQUE7O0FBRzVELFNBQUtGLFdBQUwsR0FBbUIsQ0FBQztBQUNkRyxZQUFJLENBRFU7QUFFZEMsY0FBTSxhQUZRO0FBR2RDLGVBQU8sYUFITztBQUlkQyxlQUFPLDZCQUpPO0FBS2RDLGdCQUFRLGlCQUxNO0FBTWRDLGNBQU0sb0xBTlE7QUFPZEMsZUFBTztBQVBPLEtBQUQsRUFRZDtBQUNDTixZQUFJLENBREw7QUFFQ0MsY0FBTSxZQUZQO0FBR0NDLGVBQU8saUJBSFI7QUFJQ0MsZUFBTyxpQ0FKUjtBQUtDQyxnQkFBUSxpQkFMVDtBQU1DQyxjQUFNLG9MQU5QO0FBT0NDLGVBQU87QUFQUixLQVJjLEVBZ0JmO0FBQ0VOLFlBQUksQ0FETjtBQUVFQyxjQUFNLFlBRlI7QUFHRUMsZUFBTywrQkFIVDtBQUlFQyxlQUFPLG1DQUpUO0FBS0VDLGdCQUFRLGlCQUxWO0FBTUVDLGNBQU0sb0xBTlI7QUFPRUMsZUFBTztBQVBULEtBaEJlLENBQW5COztBQTBCQSxTQUFLYixRQUFMLEdBQWdCLENBQUM7QUFDWE8sWUFBSSxDQURPO0FBRVhDLGNBQU0sYUFGSztBQUdYQyxlQUFPLGNBSEk7QUFJWEMsZUFBTyw2QkFKSTtBQUtYQyxnQkFBUSxpQkFMRztBQU1YQyxjQUFNLG9MQU5LO0FBT1hDLGVBQU87QUFQSSxLQUFELEVBUVg7QUFDQ04sWUFBSSxDQURMO0FBRUNDLGNBQU0sWUFGUDtBQUdDQyxlQUFPLGtCQUhSO0FBSUNDLGVBQU8saUNBSlI7QUFLQ0MsZ0JBQVEsaUJBTFQ7QUFNQ0MsY0FBTSxvTEFOUDtBQU9DQyxlQUFPO0FBUFIsS0FSVyxFQWdCWjtBQUNFTixZQUFJLENBRE47QUFFRUMsY0FBTSxjQUZSO0FBR0VDLGVBQU8sb0JBSFQ7QUFJRUMsZUFBTyxrQ0FKVDtBQUtFQyxnQkFBUSxpQkFMVjtBQU1FQyxjQUFNLG9MQU5SO0FBT0VDLGVBQU87QUFQVCxLQWhCWSxFQXdCWjtBQUNFTixZQUFJLENBRE47QUFFRUMsY0FBTSxZQUZSO0FBR0VDLGVBQU8saUJBSFQ7QUFJRUMsZUFBTyw0QkFKVDtBQUtFQyxnQkFBUSxpQkFMVjtBQU1FQyxjQUFNLG9MQU5SO0FBT0VDLGVBQU87QUFQVCxLQXhCWSxFQWdDWjtBQUNFTixZQUFJLENBRE47QUFFRUMsY0FBTSxZQUZSO0FBR0VDLGVBQU8sK0JBSFQ7QUFJRUMsZUFBTyxtQ0FKVDtBQUtFQyxnQkFBUSxpQkFMVjtBQU1FQyxjQUFNLG9MQU5SO0FBT0VDLGVBQU87QUFQVCxLQWhDWSxDQUFoQjs7QUEwQ0UsU0FBS1IsY0FBTCxHQUFzQixZQUFNO0FBQzFCLFlBQUlELGNBQWMsTUFBS0EsV0FBdkI7QUFDQSxlQUFPQSxXQUFQO0FBQ0QsS0FIRDs7QUFLQSxTQUFLSCxXQUFMLEdBQW1CLFlBQU07QUFDdkIsWUFBSUQsV0FBVyxNQUFLQSxRQUFwQjtBQUNBLGVBQU9BLFFBQVA7QUFDRCxLQUhEOztBQUtBLFNBQUtHLGlCQUFMLEdBQXlCLFVBQUNXLFdBQUQsRUFBaUI7QUFDeEMsWUFBSUMsaUJBQWlCLE1BQUtmLFFBQTFCO0FBQ0EsYUFBSSxJQUFJZ0IsSUFBSSxDQUFaLEVBQWVBLElBQUlELGVBQWVFLE1BQWxDLEVBQTBDRCxHQUExQyxFQUE4QztBQUM1Q25CLG9CQUFRQyxHQUFSLENBQVlpQixjQUFaLEVBQTRCRCxXQUE1QjtBQUNBLGdCQUFHQyxlQUFlQyxDQUFmLEVBQWtCVCxFQUFsQixLQUF5QlcsU0FBU0osWUFBWVAsRUFBckIsQ0FBNUIsRUFBcUQ7QUFDbkQsdUJBQU9RLGVBQWVDLENBQWYsQ0FBUDtBQUNEO0FBQ0Y7QUFDRixLQVJEO0FBYUgsQ0E5RkQsR0E4RkU7OztBQzlGRmxDLFFBQVFDLE1BQVIsQ0FBZSxZQUFmLEVBQTZCdUIsT0FBN0IsQ0FBcUMsYUFBckMsRUFBb0QsWUFBVTtBQUFBOztBQUU1RCxPQUFLYSxHQUFMLEdBQVcsQ0FBQztBQUNWQyxjQUFVLHVEQURBO0FBRVZDLFlBQVE7QUFGRSxHQUFELEVBR1I7QUFDREQsY0FBVSx1Q0FEVDtBQUVEQyxZQUFRLDRHQUZQO0FBR0RDLFVBQU0sc0tBSEw7QUFJREMsVUFBTTtBQUpMLEdBSFEsRUFRVDtBQUNBSCxjQUFVLDJDQURWO0FBRUFDLFlBQVEsOEpBRlI7QUFHQUMsVUFBTTtBQUhOLEdBUlMsRUFZUjtBQUNERixjQUFVLG9DQURUO0FBRURDLFlBQVE7QUFGUCxHQVpRLEVBZVI7QUFDREQsY0FBVSx3Q0FEVDtBQUVEQyxZQUFRO0FBRlAsR0FmUSxFQWtCUjtBQUNERCxjQUFVLHNEQURUO0FBRURDLFlBQVE7QUFGUCxHQWxCUSxFQXFCUjtBQUNERCxjQUFVLDJDQURUO0FBRURDLFlBQVE7QUFGUCxHQXJCUSxFQXdCUjtBQUNERCxjQUFVLHlDQURUO0FBRURDLFlBQVE7QUFGUCxHQXhCUSxFQTJCUjtBQUNERCxjQUFVLDBFQURUO0FBRURDLFlBQVE7QUFGUCxHQTNCUSxFQThCUjtBQUNERCxjQUFVLDRDQURUO0FBRURDLFlBQVE7QUFGUCxHQTlCUSxFQWlDUjtBQUNERCxjQUFVLGtEQURUO0FBRURDLFlBQVE7QUFGUCxHQWpDUSxFQW9DUjtBQUNERCxjQUFVLCtCQURUO0FBRURDLFlBQVE7QUFGUCxHQXBDUSxDQUFYOztBQXlDQSxPQUFLekIsT0FBTCxHQUFlLFlBQU07QUFDbkIsUUFBSUQsT0FBTyxNQUFLd0IsR0FBaEI7QUFDQSxXQUFPeEIsSUFBUDtBQUNELEdBSEQ7QUFLRCxDQWhERCxHQWdERTs7O0FDaERGYixRQUFRQyxNQUFSLENBQWUsWUFBZixFQUE2QnlDLFNBQTdCLENBQXVDLGNBQXZDLEVBQXVELFlBQU07QUFDM0QsU0FBTztBQUNMbkMsaUJBQWE7QUFEUixHQUFQO0FBR0QsQ0FKRCxHQUlHOzs7QUNKSFAsUUFBUUMsTUFBUixDQUFlLFlBQWYsRUFBNkJ5QyxTQUE3QixDQUF1QyxRQUF2QyxFQUFpRCxZQUFNO0FBQ3JELFNBQU87QUFDTG5DLGlCQUFhO0FBRFIsR0FBUDtBQUdELENBSkQsR0FJRzs7O0FDSkhQLFFBQVFDLE1BQVIsQ0FBZSxZQUFmLEVBQ0N5QyxTQURELENBQ1csV0FEWCxFQUN3QixZQUFZO0FBQ2hDLFdBQU87QUFDSEMsa0JBQVMsR0FETjtBQUVIQyxpQkFBUyxpQkFBVUMsT0FBVixFQUFtQkMsSUFBbkIsRUFBeUI7QUFDOUI7QUFDQSxnQkFBSUMsV0FBV0YsUUFBUUcsSUFBUixFQUFmO0FBQ0FILG9CQUFRRyxJQUFSLENBQWEsdUZBQXVGRCxRQUF2RixHQUFrRyxRQUEvRzs7QUFFQSxtQkFBTyxTQUFTRSxRQUFULENBQWtCQyxLQUFsQixFQUF5QkwsT0FBekIsRUFBa0NNLEtBQWxDLEVBQXlDO0FBQzVDO0FBQ0FBLHNCQUFNQyxRQUFOLEdBQWtCLENBQUNELE1BQU1DLFFBQVIsR0FBb0IsSUFBcEIsR0FBMkJELE1BQU1DLFFBQWxEO0FBQ0FELHNCQUFNRSxNQUFOLEdBQWdCLENBQUNGLE1BQU1FLE1BQVIsR0FBa0IsYUFBbEIsR0FBa0NGLE1BQU1FLE1BQXZEO0FBQ0FSLHdCQUFRUyxHQUFSLENBQVk7QUFDUixnQ0FBWSxRQURKO0FBRVIsOEJBQVUsS0FGRjtBQUdSLDBDQUFzQixRQUhkO0FBSVIsMENBQXNCSCxNQUFNQyxRQUpwQjtBQUtSLGdEQUE0QkQsTUFBTUU7QUFMMUIsaUJBQVo7QUFPSCxhQVhEO0FBWUg7QUFuQkUsS0FBUDtBQXFCSCxDQXZCRCxFQXdCQ1gsU0F4QkQsQ0F3QlcsYUF4QlgsRUF3QjBCLFlBQVc7QUFDakMsV0FBTztBQUNIQyxrQkFBVSxHQURQO0FBRUhZLGNBQU0sY0FBU0wsS0FBVCxFQUFnQkwsT0FBaEIsRUFBeUJNLEtBQXpCLEVBQWdDO0FBQ2xDLGdCQUFJSyxTQUFTQyxTQUFTQyxhQUFULENBQXVCUCxNQUFNUSxXQUE3QixDQUFiO0FBQ0FSLGtCQUFNUyxRQUFOLEdBQWlCLEtBQWpCO0FBQ0FmLG9CQUFRZ0IsSUFBUixDQUFhLE9BQWIsRUFBc0IsWUFBVztBQUM3QixvQkFBSUMsVUFBVU4sT0FBT0UsYUFBUCxDQUFxQixvQkFBckIsQ0FBZDtBQUNBLG9CQUFHLENBQUNQLE1BQU1TLFFBQVYsRUFBb0I7QUFDaEJFLDRCQUFRQyxLQUFSLENBQWNDLE1BQWQsR0FBdUIseUJBQXZCO0FBQ0Esd0JBQUlDLElBQUlILFFBQVFJLFlBQWhCO0FBQ0FKLDRCQUFRQyxLQUFSLENBQWNDLE1BQWQsR0FBdUIsQ0FBdkI7QUFDQVIsMkJBQU9PLEtBQVAsQ0FBYUksTUFBYixHQUFzQkYsSUFBSSxJQUExQjtBQUNILGlCQUxELE1BS087QUFDSFQsMkJBQU9PLEtBQVAsQ0FBYUksTUFBYixHQUFzQixLQUF0QjtBQUNIO0FBQ0RoQixzQkFBTVMsUUFBTixHQUFpQixDQUFDVCxNQUFNUyxRQUF4QjtBQUNILGFBWEQ7QUFZSDtBQWpCRSxLQUFQO0FBbUJILENBNUNEIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJywgWyd1aS5yb3V0ZXInXSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKXtcblxuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ2hvbWUnLHtcbiAgICAgICAgICB1cmw6Jy8nLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiBcIi4vdmlld3MvaG9tZS5odG1sXCIsXG4gICAgICAgICAgY29udHJvbGxlcjogJ2hvbWVDdHJsJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnc3RvcnknLHtcbiAgICAgICAgICB1cmw6Jy9zdG9yeScsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL3N0b3J5Lmh0bWwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdoYW1tb2Nrcycse1xuICAgICAgICAgIHVybDonL2hhbW1vY2tzJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvaGFtbW9ja3MuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ2hhbW1vY2tDdHJsJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnaGFtbW9ja0RldGFpbHMnLHtcbiAgICAgICAgICB1cmw6Jy9oYW1tb2NrRGV0YWlscy86aWQnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9oYW1tb2NrLWRldGFpbHMuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ2hhbW1vY2tEZXRhaWxzQ3RybCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ291dHBvc3QnLHtcbiAgICAgICAgICB1cmw6Jy9vdXRwb3N0JyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3Mvb3V0cG9zdC5odG1sJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnb3V0cG9zdC5mYXEnLHtcbiAgICAgICAgICB1cmw6Jy9mYXEnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9mYXEuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ2ZhcUN0cmwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdvdXRwb3N0LnJlZnVuZHMnLHtcbiAgICAgICAgICB1cmw6Jy9yZWZ1bmRzJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvcmVmdW5kcy5odG1sJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnb3V0cG9zdC52aWRlb3MnLHtcbiAgICAgICAgICB1cmw6Jy92aWRlb3MnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy92aWRlb3MuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2NvbnRhY3QnLHtcbiAgICAgICAgICB1cmw6Jy9jb250YWN0JyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvY29udGFjdC5odG1sJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnam9pbicse1xuICAgICAgICAgIHVybDonL2pvaW4nLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9qb2luLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdqb2luQ3RybCdcbiAgICAgIH0pO1xuXG4gICR1cmxSb3V0ZXJQcm92aWRlclxuICAgICAgLm90aGVyd2lzZSgnLycpO1xuXG5cbn0pO1xuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5jb250cm9sbGVyKCdmYXFDdHJsJywgKCRzY29wZSwgb3V0cG9zdFNydmMsICRzdGF0ZVBhcmFtcykgPT4ge1xuXG4gICRzY29wZS5mYXFzID0gb3V0cG9zdFNydmMuZ2V0RmFxcygpO1xuICBjb25zb2xlLmxvZygkc2NvcGUuZmFxcyk7XG5cbiAgLy8gJCgnLnF1ZXN0aW9uJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAvLyAgICQodGhpcykubmV4dCgnLm9wZW4nKS5zbGlkZVRvZ2dsZSgpO1xuICAvLyB9KTtcblxufSkvL2VuZCBvZiBjb250cm9sbGVyXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpLmNvbnRyb2xsZXIoJ2hhbW1vY2tDdHJsJywgKCRzY29wZSwgaGFtbW9ja1NydmMsICRzdGF0ZVBhcmFtcykgPT4ge1xuXG4gICRzY29wZS5oYW1tb2NrcyA9IGhhbW1vY2tTcnZjLmdldEhhbW1vY2tzKCk7XG4gIGNvbnNvbGUubG9nKCRzY29wZS5oYW1tb2Nrcyk7XG5cbn0pLy9lbmQgb2YgaG9tZSBjb250cm9sbGVyXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpXG4uY29udHJvbGxlcignaGFtbW9ja0RldGFpbHNDdHJsJywgKCRzY29wZSwgaGFtbW9ja1NydmMsICRzdGF0ZVBhcmFtcykgPT4ge1xuXG4gICRzY29wZS5oYW1tb2NrID0gaGFtbW9ja1NydmMuZ2V0SGFtbW9ja0RldGFpbHMoJHN0YXRlUGFyYW1zKTtcbiAgY29uc29sZS5sb2coJHNjb3BlLmhhbW1vY2spO1xuXG5cbn0pXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpXG4uY29udHJvbGxlcignaG9tZUN0cmwnLCAoJHNjb3BlLCBoYW1tb2NrU3J2YywgJHN0YXRlUGFyYW1zKSA9PiB7XG5cbiAgJHNjb3BlLmJlc3RTZWxsZXJzID0gaGFtbW9ja1NydmMuZ2V0QmVzdFNlbGxlcnMoKTtcbiAgY29uc29sZS5sb2coJHNjb3BlLmJlc3RTZWxsZXJzKTtcblxufSkvL2VuZCBvZiBob21lIGNvbnRyb2xsZXJcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJykuc2VydmljZSgnaGFtbW9ja1NydmMnLCBmdW5jdGlvbigpe1xuXG5cbiAgdGhpcy5iZXN0U2VsbGVycyA9IFt7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiAnVGhlIFN1bnJpc2UnLFxuICAgICAgICBjb2xvcjogJ09yYW5nZS9HcmV5JyxcbiAgICAgICAgaW1hZ2U6IFwiLi4vaW1nL2hhbW1vY2tzL3N1bnJpc2UuanBnXCIsXG4gICAgICAgIHN0YXR1czogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGRlc2M6ICdUaGUgYmVzdCBoYW1tb2NrIG91dCB0aGVyZSEgR3JlYXQgZm9yIDEsIHBlcmZlY3QgZm9yIDIuIEVhc2lseSB0cmFuc3BvcnRhYmxlIGFuZCBzdHVmZnMgcmlnaHQgaW50byB0aGUgYXR0YWNoZWQgc2Fjay4gU2V0IHVwIGluIHNlY29uZHMgYmVjYXVzZSBvdXIgcm9wZXMgY29tZSB3aXRoIHByZXRpZWQga25vdHMhJyxcbiAgICAgICAgcHJpY2U6IDM1Ljk3XG4gICAgfSwge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogJ1RoZSBHZXlzZXInLFxuICAgICAgICBjb2xvcjogJ0xpZ2h0IEJsdWUvQmx1ZScsXG4gICAgICAgIGltYWdlOiBcIi4uL2ltZy9oYW1tb2Nrcy9ibHVlaGFtbW9jay5qcGdcIixcbiAgICAgICAgc3RhdHVzOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgZGVzYzogJ1RoZSBiZXN0IGhhbW1vY2sgb3V0IHRoZXJlISBHcmVhdCBmb3IgMSwgcGVyZmVjdCBmb3IgMi4gRWFzaWx5IHRyYW5zcG9ydGFibGUgYW5kIHN0dWZmcyByaWdodCBpbnRvIHRoZSBhdHRhY2hlZCBzYWNrLiBTZXQgdXAgaW4gc2Vjb25kcyBiZWNhdXNlIG91ciByb3BlcyBjb21lIHdpdGggcHJldGllZCBrbm90cyEnLFxuICAgICAgICBwcmljZTogMzUuOTdcbiAgICB9LHtcbiAgICAgICAgaWQ6IDUsXG4gICAgICAgIG5hbWU6ICdUaGUgTWVhZG93JyxcbiAgICAgICAgY29sb3I6ICdMaW1lIEdyZWVuLyBMaWdodCBCbHVlLyBXaGl0ZScsXG4gICAgICAgIGltYWdlOiBcIi4uL2ltZy9oYW1tb2Nrcy9tZWFkb3doYW1tb2NrLmpwZ1wiLFxuICAgICAgICBzdGF0dXM6ICdDb21pbmcgTWF5IDIwMTcnLFxuICAgICAgICBkZXNjOiAnVGhlIGJlc3QgaGFtbW9jayBvdXQgdGhlcmUhIEdyZWF0IGZvciAxLCBwZXJmZWN0IGZvciAyLiBFYXNpbHkgdHJhbnNwb3J0YWJsZSBhbmQgc3R1ZmZzIHJpZ2h0IGludG8gdGhlIGF0dGFjaGVkIHNhY2suIFNldCB1cCBpbiBzZWNvbmRzIGJlY2F1c2Ugb3VyIHJvcGVzIGNvbWUgd2l0aCBwcmV0aWVkIGtub3RzIScsXG4gICAgICAgIHByaWNlOiAzNS45N1xuICAgIH1dXG5cbiAgdGhpcy5oYW1tb2NrcyA9IFt7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiAnVGhlIFN1bnJpc2UnLFxuICAgICAgICBjb2xvcjogJ29yYW5nZS8gZ3JheScsXG4gICAgICAgIGltYWdlOiBcIi4uL2ltZy9oYW1tb2Nrcy9zdW5yaXNlLmpwZ1wiLFxuICAgICAgICBzdGF0dXM6ICdDb21pbmcgTWF5IDIwMTcnLFxuICAgICAgICBkZXNjOiAnVGhlIGJlc3QgaGFtbW9jayBvdXQgdGhlcmUhIEdyZWF0IGZvciAxLCBwZXJmZWN0IGZvciAyLiBFYXNpbHkgdHJhbnNwb3J0YWJsZSBhbmQgc3R1ZmZzIHJpZ2h0IGludG8gdGhlIGF0dGFjaGVkIHNhY2suIFNldCB1cCBpbiBzZWNvbmRzIGJlY2F1c2Ugb3VyIHJvcGVzIGNvbWUgd2l0aCBwcmV0aWVkIGtub3RzIScsXG4gICAgICAgIHByaWNlOiAzNS45N1xuICAgIH0sIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIG5hbWU6ICdUaGUgR2V5c2VyJyxcbiAgICAgICAgY29sb3I6ICdCbHVlLyBMaWdodCBCbHVlJyxcbiAgICAgICAgaW1hZ2U6IFwiLi4vaW1nL2hhbW1vY2tzL2JsdWVoYW1tb2NrLmpwZ1wiLFxuICAgICAgICBzdGF0dXM6ICdDb21pbmcgTWF5IDIwMTcnLFxuICAgICAgICBkZXNjOiAnVGhlIGJlc3QgaGFtbW9jayBvdXQgdGhlcmUhIEdyZWF0IGZvciAxLCBwZXJmZWN0IGZvciAyLiBFYXNpbHkgdHJhbnNwb3J0YWJsZSBhbmQgc3R1ZmZzIHJpZ2h0IGludG8gdGhlIGF0dGFjaGVkIHNhY2suIFNldCB1cCBpbiBzZWNvbmRzIGJlY2F1c2Ugb3VyIHJvcGVzIGNvbWUgd2l0aCBwcmV0aWVkIGtub3RzIScsXG4gICAgICAgIHByaWNlOiAzNS45N1xuICAgIH0se1xuICAgICAgICBpZDogMyxcbiAgICAgICAgbmFtZTogJ1RoZSBXb29kbGFuZCcsXG4gICAgICAgIGNvbG9yOiAnRm9ycmVzdCBHcmVlbi9HcmV5JyxcbiAgICAgICAgaW1hZ2U6IFwiLi4vaW1nL2hhbW1vY2tzL2dyZWVuaGFtbW9jay5qcGdcIixcbiAgICAgICAgc3RhdHVzOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgZGVzYzogJ1RoZSBiZXN0IGhhbW1vY2sgb3V0IHRoZXJlISBHcmVhdCBmb3IgMSwgcGVyZmVjdCBmb3IgMi4gRWFzaWx5IHRyYW5zcG9ydGFibGUgYW5kIHN0dWZmcyByaWdodCBpbnRvIHRoZSBhdHRhY2hlZCBzYWNrLiBTZXQgdXAgaW4gc2Vjb25kcyBiZWNhdXNlIG91ciByb3BlcyBjb21lIHdpdGggcHJldGllZCBrbm90cyEnLFxuICAgICAgICBwcmljZTogMzUuOTdcbiAgICB9LHtcbiAgICAgICAgaWQ6IDQsXG4gICAgICAgIG5hbWU6ICdUaGUgU3VtbWl0JyxcbiAgICAgICAgY29sb3I6ICdDaGFyY29hbC9NYXJvb24nLFxuICAgICAgICBpbWFnZTogXCIuLi9pbWcvaGFtbW9ja3Mvc3VtbWl0LmpwZ1wiLFxuICAgICAgICBzdGF0dXM6ICdDb21pbmcgTWF5IDIwMTcnLFxuICAgICAgICBkZXNjOiAnVGhlIGJlc3QgaGFtbW9jayBvdXQgdGhlcmUhIEdyZWF0IGZvciAxLCBwZXJmZWN0IGZvciAyLiBFYXNpbHkgdHJhbnNwb3J0YWJsZSBhbmQgc3R1ZmZzIHJpZ2h0IGludG8gdGhlIGF0dGFjaGVkIHNhY2suIFNldCB1cCBpbiBzZWNvbmRzIGJlY2F1c2Ugb3VyIHJvcGVzIGNvbWUgd2l0aCBwcmV0aWVkIGtub3RzIScsXG4gICAgICAgIHByaWNlOiAzNS45N1xuICAgIH0se1xuICAgICAgICBpZDogNSxcbiAgICAgICAgbmFtZTogJ1RoZSBNZWFkb3cnLFxuICAgICAgICBjb2xvcjogJ0xpbWUgR3JlZW4vIExpZ2h0IEJsdWUvIFdoaXRlJyxcbiAgICAgICAgaW1hZ2U6IFwiLi4vaW1nL2hhbW1vY2tzL21lYWRvd2hhbW1vY2suanBnXCIsXG4gICAgICAgIHN0YXR1czogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGRlc2M6ICdUaGUgYmVzdCBoYW1tb2NrIG91dCB0aGVyZSEgR3JlYXQgZm9yIDEsIHBlcmZlY3QgZm9yIDIuIEVhc2lseSB0cmFuc3BvcnRhYmxlIGFuZCBzdHVmZnMgcmlnaHQgaW50byB0aGUgYXR0YWNoZWQgc2Fjay4gU2V0IHVwIGluIHNlY29uZHMgYmVjYXVzZSBvdXIgcm9wZXMgY29tZSB3aXRoIHByZXRpZWQga25vdHMhJyxcbiAgICAgICAgcHJpY2U6IDM1Ljk3XG4gICAgfV1cblxuICAgIHRoaXMuZ2V0QmVzdFNlbGxlcnMgPSAoKSA9PiB7XG4gICAgICBsZXQgYmVzdFNlbGxlcnMgPSB0aGlzLmJlc3RTZWxsZXJzO1xuICAgICAgcmV0dXJuIGJlc3RTZWxsZXJzO1xuICAgIH1cblxuICAgIHRoaXMuZ2V0SGFtbW9ja3MgPSAoKSA9PiB7XG4gICAgICBsZXQgaGFtbW9ja3MgPSB0aGlzLmhhbW1vY2tzO1xuICAgICAgcmV0dXJuIGhhbW1vY2tzO1xuICAgIH1cblxuICAgIHRoaXMuZ2V0SGFtbW9ja0RldGFpbHMgPSAoc3RhdGVQYXJhbXMpID0+IHtcbiAgICAgIGxldCBoYW1tb2NrRGV0YWlscyA9IHRoaXMuaGFtbW9ja3M7XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgaGFtbW9ja0RldGFpbHMubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zb2xlLmxvZyhoYW1tb2NrRGV0YWlscywgc3RhdGVQYXJhbXMpO1xuICAgICAgICBpZihoYW1tb2NrRGV0YWlsc1tpXS5pZCA9PT0gcGFyc2VJbnQoc3RhdGVQYXJhbXMuaWQpKXtcbiAgICAgICAgICByZXR1cm4gaGFtbW9ja0RldGFpbHNbaV1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuXG5cblxufSkvL2VuZCBvZiBzZXJ2aWNlXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpLnNlcnZpY2UoJ291dHBvc3RTcnZjJywgZnVuY3Rpb24oKXtcblxuICB0aGlzLmZhcSA9IFt7XG4gICAgcXVlc3Rpb246ICdXYW50aW5nIHRvIGJ1eSBhIGhhbW1vY2s/IEhlcmUgaXMgaG93IHRvIGdldCBzdGFydGVkPycsXG4gICAgYW5zd2VyOiAnT3VyIGdvYWwgaXMgdG8gbWFrZSBvdXIgaGFtbW9ja3MgYXMgaGFzc2xlIGZyZWUgYXMgcG9zc2libGUuIEFsbCBvZiBvdXIgaGFtbW9ja3MgY29tZSB3aXRoIGVuZC1zdHJhcHMgZm9yIGV4dHJhIHN0cmVuZ3RoIGFuZCBkdXJhYmlsaXR5IHNvIG91ciBjdXN0b21lcnMgbmV2ZXIgaGF2ZSB0byB3b3JyeSBhYm91dCB0aGVpciBrbm90cyBjb21pbmcgdW5kb25lLiBXZSBhbHNvIHByb3ZpZGUgdHJlZSBzbGVldmVzIHdpdGggcHJlLXRpZWQga25vdHMgdG8gcHJvdGVjdCBmcm9tIGZyYXkgYW5kIHByb3ZpZGUgZXZlbiBleHRyYSBkdXJhYmlsaXR5LiBPdXIgY3VzdG9tZXIgbmV2ZXIgaGF2ZSB0byB0aWUgdGhlaXIgb3duIGtub3RzISBFYWNoIGhhbW1vY2sgYWxzbyBjb21lcyB3aXRoIGEgc2V0IG9mIGFsdW1pbnVtIHdpcmUtZ2F0ZSBjYXJhYmluZXJzIHRoYXQgd29yayB3aXRoIG91ciBzdXNwZW5zaW9uIHN5c3RlbS4gQWxsIHlvdSBuZWVkIHRvIGRvIG5vdyBpcyBjaG9vc2UgeW91ciBvZiBoYW1tb2NrLidcbiAgfSwge1xuICAgIHF1ZXN0aW9uOiAnSG93IGRvIEkgd2FzaCBteSBNYWtlIFRyYWNrcyBoYW1tb2NrPycsXG4gICAgYW5zd2VyOiAnWW91IGNhbiBtYWNoaW5lIHdhc2ggb3IgaGFuZCB3YXNoIHlvdXIgaGFtbW9jay4gKE5PVEU6IERvIG5vdCBwdXQgdGhlIGhhbW1vY2sgaW4gdGhlIGRyeWVyISBBaXIgZHJ5IG9ubHkhKScsXG4gICAgdGlwMTogJ01hY2hpbmUgV2FzaDogRmlyc3QsIHJlbW92ZSB0aGUgdGhlIGNhcmFiaW5lcnMgdGhlbiB3YXNoIG9uIGNvb2wgaW4gYSBmcm9udCBsb2FkIHdhc2hlciBvbiB0aGUgZGVsaWNhdGUgY3ljbGUgc2V0aW5nIHVzaW5nIGEgbWlsZCBkZXRlcmdlbnQuIERvIG5vdCB1bnRpZSBhbnkga25vdHMhJyxcbiAgICB0aXAyOiAnSGFuZCBXYXNoOiBXZSByZWNvbW1lbmQgdXNpbmcgYSBjbG90aCB3aXRoIHNvYXAgb3IgbWlsZCBkZXRlcmdlbnQuJ1xuICB9LHtcbiAgICBxdWVzdGlvbjogJ0hvdyBkbyBJIGNhcmUgZm9yIG15IE1ha2UgVHJhY2tzIGhhbW1vY2s/JyxcbiAgICBhbnN3ZXI6ICdTYWZldHk6IEluIHNldCB1cCwgaW5zdXJlIHRoYXQgeW91ciBzdHJhcHMgYXJlIHNlY3VyZWx5IHdyYXBwZWQgYW5kIHRoZSBjYXJhYmluZXJzIGFyZSBjbG9zZWQuIEVhc2UgaW50byB5b3VyIGhhbW1vY2sgc2xvd2x5IHRvIG1ha2Ugc3VyZSBpdCBoYW5ncyBzZWN1cmVseS4nLFxuICAgIHRpcDE6ICdVViBEYW1hZ2U6IFVWIGRhbWFnZSBjYW4gbWFrZSB0aGUgaGFtbW9jayBmYWRlIGluIGNvbG9yIGFuZCB3ZWFrZW4gdGhlIGZhYnJpYyB3aGljaCBsZWFkcyB0byB0ZWFyaW5nLiBXZSByZWNvbW1lbmQgd2hlbiB0aGUgaGFtbW9jayBpcyBub3QgaW4gdXNlOyBwYWNrIGl0IGluIGl0cyBzYWNrIGFuZCBzdG9yZSBzb21ld2hlcmUgZHJ5IGFuZCBjb29sLidcbiAgfSwge1xuICAgIHF1ZXN0aW9uOiAnRG9lcyB0aGUgaGFtbW9jayBjb21lIHdpdGggc3RyYXBzPycsXG4gICAgYW5zd2VyOiAnT3VyIGhhbW1vY2sgcGFja2FnZSBjb21lcyB3aXRoIGV2ZXJ5dGhpbmcgeW91IG5lZWQgZm9yIGEgZ3JlYXQgaGFtbW9jayBleHBlcmllbmNlLiBXZSB1c2UgZW5kLXN0cmFwcyBpbnN0ZWFkIG9mIGtub3RlZCByb3BlIHRvIGF0dGFjaCB0byBvdXIgY2FyYWJpbmVycyBmb3IgdGhlaXIgcmVsaWFiaWxpdHkgYW5kIHN0cmVuZ3RoLiBUaGUgcGFja2FnZSBhbHNvIGNvbWVzIHdpdGggdHJlZS1zbGVldmVzLCB3aGljaCBoYXMgcHJlLWtub3RlZCByb3BlIGFuZCBlbmNhc2VkIGJ5IGEgbnlsb24gbWF0ZXJpYWwgc28gcHJvdGVjdCB0aGUgcm9wZSBmcm9tIGZyYXlpbmcuJ1xuICB9LCB7XG4gICAgcXVlc3Rpb246ICdXaWxsIEkgbmVlZCBzdHJhcHMgdG8gdXNlIHRoZSBoYW1tb2NrPycsXG4gICAgYW5zd2VyOiAnTm8sIHlvdSBub3QgbmVlZCBhbnkgZXh0cmEgc3RyYXBzIHRoZW4gd2hhdCB0aGUgaGFtbW9jayBwYWNrYWdlIGNvbWVzIHdpdGguJ1xuICB9LCB7XG4gICAgcXVlc3Rpb246ICdXaGF0IGlzIHRoZSBtYXhpbXVtIHdlaWdodCBjYXBhY2l0eSBvZiBvdXIgaGFtbW9ja3M/JyxcbiAgICBhbnN3ZXI6ICc4MDAgbGJzISdcbiAgfSwge1xuICAgIHF1ZXN0aW9uOiAnV2hhdCBhcmUgdGhlIGRpbWVuc2lvbnMgb2YgeW91ciBoYW1tb2Nrcz8nLFxuICAgIGFuc3dlcjogJ0RvdWJsZSBUcmFjayBoYW1tb2NrOiAxMCB4IDYuNSBmZWV0LidcbiAgfSwge1xuICAgIHF1ZXN0aW9uOiAnSG93IGhpZ2ggZG8gSSBuZWVkIHRvIGhhbmcgdGhlIGhhbW1vY2s/JyxcbiAgICBhbnN3ZXI6ICdIb3cgaGlnaCBkbyBJIG5lZWQgdG8gaGFuZyB0aGUgaGFtbW9jaz8nXG4gIH0sIHtcbiAgICBxdWVzdGlvbjogJ0ZvciBzZXQgdXAsIHdoYXQgaXMgdGhlIGJlc3QgbGVuZ3RoIHRvIGhhdmUgYmV0d2VlbiBlbmRzIG9mIHRoZSBoYW1tb2NrPycsXG4gICAgYW5zd2VyOiAnVGhlIGJlc3Qgc2V0IHVwIGlzIGFyb3VuZCAxMiBmZWV0IGZyb20gZW5kIHRvIGVuZC4nXG4gIH0sIHtcbiAgICBxdWVzdGlvbjogJ1doYXQgYXJlIHRoZSBNYWtlIFRyYWNrcyBoYW1tb2NrcyBtYWRlIG9mPycsXG4gICAgYW5zd2VyOiAnQWxsIG91ciBoYW1tb2NrcyBhcmUgbWFkZSBvZiBwb3JvdXMsIGJyZWF0aGFibGUgbnlsb24gdGFmZmV0YS4gVGhpcyBwb3JvdXMgcXVhbGl0eSBsZW5kcyBpdHNlbGYgdG8gYSBjb29sIGFuZCBjb21mb3J0YWJsZSBleHBlcmllbmNlLidcbiAgfSwge1xuICAgIHF1ZXN0aW9uOiAnV2lsbCBteSBkb2dzIG9yIGNhdHMgbmFpbHMgcHVuY3R1cmUgdGhlIGhhbW1vY2s/JyxcbiAgICBhbnN3ZXI6ICdJdCBpcyBkZWZpbml0ZWx5IHBvc3NpYmxlLCBiZSBjYXV0aW91cyEnXG4gIH0sIHtcbiAgICBxdWVzdGlvbjogJ0FyZSB5b3VyIGhhbW1vY2tzIHdhdGVycHJvb2Y/JyxcbiAgICBhbnN3ZXI6ICdNYWtlIFRyYWNrcyBoYW1tb2NrcyBhcmUgd2F0ZXIgcmVzaXN0YW50IG5vdCB3YXRlcnByb29mLidcbiAgfV1cblxuICB0aGlzLmdldEZhcXMgPSAoKSA9PiB7XG4gICAgbGV0IGZhcXMgPSB0aGlzLmZhcTtcbiAgICByZXR1cm4gZmFxcztcbiAgfVxuXG59KS8vZW5kIG9mIHNlcnZpY2U7XG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpLmRpcmVjdGl2ZSgnY3VzdG9tRm9vdGVyJywgKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9mb290ZXIuaHRtbCdcbiAgfTtcbn0pIC8vZW5kIG9mIG5hdmJhciBkaXJlY3RpdmVcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJykuZGlyZWN0aXZlKCduYXZiYXInLCAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL25hdmJhci5odG1sJ1xuICB9O1xufSkgLy9lbmQgb2YgbmF2YmFyIGRpcmVjdGl2ZVxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKVxuLmRpcmVjdGl2ZSgnc2xpZGVhYmxlJywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OidDJyxcbiAgICAgICAgY29tcGlsZTogZnVuY3Rpb24gKGVsZW1lbnQsIGF0dHIpIHtcbiAgICAgICAgICAgIC8vIHdyYXAgdGFnXG4gICAgICAgICAgICB2YXIgY29udGVudHMgPSBlbGVtZW50Lmh0bWwoKTtcbiAgICAgICAgICAgIGVsZW1lbnQuaHRtbCgnPGRpdiBjbGFzcz1cInNsaWRlYWJsZV9jb250ZW50XCIgc3R5bGU9XCJtYXJnaW46MCAhaW1wb3J0YW50OyBwYWRkaW5nOjAgIWltcG9ydGFudFwiID4nICsgY29udGVudHMgKyAnPC9kaXY+Jyk7XG5cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiBwb3N0TGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICAgICAgICAgICAvLyBkZWZhdWx0IHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICBhdHRycy5kdXJhdGlvbiA9ICghYXR0cnMuZHVyYXRpb24pID8gJzFzJyA6IGF0dHJzLmR1cmF0aW9uO1xuICAgICAgICAgICAgICAgIGF0dHJzLmVhc2luZyA9ICghYXR0cnMuZWFzaW5nKSA/ICdlYXNlLWluLW91dCcgOiBhdHRycy5lYXNpbmc7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAnb3ZlcmZsb3cnOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgJ2hlaWdodCc6ICcwcHgnLFxuICAgICAgICAgICAgICAgICAgICAndHJhbnNpdGlvblByb3BlcnR5JzogJ2hlaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uRHVyYXRpb24nOiBhdHRycy5kdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25UaW1pbmdGdW5jdGlvbic6IGF0dHJzLmVhc2luZ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG59KVxuLmRpcmVjdGl2ZSgnc2xpZGVUb2dnbGUnLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGF0dHJzLnNsaWRlVG9nZ2xlKTtcbiAgICAgICAgICAgIGF0dHJzLmV4cGFuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICBlbGVtZW50LmJpbmQoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSB0YXJnZXQucXVlcnlTZWxlY3RvcignLnNsaWRlYWJsZV9jb250ZW50Jyk7XG4gICAgICAgICAgICAgICAgaWYoIWF0dHJzLmV4cGFuZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCByZ2JhKDAsMCwwLDApJztcbiAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSBjb250ZW50LmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5ib3JkZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0geSArICdweCc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9ICcwcHgnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhdHRycy5leHBhbmRlZCA9ICFhdHRycy5leHBhbmRlZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=
