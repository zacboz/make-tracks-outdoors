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
});
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbnRyb2xsZXJzL2ZhcUN0cmwuanMiLCJjb250cm9sbGVycy9oYW1tb2NrQ3RybC5qcyIsImNvbnRyb2xsZXJzL2hhbW1vY2tEZXRhaWxzQ3RybC5qcyIsImNvbnRyb2xsZXJzL2hvbWVDdHJsLmpzIiwiZGlyZWN0aXZlcy9mb290ZXIuanMiLCJkaXJlY3RpdmVzL25hdmJhci5qcyIsImRpcmVjdGl2ZXMvc2xpZGVhYmxlLmpzIiwic2VydmljZXMvaGFtbW9ja1NydmMuanMiLCJzZXJ2aWNlcy9vdXRwb3N0U3J2Yy5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCJzdGF0ZSIsInVybCIsInRlbXBsYXRlVXJsIiwiY29udHJvbGxlciIsIm90aGVyd2lzZSIsIiRzY29wZSIsIm91dHBvc3RTcnZjIiwiJHN0YXRlUGFyYW1zIiwiZmFxcyIsImdldEZhcXMiLCJjb25zb2xlIiwibG9nIiwiaGFtbW9ja1NydmMiLCJoYW1tb2NrcyIsImdldEhhbW1vY2tzIiwiaGFtbW9jayIsImdldEhhbW1vY2tEZXRhaWxzIiwiJCIsImNsaWNrIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIm9mZnNldCIsInRvcCIsImJlc3RTZWxsZXJzIiwiZ2V0QmVzdFNlbGxlcnMiLCJkaXJlY3RpdmUiLCJyZXN0cmljdCIsImNvbXBpbGUiLCJlbGVtZW50IiwiYXR0ciIsImNvbnRlbnRzIiwiaHRtbCIsInBvc3RMaW5rIiwic2NvcGUiLCJhdHRycyIsImR1cmF0aW9uIiwiZWFzaW5nIiwiY3NzIiwibGluayIsInRhcmdldCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNsaWRlVG9nZ2xlIiwiZXhwYW5kZWQiLCJiaW5kIiwiY29udGVudCIsInN0eWxlIiwiYm9yZGVyIiwieSIsImNsaWVudEhlaWdodCIsImhlaWdodCIsInNlcnZpY2UiLCJpZCIsIm5hbWUiLCJjb2xvciIsImltYWdlIiwic3RhdHVzIiwiZGVzYyIsInByaWNlIiwic3RhdGVQYXJhbXMiLCJoYW1tb2NrRGV0YWlscyIsImkiLCJsZW5ndGgiLCJwYXJzZUludCIsImZhcSIsInF1ZXN0aW9uIiwiYW5zd2VyIiwidGlwMSIsInRpcDIiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFFBQVFDLE1BQVIsQ0FBZSxZQUFmLEVBQTZCLENBQUMsV0FBRCxDQUE3QixFQUNHQyxNQURILENBQ1UsVUFBU0MsY0FBVCxFQUF5QkMsa0JBQXpCLEVBQTRDOztBQUVsREQsbUJBQ0dFLEtBREgsQ0FDUyxNQURULEVBQ2dCO0FBQ1ZDLGFBQUksR0FETTtBQUVWQyxxQkFBYSxtQkFGSDtBQUdWQyxvQkFBWTtBQUhGLEtBRGhCLEVBTUdILEtBTkgsQ0FNUyxPQU5ULEVBTWlCO0FBQ1hDLGFBQUksUUFETztBQUVYQyxxQkFBYTtBQUZGLEtBTmpCLEVBVUdGLEtBVkgsQ0FVUyxVQVZULEVBVW9CO0FBQ2RDLGFBQUksV0FEVTtBQUVkQyxxQkFBYSx1QkFGQztBQUdkQyxvQkFBWTtBQUhFLEtBVnBCLEVBZUdILEtBZkgsQ0FlUyxnQkFmVCxFQWUwQjtBQUNwQkMsYUFBSSxxQkFEZ0I7QUFFcEJDLHFCQUFhLDhCQUZPO0FBR3BCQyxvQkFBWTtBQUhRLEtBZjFCLEVBb0JHSCxLQXBCSCxDQW9CUyxzQkFwQlQsRUFvQmdDO0FBQzFCQyxhQUFJLG1CQURzQjtBQUUxQkMscUJBQWE7QUFGYSxLQXBCaEMsRUF3QkdGLEtBeEJILENBd0JTLHNCQXhCVCxFQXdCZ0M7QUFDMUJDLGFBQUksZUFEc0I7QUFFMUJDLHFCQUFhO0FBRmEsS0F4QmhDLEVBNEJHRixLQTVCSCxDQTRCUyx3QkE1QlQsRUE0QmtDO0FBQzVCQyxhQUFJLGlCQUR3QjtBQUU1QkMscUJBQWE7QUFGZSxLQTVCbEMsRUFnQ0dGLEtBaENILENBZ0NTLFNBaENULEVBZ0NtQjtBQUNiQyxhQUFJLFVBRFM7QUFFYkMscUJBQWE7QUFGQSxLQWhDbkIsRUFvQ0dGLEtBcENILENBb0NTLGFBcENULEVBb0N1QjtBQUNqQkMsYUFBSSxNQURhO0FBRWpCQyxxQkFBYSxrQkFGSTtBQUdqQkMsb0JBQVk7QUFISyxLQXBDdkIsRUF5Q0dILEtBekNILENBeUNTLGlCQXpDVCxFQXlDMkI7QUFDckJDLGFBQUksVUFEaUI7QUFFckJDLHFCQUFhO0FBRlEsS0F6QzNCLEVBNkNHRixLQTdDSCxDQTZDUyxnQkE3Q1QsRUE2QzBCO0FBQ3BCQyxhQUFJLFNBRGdCO0FBRXBCQyxxQkFBYTtBQUZPLEtBN0MxQixFQWlER0YsS0FqREgsQ0FpRFMsWUFqRFQsRUFpRHNCO0FBQ2hCQyxhQUFJLGFBRFk7QUFFaEJDLHFCQUFhO0FBRkcsS0FqRHRCLEVBcURHRixLQXJESCxDQXFEUyxTQXJEVCxFQXFEbUI7QUFDYkMsYUFBSSxVQURTO0FBRWJDLHFCQUFhO0FBRkEsS0FyRG5CLEVBeURHRixLQXpESCxDQXlEUyxNQXpEVCxFQXlEZ0I7QUFDVkMsYUFBSSxPQURNO0FBRVZDLHFCQUFhLG1CQUZIO0FBR1ZDLG9CQUFZO0FBSEYsS0F6RGhCOztBQStERkosdUJBQ0tLLFNBREwsQ0FDZSxHQURmO0FBSUQsQ0F0RUQ7OztBQ0FBVCxRQUFRQyxNQUFSLENBQWUsWUFBZixFQUE2Qk8sVUFBN0IsQ0FBd0MsU0FBeEMsRUFBbUQsVUFBQ0UsTUFBRCxFQUFTQyxXQUFULEVBQXNCQyxZQUF0QixFQUF1Qzs7QUFFeEZGLFNBQU9HLElBQVAsR0FBY0YsWUFBWUcsT0FBWixFQUFkO0FBQ0FDLFVBQVFDLEdBQVIsQ0FBWU4sT0FBT0csSUFBbkI7O0FBRUE7QUFDQTtBQUNBO0FBRUQsQ0FURCxHQVNFOzs7QUNURmIsUUFBUUMsTUFBUixDQUFlLFlBQWYsRUFBNkJPLFVBQTdCLENBQXdDLGFBQXhDLEVBQXVELFVBQUNFLE1BQUQsRUFBU08sV0FBVCxFQUFzQkwsWUFBdEIsRUFBdUM7O0FBRTVGRixTQUFPUSxRQUFQLEdBQWtCRCxZQUFZRSxXQUFaLEVBQWxCO0FBQ0FKLFVBQVFDLEdBQVIsQ0FBWU4sT0FBT1EsUUFBbkI7QUFFRCxDQUxELEdBS0U7OztBQ0xGbEIsUUFBUUMsTUFBUixDQUFlLFlBQWYsRUFDQ08sVUFERCxDQUNZLG9CQURaLEVBQ2tDLFVBQUNFLE1BQUQsRUFBU08sV0FBVCxFQUFzQkwsWUFBdEIsRUFBdUM7O0FBRXZFRixXQUFPVSxPQUFQLEdBQWlCSCxZQUFZSSxpQkFBWixDQUE4QlQsWUFBOUIsQ0FBakI7QUFDQUcsWUFBUUMsR0FBUixDQUFZTixPQUFPVSxPQUFuQjs7QUFFQUUsTUFBRSxlQUFGLEVBQW1CQyxLQUFuQixDQUF5QixZQUFXO0FBQ2hDRCxVQUFFLFlBQUYsRUFBZ0JFLE9BQWhCLENBQXdCO0FBQ3BCQyx1QkFBV0gsRUFBRSxRQUFGLEVBQVlJLE1BQVosR0FBcUJDO0FBRFosU0FBeEIsRUFFRyxJQUZIO0FBR0gsS0FKRDtBQUtBTCxNQUFFLGVBQUYsRUFBbUJDLEtBQW5CLENBQXlCLFlBQVc7QUFDaENELFVBQUUsWUFBRixFQUFnQkUsT0FBaEIsQ0FBd0I7QUFDcEJDLHVCQUFXSCxFQUFFLFFBQUYsRUFBWUksTUFBWixHQUFxQkM7QUFEWixTQUF4QixFQUVHLElBRkg7QUFHSCxLQUpEO0FBS0FMLE1BQUUsaUJBQUYsRUFBcUJDLEtBQXJCLENBQTJCLFlBQVc7QUFDbENELFVBQUUsWUFBRixFQUFnQkUsT0FBaEIsQ0FBd0I7QUFDcEJDLHVCQUFXSCxFQUFFLFFBQUYsRUFBWUksTUFBWixHQUFxQkM7QUFEWixTQUF4QixFQUVHLElBRkg7QUFHSCxLQUpEO0FBTUQsQ0F0QkQ7OztBQ0FBM0IsUUFBUUMsTUFBUixDQUFlLFlBQWYsRUFDQ08sVUFERCxDQUNZLFVBRFosRUFDd0IsVUFBQ0UsTUFBRCxFQUFTTyxXQUFULEVBQXNCTCxZQUF0QixFQUF1Qzs7QUFFN0RGLFNBQU9rQixXQUFQLEdBQXFCWCxZQUFZWSxjQUFaLEVBQXJCO0FBQ0FkLFVBQVFDLEdBQVIsQ0FBWU4sT0FBT2tCLFdBQW5CO0FBRUQsQ0FORCxHQU1FOzs7QUNORjVCLFFBQVFDLE1BQVIsQ0FBZSxZQUFmLEVBQTZCNkIsU0FBN0IsQ0FBdUMsY0FBdkMsRUFBdUQsWUFBTTtBQUMzRCxTQUFPO0FBQ0x2QixpQkFBYTtBQURSLEdBQVA7QUFHRCxDQUpELEdBSUc7OztBQ0pIUCxRQUFRQyxNQUFSLENBQWUsWUFBZixFQUE2QjZCLFNBQTdCLENBQXVDLFFBQXZDLEVBQWlELFlBQU07QUFDckQsU0FBTztBQUNMdkIsaUJBQWE7QUFEUixHQUFQO0FBR0QsQ0FKRCxHQUlHOzs7QUNKSFAsUUFBUUMsTUFBUixDQUFlLFlBQWYsRUFDQzZCLFNBREQsQ0FDVyxXQURYLEVBQ3dCLFlBQVk7QUFDaEMsV0FBTztBQUNIQyxrQkFBUyxHQUROO0FBRUhDLGlCQUFTLGlCQUFVQyxPQUFWLEVBQW1CQyxJQUFuQixFQUF5QjtBQUM5QjtBQUNBLGdCQUFJQyxXQUFXRixRQUFRRyxJQUFSLEVBQWY7QUFDQUgsb0JBQVFHLElBQVIsQ0FBYSx1RkFBdUZELFFBQXZGLEdBQWtHLFFBQS9HOztBQUVBLG1CQUFPLFNBQVNFLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCTCxPQUF6QixFQUFrQ00sS0FBbEMsRUFBeUM7QUFDNUM7QUFDQUEsc0JBQU1DLFFBQU4sR0FBa0IsQ0FBQ0QsTUFBTUMsUUFBUixHQUFvQixJQUFwQixHQUEyQkQsTUFBTUMsUUFBbEQ7QUFDQUQsc0JBQU1FLE1BQU4sR0FBZ0IsQ0FBQ0YsTUFBTUUsTUFBUixHQUFrQixhQUFsQixHQUFrQ0YsTUFBTUUsTUFBdkQ7QUFDQVIsd0JBQVFTLEdBQVIsQ0FBWTtBQUNSLGdDQUFZLFFBREo7QUFFUiw4QkFBVSxLQUZGO0FBR1IsMENBQXNCLFFBSGQ7QUFJUiwwQ0FBc0JILE1BQU1DLFFBSnBCO0FBS1IsZ0RBQTRCRCxNQUFNRTtBQUwxQixpQkFBWjtBQU9ILGFBWEQ7QUFZSDtBQW5CRSxLQUFQO0FBcUJILENBdkJELEVBd0JDWCxTQXhCRCxDQXdCVyxhQXhCWCxFQXdCMEIsWUFBVztBQUNqQyxXQUFPO0FBQ0hDLGtCQUFVLEdBRFA7QUFFSFksY0FBTSxjQUFTTCxLQUFULEVBQWdCTCxPQUFoQixFQUF5Qk0sS0FBekIsRUFBZ0M7QUFDbEMsZ0JBQUlLLFNBQVNDLFNBQVNDLGFBQVQsQ0FBdUJQLE1BQU1RLFdBQTdCLENBQWI7QUFDQVIsa0JBQU1TLFFBQU4sR0FBaUIsS0FBakI7QUFDQWYsb0JBQVFnQixJQUFSLENBQWEsT0FBYixFQUFzQixZQUFXO0FBQzdCLG9CQUFJQyxVQUFVTixPQUFPRSxhQUFQLENBQXFCLG9CQUFyQixDQUFkO0FBQ0Esb0JBQUcsQ0FBQ1AsTUFBTVMsUUFBVixFQUFvQjtBQUNoQkUsNEJBQVFDLEtBQVIsQ0FBY0MsTUFBZCxHQUF1Qix5QkFBdkI7QUFDQSx3QkFBSUMsSUFBSUgsUUFBUUksWUFBaEI7QUFDQUosNEJBQVFDLEtBQVIsQ0FBY0MsTUFBZCxHQUF1QixDQUF2QjtBQUNBUiwyQkFBT08sS0FBUCxDQUFhSSxNQUFiLEdBQXNCRixJQUFJLElBQTFCO0FBQ0gsaUJBTEQsTUFLTztBQUNIVCwyQkFBT08sS0FBUCxDQUFhSSxNQUFiLEdBQXNCLEtBQXRCO0FBQ0g7QUFDRGhCLHNCQUFNUyxRQUFOLEdBQWlCLENBQUNULE1BQU1TLFFBQXhCO0FBQ0gsYUFYRDtBQVlIO0FBakJFLEtBQVA7QUFtQkgsQ0E1Q0Q7OztBQ0FBaEQsUUFBUUMsTUFBUixDQUFlLFlBQWYsRUFBNkJ1RCxPQUE3QixDQUFxQyxhQUFyQyxFQUFvRCxZQUFVO0FBQUE7O0FBRzVELFNBQUs1QixXQUFMLEdBQW1CLENBQUM7QUFDZDZCLFlBQUksQ0FEVTtBQUVkQyxjQUFNLGFBRlE7QUFHZEMsZUFBTyxhQUhPO0FBSWRDLGVBQU8sNkJBSk87QUFLZEMsZ0JBQVEsaUJBTE07QUFNZEMsY0FBTSx3TEFOUTtBQU9kQyxlQUFPO0FBUE8sS0FBRCxFQVFkO0FBQ0NOLFlBQUksQ0FETDtBQUVDQyxjQUFNLFlBRlA7QUFHQ0MsZUFBTyxpQkFIUjtBQUlDQyxlQUFPLGlDQUpSO0FBS0NDLGdCQUFRLGlCQUxUO0FBTUNDLGNBQU0sd0xBTlA7QUFPQ0MsZUFBTztBQVBSLEtBUmMsRUFnQmY7QUFDRU4sWUFBSSxDQUROO0FBRUVDLGNBQU0sWUFGUjtBQUdFQyxlQUFPLCtCQUhUO0FBSUVDLGVBQU8sbUNBSlQ7QUFLRUMsZ0JBQVEsaUJBTFY7QUFNRUMsY0FBTSx3TEFOUjtBQU9FQyxlQUFPO0FBUFQsS0FoQmUsQ0FBbkI7O0FBMEJBLFNBQUs3QyxRQUFMLEdBQWdCLENBQUM7QUFDWHVDLFlBQUksQ0FETztBQUVYQyxjQUFNLGFBRks7QUFHWEMsZUFBTyxhQUhJO0FBSVhDLGVBQU8sNkJBSkk7QUFLWEMsZ0JBQVEsaUJBTEc7QUFNWEMsY0FBTSx3TEFOSztBQU9YQyxlQUFPO0FBUEksS0FBRCxFQVFYO0FBQ0NOLFlBQUksQ0FETDtBQUVDQyxjQUFNLFlBRlA7QUFHQ0MsZUFBTyxpQkFIUjtBQUlDQyxlQUFPLGlDQUpSO0FBS0NDLGdCQUFRLGlCQUxUO0FBTUNDLGNBQU0sd0xBTlA7QUFPQ0MsZUFBTztBQVBSLEtBUlcsRUFnQlo7QUFDRU4sWUFBSSxDQUROO0FBRUVDLGNBQU0sY0FGUjtBQUdFQyxlQUFPLFlBSFQ7QUFJRUMsZUFBTyxrQ0FKVDtBQUtFQyxnQkFBUSxpQkFMVjtBQU1FQyxjQUFNLHdMQU5SO0FBT0VDLGVBQU87QUFQVCxLQWhCWSxFQXdCWjtBQUNFTixZQUFJLENBRE47QUFFRUMsY0FBTSxZQUZSO0FBR0VDLGVBQU8saUJBSFQ7QUFJRUMsZUFBTyw0QkFKVDtBQUtFQyxnQkFBUSxpQkFMVjtBQU1FQyxjQUFNLHdMQU5SO0FBT0VDLGVBQU87QUFQVCxLQXhCWSxFQWdDWjtBQUNFTixZQUFJLENBRE47QUFFRUMsY0FBTSxZQUZSO0FBR0VDLGVBQU8sK0JBSFQ7QUFJRUMsZUFBTyxtQ0FKVDtBQUtFQyxnQkFBUSxpQkFMVjtBQU1FQyxjQUFNLHdMQU5SO0FBT0VDLGVBQU87QUFQVCxLQWhDWSxDQUFoQjs7QUEwQ0UsU0FBS2xDLGNBQUwsR0FBc0IsWUFBTTtBQUMxQixZQUFJRCxjQUFjLE1BQUtBLFdBQXZCO0FBQ0EsZUFBT0EsV0FBUDtBQUNELEtBSEQ7O0FBS0EsU0FBS1QsV0FBTCxHQUFtQixZQUFNO0FBQ3ZCLFlBQUlELFdBQVcsTUFBS0EsUUFBcEI7QUFDQSxlQUFPQSxRQUFQO0FBQ0QsS0FIRDs7QUFLQSxTQUFLRyxpQkFBTCxHQUF5QixVQUFDMkMsV0FBRCxFQUFpQjtBQUN4QyxZQUFJQyxpQkFBaUIsTUFBSy9DLFFBQTFCO0FBQ0EsYUFBSSxJQUFJZ0QsSUFBSSxDQUFaLEVBQWVBLElBQUlELGVBQWVFLE1BQWxDLEVBQTBDRCxHQUExQyxFQUE4QztBQUM1Q25ELG9CQUFRQyxHQUFSLENBQVlpRCxjQUFaLEVBQTRCRCxXQUE1QjtBQUNBLGdCQUFHQyxlQUFlQyxDQUFmLEVBQWtCVCxFQUFsQixLQUF5QlcsU0FBU0osWUFBWVAsRUFBckIsQ0FBNUIsRUFBcUQ7QUFDbkQsdUJBQU9RLGVBQWVDLENBQWYsQ0FBUDtBQUNEO0FBQ0Y7QUFDRixLQVJEO0FBYUgsQ0E5RkQsR0E4RkU7OztBQzlGRmxFLFFBQVFDLE1BQVIsQ0FBZSxZQUFmLEVBQTZCdUQsT0FBN0IsQ0FBcUMsYUFBckMsRUFBb0QsWUFBVTtBQUFBOztBQUU1RCxPQUFLYSxHQUFMLEdBQVcsQ0FBQztBQUNWQyxjQUFVLHVEQURBO0FBRVZDLFlBQVE7QUFGRSxHQUFELEVBR1I7QUFDREQsY0FBVSx1Q0FEVDtBQUVEQyxZQUFRLDRHQUZQO0FBR0RDLFVBQU0sc0tBSEw7QUFJREMsVUFBTTtBQUpMLEdBSFEsRUFRVDtBQUNBSCxjQUFVLDJDQURWO0FBRUFDLFlBQVEsOEpBRlI7QUFHQUMsVUFBTTtBQUhOLEdBUlMsRUFZUjtBQUNERixjQUFVLG9DQURUO0FBRURDLFlBQVE7QUFGUCxHQVpRLEVBZVI7QUFDREQsY0FBVSx3Q0FEVDtBQUVEQyxZQUFRO0FBRlAsR0FmUSxFQWtCUjtBQUNERCxjQUFVLHNEQURUO0FBRURDLFlBQVE7QUFGUCxHQWxCUSxFQXFCUjtBQUNERCxjQUFVLDJDQURUO0FBRURDLFlBQVE7QUFGUCxHQXJCUSxFQXdCUjtBQUNERCxjQUFVLHlDQURUO0FBRURDLFlBQVE7QUFGUCxHQXhCUSxFQTJCUjtBQUNERCxjQUFVLDBFQURUO0FBRURDLFlBQVE7QUFGUCxHQTNCUSxFQThCUjtBQUNERCxjQUFVLDRDQURUO0FBRURDLFlBQVE7QUFGUCxHQTlCUSxFQWlDUjtBQUNERCxjQUFVLGtEQURUO0FBRURDLFlBQVE7QUFGUCxHQWpDUSxFQW9DUjtBQUNERCxjQUFVLCtCQURUO0FBRURDLFlBQVE7QUFGUCxHQXBDUSxDQUFYOztBQXlDQSxPQUFLekQsT0FBTCxHQUFlLFlBQU07QUFDbkIsUUFBSUQsT0FBTyxNQUFLd0QsR0FBaEI7QUFDQSxXQUFPeEQsSUFBUDtBQUNELEdBSEQ7QUFLRCxDQWhERCxHQWdERSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycsIFsndWkucm91dGVyJ10pXG4gIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcil7XG5cbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdob21lJyx7XG4gICAgICAgICAgdXJsOicvJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogXCIuL3ZpZXdzL2hvbWUuaHRtbFwiLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdob21lQ3RybCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ3N0b3J5Jyx7XG4gICAgICAgICAgdXJsOicvc3RvcnknLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9zdG9yeS5odG1sJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnaGFtbW9ja3MnLHtcbiAgICAgICAgICB1cmw6Jy9oYW1tb2NrcycsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2hhbW1vY2tzLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdoYW1tb2NrQ3RybCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2hhbW1vY2tEZXRhaWxzJyx7XG4gICAgICAgICAgdXJsOicvaGFtbW9ja0RldGFpbHMvOmlkJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvaGFtbW9jay1kZXRhaWxzLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdoYW1tb2NrRGV0YWlsc0N0cmwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdoYW1tb2NrRGV0YWlscy5zcGVjcycse1xuICAgICAgICAgIHVybDonL2hhbW1vY2tTcGVjcy86aWQnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9oYW1tb2NrU3BlY3MuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2hhbW1vY2tEZXRhaWxzLnNldHVwJyx7XG4gICAgICAgICAgdXJsOicvaGFtbW9ja1NldHVwJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvaGFtbW9ja1NldHVwLmh0bWwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdoYW1tb2NrRGV0YWlscy5yZXR1cm5zJyx7XG4gICAgICAgICAgdXJsOicvaGFtbW9ja1JldHVybnMnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9oYW1tb2NrUmV0dXJucy5odG1sJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnb3V0cG9zdCcse1xuICAgICAgICAgIHVybDonL291dHBvc3QnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9vdXRwb3N0Lmh0bWwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdvdXRwb3N0LmZhcScse1xuICAgICAgICAgIHVybDonL2ZhcScsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2ZhcS5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnZmFxQ3RybCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ291dHBvc3QucmVmdW5kcycse1xuICAgICAgICAgIHVybDonL3JlZnVuZHMnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9yZWZ1bmRzLmh0bWwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdvdXRwb3N0LnZpZGVvcycse1xuICAgICAgICAgIHVybDonL3ZpZGVvcycsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL3ZpZGVvcy5odG1sJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnY29taW5nc29vbicse1xuICAgICAgICAgIHVybDonL2NvbWluZ3Nvb24nLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9jb21pbmdzb29uLmh0bWwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdjb250YWN0Jyx7XG4gICAgICAgICAgdXJsOicvY29udGFjdCcsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2NvbnRhY3QuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2pvaW4nLHtcbiAgICAgICAgICB1cmw6Jy9qb2luJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3Mvam9pbi5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnam9pbkN0cmwnXG4gICAgICB9KTtcblxuICAkdXJsUm91dGVyUHJvdmlkZXJcbiAgICAgIC5vdGhlcndpc2UoJy8nKTtcblxuXG59KTtcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJykuY29udHJvbGxlcignZmFxQ3RybCcsICgkc2NvcGUsIG91dHBvc3RTcnZjLCAkc3RhdGVQYXJhbXMpID0+IHtcblxuICAkc2NvcGUuZmFxcyA9IG91dHBvc3RTcnZjLmdldEZhcXMoKTtcbiAgY29uc29sZS5sb2coJHNjb3BlLmZhcXMpO1xuXG4gIC8vICQoJy5xdWVzdGlvbicpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgLy8gICAkKHRoaXMpLm5leHQoJy5vcGVuJykuc2xpZGVUb2dnbGUoKTtcbiAgLy8gfSk7XG5cbn0pLy9lbmQgb2YgY29udHJvbGxlclxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5jb250cm9sbGVyKCdoYW1tb2NrQ3RybCcsICgkc2NvcGUsIGhhbW1vY2tTcnZjLCAkc3RhdGVQYXJhbXMpID0+IHtcblxuICAkc2NvcGUuaGFtbW9ja3MgPSBoYW1tb2NrU3J2Yy5nZXRIYW1tb2NrcygpO1xuICBjb25zb2xlLmxvZygkc2NvcGUuaGFtbW9ja3MpO1xuXG59KS8vZW5kIG9mIGhvbWUgY29udHJvbGxlclxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKVxuLmNvbnRyb2xsZXIoJ2hhbW1vY2tEZXRhaWxzQ3RybCcsICgkc2NvcGUsIGhhbW1vY2tTcnZjLCAkc3RhdGVQYXJhbXMpID0+IHtcblxuICAkc2NvcGUuaGFtbW9jayA9IGhhbW1vY2tTcnZjLmdldEhhbW1vY2tEZXRhaWxzKCRzdGF0ZVBhcmFtcyk7XG4gIGNvbnNvbGUubG9nKCRzY29wZS5oYW1tb2NrKTtcblxuICAkKFwiI3Njcm9sbC1zcGVjc1wiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICBzY3JvbGxUb3A6ICQoXCIjc3BlY3NcIikub2Zmc2V0KCkudG9wXG4gICAgICB9LCAxMDAwKTtcbiAgfSk7XG4gICQoXCIjc2Nyb2xsLXNldHVwXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgIHNjcm9sbFRvcDogJChcIiNzcGVjc1wiKS5vZmZzZXQoKS50b3BcbiAgICAgIH0sIDEwMDApO1xuICB9KTtcbiAgJChcIiNzY3JvbGwtcmV0dXJuc1wiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICBzY3JvbGxUb3A6ICQoXCIjc3BlY3NcIikub2Zmc2V0KCkudG9wXG4gICAgICB9LCAxMDAwKTtcbiAgfSk7XG5cbn0pXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpXG4uY29udHJvbGxlcignaG9tZUN0cmwnLCAoJHNjb3BlLCBoYW1tb2NrU3J2YywgJHN0YXRlUGFyYW1zKSA9PiB7XG5cbiAgJHNjb3BlLmJlc3RTZWxsZXJzID0gaGFtbW9ja1NydmMuZ2V0QmVzdFNlbGxlcnMoKTtcbiAgY29uc29sZS5sb2coJHNjb3BlLmJlc3RTZWxsZXJzKTtcblxufSkvL2VuZCBvZiBob21lIGNvbnRyb2xsZXJcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJykuZGlyZWN0aXZlKCdjdXN0b21Gb290ZXInLCAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2Zvb3Rlci5odG1sJ1xuICB9O1xufSkgLy9lbmQgb2YgbmF2YmFyIGRpcmVjdGl2ZVxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5kaXJlY3RpdmUoJ25hdmJhcicsICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvbmF2YmFyLmh0bWwnXG4gIH07XG59KSAvL2VuZCBvZiBuYXZiYXIgZGlyZWN0aXZlXG4iLCJhbmd1bGFyLm1vZHVsZSgnbWFrZVRyYWNrcycpXG4uZGlyZWN0aXZlKCdzbGlkZWFibGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6J0MnLFxuICAgICAgICBjb21waWxlOiBmdW5jdGlvbiAoZWxlbWVudCwgYXR0cikge1xuICAgICAgICAgICAgLy8gd3JhcCB0YWdcbiAgICAgICAgICAgIHZhciBjb250ZW50cyA9IGVsZW1lbnQuaHRtbCgpO1xuICAgICAgICAgICAgZWxlbWVudC5odG1sKCc8ZGl2IGNsYXNzPVwic2xpZGVhYmxlX2NvbnRlbnRcIiBzdHlsZT1cIm1hcmdpbjowICFpbXBvcnRhbnQ7IHBhZGRpbmc6MCAhaW1wb3J0YW50XCIgPicgKyBjb250ZW50cyArICc8L2Rpdj4nKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHBvc3RMaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICAgICAgICAgIC8vIGRlZmF1bHQgcHJvcGVydGllc1xuICAgICAgICAgICAgICAgIGF0dHJzLmR1cmF0aW9uID0gKCFhdHRycy5kdXJhdGlvbikgPyAnMXMnIDogYXR0cnMuZHVyYXRpb247XG4gICAgICAgICAgICAgICAgYXR0cnMuZWFzaW5nID0gKCFhdHRycy5lYXNpbmcpID8gJ2Vhc2UtaW4tb3V0JyA6IGF0dHJzLmVhc2luZztcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICdvdmVyZmxvdyc6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICAnaGVpZ2h0JzogJzBweCcsXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uUHJvcGVydHknOiAnaGVpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25EdXJhdGlvbic6IGF0dHJzLmR1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAndHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uJzogYXR0cnMuZWFzaW5nXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfTtcbn0pXG4uZGlyZWN0aXZlKCdzbGlkZVRvZ2dsZScsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYXR0cnMuc2xpZGVUb2dnbGUpO1xuICAgICAgICAgICAgYXR0cnMuZXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGVsZW1lbnQuYmluZCgnY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29udGVudCA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVhYmxlX2NvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICBpZighYXR0cnMuZXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkIHJnYmEoMCwwLDAsMCknO1xuICAgICAgICAgICAgICAgICAgICB2YXIgeSA9IGNvbnRlbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLmJvcmRlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSB5ICsgJ3B4JztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF0dHJzLmV4cGFuZGVkID0gIWF0dHJzLmV4cGFuZGVkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJykuc2VydmljZSgnaGFtbW9ja1NydmMnLCBmdW5jdGlvbigpe1xuXG5cbiAgdGhpcy5iZXN0U2VsbGVycyA9IFt7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiAnVGhlIFN1bnJpc2UnLFxuICAgICAgICBjb2xvcjogJ09yYW5nZS9HcmV5JyxcbiAgICAgICAgaW1hZ2U6IFwiLi4vaW1nL2hhbW1vY2tzL3N1bnJpc2UuanBnXCIsXG4gICAgICAgIHN0YXR1czogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGRlc2M6ICdUaGUgYmVzdCBoYW1tb2NrIG91dCB0aGVyZSEgR3JlYXQgZm9yIDEsIHBlcmZlY3QgZm9yIDIuIEVhc2lseSB0cmFuc3BvcnRhYmxlIGFuZCBzdHVmZnMgcmlnaHQgaW50byB0aGUgYXR0YWNoZWQgc2Fjay4gU2V0IHVwIGluIHNlY29uZHMgYmVjYXVzZSBvdXIgcm9wZXMgYWxsIGNvbWUgd2l0aCBwcmV0aWVkIGtub3RzIScsXG4gICAgICAgIHByaWNlOiAzNC45OVxuICAgIH0sIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIG5hbWU6ICdUaGUgR2V5c2VyJyxcbiAgICAgICAgY29sb3I6ICdMaWdodCBCbHVlL0JsdWUnLFxuICAgICAgICBpbWFnZTogXCIuLi9pbWcvaGFtbW9ja3MvYmx1ZWhhbW1vY2suanBnXCIsXG4gICAgICAgIHN0YXR1czogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGRlc2M6ICdUaGUgYmVzdCBoYW1tb2NrIG91dCB0aGVyZSEgR3JlYXQgZm9yIDEsIHBlcmZlY3QgZm9yIDIuIEVhc2lseSB0cmFuc3BvcnRhYmxlIGFuZCBzdHVmZnMgcmlnaHQgaW50byB0aGUgYXR0YWNoZWQgc2Fjay4gU2V0IHVwIGluIHNlY29uZHMgYmVjYXVzZSBvdXIgcm9wZXMgYWxsIGNvbWUgd2l0aCBwcmV0aWVkIGtub3RzIScsXG4gICAgICAgIHByaWNlOiAzNC45OVxuICAgIH0se1xuICAgICAgICBpZDogNSxcbiAgICAgICAgbmFtZTogJ1RoZSBNZWFkb3cnLFxuICAgICAgICBjb2xvcjogJ0xpbWUgR3JlZW4vIExpZ2h0IEJsdWUvIFdoaXRlJyxcbiAgICAgICAgaW1hZ2U6IFwiLi4vaW1nL2hhbW1vY2tzL21lYWRvd2hhbW1vY2suanBnXCIsXG4gICAgICAgIHN0YXR1czogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGRlc2M6ICdUaGUgYmVzdCBoYW1tb2NrIG91dCB0aGVyZSEgR3JlYXQgZm9yIDEsIHBlcmZlY3QgZm9yIDIuIEVhc2lseSB0cmFuc3BvcnRhYmxlIGFuZCBzdHVmZnMgcmlnaHQgaW50byB0aGUgYXR0YWNoZWQgc2Fjay4gU2V0IHVwIGluIHNlY29uZHMgYmVjYXVzZSBvdXIgcm9wZXMgYWxsIGNvbWUgd2l0aCBwcmV0aWVkIGtub3RzIScsXG4gICAgICAgIHByaWNlOiAzNC45OVxuICAgIH1dXG5cbiAgdGhpcy5oYW1tb2NrcyA9IFt7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiAnVGhlIFN1bnJpc2UnLFxuICAgICAgICBjb2xvcjogJ29yYW5nZS9ncmF5JyxcbiAgICAgICAgaW1hZ2U6IFwiLi4vaW1nL2hhbW1vY2tzL3N1bnJpc2UuanBnXCIsXG4gICAgICAgIHN0YXR1czogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGRlc2M6ICdUaGUgYmVzdCBoYW1tb2NrIG91dCB0aGVyZSEgR3JlYXQgZm9yIDEsIHBlcmZlY3QgZm9yIDIuIEVhc2lseSB0cmFuc3BvcnRhYmxlIGFuZCBzdHVmZnMgcmlnaHQgaW50byB0aGUgYXR0YWNoZWQgc2Fjay4gU2V0IHVwIGluIHNlY29uZHMgYmVjYXVzZSBvdXIgcm9wZXMgYWxsIGNvbWUgd2l0aCBwcmV0aWVkIGtub3RzIScsXG4gICAgICAgIHByaWNlOiAzNC45OVxuICAgIH0sIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIG5hbWU6ICdUaGUgR2V5c2VyJyxcbiAgICAgICAgY29sb3I6ICdibHVlL2xpZ2h0IGJsdWUnLFxuICAgICAgICBpbWFnZTogXCIuLi9pbWcvaGFtbW9ja3MvYmx1ZWhhbW1vY2suanBnXCIsXG4gICAgICAgIHN0YXR1czogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGRlc2M6ICdUaGUgYmVzdCBoYW1tb2NrIG91dCB0aGVyZSEgR3JlYXQgZm9yIDEsIHBlcmZlY3QgZm9yIDIuIEVhc2lseSB0cmFuc3BvcnRhYmxlIGFuZCBzdHVmZnMgcmlnaHQgaW50byB0aGUgYXR0YWNoZWQgc2Fjay4gU2V0IHVwIGluIHNlY29uZHMgYmVjYXVzZSBvdXIgcm9wZXMgYWxsIGNvbWUgd2l0aCBwcmV0aWVkIGtub3RzIScsXG4gICAgICAgIHByaWNlOiAzNC45OVxuICAgIH0se1xuICAgICAgICBpZDogMyxcbiAgICAgICAgbmFtZTogJ1RoZSBXb29kbGFuZCcsXG4gICAgICAgIGNvbG9yOiAnZ3JlZW4vZ3JheScsXG4gICAgICAgIGltYWdlOiBcIi4uL2ltZy9oYW1tb2Nrcy9ncmVlbmhhbW1vY2suanBnXCIsXG4gICAgICAgIHN0YXR1czogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGRlc2M6ICdUaGUgYmVzdCBoYW1tb2NrIG91dCB0aGVyZSEgR3JlYXQgZm9yIDEsIHBlcmZlY3QgZm9yIDIuIEVhc2lseSB0cmFuc3BvcnRhYmxlIGFuZCBzdHVmZnMgcmlnaHQgaW50byB0aGUgYXR0YWNoZWQgc2Fjay4gU2V0IHVwIGluIHNlY29uZHMgYmVjYXVzZSBvdXIgcm9wZXMgYWxsIGNvbWUgd2l0aCBwcmV0aWVkIGtub3RzIScsXG4gICAgICAgIHByaWNlOiAzNC45OVxuICAgIH0se1xuICAgICAgICBpZDogNCxcbiAgICAgICAgbmFtZTogJ1RoZSBTdW1taXQnLFxuICAgICAgICBjb2xvcjogJ2NoYXJjb2FsL21hcm9vbicsXG4gICAgICAgIGltYWdlOiBcIi4uL2ltZy9oYW1tb2Nrcy9zdW1taXQuanBnXCIsXG4gICAgICAgIHN0YXR1czogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGRlc2M6ICdUaGUgYmVzdCBoYW1tb2NrIG91dCB0aGVyZSEgR3JlYXQgZm9yIDEsIHBlcmZlY3QgZm9yIDIuIEVhc2lseSB0cmFuc3BvcnRhYmxlIGFuZCBzdHVmZnMgcmlnaHQgaW50byB0aGUgYXR0YWNoZWQgc2Fjay4gU2V0IHVwIGluIHNlY29uZHMgYmVjYXVzZSBvdXIgcm9wZXMgYWxsIGNvbWUgd2l0aCBwcmV0aWVkIGtub3RzIScsXG4gICAgICAgIHByaWNlOiAzNC45OVxuICAgIH0se1xuICAgICAgICBpZDogNSxcbiAgICAgICAgbmFtZTogJ1RoZSBNZWFkb3cnLFxuICAgICAgICBjb2xvcjogJ2xpbWUgZ3JlZW4vIGxpZ2h0IGJsdWUvIHdoaXRlJyxcbiAgICAgICAgaW1hZ2U6IFwiLi4vaW1nL2hhbW1vY2tzL21lYWRvd2hhbW1vY2suanBnXCIsXG4gICAgICAgIHN0YXR1czogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGRlc2M6ICdUaGUgYmVzdCBoYW1tb2NrIG91dCB0aGVyZSEgR3JlYXQgZm9yIDEsIHBlcmZlY3QgZm9yIDIuIEVhc2lseSB0cmFuc3BvcnRhYmxlIGFuZCBzdHVmZnMgcmlnaHQgaW50byB0aGUgYXR0YWNoZWQgc2Fjay4gU2V0IHVwIGluIHNlY29uZHMgYmVjYXVzZSBvdXIgcm9wZXMgYWxsIGNvbWUgd2l0aCBwcmV0aWVkIGtub3RzIScsXG4gICAgICAgIHByaWNlOiAzNC45OVxuICAgIH1dXG5cbiAgICB0aGlzLmdldEJlc3RTZWxsZXJzID0gKCkgPT4ge1xuICAgICAgbGV0IGJlc3RTZWxsZXJzID0gdGhpcy5iZXN0U2VsbGVycztcbiAgICAgIHJldHVybiBiZXN0U2VsbGVycztcbiAgICB9XG5cbiAgICB0aGlzLmdldEhhbW1vY2tzID0gKCkgPT4ge1xuICAgICAgbGV0IGhhbW1vY2tzID0gdGhpcy5oYW1tb2NrcztcbiAgICAgIHJldHVybiBoYW1tb2NrcztcbiAgICB9XG5cbiAgICB0aGlzLmdldEhhbW1vY2tEZXRhaWxzID0gKHN0YXRlUGFyYW1zKSA9PiB7XG4gICAgICBsZXQgaGFtbW9ja0RldGFpbHMgPSB0aGlzLmhhbW1vY2tzO1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGhhbW1vY2tEZXRhaWxzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc29sZS5sb2coaGFtbW9ja0RldGFpbHMsIHN0YXRlUGFyYW1zKTtcbiAgICAgICAgaWYoaGFtbW9ja0RldGFpbHNbaV0uaWQgPT09IHBhcnNlSW50KHN0YXRlUGFyYW1zLmlkKSl7XG4gICAgICAgICAgcmV0dXJuIGhhbW1vY2tEZXRhaWxzW2ldXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cblxuXG5cbn0pLy9lbmQgb2Ygc2VydmljZVxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5zZXJ2aWNlKCdvdXRwb3N0U3J2YycsIGZ1bmN0aW9uKCl7XG5cbiAgdGhpcy5mYXEgPSBbe1xuICAgIHF1ZXN0aW9uOiAnV2FudGluZyB0byBidXkgYSBoYW1tb2NrPyBIZXJlIGlzIGhvdyB0byBnZXQgc3RhcnRlZD8nLFxuICAgIGFuc3dlcjogJ091ciBnb2FsIGlzIHRvIG1ha2Ugb3VyIGhhbW1vY2tzIGFzIGhhc3NsZSBmcmVlIGFzIHBvc3NpYmxlLiBBbGwgb2Ygb3VyIGhhbW1vY2tzIGNvbWUgd2l0aCBlbmQtc3RyYXBzIGZvciBleHRyYSBzdHJlbmd0aCBhbmQgZHVyYWJpbGl0eSBzbyBvdXIgY3VzdG9tZXJzIG5ldmVyIGhhdmUgdG8gd29ycnkgYWJvdXQgdGhlaXIga25vdHMgY29taW5nIHVuZG9uZS4gV2UgYWxzbyBwcm92aWRlIHRyZWUgc2xlZXZlcyB3aXRoIHByZS10aWVkIGtub3RzIHRvIHByb3RlY3QgZnJvbSBmcmF5IGFuZCBwcm92aWRlIGV2ZW4gZXh0cmEgZHVyYWJpbGl0eS4gT3VyIGN1c3RvbWVyIG5ldmVyIGhhdmUgdG8gdGllIHRoZWlyIG93biBrbm90cyEgRWFjaCBoYW1tb2NrIGFsc28gY29tZXMgd2l0aCBhIHNldCBvZiBhbHVtaW51bSB3aXJlLWdhdGUgY2FyYWJpbmVycyB0aGF0IHdvcmsgd2l0aCBvdXIgc3VzcGVuc2lvbiBzeXN0ZW0uIEFsbCB5b3UgbmVlZCB0byBkbyBub3cgaXMgY2hvb3NlIHlvdXIgb2YgaGFtbW9jay4nXG4gIH0sIHtcbiAgICBxdWVzdGlvbjogJ0hvdyBkbyBJIHdhc2ggbXkgTWFrZSBUcmFja3MgaGFtbW9jaz8nLFxuICAgIGFuc3dlcjogJ1lvdSBjYW4gbWFjaGluZSB3YXNoIG9yIGhhbmQgd2FzaCB5b3VyIGhhbW1vY2suIChOT1RFOiBEbyBub3QgcHV0IHRoZSBoYW1tb2NrIGluIHRoZSBkcnllciEgQWlyIGRyeSBvbmx5ISknLFxuICAgIHRpcDE6ICdNYWNoaW5lIFdhc2g6IEZpcnN0LCByZW1vdmUgdGhlIHRoZSBjYXJhYmluZXJzIHRoZW4gd2FzaCBvbiBjb29sIGluIGEgZnJvbnQgbG9hZCB3YXNoZXIgb24gdGhlIGRlbGljYXRlIGN5Y2xlIHNldGluZyB1c2luZyBhIG1pbGQgZGV0ZXJnZW50LiBEbyBub3QgdW50aWUgYW55IGtub3RzIScsXG4gICAgdGlwMjogJ0hhbmQgV2FzaDogV2UgcmVjb21tZW5kIHVzaW5nIGEgY2xvdGggd2l0aCBzb2FwIG9yIG1pbGQgZGV0ZXJnZW50LidcbiAgfSx7XG4gICAgcXVlc3Rpb246ICdIb3cgZG8gSSBjYXJlIGZvciBteSBNYWtlIFRyYWNrcyBoYW1tb2NrPycsXG4gICAgYW5zd2VyOiAnU2FmZXR5OiBJbiBzZXQgdXAsIGluc3VyZSB0aGF0IHlvdXIgc3RyYXBzIGFyZSBzZWN1cmVseSB3cmFwcGVkIGFuZCB0aGUgY2FyYWJpbmVycyBhcmUgY2xvc2VkLiBFYXNlIGludG8geW91ciBoYW1tb2NrIHNsb3dseSB0byBtYWtlIHN1cmUgaXQgaGFuZ3Mgc2VjdXJlbHkuJyxcbiAgICB0aXAxOiAnVVYgRGFtYWdlOiBVViBkYW1hZ2UgY2FuIG1ha2UgdGhlIGhhbW1vY2sgZmFkZSBpbiBjb2xvciBhbmQgd2Vha2VuIHRoZSBmYWJyaWMgd2hpY2ggbGVhZHMgdG8gdGVhcmluZy4gV2UgcmVjb21tZW5kIHdoZW4gdGhlIGhhbW1vY2sgaXMgbm90IGluIHVzZTsgcGFjayBpdCBpbiBpdHMgc2FjayBhbmQgc3RvcmUgc29tZXdoZXJlIGRyeSBhbmQgY29vbC4nXG4gIH0sIHtcbiAgICBxdWVzdGlvbjogJ0RvZXMgdGhlIGhhbW1vY2sgY29tZSB3aXRoIHN0cmFwcz8nLFxuICAgIGFuc3dlcjogJ091ciBoYW1tb2NrIHBhY2thZ2UgY29tZXMgd2l0aCBldmVyeXRoaW5nIHlvdSBuZWVkIGZvciBhIGdyZWF0IGhhbW1vY2sgZXhwZXJpZW5jZS4gV2UgdXNlIGVuZC1zdHJhcHMgaW5zdGVhZCBvZiBrbm90ZWQgcm9wZSB0byBhdHRhY2ggdG8gb3VyIGNhcmFiaW5lcnMgZm9yIHRoZWlyIHJlbGlhYmlsaXR5IGFuZCBzdHJlbmd0aC4gVGhlIHBhY2thZ2UgYWxzbyBjb21lcyB3aXRoIHRyZWUtc2xlZXZlcywgd2hpY2ggaGFzIHByZS1rbm90ZWQgcm9wZSBhbmQgZW5jYXNlZCBieSBhIG55bG9uIG1hdGVyaWFsIHNvIHByb3RlY3QgdGhlIHJvcGUgZnJvbSBmcmF5aW5nLidcbiAgfSwge1xuICAgIHF1ZXN0aW9uOiAnV2lsbCBJIG5lZWQgc3RyYXBzIHRvIHVzZSB0aGUgaGFtbW9jaz8nLFxuICAgIGFuc3dlcjogJ05vLCB5b3Ugbm90IG5lZWQgYW55IGV4dHJhIHN0cmFwcyB0aGVuIHdoYXQgdGhlIGhhbW1vY2sgcGFja2FnZSBjb21lcyB3aXRoLidcbiAgfSwge1xuICAgIHF1ZXN0aW9uOiAnV2hhdCBpcyB0aGUgbWF4aW11bSB3ZWlnaHQgY2FwYWNpdHkgb2Ygb3VyIGhhbW1vY2tzPycsXG4gICAgYW5zd2VyOiAnODAwIGxicyEnXG4gIH0sIHtcbiAgICBxdWVzdGlvbjogJ1doYXQgYXJlIHRoZSBkaW1lbnNpb25zIG9mIHlvdXIgaGFtbW9ja3M/JyxcbiAgICBhbnN3ZXI6ICdEb3VibGUgVHJhY2sgaGFtbW9jazogMTAgeCA2LjUgZmVldC4nXG4gIH0sIHtcbiAgICBxdWVzdGlvbjogJ0hvdyBoaWdoIGRvIEkgbmVlZCB0byBoYW5nIHRoZSBoYW1tb2NrPycsXG4gICAgYW5zd2VyOiAnSG93IGhpZ2ggZG8gSSBuZWVkIHRvIGhhbmcgdGhlIGhhbW1vY2s/J1xuICB9LCB7XG4gICAgcXVlc3Rpb246ICdGb3Igc2V0IHVwLCB3aGF0IGlzIHRoZSBiZXN0IGxlbmd0aCB0byBoYXZlIGJldHdlZW4gZW5kcyBvZiB0aGUgaGFtbW9jaz8nLFxuICAgIGFuc3dlcjogJ1RoZSBiZXN0IHNldCB1cCBpcyBhcm91bmQgMTIgZmVldCBmcm9tIGVuZCB0byBlbmQuJ1xuICB9LCB7XG4gICAgcXVlc3Rpb246ICdXaGF0IGFyZSB0aGUgTWFrZSBUcmFja3MgaGFtbW9ja3MgbWFkZSBvZj8nLFxuICAgIGFuc3dlcjogJ0FsbCBvdXIgaGFtbW9ja3MgYXJlIG1hZGUgb2YgcG9yb3VzLCBicmVhdGhhYmxlIG55bG9uIHRhZmZldGEuIFRoaXMgcG9yb3VzIHF1YWxpdHkgbGVuZHMgaXRzZWxmIHRvIGEgY29vbCBhbmQgY29tZm9ydGFibGUgZXhwZXJpZW5jZS4nXG4gIH0sIHtcbiAgICBxdWVzdGlvbjogJ1dpbGwgbXkgZG9ncyBvciBjYXRzIG5haWxzIHB1bmN0dXJlIHRoZSBoYW1tb2NrPycsXG4gICAgYW5zd2VyOiAnSXQgaXMgZGVmaW5pdGVseSBwb3NzaWJsZSwgYmUgY2F1dGlvdXMhJ1xuICB9LCB7XG4gICAgcXVlc3Rpb246ICdBcmUgeW91ciBoYW1tb2NrcyB3YXRlcnByb29mPycsXG4gICAgYW5zd2VyOiAnTWFrZSBUcmFja3MgaGFtbW9ja3MgYXJlIHdhdGVyIHJlc2lzdGFudCBub3Qgd2F0ZXJwcm9vZi4nXG4gIH1dXG5cbiAgdGhpcy5nZXRGYXFzID0gKCkgPT4ge1xuICAgIGxldCBmYXFzID0gdGhpcy5mYXE7XG4gICAgcmV0dXJuIGZhcXM7XG4gIH1cblxufSkvL2VuZCBvZiBzZXJ2aWNlO1xuIl19
