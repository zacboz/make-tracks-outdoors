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
        controller: 'hammocksCtrl'
    }).state('outpost', {
        url: '/outpost',
        templateUrl: './views/outpost.html',
        controller: 'outpostCtrl'
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

angular.module('makeTracks').controller('homeCtrl', function ($scope, mainSrvc, $stateParams) {

  $scope.bestSellers = mainSrvc.getBestSellers();
  console.log($scope.bestSellers);
}); //end of home controller
'use strict';

angular.module('makeTracks').service('mainSrvc', function () {
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

angular.module('makeTracks').directive('navbar', function () {
  return {
    templateUrl: './views/navbar.html'
  };
}); //end of navbar directive
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImhvbWVDdHJsLmpzIiwibWFpblNydmMuanMiLCJuYXZiYXIuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImNvbmZpZyIsIiRzdGF0ZVByb3ZpZGVyIiwiJHVybFJvdXRlclByb3ZpZGVyIiwic3RhdGUiLCJ1cmwiLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXIiLCJvdGhlcndpc2UiLCIkc2NvcGUiLCJtYWluU3J2YyIsIiRzdGF0ZVBhcmFtcyIsImJlc3RTZWxsZXJzIiwiZ2V0QmVzdFNlbGxlcnMiLCJjb25zb2xlIiwibG9nIiwic2VydmljZSIsIm5hbWUiLCJjb2xvciIsImltYWdlIiwiZGVzYyIsImlkIiwicHJpY2UiLCJoYW1tb2NrcyIsImdldEhhbW1vY2tzIiwiZGlyZWN0aXZlIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxRQUFRQyxNQUFSLENBQWUsWUFBZixFQUE2QixDQUFDLFdBQUQsQ0FBN0IsRUFDR0MsTUFESCxDQUNVLFVBQVNDLGNBQVQsRUFBeUJDLGtCQUF6QixFQUE0Qzs7QUFFbERELG1CQUNHRSxLQURILENBQ1MsTUFEVCxFQUNnQjtBQUNWQyxhQUFJLEdBRE07QUFFVkMscUJBQWEsbUJBRkg7QUFHVkMsb0JBQVk7QUFIRixLQURoQixFQU1HSCxLQU5ILENBTVMsT0FOVCxFQU1pQjtBQUNYQyxhQUFJLFFBRE87QUFFWEMscUJBQWE7QUFGRixLQU5qQixFQVVHRixLQVZILENBVVMsVUFWVCxFQVVvQjtBQUNkQyxhQUFJLFdBRFU7QUFFZEMscUJBQWEsdUJBRkM7QUFHZEMsb0JBQVk7QUFIRSxLQVZwQixFQWVHSCxLQWZILENBZVMsU0FmVCxFQWVtQjtBQUNiQyxhQUFJLFVBRFM7QUFFYkMscUJBQWEsc0JBRkE7QUFHYkMsb0JBQVk7QUFIQyxLQWZuQixFQW9CR0gsS0FwQkgsQ0FvQlMsU0FwQlQsRUFvQm1CO0FBQ2JDLGFBQUksVUFEUztBQUViQyxxQkFBYTtBQUZBLEtBcEJuQixFQXdCR0YsS0F4QkgsQ0F3QlMsTUF4QlQsRUF3QmdCO0FBQ1ZDLGFBQUksT0FETTtBQUVWQyxxQkFBYSxtQkFGSDtBQUdWQyxvQkFBWTtBQUhGLEtBeEJoQjs7QUE4QkZKLHVCQUNLSyxTQURMLENBQ2UsR0FEZjtBQUlELENBckNEOzs7QUNBQVQsUUFBUUMsTUFBUixDQUFlLFlBQWYsRUFBNkJPLFVBQTdCLENBQXdDLFVBQXhDLEVBQW9ELFVBQUNFLE1BQUQsRUFBU0MsUUFBVCxFQUFtQkMsWUFBbkIsRUFBb0M7O0FBRXRGRixTQUFPRyxXQUFQLEdBQXFCRixTQUFTRyxjQUFULEVBQXJCO0FBQ0FDLFVBQVFDLEdBQVIsQ0FBWU4sT0FBT0csV0FBbkI7QUFFRCxDQUxELEdBS0U7OztBQ0xGYixRQUFRQyxNQUFSLENBQWUsWUFBZixFQUE2QmdCLE9BQTdCLENBQXFDLFVBQXJDLEVBQWlELFlBQVU7QUFBQTs7QUFHekQsU0FBS0osV0FBTCxHQUFtQixDQUFDO0FBQ2RLLGNBQU0sYUFEUTtBQUVkQyxlQUFPLGFBRk87QUFHZEMsZUFBTyw2QkFITztBQUlkQyxjQUFNLGlCQUpRO0FBS2RDLFlBQUksQ0FMVTtBQU1kQyxlQUFPO0FBTk8sS0FBRCxFQU9kO0FBQ0NMLGNBQU0sWUFEUDtBQUVDQyxlQUFPLGtCQUZSO0FBR0NDLGVBQU8saUNBSFI7QUFJQ0MsY0FBTSxpQkFKUDtBQUtDQyxZQUFJLENBTEw7QUFNQ0MsZUFBTztBQU5SLEtBUGMsRUFjZjtBQUNFTCxjQUFNLFlBRFI7QUFFRUMsZUFBTywrQkFGVDtBQUdFQyxlQUFPLG1DQUhUO0FBSUVDLGNBQU0saUJBSlI7QUFLRUMsWUFBSSxDQUxOO0FBTUVDLGVBQU87QUFOVCxLQWRlLENBQW5COztBQXVCQSxTQUFLQyxRQUFMLEdBQWdCLENBQUM7QUFDWE4sY0FBTSxhQURLO0FBRVhDLGVBQU8sYUFGSTtBQUdYQyxlQUFPLDZCQUhJO0FBSVhDLGNBQU0saUJBSks7QUFLWEMsWUFBSSxDQUxPO0FBTVhDLGVBQU87QUFOSSxLQUFELEVBT1g7QUFDQ0wsY0FBTSxZQURQO0FBRUNDLGVBQU8sa0JBRlI7QUFHQ0MsZUFBTyxpQ0FIUjtBQUlDQyxjQUFNLGlCQUpQO0FBS0NDLFlBQUksQ0FMTDtBQU1DQyxlQUFPO0FBTlIsS0FQVyxFQWNaO0FBQ0VMLGNBQU0sY0FEUjtBQUVFQyxlQUFPLG9CQUZUO0FBR0VDLGVBQU8sa0NBSFQ7QUFJRUMsY0FBTSxpQkFKUjtBQUtFQyxZQUFJLENBTE47QUFNRUMsZUFBTztBQU5ULEtBZFksRUFxQlo7QUFDRUwsY0FBTSxZQURSO0FBRUVDLGVBQU8saUJBRlQ7QUFHRUMsZUFBTyw0QkFIVDtBQUlFQyxjQUFNLGlCQUpSO0FBS0VDLFlBQUksQ0FMTjtBQU1FQyxlQUFPO0FBTlQsS0FyQlksRUE0Qlo7QUFDRUwsY0FBTSxZQURSO0FBRUVDLGVBQU8sK0JBRlQ7QUFHRUMsZUFBTyxtQ0FIVDtBQUlFQyxjQUFNLGlCQUpSO0FBS0VDLFlBQUksQ0FMTjtBQU1FQyxlQUFPO0FBTlQsS0E1QlksQ0FBaEI7O0FBcUNFLFNBQUtULGNBQUwsR0FBc0IsWUFBTTtBQUMxQixZQUFJRCxjQUFjLE1BQUtBLFdBQXZCO0FBQ0EsZUFBT0EsV0FBUDtBQUNELEtBSEQ7O0FBS0EsU0FBS1ksV0FBTCxHQUFtQixZQUFNO0FBQ3ZCLFlBQUlELFdBQVcsTUFBS0EsUUFBcEI7QUFDQSxlQUFPQSxRQUFQO0FBQ0QsS0FIRDtBQVFILENBNUVELEdBNEVFOzs7QUM1RUZ4QixRQUFRQyxNQUFSLENBQWUsWUFBZixFQUE2QnlCLFNBQTdCLENBQXVDLFFBQXZDLEVBQWlELFlBQU07QUFDckQsU0FBTztBQUNMbkIsaUJBQWE7QUFEUixHQUFQO0FBR0QsQ0FKRCxHQUlHIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJywgWyd1aS5yb3V0ZXInXSlcbiAgLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKXtcblxuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ2hvbWUnLHtcbiAgICAgICAgICB1cmw6Jy8nLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiBcIi4vdmlld3MvaG9tZS5odG1sXCIsXG4gICAgICAgICAgY29udHJvbGxlcjogJ2hvbWVDdHJsJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnc3RvcnknLHtcbiAgICAgICAgICB1cmw6Jy9zdG9yeScsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL3N0b3J5Lmh0bWwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdoYW1tb2Nrcycse1xuICAgICAgICAgIHVybDonL2hhbW1vY2tzJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvaGFtbW9ja3MuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ2hhbW1vY2tzQ3RybCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ291dHBvc3QnLHtcbiAgICAgICAgICB1cmw6Jy9vdXRwb3N0JyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3Mvb3V0cG9zdC5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnb3V0cG9zdEN0cmwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdjb250YWN0Jyx7XG4gICAgICAgICAgdXJsOicvY29udGFjdCcsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2NvbnRhY3QuaHRtbCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2pvaW4nLHtcbiAgICAgICAgICB1cmw6Jy9qb2luJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3Mvam9pbi5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnam9pbkN0cmwnXG4gICAgICB9KTtcblxuICAkdXJsUm91dGVyUHJvdmlkZXJcbiAgICAgIC5vdGhlcndpc2UoJy8nKTtcblxuXG59KTtcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJykuY29udHJvbGxlcignaG9tZUN0cmwnLCAoJHNjb3BlLCBtYWluU3J2YywgJHN0YXRlUGFyYW1zKSA9PiB7XG5cbiAgJHNjb3BlLmJlc3RTZWxsZXJzID0gbWFpblNydmMuZ2V0QmVzdFNlbGxlcnMoKTtcbiAgY29uc29sZS5sb2coJHNjb3BlLmJlc3RTZWxsZXJzKTtcblxufSkvL2VuZCBvZiBob21lIGNvbnRyb2xsZXJcbiIsImFuZ3VsYXIubW9kdWxlKCdtYWtlVHJhY2tzJykuc2VydmljZSgnbWFpblNydmMnLCBmdW5jdGlvbigpe1xuXG5cbiAgdGhpcy5iZXN0U2VsbGVycyA9IFt7XG4gICAgICAgIG5hbWU6ICdUaGUgU3VucmlzZScsXG4gICAgICAgIGNvbG9yOiAnT3JhbmdlL0dyZXknLFxuICAgICAgICBpbWFnZTogXCIuLi9pbWcvaGFtbW9ja3Mvc3VucmlzZS5qcGdcIixcbiAgICAgICAgZGVzYzogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGlkOiAxLFxuICAgICAgICBwcmljZTogMzUuOTdcbiAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdUaGUgR2V5c2VyJyxcbiAgICAgICAgY29sb3I6ICdCbHVlLyBMaWdodCBCbHVlJyxcbiAgICAgICAgaW1hZ2U6IFwiLi4vaW1nL2hhbW1vY2tzL2JsdWVoYW1tb2NrLmpwZ1wiLFxuICAgICAgICBkZXNjOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIHByaWNlOiAzNS45N1xuICAgIH0se1xuICAgICAgICBuYW1lOiAnVGhlIE1lYWRvdycsXG4gICAgICAgIGNvbG9yOiAnTGltZSBHcmVlbi8gTGlnaHQgQmx1ZS8gV2hpdGUnLFxuICAgICAgICBpbWFnZTogXCIuLi9pbWcvaGFtbW9ja3MvbWVhZG93aGFtbW9jay5qcGdcIixcbiAgICAgICAgZGVzYzogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGlkOiA1LFxuICAgICAgICBwcmljZTogMzUuOTdcbiAgICB9XVxuXG4gIHRoaXMuaGFtbW9ja3MgPSBbe1xuICAgICAgICBuYW1lOiAnVGhlIFN1bnJpc2UnLFxuICAgICAgICBjb2xvcjogJ09yYW5nZS9HcmV5JyxcbiAgICAgICAgaW1hZ2U6IFwiLi4vaW1nL2hhbW1vY2tzL3N1bnJpc2UuanBnXCIsXG4gICAgICAgIGRlc2M6ICdDb21pbmcgTWF5IDIwMTcnLFxuICAgICAgICBpZDogMSxcbiAgICAgICAgcHJpY2U6IDM1Ljk3XG4gICAgfSwge1xuICAgICAgICBuYW1lOiAnVGhlIEdleXNlcicsXG4gICAgICAgIGNvbG9yOiAnQmx1ZS8gTGlnaHQgQmx1ZScsXG4gICAgICAgIGltYWdlOiBcIi4uL2ltZy9oYW1tb2Nrcy9ibHVlaGFtbW9jay5qcGdcIixcbiAgICAgICAgZGVzYzogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGlkOiAyLFxuICAgICAgICBwcmljZTogMzUuOTdcbiAgICB9LHtcbiAgICAgICAgbmFtZTogJ1RoZSBXb29kbGFuZCcsXG4gICAgICAgIGNvbG9yOiAnRm9ycmVzdCBHcmVlbi9HcmV5JyxcbiAgICAgICAgaW1hZ2U6IFwiLi4vaW1nL2hhbW1vY2tzL2dyZWVuaGFtbW9jay5qcGdcIixcbiAgICAgICAgZGVzYzogJ0NvbWluZyBNYXkgMjAxNycsXG4gICAgICAgIGlkOiAzLFxuICAgICAgICBwcmljZTogMzUuOTdcbiAgICB9LHtcbiAgICAgICAgbmFtZTogJ1RoZSBTdW1taXQnLFxuICAgICAgICBjb2xvcjogJ0NoYXJjb2FsL01hcm9vbicsXG4gICAgICAgIGltYWdlOiBcIi4uL2ltZy9oYW1tb2Nrcy9zdW1taXQuanBnXCIsXG4gICAgICAgIGRlc2M6ICdDb21pbmcgTWF5IDIwMTcnLFxuICAgICAgICBpZDogNCxcbiAgICAgICAgcHJpY2U6IDM1Ljk3XG4gICAgfSx7XG4gICAgICAgIG5hbWU6ICdUaGUgTWVhZG93JyxcbiAgICAgICAgY29sb3I6ICdMaW1lIEdyZWVuLyBMaWdodCBCbHVlLyBXaGl0ZScsXG4gICAgICAgIGltYWdlOiBcIi4uL2ltZy9oYW1tb2Nrcy9tZWFkb3doYW1tb2NrLmpwZ1wiLFxuICAgICAgICBkZXNjOiAnQ29taW5nIE1heSAyMDE3JyxcbiAgICAgICAgaWQ6IDUsXG4gICAgICAgIHByaWNlOiAzNS45N1xuICAgIH1dXG5cbiAgICB0aGlzLmdldEJlc3RTZWxsZXJzID0gKCkgPT4ge1xuICAgICAgbGV0IGJlc3RTZWxsZXJzID0gdGhpcy5iZXN0U2VsbGVycztcbiAgICAgIHJldHVybiBiZXN0U2VsbGVycztcbiAgICB9XG5cbiAgICB0aGlzLmdldEhhbW1vY2tzID0gKCkgPT4ge1xuICAgICAgbGV0IGhhbW1vY2tzID0gdGhpcy5oYW1tb2NrcztcbiAgICAgIHJldHVybiBoYW1tb2NrcztcbiAgICB9XG5cblxuXG5cbn0pLy9lbmQgb2Ygc2VydmljZVxuIiwiYW5ndWxhci5tb2R1bGUoJ21ha2VUcmFja3MnKS5kaXJlY3RpdmUoJ25hdmJhcicsICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvbmF2YmFyLmh0bWwnXG4gIH07XG59KSAvL2VuZCBvZiBuYXZiYXIgZGlyZWN0aXZlXG4iXX0=
