var cityList =$("#city-list");
var cities = [];
var key = "3b00792e1f1cf1ad29b9224675a2e122";

//Format for day
function FormatDay(date){
  var date = new Date();
  console.log(date);
  var month = date.getMonth()+1;
  var day = date.getDate();
  
  var dayOutput = date.getFullYear() + '/' +
      (month<10 ? '0' : '') + month + '/' +
      (day<10 ? '0' : '') + day;
  return dayOutput;
}



// function init();
init();

//plug init into  function();
function init(){
  //It stores cities from localStorage
  //analyze  JSON string onto a object
  var storedCities = JSON.parse(localStorage.getItem("cities"));

  // If cities were retrieved from localStorage, update the cities array to it
  if (storedCities !== null) {
      cities = storedCities;
    }
  // give the cities to the DOM
  renderCities();
  // console.log(cities);
}

//Function StoreCities()
function storeCities(){
 // Stringify and set "cities" key in localStorage to cities array
localStorage.setItem("cities", JSON.stringify(cities));
console.log(localStorage);
}

//Function renderCities()
function renderCities() {



