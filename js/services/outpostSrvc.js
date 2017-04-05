angular.module('makeTracks').service('outpostSrvc', function(){

  this.faq = [{
    question: 'Wanting to buy a hammock? Here is how to get started?',
    answer: 'All our hammocks come with a set carabiners and that work with our suspension system. All you need for basic set up is your choice of hammock and your choice of straps.'
  }, {
    question: 'How do I wash my Make Tracks hammock?',
    answer: 'You can machine wash or hand wash your hammock. (NOTE: Do not put the hammock in the dryer! Air dry only!)',
    tip1: 'Machine Wash: First, remove the the carabiners then wash on cool in a front load washer on the delicate cycle seting using a mild detergent. Do not untie any knots!',
    tip2: 'Hand Wash: We recommend using a cloth with soap or mild detergent.'
  },{
    question: 'How do I care for my Make Tracks hammock?',
    answer: ''
  }, {
    question: 'Does the hammock come with straps?',
    answer: ''
  }, {
    question: 'Will I need straps to use the hammock?',
    answer: ''
  }, {
    question: 'What are the dimensions of your hammocks and straps?',
    answer: 'Double Track hammock: 8 x 4 x 4 inches. Straps: 6 x 5 x 2 inches.'
  }, {
    question: 'How high do I need to hang the hammock?',
    answer: 'We recommend around 2 feet or higher.'
  }, {
    question: 'For set up, what is the best length to have between ends of the hammock?',
    answer: 'The best set up is around 12 feet from end to end.'
  }, {
    question: 'What are the Make Tracks hammocks made of?',
    answer: 'All our hammocks are made of porous, breathable nylon taffeta. This porous quality lends itself to a cool, comfortable experience.'
  }, {
    question: 'Will my dogs or cats nails puncture the hammock?',
    answer: 'It is very likely, we recommend caution.'
  }, {
    question: 'Are your hammocks waterproof?',
    answer: 'Make Tracks hammocks are not waterproof, but are water resistant!'
  }]

  this.getFaqs = () => {
    let faqs = this.faq;
    return faqs;
  }

})//end of service;
