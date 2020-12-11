'use strict';

// global variables
// Hours of operation
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var tfoot = document.createElement('tfoot');

// console.log(hours);
var allStores = [];
var tableListParent = document.getElementById('table');
var tableHeader = document.getElementById('header');

// Form Code
var containerParent = document.getElementById('container');
var myForm = document.getElementById('form');
console.log(containerParent);
// Contructor Start for Table
function Store(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.hourlySales = [];
  this.dailyTotal = 0;
  allStores.push(this);
}
Store.prototype.getRandomNumber = function () {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};
Store.prototype.calculateHourlySales = function () {
  for (var i = 0; i < hours.length; i++) {
    var customers = this.getRandomNumber();
    // console.log(customers);
    var hourTotal = Math.ceil(customers * this.avg);
    // console.log(hourTotal);
    this.hourlySales.push(hourTotal);
    this.dailyTotal += hourTotal;
  }
};
Store.prototype.render = function () {
  this.calculateHourlySales();
  // iteratively render alist item
  // create an element
  var trElement = document.createElement('tr');
  tableListParent.appendChild(trElement);
  var thElement = document.createElement('th');
  thElement.textContent = this.name;
  trElement.appendChild(thElement);
  for (var i = 0; i < this.hourlySales.length; i++) {
    var tdElement = document.createElement('td');
    // give it content
    tdElement.textContent = this.hourlySales[i];
    // apend it to the DOM
    trElement.appendChild(tdElement);
    // render daily total
  }
  tdElement = document.createElement('td');
  tdElement.textContent = this.dailyTotal;
  trElement.appendChild(tdElement);
};

// Table Header Test Below
function tableHeaderRender() {
  var trElement = document.createElement('tr');
  tableHeader.appendChild(trElement);
  var thElement = document.createElement('th');
  thElement.textContent = 'Stores';
  trElement.appendChild(thElement);
  // make table header render iteratively through the hours
  for (var i = 0; i < hours.length; i++) {
    thElement = document.createElement('th');
    thElement.textContent = hours[i];
    trElement.appendChild(thElement);
  }
  thElement = document.createElement('th');
  thElement.textContent = 'Location Total';
  trElement.appendChild(thElement);
}

// // Table Footer
function tableFooterRender() {
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = 'Daily Total';
  // tableFooter.appendChild(trElement);
  trElement.appendChild(thElement);
  // // make table header render iteratively through the hours
  var totalOfTotals = 0;
  var hourlyTotal = 0;
  for (var i = 0; i < hours.length; i++) {
    hourlyTotal = 0;
    for (var j = 0; j < allStores.length; j++) {
      hourlyTotal += allStores[j].hourlySales[i];
      totalOfTotals += allStores[j].hourlySales[i];
    }
    thElement = document.createElement('th');
    thElement.textContent = hourlyTotal;
    trElement.appendChild(thElement);
  }
  thElement = document.createElement('th');
  thElement.textContent = totalOfTotals;
  trElement.appendChild(thElement);
  tfoot.appendChild(trElement);
  tableListParent.appendChild(tfoot);
}

// form start - event Handler
function handleSubmit(event){
  event.preventDefault();

  var name = event.target.name.value;
  var min = parseInt(event.target.min.value);
  var max = parseInt(event.target.max.value);
  var avg = parseInt(event.target.avg.value);

  var newStore = new Store(name, min, max, avg);
  newStore.render();
  tfoot.innerHTML = '';
  tableFooterRender();
}

// instantiations
new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 2.3);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);

function renderStores() {
  tableHeaderRender();
  for (var i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }
  tableFooterRender();
}
renderStores();

// event listener for form
myForm.addEventListener('submit', handleSubmit);
