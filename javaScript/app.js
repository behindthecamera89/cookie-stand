'use strict';

// global variables
// Hours of operation
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// console.log(hours);

var seattleListParent = document.getElementById('seattle-list');
// var tokyoListParent = document.getElementById('tokyo-list');
var tokyoListParent = document.getElementById('tokyo-list');
var dubaiListParent = document.getElementById('dubai-list');
var parisListParent = document.getElementById('paris-list');
var limaListParent = document.getElementById('lima-list');

// console.log(seattleList);


// elements from DOM - Lists - DOM is our index page?
// var seattleList = document.getElementById('seattle');
// object literals 

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
    // we are going to get a random number of customers. multiply number of customers by the average sales/hour, THEN add that hourly total to the hourlySalesArray
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
    this.calculateHourlySales();
    // iteratively render alist item
    // create an element
    for (var i = 0; i < this.hourlySales.length; i++) {
      var liElement = document.createElement('li');
      // give it content
      liElement.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
      // apend it to the DOM
      seattleListParent.appendChild(liElement);
      // render daily total
    }
  }
};
// executable
seattleStore.render();

// object 2/store 2
var tokyoStore = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  hourlySales: [],
  dailyTotal: 0,
  getRandomNumber: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calculateHourlySales: function () {
    // we are going to get a random number of customers. multiply number of customers by the average sales/hour, THEN add that hourly total to the hourlySalesArray
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
    this.calculateHourlySales();
    // iteratively render alist item
    // create an element
    for (var i = 0; i < this.hourlySales.length; i++) {
      var liElement = document.createElement('li');
      // give it content
      liElement.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
      // apend it to the DOM
      tokyoListParent.appendChild(liElement);
      // render daily total
    }
  }
};
// executable
tokyoStore.render();



//object 3/store 3
var dubaiStore = {
  name: 'Seattle',
  min: 11,
  max: 38,
  avg: 2.3,
  hourlySales: [],
  dailyTotal: 0,
  getRandomNumber: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calculateHourlySales: function () {
    // we are going to get a random number of customers. multiply number of customers by the average sales/hour, THEN add that hourly total to the hourlySalesArray
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
    this.calculateHourlySales();
    // iteratively render alist item
    // create an element
    for (var i = 0; i < this.hourlySales.length; i++) {
      var liElement = document.createElement('li');
      // give it content
      liElement.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
      // apend it to the DOM
      dubaiListParent.appendChild(liElement);
      // render daily total
    }
  }
};
// executable
dubaiStore.render();


//object 4/store 4
var parisStore = {
  name: 'Seattle',
  min: 20,
  max: 38,
  avg: 2.3,
  hourlySales: [],
  dailyTotal: 0,
  getRandomNumber: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calculateHourlySales: function () {
    // we are going to get a random number of customers. multiply number of customers by the average sales/hour, THEN add that hourly total to the hourlySalesArray
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
    this.calculateHourlySales();
    // iteratively render alist item
    // create an element
    for (var i = 0; i < this.hourlySales.length; i++) {
      var liElement = document.createElement('li');
      // give it content
      liElement.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
      // apend it to the DOM
      parisListParent.appendChild(liElement);
      // render daily total
    }
  }
};
// executable
parisStore.render();


//object 5/store 5
var limaStore = {
  name: 'Seattle',
  min: 2,
  max: 16,
  avg: 4.6,
  hourlySales: [],
  dailyTotal: 0,
  getRandomNumber: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calculateHourlySales: function () {
    // we are going to get a random number of customers. multiply number of customers by the average sales/hour, THEN add that hourly total to the hourlySalesArray
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
    this.calculateHourlySales();
    // iteratively render alist item
    // create an element
    for (var i = 0; i < this.hourlySales.length; i++) {
      var liElement = document.createElement('li');
      // give it content
      liElement.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
      // apend it to the DOM
      limaListParent.appendChild(liElement);
      // render daily total
    }
  }
};
// executable
limaStore.render();


