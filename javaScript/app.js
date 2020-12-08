'use strict';

var seattleListParent = document.getElementById('seattle-list');
// console.log(seattleList);

// global variables

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// console.log(hours);

// object 1/Store 1
var seattleStore = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  hourlySales: [],
  dailyTotal: 0,
  getRandomNumber: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calculateHourlySales: function () {
    for (var i = 0; i < hours.length; i++) {
      var customers = this.getRandomNumber();
      // console.log(customers);
      var hourTotal = Math.ceil(customers * this.avg);
      // console.log(hourTotal);
      this.hourlySales.push(hourTotal);
      this.dailyTotal += hourTotal;
    }
  },
  render: function () {
    var seattleList = document.createElement('seattle');
    // console.log(sectionElement);
    seattleList.appendChild(seattleList);
  }
};
seattleStore.calculateHourlySales();
// var seattleListElement = document.createElement('seattle-list');
seattleListParent.appendChild(seattleStore);

// console.log();


// // object 2/Store 2
// var tokyoStore = {
//   name: 'Tokyo',
//   min: 3,
//   max: 24,
//   avg: 1.2,
//   hourlySales: [],
//   dailyTotal: 0,
// };

// // object 3/Store 3
// var dubaiStore = {
//   name: 'Dubai',
//   min: 11,
//   max: 38,
//   avg: 3.7,
//   hourlySales: [],
//   dailyTotal: 0,
// };
// // object 4/Store 4

// var parisStore = {
//   name: 'Paris',
//   min: 20,
//   max: 38,
//   avg: 2.3,
//   hourlySales: [],
//   dailyTotal: 0,
// };
// // object 5/Store 5

// var limaStore = {
//   name: 'Lima',
//   min: 2,
//   max: 16,
//   avg: 4.6,
//   hourlySales: [],
//   dailyTotal: 0,
// };
