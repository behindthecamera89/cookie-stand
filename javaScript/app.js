'use strict';

// global variables
// Hours of operation
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// console.log(hours);
var allStores = [];
var tableListParent = document.getElementById('table');
// var seattleListParent = document.getElementById('seattle-list');
// var tokyoListParent = document.getElementById('tokyo-list');
// var dubaiListParent = document.getElementById('dubai-list');
// var parisListParent = document.getElementById('paris-list');
// var limaListParent = document.getElementById('lima-list');


// Contructor Start
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
function tableHeader() {
  var table = document.getElementById('table');
  var header = table.createTHead();
  var row = header.insertRow(0);
  var cell = row.insertCell(0);
  cell.innerHTML = hours;
}
tableHeader();

//Code Found online
// let tableHeader = document.querySelector('table');
// let data = Object.keys(hours[0]);
// generateTableHead(tableHeader);
// const vm = {};
// vm.lines = hours.length;

// const headers = vm.lines[0];
// const data = vm.lines.slice(1);

// const columns = data.reduce((newColumns, row) => {
//   for(let i=0;i<hours.length;i++){
//     if(newColumns.length-1 < i) {
//       newColumns.push([]);
//     }
//     newColumns[i].push(row[i]);
//   }
//   return newColumns;
// }, []);

// const columnsWithHeaders = headers.map((header, index) => ({[header]:columns[index]}));



new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 2.3);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);

function renderStores() {
  for (var i = 0; i <= allStores.length; i++) {
    allStores[i].render();
  }
}
renderStores();
// allStores[0].render();
// allStores[1].render();
// allStores[2].render();
// i.render();
// renderList: function () {

// }

