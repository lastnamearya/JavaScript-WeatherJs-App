// Init Local Storage
const storage = new Storage();

// Get Stored Location Data
const weatherLocation = storage.getLocationData();

// Init UI
const ui = new UI();

// Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

// Init weather Object
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// Change Location Event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  // Change Location
  weather.changeLocation(city, state);

  // Set Location in Local Storage
  storage.setLocationData(city, state);

  // Get and Display weather
  getWeather();

  // Close Modal
  $('#locModal').modal('hide');
})


// weather.changeLocation('Miami', 'FL');

function getWeather() {
  weather.getWeather()
  .then(results => {
    ui.paint(results);
  })
  .catch(err => console.log(err)); 
}
