angular.module('makeTracks').service('hammockSrvc', function(){


  this.bestSellers = [{
        id: 1,
        name: 'The Sunrise',
        color: 'Orange/Grey',
        image: "../img/hammocks/sunrise.jpg",
        desc: 'Coming May 2017',
        price: 35.97
    }, {
        id: 2,
        name: 'The Geyser',
        color: 'Blue/ Light Blue',
        image: "../img/hammocks/bluehammock.jpg",
        desc: 'Coming May 2017',
        price: 35.97
    },{
        id: 3,
        name: 'The Meadow',
        color: 'Lime Green/ Light Blue/ White',
        image: "../img/hammocks/meadowhammock.jpg",
        desc: 'Coming May 2017',
        price: 35.97
    }]

  this.hammocks = [{
        id: 1,
        name: 'The Sunrise',
        color: 'Orange/Grey',
        image: "../img/hammocks/sunrise.jpg",
        desc: 'Coming May 2017',
        price: 35.97
    }, {
        id: 2,
        name: 'The Geyser',
        color: 'Blue/ Light Blue',
        image: "../img/hammocks/bluehammock.jpg",
        desc: 'Coming May 2017',
        price: 35.97
    },{
        id: 3,
        name: 'The Woodland',
        color: 'Forrest Green/Grey',
        image: "../img/hammocks/greenhammock.jpg",
        desc: 'Coming May 2017',
        price: 35.97
    },{
        id: 4,
        name: 'The Summit',
        color: 'Charcoal/Maroon',
        image: "../img/hammocks/summit.jpg",
        desc: 'Coming May 2017',
        price: 35.97
    },{
        id: 5,
        name: 'The Meadow',
        color: 'Lime Green/ Light Blue/ White',
        image: "../img/hammocks/meadowhammock.jpg",
        desc: 'Coming May 2017',
        price: 35.97
    }]

    this.getBestSellers = () => {
      let bestSellers = this.bestSellers;
      return bestSellers;
    }

    this.getHammocks = () => {
      let hammocks = this.hammocks;
      return hammocks;
    }

    this.getHammockDetails = (stateParams) => {
      let hammockDetails = this.hammocks;
      for(var i = 0; i < hammockDetails.length; i++){
        console.log(hammockDetails, stateParams);
        if(hammockDetails[i].id === parseInt(stateParams.id)){
          return hammockDetails[i]
        }
      }
    }




})//end of service
