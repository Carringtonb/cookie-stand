// 'use strict'

// // Creating an array to hold all of the store hours
// var hoursOpen = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm']

// // function specificStore(storeName, minimumGuests, maximumGuests, avgCookies){
// //     this.minimumGuests
// //     this.maximumGuests
// //     this.avgCookies

 

// // function to produce a random number between two values
// function getRandom(min, max){
//     return Math.floor(Math.random() * (max - min + 1) + min);
// };

// var seattle = {
//     location: 'Seattle',
//     minimumGuests: 23,
//     maximumGuests: 65,
//     avgCookies: 6.3,
//     cookiesPerHour: [],
//     customersPerHour: [],
//     totalPerDay: 0,

// avgCustomerPerHour: function(){
// for(var i = 0; i < hoursOpen.length; i++){
//     this.customersPerHour.push(getRandom(this.minimumGuests, this.maximumGuests));   
// }
// },

// avgCookiesPerHour: function(){
// this.avgCustomerPerHour();
// for(var i = 0; i < hoursOpen.length; i++) {
// var oneHour = Math.ceil(this.customersPerHour[i] * this.avgCookies);
// this.cookiesPerHour.push(oneHour);
// //total per day this.totalPerDay += oneHour;

// }

// },


// render: function() {
//     this.avgCookiesPerHour();
//     var myUL = document.getElementById('Seattle');
//     for(var i = 0; i < hoursOpen.length; i++){
//         var myLi = document.createElement('li');
//         myLi.textContent = hoursOpen[i] + ':' + this.cookiesPerHour[i] + ' cookies.';
//         myUL.appendChild(myLi);
//     }

// }

// };

// console.log(seattle.cookiesPerHour);

// // Start Code for Tokyo

// var tokyo = {
//     location: 'Tokyo',
//     minimumGuests: 3,
//     maximumGuests: 24,
//     avgCookies: 1.2,
//     cookiesPerHour: [],
//     customersPerHour: [],
//     totalPerDay: 0,

// avgCustomerPerHour: function(){
//     for(var i = 0; i < hoursOpen.length; i++){
//     this.customersPerHour.push(getRandom(this.minimumGuests, this.maximumGuests));
//     }
// },

// avgCookiesPerHour: function(){
// this.avgCustomerPerHour();
// for(var i = 0; i < hoursOpen.length; i++){
//     var oneHour = Math.ceil(this.customersPerHour[i] * this.avgCookies);
//     this.cookiesPerHour.push(oneHour);
// }
// },
// render: function() {
//     this.avgCookiesPerHour();
//     var myUL = document.getElementById('Tokyo');
//     for(var i = 0; i < hoursOpen.length; i++){
//         var myLi = document.createElement('li');
//         myLi.textContent = hoursOpen[i] + ':' + this.cookiesPerHour[i] + ' cookies.';
//         myUL.appendChild(myLi);
//     }
// }

// }

// var dubai = {
//     location: 'Dubai',
//     minimumGuests: 11,
//     maximumGuests: 38,
//     avgCookies: 3.7,
//     cookiesPerHour: [],
//     customersPerHour: [],
//     totalPerDay: 0,

// avgCustomerPerHour: function(){
//     for(var i = 0; i < hoursOpen.length; i++){
//     this.customersPerHour.push(getRandom(this.minimumGuests, this.maximumGuests));
//     }
// },

// avgCookiesPerHour: function(){
// this.avgCustomerPerHour();
// for(var i = 0; i < hoursOpen.length; i++){
//     var oneHour = Math.ceil(this.customersPerHour[i] * this.avgCookies);
//     this.cookiesPerHour.push(oneHour);
// }
// },
// render: function() {
//     this.avgCookiesPerHour();
//     var myUL = document.getElementById('Dubai');
//     for(var i = 0; i < hoursOpen.length; i++){
//         var myLi = document.createElement('li');
//         myLi.textContent = hoursOpen[i] + ':' + this.cookiesPerHour[i] + ' cookies.';
//         myUL.appendChild(myLi);
//     }
// }

// }

// var paris = {
//     location: 'Paris',
//     minimumGuests: 20,
//     maximumGuests: 38,
//     avgCookies: 2.3,
//     cookiesPerHour: [],
//     customersPerHour: [],
//     totalPerDay: 0,

// avgCustomerPerHour: function(){
//     for(var i = 0; i < hoursOpen.length; i++){
//     this.customersPerHour.push(getRandom(this.minimumGuests, this.maximumGuests));
//     }
// },

// avgCookiesPerHour: function(){
// this.avgCustomerPerHour();
// for(var i = 0; i < hoursOpen.length; i++){
//     var oneHour = Math.ceil(this.customersPerHour[i] * this.avgCookies);
//     this.cookiesPerHour.push(oneHour);
// }
// },
// render: function() {
//     this.avgCookiesPerHour();
//     var myUL = document.getElementById('Paris');
//     for(var i = 0; i < hoursOpen.length; i++){
//         var myLi = document.createElement('li');
//         myLi.textContent = hoursOpen[i] + ':' + this.cookiesPerHour[i] + ' cookies.';
//         myUL.appendChild(myLi);
//     }
// }

// }

// var lima = {
//     location: 'Lima',
//     minimumGuests: 2,
//     maximumGuests: 16,
//     avgCookies: 4.6,
//     cookiesPerHour: [],
//     customersPerHour: [],
//     totalPerDay: 0,

// avgCustomerPerHour: function(){
//     for(var i = 0; i < hoursOpen.length; i++){
//     this.customersPerHour.push(getRandom(this.minimumGuests, this.maximumGuests));
//     }
// },

// avgCookiesPerHour: function(){
// this.avgCustomerPerHour();
// for(var i = 0; i < hoursOpen.length; i++){
//     var oneHour = Math.ceil(this.customersPerHour[i] * this.avgCookies);
//     this.cookiesPerHour.push(oneHour);
// }
// },
// render: function() {
//     this.avgCookiesPerHour();
//     var myUL = document.getElementById('Lima');
//     for(var i = 0; i < hoursOpen.length; i++){
//         var myLi = document.createElement('li');
//         myLi.textContent = hoursOpen[i] + ':' + this.cookiesPerHour[i] + ' cookies.';
//         myUL.appendChild(myLi);
//     }
// }

// }

// var shops = [seattle, tokyo, dubai, paris, lima];
// for(var i = 0; i < shops.length; i++){
//     shops[i].render();
// }
// console.log(tokyo.cookiesPerHour);




/////// NEW CODE UNDER THIS LINE
var hoursOpen = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
};

var totalSalesHour = [];

function Location(name, minCustomers, maxCustomers, averageCookies){
    this.name = name;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.averageCookies = averageCookies;
    this.totalCookies = 0;
    this.randomCustomers = [];
    this.cookiesSoldEachHour = [];
    //this.range = maxCustomers - minCustomers + 1;
};
    

Location.prototype.getRandomCustomer = function(min, max){
    for(var i = 0; i<hoursOpen.length; i++){
    var randomNumber =  Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
    this.randomCustomers.push(randomNumber);
    // console.log(this.randomCustomers, 'Hi brint'); 
    }
}

Location.prototype.getCookiesPerHour = function(){
    for(var i = 0; i < hoursOpen.length; i++){
        var cookiesEachHour = Math.ceil(this.randomCustomers[i] * this.averageCookies);
        this.cookiesSoldEachHour.push(cookiesEachHour);
        // console.log(this.cookiesSoldEachHour, 'Hi Bri');
        // console.log(this.randomCustomers[i], 'Hi Gus');
    }
}
Location.prototype.calculateTotalCookies = function(){
    for(var i = 0; i < this.cookiesSoldEachHour.length; i++){
        this.totalCookies += this.cookiesSoldEachHour[i];
    }
}

Location.prototype.render = function(){
    this.getRandomCustomer();
    this.getCookiesPerHour();
    this.calculateTotalCookies();
}

var citySeattle = new Location('Seattle,', 23, 65, 6.3);
var cityTokyo = new Location('Tokyo', 3, 24, 1.2);
var cityDubai = new Location('Dubai', 11, 38, 3.7);
var cityLima = new Location('Lima', 2, 16, 4.6);

//assigned allLocations to locations
function TableBuilder(locations){
    this.locations = locations;
}
// added buildRows function to object of TableBuilder
TableBuilder.prototype.buildRows = function(){
    //grabbed tableData table from HTML
    var myTable = document.getElementById('tableData');
    for(var i = 0; i < this.locations.length; i++){
    //assigned locations.length[i] to variable place
        var place = this.locations[i];
        //calculated data for each place
        place.render();
        //create the table row for each place
        var tableRow = document.createElement('tr');
        myTable.appendChild(tableRow);
        // created td element for table data and passed in each places cookies sold array
        for(var j = 0; j < hoursOpen.length; j++){
            var dataTable = document.createElement('td');
            dataTable.textContent = place.cookiesSoldEachHour[j];
            tableRow.appendChild(dataTable);
        }
}
}
// took locations from 256-259 and organized them into an array named allLocations
//assigned all locations to TableBuilder and created variable bobTheBuilder
var allLocations = [citySeattle, cityTokyo, cityDubai, cityLima];
var bobTheBuilder = new TableBuilder(allLocations);

bobTheBuilder.buildRows();













// atempt at getting random number generator into a prototype


// Location.prototype.generatecookiesSoldEachHour = function(){
//     for(var i = 0; i < hoursOpen.length; i++)
//     var cookiesSalesThisHour = this.
// }