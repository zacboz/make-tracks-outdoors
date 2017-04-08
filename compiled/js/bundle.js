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
        name: 'The Sunrise',
        color: 'Orange/Grey',
        image: "../img/hammocks/sunrise.jpg",
        desc: 'Coming May 2017',
        id: 1,
        price: 35.97
    }, {
        name: 'The Geyser',
        color: 'Blue/ Light Blue',
        image: "../img/hammocks/bluehammock.jpg",
        desc: 'Coming May 2017',
        id: 2,
        price: 35.97
    }, {
        name: 'The Meadow',
        color: 'Lime Green/ Light Blue/ White',
        image: "../img/hammocks/meadowhammock.jpg",
        desc: 'Coming May 2017',
        id: 5,
        price: 35.97
    }];

    this.hammocks = [{
        name: 'The Sunrise',
        color: 'Orange/Grey',
        image: "../img/hammocks/sunrise.jpg",
        desc: 'Coming May 2017',
        id: 1,
        price: 35.97
    }, {
        name: 'The Geyser',
        color: 'Blue/ Light Blue',
        image: "../img/hammocks/bluehammock.jpg",
        desc: 'Coming May 2017',
        id: 2,
        price: 35.97
    }, {
        name: 'The Woodland',
        color: 'Forrest Green/Grey',
        image: "../img/hammocks/greenhammock.jpg",
        desc: 'Coming May 2017',
        id: 3,
        price: 35.97
    }, {
        name: 'The Summit',
        color: 'Charcoal/Maroon',
        image: "../img/hammocks/summit.jpg",
        desc: 'Coming May 2017',
        id: 4,
        price: 35.97
    }, {
        name: 'The Meadow',
        color: 'Lime Green/ Light Blue/ White',
        image: "../img/hammocks/meadowhammock.jpg",
        desc: 'Coming May 2017',
        id: 5,
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbnRyb2xsZXJzL2ZhcUN0cmwuanMiLCJjb250cm9sbGVycy9oYW1tb2NrQ3RybC5qcyIsImNvbnRyb2xsZXJzL2hvbWVDdHJsLmpzIiwiZGlyZWN0aXZlcy9mb290ZXIuanMiLCJkaXJlY3RpdmVzL25hdmJhci5qcyIsImRpcmVjdGl2ZXMvc2xpZGVhYmxlLmpzIiwic2VydmljZXMvaGFtbW9ja1NydmMuanMiLCJzZXJ2aWNlcy9vdXRwb3N0U3J2Yy5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCJzdGF0ZSIsInVybCIsInRlbXBsYXRlVXJsIiwiY29udHJvbGxlciIsIm90aGVyd2lzZSIsIiRzY29wZSIsIm91dHBvc3RTcnZjIiwiJHN0YXRlUGFyYW1zIiwiZmFxcyIsImdldEZhcXMiLCJjb25zb2xlIiwibG9nIiwiaGFtbW9ja1NydmMiLCJoYW1tb2NrcyIsImdldEhhbW1vY2tzIiwiYmVzdFNlbGxlcnMiLCJnZXRCZXN0U2VsbGVycyIsImRpcmVjdGl2ZSIsInJlc3RyaWN0IiwiY29tcGlsZSIsImVsZW1lbnQiLCJhdHRyIiwiY29udGVudHMiLCJodG1sIiwicG9zdExpbmsiLCJzY29wZSIsImF0dHJzIiwiZHVyYXRpb24iLCJlYXNpbmciLCJjc3MiLCJsaW5rIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2xpZGVUb2dnbGUiLCJleHBhbmRlZCIsImJpbmQiLCJjb250ZW50Iiwic3R5bGUiLCJib3JkZXIiLCJ5IiwiY2xpZW50SGVpZ2h0IiwiaGVpZ2h0Iiwic2VydmljZSIsIm5hbWUiLCJjb2xvciIsImltYWdlIiwiZGVzYyIsImlkIiwicHJpY2UiLCJmYXEiLCJxdWVzdGlvbiIsImFuc3dlciIsInRpcDEiLCJ0aXAyIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxRQUFRQyxNQUFSLENBQWUsWUFBZixFQUE2QixDQUFDLFdBQUQsQ0FBN0IsRUFDR0MsTUFESCxDQUNVLFVBQVNDLGNBQVQsRUFBeUJDLGtCQUF6QixFQUE0Qzs7QUFFbERELG1CQUNHRSxLQURILENBQ1MsTUFEVCxFQUNnQjtBQUNWQyxhQUFJLEdBRE07QUFFVkMscUJBQWEsbUJBRkg7QUFHVkMsb0JBQVk7QUFIRixLQURoQixFQU1HSCxLQU5ILENBTVMsT0FOVCxFQU1pQjtBQUNYQyxhQUFJLFFBRE87QUFFWEMscUJBQWE7QUFGRixLQU5qQixFQVVHRixLQVZILENBVVMsVUFWVCxFQVVvQjtBQUNkQyxhQUFJLFdBRFU7QUFFZEMscUJBQWEsdUJBRkM7QUFHZEMsb0JBQVk7QUFIRSxLQVZwQixFQWVHSCxLQWZILENBZVMsU0FmVCxFQWVtQjtBQUNiQyxhQUFJLFVBRFM7QUFFYkMscUJBQWE7QUFGQSxLQWZuQixFQW1CR0YsS0FuQkgsQ0FtQlMsYUFuQlQsRUFtQnVCO0FBQ2pCQyxhQUFJLE1BRGE7QUFFakJDLHFCQUFhLGtCQUZJO0FBR2pCQyxvQkFBWTtBQUhLLEtBbkJ2QixFQXdCR0gsS0F4QkgsQ0F3QlMsaUJBeEJULEVBd0IyQjtBQUNyQkMsYUFBSSxVQURpQjtBQUVyQkMscUJBQWE7QUFGUSxLQXhCM0IsRUE0QkdGLEtBNUJILENBNEJTLGdCQTVCVCxFQTRCMEI7QUFDcEJDLGFBQUksU0FEZ0I7QUFFcEJDLHFCQUFhO0FBRk8sS0E1QjFCLEVBZ0NHRixLQWhDSCxDQWdDUyxTQWhDVCxFQWdDbUI7QUFDYkMsYUFBSSxVQURTO0FBRWJDLHFCQUFhO0FBRkEsS0FoQ25CLEVBb0NHRixLQXBDSCxDQW9DUyxNQXBDVCxFQW9DZ0I7QUFDVkMsYUFBSSxPQURNO0FBRVZDLHFCQUFhLG1CQUZIO0FBR1ZDLG9CQUFZO0FBSEYsS0FwQ2hCOztBQTBDRkosdUJBQ0tLLFNBREwsQ0FDZSxHQURmO0FBSUQsQ0FqREQ7OztBQ0FBVCxRQUFRQyxNQUFSLENBQWUsWUFBZixFQUE2Qk8sVUFBN0IsQ0FBd0MsU0FBeEMsRUFBbUQsVUFBQ0UsTUFBRCxFQUFTQyxXQUFULEVBQXNCQyxZQUF0QixFQUF1Qzs7QUFFeEZGLFNBQU9HLElBQVAsR0FBY0YsWUFBWUcsT0FBWixFQUFkO0FBQ0FDLFVBQVFDLEdBQVIsQ0FBWU4sT0FBT0csSUFBbkI7O0FBRUE7QUFDQTtBQUNBO0FBRUQsQ0FURCxHQVNFOzs7QUNURmIsUUFBUUMsTUFBUixDQUFlLFlBQWYsRUFBNkJPLFVBQTdCLENBQXdDLGFBQXhDLEVBQXVELFVBQUNFLE1BQUQsRUFBU08sV0FBVCxFQUFzQkwsWUFBdEIsRUFBdUM7O0FBRTVGRixTQUFPUSxRQUFQLEdBQWtCRCxZQUFZRSxXQUFaLEVBQWxCO0FBQ0FKLFVBQVFDLEdBQVIsQ0FBWU4sT0FBT1EsUUFBbkI7QUFFRCxDQUxELEdBS0U7OztBQ0xGbEIsUUFBUUMsTUFBUixDQUFlLFlBQWYsRUFBNkJPLFVBQTdCLENBQXdDLFVBQXhDLEVBQW9ELFVBQUNFLE1BQUQsRUFBU08sV0FBVCxFQUFzQkwsWUFBdEIsRUFBdUM7O0FBRXpGRixTQUFPVSxXQUFQLEdBQXFCSCxZQUFZSSxjQUFaLEVBQXJCO0FBQ0FOLFVBQVFDLEdBQVIsQ0FBWU4sT0FBT1UsV0FBbkI7QUFFRCxDQUxELEdBS0U7OztBQ0xGcEIsUUFBUUMsTUFBUixDQUFlLFlBQWYsRUFBNkJxQixTQUE3QixDQUF1QyxjQUF2QyxFQUF1RCxZQUFNO0FBQzNELFNBQU87QUFDTGYsaUJBQWE7QUFEUixHQUFQO0FBR0QsQ0FKRCxHQUlHOzs7QUNKSFAsUUFBUUMsTUFBUixDQUFlLFlBQWYsRUFBNkJxQixTQUE3QixDQUF1QyxRQUF2QyxFQUFpRCxZQUFNO0FBQ3JELFNBQU87QUFDTGYsaUJBQWE7QUFEUixHQUFQO0FBR0QsQ0FKRCxHQUlHOzs7QUNKSFAsUUFBUUMsTUFBUixDQUFlLFlBQWYsRUFDQ3FCLFNBREQsQ0FDVyxXQURYLEVBQ3dCLFlBQVk7QUFDaEMsV0FBTztBQUNIQyxrQkFBUyxHQUROO0FBRUhDLGlCQUFTLGlCQUFVQyxPQUFWLEVBQW1CQyxJQUFuQixFQUF5QjtBQUM5QjtBQUNBLGdCQUFJQyxXQUFXRixRQUFRRyxJQUFSLEVBQWY7QUFDQUgsb0JBQVFHLElBQVIsQ0FBYSx1RkFBdUZELFFBQXZGLEdBQWtHLFFBQS9HOztBQUVBLG1CQUFPLFNBQVNFLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCTCxPQUF6QixFQUFrQ00sS0FBbEMsRUFBeUM7QUFDNUM7QUFDQUEsc0JBQU1DLFFBQU4sR0FBa0IsQ0FBQ0QsTUFBTUMsUUFBUixHQUFvQixJQUFwQixHQUEyQkQsTUFBTUMsUUFBbEQ7QUFDQUQsc0JBQU1FLE1BQU4sR0FBZ0IsQ0FBQ0YsTUFBTUUsTUFBUixHQUFrQixhQUFsQixHQUFrQ0YsTUFBTUUsTUFBdkQ7QUFDQVIsd0JBQVFTLEdBQVIsQ0FBWTtBQUNSLGdDQUFZLFFBREo7QUFFUiw4QkFBVSxLQUZGO0FBR1IsMENBQXNCLFFBSGQ7QUFJUiwwQ0FBc0JILE1BQU1DLFFBSnBCO0FBS1IsZ0RBQTRCRCxNQUFNRTtBQUwxQixpQkFBWjtBQU9ILGFBWEQ7QUFZSDtBQW5CRSxLQUFQO0FBcUJILENBdkJELEVBd0JDWCxTQXhCRCxDQXdCVyxhQXhCWCxFQXdCMEIsWUFBVztBQUNqQyxXQUFPO0FBQ0hDLGtCQUFVLEdBRFA7QUFFSFksY0FBTSxjQUFTTCxLQUFULEVBQWdCTCxPQUFoQixFQUF5Qk0sS0FBekIsRUFBZ0M7QUFDbEMsZ0JBQUlLLFNBQVNDLFNBQVNDLGFBQVQsQ0FBdUJQLE1BQU1RLFdBQTdCLENBQWI7QUFDQVIsa0JBQU1TLFFBQU4sR0FBaUIsS0FBakI7QUFDQWYsb0JBQVFnQixJQUFSLENBQWEsT0FBYixFQUFzQixZQUFXO0FBQzdCLG9CQUFJQyxVQUFVTixPQUFPRSxhQUFQLENBQXFCLG9CQUFyQixDQUFkO0FBQ0Esb0JBQUcsQ0FBQ1AsTUFBTVMsUUFBVixFQUFvQjtBQUNoQkUsNEJBQVFDLEtBQVIsQ0FBY0MsTUFBZCxHQUF1Qix5QkFBdkI7QUFDQSx3QkFBSUMsSUFBSUgsUUFBUUksWUFBaEI7QUFDQUosNEJBQVFDLEtBQVIsQ0FBY0MsTUFBZCxHQUF1QixDQUF2QjtBQUNBUiwyQkFBT08sS0FBUCxDQUFhSSxNQUFiLEdBQXNCRixJQUFJLElBQTFCO0FBQ0gsaUJBTEQsTUFLTztBQUNIVCwyQkFBT08sS0FBUCxDQUFhSSxNQUFiLEdBQXNCLEtBQXRCO0FBQ0g7QUFDRGhCLHNCQUFNUyxRQUFOLEdBQWlCLENBQUNULE1BQU1TLFFBQXhCO0FBQ0gsYUFYRDtBQVlIO0FBakJFLEtBQVA7QUFtQkgsQ0E1Q0Q7OztBQ0FBeEMsUUFBUUMsTUFBUixDQUFlLFlBQWYsRUFBNkIrQyxPQUE3QixDQUFxQyxhQUFyQyxFQUFvRCxZQUFVO0FBQUE7O0FBRzVELFNBQUs1QixXQUFMLEdBQW1CLENBQUM7QUFDZDZCLGNBQU0sYUFEUTtBQUVkQyxlQUFPLGFBRk87QUFHZEMsZUFBTyw2QkFITztBQUlkQyxjQUFNLGlCQUpRO0FBS2RDLFlBQUksQ0FMVTtBQU1kQyxlQUFPO0FBTk8sS0FBRCxFQU9kO0FBQ0NMLGNBQU0sWUFEUDtBQUVDQyxlQUFPLGtCQUZSO0FBR0NDLGVBQU8saUNBSFI7QUFJQ0MsY0FBTSxpQkFKUDtBQUtDQyxZQUFJLENBTEw7QUFNQ0MsZUFBTztBQU5SLEtBUGMsRUFjZjtBQUNFTCxjQUFNLFlBRFI7QUFFRUMsZUFBTywrQkFGVDtBQUdFQyxlQUFPLG1DQUhUO0FBSUVDLGNBQU0saUJBSlI7QUFLRUMsWUFBSSxDQUxOO0FBTUVDLGVBQU87QUFOVCxLQWRlLENBQW5COztBQXVCQSxTQUFLcEMsUUFBTCxHQUFnQixDQUFDO0FBQ1grQixjQUFNLGFBREs7QUFFWEMsZUFBTyxhQUZJO0FBR1hDLGVBQU8sNkJBSEk7QUFJWEMsY0FBTSxpQkFKSztBQUtYQyxZQUFJLENBTE87QUFNWEMsZUFBTztBQU5JLEtBQUQsRUFPWDtBQUNDTCxjQUFNLFlBRFA7QUFFQ0MsZUFBTyxrQkFGUjtBQUdDQyxlQUFPLGlDQUhSO0FBSUNDLGNBQU0saUJBSlA7QUFLQ0MsWUFBSSxDQUxMO0FBTUNDLGVBQU87QUFOUixLQVBXLEVBY1o7QUFDRUwsY0FBTSxjQURSO0FBRUVDLGVBQU8sb0JBRlQ7QUFHRUMsZUFBTyxrQ0FIVDtBQUlFQyxjQUFNLGlCQUpSO0FBS0VDLFlBQUksQ0FMTjtBQU1FQyxlQUFPO0FBTlQsS0FkWSxFQXFCWjtBQUNFTCxjQUFNLFlBRFI7QUFFRUMsZUFBTyxpQkFGVDtBQUdFQyxlQUFPLDRCQUhUO0FBSUVDLGNBQU0saUJBSlI7QUFLRUMsWUFBSSxDQUxOO0FBTUVDLGVBQU87QUFOVCxLQXJCWSxFQTRCWjtBQUNFTCxjQUFNLFlBRFI7QUFFRUMsZUFBTywrQkFGVDtBQUdFQyxlQUFPLG1DQUhUO0FBSUVDLGNBQU0saUJBSlI7QUFLRUMsWUFBSSxDQUxOO0FBTUVDLGVBQU87QUFOVCxLQTVCWSxDQUFoQjs7QUFxQ0UsU0FBS2pDLGNBQUwsR0FBc0IsWUFBTTtBQUMxQixZQUFJRCxjQUFjLE1BQUtBLFdBQXZCO0FBQ0EsZUFBT0EsV0FBUDtBQUNELEtBSEQ7O0FBS0EsU0FBS0QsV0FBTCxHQUFtQixZQUFNO0FBQ3ZCLFlBQUlELFdBQVcsTUFBS0EsUUFBcEI7QUFDQSxlQUFPQSxRQUFQO0FBQ0QsS0FIRDtBQVFILENBNUVELEdBNEVFOzs7QUM1RUZsQixRQUFRQyxNQUFSLENBQWUsWUFBZixFQUE2QitDLE9BQTdCLENBQXFDLGFBQXJDLEVBQW9ELFlBQVU7QUFBQTs7QUFFNUQsT0FBS08sR0FBTCxHQUFXLENBQUM7QUFDVkMsY0FBVSx1REFEQTtBQUVWQyxZQUFRO0FBRkUsR0FBRCxFQUdSO0FBQ0RELGNBQVUsdUNBRFQ7QUFFREMsWUFBUSw0R0FGUDtBQUdEQyxVQUFNLHNLQUhMO0FBSURDLFVBQU07QUFKTCxHQUhRLEVBUVQ7QUFDQUgsY0FBVSwyQ0FEVjtBQUVBQyxZQUFRLDhKQUZSO0FBR0FDLFVBQU07QUFITixHQVJTLEVBWVI7QUFDREYsY0FBVSxvQ0FEVDtBQUVEQyxZQUFRO0FBRlAsR0FaUSxFQWVSO0FBQ0RELGNBQVUsd0NBRFQ7QUFFREMsWUFBUTtBQUZQLEdBZlEsRUFrQlI7QUFDREQsY0FBVSxzREFEVDtBQUVEQyxZQUFRO0FBRlAsR0FsQlEsRUFxQlI7QUFDREQsY0FBVSwyQ0FEVDtBQUVEQyxZQUFRO0FBRlAsR0FyQlEsRUF3QlI7QUFDREQsY0FBVSx5Q0FEVDtBQUVEQyxZQUFRO0FBRlAsR0F4QlEsRUEyQlI7QUFDREQsY0FBVSwwRUFEVDtBQUVEQyxZQUFRO0FBRlAsR0EzQlEsRUE4QlI7QUFDREQsY0FBVSw0Q0FEVDtBQUVEQyxZQUFRO0FBRlAsR0E5QlEsRUFpQ1I7QUFDREQsY0FBVSxrREFEVDtBQUVEQyxZQUFRO0FBRlAsR0FqQ1EsRUFvQ1I7QUFDREQsY0FBVSwrQkFEVDtBQUVEQyxZQUFRO0FBRlAsR0FwQ1EsQ0FBWDs7QUF5Q0EsT0FBSzNDLE9BQUwsR0FBZSxZQUFNO0FBQ25CLFFBQUlELE9BQU8sTUFBSzBDLEdBQWhCO0FBQ0EsV0FBTzFDLElBQVA7QUFDRCxHQUhEO0FBS0QsQ0FoREQsR0FnREUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnLCBbJ3VpLnJvdXRlciddKVxuICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpe1xuXG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgnaG9tZScse1xuICAgICAgICAgIHVybDonLycsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6IFwiLi92aWV3cy9ob21lLmh0bWxcIixcbiAgICAgICAgICBjb250cm9sbGVyOiAnaG9tZUN0cmwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdzdG9yeScse1xuICAgICAgICAgIHVybDonL3N0b3J5JyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3Mvc3RvcnkuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2hhbW1vY2tzJyx7XG4gICAgICAgICAgdXJsOicvaGFtbW9ja3MnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9oYW1tb2Nrcy5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnaGFtbW9ja0N0cmwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdvdXRwb3N0Jyx7XG4gICAgICAgICAgdXJsOicvb3V0cG9zdCcsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL291dHBvc3QuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ291dHBvc3QuZmFxJyx7XG4gICAgICAgICAgdXJsOicvZmFxJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvZmFxLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdmYXFDdHJsJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnb3V0cG9zdC5yZWZ1bmRzJyx7XG4gICAgICAgICAgdXJsOicvcmVmdW5kcycsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL3JlZnVuZHMuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ291dHBvc3QudmlkZW9zJyx7XG4gICAgICAgICAgdXJsOicvdmlkZW9zJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvdmlkZW9zLmh0bWwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdjb250YWN0Jyx7XG4gICAgICAgICAgdXJsOicvY29udGFjdCcsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2NvbnRhY3QuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2pvaW4nLHtcbiAgICAgICAgICB1cmw6Jy9qb2luJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3Mvam9pbi5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnam9pbkN0cmwnXG4gICAgICB9KTtcblxuICAkdXJsUm91dGVyUHJvdmlkZXJcbiAgICAgIC5vdGhlcndpc2UoJy8nKTtcblxuXG59KTtcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJykuY29udHJvbGxlcignZmFxQ3RybCcsICgkc2NvcGUsIG91dHBvc3RTcnZjLCAkc3RhdGVQYXJhbXMpID0+IHtcblxuICAkc2NvcGUuZmFxcyA9IG91dHBvc3RTcnZjLmdldEZhcXMoKTtcbiAgY29uc29sZS5sb2coJHNjb3BlLmZhcXMpO1xuXG4gIC8vICQoJy5xdWVzdGlvbicpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgLy8gICAkKHRoaXMpLm5leHQoJy5vcGVuJykuc2xpZGVUb2dnbGUoKTtcbiAgLy8gfSk7XG5cbn0pLy9lbmQgb2YgY29udHJvbGxlclxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5jb250cm9sbGVyKCdoYW1tb2NrQ3RybCcsICgkc2NvcGUsIGhhbW1vY2tTcnZjLCAkc3RhdGVQYXJhbXMpID0+IHtcblxuICAkc2NvcGUuaGFtbW9ja3MgPSBoYW1tb2NrU3J2Yy5nZXRIYW1tb2NrcygpO1xuICBjb25zb2xlLmxvZygkc2NvcGUuaGFtbW9ja3MpO1xuXG59KS8vZW5kIG9mIGhvbWUgY29udHJvbGxlclxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5jb250cm9sbGVyKCdob21lQ3RybCcsICgkc2NvcGUsIGhhbW1vY2tTcnZjLCAkc3RhdGVQYXJhbXMpID0+IHtcblxuICAkc2NvcGUuYmVzdFNlbGxlcnMgPSBoYW1tb2NrU3J2Yy5nZXRCZXN0U2VsbGVycygpO1xuICBjb25zb2xlLmxvZygkc2NvcGUuYmVzdFNlbGxlcnMpO1xuXG59KS8vZW5kIG9mIGhvbWUgY29udHJvbGxlclxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5kaXJlY3RpdmUoJ2N1c3RvbUZvb3RlcicsICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvZm9vdGVyLmh0bWwnXG4gIH07XG59KSAvL2VuZCBvZiBuYXZiYXIgZGlyZWN0aXZlXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpLmRpcmVjdGl2ZSgnbmF2YmFyJywgKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9uYXZiYXIuaHRtbCdcbiAgfTtcbn0pIC8vZW5kIG9mIG5hdmJhciBkaXJlY3RpdmVcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJylcbi5kaXJlY3RpdmUoJ3NsaWRlYWJsZScsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByZXN0cmljdDonQycsXG4gICAgICAgIGNvbXBpbGU6IGZ1bmN0aW9uIChlbGVtZW50LCBhdHRyKSB7XG4gICAgICAgICAgICAvLyB3cmFwIHRhZ1xuICAgICAgICAgICAgdmFyIGNvbnRlbnRzID0gZWxlbWVudC5odG1sKCk7XG4gICAgICAgICAgICBlbGVtZW50Lmh0bWwoJzxkaXYgY2xhc3M9XCJzbGlkZWFibGVfY29udGVudFwiIHN0eWxlPVwibWFyZ2luOjAgIWltcG9ydGFudDsgcGFkZGluZzowICFpbXBvcnRhbnRcIiA+JyArIGNvbnRlbnRzICsgJzwvZGl2PicpO1xuXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gcG9zdExpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAgICAgICAgICAgLy8gZGVmYXVsdCBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgYXR0cnMuZHVyYXRpb24gPSAoIWF0dHJzLmR1cmF0aW9uKSA/ICcxcycgOiBhdHRycy5kdXJhdGlvbjtcbiAgICAgICAgICAgICAgICBhdHRycy5lYXNpbmcgPSAoIWF0dHJzLmVhc2luZykgPyAnZWFzZS1pbi1vdXQnIDogYXR0cnMuZWFzaW5nO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ292ZXJmbG93JzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgICdoZWlnaHQnOiAnMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25Qcm9wZXJ0eSc6ICdoZWlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAndHJhbnNpdGlvbkR1cmF0aW9uJzogYXR0cnMuZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24nOiBhdHRycy5lYXNpbmdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9O1xufSlcbi5kaXJlY3RpdmUoJ3NsaWRlVG9nZ2xlJywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhdHRycy5zbGlkZVRvZ2dsZSk7XG4gICAgICAgICAgICBhdHRycy5leHBhbmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgZWxlbWVudC5iaW5kKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBjb250ZW50ID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZWFibGVfY29udGVudCcpO1xuICAgICAgICAgICAgICAgIGlmKCFhdHRycy5leHBhbmRlZCkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgcmdiYSgwLDAsMCwwKSc7XG4gICAgICAgICAgICAgICAgICAgIHZhciB5ID0gY29udGVudC5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUuYm9yZGVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IHkgKyAncHgnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSAnMHB4JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXR0cnMuZXhwYW5kZWQgPSAhYXR0cnMuZXhwYW5kZWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5zZXJ2aWNlKCdoYW1tb2NrU3J2YycsIGZ1bmN0aW9uKCl7XG5cblxuICB0aGlzLmJlc3RTZWxsZXJzID0gW3tcbiAgICAgICAgbmFtZTogJ1RoZSBTdW5yaXNlJyxcbiAgICAgICAgY29sb3I6ICdPcmFuZ2UvR3JleScsXG4gICAgICAgIGltYWdlOiBcIi4uL2ltZy9oYW1tb2Nrcy9zdW5yaXNlLmpwZ1wiLFxuICAgICAgICBkZXNjOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIHByaWNlOiAzNS45N1xuICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ1RoZSBHZXlzZXInLFxuICAgICAgICBjb2xvcjogJ0JsdWUvIExpZ2h0IEJsdWUnLFxuICAgICAgICBpbWFnZTogXCIuLi9pbWcvaGFtbW9ja3MvYmx1ZWhhbW1vY2suanBnXCIsXG4gICAgICAgIGRlc2M6ICdDb21pbmcgTWF5IDIwMTcnLFxuICAgICAgICBpZDogMixcbiAgICAgICAgcHJpY2U6IDM1Ljk3XG4gICAgfSx7XG4gICAgICAgIG5hbWU6ICdUaGUgTWVhZG93JyxcbiAgICAgICAgY29sb3I6ICdMaW1lIEdyZWVuLyBMaWdodCBCbHVlLyBXaGl0ZScsXG4gICAgICAgIGltYWdlOiBcIi4uL2ltZy9oYW1tb2Nrcy9tZWFkb3doYW1tb2NrLmpwZ1wiLFxuICAgICAgICBkZXNjOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgaWQ6IDUsXG4gICAgICAgIHByaWNlOiAzNS45N1xuICAgIH1dXG5cbiAgdGhpcy5oYW1tb2NrcyA9IFt7XG4gICAgICAgIG5hbWU6ICdUaGUgU3VucmlzZScsXG4gICAgICAgIGNvbG9yOiAnT3JhbmdlL0dyZXknLFxuICAgICAgICBpbWFnZTogXCIuLi9pbWcvaGFtbW9ja3Mvc3VucmlzZS5qcGdcIixcbiAgICAgICAgZGVzYzogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGlkOiAxLFxuICAgICAgICBwcmljZTogMzUuOTdcbiAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdUaGUgR2V5c2VyJyxcbiAgICAgICAgY29sb3I6ICdCbHVlLyBMaWdodCBCbHVlJyxcbiAgICAgICAgaW1hZ2U6IFwiLi4vaW1nL2hhbW1vY2tzL2JsdWVoYW1tb2NrLmpwZ1wiLFxuICAgICAgICBkZXNjOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIHByaWNlOiAzNS45N1xuICAgIH0se1xuICAgICAgICBuYW1lOiAnVGhlIFdvb2RsYW5kJyxcbiAgICAgICAgY29sb3I6ICdGb3JyZXN0IEdyZWVuL0dyZXknLFxuICAgICAgICBpbWFnZTogXCIuLi9pbWcvaGFtbW9ja3MvZ3JlZW5oYW1tb2NrLmpwZ1wiLFxuICAgICAgICBkZXNjOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIHByaWNlOiAzNS45N1xuICAgIH0se1xuICAgICAgICBuYW1lOiAnVGhlIFN1bW1pdCcsXG4gICAgICAgIGNvbG9yOiAnQ2hhcmNvYWwvTWFyb29uJyxcbiAgICAgICAgaW1hZ2U6IFwiLi4vaW1nL2hhbW1vY2tzL3N1bW1pdC5qcGdcIixcbiAgICAgICAgZGVzYzogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGlkOiA0LFxuICAgICAgICBwcmljZTogMzUuOTdcbiAgICB9LHtcbiAgICAgICAgbmFtZTogJ1RoZSBNZWFkb3cnLFxuICAgICAgICBjb2xvcjogJ0xpbWUgR3JlZW4vIExpZ2h0IEJsdWUvIFdoaXRlJyxcbiAgICAgICAgaW1hZ2U6IFwiLi4vaW1nL2hhbW1vY2tzL21lYWRvd2hhbW1vY2suanBnXCIsXG4gICAgICAgIGRlc2M6ICdDb21pbmcgTWF5IDIwMTcnLFxuICAgICAgICBpZDogNSxcbiAgICAgICAgcHJpY2U6IDM1Ljk3XG4gICAgfV1cblxuICAgIHRoaXMuZ2V0QmVzdFNlbGxlcnMgPSAoKSA9PiB7XG4gICAgICBsZXQgYmVzdFNlbGxlcnMgPSB0aGlzLmJlc3RTZWxsZXJzO1xuICAgICAgcmV0dXJuIGJlc3RTZWxsZXJzO1xuICAgIH1cblxuICAgIHRoaXMuZ2V0SGFtbW9ja3MgPSAoKSA9PiB7XG4gICAgICBsZXQgaGFtbW9ja3MgPSB0aGlzLmhhbW1vY2tzO1xuICAgICAgcmV0dXJuIGhhbW1vY2tzO1xuICAgIH1cblxuXG5cblxufSkvL2VuZCBvZiBzZXJ2aWNlXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpLnNlcnZpY2UoJ291dHBvc3RTcnZjJywgZnVuY3Rpb24oKXtcblxuICB0aGlzLmZhcSA9IFt7XG4gICAgcXVlc3Rpb246ICdXYW50aW5nIHRvIGJ1eSBhIGhhbW1vY2s/IEhlcmUgaXMgaG93IHRvIGdldCBzdGFydGVkPycsXG4gICAgYW5zd2VyOiAnT3VyIGdvYWwgaXMgdG8gbWFrZSBvdXIgaGFtbW9ja3MgYXMgaGFzc2xlIGZyZWUgYXMgcG9zc2libGUuIEFsbCBvZiBvdXIgaGFtbW9ja3MgY29tZSB3aXRoIGVuZC1zdHJhcHMgZm9yIGV4dHJhIHN0cmVuZ3RoIGFuZCBkdXJhYmlsaXR5IHNvIG91ciBjdXN0b21lcnMgbmV2ZXIgaGF2ZSB0byB3b3JyeSBhYm91dCB0aGVpciBrbm90cyBjb21pbmcgdW5kb25lLiBXZSBhbHNvIHByb3ZpZGUgdHJlZSBzbGVldmVzIHdpdGggcHJlLXRpZWQga25vdHMgdG8gcHJvdGVjdCBmcm9tIGZyYXkgYW5kIHByb3ZpZGUgZXZlbiBleHRyYSBkdXJhYmlsaXR5LiBPdXIgY3VzdG9tZXIgbmV2ZXIgaGF2ZSB0byB0aWUgdGhlaXIgb3duIGtub3RzISBFYWNoIGhhbW1vY2sgYWxzbyBjb21lcyB3aXRoIGEgc2V0IG9mIGFsdW1pbnVtIHdpcmUtZ2F0ZSBjYXJhYmluZXJzIHRoYXQgd29yayB3aXRoIG91ciBzdXNwZW5zaW9uIHN5c3RlbS4gQWxsIHlvdSBuZWVkIHRvIGRvIG5vdyBpcyBjaG9vc2UgeW91ciBvZiBoYW1tb2NrLidcbiAgfSwge1xuICAgIHF1ZXN0aW9uOiAnSG93IGRvIEkgd2FzaCBteSBNYWtlIFRyYWNrcyBoYW1tb2NrPycsXG4gICAgYW5zd2VyOiAnWW91IGNhbiBtYWNoaW5lIHdhc2ggb3IgaGFuZCB3YXNoIHlvdXIgaGFtbW9jay4gKE5PVEU6IERvIG5vdCBwdXQgdGhlIGhhbW1vY2sgaW4gdGhlIGRyeWVyISBBaXIgZHJ5IG9ubHkhKScsXG4gICAgdGlwMTogJ01hY2hpbmUgV2FzaDogRmlyc3QsIHJlbW92ZSB0aGUgdGhlIGNhcmFiaW5lcnMgdGhlbiB3YXNoIG9uIGNvb2wgaW4gYSBmcm9udCBsb2FkIHdhc2hlciBvbiB0aGUgZGVsaWNhdGUgY3ljbGUgc2V0aW5nIHVzaW5nIGEgbWlsZCBkZXRlcmdlbnQuIERvIG5vdCB1bnRpZSBhbnkga25vdHMhJyxcbiAgICB0aXAyOiAnSGFuZCBXYXNoOiBXZSByZWNvbW1lbmQgdXNpbmcgYSBjbG90aCB3aXRoIHNvYXAgb3IgbWlsZCBkZXRlcmdlbnQuJ1xuICB9LHtcbiAgICBxdWVzdGlvbjogJ0hvdyBkbyBJIGNhcmUgZm9yIG15IE1ha2UgVHJhY2tzIGhhbW1vY2s/JyxcbiAgICBhbnN3ZXI6ICdTYWZldHk6IEluIHNldCB1cCwgaW5zdXJlIHRoYXQgeW91ciBzdHJhcHMgYXJlIHNlY3VyZWx5IHdyYXBwZWQgYW5kIHRoZSBjYXJhYmluZXJzIGFyZSBjbG9zZWQuIEVhc2UgaW50byB5b3VyIGhhbW1vY2sgc2xvd2x5IHRvIG1ha2Ugc3VyZSBpdCBoYW5ncyBzZWN1cmVseS4nLFxuICAgIHRpcDE6ICdVViBEYW1hZ2U6IFVWIGRhbWFnZSBjYW4gbWFrZSB0aGUgaGFtbW9jayBmYWRlIGluIGNvbG9yIGFuZCB3ZWFrZW4gdGhlIGZhYnJpYyB3aGljaCBsZWFkcyB0byB0ZWFyaW5nLiBXZSByZWNvbW1lbmQgd2hlbiB0aGUgaGFtbW9jayBpcyBub3QgaW4gdXNlOyBwYWNrIGl0IGluIGl0cyBzYWNrIGFuZCBzdG9yZSBzb21ld2hlcmUgZHJ5IGFuZCBjb29sLidcbiAgfSwge1xuICAgIHF1ZXN0aW9uOiAnRG9lcyB0aGUgaGFtbW9jayBjb21lIHdpdGggc3RyYXBzPycsXG4gICAgYW5zd2VyOiAnT3VyIGhhbW1vY2sgcGFja2FnZSBjb21lcyB3aXRoIGV2ZXJ5dGhpbmcgeW91IG5lZWQgZm9yIGEgZ3JlYXQgaGFtbW9jayBleHBlcmllbmNlLiBXZSB1c2UgZW5kLXN0cmFwcyBpbnN0ZWFkIG9mIGtub3RlZCByb3BlIHRvIGF0dGFjaCB0byBvdXIgY2FyYWJpbmVycyBmb3IgdGhlaXIgcmVsaWFiaWxpdHkgYW5kIHN0cmVuZ3RoLiBUaGUgcGFja2FnZSBhbHNvIGNvbWVzIHdpdGggdHJlZS1zbGVldmVzLCB3aGljaCBoYXMgcHJlLWtub3RlZCByb3BlIGFuZCBlbmNhc2VkIGJ5IGEgbnlsb24gbWF0ZXJpYWwgc28gcHJvdGVjdCB0aGUgcm9wZSBmcm9tIGZyYXlpbmcuJ1xuICB9LCB7XG4gICAgcXVlc3Rpb246ICdXaWxsIEkgbmVlZCBzdHJhcHMgdG8gdXNlIHRoZSBoYW1tb2NrPycsXG4gICAgYW5zd2VyOiAnTm8sIHlvdSBub3QgbmVlZCBhbnkgZXh0cmEgc3RyYXBzIHRoZW4gd2hhdCB0aGUgaGFtbW9jayBwYWNrYWdlIGNvbWVzIHdpdGguJ1xuICB9LCB7XG4gICAgcXVlc3Rpb246ICdXaGF0IGlzIHRoZSBtYXhpbXVtIHdlaWdodCBjYXBhY2l0eSBvZiBvdXIgaGFtbW9ja3M/JyxcbiAgICBhbnN3ZXI6ICc4MDAgbGJzISdcbiAgfSwge1xuICAgIHF1ZXN0aW9uOiAnV2hhdCBhcmUgdGhlIGRpbWVuc2lvbnMgb2YgeW91ciBoYW1tb2Nrcz8nLFxuICAgIGFuc3dlcjogJ0RvdWJsZSBUcmFjayBoYW1tb2NrOiAxMCB4IDYuNSBmZWV0LidcbiAgfSwge1xuICAgIHF1ZXN0aW9uOiAnSG93IGhpZ2ggZG8gSSBuZWVkIHRvIGhhbmcgdGhlIGhhbW1vY2s/JyxcbiAgICBhbnN3ZXI6ICdIb3cgaGlnaCBkbyBJIG5lZWQgdG8gaGFuZyB0aGUgaGFtbW9jaz8nXG4gIH0sIHtcbiAgICBxdWVzdGlvbjogJ0ZvciBzZXQgdXAsIHdoYXQgaXMgdGhlIGJlc3QgbGVuZ3RoIHRvIGhhdmUgYmV0d2VlbiBlbmRzIG9mIHRoZSBoYW1tb2NrPycsXG4gICAgYW5zd2VyOiAnVGhlIGJlc3Qgc2V0IHVwIGlzIGFyb3VuZCAxMiBmZWV0IGZyb20gZW5kIHRvIGVuZC4nXG4gIH0sIHtcbiAgICBxdWVzdGlvbjogJ1doYXQgYXJlIHRoZSBNYWtlIFRyYWNrcyBoYW1tb2NrcyBtYWRlIG9mPycsXG4gICAgYW5zd2VyOiAnQWxsIG91ciBoYW1tb2NrcyBhcmUgbWFkZSBvZiBwb3JvdXMsIGJyZWF0aGFibGUgbnlsb24gdGFmZmV0YS4gVGhpcyBwb3JvdXMgcXVhbGl0eSBsZW5kcyBpdHNlbGYgdG8gYSBjb29sIGFuZCBjb21mb3J0YWJsZSBleHBlcmllbmNlLidcbiAgfSwge1xuICAgIHF1ZXN0aW9uOiAnV2lsbCBteSBkb2dzIG9yIGNhdHMgbmFpbHMgcHVuY3R1cmUgdGhlIGhhbW1vY2s/JyxcbiAgICBhbnN3ZXI6ICdJdCBpcyBkZWZpbml0ZWx5IHBvc3NpYmxlLCBiZSBjYXV0aW91cyEnXG4gIH0sIHtcbiAgICBxdWVzdGlvbjogJ0FyZSB5b3VyIGhhbW1vY2tzIHdhdGVycHJvb2Y/JyxcbiAgICBhbnN3ZXI6ICdNYWtlIFRyYWNrcyBoYW1tb2NrcyBhcmUgd2F0ZXIgcmVzaXN0YW50IG5vdCB3YXRlcnByb29mLidcbiAgfV1cblxuICB0aGlzLmdldEZhcXMgPSAoKSA9PiB7XG4gICAgbGV0IGZhcXMgPSB0aGlzLmZhcTtcbiAgICByZXR1cm4gZmFxcztcbiAgfVxuXG59KS8vZW5kIG9mIHNlcnZpY2U7XG4iXX0=
