angular.module('makeTracks').service('hammockSrvc', function(){


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
    },{
        id: 5,
        name: 'The Breeze',
        color: 'Lime Green/ Light Blue/ White',
        image: "./img/hammocks/product/oasishammock.jpg",
        image1: "./img/hammocks/product/oasishammockandbag.jpg",
        image2: "",
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes all come with pretied knots!',
        price: 34.99
    }]

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
    },{
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
    },{
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
        status: 'Coming May 2017',
        desc: 'The best hammock out there! Great for 1, perfect for 2. Easily transportable and stuffs right into the attached sack. Set up in seconds because our ropes all come with pretied knots!',
        price: 34.99
    },{
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
        // console.log(hammockDetails, stateParams);
        if(hammockDetails[i].id === parseInt(stateParams.id)){
          return hammockDetails[i]
        }
      }
    }




})//end of service
