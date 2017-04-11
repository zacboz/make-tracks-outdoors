angular.module('makeTracks').service('hammockSrvc', function(){


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
    },{
        id: 5,
        name: 'The Meadow',
        color: 'Lime Green/ Light Blue/ White',
        image: "../img/hammocks/meadowhammock.jpg",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes come with pretied knots!',
        price: 35.97
    }]

  this.hammocks = [{
        id: 1,
        name: 'The Sunrise',
        color: 'orange/gray',
        image: "../img/hammocks/sunrise.jpg",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes come with pretied knots!',
        price: 35.97
    }, {
        id: 2,
        name: 'The Geyser',
        color: 'blue/light blue',
        image: "../img/hammocks/bluehammock.jpg",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes come with pretied knots!',
        price: 35.97
    },{
        id: 3,
        name: 'The Woodland',
        color: 'green/gray',
        image: "../img/hammocks/greenhammock.jpg",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes come with pretied knots!',
        price: 35.97
    },{
        id: 4,
        name: 'The Summit',
        color: 'charcoal/maroon',
        image: "../img/hammocks/summit.jpg",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes come with pretied knots!',
        price: 35.97
    },{
        id: 5,
        name: 'The Meadow',
        color: 'lime green/ light blue/ white',
        image: "../img/hammocks/meadowhammock.jpg",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes come with pretied knots!',
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
