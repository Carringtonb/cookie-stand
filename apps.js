'use strict'

// Creating an array to hold all of the store hours
var hoursOpen = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm']

// function specificStore(storeName, minimumGuests, maximumGuests, avgCookies){
//     this.minimumGuests
//     this.maximumGuests
//     this.avgCookies

 


function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
};

var seattle = {
    location: 'Seattle',
    minimumGuests: 23,
    maximumGuests: 65,
    avgCookies: 6.3,
    cookiesPerHour: [],
    customersPerHour: [],
    totalPerDay: 0,

avgCustomerPerHour: function(){
for(var i = 0; i < hoursOpen.length; i++){
    this.customersPerHour.push(getRandom(this.minimumGuests, this.maximumGuests));   
}
},

avgCookiesPerHour: function(){
this.avgCustomerPerHour();
for(var i = 0; i < hoursOpen.length; i++) {
var oneHour = Math.ceil(this.customersPerHour[i] * this.avgCookies);
this.cookiesPerHour.push(oneHour);
//total per day this.totalPerDay += oneHour;
}

},

render: function() {
    this.avgCookiesPerHour();
    var myUL = document.getElementById('Seattle');
    for(var i = 0; i < hoursOpen.length; i++){
        var myLi = document.createElement('li');
        myLi.textContent = hoursOpen[i] + ':' + this.cookiesPerHour[i] + ' cookies.';
        myUL.appendChild(myLi);
    }

}

};

// var shops = [seattle];
// for(var i = 0; i < shops.length; i++){
//     shops[i].render();
// }

console.log(seattle.cookiesPerHour);

// Start Code for Tokyo

var tokyo = {
    location: 'Tokyo',
    minimumGuests: 3,
    maximumGuests: 24,
    avgCookies: 1.2,
    cookiesPerHour: [],
    customersPerHour: [],
    totalPerDay: 0,

avgCustomerPerHour: function(){
    for(var i = 0; i < hoursOpen.length; i++){
    this.customersPerHour.push(getRandom(this.minimumGuests, this.maximumGuests));
    }
},

avgCookiesPerHour: function(){
this.avgCustomerPerHour();
for(var i = 0; i < hoursOpen.length; i++){
    var oneHour = Math.ceil(this.customersPerHour[i] * this.avgCookies);
    this.cookiesPerHour.push(oneHour);
}
},
render: function() {
    this.avgCookiesPerHour();
    var myUL = document.getElementById('Tokyo');
    for(var i = 0; i < hoursOpen.length; i++){
        var myLi = document.createElement('li');
        myLi.textContent = hoursOpen[i] + ':' + this.cookiesPerHour[i] + ' cookies.';
        myUl.appendChild(myLi);
    }
}

}
var shops = [seattle, tokyo];
for(var i = 0; i < shops.length; i++){
    shops[i].render();
}
console.log(tokyo.cookiesPerHour);