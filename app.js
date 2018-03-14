// Init weather object
const weather = new Weather('New Delhi', 'INDIA');

// Init UI
const ui = new UI();

// Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);


// weather.changeLocation('Miami', 'FL');

function getWeather() {
  weather.getWeather()
  .then(results => {
    ui.paint(results);
  })
  .catch(err => console.log(results)); 
}
