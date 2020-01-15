'use strict';

// Declares an array that lists the total hours the stores are open.
var hoursOpen = ['6am ','7am ','8am ','9am ','10am ','11am ','12pm ','1pm ','2pm ','3pm ','4pm ','5pm ','6pm ','7pm '];

// Delcares the sales of all stores for a given hour. Gloably so others can use it.
var totalStoresSalesByHour = [];

// Stores a reference to salesTable;
var salesTable = document.getElementById('table');

// Builds a constructor that will create a template of a store object.
function CookieStore(storeName, minimumGuests, maximumGuests, avgCookies) {
  // Top 3 parameters must have numbers passed to them to allow them to work
  this.minimumGuests = minimumGuests;
  this.maximumGuests = maximumGuests;
  this.avgCookies = avgCookies;

  // Various misc data that will be used for calculations or descriptions.
  this.storeName = storeName;
  this.totalCookies = 0;
  this.cookiesSoldEachHour = [];
  this.range = maximumGuests - minimumGuests + 1;
}

  // Returns the total cookies sold per hour based of guest range and avg cookies sold.
CookieStore.prototype.getCookiesSoldInCurrentHour = function () {
  return Math.round(Math.floor( ( (Math.random() * this.range) + this.minimumGuests)) * this.avgCookies);

};

// Pushes total sales per hour to the array cookiesSoldEachHour.
CookieStore.prototype.generateCookiesSoldEachHour = function () {
  for( var hours = 0; hours < hoursOpen.length; hours++){
    var cookieSalesForCurrentHour = this.getCookiesSoldInCurrentHour();

    // this log should match the log in the calculateTotalCookies method.
    // console.log('current cookie sales for hour : ' + cookieSalesForCurrentHour);
    this.cookiesSoldEachHour.push(cookieSalesForCurrentHour);
  }
};

// Calculates the total cookies it has in it's array. Takes the number in each array index and adds it to the total of totalCookies. Returns the final result of totalCookies.
CookieStore.prototype.calculateTotalCookies = function(){
  for (var eachHour = 0; eachHour < this.cookiesSoldEachHour.length; eachHour++) {
    this.totalCookies += this.cookiesSoldEachHour[eachHour];

    // This should match up with the array in this.cookiesSoldEachHour and should match the numbers in the console log on generateCookiesSoldEachHour.
    // console.log('total Cookies sold: ' + this.totalCookies);
  }

  return this.totalCookies;
};

// Tells the current object to create a table row, create a th to list the store's name, then creates a new td tag with current object's cookies this hour as text content, then creates another th tag at the end with textContent that shows the total cookies that store sold that day.
CookieStore.prototype.createStoreDataRow = function () {

  // Creates a table row and give it a unique id using this.storeName.
  var tableRowForStoresEl = createTableRow();
  tableRowForStoresEl.setAttribute('id',this.storeName);

  // Creates a th table componant,  gives it some attribues and adds the name of the store to it's textContent. It then appends it to the table row.
  tableRowForStoresEl.appendChild(createTableComponent('th', 'class', 'store-names', this.storeName));

  // for each hour open, creates and appends a new table componant representing the store's sales for that hour.
  for (var hour = 0; hour < hoursOpen.length; hour++) {
    tableRowForStoresEl.appendChild(createTableComponent('td','class','hourly-sales', this.cookiesSoldEachHour[hour]));
  }
  // adds the final cell that represents the totalCookies that store sold that day.
  tableRowForStoresEl.appendChild(createTableComponent('th', 'class', 'total-cookies', this.totalCookies));

};

// Deletes an object's table row. When the row was created it was given a name equal to this.storeName. That is how we find the corret table.
CookieStore.prototype.deleteTableDataRow = function () {

  var parentTableEl = document.getElementById('table');
  var childTableRowEl = document.getElementById(this.storeName);
  parentTableEl.removeChild(childTableRowEl);
};

// Generates the stores table in the correct order, and resets some values each time the store is updated.
CookieStore.prototype.populateDataToTable = function () {
  this.totalCookies = 0;
  this.cookiesSoldEachHour = [];
  this.generateCookiesSoldEachHour();
  this.calculateTotalCookies();
  this.createStoreDataRow();
};

// Creates a store object for each store we currently have.
var storeOne = new CookieStore('1st and Pike', 23, 65, 6.3);
var storeTwo = new CookieStore('SeaTac Airport', 3, 24, 1.2);
var storeThree = new CookieStore('Seattle Center', 11, 38, 3.7);
var storeFour = new CookieStore('Capitol Hill', 20, 38, 2.3);
var storeFive = new CookieStore('Alki', 2, 16, 4.6);

// Creates an array to store all of our current stores
var seattleStores = [storeOne,storeTwo,storeThree,storeFour,storeFive];

// ----- THIS SECTION DECLARES ALL OUR FUNCTIONS -----

// ----- Testing functions-----

// This function allows us to store all out tests and debugging in one place.
function methodTesting(){

  console.log(storeOne.getCookiesSoldInCurrentHour());
  console.log(storeOne.generateCookiesSoldEachHour());
  console.log(storeOne.cookiesSoldEachHour);
  console.log('total cookies: ' + storeOne.calculateTotalCookies());
  console.log();
  console.log();
  console.log();
  console.log();
}
// methodTesting();

// -----Functions for creating and manipulating table elements-------

// Creates a new table row.
function createTableRow() {

  var tableRowEl = document.createElement('tr');
  salesTable.appendChild(tableRowEl);
  return tableRowEl;
};

// Creates a new table component that you can specifiy a couple properties of.
function createTableComponent(componenetTag,attributeOne,attributeTwo,componentContent) {
  var tableComponenetEl = document.createElement(componenetTag);
  tableComponenetEl.setAttribute(attributeOne,attributeTwo);
  tableComponenetEl.textContent = componentContent;
  return tableComponenetEl;
}

// Allows a user to delete a table row by passing the row's id to the function.
function deleteTableRow(rowId){
  var parentTableEl = document.getElementById('table');
  var childTableRowEl = document.getElementById(rowId);
  parentTableEl.removeChild(childTableRowEl);
}

// -----Functions that used data from multiple objects -----------

// Adds all stores sales in each hour together and pushes that information to the totalStoresSalesByHour array.
function calulateAllStoresSalesPerHour(){

  // Resets the array each time this runs so the previous totals don't carry over.
  totalStoresSalesByHour = [];

  // For each hour open, declare and reset the total cookies per hour for all stores.
  for (var hour = 0; hour < hoursOpen.length; hour++) {
    var allCookiesPerHour = 0;

    // Then, for each store, add that store's hourly sale to the allCookiesPerHour total.
    for (var store = 0; store < seattleStores.length; store++) {
      allCookiesPerHour += seattleStores[store].cookiesSoldEachHour[hour];
    }

    // Lastly, push the total sales from all store for that hour to the totalStoresSalesByHour array.
    totalStoresSalesByHour.push(allCookiesPerHour);
  }
};

// Adds all the data in the totalStoresSalesByHour array to give us the total daily sales.
function calulateTotalSalesPerDay(){
  var dailySales = 0;
  for (var hour = 0; hour < totalStoresSalesByHour.length; hour++) {

    dailySales += totalStoresSalesByHour[hour];

  }
  return dailySales;
}

//-----Functions needed to create the table.-----

// Creates the top row on the table element we have in our sales.html file.
function createTopLabelRow(){
  // creates a new table row using the function and assign it to a value we can use later.
  var tableTopRow = createTableRow();

  // appends a new table component to the newly created row. (put into two steps for clairity.)
  tableTopRow.appendChild(createTableComponent('th', 'class', 'hours-open', 'Hours Open:'));

  // Adds all the hours to the top of the header based off the number of open hours in the hourOpen array.
  for (var hours = 0; hours < hoursOpen.length; hours++) {
    tableTopRow.appendChild(createTableComponent('th','class','open-hours', hoursOpen[hours]));

    // console.log('test loop');
  };

  tableTopRow.appendChild(createTableComponent('th', 'class', 'daily-sales', 'Daily Sales'));

}

function populateEveryStoresData(){
  for (var store = 0; store < seattleStores.length; store++) {
    var currentStore = seattleStores[store];
    currentStore.populateDataToTable();
  };
};
// Creates the Bottom row on the table element we have in our sales.html file.
function createBottomLabelRow(){

  // creates a new table row using the function and assign it to a value we can use later.
  var tableBottomRow = createTableRow();
  tableBottomRow.setAttribute('id','all-store-totals');
  // appends a new table component to the newly created row. (put into two steps for clairity.)
  tableBottomRow.appendChild(createTableComponent('th', 'id', 'sales-by-hour', 'Sales by hour: '));

  // Adds all stores sales in each hour together and pushes that information to the totalStoresSalesByHour array.
  calulateAllStoresSalesPerHour();

  for (var hour = 0; hour < hoursOpen.length; hour++) {
    tableBottomRow.appendChild(createTableComponent('th','class','total-hourly-sales', totalStoresSalesByHour[hour]));
  }
  var dailySales = calulateTotalSalesPerDay();
  tableBottomRow.appendChild(createTableComponent('th', 'id', 'total-sales-per-day', dailySales));
}

// -------THIS FUNCTION IS WHAT IS USED TO CREATE THE TABLE ------

function createTableWithStoreData(){
  createTopLabelRow();
  populateEveryStoresData();
  createBottomLabelRow();
};

createTableWithStoreData(); // calling to make sure the table is created.

// ------- Listners and their functions -----

//----- New Store form listner ----

// Makes a listner that will allow us to take a user's input to create another store.
var storeFormEl = document.getElementById('new-store-form');
storeFormEl.addEventListener('submit', addAnotherStore);

function addAnotherStore(event){
  event.preventDefault();  // stops page reload.
  event.stopPropagation(); // stops bubbling.

  // stores the values of the user's inputs.
  var storeName = event.target.storeName.value;
  var minGuests = parseInt(event.target.minGuests.value);
  var maxGuests = parseInt(event.target.maxGuests.value);
  var avgCookies = parseFloat(event.target.avgCookies.value);

  // console.log('storeName: ', storeName);
  // console.log('Minimum Guests : ' , minGuests);
  // console.log('Maximum Guests : ' , maxGuests);
  // console.log('Average Cookies: ' , avgCookies);

  // ------------------Begin Input validation-------------

  // First checks to make sure something was entered. Then checks if that store already exsits. If it does exsit it flips the storeAlreadyExsits flag to true, which means the next if statement will alert the user that it exsits already and to enter new values. If it passes then the user goes onto other input validation and edgecase Checks. If user passes all of them then it takes the information and adds another store.

  if(storeName !== ''){
    var storeAlreadyExsits = false;

    for (var stores = 0; stores < seattleStores.length; stores++){
      if(storeName.toUpperCase() === seattleStores[stores].storeName.toUpperCase()){
        storeAlreadyExsits = true;
      }
    }

    if(storeAlreadyExsits === false){

      // Tricky logic here. Basically this is says " If the value of minGuests is a number, move forward" else alert to eneter a number. "
      if( !isNaN(minGuests) && minGuests >= 0){

        if(!isNaN(maxGuests)){

          if(minGuests <= maxGuests){

            if(!isNaN(avgCookies) && avgCookies > 0){

              // User passed all checks. Inputs are used to create a new object and pushes that object to the seattleStores array, and also populates that new store's data with it's very own method.

              var store = new CookieStore(storeName, minGuests, maxGuests, avgCookies);

              seattleStores.push(store);

              deleteTableRow('all-store-totals');
              store.populateDataToTable();
              createBottomLabelRow();
              // Begins the else statements for each check. Alerts the user to what exactly went wrong.

            } else{
              alert('Please enter a number for average cookies!');
            }

          } else {
            alert('Please make sure that Minimum Guests is less than or equal to Maximum Guests!');
          }

        } else{
          alert('Please enter a number for Maximum Guests!');
        }

      } else{
        alert('Please enter a number for  Minimum Guests!');
      }

    } else{
      alert('This store already exsits! Please enter a new store!');
    }

  } else{
    alert('Please enter a new Store Name!');
  }// ------ End Input validation. ------

} //End addAnotherStore Fucntion.

// ----- Update Store from listner -----

// Makes a listner that will allow us to take a store name a user submitted and update that store's information.
var updateStoreFormEl = document.getElementById('update-store-form');
updateStoreFormEl.addEventListener('submit', updateStore);

function updateStore(event){
  event.preventDefault();
  event.stopPropagation();

  var searchStoreName = event.target.updateStoreData.value;
  for (var stores = 0; stores < seattleStores.length; stores++) {
    if(searchStoreName.toUpperCase() === seattleStores[stores].storeName.toUpperCase()){
      // console.log('value of storeName:' , searchStoreName);
      // console.log('value of matched store: ' , seattleStores[stores].storeName);
      // console.log('Looks like we have a match with: ' , seattleStores[stores].storeName);

      var store = seattleStores[stores];

      // Deletes the current table row, alerts the user that the action was successful.
      store.deleteTableDataRow();
      alert('The ' + store.storeName + ' store has been updated!' );

      // Deletes the total sales table row. ( the bottom row showing all sales per hour.)
      deleteTableRow('all-store-totals');

      // creates the store data row first then adds the new bottom row at the bottom.
      store.populateDataToTable();
      createBottomLabelRow();
    }
  }
}