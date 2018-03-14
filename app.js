// Init weather object
const weather = new Weather('New Delhi', 'INDIA');

// Init UI
const ui = new UI();

// Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location Event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  weather.changeLocation('Miami', 'FL');

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
  .catch(err => console.log(results)); 
}
