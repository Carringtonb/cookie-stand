'use strict'

var hoursOpen = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

var myTable = document.getElementById('tableData');

function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
};

var locations = [];

function Location(name, minCustomers, maxCustomers, averageCookies){
    this.name = name;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.averageCookies = averageCookies;
    this.totalCookies = 0;
    this.randomCustomers = [];
    this.cookiesSoldEachHour = [];
    locations.push(this);
};

Location.prototype.getRandomCustomer = function(min, max){
    this.randomCustomers = [];
    for(var i = 0; i < hoursOpen.length; i++){
    var randomNumber =  Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
    this.randomCustomers.push(randomNumber);
    }
}

Location.prototype.getCookiesPerHour = function(){
    this.cookiesSoldEachHour = [];
    for(var i = 0; i < hoursOpen.length; i++){
        var cookiesEachHour = Math.ceil(this.randomCustomers[i] * this.averageCookies);
        this.cookiesSoldEachHour.push(cookiesEachHour);
    }
}
Location.prototype.calculateTotalCookies = function(){
    this.totalCookies = 0
    for(var i = 0; i < this.cookiesSoldEachHour.length; i++){
        this.totalCookies += this.cookiesSoldEachHour[i];
    }
}

var citySeattle = new Location('Seattle', 23, 65, 6.3);
var cityTokyo = new Location('Tokyo', 3, 24, 1.2);
var cityDubai = new Location('Dubai', 11, 38, 3.7);
var cityLima = new Location('Lima', 2, 16, 4.6);
var cityParis = new Location('Paris', 20, 38, 2.3);

// var LocationNames = [citySeattle, cityTokyo, cityDubai, cityLima, cityParis]

console.log(locations);

//MAKE HEADER ===========================================
function makeHeader(){
    var headerRow = document.createElement('tr');
    myTable.appendChild(headerRow);

    var headerData = document.createElement('td');
    headerData.textContent = 'Location';
    headerRow.appendChild(headerData);
    
    for(var i = 0; i < hoursOpen.length; i++){
        var locationData = document.createElement('th');
        locationData.textContent = hoursOpen[i];
        headerRow.appendChild(locationData);
    }
   //Total
   var headerTotal = document.createElement('th')
   headerTotal.textContent = 'Totals';
   headerRow.appendChild(headerTotal);
}

//MAKE Body ===========================================
Location.prototype.makeLocations = function(){

    this.getRandomCustomer();
    this.getCookiesPerHour();
    this.calculateTotalCookies();


    var locationColumn = document.createElement('tr');
    myTable.appendChild(locationColumn);

    var cityData = document.createElement('td')
    cityData.textContent = this.name;
    locationColumn.appendChild(cityData);

    //DATA
    for(var i = 0; i < hoursOpen.length; i++){
        //make a td
        var cookieData = document.createElement('td');
        //gitve it context
        cookieData.textContent = this.cookiesSoldEachHour[i];
        //append
        locationColumn.appendChild(cookieData);
    }

    var cookiesTotal = document.createElement('td');
    cookiesTotal.textContent = this.totalCookies;
    locationColumn.appendChild(cookiesTotal);
}

// MAKE FOOTER ===========================================
function makeFooter(){
var footerRow = document.createElement('tr');
    myTable.appendChild(footerRow);

    var footerData = document.createElement('td');
    footerData.textContent = 'Total';
    footerRow.appendChild(footerData);
    for(var i =0; i < hoursOpen.length; i++){
        // loop through hours open index and cookiesEachHour for their respected indexs
            var cookieLocation = 0
            var totalTotal = 0
        for(var j = 0; j < locations.length; j++){
            var location = locations[j];
          cookieLocation += location.cookiesSoldEachHour[i];
          totalTotal += location.totalCookies;
        }
            var totalCookieTotal = document.createElement('td');
            totalCookieTotal.textContent = cookieLocation;
            footerRow.appendChild(totalCookieTotal);

    }
    var totalCell = document.createElement('td');
    totalCell.textContent = totalTotal;
    footerRow.appendChild(totalCell);
}


// CALL ALL FUNCTIONS ===============================
 
 







var storeForm = document.getElementById('add-store');

storeForm.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    event.preventDefault();

    var location = event.target.location.value;
    var minCustomers = parseInt(event.target.minCustomers.value);
    var maxCustomers = parseInt(event.target.maxCustomers.value);
    var avgCustomers = parseInt(event.target.avgCustomers.value);
    console.log('hi bri');

var pueblo = new Location(location, minCustomers, maxCustomers, avgCustomers);
    renderAll();
}

function renderAll(){
    var tableClear = document.getElementById('tableData');
    tableClear.innerHTML='';
    makeHeader();
    for(var i = 0; i < locations.length; i++) {
        locations[i].makeLocations();
    }
    makeFooter();
}
    renderAll();

